import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "state/api";
import Appbar from "components/appbar";
import ErrorBoundary from "components/errorboundary";
import Footer from "components/footer";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);

  const { data } = useGetUserQuery(userId);

  return (
    <Box>
      <Box flexGrow={1}>
        <Appbar />
        <ErrorBoundary fallback="There was an error.">
          <Outlet />
        </ErrorBoundary>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
