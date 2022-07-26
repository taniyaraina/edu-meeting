import React from 'react';
import styled from 'styled-components';

const Section = styled.h1`
  font-weight: ${(props) =>
    props.fontWeight
      ? props.theme.fontWeight
      : props.theme.fontWeightBold} !important;
  font-size: ${(props) =>
    props.isLarge
      ? props.theme.fontSizeLarge
      : props.theme.fontSizeExtraLarge} !important;
`;

const Heading = ({
  children,
  fontWeight,
  fontSize,
  isBlack,
  isUppercase,
  ...props
}) => {
  return (
    <Section
      fontWeight={fontWeight}
      fontSize={fontSize}
      {...props}
      className={`${isUppercase ? 'is-uppercase' : ''} mb-4 is-size-3-mobile ${
        isBlack ? 'has-text-black' : 'has-text-white'
      }`}>
      {children}
    </Section>
  );
};

export default Heading;
