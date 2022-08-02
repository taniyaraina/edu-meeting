import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background: none;
  font-size: ${(props) => props.theme.fontSize};
  line-height: ${(props) => props.theme.lineHeight};
  strong {
    color: ${(props) => props.theme.lightShades};
  }
`;

const Footer = ({ data }) => {
  return (
    <div>
      <Section className="footer section has-text-centered">
        <div className="has-text-white">
          <p>{data.footerDescriptionOne}</p>
          <p>
            DESIGN:
            <strong>TEMPLATEMO</strong>
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
