import { Button, Typography, useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/system"
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner"

export default function Banner() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <BannerContainer
      sx={{
        backgroundColor: theme.palette.primary[500],
        color: theme.palette.primary[100],
      }}
    >
      <BannerImage
        src="/images/banner/control.png"
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
            backgroundColor: theme.palette.secondary[500],
            "&:hover": {
              backgroundColor: theme.palette.secondary[700],
            },
          }}
        >
          Productos
        </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  )
}
