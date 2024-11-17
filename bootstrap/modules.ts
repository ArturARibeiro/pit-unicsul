import type {Module} from "@modules/common/types/module";

// Modules
import AuthenticationModule from "@modules/authentication/module.ts";
import ApplicationModule from "@modules/application/module.ts";
import ProductModule from "@modules/product/module.ts";
import CheckoutModule from "@modules/checkout/module.ts";
import CategoryModule from "@modules/category/module.ts";
import OrderModule from "@modules/order/module.ts";

const modules: Module[] = [
  AuthenticationModule,
  ApplicationModule,
  ProductModule,
  CheckoutModule,
  CategoryModule,
  OrderModule,
]

export default modules;