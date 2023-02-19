import { Collection } from '@planetadeleste/vue-mc';
import OrderPosition from '@/models/OrderPosition';
import { Response } from '@planetadeleste/vuemc';
import { OrderPositionData } from '@/types';

export default class OrderPositionCollection extends Collection<OrderPosition> {
  model(): typeof OrderPosition {
    return OrderPosition;
  }

  routes(): Record<string, any> {
    return {
      fetch: 'orders.position'
    };
  }

  async list(): Promise<Response<OrderPositionData[]>> {
    return await this.createCustomRequest('list');
  }
}
