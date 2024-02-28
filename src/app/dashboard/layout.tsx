import React from 'react';

type Props = {
  children: React.ReactNode;
};

function DahboardLayout({ children }: Props) {
  return <div>{children}</div>;
}

export default DahboardLayout;
