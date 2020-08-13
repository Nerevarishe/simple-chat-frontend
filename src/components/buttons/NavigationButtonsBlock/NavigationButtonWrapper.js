import styled from "styled-components";
import { rem } from "../../../utils/utils";

const NavigationButtonWrapper = styled.li`
  width: ${rem("40px")};
  height: ${rem("40px")};
  font-size: ${rem("40px")};
  
  @media (min-width: 1200px) {
    margin-bottom: 50px;
    
    :last-child {
      margin-bottom: 0;
    }
  }
`;

export default NavigationButtonWrapper;
