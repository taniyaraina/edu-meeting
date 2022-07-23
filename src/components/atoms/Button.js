import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .button {
    background-color: ${(props) =>
      props.bgcolor ? props.theme.mainBrandColor : props.theme.lightShades};
    font-size: ${(props) => props.theme.fontSizeSmall};
    border: none !important;
  }
`;

const Button = ({ className, children, bgcolor, ...props }) => {
  return (
    <Section bgcolor={bgcolor}>
      <button
        type="button"
        className="button is-rounded px-5 py-5 is-size has-text-weight-medium has-text-white is-uppercase"
        {...props}>
        <span>{children}</span>
      </button>
    </Section>
  );
};

export default Button;
