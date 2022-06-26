import { Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled("div")({
  display: "flex",
  fontSize: "20px",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "50px",
  background: "#c9ccd1",
  padding: "10px",
  marginTop: "50px",
});

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="h6">
        Copyright 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd.
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
