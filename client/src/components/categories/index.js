import { Box, Typography, useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React from "react";
import { useSelector } from "react-redux";
import backgroundBannerLight from "../../images/background-banner-light.jpg";
import backgroundBannerDark from "../../images/background-banner-dark.webp";
import { Link } from "react-router-dom";

const Categories = () => {
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
        <Link
          to="/products/consoles"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Box
            width={"300px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            boxShadow={`0px 0px 2px 0.5px white`}
            height={"100px"}
            bgcolor={alpha(theme.palette.primary[800], 0.5)}
            sx={{
              // transition: "box-shadow 0.05s ease-in-out",
              ":hover": {
                boxShadow: `0px 0px 5px 2px white`,
                //   boxShadow: `0px 0px 5px 2px ${theme.palette.secondary[500]}`,
                bgcolor: `${alpha(theme.palette.tertiary[500], 0.8)}`,
                color: `white`,
              },
            }}
          >
            <Typography variant="h2">CONSOLAS</Typography>
          </Box>
        </Link>
        {/* ---- MANDOS ----- */}
        <Box
          width={"300px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          boxShadow={`0px 0px 2px 0.5px white`}
          height={"100px"}
          bgcolor={alpha(theme.palette.primary[800], 0.5)}
          sx={{
            // transition: "box-shadow 0.05s ease-in-out",
            ":hover": {
              boxShadow: `0px 0px 5px 2px white`,
              //   boxShadow: `0px 0px 5px 2px ${theme.palette.secondary[500]}`,
              bgcolor: `${alpha(theme.palette.tertiary[500], 0.8)}`,
              color: `white`,
            },
          }}
        >
          <Typography variant="h2">MANDOS</Typography>
        </Box>
        {/* ---- CONSOLAS ----- */}
        <Box
          width={"300px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          boxShadow={`0px 0px 2px 0.5px white`}
          height={"100px"}
          bgcolor={alpha(theme.palette.primary[800], 0.5)}
          sx={{
            // transition: "box-shadow 0.05s ease-in-out",
            ":hover": {
              boxShadow: `0px 0px 5px 2px white`,
              //   boxShadow: `0px 0px 5px 2px ${theme.palette.secondary[500]}`,
              bgcolor: `${alpha(theme.palette.tertiary[500], 0.8)}`,
              color: `white`,
            },
          }}
        >
          <Typography variant="h2">JUEGOS</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
