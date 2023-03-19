import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material"
import {
  AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar"
import PersonIcon from "@mui/icons-material/Person"
import FavoriteIcon from "@mui/icons-material/Favorite"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import Actions from "./actions"
import { useUIContext } from "../../context/ui"
export default function AppbarDesktop({ matches }) {
  const { setShowSearchBox } = useUIContext()

  return (
    <AppbarContainer>
      <Box m="5px 10px">
        <img
          src="/images/navbar/logoGamingFarm.png"
          alt="The Gamer Farm Logo"
          style={{ width: "100px" }}
        />
      </Box>
      <MyList type="row" sx={{ color: "white" }}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  )
}
