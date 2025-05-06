// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "red", // optional
    },
    h5:{
        color:"blue"
    },
    body1:{
        color:"yellow"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
        outlined: {
          backgroundColor: "#000", // Add background to outlined button
          borderColor: "#1976d2",
          color: "#1976d2",
          "&:hover": {
            backgroundColor: "#e0e0e0",
            borderColor: "#115293",
          },
        },
        primary:{
            background:"green",
            color:"#fff"
        },
        imran:{
            background:"yellow"
        }
      },
    },
  },
});

export default theme;
