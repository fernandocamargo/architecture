import { arrayOf, shape } from "prop-types";

import { propTypes as MenuItemPropTypes } from "components/menu/item/statics";

export const displayName = "Menu/Items";

export const propTypes = {
  children: arrayOf(shape(MenuItemPropTypes)).isRequired
};

export const defaultProps = {
  children: []
};
