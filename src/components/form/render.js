import React from "react";

export default ({ className, submit, title, fields }) => (
  <form className={className} onSubmit={submit}>
    <fieldset>
      {title && <legend>{title}</legend>}
      {fields}
    </fieldset>
  </form>
);
