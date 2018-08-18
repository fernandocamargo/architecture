import styled from "react-emotion/macro";

import Widget from "components/widget";

export default component => styled(component)`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "first first"
    "second third"
    "fourth fourth";

  ${Widget} {
    &:nth-child(1) {
      grid-area: first;
    }

    &:nth-child(2) {
      grid-area: second;
    }

    &:nth-child(3) {
      grid-area: third;
    }

    &:nth-child(4) {
      grid-area: fourth;
    }
  }
`;
