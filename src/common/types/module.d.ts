import type {RouteObject} from 'react-router-dom';
import type {ComponentType, ReactNode} from "react";

export declare type Module = {
  name: string;
  routes:  ModuleRoute[]
}

export declare type ModuleRoute = RouteObject & {
  layout?: ComponentType;
  protected?: boolean;
}

export declare type ModuleProvider = ComponentType<{
  children: ReactNode,
}>