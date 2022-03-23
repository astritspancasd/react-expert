import React from 'react';
import { FC } from 'react';
import { Container } from './PageContainer.styles';

type PageContainerProps = {
  children: React.ReactNode;
};

export const PageContainer: FC<PageContainerProps> = (props) => {
  const { children } = props;

  return <Container>{children}</Container>;
};
