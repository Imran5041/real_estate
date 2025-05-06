import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Btn from "../CommonButtons/Btn";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Home", "Specialties", "Contact Us", "Login", "Sign Up"].map(
          (text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar
        position="fixed" // Make the header fixed at the top
        elevation={4}
        sx={{
          backgroundColor: "white",
          color: "teal",
          padding: "8px",
          width: "100%", // Ensure it spans the full width
          top: 0, // Ensure it's positioned at the top
          left: 0, // Align with the left of the page
          zIndex: theme.zIndex.drawer + 1, // Ensure it's above other elements
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "teal",
              cursor: "pointer",
            }}
            onClick={handleHome}
          >
            DocOnCall
          </Typography>

          {/* Right Section */}
          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={3} alignItems="center">
              {/* Navigation Items */}
              {["Home", "Specialties", "Contact Us"].map((text) => (
                <Typography
                  key={text}
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    color: "#14B8A6",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {text}
                </Typography>
              ))}

              {/* Auth Buttons */}
              <Btn onClick={handleLogin} />
              <Btn label="Sign Up" onClick={handleSignUp} />
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
}
