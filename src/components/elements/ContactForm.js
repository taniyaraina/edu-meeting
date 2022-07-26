import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';
import HorizontalLine from '../atoms/HorizontalLine';

const Section = styled.div`
  margin-left: 0;
`;

const ContactForm = ({ data }) => {
  return (
    <Section className="section is-multiline card has-text-black">
      <Heading isBlack isLarge fontWeight>
        {data.contactTitle}
      </Heading>
      <HorizontalLine borderColor />

      <div className=" pt-6 field-body">
        <div className=" field pb-5">
          <Input color type="text" placeholder="YOURNAME...*" />
        </div>
        <div className=" field">
          <Input color type="email" placeholder="YOUR EMAIL..." />
        </div>
        <div className=" field">
          <Input color type="text" placeholder="SUBJECT...*" />
        </div>
      </div>
      <div className="pb-5 field is-horizontal">
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea p-4 is-expanded"
                placeholder="Textarea"
              />
            </div>
          </div>
        </div>
      </div>

      <Button bgcolor>{data.contactButton}</Button>
    </Section>
  );
};

export default ContactForm;
