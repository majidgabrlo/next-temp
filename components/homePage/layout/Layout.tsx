import { FC, ReactNode } from "react";
import MainNavigation from "./MainNavigation";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
