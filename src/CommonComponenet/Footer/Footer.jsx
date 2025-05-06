import React from "react";
import { Box, Typography, Button, Link, Grid } from "@mui/material";
import Btn from "../CommonButtons/Btn"
const Footer = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#064e4e",
        color: "#ffffff",
        px: 4,
        pt: 6,
        pb: 3,
        overflow: "hidden",
      }}
    >
      {/* Background Circles */}
      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "linear-gradient(to bottom, #00d4ae, #008080)",
          bottom: "-100px",
          left: "20%",
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "linear-gradient(to bottom, #00d4ae, #008080)",
          bottom: "40px",
          right: "5%",
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "linear-gradient(to bottom, #00d4ae, #008080)",
          top: "-80px",
          right: "-80px",
          opacity: 0.3,
        }}
      />

      {/* Main Footer Content */}
      <Grid container spacing={4} justifyContent="space-between">
        {/* Left Side */}
        <Grid item xs={12} md={4}>
          <Typography variant="h2" sx={{ color: "#fff" }}>
            DocOnCall
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            <strong>Contact Us</strong>
            <br />
            New Delhi, Delhi, India 🇮🇳 ❤️ 🤍 💚
          </Typography>
        </Grid>

        {/* Right Side */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{ textAlign: { xs: "left", md: "right" } }}
        >
          <Typography variant="body1" sx={{ mb: 1 }}>Quick Links</Typography>
          <Link
            href="#"
            color="#fff"
            underline="hover"
            display="block"
            sx={{ mb: 1,fontSize: "17px" }}
          >
          Dr.Harry william
          </Link>
          <Link
            href="#"
            color="#fff"
            underline="hover"
            display="block"
            sx={{ mb: 1,fontSize: "17px" }}
          >
          Dr. Virginia Apgar
          </Link>
        {/* <Btn label="Contact" /> */}
        </Grid>
      </Grid>

      {/* Bottom Footer Line */}
      <Box
        mt={6}
        borderTop="1px solid rgba(255,255,255,0.2)"
        pt={2}
        textAlign="center"
      >
        <Typography variant="body2" color="white">
          Developed with <span style={{ color: "#ff4d6d" }}>❤️</span> by the{" "}
          <span style={{ color: "#00d4ae" }}>DocOnCall</span> team
        </Typography>
        <Typography variant="caption" display="block" mt={1}>
          2025 © DocOnCall. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
