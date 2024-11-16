import type {ModuleProvider} from "@modules/common/types/module";

// Providers
import AuthProvider from "@modules/authentication/domain/providers/AuthProvider";
import CartProvider from "@modules/cart/domain/providers/CartProvider";

const providers: ModuleProvider[] = [
  AuthProvider,
  CartProvider,
]

export default providers;