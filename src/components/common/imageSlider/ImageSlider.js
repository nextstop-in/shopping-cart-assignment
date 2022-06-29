import React from "react";
import styled from "@emotion/styled";
import { Carousel } from "react-responsive-carousel";
import { useAxios } from "../../../Hooks";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StyledBanner = styled("div")({
  marginTop: "50px",
  marginBottom: "10px",
  boxShadow: "0px 15px 10px -15px #000",
});

const Banner = () => {
  const { response: bannerData = [] } = useAxios({
    method: "GET",
    url: "/banner",
  });
  return (
    <StyledBanner>
      <Carousel
        autoPlay={true}
        showArrows={true}
        showThumbs={false}
        interval={2000}
        showStatus={false}
      >
        {bannerData.map((item) => {
          return (
            <img
              src={require(`../../../${item.bannerImageUrl}`)}
              alt={item.bannerImageUrl}
              key={item.id}
            />
          );
        })}
      </Carousel>
    </StyledBanner>
  );
};

export default Banner;
