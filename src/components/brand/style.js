import styled from "react-emotion/macro";

import Link from "components/link";

export default component => styled(component)`
  ${Link} {
    background: url(https://tool.sellics.com/Amazon-Monitoring/javax.faces.resource/img/sellics2_logo.svg.xhtml);
    background-size: contain;
    display: block;
    height: inherit;
    overflow: hidden;
    text-indent: -100vw;
    width: inherit;
  }
`;
