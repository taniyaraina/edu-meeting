import React from 'react';
import styled from 'styled-components';
import ContactForm from '../elements/ContactForm';
import ContactInfo from '../elements/ContactInfo';
import HorizontalLine from '../atoms/HorizontalLine';

const Section = styled.div`
  margin-left: 0;
  margin-right: 0;
`;

const Contact = ({ data }) => {
  return (
    <div className="container">
      <Section className="columns is-vcentered mb-6 pb-6">
        <div className="column is-9">
          <ContactForm data={data} />
        </div>
        <div className="column">
          <ContactInfo data={data} />
        </div>
      </Section>
      <HorizontalLine />
    </div>
  );
};

export default Contact;
