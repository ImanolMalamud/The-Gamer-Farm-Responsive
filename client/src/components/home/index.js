import React, { useMemo } from "react";
import Filters from "../filters";
import SearchBox from "../search";
import Products from "../products";
import Footer from "../footer";
import AppDrawer from "../drawer";
import { UIProvider } from "context/ui";
import { Container, createTheme, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";

const Home = () => {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
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
        {/* <Appbar /> */}
        {/* <Banner /> */}
        {/* <Promotions /> */}
        <Filters />
        <SearchBox />
        {/* <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Productos</Typography>
            </Box> */}
        <Products />
        <Footer />
        <AppDrawer />
      </Stack>
    </Container>
  );
};

export default Home;
