import {ComponentType, ReactNode, Suspense} from 'react';

interface WithSuspenseProps {
  fallback?: ReactNode;
}

/**
 * HOC para envolver componentes com React Suspense.
 * @template P - Tipos de props do componente que será envolvido.
 * @param WrappedComponent - Componente a ser carregado preguiçosamente.
 * @param fallback - Elemento opcional a ser exibido enquanto o componente carrega.
 * @returns Componente com suporte a fallback e carregamento assíncrono.
 */
function withSuspense<P>(
  WrappedComponent: ComponentType<P>,
  fallback: ReactNode = null
) {
  const ComponentWithSuspense = (props: P & WithSuspenseProps) => {
    return <Suspense fallback={props.fallback ?? fallback}>
      <WrappedComponent {...props} />
    </Suspense>;
  };

  ComponentWithSuspense.displayName = `withSuspense(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithSuspense;
}

export default withSuspense;
