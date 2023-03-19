import { Model } from '@planetadeleste/vue-mc';
import { toNumber } from 'lodash';
import { ShippingTypeData } from '@/types';

export default class ShippingType extends Model {
  defaults(): Record<keyof ShippingTypeData, any> {
    return {
      id: null,
      api_class: null,
      code: null,
      created_at: null,
      preview_text: null,
      price_value: null,
      property: [],
      updated_at: null,
      name: null
    };
  }

  mutations(): Record<string, any> {
    return {
      id: (id: string) => toNumber(id) || null
    };
  }

  validation(): Record<string, any> {
    return {};
  }

  routes(): Record<string, any> {
    return {
      fetch: 'shippingtypes.show',
      create: 'shippingtypes.store',
      update: 'shippingtypes.update',
      delete: 'shippingtypes.destroy'
    };
  }
}
