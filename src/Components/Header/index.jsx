import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../../Hooks";
import { useNavigate } from "react-router-dom";

// import mLogo from "../../static/images/logo.png";
import logo from "../../static/images/logo_2x.png";
import { StyledButton } from "../Button";
import Cart from "../Cart/Cart";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  box-shadow: 0px 15px 10px -15px #111;
  height: fit-content;
`;
const StyledImage = styled.img.attrs({
  src: `${logo}`,
  alt: "logo",
})`
  cursor: pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 60%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 40%;
`;

const Header = (props) => {
  const { width } = useWindowSize();
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleHomePageClick = () => {
    navigate("/");
  };

  return (
    <StyledHeader>
      <HeaderContainer>
        <LeftContainer>
          <StyledImage deviceWidth={width} width={120} height={80} />
          <StyledButton onClick={handleHomePageClick}> Home</StyledButton>
          <StyledButton> Products</StyledButton>
        </LeftContainer>
        <RightContainer>
          <div>
            <StyledButton onClick={handleSignIn}>SignIn</StyledButton>
            <StyledButton onClick={handleSignUp}>SignUp</StyledButton>
          </div>
          <Cart />
        </RightContainer>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
