"use client";

import { Dispatch, ReactNode, SetStateAction } from "react";
import { authContext } from "@/contexts/Auth";
import { IptValues } from "@/features/Auth/Form";
import { adminData, AdminData } from "@/features/Auth/AdminData";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const route = useRouter();

  const handleLogin = (
    iptValues: IptValues,
    setIptValues: Dispatch<SetStateAction<IptValues>>,
  ): void => {
    const data: AdminData | undefined = adminData.find(
      (admin) =>
        admin.email === iptValues.email &&
        admin.password === iptValues.password,
    );

    if (data !== undefined) {
      toast.success("Wellcome to Admin Panel!", {
        onClose: () => {
          cookieStore.set("auth_token", v4());

          route.push("/");
        },
      });
    } else {
      toast.error("Data is Fake!");
      setIptValues(() => ({ email: "", password: "" }));
    }
  };

  const handleLogout = (): void => {
    cookieStore.delete("auth_token");

    route.push("/auth");
  };

  return (
    <authContext.Provider
      value={{
        handleLogin: handleLogin,
        handleLogout: handleLogout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
