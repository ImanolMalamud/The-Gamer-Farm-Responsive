import React from "react";
import { Box } from "@mui/material";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          bgcolor="#0d1025"
          color="white"
          fontSize="1.5rem"
        >
          {this.props.fallback}
        </Box>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
