import styled from "styled-components";
import { rem } from "../../utils/utils";

const PeoplesPageCardPosition = styled.div`
  margin-bottom: ${rem("8px")};

  :first-child {
    margin-top: ${rem("8px")};
  }

  :last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    margin-bottom: 40px;

    :first-child {
      margin-top: 40px;
    }
  }
`;

export default PeoplesPageCardPosition;
