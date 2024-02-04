import { PortalProvider } from "@gorhom/portal";
import React from "react";

interface IProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Provider({ children }: IProviderProps) {
  return <PortalProvider>{children}</PortalProvider>;
}
