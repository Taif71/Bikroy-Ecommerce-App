import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    // Explanation of above line:
    // Does isGoogleSign = true? if so then show google-sign-in class,if not nothing. And also add the cusom-button styling
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
