import styled from "styled-components";
import { rem } from "../../../utils/utils";

const FooterPosition = styled.footer`
  position: fixed;
  bottom: 0;
  min-width: 320px;
  width: 100vw;
  height: ${rem("45px")};
`;

export default FooterPosition;
