import { arrayOf, shape } from "prop-types";

import * as MenuItem from "components/menu/item/statics";

export const displayName = "Menu/Items";

export const propTypes = {
  children: arrayOf(shape(MenuItem.propTypes))
};

export const defaultProps = {
  children: []
};
