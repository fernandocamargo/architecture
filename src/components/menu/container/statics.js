import { node, string } from "prop-types";
import { intlShape } from "react-intl";

import * as MenuItems from "components/menu/items/statics";

export const displayName = "Menu";

export const propTypes = {
  intl: intlShape.isRequired,
  title: node,
  className: string.isRequired,
  ...MenuItems.propTypes
};

export const defaultProps = {
  ...MenuItems.defaultProps
};
