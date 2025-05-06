import React from "react";
import { Box, Button } from "@mui/material";

const Btn = ({label="login"}) => {
  return (
    <Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#14B8A6",
          fontWeight: "bold",
          borderRadius: "10px",
          textTransform: "none",
          padding: "8px 54px",
          "&:hover": {
            backgroundColor: "#0f837a",
          },
        }}
      >
        {label}
      </Button>
    </Box>
  );
};

export default Btn;
