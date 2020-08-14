import styled from "styled-components";
import { rem } from "../../../utils/utils";

const LoginFormInputWrapper = styled.div`
  justify-content: center;
  margin-bottom: ${rem("24px")};

  :last-child {
    margin-bottom: 0;
  }

  @media (min-width: 1200px) {
    margin-bottom: 40px;

    :last-child {
      margin-bottom: 0;
    }
  }
`;

export default LoginFormInputWrapper;
