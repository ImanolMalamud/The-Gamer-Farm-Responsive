import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import backgroundBannerLight from "../../images/background-banner-light.jpg";
import backgroundBannerDark from "../../images/background-banner-dark.webp";

export const BannerContainer = styled(Box)(
  ({ mode, theme, isSmallScreen }) => ({
    display: "flex",
    flexDirection: isSmallScreen ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "400px",
    height: isSmallScreen ? "contain" : "70vh",
    color: theme.palette.primary[100],
    padding: "10px 0 20px 0",
    width: "100vw",
    backgroundImage:
      mode === "light"
        ? `url(${backgroundBannerLight})`
        : `url(${backgroundBannerDark})`,
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundRepeat: "no-repeat",
  })
);

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
}));

export const BannerText = styled(Box)(() => ({
  maxHeight: "80%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  rowGap: "25px",
  padding: "0 20px 0 20px",
}));

export const BannerProductsButton = styled(Button)(({ theme }) => ({
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
}));
