import property from "lodash/property";
import styled from "react-emotion/macro";

export default component => styled(component)`
  display: inline-block;
  font-family: ${property("theme.typography.primary")};
  font-size: 1rem;

  .DateInput_input {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }
`;
