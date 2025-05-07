import React from "react";
import { Box, Grid, Typography } from "@mui/material";
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
        {/* Left: Doctor Image */}
        <Grid item xs={12} md={6} textAlign="center">
          <Box
            component="img"
            src="/Images/doctor.png"
            alt="Doctor portrait"
            sx={{ width: "100%", maxWidth: 400 }}
          />
        </Grid>

        {/* Right: Doctor Introduction */}
        <Grid item xs={12} md={6} width={700}>
          <Typography variant="h3" fontWeight={600} gutterBottom>
            Meet{" "}
            <Box component="span" color="#14B8A6" fontWeight="bold">
              Dr. John Doe
            </Box>
            , Your Trusted Healthcare Partner.
          </Typography>

          <Typography variant="body2" color="text.secondary" paragraph>
            Dr. John Doe is a board-certified physician with over 15 years of experience
            in internal medicine and patient care. Known for his compassionate approach and
            dedication to improving lives, Dr. Doe believes in providing personalized
            and holistic healthcare solutions.
          </Typography>

          <Typography variant="body2" color="text.secondary" paragraph>
            Throughout his career, Dr. Doe has successfully treated a wide range of
            medical conditions and is highly regarded for his diagnostic skills and
            ability to make patients feel at ease.
          </Typography>

          <Typography variant="body2" color="text.secondary" paragraph>
            Whether you're dealing with a chronic condition or seeking guidance for
            a healthier lifestyle, Dr. Doe is committed to helping you achieve your
            wellness goals with care, respect, and professionalism.
          </Typography>

          <Btn label="Book Appointment" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerPage;
