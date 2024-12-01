import type {ModuleProvider} from "@modules/common/types/module";

// Providers
import NotificationProvider from "@modules/notification/domain/providers/NotificationProvider";
import AuthProvider from "@modules/authentication/domain/providers/AuthProvider";
import CartProvider from "@modules/cart/domain/providers/CartProvider";

const providers: ModuleProvider[] = [
  AuthProvider,
  NotificationProvider,
  CartProvider,
]

export default providers;