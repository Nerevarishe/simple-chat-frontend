import styled from "styled-components";
import { rem } from "../../utils/utils";

const BaseFont = styled.span`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
`;

export const Regular18Font = styled(BaseFont)`
  font-size: ${rem("18px")};
  line-height: ${rem("21px")};
`;

export const Regular14Font = styled(BaseFont)`
  font-size: ${rem("14px")};
  line-height: ${rem("16px")};
`;

export const Regular10Font = styled(BaseFont)`
  font-size: ${rem("10px")};
  line-height: ${rem("12px")};
`;

export const Bold14Font = styled(BaseFont)`
  font-weight: bold;
  font-size: ${rem("14px")};
  line-height: ${rem("16px")};
`;

// Not responsive fonts
export const Bold24Font = styled(BaseFont)`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`;
