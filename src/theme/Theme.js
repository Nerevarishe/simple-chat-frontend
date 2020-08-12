import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    whiteColor: "#ffffff",
    transparentWhiteColor: "rgba(255, 255, 255, 0.2)",
    blackColor: "#000000",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    orangeColor: "#ff9900",
    grayColor: "#9a9a9a",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
