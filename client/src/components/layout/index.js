import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "state/api";
import Appbar from "components/appbar";
import ErrorBoundary from "components/errorboundary";
import Footer from "components/footer";
import backgroundProductsLight from "../../images/background-products-light.jpg";
import backgroundProductsDark from "../../images/background-products-dark.jpg";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);

  const mode = useSelector((state) => state.global.mode);

  const { data } = useGetUserQuery(userId);

  return (
    <Box>
      <Box flexGrow={1}>
        <Appbar />
        <Box
          sx={{
            backgroundImage:
              mode === "light"
                ? `url(${backgroundProductsLight})`
                : `url(${backgroundProductsDark})`,
            backgroundSize: "cover",
            backgroundPositionX: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            width: "100vw",
            // overflow: "auto",
          }}
        >
          <ErrorBoundary fallback="There was an error.">
            <Outlet />
          </ErrorBoundary>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
