import { string, oneOfType, func, arrayOf, shape } from "prop-types";

import circular from "helpers/function/wrap";

export const displayName = "Menu/Item";

export const propTypes = {
  title: string.isRequired,
  url: oneOfType([string.isRequired, func.isRequired]),
  children: arrayOf(shape(circular(() => propTypes)))
};

export const defaultProps = {
  children: []
};
