import styled from "styled-components";
import { rem } from "../../../utils/utils";

const TypeMessageFormSendButtonPosition = styled.div`
  position: fixed;
  right: ${rem("12px")};
  bottom: ${rem("51px")};
  
  @media (min-width: 1200px) {
    right: 21px;
    bottom: 21px;
  }
`;

export default TypeMessageFormSendButtonPosition;
