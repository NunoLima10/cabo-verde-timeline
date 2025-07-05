import { ActionIcon, Anchor, Flex, Text } from "@mantine/core";
import { useEffect, useState } from "react";
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
    <Anchor
      href="https://github.com/NunoLima10/cabo-verde-timeline"
      target="_blank"
    >
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          <Text>{stars}</Text>
        </Flex>
      </ActionIcon>
    </Anchor>
  );
}
