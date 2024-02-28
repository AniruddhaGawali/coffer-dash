import React from 'react';

type Props = {
  children: React.ReactNode;
};

function DatasetLayout({ children }: Props) {
  return <div>{children}</div>;
}

export default DatasetLayout;
