import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./layout/App.tsx";
import "./index.css";
import theme from "./theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { ukUA } from "@mui/material/locale";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/uk";

dayjs.extend(customParseFormat);
dayjs.locale("uk");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={createTheme(theme, ukUA)}>
      <App></App>
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>
);
