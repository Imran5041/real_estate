import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
export const Header = () => {
  return (
    <Box sx={{ background: "#fff" }}>
      <Container maxWidth="1200px">
        <Box>
          <img src="/images/logo.png" alt="logo" width="50px" height="50px" />
          <Typography variant="h1">Header</Typography>
          <Button variant="primary">Click</Button>
          <Typography variant="body1">Hello</Typography>
        </Box>
      </Container>
    </Box>
  );
};
