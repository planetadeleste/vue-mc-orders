import OrderPositions from "@/collections/OrderPositions";
import { Model } from "@planetadeleste/vue-mc";
import { StatResponse } from "@planetadeleste/vue-mc-shopaholic";
import { toNumber } from "lodash";
import { Response } from "vue-mc";
import { OrderPositionData } from "../types/OrderPosition";

export default class Order extends Model {
  defaults(): Record<string, any> {
    return {
      id: null,
      currency_id: null,
      status_id: null,
      transaction_id: null,
      user_id: null,
      discount_position_total_price: null,
      discount_position_total_price_value: null,
      discount_shipping_price: null,
      discount_shipping_price_value: null,
      discount_total_price: null,
      discount_total_price_value: null,
      old_position_total_price: null,
      old_position_total_price_value: null,
      old_shipping_price: null,
      old_shipping_price_value: null,
      old_total_price: null,
      old_total_price_value: null,
      order_number: null,
      order_position_id: null,
      order_promo_mechanism_id: null,
      payment_data: null,
      payment_method: null,
      payment_method_id: null,
      payment_response: null,
      payment_token: null,
      position_total_price: null,
      position_total_price_value: null,
      property: null,
      secret_key: null,
      shipping_price: null,
      shipping_price_value: null,
      shipping_tax_percent: null,
      shipping_type_id: null,
      status: null,
      total_price_value: null,
      weight: null,
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null,
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  options(): Record<string, any> {
    return {
      methods: {
        position: "GET",
      },
    };
  }

  routes(): Record<string, any> {
    return {
      fetch: "orders.show",
      create: "orders.create",
      update: "orders.update",
      delete: "orders.destroy",
      stats: "orders.stats",
    };
  }

  async loadPosition(): Promise<void> {
    const obOrderPositions = new OrderPositions();
    obOrderPositions.set({ id: this.id, secret_key: this.secret_key });
    const obResponse: Response<OrderPositionData[]> | null =
      await obOrderPositions.fetch();

    if (!obResponse) {
      return;
    }

    const obPosition = obResponse.getData().data;
    this.set("order_position", obPosition);
  }

  async stats(): Promise<Response<StatResponse>> {
    return await this.createCustomRequest("stats");
  }
}
