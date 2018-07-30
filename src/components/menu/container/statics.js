import { node, string } from "prop-types";
import { intlShape } from "react-intl";

import {
  propTypes as MenuItemsPropTypes,
  defaultProps as MenuItemsDefaultProps
} from "components/menu/items/statics";

export const displayName = "Menu";

export const propTypes = {
  intl: intlShape.isRequired,
  title: node,
  className: string.isRequired,
  children: MenuItemsPropTypes.children
};

export const defaultProps = {
  children: MenuItemsDefaultProps.children
};
