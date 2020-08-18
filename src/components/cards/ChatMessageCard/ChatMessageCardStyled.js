import styled from "styled-components";
import BaseCard from "../BaseCard";
import { rem } from "../../../utils/utils";

const ChatMessageCardStyled = styled(BaseCard)`
  min-width: 270px;
  min-height: 156px;
  padding: ${rem("8px")};
  margin-bottom: ${rem("16px")};

  :last-child {
    margin-bottom: 0;
  }
`;

export default ChatMessageCardStyled;
