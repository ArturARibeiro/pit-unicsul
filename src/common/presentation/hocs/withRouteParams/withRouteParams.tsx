import React from 'react';
import {useParams} from 'react-router-dom';

/**
 * HOC (Higher-Order Component) que injeta parâmetros da rota no componente filho.
 * Utiliza `useParams` do `react-router-dom` para extrair os parâmetros da rota
 * e passá-los como props ao componente.
 *
 * @template T Props do componente filho.
 * @param {React.ComponentType<T>} Component - O componente que receberá os parâmetros da rota.
 * @returns {React.FC<Omit<T, keyof ReturnType<typeof useParams>>>} Componente de ordem superior com parâmetros de rota injetados.
 */
function withRouteParams<T>(Component: React.ComponentType<T>): React.FC<Omit<T, keyof ReturnType<typeof useParams>>> {
  const ComponentWithRouteParams: React.FC<Omit<T, keyof ReturnType<typeof useParams>>> = (props) => {
    const params = useParams();
    return <Component {...(props as T)} {...params}/>;
  };

  ComponentWithRouteParams.displayName = `withRouteParams(${Component.displayName || Component.name || 'Component'})`;

  return ComponentWithRouteParams;
}

export default withRouteParams;
