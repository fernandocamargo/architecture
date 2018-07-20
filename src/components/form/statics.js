import noop from "lodash/noop";
import { arrayOf, shape, string, func } from "prop-types";

export const displayName = "Form";

export const propTypes = {
  fields: arrayOf(
    shape({
      type: string.isRequired
    }).isRequired
  ).isRequired,
  onChange: func,
  onSubmit: func
};

export const defaultProps = {
  fields: [],
  onChange: noop,
  onSubmit: noop
};
