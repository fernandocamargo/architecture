import styled from "react-emotion/macro";

import Header from "components/header";
import Menu from "components/menu";

export default component => styled(component)`
  h2 {
  }

  ${Header} {
    ${Menu} {
      background-color: #cda;
    }
  }
`;
