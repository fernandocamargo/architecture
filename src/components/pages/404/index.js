import React, { Fragment } from 'react';

export default props => (
  <Fragment>
    <pre style={{ border: 'dotted 1px blue', padding: '10px' }}>
      {JSON.stringify(props, null, 2)}
    </pre>
    <p>404();</p>
  </Fragment>
);
