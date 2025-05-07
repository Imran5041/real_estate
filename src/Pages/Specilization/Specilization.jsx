import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const specializations = [
  "Dentist",
  "General Physician",
  "Accupuncturist",
  "Endocrinologist",
  "Obstetrician",
  "Allergy Specialist",
  "Ayurvedic Physician",
  "Dermatologist",
  "ENT Specialist",
  "Hepatologist",
  "Anaesthesiologist",
  "Cardiologist",
  "Diabetologist",
  "Gastrologist",
  "Haematologist",
  "Andrologist",
  "Chiropractor",
  "Dietician",
  "Gynaecologist",
  "Homeopathy Physician",
];

const SpecializationCards = () => {
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
            Specializations
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
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          mt: 4,
        }}
      >
        {specializations.map((label, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" }, // ~4 per row on md+
              minHeight: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#00bfa5",
              fontWeight: 500,
              borderRadius: 2,
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: 6,
                backgroundColor: "#e0f2f1",
              },
            }}
          >
            {label}
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default SpecializationCards;
