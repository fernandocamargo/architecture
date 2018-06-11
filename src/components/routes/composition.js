import { Children, cloneElement } from 'react';
import { compose, withProps } from 'recompose';

export default compose(
  withProps(({ children, ...props }) => ({
    children: Children.map(children, child => cloneElement(child, { props })),
  })),
);
