import { calculaHeight } from "@/utils/calculaHeight";
import {
  Box,
  Collapse,
  Flex,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import classes from "./time-intervale.module.css";

type TimeIntervaleType = {
  label: string;
  start: number;
  end: number;
  scale: number;
  variant: "light" | "dark";
};

export function TimeIntervale({
  label,
  start,
  end,
  scale,
  variant,
}: TimeIntervaleType) {
  const height = calculaHeight(start, end, scale);
  const classeName = variant === "light" ? classes.boxLight : classes.boxDark;

  function getTileOrder() {
    if (100 > height) return 4;

    return 2;
  }

  return (
    <Tooltip label={label}>
      <Flex h={height} gap={"sm"}>
        <Box
          className={classeName}
          bg={height < 5 ? "orange.6" : ""}
          h={height}
        ></Box>
        <Stack gap={0}>
          <Collapse in={height > 30}>
            <Title lineClamp={2} order={getTileOrder()}>
              {label}
            </Title>
          </Collapse>
          <Collapse in={height > 15}>
            <Text c={"dimmed"}>Aconteceu em {start}</Text>
          </Collapse>
        </Stack>
      </Flex>
    </Tooltip>
  );
}
