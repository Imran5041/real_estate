import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Btn from "../CommonComponenet/CommonButtons/Btn";

const BannerPage = () => {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 12 },
        marginTop: { xs: 1, md: 6 },
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Grid container spacing={8} alignItems="center" justifyContent="center">
        {/* Left: Illustration */}
        <Grid item xs={12} md={6} textAlign="center">
          <Box
            component="img"
            src="/Images/doctor.png"
            alt="Doctor consultation illustration"
            sx={{ width: "100%", maxWidth: 400 }}
          />
        </Grid>

        {/* Right: Text Content */}
        <Grid item xs={12} md={6} width={700}>
          <Typography variant="h3" fontWeight={600} gutterBottom>
            Your Doctor, On-Demand: Anytime, Anywhere with{" "}
            <Box component="span" color="#14B8A6" fontWeight="bold">
              DocOnCall
            </Box>
            .
          </Typography>

          <Typography variant="body2" color="text.secondary" paragraph>
            DocOnCall is a telemedicine platform that provides you with virtual
            medical care at your convenience. With DocOnCall, you can connect
            with certified healthcare professionals, including doctors, nurses,
            and specialists, from the comfort of your own home or wherever you
            are.
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Whether you have a minor health concern, need a prescription refill,
            or require ongoing treatment for a chronic condition, DocOnCall
            makes it easy for you to get the care you need without having to
            visit a physical clinic.
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Our user-friendly platform is designed to make healthcare accessible
            and affordable for everyone, with secure video consultations,
            real-time chat, and easy scheduling options.
          </Typography>

          <Btn label="Consult" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerPage;
