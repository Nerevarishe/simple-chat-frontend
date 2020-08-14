import styled from "styled-components";
import {rem} from "../../../utils/utils";

const LoginButtonStyled = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: ${rem("4px 32px")};
  background: ${props=>props.theme.colors.blackColor};
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

export default LoginButtonStyled;
