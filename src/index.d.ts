import '@planetadeleste/vue-mc';
import '@planetadeleste/vue-mc-shopaholic';
import { Collection, Model } from '@planetadeleste/vue-mc';
import { RequestOptions, Response } from 'vue-mc';
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
  OrderStatsResponse,
  PaymentMethodData,
  StatusData,
  TotalPriceContainerData
} from './types';

export type ResponseResult<T> = Response<T>;

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

  stats(): Promise<Response<OrderStatsResponse>>;
}

class OrderCollection extends Collection<Order> {
  list(): Promise<Response<OrderData[]>>;
}

interface PaymentMethod extends Model, PaymentMethodData {}

class PaymentMethod extends Model {}

class PaymentMethodCollection extends Collection<PaymentMethod> {
  list(): Promise<Response<PaymentMethodData[]>>;
}

interface Status extends Model, StatusData {}

class Status extends Model {}

class StatusCollection extends Collection<Status> {
  list(): Promise<Response<StatusData[]>>;
}

interface OrderPosition extends Model, OrderPositionData {}

class OrderPosition extends Model {}

class OrderPositionCollection extends Collection<OrderPosition> {
  list(): Promise<Response<OrderPositionData[]>>;
}

export {
  Cart,
  CartComponentAddData,
  CartComponentAddItemData,
  CartComponentItemsData,
  CartComponentPositionData,
  CartComponentRemoveData,
  CartData,
  CartPositionData,
  ItemPriceData,
  MakeOrderResponseData,
  Order,
  OrderCollection,
  OrderData,
  OrderPosition,
  OrderPositions,
  OrderPositionData,
  OrderRequestData,
  OrderRequestOrderData,
  OrderRequestUserData,
  OrderStatsResponse,
  PaymentMethod,
  PaymentMethods,
  PaymentMethodData,
  Status,
  Statuses,
  StatusData,
  TotalPriceContainerData
};
