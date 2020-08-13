import styled from "styled-components";
import { rem } from "../../../utils/utils";

const HeaderLogoutButtonWrapper = styled.div`
  display: flex;
  // width: ${rem("25px")};
  width: 100%;
  height: ${rem("25px")};
  font-size: ${rem("25px")};
  justify-content: flex-end;
  margin: ${rem("10px 16px 10px 0")};
`;

export default HeaderLogoutButtonWrapper;
