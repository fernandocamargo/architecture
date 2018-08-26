import styled, { css } from "react-emotion/macro";

import Widget from "components/widget";

export const widget = () => css`
  background-color: #fff;
  border: solid 1px rgba(233, 233, 233, 1);
  border-radius: 4px;
  box-shadow: 0px 1px 8px -2px rgb(197, 206, 224);
  overflow: hidden;
`;

export default component => styled(component)`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "first first"
    "second third"
    "fourth fourth";
  grid-template-columns: 50% 50%;

  ${Widget} {
    &:not(:nth-child(1)) {
      ${widget};
    }

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
      border: solid 1px #969696;
      grid-area: fourth;
    }
  }
`;
