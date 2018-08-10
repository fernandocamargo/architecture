import styled from "react-emotion/macro";

import List from "components/list";

export default component => styled(component)`
  & > {
    h4 {
      display: none;
    }

    ${List} {
      display: inherit;
    }
  }
`;
