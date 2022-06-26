import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Router from "./Route/Router";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Styles/theme";

const StyledContainer = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const StyledPages = styled("div")({
  display: "flex",
  justifyContent: "center",
});

function App() {
  return (
    // <ThemeProvider theme={{ ...theme }}>
    <StyledContainer>
      <Header />
      <StyledPages>
        <Router />
      </StyledPages>
      <Footer />
    </StyledContainer>
    // </ThemeProvider>
  );
}

export default App;
