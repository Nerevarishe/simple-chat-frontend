import styled from "styled-components";

const NavigationButtonsBlockStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.blackColor};
  list-style: none;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export default NavigationButtonsBlockStyled;
