import { Collection } from '@planetadeleste/vue-mc';
import { Response } from '@planetadeleste/vuemc';
import Order from '../models/Order';
import { OrderData } from '@/types';

export default class OrderCollection extends Collection<Order> {
  model(): typeof Order {
    return Order;
  }

  routes(): Record<string, any> {
    return {
      fetch: 'orders.index',
      list: 'orders.list'
    };
  }

  async list(): Promise<Response<OrderData[]>> {
    return await this.createCustomRequest('list');
  }
}
