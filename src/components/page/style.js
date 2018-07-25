import styled from "react-emotion";

export default component => styled(component)`
  .menu > ul {
    display: flex;
    justify-content: space-between;
  }

  .content,
  .widget:not(:first-child) {
    margin-top: 1rem;
  }
`;
