import "@planetadeleste/vue-mc";
import "@planetadeleste/vue-mc-shopaholic";
import { RequestOptions } from "vue-mc";
import {
  CartComponentAddData,
  CartComponentAddItemData,
  CartComponentItemsData,
  CartComponentPositionData,
  CartComponentRemoveData,
  CartData,
  CartPositionData,
  ItemPriceData,
  MakeOrderResponseData,
  OrderData,
  OrderPositionData,
  OrderRequestData,
  OrderRequestOrderData,
  OrderRequestUserData,
  PaymentMethodData,
  StatusData,
  TotalPriceContainerData,
} from "./types";

declare module "@planetadeleste/vue-mc-orders" {
  import { StatResponse } from "@planetadeleste/vue-mc-shopaholic";
  import { Model, Collection } from "@planetadeleste/vue-mc";
  import { Response } from "vue-mc";
  export type ResponseResult<T> = Response<T>;

  export {
    CartComponentAddData,
    CartComponentAddItemData,
    CartComponentItemsData,
    CartComponentPositionData,
    CartComponentRemoveData,
    CartData,
    CartPositionData,
    ItemPriceData,
    MakeOrderResponseData,
    OrderData,
    OrderPositionData,
    OrderRequestData,
    OrderRequestOrderData,
    OrderRequestUserData,
    PaymentMethodData,
    StatusData,
    TotalPriceContainerData,
  };

  interface Cart extends Model, CartData {}
  class Cart extends Model {
    getData(): Promise<ResponseResult<CartData>>;

    /**
     * @description Add offers to cart
     * @author Alvaro Canepa <bfpdevel@gmail.com>
     * @param {CartComponentAddData} obData
     * @return {*}  {Promise<ResponseResult<CartComponentItemsData>>}
     * @memberof Cart
     */
    add(
      obData: CartComponentAddData
    ): Promise<ResponseResult<CartComponentItemsData>>;
    add(
      obData: CartComponentAddData,
      bReturnData: true
    ): Promise<ResponseResult<CartData>>;

    /**
     * @description Updates quantity of offers in cart
     * @author Alvaro Canepa <bfpdevel@gmail.com>
     * @param {CartComponentAddData} obData
     * @param {Boolean} bReturnData
     * @return {*}  {GetCartResponseType<T>}
     * @memberof Cart
     */
    update(
      obData: CartComponentAddData
    ): Promise<ResponseResult<CartComponentItemsData>>;
    update(
      obData: CartComponentAddData,
      bReturnData: true
    ): Promise<ResponseResult<CartData>>;

    /**
     * @description Removes positions from cart by offer ID or cart position ID
     * @author Alvaro Canepa <bfpdevel@gmail.com>
     * @param {CartComponentRemoveData} obData
     * @param {Boolean} bReturnData
     * @return {*}  {GetCartResponseType<T>}
     * @memberof Cart
     */
    remove(
      obData: CartComponentRemoveData
    ): Promise<ResponseResult<CartComponentItemsData>>;
    remove(
      obData: CartComponentRemoveData,
      bReturnData: true
    ): Promise<ResponseResult<CartData>>;

    /**
     * @description Get cart items
     * @author Alvaro Canepa <bfpdevel@gmail.com>
     * @return {*}  {Promise<ResponseResults<CartComponentItemsData>>}
     * @memberof Cart
     */
    getItems(): Promise<ResponseResult<CartComponentItemsData>>;
  }

  interface Order extends Model, OrderData {}
  class Order extends Model {
    loadPosition(): Promise<void>;
    store(
      options?: RequestOptions
    ): Promise<Response<MakeOrderResponseData | any> | null>;
    stats(): Promise<Response<StatResponse>>;
  }
  export class Orders extends Collection<Order> {}

  interface PaymentMethod extends Model, PaymentMethodData {}
  class PaymentMethod extends Model {}
  export class PaymentMethods extends Collection<PaymentMethod> {}

  interface Status extends Model, StatusData {}
  class Status extends Model {}
  export class Statuses extends Collection<Status> {}

  interface OrderPosition extends Model, OrderPositionData {}
  class OrderPosition extends Model {}
  export class OrderPositions extends Collection<OrderPosition> {
    id: number;
    secret_key: string;
  }

  export { Cart, Order, OrderPosition, PaymentMethod, Status };
}
