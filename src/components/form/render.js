import React from "react";

export default ({ submit, title, fields }) => (
  <form onSubmit={submit}>
    <fieldset>
      {title && <legend>{title}</legend>}
      {fields}
    </fieldset>
  </form>
);
