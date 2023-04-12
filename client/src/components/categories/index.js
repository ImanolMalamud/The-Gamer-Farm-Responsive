import { Box, Button, Typography, useTheme } from "@mui/material";

import { alpha } from "@mui/material/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import backgroundBannerLight from "../../images/background-banner-light.jpg";
import backgroundBannerDark from "../../images/background-banner-dark.webp";
import { CategoryButton } from "styles/filters";
import { setFilter } from "state";

const Categories = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const mode = useSelector((state) => state.global.mode);
  return (
    <Box
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      minHeight="400px"
      padding="30px 0  30px 0"
      sx={{
        backgroundImage:
          mode === "light"
            ? `url(${backgroundBannerLight})`
            : `url(${backgroundBannerDark})`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        width="80%"
        alignItems={"center"}
        justifyContent={"space-around"}
        gap={"40px"}
        bgcolor={alpha(theme.palette.tertiary[300], 0.5)}
        color={theme.palette.primary[100]}
        padding={"40px 20px 40px 20px"}
      >
        {/* ---- CONSOLAS ----- */}

        <CategoryButton
          onClick={() => dispatch(setFilter("CONSOLAS"))}
          theme={theme}
        >
          <Typography variant="h2">CONSOLAS</Typography>
        </CategoryButton>

        {/* ---- MANDOS ----- */}

        <CategoryButton
          onClick={() => dispatch(setFilter("MANDOS"))}
          theme={theme}
        >
          <Typography variant="h2">MANDOS</Typography>
        </CategoryButton>

        {/* ---- JUEGOS ----- */}

        <CategoryButton
          onClick={() => dispatch(setFilter("JUEGOS"))}
          theme={theme}
        >
          <Typography variant="h2">JUEGOS</Typography>
        </CategoryButton>
      </Box>
    </Box>
  );
};

export default Categories;
