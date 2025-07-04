import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { PropsWithChildren } from "react";

export function AppProvider({ children }: PropsWithChildren) {
  return <MantineProvider>{children}</MantineProvider>;
}
