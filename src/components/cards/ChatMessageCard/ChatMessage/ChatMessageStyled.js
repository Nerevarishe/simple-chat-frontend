import styled from "styled-components";
import { Regular10Font } from "../../../fonts/Fonts";
import { rem } from "../../../../utils/utils";

const ChatMessageStyled = styled(Regular10Font)`
  display: inline-block;
  min-width: ${rem("210px")};
  width: 100%;
  margin-top: ${rem("-15px")};
  margin-bottom: 0;
  text-align: justify;
  overflow-wrap: break-word;
`;

export default ChatMessageStyled;
