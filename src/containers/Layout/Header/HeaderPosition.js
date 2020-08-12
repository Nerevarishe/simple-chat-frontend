import styled from "styled-components";
import { rem } from "../../../utils/utils";

const HeaderPosition = styled.header`
  position: fixed;
  min-width: 320px;
  width: 100vw;
  height: ${rem("45px")};
  
  @media (min-width: 1200px) {
    min-width: 144px;
    width: 144px;
    height: 100vh;
  }
`;

export default HeaderPosition;
