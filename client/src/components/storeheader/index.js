import { ArrowBack } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "state";
import backgroundBannerLight from "../../images/background-banner-light.jpg";
import backgroundBannerDark from "../../images/background-banner-dark.webp";
import SortByPrice from "components/sortbyprice";

const StoreHeader = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.global.filter);
  const mode = useSelector((state) => state.global.mode);
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="contain"
        padding="10px"
        backgroundColor="grey"
        textAlign="center"
        textJustify="center"
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
        <Typography
          variant="h2"
          sx={{ ml: "50%", transform: "translateX(-50%)" }}
        >
          {filter}
        </Typography>
        <IconButton
          aria-label="back"
          onClick={() => dispatch(setFilter(""))}
          sx={{
            fontSize: "1.2rem",
            bgcolor: theme.palette.primary[400],
            color: "white",
          }}
        >
          <ArrowBack />
        </IconButton>
      </Box>

      <SortByPrice />
    </Box>
  );
};

export default StoreHeader;
