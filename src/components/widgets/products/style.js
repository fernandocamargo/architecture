import styled from "react-emotion/macro";

import { Secondary as Heading } from "components/heading";

export default component => styled(component)`
  font-family: ${({
    theme: {
      typography: { primary }
    }
  }) => primary};
  padding: 20px;

  ${Heading} {
    font-size: 1.25rem;
  }
`;
