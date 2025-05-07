import React from "react";
import { Box, Grid, Typography, IconButton, Paper, Chip } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const services = [
  { title: "Cancer Care", number: 1, color: "#FFE6B3" },
  { title: "Labor & Delivery", number: 2, color: "#E3D5FF" },
  { title: "Heart & Vascular", number: 3, color: "#B3E6EA" },
  { title: "Mental Health", number: 4, color: "#B3E6EA" },
  { title: "Neurology", number: 5, color: "#FFE6B3" },
  { title: "Burn Treatment", number: 6, color: "#E3D5FF" },
];

const ServiceCard = ({ title, description, number, color }) => (
  <Paper
    elevation={0}
    sx={{
      p: 3,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "relative",
      borderRadius: 2,
    }}
  >
    <Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      <Box sx={{ width: "370px" }}>
        <Typography variant="body1" color="text.secondary" fontSize="15px">
          World-class care for everyone. Our health system offers unmatched,
          expert health care. From the lab to the clinic
        </Typography>
      </Box>
    </Box>
    <Box
      mt={2}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <IconButton
        sx={{
          border: "1px solid",
          borderRadius: "50%",
          width: 40,
          height: 40,
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
      <Chip
        label={number}
        sx={{
          backgroundColor: color,
          borderRadius: 1,
          fontWeight: "bold",
          width: 40,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </Box>
  </Paper>
);

const ServicesGrid = () => {
  return (
    <Box p={4}>
      <Box textAlign="center">
        <Typography
          variant="h4"
          component="div"
          sx={{ fontWeight: 400, color: "#6e6e6e" }}
        >
          Our medical{" "}
          <Box component="span" sx={{ color: "#11c5b1", fontWeight: 600 }}>
            services
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
      <Grid container spacing={12} mt={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard {...service} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesGrid;
