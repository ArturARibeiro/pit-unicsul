export {default as LandingPageFallback} from './LandingPage.fallback'

export default async function () {
  const [Component, Fallback, loader] = await Promise.all([
    import('./LandingPage'),
    import('./LandingPage.fallback'),
    import('./LandingPage.loader'),
  ])

  return {
    Component: Component.default,
    HydrateFallback: Fallback.default,
    loader: loader.default,
  }
}