import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  height: 40px;
  padding: 10px;
  border: none;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  letter-spacing: -0.1px;
  background: ${(props) =>
    props.variant === "standard"
      ? props?.theme?.color?.main || "red"
      : "white"};
  color: ${(props) => (props.variant === "standard" ? "#fff" : "inherit")};
  &:hover {
    outline: none;
    background: ${(props) => props?.theme?.color?.main || "red"};
    color: #fff;
    cursor: pointer;
  }
`;
StyledButton.defaultProps = {
  varient: "default",
};
