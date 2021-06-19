/**
 * Models and Collections for OrdersShopaholic plugin
 *
 * @author Alvaro Canepa <bfpdevel@gmail.com>
 */

// COLLECTIONS
import Orders from "./collections/Orders";
import PaymentMethods from "./collections/PaymentMethods";
import Statuses from "./collections/Statuses";
import OrderPositions from "./collections/OrderPositions";

export { Orders, PaymentMethods, Statuses, OrderPositions };

// MODELS
import Cart from "./models/Cart";
import Order from "./models/Order";
import PaymentMethod from "./models/PaymentMethod";
import Status from "./models/Status";
import OrderPosition from "./models/OrderPosition";

export { Cart, Order, PaymentMethod, Status, OrderPosition };
