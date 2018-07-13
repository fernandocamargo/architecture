import React from "react";

export default ({ fields, ...props }) => (
  <form>
    <fieldset>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      {fields}
    </fieldset>
  </form>
);
