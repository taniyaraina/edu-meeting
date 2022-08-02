import React from 'react';
import styled from 'styled-components';

const Section = styled.h1`
  font-size: ${(props) => props.theme.fontSizeMedium} !important;
  color: ${(props) => props.theme.darkShades};
`;

const CardHeading = ({ children, paddingNone, ...props }) => {
  return (
    <Section
      paddingNone={paddingNone}
      {...props}
      className={`is-size-4-mobile  has-text-weight-bold ${
        paddingNone ? 'p-0' : 'p-3'
      }`}>
      {children}
    </Section>
  );
};

export default CardHeading;
