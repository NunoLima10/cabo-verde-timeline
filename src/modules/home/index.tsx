import { ToggleShemeButton } from "@/components/toggle-sheme-button/toggle-sheme-button";
import { Stack, Title } from "@mantine/core";
import { Timeline } from "../timeline";

export function Home() {
  return (
    <Stack mt={"6%"} align="center">
      <Title>Cabo Verde Timeline</Title>
      <ToggleShemeButton />
      <Timeline />
    </Stack>
  );
}
