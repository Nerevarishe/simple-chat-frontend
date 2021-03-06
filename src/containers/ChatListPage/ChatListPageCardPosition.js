import styled from "styled-components";
import { rem } from "../../utils/utils";

const ChatListPageCardPosition = styled.div`
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

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export default ChatListPageCardPosition;
