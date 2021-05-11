import { Collection } from "@planetadeleste/vue-mc";
import Order from "../models/Order";

export default class Orders extends Collection<Order> {
  model(): typeof Order {
    return Order;
  }

  routes(): Record<string, any> {
    return {
      fetch: "orders.index"
    };
  }
}
