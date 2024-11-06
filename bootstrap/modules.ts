import type {Module} from "@modules/common/types/module";

// Modules
import ApplicationModule from "@modules/application/module.ts";
import ProductModule from "@modules/product/module.ts";

const modules: Module[] = [
  ApplicationModule,
  ProductModule,
]

export default modules;