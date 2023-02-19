import { Model } from '@planetadeleste/vue-mc';
import { toNumber } from 'lodash';

export default class Status extends Model {
  defaults(): Record<string, any> {
    return {
      id: null
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
      fetch: 'orders.status.show',
      create: 'orders.status.store',
      update: 'orders.status.update',
      delete: 'orders.status.destroy'
    };
  }
}
