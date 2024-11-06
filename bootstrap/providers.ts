import type {ModuleProvider} from "@modules/common/types/module";

// Providers
import CartProvider from "@modules/cart/domain/providers/CartProvider";

const providers: ModuleProvider[] = [
  CartProvider,
]

export default providers;