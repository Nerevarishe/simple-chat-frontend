import styled from "styled-components";

const HeaderSideBarStyled = styled.ul`
  display: none;

  @media (min-width: 1200px) {
    display: initial;
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default HeaderSideBarStyled;
