export default async function () {
  const [Component, loader] = await Promise.all([
    import('./OrderPage'),
    import('./OrderPage.loader')
  ])

  return {
    Component: Component.default,
    loader: loader.default,
  }
}