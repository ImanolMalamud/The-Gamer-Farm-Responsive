import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Actions from "./actions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowSearchBox } from "state";
import { alpha } from "@mui/material";
export default function AppbarDesktop({ matches }) {
  const dispatch = useDispatch();

  const theme = useTheme();

  return (
    <AppbarContainer
      sx={{
        backgroundColor: alpha(theme.palette.primary[800], 0.9),
        color: theme.palette.primary[100],
        mt: "0",
      }}
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Box m="0 50px 0 10px">
          <img
            src="/images/navbar/logoGamingFarm.png"
            alt="The Gamer Farm Logo"
            style={{ width: "100px" }}
          />
        </Box>
      </Link>

      <MyList type="row">
        <ListItemText
          primary={
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          }
        />
        <ListItemText
          primary={
            <Link
              to="/store"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Productos
            </Link>
          }
        />
        <ListItemText
          primary={
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Sobre Nosotros
            </Link>
          }
        />
        <ListItemText
          primary={
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contactanos
            </Link>
          }
        />
        <ListItemButton onClick={() => dispatch(setShowSearchBox(true))}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
