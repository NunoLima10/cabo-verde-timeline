import { Avatar, Group, Text, Title } from "@mantine/core";
import { GithubStars } from "../github-starts/github-starts";
import { ToggleShemeButton } from "../toggle-sheme-button/toggle-sheme-button";
import classes from "./header.module.css";
import cv50 from "@assets/cv50.png"

export function Header() {
  return (
    <div className={classes.header}>
      <Title order={2} className={classes.title}>Cabo Verde Timeline</Title>
      <Group>
        <GithubStars />
        <ToggleShemeButton />
        <Avatar src={cv50}/>
      </Group>
    </div>
  );
}
