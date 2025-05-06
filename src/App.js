import React from "react";
import Header from "./CommonComponenet/Header/Header";
import Login from "./Layout/Login";
import Footer from "./CommonComponenet/Footer/Footer";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import SignUp from "./Layout/LoginLayout/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const Home = () => (
    <>
      <Header />
      <Footer />
    </>
  );
  const LoginLayout = () => (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
  const SignUpLayout = () => (
    <>
      <Header />
      <SignUp />
      <Footer />
    </>
  );
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginLayout />} />
            <Route path="/signUp" element={<SignUpLayout />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
