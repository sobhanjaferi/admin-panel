"use client";

import { IptValues } from "@/features/Auth/Form";
import { createContext } from "react";

export type AuthContextType = {
  handleLogin: (iptValues: IptValues) => void;
  handleLogout: () => void;
};

export const authContext = createContext<AuthContextType>({
  handleLogin: (): void => {},
  handleLogout: (): void => {},
});
