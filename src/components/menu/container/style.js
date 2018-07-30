import styled from "react-emotion";

export default component => styled(component)`
  & > h4 {
    display: none;
  }

  & > ul {
    display: flex;
    justify-content: space-between;

    & > li ul {
      margin-left: 2rem;
    }
  }
`;
