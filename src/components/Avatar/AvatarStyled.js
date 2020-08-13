import styled from "styled-components";
import { rem } from "../../utils/utils";

const AvatarStyled = styled.img`
  width: ${rem("35px")};
  height: ${rem("35px")};
  
  @media (min-width: 1200px) {
    width: 60px;
  height: 60px;
  }
`;

export default AvatarStyled;
