import styled from "styled-components";
import { Regular10Font } from "../../../fonts/Fonts";
import { rem } from "../../../../utils/utils";

const ChatMessageStyled = styled(Regular10Font)`
  min-width: ${rem("210px")};
  margin-top: ${rem("-15px")};
  margin-bottom: 0;
  text-align: justify;
`;

export default ChatMessageStyled;
