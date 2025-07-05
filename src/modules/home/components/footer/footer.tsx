import { Anchor, Stack, Text } from "@mantine/core";
import classes from "./footer.module.css";

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Stack align="center" gap={0}>
        <Text size="sm">Servindo Cabo Verde</Text>
        <Text size="sm">
          Fundado por{" "}
          <Anchor href="https://nunolima.cv/" target="_blank">
            Nuno Lima
          </Anchor>{" "}
          em 5 Junho 2025
        </Text>
        <Text size="xs" c={"dimmed"} maw={"500"} mt={"sm"} ta={"center"}>
          Todas as contribuições são bem-vindas, incluindo sugestões de outros
          marcos históricos e correções de informações. Por favor, envie sua
          revisão para o e-mail nunolima711@gmail.com ou abra uma issue no
          repositório
        </Text>
      </Stack>
    </footer>
  );
}
