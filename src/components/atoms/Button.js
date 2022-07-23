import React from 'react';

const Button = ({ className, children, ...props }) => {
  return (
    <Button type="button" className={`button ${className}`} {...props}>
      <span>{children}</span>
    </Button>
  );
};

export default Button;
