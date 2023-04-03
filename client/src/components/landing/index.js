import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

import {
  LandingContainer,
  LandingContent,
  LandingDescription,
  LandingImage,
  LandingMessage,
  LandingShopButton,
  LandingTitle,
} from "styles/landing";

export default function Landing() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <LandingContainer
      sx={{
        backgroundColor: theme.palette.primary[700],
        color: theme.palette.primary[100],
      }}
    >
      <LandingContent>
        <LandingMessage>
          <LandingTitle>
            Enciende tu experiencia de juego con nuestros productos
          </LandingTitle>

          <LandingDescription>
            "Bienvenidos a TheGamingFarm! Aquí podrás encontrar un cátalogo
            completo de las consolas más icónicas de las últimas décadas e
            informarte de las novedades relacionadas al Mundo Gamer”
          </LandingDescription>
        </LandingMessage>

        <LandingImage
          src="/images/banner/control.png"
          //   sx={{ width: "600px", transform: "translateY(-50px)" }}
        />

        <LandingShopButton
          sx={{
            backgroundColor: theme.palette.secondary[500],
            "&:hover": {
              backgroundColor: theme.palette.secondary[700],
            },
          }}
        >
          Tienda
        </LandingShopButton>
      </LandingContent>
    </LandingContainer>
  );
}
