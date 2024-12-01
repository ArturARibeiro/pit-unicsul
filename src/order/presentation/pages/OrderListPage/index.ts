export default async function () {
  const [Component, loader] = await Promise.all([
    import('./OrderListPage'),
    import('./OrderListPage.loader')
  ]);

  return {
    Component: Component.default,
    loader: loader.default,
  }
}