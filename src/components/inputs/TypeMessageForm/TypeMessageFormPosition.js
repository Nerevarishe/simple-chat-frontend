import styled from "styled-components";
import { rem } from "../../../utils/utils";
import withContext from "../../../hoc/withContext";

const TypeMessageFormPosition = styled.div`
  position: fixed;
  left: 0;
  bottom: ${rem("45px")};

  @media (min-width: 1200px) {
    // left: 144px;
    // 309px
    left: ${(props) =>
      props.state.header.isHeaderSideBarPulled ? "309px" : "144px"};
    bottom: 0;
  }
`;

export default withContext(TypeMessageFormPosition);
