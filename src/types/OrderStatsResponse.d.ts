import { StatResponse } from "@planetadeleste/vue-mc-shopaholic";
export interface OrderStatsResponse extends StatResponse {
  status: Record<string, number>;
}
