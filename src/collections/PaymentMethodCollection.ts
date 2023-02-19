import { Collection } from '@planetadeleste/vue-mc';
import PaymentMethod from '../models/PaymentMethod';
import { Response } from '@planetadeleste/vuemc';
import { PaymentMethodData } from '@/types';

export default class PaymentMethodCollection extends Collection<PaymentMethod> {
  model(): typeof PaymentMethod {
    return PaymentMethod;
  }

  routes(): Record<string, any> {
    return {
      fetch: 'paymentmethods.index'
    };
  }

  async list(): Promise<Response<PaymentMethodData[]>> {
    return await this.createCustomRequest('list');
  }
}
