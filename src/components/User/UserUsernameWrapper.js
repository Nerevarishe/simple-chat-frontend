import styled from "styled-components";
import withContext from "../../hoc/withContext";
import {Bold14Font} from "../fonts/Fonts";

const UserUsernameWrapper = styled(Bold14Font)`
  white-space: nowrap;

  @media (min-width: 1200px) {
    font-size: 24px;
    display: ${(props) =>
      props.state.header.isHeaderSideBarPulled ? "initial" : "none"};
  }
`;

export default withContext(UserUsernameWrapper);
