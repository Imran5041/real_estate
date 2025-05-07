import React from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Btn from "../../CommonComponenet/CommonButtons/Btn";
import CountUp from "react-countup";

const stats = [
  { label: "Years of Experience", value: 30, suffix: "+", color: "#FFC107" },
  { label: "Numbers of Clinic", value: 15, suffix: "+", color: "#7C4DFF" },
  { label: "Patient Believe!", value: 100, suffix: "%", color: "#00C853" },
];

const DoctorCard = ({ img, bg }) => (
  <Box
    sx={{
      borderRadius: 3,
      overflow: "hidden",
      backgroundColor: bg,
      p: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 200,
    }}
  >
    <Avatar src={img} alt="doctor" sx={{ width: 120, height: 120 }} />
  </Box>
);

export default function MainBanner() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: { xs: 2, md: 8 },
        py: 6,
        display: "flex",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={isSmall ? "column" : "row"}
      >
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            We help patients <br />
            live a healthy, <br />
            longer life.
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            mb={3}
            sx={{ width: { xs: "100%", md: 685 } }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
            quaerat cumque fugit, perspiciatis cum nemo aperiam, aut quia earum
            amet architecto, modi odio. Soluta unde ducimus perferendis?
          </Typography>

          <Btn label="Request an Appointment" />

          {/* Stats */}
          <Grid container spacing={3} mt={5}>
            {stats.map((stat) => (
              <Grid item xs={4} key={stat.label}>
                <Typography variant="h5" fontWeight="bold">
                  <Box component="span" sx={{ color: stat.color }}>
                    <CountUp end={stat.value} duration={1.5} />
                    {stat.suffix}
                  </Box>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="/Images/doctor1.png"
                  style={{ width: "100%", borderRadius: 8, height: "auto" }}
                />
              </Box>
            </Grid>

            {/* This spacer Grid can be hidden on xs/sm screens */}
            <Grid
              item
              xs={false}
              sm={6}
              display={{ xs: "none", sm: "block" }}
            />

            <Grid item xs={12} sm={6}>
              <Box>
                <img
                  src="/Images/doctor2.png"
                  style={{
                    width: "100%",
                    marginTop: 30,
                    borderRadius: 8,
                    height: "auto",
                  }}
                />
              </Box>
              <Box>
                <img
                  src="/Images/doctor3.png"
                  style={{
                    width: "100%",
                    marginTop: 30,
                    borderRadius: 8,
                    height: "auto",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
