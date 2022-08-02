import React from 'react';
import Faq from 'react-faq-component';
import styled from 'styled-components';

const Section = styled.div`
  .styles_faq-row-wrapper__3vA1D {
    border-radius: 20px;
  }
  .styles_faq-row-wrapper__3vA1D
    .styles_row-body__1NvUo
    .styles_faq-row__2YF3c
    .styles_row-title__1YiiY
    :hover {
    color: ${(props) => props.theme.lightShades};
  }
  .faq-body.styles_row-body__1NvUo {
    padding-top: 3rem;
    padding-bottom: 3rem;
    padding-right: 4rem;
    padding-left: 4rem;
  }
  .row-title-text.styles_row-title-text__1MuhU {
    font-weight: ${(props) => props.theme.fontWeight};
    font-size: ${(props) => props.theme.fontSizeMedium};
  }
  .styles_row-content-text__2sgAB.row-content-text {
    font-size: ${(props) => props.theme.fontSize};
  }
`;

const Faqs = ({ data }) => {
  return (
    <Section className="tile is-parent">
      <Faq data={data.faqs} />
    </Section>
  );
};

export default Faqs;
