import styled from "styled-components";
import BaseInputStyled from "../../BaseInput/BaseInputStyled";
import withContext from "../../../../hoc/withContext";

const TypeMessageInputStyled = styled(BaseInputStyled)`
  width: 100vw;
  text-align: left;

  @media (min-width: 1200px) {
    width: calc(
      100vw -
        ${(props) =>
          props.state.header.isHeaderSideBarPulled ? "326px" : "161px"}
    );
  }
`;

export default withContext(TypeMessageInputStyled);
