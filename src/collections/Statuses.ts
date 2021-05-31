import { Collection } from "@planetadeleste/vue-mc";
import Status from "../models/Status";

export default class Statuses extends Collection<Status> {
  model(): typeof Status {
    return Status;
  }

  routes(): Record<string, any> {
    return {
      fetch: "orders.status.index"
    };
  }
}
