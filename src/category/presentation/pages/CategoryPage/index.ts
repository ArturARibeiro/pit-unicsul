export default async function () {
  const [Component, loader] = await Promise.all([
    import('./CategoryPage'),
    import('./CategoryPage.loader')
  ]);

  return {
    Component: Component.default,
    loader: loader.default,
  }
}