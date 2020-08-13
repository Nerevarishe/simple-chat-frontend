import styled from "styled-components";
import withContext from "../../hoc/withContext";
import { rem } from "../../utils/utils";

const UserUsernameWrapper = styled.div`
  margin-left: ${rem("8px")};
  white-space: nowrap;

  @media (min-width: 1200px) {
    display: ${(props) =>
      props.state.header.isHeaderSideBarPulled ? "initial" : "none"};
    margin-left: 27px;
    font-size: 24px;
  }
`;

export default withContext(UserUsernameWrapper);
