import React from "react";
import Header from "./CommonComponenet/Header/Header";
import Login from "./Layout/Login";
import Footer from "./CommonComponenet/Footer/Footer";
import Btn from "./CommonComponenet/CommonButtons/Btn";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Login />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
