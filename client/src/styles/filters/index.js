import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const FiltersContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "10px 10px 10px 10px",
  },
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  overflow: "hidden",
  background: Colors.secondary,
}));

export const FilterButton = styled(Typography)(({ theme }) => ({
  fontFamily: '"Press Start 2P"',
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
  color: Colors.white,
  fontSize: "1rem",
}));
