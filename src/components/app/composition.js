import { cloneElement } from 'react';
import { compose, withProps } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import mapStateToProps from './selectors';

export default compose(
  withRouter,
  connect(mapStateToProps),
  withProps(({ children, ...props }) => ({
    children: cloneElement(children, props),
  })),
);
