import { Button, Typography, useMediaQuery } from "@mui/material";
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

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const mode = useSelector((state) => state.global.mode);

  return (
    <>
      <BannerContainer
        sx={{
          // backgroundColor: theme.palette.primary[700],
          color: theme.palette.primary[100],
          backgroundImage:
            mode === "light"
              ? `url(${backgroundBannerLight})`
              : `url(${backgroundBannerDark})`,
          backgroundSize: "cover",
          backgroundPositionX: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <BannerImage
          src="/images/banner/control.png"
          alt="logo"
          sx={{ width: "600px", transform: "translateY(-50px)" }}
        />
        <BannerContent>
          <Typography variant="h4">
            Enciende tu experiencia de juego con nuestros productos
          </Typography>
          {/* <BannerTitle variant="h2">The Gaming Farm</BannerTitle> */}

          <BannerDescription variant="subtitle">
            "Bienvenidos a TheGamingFarm! Aquí podrás encontrar un cátalogo
            completo de las consolas más icónicas de las últimas décadas e
            informarte de las novedades relacionadas al Mundo Gamer”
          </BannerDescription>

          <BannerShopButton
            sx={{
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
          </BannerShopButton>
        </BannerContent>
      </BannerContainer>

      <GamingNewsBtn />

      <ResponsiveSlider />
      {/* <News /> */}
    </>
  );
}
