import styled, { css } from "react-emotion/macro";

import Brand from "components/brand";
import Menu, { Item as MenuItem } from "components/menu";
import Link from "components/link";

export const HEIGHT = 70;
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

export const getIconFrom = ({ id }) => ICONS[id];

export const getLinksFrom = items =>
  items.reduce(
    (stack, item, index) =>
      stack.concat(
        css`
          &:nth-child(${index}) ${Link}:before {
            content: ${getIconFrom(item)};
          }
        `
      ),
    []
  );

export const icon = ({
  theme,
  theme: {
    typography: { icon }
  },
  ...props
}) => css`
  display: inline-block;
  font: ${`normal normal normal 14px/1 ${icon}`};
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export default component => styled(component)`
  align-items: center;
  background-color: ${({
    theme: {
      colors: { white }
    }
  }) => white};
  box-shadow: 0px 2px 5px 0px rgba(197, 206, 224, 0.61);
  display: flex;
  font-family: ${({
    theme: {
      typography: { primary }
    }
  }) => primary};
  height: ${HEIGHT}px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;

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

  ${MenuItem} {
    margin-left: 25px;

    ${Link} {
      color: rgba(31, 41, 49, 1);
      font-size: 14px;
      text-decoration: none;
      transition: color 0.25s linear;

      &:before {
        ${icon};
        font-size: 22px;
        margin-right: 10px;
      }

      &:hover {
        color: rgba(93, 157, 252, 1);
      }
    }

    ${({ menu }) => getLinksFrom(menu)};
  }
`;
