import React from "react";

import Table from "components/table";
import { Star as IconStar } from "components/icons";
import { Highlight as FormHighlight } from "components/forms";

export default ({ rows }) => (
  <Table
    columns={[
      {
        identity: "starred",
        label: <IconStar />,
        content: ({ starred }) => (
          <FormHighlight
            highlighted={starred}
            onChange={({ highlighted }) =>
              console.log("highlight();", highlighted)
            }
          />
        )
      }
    ]}
    rows={rows}
  />
);
