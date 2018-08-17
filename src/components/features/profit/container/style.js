import styled from "react-emotion/macro";

import {
  HEIGHT as MENU_HEIGHT,
  ZINDEX as MENU_ZINDEX,
  menuItem,
  shadow
} from "components/header/style";
import Menu, { Item as MenuItem } from "components/menu";

export const HEIGHT = MENU_HEIGHT / 2;
export const TOP = MENU_HEIGHT;
export const ZINDEX = MENU_ZINDEX - 1;
export const ICONS = {
  overview: '"\\f109"',
  costs: '"\\f202"',
  loss: '"\\f088"',
  breakdown: '"\\f1e6"',
  returns: '"\\f1b3"',
  promos: '"\\f0d1"',
  "global-overview": '"\\f0a2"'
};

export default component => styled(component)`
  & > {
    ${Menu} {
      align-items: center;
      background-color: #fff;
      display: flex;
      height: ${HEIGHT}px;
      left: 0;
      position: fixed;
      top: ${TOP}px;
      width: 100vw;
      z-index: ${ZINDEX};
      ${shadow};
    }
  }

  ${MenuItem} {
    margin-left: 50px;
  }

  ${({ menu }) => menuItem({ icons: ICONS, items: menu })};
`;
