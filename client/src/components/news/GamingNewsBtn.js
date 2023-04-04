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
        height: 100,
        background: `linear-gradient(to right, #FF6B6B, ${theme.palette.secondary[500]})`,
        cursor: "pointer",
      }}
      component={RouterLink}
      to="#gaming-news-section"
      smooth={true}
      duration={500}
    >
      <Typography variant="h4" color="inherit">
        Gaming News
      </Typography>
    </Box>
  );
}
