import { calculaHeight } from "@/utils/calculaHeight";
import { generatePalette } from "@/utils/generate-palette";
import { Slider, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import { TimeIntervale } from "./components/time-intervale/time-intervale";
import classes from "./timeline.module.css";

const start = 1460;

const end = 2025;

const defaultScale = 15;

export function Timeline() {
  const [scale, setScale] = useState(defaultScale);
  const totalHeight = calculaHeight(start, end, scale);

  const pallete = generatePalette(10);

  return (
    <Stack className={classes.timeline}>
      <Stack gap={"5"} w={"60%"}>
        <Text fw={"500"}>Escala 1 : {scale}</Text>
        <Slider
          value={scale}
          min={1}
          max={50}
          onChange={setScale}
          defaultValue={defaultScale}
        />
      </Stack>

      <Title>{start}</Title>
      <Stack gap={0} h={totalHeight}>
        <TimeIntervale
          label="Descoberta"
          start={1460}
          end={1462}
          scale={scale}
          variant="light"
        />
        <TimeIntervale
          label="Início do povoamento"
          start={1462}
          end={1876}
          scale={scale}
          variant="dark"
        />
        <TimeIntervale
          label="Abolição da escravatura"
          start={1876}
          end={1956}
          scale={scale}
          variant="light"
        />
        <TimeIntervale
          label="Criação do PAIGC"
          start={1956}
          end={1962}
          scale={scale}
          variant="dark"
        />
        <TimeIntervale
          label="Início da Luta Armada"
          start={1962}
          end={1973}
          scale={scale}
          variant="light"
        />
        <TimeIntervale
          label="Assassinato de Amilcar Cabral"
          start={1973}
          end={1974}
          scale={scale}
          variant="dark"
        />
        <TimeIntervale
          label="Acordo entre PAIGC e Portugal"
          start={1974}
          end={1975}
          scale={scale}
          variant="light"
        />
        <TimeIntervale
          label="Independência"
          start={1975}
          end={end}
          scale={scale}
          variant="dark"
        />
      </Stack>
      <Title>{end}</Title>
    </Stack>
  );
}
