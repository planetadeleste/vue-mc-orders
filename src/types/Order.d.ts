import { UserAddressData } from "@planetadeleste/vue-mc-shopaholic";
import { RequestOptions, Response } from "vue-mc";
import { StatusData } from "./Status";
import { OrderPositionData } from "./OrderPosition";

export interface OrderData {
  id: number;
  currency_id: number;
  status_id: number;
  transaction_id: number;
  user_id: number;
  payment_method_id: number;
  shipping_type_id: number;
  order_position_id: number[];
  order_promo_mechanism_id: number[];

  created_at: string;
  updated_at: string;
  order_number: string;
  property: Record<string, any>;
  secret_key: string;
  status: StatusData;
  weight: number;
  order_position?: OrderPositionData[];

  discount_position_total_price?: string;
  discount_position_total_price_value?: number;
  discount_shipping_price?: string;
  discount_shipping_price_value?: number;
  discount_total_price?: string;
  discount_total_price_value?: number;

  old_position_total_price?: string;
  old_position_total_price_value?: number;
  old_shipping_price?: string;
  old_shipping_price_value?: number;
  old_total_price?: string;
  old_total_price_value?: number;

  payment_data: Record<string, any>;
  payment_method?: number;
  payment_response?: number;
  payment_token?: string;

  position_total_price: string;
  position_total_price_value: number;

  total_price: string;
  total_price_value: number;

  shipping_price?: string;
  shipping_price_value?: number;
  shipping_tax_percent?: number;

  store(
    options: RequestOptions = {}
  ): Promise<Response<MakeOrderResponseData | any> | null>;
}

export interface OrderRequestOrderData {
  payment_method_id?: number;
  shipping_type_id?: number;
  shipping_price?: number;
  property?: Record<string, any>;
}

export interface OrderRequestUserData {
  [key: string]: any;
  email: string;
  name: string;
}

export interface OrderRequestData {
  order: OrderRequestOrderData;
  user: OrderRequestUserData;
  shipping_address: UserAddressData;
  billing_address: UserAddressData;
}

export interface MakeOrderResponseData {
  id: number;
  number: string;
  key: string;
}
