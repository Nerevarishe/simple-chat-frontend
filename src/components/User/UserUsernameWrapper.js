import styled from "styled-components";
import withContext from "../../hoc/withContext";

const UserUsernameWrapper = styled.div`
  white-space: nowrap;

  @media (min-width: 1200px) {
    display: ${(props) =>
      props.state.header.isHeaderSideBarPulled ? "initial" : "none"};
  }
`;

export default withContext(UserUsernameWrapper);
