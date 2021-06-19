import { Model } from "@planetadeleste/vue-mc";
import { toNumber } from "lodash";

export default class OrderPosition extends Model {
  defaults(): Record<string, any> {
    return {};
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: "orders.position",
      create: "orders.positions.create",
      update: "orders.positions.update",
      delete: "orders.positions.destroy",
    };
  }
}
