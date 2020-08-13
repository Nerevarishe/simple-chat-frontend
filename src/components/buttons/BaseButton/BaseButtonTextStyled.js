import styled from "styled-components";
import withContext from "../../../hoc/withContext";
import { Bold24Font } from "../../fonts/Fonts";

const BaseButtonTextStyled = styled(Bold24Font)`
  margin-left: 27px;
  min-height: 60px;
  display: ${(props) =>
    props.state.header.isHeaderSideBarPulled ? "inline-flex" : "none"};
  align-items: center;
`;

export default withContext(BaseButtonTextStyled);
