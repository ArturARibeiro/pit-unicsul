import type {ModuleProvider, ModuleRoute} from "@common/types/module";

export type ModulesReducerActions =
  | { type: 'SET_MODULES', routes: ModuleRoute[], providers: ModuleProvider[] }
  | { type: 'SET_LOADING', loading: boolean };

export type ModulesState = {
  routes: ModuleRoute[];
  providers: ModuleProvider[];
  loading: boolean;
};