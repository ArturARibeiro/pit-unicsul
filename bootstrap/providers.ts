import type {ModuleProvider} from "@modules/common/types/module";

// Providers
import NotificationProvider from "@modules/notification/domain/providers/NotificationProvider";
import AuthProvider from "@modules/authentication/domain/providers/AuthProvider";
import CartProvider from "@modules/cart/domain/providers/CartProvider";

const providers: ModuleProvider[] = [
  NotificationProvider,
  AuthProvider,
  CartProvider,
]

export default providers;