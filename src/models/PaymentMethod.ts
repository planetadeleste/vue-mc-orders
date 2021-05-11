import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class PaymentMethod extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      name: null,
      code: null,
      preview_text: null,
      restriction: null
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: "paymentmethods.show",
      create: "paymentmethods.store",
      update: "paymentmethods.update",
      delete: "paymentmethods.destroy"
    };
  }
}
