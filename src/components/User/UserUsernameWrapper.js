import styled from "styled-components";
import withContext from "../../hoc/withContext";
import { rem } from "../../utils/utils";

const UserUsernameWrapper = styled.span`
  white-space: nowrap;
  ${(props) => (props.messageCard ? "margin-top: " + rem("-15px") + ";" : null)}
  color: ${(props) =>
    props.messageCard || props.textBlack
      ? props.theme.colors.blackColor
      : props.theme.colors.whiteColor};

  @media (min-width: 1200px) {
    font-size: 24px;
    display: ${(props) =>
      props.messageCard || props.textBlack
        ? "initial"
        : props.state.header.isHeaderSideBarPulled
        ? "initial"
        : "none"};
    
  }
`;

export default withContext(UserUsernameWrapper);
