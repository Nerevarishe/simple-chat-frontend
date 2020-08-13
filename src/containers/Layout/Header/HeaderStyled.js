import styled from "styled-components";
import withContext from "../../../hoc/withContext";

const HeaderStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.blackColor};

  @media (min-width: 1200px) {
    flex-direction: column;
    ${(props) =>
      props.state.header.isHeaderSideBarPulled ? "align-items: start;" : null}
    padding: 39px 42px;
  }
`;

export default withContext(HeaderStyled);
