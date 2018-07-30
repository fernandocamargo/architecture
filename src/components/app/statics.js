import { node, string } from "prop-types";

import {
  propTypes as MenuPropTypes,
  defaultProps as MenuDefaultProps
} from "components/menu/container/statics";

export const displayName = "App";

export const propTypes = {
  children: node.isRequired,
  className: string.isRequired,
  menu: MenuPropTypes.children
};

export const defaultProps = {
  menu: MenuDefaultProps.children
};
