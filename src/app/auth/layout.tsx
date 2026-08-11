import ToastifyProvider from "@/providers/ToastProvider";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return <ToastifyProvider>{children}</ToastifyProvider>;
};

export default Layout;
