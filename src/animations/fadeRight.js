import React from 'react';
import {CSSTransition} from 'react-transition-group'

const FadeRight = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade-right"
  >
    {children}
  </CSSTransition>
);

export default FadeRight;
