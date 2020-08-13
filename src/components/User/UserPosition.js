import styled from "styled-components";
import { rem } from "../../utils/utils";

const UserPosition = styled.div`
  margin: ${rem("5px 8px")};

  @media (min-width: 1200px) {
    margin: 0;
    width: 60px;
    height: 60px;
    margin-bottom: 40px;
  }
`;

export default UserPosition;
