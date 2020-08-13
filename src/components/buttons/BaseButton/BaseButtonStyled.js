import styled from "styled-components";

const BaseButtonStyled = styled.button`
  display: flex;
  outline: none;
  border: none;
  padding: 0;
  background: none;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.whiteColor};
  cursor: pointer;
  :hover,
  :focus,
  :active {
    color: ${(props) => props.theme.colors.orangeColor};
    outline: none;
  }
`;

export default BaseButtonStyled;
