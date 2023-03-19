import { AppbarContainer, AppbarHeader } from "../../styles/appbar"
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./actions"
import { Box, IconButton } from "@mui/material"
import { useUIContext } from "../../context/ui"

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext()
  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Box m="2px 10px">
        <img
          src="/images/navbar/logoGamingFarm.png"
          alt="The Gamer Farm Logo"
          style={{ width: "200px" }}
        />
      </Box>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  )
}
