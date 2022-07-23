import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Section = styled.div`
  margin-left: 0;
`;

const ContactForm = ({ data }) => {
  return (
    <Section className="columns section is-multiline card has-text-centered has-text-black">
      <div className="column is-4 pb-5">
        <Input color className="p-4" type="text" placeholder="YOURNAME...*" />
      </div>
      <div className="column is-4">
        <Input color className="p-4" type="email" placeholder="YOUR EMAIL..." />
      </div>
      <div className="column is-4">
        <Input color className="p-4" type="text" placeholder="SUBJECT...*" />
      </div>
      <div className="column is-12 pb-6">
        <textarea className="textarea p-4" placeholder="Textarea" />
      </div>
      <Button bgcolor>{data.contactButton}</Button>
    </Section>
  );
};

export default ContactForm;
