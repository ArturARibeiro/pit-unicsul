import React, {Fragment} from 'react';

interface EachProps<T> {
  data: T[] | undefined;
  render: (item: T, index: number) => React.ReactNode;
}

const Each = <T, >({data, render}: EachProps<T>) => {
  return <Fragment>
    {data?.map((item, index) => (
      <Fragment key={index}>
        {render(item, index)}
      </Fragment>
    ))}
  </Fragment>;
};

export default Each;
