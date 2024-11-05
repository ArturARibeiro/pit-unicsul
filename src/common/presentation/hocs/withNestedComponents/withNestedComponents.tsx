import {ComponentType, ReactNode} from "react";

type NestComponent = {
  children: ReactNode,
}

const withNestedComponents = <P extends object> (WrappedComponent: ComponentType<P>, nests: ComponentType<NestComponent>[]) => {
  const ComponentWithNestedComponents = (props: P) => {
    return nests.reduceRight((acc, Nest) => (
      <Nest>{acc}</Nest>
    ), <WrappedComponent {...props}/>);
  }

  ComponentWithNestedComponents.displayName = 'WithNestedComponents';

  return ComponentWithNestedComponents;
}

export default withNestedComponents;