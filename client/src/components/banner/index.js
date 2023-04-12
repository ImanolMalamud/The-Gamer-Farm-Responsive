import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";

import GamingNewsBtn from "components/news/GamingNewsBtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AppDrawer from "components/drawer";
import SearchBox from "components/search";
import NewsCarrousel from "components/newscarrousel";
import {
  BannerContainer,
  BannerProductsButton,
  BannerText,
} from "styles/banner";

export default function Banner() {
  const theme = useTheme();

  // Screen size
  const isMediumScreen = useMediaQuery("(max-width: 1050px)");
  const isSmallScreen = useMediaQuery("(max-width: 900px)");

  const mode = useSelector((state) => state.global.mode);

  return (
    <BannerContainer isSmallScreen={isSmallScreen} mode={mode}>
      <img
        src="/images/banner/control.png"
        style={{
          paddingLeft: "10px",
          width: isSmallScreen ? "300px" : isMediumScreen ? "400px" : "500px",
        }}
      />
      <BannerText>
        <Typography variant={isMediumScreen ? "h3" : "h2"}>
          Enciende tu experiencia de juego con nuestros productos
        </Typography>
        <Typography variant={isMediumScreen ? "h4" : "h3"}>
          "Bienvenidos a TheGamingFarm! Aquí podrás encontrar un cátalogo
          completo de las consolas más icónicas de las últimas décadas e
          informarte de las novedades relacionadas al Mundo Gamer”
        </Typography>
        <Link to="/store" style={{ textDecoration: "none", color: "inherit" }}>
          <BannerProductsButton theme={theme}>Productos</BannerProductsButton>
        </Link>
      </BannerText>
    </BannerContainer>
  );
}
