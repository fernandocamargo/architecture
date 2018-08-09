import styled from "react-emotion/macro";

export default component => styled(component)`
  .content,
  .widget:not(:first-child) {
    margin-top: 1rem;
  }
`;
