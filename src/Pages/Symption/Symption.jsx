import React from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";

const symptoms = [
  { name: "Anxiety", icon: "/Icons/sym12.png" },
  { name: "Spots on Arms", icon: "/Icons/sym1.png" },
  { name: "Back Pain", icon: "/Icons/sym2.png" },
  { name: "Head Injury", icon: "/Icons/sym3.png" },
  { name: "Shakiness", icon: "/Icons/sym4.png" },
  { name: "Diarrhoea", icon: "/Icons/sym5.png" },
  { name: "Vomiting", icon: "/Icons/sym6.png" },
  { name: "Period Cramps", icon: "/Icons/sym7.png" },
  { name: "Blackouts", icon: "/Icons/sym8.png" },
  { name: "Nausea", icon: "/Icons/sym9.png" },
  { name: "Ear pain", icon: "/Icons/sym10.png" },
  { name: "Knuckle Pain", icon: "/Icons/sym11.png" },
  { name: "Back Pain", icon: "/Icons/sym13.png" },
{ name: "Dizziness", icon: "/Icons/sym14.png" },
{ name: "Blurred Vision", icon: "/Icons/sym15.png" },

];

const Symption = () => {
  return (
    <Box sx={{ px: 4, py: 6, textAlign: "center", bgcolor: "#fff" }}>
      <Box textAlign="center" mt={5}>
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: 400, color: "#6e6e6e" }}
        >
          Choose from{" "}
          <Box component="span" sx={{ color: "#11c5b1", fontWeight: 600 }}>
        Symptoms
          </Box>
        </Typography>
        <Box
          sx={{
            height: "2px",
            width: "180px",
            background:
              "linear-gradient(to right, transparent, #11c5b1, transparent)",
            borderRadius: "50%",
            filter: "blur(1px)",
            mx: "auto",
            mt: 1,
          }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",  // 2 per row on extra-small
            sm: "repeat(3, 1fr)",  // 3 per row on small
            md: "repeat(5, 1fr)",  // 5 per row on medium and up
          },
        //   gap: 3,
          mt: 4,
        }}
      >
        {symptoms.map((item, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              minHeight: 140,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#00bfa5",
              fontWeight: 500,
              borderRadius: 2,
              cursor: "pointer",
              transition: "all 0.3s ease",
              p: 2,
            }}
          >
            <Avatar
              src={item.icon}
              alt={item.name}
              sx={{
                bgcolor: "#e0f2f1",
                width: 64,
                height: 64,
                mb: 1.5,
              }}
            />
            <Typography variant="body1" sx={{ color: "#444" }}>
              {item.name}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Symption;
