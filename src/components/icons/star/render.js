import React from "react";
import classnames from "classnames";

import "./styles.css";

export default ({ active }) => (
  <span className={classnames("icon", "star", { active })}>
    {active ? "★" : "☆"}
  </span>
);
