import { string, arrayOf, shape } from "prop-types";

import wrap from "helpers/function/wrap";

export const displayName = "Menu/Item";

export const propTypes = {
  title: string.isRequired,
  url: string.isRequired,
  children: arrayOf(shape(wrap(() => propTypes)))
};

export const defaultProps = {
  children: []
};
