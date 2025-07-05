import { Space, Stack, Text, Title } from "@mantine/core";
import { Timeline } from "../timeline";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

export function Home() {
  return (
    <Stack align="center" p={"2%"}>
      <Header />
      <Space h={60}/>
      <Stack gap={"md"} >
        <Title order={3} ta={"center"}>O que é Cabo Verde Timeline?</Title>
        <Text c={"dimmed"} maw={"800"} >
          Cabo Verde Timeline é um projeto interativo que apresenta os
          principais marcos da história de Cabo Verde de forma visual e
          proporcional. Cada linha tem altura de um pixel representa um ano,
          permitindo perceber a verdadeira dimensão do tempo entre os eventos.
        </Text>
      </Stack>
      <Timeline />
      <Footer />
    </Stack>
  );
}
