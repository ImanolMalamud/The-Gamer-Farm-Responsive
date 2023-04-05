import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";
import News from "components/news/News";
import ResponsiveSlider from "components/news";
import GamingNewsBtn from "components/news/GamingNewsBtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import backgroundBannerLight from "../../images/background-banner-light.jpg";
import backgroundBannerDark from "../../images/background-banner-dark.webp";
import { Image } from "@mui/icons-material";

export default function Banner() {
  const theme = useTheme();

  // Screen size
  const isMediumScreen = useMediaQuery("(max-width: 1050px)");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const mode = useSelector((state) => state.global.mode);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          height: isSmallScreen ? "contain" : "70vh",
          color: theme.palette.primary[100],
          pb: "20px",
          backgroundImage:
            mode === "light"
              ? `url(${backgroundBannerLight})`
              : `url(${backgroundBannerDark})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src="/images/banner/control.png"
          style={{
            paddingLeft: "10px",
            width: isMediumScreen ? "400px" : "500px",
          }}
        />
        <Box
          maxHeight="80%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          rowGap="25px"
          padding="0 20px 0 20px"
        >
          <Typography variant={isMediumScreen ? "h3" : "h2"}>
            Enciende tu experiencia de juego con nuestros productos
          </Typography>
          <Typography variant={isMediumScreen ? "h4" : "h3"}>
            "Bienvenidos a TheGamingFarm! Aquí podrás encontrar un cátalogo
            completo de las consolas más icónicas de las últimas décadas e
            informarte de las novedades relacionadas al Mundo Gamer”
          </Typography>
          <Button
            sx={{
              padding: "20px 0px",
              color: theme.palette.grey[100],
              fontWeight: "bold",
              fontSize: "20px",
              width: "300px",
              [theme.breakpoints.down("sm")]: {
                padding: "10px 0px",
                fontSize: "14px",
              },
              backgroundColor: theme.palette.secondary[400],
              "&:hover": {
                backgroundColor: theme.palette.secondary[700],
              },
            }}
          >
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Productos
            </Link>
          </Button>
        </Box>
      </Box>

      <GamingNewsBtn />

      <ResponsiveSlider />
      {/* <News /> */}
    </>
  );
}
