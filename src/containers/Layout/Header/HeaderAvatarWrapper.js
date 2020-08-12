import styled from "styled-components";
import { rem } from "../../../utils/utils";

const HeaderAvatarWrapper = styled.div`
  margin: ${rem("5px 8px")};

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    width: 60px;
    height: 60px;
    margin-bottom: 40px;
  }
`;

export default HeaderAvatarWrapper;
