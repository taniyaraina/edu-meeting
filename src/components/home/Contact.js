import React from 'react';
import styled from 'styled-components';
import ContactForm from '../elements/ContactForm';
import ContactInfo from '../elements/ContactInfo';

const Section = styled.div`
  margin-left: 0;
  margin-right: 0;
`;

const Contact = ({ data }) => {
  return (
    <Section className="columns is-vcentered">
      <div className="column is-9">
        <ContactForm data={data} />
      </div>
      <div className="column">
        <ContactInfo data={data} />
      </div>
    </Section>
  );
};

export default Contact;
