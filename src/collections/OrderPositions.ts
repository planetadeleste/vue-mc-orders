import { Collection } from "@planetadeleste/vue-mc";
import OrderPosition from "@/models/OrderPosition";

export default class OrderPositions extends Collection<OrderPosition> {
  defaults(): Record<string, any> {
    return {
      id: null,
      secret_key: null,
    };
  }

  model(): typeof OrderPosition {
    return OrderPosition;
  }

  routes(): Record<string, any> {
    return {
      fetch: "orders.position",
    };
  }
}
