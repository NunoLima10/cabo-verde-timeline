import { useEffect, useState } from "react";
import { ActionIcon, Anchor, Flex, Text } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import classes from "./github-starts.module.css";

async function getGithubStars() {
  const response = await fetch(
    "https://api.github.com/repos/NunoLima10/cabo-verde-timeline"
  );
  const data = await response.json();
  return data?.stargazers_count as number;
}

export function GithubStars() {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGithubStars().then((count) => {
      setStars(count);
      setLoading(false);
    });
  }, []);

  return (
    <Anchor href="https://github.com/NunoLima10/cabo-verde-timeline" target="_blank">
      <ActionIcon
        variant="default"
        size="input-sm"
        aria-label="Alternar esquema de cores"
        classNames={{
          root: classes.root,
        }}
        loading={loading}
        loaderProps={{ type: "dots" }}
      >
        <Flex align={"center"} gap={2}>
          <IconBrandGithub size={18} />
          <Text>{stars}</Text>
        </Flex>
      </ActionIcon>
    </Anchor>
  );
}


