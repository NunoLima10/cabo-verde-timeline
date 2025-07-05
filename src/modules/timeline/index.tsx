import { Box, Stack, Tooltip } from "@mantine/core";
import classes from "./timeline.module.css";

const start = 1460;

const end = 2025;

const scale = 5;

function calculaHeight(start: number, end: number, scale: number) {
  return (end - start) * scale;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function Timeline() {
  const totalHeight = calculaHeight(start, end, scale);

  return (
    <Stack className={classes.timeline} gap={0} h={totalHeight}>
      <Tooltip label={"Descoberta | 1460"}>
        <Box
          className={classes.card}
          bg={getRandomColor()}
          h={calculaHeight(1460, 1462, scale)}
        >Descoberta | 1460</Box>
      </Tooltip>
      <Tooltip label={"Inico povoamento | 1462"}>
      <Box
        className={classes.card}
        bg={getRandomColor()}
        h={calculaHeight(1462, 1712, scale)}
      >Inico povoamento | 1462</Box>
      </Tooltip>
       <Tooltip label={"Ataque Corsarios Frances | 1712"}>
      <Box
        className={classes.card}
        bg={getRandomColor()}
        h={calculaHeight(1712, 1869, scale)}
      >Ataque Corsarios Frances | 1712</Box>
      </Tooltip>
       <Tooltip label={"Aboliçao escravatura | 1869"}>
      <Box
        className={classes.card}
        bg={getRandomColor()}
        h={calculaHeight(1869, 1956, scale)}
      >Aboliçao escravatura | 1869</Box>
      </Tooltip>
      <Tooltip label={"Amilcar Cabral co-funda PAI | 1956"}>
      <Box
        className={classes.card}
        bg={getRandomColor()}
        h={calculaHeight(1956, 1962, scale)}
      >Amilcar Cabral co-funda PAI | 1956</Box>
      </Tooltip>
       <Tooltip label={"Inicio da Luta Armada | 1962"}>
      <Box
        className={classes.card}
        bg={getRandomColor()}
        h={calculaHeight(1962, 1973, scale)}
      >Inicio da Luta Armada | 1962</Box>
      </Tooltip>
      <Tooltip label={"Assassinato Amilcar Cabral | 1973"}>
      <Box
        className={classes.card}
        bg={getRandomColor()}
        h={calculaHeight(1973, 1974, scale)}
      >Assassinato Amilcar Cabral | 1973</Box>
      </Tooltip>
        <Tooltip label={"Acordo entre PAIGC e Portugal | 1974"}>
      <Box
        className={classes.card}
        bg={getRandomColor()}
        h={calculaHeight(1974, 1975, scale)}
      >Acordo entre PAIGC e Portugal | 1974</Box>
      </Tooltip>
      <Tooltip label={"Independecia | 1975"}>
      <Box
        className={classes.card}
        bg={getRandomColor()}
        h={calculaHeight(1974, 1975, scale)}
      >Independecia | 1975</Box>
      </Tooltip>
       <Tooltip label={"Hoje"}>
      <Box
        className={classes.card}
        bg={getRandomColor()}
        h={calculaHeight(1975, 2025, scale)}
      >Hoje</Box>
      </Tooltip>
    </Stack>
  );
}
