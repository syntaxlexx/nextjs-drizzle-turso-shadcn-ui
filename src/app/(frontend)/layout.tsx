import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const Layout = async ({ children }: Props) => {
  return <div>{children} </div>;
};

export default Layout;
