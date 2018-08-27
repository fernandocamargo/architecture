import { isValidElement, createElement } from "react";
import { compose, withProps } from "recompose";

import setStatics from "helpers/rendering/statics/set";
import ensureArray from "helpers/array/ensure";

import * as statics from "./statics";
import withStyle from "./style";

export const isString = object => typeof object === "string";

export const formatColumn = ({ label, ...column }) => ({
  children:
    isValidElement(label) || isString(label) ? label : createElement(label),
  ...column
});

export const formatRow = row => ({ content }) => ({
  children: content(row)
});

export const extractRowFrom = columns => row => ({
  children: ensureArray(columns).map(formatRow(row))
});

export default compose(
  withStyle,
  withProps(({ columns, rows }) => ({
    columns: ensureArray(columns).map(formatColumn),
    rows: ensureArray(rows).map(extractRowFrom(columns))
  })),
  setStatics(statics)
);
