import React from "react";
import styled from "@emotion/styled";
import { StyledButton } from "../Button";
import { Typography } from "@mui/material";

const StyledCard = styled("div")(({ index }) => ({
  display: "flex",
  justifyContent: "space-between",
  height: "250px",
  background: "#fff",
  boxShadow: " 0px 15px 10px -15px #000",
  marginBottom: "10px",
  padding: "20px",
  boxSizing: "border-box",
  flexDirection: Boolean(index % 2) ? "row" : "row-reverse",
}));

const CardItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  width: "50%",
});

const StyledImg = styled("img")({
  maxWidth: "60%",
  height: "auto",
  padding: 0,
  margin: 0,
  alignSelf: "center",
});

const CategoryCard = ({ cardItem, index }) => {
  return (
    <>
      <StyledCard index={index}>
        <CardItem>
          <Typography variant="h4">{cardItem.name}</Typography>
          <Typography variant="h7">{cardItem.description}</Typography>
          <StyledButton variant="standard">{`Explore ${cardItem.key}`}</StyledButton>
        </CardItem>
        <CardItem>
          {cardItem.imageUrl && (
            <StyledImg
              src={require(`../../${cardItem.imageUrl}`)}
              alt={cardItem.key}
            />
          )}
        </CardItem>
      </StyledCard>
    </>
  );
};

export default CategoryCard;
