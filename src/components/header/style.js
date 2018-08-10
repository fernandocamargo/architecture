import styled from "react-emotion/macro";

import Brand from "components/brand";
import Menu from "components/menu";
import Link from "components/link";

export const HEIGHT = 70;
export const BRAND_WIDTH = 140;
export const BRAND_HEIGHT = BRAND_WIDTH * 0.293;

export default component => styled(component)`
  align-items: center;
  background-color: #fff;
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

  ${Link} {
    color: rgba(31, 41, 49, 1);
    font-size: 14px;
    text-decoration: none;

    &:before {
      color: #000;
      content: "\f108";
      display: inline-block;
      font-size: 22px;
    }
  }
`;
