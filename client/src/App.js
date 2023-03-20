import logo from "./logo.svg"
import "./App.css"
import {
  Container,
  Typography,
  Box,
  Stack,
  Grid,
  Button,
  createTheme,
} from "@mui/material"
import Appbar from "./components/appbar"
import { ThemeProvider } from "@mui/system"
import theme from "./styles/theme"
import Banner from "./components/banner"
import Products from "./components/products"
import { UIProvider } from "./context/ui"
import Footer from "./components/footer"
import AppDrawer from "./components/drawer"
import Promotions from "./components/promotions"
import SearchBox from "./components/search"
import { useEffect, useMemo } from "react"
import { themeSettings } from "theme"
import { useSelector } from "react-redux"

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home"
  }, [])

  const mode = useSelector(state => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: theme.palette.primary[500],
          color: theme.palette.primary[100],
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            <Banner />
            <Promotions />
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default App
