import noop from "lodash/noop";
import { array, func } from "prop-types";

export const displayName = "Charts/X-Ray";

export const propTypes = {
  items: array.isRequired,
  children: func
};

export const defaultProps = {
  items: [],
  children: noop
};
