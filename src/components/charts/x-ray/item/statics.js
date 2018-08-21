import { string, number, arrayOf, shape } from "prop-types";

export const displayName = "Charts/X-Ray/Column";

export const propTypes = {
  type: string.isRequired,
  value: number,
  percentage: number,
  details: arrayOf(shape({}))
};

export const defaultProps = {
  value: 0,
  percentage: 0,
  details: []
};
