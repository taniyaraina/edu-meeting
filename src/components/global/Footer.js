import React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  border-top: 1px solid rgba(250, 250, 250, 0.15);
`;
const Section = styled.div`
  background: none;
  font-size: ${(props) => props.theme.fontSize};
  line-height: ${(props) => props.theme.lineHeight};
  strong {
    color: ${(props) => props.theme.lightShades};
  }
`;

export const Footer = () => {
  return (
    <Line>
      <Section className="footer p-6 has-text-centered">
        <div>
          <p>COPYRIGHT © 2022 EDU MEETING CO., LTD. ALL RIGHTS RESERVED.</p>
          <p>
            DESIGN:
            <strong>TEMPLATEMO</strong>
          </p>
        </div>
      </Section>
    </Line>
  );
};

export default Footer;
