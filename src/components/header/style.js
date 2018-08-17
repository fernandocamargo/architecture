import styled, { css } from "react-emotion/macro";

import increase from "helpers/number/increase";
import Brand from "components/brand";
import Menu, { Item as MenuItem } from "components/menu";
import Link from "components/link";

export const HEIGHT = 70;
export const ZINDEX = 10;
export const BRAND_WIDTH = 140;
export const BRAND_HEIGHT = BRAND_WIDTH * 0.293;
export const ICONS = {
  cockpit: '"\\f108"',
  rankings: '"\\f201"',
  reviews: '"\\f087"',
  spy: '"\\f1e5"',
  inventory: '"\\f1b2"',
  profit: '"\\f0d6"',
  "ppc-manager": '"\\f0a1"'
};

export const getIcon = ({ id }) => ({
  from: collection => collection[id]
});

export const getLinksFrom = ({ icons, items }) =>
  items.reduce(
    (stack, item, index) =>
      stack.concat(
        css`
          &:nth-child(${increase(index)}) ${Link}:before {
            content: ${getIcon(item).from(icons)};
          }
        `
      ),
    []
  );

export const icon = ({
  theme: {
    typography: { icon }
  }
}) => css`
  display: inline-block;
  font: ${`normal normal normal 14px/1 ${icon}`};
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const shadow = () => css`
  box-shadow: 0px 2px 5px 0px rgba(197, 206, 224, 0.61);
`;

export const menuItem = settings => props => {
  const {
    theme: {
      typography: { primary }
    }
  } = props;

  return css`
    ${MenuItem} {
      margin-left: 25px;

      ${getLinksFrom(settings)};

      ${Link} {
        color: rgba(31, 41, 49, 1);
        font-family: ${primary};
        font-size: 14px;
        font-weight: 400;
        position: relative;
        text-decoration: none;
        transition: color 0.25s linear;

        &:before {
          ${icon(props)};
          bottom: -3.5px;
          font-size: 22px;
          margin-right: 10px;
          position: relative;
        }

        &:after {
          bottom: calc(100% - 6px);
          color: rgba(91, 195, 76, 1);
          content: attr(aria-labelledby);
          display: block;
          font-size: 11.9px;
          font-weight: 400;
          position: absolute;
          left: calc(100% - 12px);
        }

        &:hover {
          color: rgba(93, 157, 252, 1);
        }
      }
    }
  `;
};

export default component => styled(component)`
  align-items: center;
  background-color: ${({
    theme: {
      colors: { white }
    }
  }) => white};
  display: flex;
  height: ${HEIGHT}px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: ${ZINDEX};
  ${shadow};

  &,
  ${Menu} {
    display: flex;
  }

  ${Brand} {
    margin: 0 20px;
    height: ${BRAND_HEIGHT}px;
    width: ${BRAND_WIDTH}px;
  }

  ${Menu} {
    &:after {
      background-color: rgba(233, 233, 233, 1);
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }
  }

  ${({ menu }) => menuItem({ icons: ICONS, items: menu })};
`;
