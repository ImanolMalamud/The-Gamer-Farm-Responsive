import logo from "./logo.svg";
import {
  Container,
  Typography,
  Box,
  Stack,
  Grid,
  Button,
  createTheme,
  CssBaseline,
} from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import { useEffect, useMemo } from "react";
import { themeSettings } from "theme";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "components/home";
import Layout from "components/layout";
import { UIProvider } from "context/ui";
import Landing from "components/landing";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <BrowserRouter>
      <UIProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/** Layout contains the Navbar and Sidebar. It will always render in our App. The components contained in the parent's route -in this case, with Layout element)- will be used in the Layout component as an Outlet component. */}
            <Route element={<Layout />}>
              <Route path="/" element={<Banner />} />
              <Route path="/products" element={<Home />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </UIProvider>
    </BrowserRouter>
  );
}

export default App;
