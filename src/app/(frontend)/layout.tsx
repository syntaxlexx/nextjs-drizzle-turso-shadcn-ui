import { PropsWithChildren } from "react";
import { Analytics } from "@vercel/analytics/react";

interface Props extends PropsWithChildren {}

const Layout = async ({ children }: Props) => {
  return (
    <div>
      {children}

      <Analytics />
    </div>
  );
};

export default Layout;
