import type {RouteParams} from "@modules/common/types/route";

export interface ProductPageRouteParams extends RouteParams {
  product_id?: string;
}