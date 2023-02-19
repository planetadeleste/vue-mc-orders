import { Collection } from '@planetadeleste/vue-mc';
import Status from '../models/Status';
import { Response } from '@planetadeleste/vuemc';
import { StatusData } from '@/types';

export default class StatusCollection extends Collection<Status> {
  model(): typeof Status {
    return Status;
  }

  routes(): Record<string, any> {
    return {
      fetch: 'orders.status.index',
      list: 'orders.status.list'
    };
  }

  async list(): Promise<Response<StatusData[]>> {
    return await this.createCustomRequest('list');
  }
}
