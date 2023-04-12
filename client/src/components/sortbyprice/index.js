import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Button, useTheme } from "@mui/material";

export default function SortByPrice() {
  const theme = useTheme();
  return (
    <Button sx={{ color: theme.palette.primary[100] }}>
      <span>Sort by price</span>
      <ArrowUpwardIcon />
      <ArrowDownwardIcon />
    </Button>
  );
}
