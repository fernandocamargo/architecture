import React from "react";
import { Link } from "react-router-dom";

import { Generic as GenericMessages } from "i18n/messages";

export default ({ intl: { formatMessage }, className }) => {
  const title = formatMessage(GenericMessages.brand);

  return (
    <h2 className={className}>
      <Link to="/" title={title}>
        {title}
      </Link>
    </h2>
  );
};
