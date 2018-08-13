import styled from "react-emotion/macro";

import { HEIGHT } from "components/header/style";
import Menu, { Item as MenuItem } from "components/menu";

export default component => styled(component)`
  ${Menu} {
    align-items: center;
    background-color: #fff;
    display: flex;
    height: ${HEIGHT / 2}px;
    left: 0;
    position: fixed;
    top: ${HEIGHT}px;
    width: 100vw;
  }
`;
