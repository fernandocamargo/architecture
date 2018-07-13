import React from "react";

export default ({ title, label, value, ...field }) => (
  <form>
    <fieldset>
      {title && <legend>{title}</legend>}
      <div className="field text">
        {label && <label htmlFor="">{label}</label>}
        <input type="text" defaultValue={value} {...field} />
      </div>
    </fieldset>
  </form>
);
