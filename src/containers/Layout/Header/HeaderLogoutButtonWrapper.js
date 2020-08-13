import styled from "styled-components";
import { rem } from "../../../utils/utils";

const HeaderLogoutButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${rem("25px")};
  font-size: ${rem("25px")};
  justify-content: flex-end;
  margin: ${rem("10px 16px 10px 0")};

  @media (min-width: 1200px) {
    flex-direction: column;
    justify-content: flex-end;
    width: unset;
    height: 100%;
    margin: 0;
    font-size: 60px;
  }
`;

export default HeaderLogoutButtonWrapper;
