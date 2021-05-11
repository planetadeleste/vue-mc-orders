import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class Status extends Model {
  defaults(): Record<string, any> {
    return {
      id: null
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
      fetch: "orders.show",
      create: "orders.store",
      update: "orders.update",
      delete: "orders.destroy"
    };
  }
}
