import styled from "styled-components";
import withContext from "../../../hoc/withContext";
import { rem } from "../../../utils/utils";

const MainPosition = styled.main`
  min-width: 320px;
  height: 100vh;
  padding: ${rem("45px 16px")};

  @media (min-width: 1200px) {
    padding: 40px 65px 40px
      ${(props) =>
        props.state.header.isHeaderSideBarPulled ? "374px" : "209px"};
  }
`;

export default withContext(MainPosition);
