import React from "react";
import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Sign Up:", values);
    },
  });

  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "#ffffffab",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          width: 350,
          borderRadius: 4,
          background: "linear-gradient(to bottom right, #6cc1c1a6, #ffffff9c)",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          mb={2}
          style={{ color: "#000" }}
        >
          Create a new <span style={{ color: "#14B8A6" }}>Account</span>
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h5" mt={2} mb={0.5}>
            Full Name
          </Typography>
          <TextField
            fullWidth
            margin="dense"
            id="fullName"
            name="fullName"
            placeholder="eg. John Doe"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            InputProps={{
              sx: {
                borderRadius: 6,
                backgroundColor: "#fff",
                height:50
              },
            }}
          />

          <Typography variant="h5" mt={2} mb={0.5}>
            Email
          </Typography>
          <TextField
            fullWidth
            margin="dense"
            id="email"
            name="email"
            placeholder="eg. johndoe@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              sx: {
                borderRadius: 6,
                backgroundColor: "#fff",
                height:50
              },
            }}
          />

          <Typography variant="h5" mt={2} mb={0.5}>
            Password
          </Typography>
          <TextField
            fullWidth
            margin="dense"
            id="password"
            name="password"
            type="password"
            placeholder="eg. 123456"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              sx: {
                borderRadius: 6,
                backgroundColor: "#fff",
                height:50
              },
            }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 999,
              backgroundColor: "#14B8A6",
              fontSize: "1rem",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#17b18a",
              },
            }}
          >
            Sign Up
          </Button>
        </form>

        <Typography variant="body2" textAlign="center" mt={2}>
          Already have an account?{" "}
          <Link
            href="#"
            underline="none"
            sx={{ color: "#14B8A6", fontWeight: 500 }}
          >
            Log In
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;
