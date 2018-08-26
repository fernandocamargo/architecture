import React from "react";

import { Primary as Heading } from "components/heading";
import Link from "components/link";
import { Brand as BrandMessages } from "i18n/messages";

export default ({ intl: { formatMessage }, className, url }) => {
  const title = formatMessage(BrandMessages.name);

  return (
    <Heading className={className}>
      <Link to={url} title={title}>
        {title}
      </Link>
    </Heading>
  );
};
