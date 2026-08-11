import AuthContextProvider from "@/providers/AuthContextProvider";
import ToastifyProvider from "@/providers/ToastProvider";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <ToastifyProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ToastifyProvider>
  );
};

export default Layout;
