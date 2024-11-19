import {Suspense, useEffect, useReducer} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Types
import type {ModuleRoute} from '@common/types/module';

// Contexts
import ModulesContext from "@common/domain/contexts/ModulesContext";

// Reducers
import modulesReducer from "@common/domain/reducers/ModulesReducer";

// High-Order-Components
import withNestedComponents from "@common/presentation/hocs/withNestedComponents";
import Protected from "@modules/authentication/presentation/components/Protected";


const ModulesProvider = () => {
  const [{ routes, providers, loading }, dispatch] = useReducer(modulesReducer, {
    routes: [],
    providers: [],
    loading: true,
  });

  const ProvidedRouter = withNestedComponents(RouterProvider, providers);

  const loadModulesAndProviders = async () => {
    dispatch({ type: 'SET_LOADING', loading: true });

    const [modulesResponse, providersResponse] = await Promise.all([
      import('@bootstrap/modules'),
      import('@bootstrap/providers')
    ]);

    const modules = modulesResponse.default;
    const providers = providersResponse.default;

    const routes = Object.values(
      modules.reduce((routesMap: { [key: string]: ModuleRoute }, module) => {
        module.routes.forEach(route => {
          const layoutKey = route.layout?.displayName || route.layout?.name || 'default';

          if (!routesMap[layoutKey]) {
            routesMap[layoutKey] = { Component: route.layout, children: [] };
          }

          if (route.protected && route.Component) {
            route.Component = withNestedComponents(route.Component, [
              Protected,
            ])
          }

          routesMap[layoutKey].children?.push(route);
        });

        return routesMap;
      }, {})
    );

    dispatch({ type: 'SET_MODULES', routes, providers });
  };

  useEffect(() => {
    loadModulesAndProviders();
  }, []);

  return (
    <ModulesContext.Provider value={{}}>
      <Suspense fallback={<h1>loading...</h1>}>
        {!loading && <ProvidedRouter router={createBrowserRouter(routes)} />}
      </Suspense>
    </ModulesContext.Provider>
  );
};

export default ModulesProvider;