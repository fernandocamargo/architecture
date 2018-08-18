import styled from "react-emotion/macro";

import {
  HEIGHT as MENU_HEIGHT,
  ZINDEX as MENU_ZINDEX,
  menuItem,
  shadow
} from "components/header/style";
import Menu, { Item as MenuItem } from "components/menu";
import Link from "components/link";

export const HEIGHT = MENU_HEIGHT * 0.75;
export const WIDTH = 1326;
export const TOP = MENU_HEIGHT;
export const PADDING_TOP = 20;
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
  margin: 0 auto;
  max-width: ${WIDTH}px;
  padding-top: ${({ menu }) =>
    !!menu.length ? `${HEIGHT + PADDING_TOP}px` : `${PADDING_TOP}px`};

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

      ${MenuItem} {
        ${Link} {
          position: relative;

          &.active {
            background-color: rgba(93, 157, 252, 1);
            color: #fff;
            margin: -18px -10px;
            padding: 18px 10px;
          }
        }

        &:first-child {
          ${Link} {
            margin-left: -15px;

            &.active {
              margin-left: -25px;
            }
          }
        }
      }
    }
  }

  ${({ menu }) => menuItem({ icons: ICONS, items: menu })};
`;
