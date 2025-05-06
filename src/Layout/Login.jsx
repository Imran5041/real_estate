import React from "react";
import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Login:", values);
    },
  });
const handleSignUp = () =>{
  navigate("/signUp")
}
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
        elevation={2}
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
          Please enter your <span style={{ color: "#14B8A6" }}>Login</span>{" "}
          details
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h5" mt={2} mb={0.5}>
            Email
          </Typography>
          <TextField
            fullWidth
            margin="dense"
            id="email"
            name="email"
            placeholder="eg. John Doe"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputProps={{
              sx: {
                borderRadius: 6, // You can adjust the rounding here
                backgroundColor: "#fff",
                height:50,
                '& input::placeholder': {
                  fontSize: '0.8rem', // adjust as needed
                },
            
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
                height:50,
                '& input::placeholder': {
                  fontSize: '0.8rem', // adjust as needed
                },
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
                backgroundColor: "#14B8A6",
              },
            }}
          >
            Login
          </Button>
        </form>

        <Typography variant="body2" textAlign="center" mt={2}>
          New user?{" "}
          <Link
            href="#"
            underline="none"
            sx={{ color: "#14B8A6", fontWeight: 500 }}
            onClick={handleSignUp}
          >
            Sign-Up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
