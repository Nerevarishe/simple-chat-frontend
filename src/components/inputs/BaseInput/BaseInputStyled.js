import styled from "styled-components";
import { rem } from "../../../utils/utils";

const BaseInputStyled = styled.input`
  width: ${rem("270px")};
  height: ${rem("33px")};
  border: 1px solid ${(props) => props.theme.colors.blackColor};
  padding: ${rem("8px 44px 9px 32px")};
  background: ${(props) => props.theme.colors.whiteColor};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: ${rem("14px")};
  line-height: ${rem("16px")};
  text-align: center;
  outline: none;
  
  ::placeholder {
    color: ${(props) => props.theme.colors.grayColor};
  }
  
  @media (min-width: 1200px) {
    height: 70px;
    font-size: 28px;
  }
`;

export default BaseInputStyled;
