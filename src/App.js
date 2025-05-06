import React from "react";
import Header from "./CommonComponenet/Header/Header";
import Login from "./Layout/Login";
import Footer from "./CommonComponenet/Footer/Footer";
import Btn from "./CommonComponenet/CommonButtons/Btn";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import SignUp from "./Layout/LoginLayout/SignUp";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Login />
        <SignUp />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
