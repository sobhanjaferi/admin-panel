"use client";

import { IptValues } from "@/features/Auth/Form";
import { createContext, Dispatch, SetStateAction } from "react";

export type AuthContextType = {
  handleLogin: (
    iptValues: IptValues,
    setIptValues: Dispatch<SetStateAction<IptValues>>,
  ) => void;
  handleLogout: () => void;
};

export const authContext = createContext<AuthContextType>({
  handleLogin: (): void => {},
  handleLogout: (): void => {},
});
