import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { PropsWithChildren } from "react";
import { theme } from "./theme";

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      {children}
    </MantineProvider>
  );
}
