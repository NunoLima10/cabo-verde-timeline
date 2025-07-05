import { calculaHeight } from "@/utils/calculaHeight";
import { Stack } from "@mantine/core";
import { TimeIntervale } from "./components/time-intervale/time-intervale";
import classes from "./timeline.module.css";
import { generatePalette } from "@/utils/generate-palette";

const start = 1460;

const end = 2025;

const scale = 5;

export function Timeline() {
  const totalHeight = calculaHeight(start, end, scale);

  const pallete = generatePalette(10);

  return (
    <Stack className={classes.timeline} gap={0} h={totalHeight}>
      <TimeIntervale
        label="Descoberta"
        start={1460}
        end={1462}
        scale={scale}
        color={pallete[0]}
      />
      <TimeIntervale
        label="Inico povoamento"
        start={1462}
        end={1712}
        scale={scale}
        color={pallete[1]}
      />
      <TimeIntervale
        label="Aboliçao escravatura"
        start={1876}
        end={1956}
        scale={scale}
        color={pallete[3]}
      />
      <TimeIntervale
        label="Amilcar Cabral co-funda PAI"
        start={1956}
        end={1962}
        scale={scale}
        color={pallete[0]}
      />
      <TimeIntervale
        label="Inicio da Luta Armada"
        start={1962}
        end={1973}
        scale={scale}
        color={pallete[4]}
      />
      <TimeIntervale
        label="Assassinato Amilcar Cabral"
        start={1973}
        end={1974}
        scale={scale}
        color={pallete[5]}
      />
      <TimeIntervale
        label="Acordo entre PAIGC e Portugal | 1974"
        start={1974}
        end={1975}
        scale={scale}
        color={pallete[6]}
      />
      <TimeIntervale
        label="Independecia | 1975"
        start={1975}
        end={1975}
        scale={scale}
        color={pallete[7]}
      />
      <TimeIntervale
        label="Hoje"
        start={1975}
        end={2025}
        scale={scale}
        color={pallete[8]}
      />
    </Stack>
  );
}
