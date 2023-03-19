/**
 * Models and Collections for OrdersShopaholic plugin
 *
 * @author Alvaro Canepa <bfpdevel@gmail.com>
 */

// COLLECTIONS
import OrderCollection from './collections/OrderCollection';
import PaymentMethodCollection from './collections/PaymentMethodCollection';
import StatusCollection from './collections/StatusCollection';
import OrderPositionCollection from './collections/OrderPositionCollection';
import ShippingTypeCollection from './collections/ShippingTypeCollection';

// MODELS
import Cart from './models/Cart';
import Order from './models/Order';
import PaymentMethod from './models/PaymentMethod';
import Status from './models/Status';
import OrderPosition from './models/OrderPosition';
import ShippingType from './models/ShippingType';

export {
  Cart,
  Order,
  OrderCollection,
  OrderPosition,
  OrderPositionCollection,
  PaymentMethod,
  PaymentMethodCollection,
  ShippingType,
  ShippingTypeCollection,
  Status,
  StatusCollection
};
