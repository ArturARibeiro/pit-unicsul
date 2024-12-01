export {default as ProductPageFallback} from './ProductPage.fallback';
export {default as loader} from './ProductPage.loader';

export default async function () {
  const [Component, Fallback, loader] = await Promise.all([
    import('./ProductPage'),
    import('./ProductPage.fallback'),
    import('./ProductPage.loader'),
  ])

  return {
    Component: Component.default,
    HydrateFallback: Fallback.default,
    loader: loader.default,
  }
}