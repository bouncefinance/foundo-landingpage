import {
  createTheme,
  ThemeOptions,
  PaletteOptions,
} from "@mui/material/styles";
import { BREAKPOINTS } from "./const";

const TEN_SECONDS = 10 * 1000;

export const FONTS = {
  primary: ['"Public Sans"', '"Inter"', "sans-serif"].join(","),
  medium: ['"Public Sans"', '"Inter"', "sans-serif"].join(","),
  bold: ['"Public Sans"', '"Inter"', "sans-serif"].join(","),
};

export const PALETTE = {
  primary: {
    light: "#D7D6D9",
    main: "#D7D6D9",
    dark: "#D7D6D9",
  },
  background: {
    default: "#D7D6D9",
    paper: "#D7D6D9",
    reverse: "#D7D6D9",
  },
  text: {
    primary: "#D7D6D9",
    secondary: "#959595",
    darkGray: "#959595",
    light: "#959595",
    reverse: "#D7D6D9",
  },
  warning: {
    main: "#D7D6D9",
  },
  success: {
    main: "#D7D6D9",
  },
  grey: {
    300: "#F1F1F1",
  },
};
export const defaultTheme = createTheme({
  spacing: 8,
  palette: PALETTE as PaletteOptions,
  breakpoints: BREAKPOINTS,
});

export const mainTheme = createTheme({
  spacing: defaultTheme.spacing,
  palette: defaultTheme.palette,
  breakpoints: defaultTheme.breakpoints,
  height: {
    header: '76px',
    mobileHeader: '51px',
    footer: '60px'
  },
  typography: {
    fontFamily: FONTS.primary,
    color: defaultTheme.palette.text.primary,
  },

  props: {
    MuiContainer: {
      maxWidth: "xl",
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      variant: "contained",
      disableElevation: true,
    },
    MuiTooltip: {
      enterTouchDelay: 0,
      leaveTouchDelay: TEN_SECONDS,
    },
  },
} as ThemeOptions);
