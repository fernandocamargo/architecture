import styled from "react-emotion";

export default component => styled(component)`
  .content,
  .widget:not(:first-child) {
    margin-top: 1rem;
  }
`;
