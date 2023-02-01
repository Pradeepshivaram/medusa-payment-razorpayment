import { 
    AbstractPaymentService, PaymentContext, Data, 
    Payment, PaymentSession, PaymentSessionStatus, 
    PaymentSessionData, Cart, PaymentData,
    PaymentSessionResponse, 
    CustomerService,
    Customer} from "@medusajs/medusa";
import { CreateCustomerInput } from "@medusajs/medusa/dist/types/customers";
import Razorpay from 'razorpay';
import { EntityManager } from "typeorm";

enum razorpaySatus {
    PROCESSING = "processing"
}

type RazorPaymentSessionStatus = PaymentSessionStatus | razorpaySatus;


class RazorpaymentProviderService extends AbstractPaymentService {
    static identifier = 'razorpayment';

    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    private _options: any;
    private _razorpay;
    private _customerService: CustomerService;
    constructor(container, options){
        super(container);
        this._options = options;

        this._razorpay = new Razorpay({
            key_id: options.key_id,
            key_secret: options.key_secret
        });

        this._customerService = container.customerService;
    }

    async createRazorpayCustomer(customer: any): Promise<any> {
        try {
            const razorpayCustomer = this._razorpay.customers.create({
                email: customer.email
            });

            if (customer.id) { // NOTE: Remove it after verifying, I think, this is not required as customer_metadata would be updated as part of update_requests of createpayment
                await this._customerService.update(customer.id, {
                  metadata: { razorpay_id: razorpayCustomer.id },
                });
            }
            return razorpayCustomer;
        }catch (error) {
            throw error;
        }
    }

    async updateRazorpayCustomer(customer: any): Promise<any> {
        //TODO: implement the updated razorpay customer
    }

    async createOrder(context: PaymentContext): Promise<any> {
        const { amount, resource_id, currency_code, cart, customer, cart:{email} } = context;
        const orderReqData: any = {
            amount: Math.round(amount),
            currency: currency_code,
            notes: {
                cart_id: `${cart.id}`
            }
        }
        if(customer) {
            if(customer.metadata.razorpay_id){
                orderReqData.notes.customer_id = customer.metadata.razorpay_id;
            }else {
                const razorPayCustomer = await this.createRazorpayCustomer(customer);
                orderReqData.notes.customer_id = razorPayCustomer.id;
            }
        } else {
            const razorPayCustomer = await this.createRazorpayCustomer({
                email : email
            });
            orderReqData.notes.customer_id = razorPayCustomer.id;
        }
        return await this._razorpay.orders.create(orderReqData);
    }


    async createPayment(context: Cart & PaymentContext):Promise<PaymentSessionResponse> {
        const razorpayOrderResponse = await this.createOrder(context);
        const paymentResponse: PaymentSessionResponse  = {
            session_data: razorpayOrderResponse,
            update_requests: {
                customer_metadata: { razorpay_id: razorpayOrderResponse.id }
            }
        }
        return Promise.resolve(paymentResponse);
    }

    async retrievePayment(paymentData: Data): Promise<Data> {
        try{
            return await this._razorpay.orders.fetch(paymentData.id);
        } catch (error){
            throw error;
        }
    }

    async getStatus(paymentData: Data): Promise<PaymentSessionStatus> {
        const { id } = paymentData;
        const razorpayOrder = this._razorpay.orders.fetch(id);

        switch(razorpayOrder.status){
            case "created":
                return PaymentSessionStatus.PENDING;
            case "paid":
                return PaymentSessionStatus.AUTHORIZED;
            case "attempted":
                return PaymentSessionStatus.REQUIRES_MORE;
            default:
                return PaymentSessionStatus.PENDING;
        }
    }

    async updatePayment( paymentSessionData: PaymentSessionData, cart: Cart ): Promise<PaymentSessionData> {
        return {}
    }

    async updatePaymentData( paymentSessionData: PaymentSessionData, data: Data): Promise<PaymentSessionData> {
        return {}
    }

    async deletePayment(paymentSession: PaymentSession): Promise<void> {
        return
    }

    async authorizePayment( paymentSession: PaymentSession, context: Data ): Promise<{ data: PaymentSessionData; status: PaymentSessionStatus }> {
        return {
          status: PaymentSessionStatus.AUTHORIZED,
          data: {
            id: "test"
          },
        }
    }

    async getPaymentData(paymentSession: PaymentSession): Promise<Data> {
        return paymentSession.data
    }

    async capturePayment(payment: Payment): Promise<Data> {
        return {
          status: "captured"
        }
    }

    async refundPayment( payment: Payment, refundAmount: number ): Promise<Data> {
        return {
          id: "test"
        }
    }

    async cancelPayment(payment: Payment): Promise<Data> {
        return {
          id: "test"
        }
    }

}

export default RazorpaymentProviderService