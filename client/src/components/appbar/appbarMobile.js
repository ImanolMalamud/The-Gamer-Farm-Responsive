import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { Box, IconButton, useTheme } from "@mui/material";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile({ matches }) {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  const theme = useTheme();

  return (
    <AppbarContainer
      sx={{
        backgroundColor: theme.palette.primary[800],
        justifyContent: "space-around",
      }}
    >
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon sx={{ fontSize: "50px" }} />
      </IconButton>
      <Box m="2px 10px">
        <img
          src="/images/navbar/logoGamingFarm.png"
          alt="The Gamer Farm Logo"
          style={{ width: "200px" }}
        />
      </Box>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon sx={{ fontSize: "40px" }} />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
