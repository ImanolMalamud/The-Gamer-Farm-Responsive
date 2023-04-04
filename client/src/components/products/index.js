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
    <Grid
      item
      key={product.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
  ));
  return (
    <Container sx={{ pading: `25px 4px 25px 4px`, mt: "80px", mb: "20px" }}>
      <Grid
        container
        spacing={{ xs: 8, md: 6 }}
        justifyContent="center"
        sx={{ backgroundColor: "grey" }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
}
