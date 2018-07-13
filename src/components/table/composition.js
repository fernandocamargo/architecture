import { compose, withProps } from "recompose";

import setStatics from "helpers/rendering/statics/set";
import ensureArray from "helpers/array/ensure";

import * as statics from "./statics";

export const formatColumn = ({ label, ...column }) => ({
  children: label,
  ...column
});

export const formatRow = row => ({ content }) => ({
  children: content(row)
});

export const extractRowFrom = columns => row => ({
  children: ensureArray(columns).map(formatRow(row))
});

export default compose(
  setStatics(statics),
  withProps(({ columns, rows }) => ({
    columns: ensureArray(columns).map(formatColumn),
    rows: ensureArray(rows).map(extractRowFrom(columns))
  }))
);
