import { Collection } from "@planetadeleste/vue-mc";
import PaymentMethod from "../models/PaymentMethod";

export default class PaymentMethods extends Collection<PaymentMethod> {
  model(): typeof PaymentMethod {
    return PaymentMethod;
  }

  routes(): Record<string, any> {
    return {
      fetch: "paymentmethods.index"
    };
  }
}
