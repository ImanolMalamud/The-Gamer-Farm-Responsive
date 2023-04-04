import { Box, Button, Container, Grid } from "@mui/material";
import { gameProducts } from "../../data/productos.js";
import SingleProduct from "./SingleProduct";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SingleProductDesktop from "./SingleProductDesktop";

export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = gameProducts.map((product) => (
    <Box display="flex" flexDirection="column">
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Box>
  ));
  return (
    <Box>
      <Box
        display="flex"
        flexWrap="wrap"
        columnGap="70px"
        rowGap="40px"
        justifyContent="center"
        alignItems="center"
        padding="50px 20px 30px 20px"
      >
        <>{renderProducts}</>
      </Box>
    </Box>
  );
}
