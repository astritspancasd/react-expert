import { FC } from "react";
import { BrowserRouter as Router } from "react-router-dom";

type RouterProviderProps = {
  children: React.ReactNode;
};

export const RouterProvider: FC<RouterProviderProps> = (props) => {
  const { children } = props;

  return <Router>{children}</Router>;
};
