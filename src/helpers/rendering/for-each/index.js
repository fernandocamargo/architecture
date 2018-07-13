import { createElement } from "react";

import ensureArray from "helpers/array/ensure";

export default collection => ({
  render: component =>
    ensureArray(collection).map(({ key, ...props }, index) =>
      createElement(component, { ...props, key: key || index })
    )
});

