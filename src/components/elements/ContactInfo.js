import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
  border-radius: 20px;
  h5 {
    font-size: 15px;
  }
  p {
    font-size: ${(props) => props.theme.fontSizeMedium};
  }
`;

const ContactInfo = ({ data }) => {
  return (
    <Section className="column card has-text-white">
      {data.contact &&
        data.contact.map((item) => (
          <div className="card-content pt-0 pb-4">
            <h5 className="has-text-weight-semibold py-3">{item.title}</h5>
            <div className="content">
              <p className="has-text-weight-bold">{item.info}</p>
            </div>
            <div className="line" />
          </div>
        ))}
    </Section>
  );
};

export default ContactInfo;
