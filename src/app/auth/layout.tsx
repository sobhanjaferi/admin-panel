import ToastifyContainer from "@/containers/ToastContainer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return <ToastifyContainer>{children}</ToastifyContainer>;
};

export default Layout;
