import React, { useMemo } from "react";
import Filters from "../filters";
import SearchBox from "../search";
import Products from "../products";
import Footer from "../footer";
import AppDrawer from "../drawer";
import { Container, createTheme, Stack, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import GamingNewsBtn from "components/news/GamingNewsBtn";
import NewsCarrousel from "components/newscarrousel";
import Banner from "components/banner";

const Home = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        background: theme.palette.primary[700],
        color: theme.palette.primary[100],
      }}
    >
      <Stack>
        <Banner />
        <GamingNewsBtn />
        <NewsCarrousel />
        {isSmallScreen && <AppDrawer />}
        <SearchBox />
      </Stack>
    </Container>
  );
};

export default Home;
