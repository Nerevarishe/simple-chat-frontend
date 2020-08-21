import styled from "styled-components";
import { rem } from "../../../utils/utils";
import BaseButtonStyled from "../BaseButton/BaseButtonStyled";

const SendMessageButtonStyled = styled(BaseButtonStyled)`
  font-size: ${rem("20px")};
  color: ${(props) => props.theme.colors.blackColor};
  
  @media (min-width: 1200px) {
    font-size: 28px;
  }
`;

export default SendMessageButtonStyled;
