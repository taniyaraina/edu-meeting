import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .button {
    background-color: ${(props) =>
      props.bgColor ? props.theme.mainBrandColor : props.theme.lightShades};
    font-size: ${(props) => props.theme.fontSizeSmall};
    border: none !important;
  }
`;

const Button = ({
  className,
  children,
  bgColor,
  paddingHorizontal,
  ...props
}) => {
  return (
    <Section bgColor={bgColor} paddingHorizontal={paddingHorizontal}>
      <button
        type="button"
        className={`button is-rounded ${
          paddingHorizontal ? 'px-6' : 'px-5'
        } py-5 is-size has-text-weight-medium has-text-white is-uppercase`}
        {...props}>
        <span>{children}</span>
      </button>
    </Section>
  );
};

export default Button;
