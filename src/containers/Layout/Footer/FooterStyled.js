import styled from "styled-components";

const FooterStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.blackColor};
`;

export default FooterStyled;
