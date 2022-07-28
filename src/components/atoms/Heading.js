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
  paddingVerticalNone,
  ...props
}) => {
  return (
    <Section
      fontWeight={fontWeight}
      fontSize={fontSize}
      paddingVerticalNone={paddingVerticalNone}
      {...props}
      className={`${isUppercase ? 'is-uppercase' : ''}  is-size-3-mobile ${
        isBlack ? 'has-text-black' : 'has-text-white'
      } ${paddingVerticalNone ? 'py-0' : 'py-4'}`}>
      {children}
    </Section>
  );
};

export default Heading;
