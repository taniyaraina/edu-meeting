import React from 'react';
import styled from 'styled-components';
import HorizontalLine from '../atoms/HorizontalLine';

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
        data.contact.map((item, index) => (
          <div className="card-content pt-1 pb-4">
            <h5 className="has-text-weight-semibold py-3">{item.title}</h5>
            <div className="content">
              {item.href ? (
                <a
                  className="has-text-weight-bold has-text-white"
                  href={item.href}>
                  {item.info}
                </a>
              ) : (
                <p className="has-text-weight-bold">{item.info}</p>
              )}
            </div>
            {index + 1 !== data.contact.length && <HorizontalLine />}{' '}
          </div>
        ))}
    </Section>
  );
};

export default ContactInfo;
