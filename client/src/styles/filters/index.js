import { Button, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";
import { alpha } from "@mui/material/styles";

export const CategoryButton = styled(Button)(({ theme }) => ({
  width: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: `0px 0px 2px 0.5px white`,
  height: "100px",
  backgroundColor: alpha(theme.palette.primary[800], 0.5),
  color: theme.palette.primary[100],
  ":hover": {
    boxShadow: `0px 0px 5px 2px white`,
    bgcolor: `${alpha(theme.palette.tertiary[500], 0.8)}`,
    color: `white`,
  },
}));

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
    fontSize: "1rem",
  },
  color: Colors.white,
  fontSize: "1rem",
}));
