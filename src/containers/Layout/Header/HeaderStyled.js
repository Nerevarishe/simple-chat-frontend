import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.blackColor};

  @media (min-width: 1200px) {
    flex-direction: column;
    align-items: center;
    padding: 39px 42px;
  }
`;

export default HeaderStyled;
