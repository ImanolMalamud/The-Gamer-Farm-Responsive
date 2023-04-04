import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";

export default function GamingNewsBtn() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        background: `linear-gradient(to right, ${theme.palette.grey[400]},${theme.palette.secondary[600]} )`,
        // cursor: "pointer",
      }}
      // component={RouterLink}
      // to="#gaming-news-section"
      // smooth={true}
      // duration={500}
    >
      <Typography variant="h2">Noticias</Typography>
    </Box>
  );
}
