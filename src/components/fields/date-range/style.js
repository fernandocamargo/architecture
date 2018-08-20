import styled from "react-emotion/macro";

export default component => styled(component)`
  display: inline-block;
  font-family: ${({
    theme: {
      typography: { primary }
    }
  }) => primary};
`;
