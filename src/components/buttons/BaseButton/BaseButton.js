import styled from "styled-components";
import { rem } from "../../../utils/utils";

const BaseButton = styled.button`
  width: ${rem("40px")};
  height: ${rem("40px")};
  font-size: ${rem("40px")};
  outline: none;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
  :hover,
  :focus,
  :active {
    outline: none;
  }
`;

export default BaseButton;
