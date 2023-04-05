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
  useMediaQuery,
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
import Products from "components/products";
import "./App.css";
import AppDrawer from "components/drawer";
import SearchBox from "components/search";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  return (
    <Box className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/** Layout contains the Navbar and Sidebar. It will always render in our App. The components contained in the parent's route -in this case, with Layout element)- will be used in the Layout component as an Outlet component. */}
            <Route element={<Layout />}>
              <Route exact path="/" element={<Banner />} />
              <Route path="/products" element={<Products />} />
            </Route>
          </Routes>
          {isSmallScreen && <AppDrawer />}
          <SearchBox />
        </ThemeProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
