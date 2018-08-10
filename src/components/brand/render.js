import React from "react";

import Link from "components/link";
import { Generic as GenericMessages } from "i18n/messages";

export default ({ intl: { formatMessage }, className, url }) => {
  const title = formatMessage(GenericMessages.brand);

  return (
    <h2 className={className}>
      <Link to={url} title={title}>
        {title}
      </Link>
    </h2>
  );
};
