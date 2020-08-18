import styled from "styled-components";

const BaseCard = styled.div`
  background: ${(props) => props.theme.colors.whiteColor};
  border: 1px solid ${(props) => props.theme.colors.blackColor};
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.shadowColor};
`;

export default BaseCard;
