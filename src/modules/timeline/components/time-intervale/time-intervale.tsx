import { calculaHeight } from "@/utils/calculaHeight";
import {
  Box,
  DefaultMantineColor,
  Flex,
  StyleProp,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";

type TimeIntervaleType = {
  label: string;
  start: number;
  end: number;
  scale: number;
  color: StyleProp<DefaultMantineColor> | undefined;
};

export function TimeIntervale({
  label,
  start,
  end,
  color,
  scale,
}: TimeIntervaleType) {
  const height = calculaHeight(start, end, scale);
  return (
    <Tooltip label={label}>
      <Box bg={color} h={height}>
        <Flex align={"center"} justify={"space-between"}>
          <Title order={2}>{label}</Title>
          <Text fw="bold">Aconteceu em {start}</Text>
        </Flex>
      </Box>
    </Tooltip>
  );
}
