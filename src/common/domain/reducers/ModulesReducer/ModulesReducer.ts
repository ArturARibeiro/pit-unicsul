import type {ModulesReducerActions, ModulesState} from "./ModulesReducer.types";

const ModulesReducer = (state: ModulesState, action: ModulesReducerActions): ModulesState => {
  switch (action.type) {
    case 'SET_MODULES':
      return { ...state, routes: action.routes, providers: action.providers, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export default ModulesReducer;