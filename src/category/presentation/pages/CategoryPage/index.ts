export {default as CategoryPageFallback} from './CategoryPage.fallback';
export {default as loader} from './CategoryPage.loader';

export default async function () {
  const [Component, Fallback, loader] = await Promise.all([
    import('./CategoryPage'),
    import('./CategoryPage.fallback'),
    import('./CategoryPage.loader'),
  ]);

  return {
    Component: Component.default,
    HydrateFallback: Fallback.default,
    loader: loader.default,
  }
}