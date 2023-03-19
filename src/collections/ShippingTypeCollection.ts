import { Collection } from '@planetadeleste/vue-mc';
import ShippingType from '@/models/ShippingType';
import { Response } from '@planetadeleste/vuemc';
import { ShippingTypeData } from '@/types';

export default class ShippingTypeCollection extends Collection<ShippingType> {
  model(): typeof ShippingType {
    return ShippingType;
  }

  routes(): Record<string, any> {
    return {
      fetch: 'shippingtypes.index',
      list: 'shippingtypes.list'
    };
  }

  async list(): Promise<Response<ShippingTypeData[]>> {
    return await this.createCustomRequest('list');
  }
}
