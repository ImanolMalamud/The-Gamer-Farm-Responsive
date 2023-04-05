import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { Box, IconButton, useTheme } from "@mui/material";
import { useUIContext } from "../../context/ui";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDrawerOpen, setShowSearchBox } from "state";

export default function AppbarMobile({ matches }) {
  const dispatch = useDispatch();

  const theme = useTheme();

  return (
    <AppbarContainer
      sx={{
        backgroundColor: theme.palette.primary[800],
        justifyContent: "space-around",
      }}
    >
      <IconButton
        onClick={() => {
          dispatch(setDrawerOpen(true));
        }}
      >
        <MenuIcon sx={{ fontSize: "50px" }} />
      </IconButton>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Box m="2px 10px">
          <img
            src="/images/navbar/logoGamingFarm.png"
            alt="The Gamer Farm Logo"
            style={{ width: "200px" }}
          />
        </Box>
      </Link>

      <IconButton
        onClick={() => {
          dispatch(setShowSearchBox(true));
        }}
      >
        <SearchIcon sx={{ fontSize: "40px" }} />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
