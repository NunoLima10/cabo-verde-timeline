import { createTheme, darken, lighten, virtualColor } from "@mantine/core";

const light = {
  body: "#f5f7fa",
  text: "#1a2238",
  hover: darken("#f5f7fa", .08),
  menuHover:  darken("#f5f7fa", .08),
  disabledBG: "#e5e5df",
  border: "#6ea3c1", //skelont
  inputBoder: "#b0b8c1",
  placeholder: "#3a5ba0", // disabled-text
  dimmed: "rgba(117, 140, 189, 1)",
  closeX: "#fffbe6",
  unknown: "red",
  notifictionTitle: "#1a2238",
};
const lightPrimary = {
  filled: "#3a5ba0", //outline
  hover: "rgba(88, 116, 174, 1)",
};

const dark = {
  body: "#181a24",
  text: "#e6eaf3",
  hover:  darken("#181a24", .2),
  menuHover: darken("#181a24", .02),
  disabledBG: "#23243a",
  border: "#3a5ba0", //skelont
  inputBoder: "#2d2e3e",
  placeholder: "#7a88a1", // disabled-text
  dimmed: "rgba(162, 172, 189, 1)",
  closeX: "#181a24",
  unknown: "red",
  notifictionTitle: "#e6eaf3",
};

const darkPrimary = {
  filled: "#3a5ba0",
  hover: "rgba(49, 77, 136, 1)",
  text: "#e6eaf3",
  buttonOuntline: "#3a5ba0",
  lightButton: "#3a5ba0",
  link: "#3a5ba0",
};

export const theme = createTheme({
  defaultRadius: "0.5rem",
  white: light.body,
  black: light.text,
  primaryColor: "primary",
  primaryShade: 5,
  defaultGradient: {
    from: "#6ea3c1",
    to: "#bccdf0",
    deg: 113,
  },
  colors: {
    primary: virtualColor({
      name: "primary",
      dark: "primarydark",
      light: "primarylight",
    }),
    // dark mode
    dark: [
      dark.text,
      dark.closeX,
      dark.dimmed,
      dark.placeholder,
      dark.inputBoder,
      dark.hover,
      dark.disabledBG,
      dark.body,
      darken(dark.body, 0.2),
      "blue",
    ],

    // light mode
    gray: [
      light.hover,
      light.menuHover,
      light.disabledBG,
      light.border,
      light.inputBoder,
      light.placeholder,
      light.dimmed,
      light.closeX,
      light.unknown,
      light.notifictionTitle,
    ],
    primarylight: [
      "green",
      "green",
      "green",
      "green",
      "green",
      lightPrimary.filled,
      lightPrimary.hover,
      "green",
      "green",
      "green",
    ],
    primarydark: [
      darkPrimary.text,
      darkPrimary.buttonOuntline,
      "yellow",
      darkPrimary.lightButton,
      darkPrimary.link,
      darkPrimary.filled,
      darkPrimary.hover,
      "yellow",
      "yellow",
      "yellow",
    ],
  },
});
