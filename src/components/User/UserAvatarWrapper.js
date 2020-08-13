import styled from "styled-components";
import { rem } from "../../utils/utils";

const UserAvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${rem("35px")};
  height: ${rem("35px")};
  margin-right: ${rem("8px")};
  
  @media (min-width: 1200px) {
    width: 60px;
    height: 60px;
    margin-right: 27px;
  }
`;

export default UserAvatarWrapper;
