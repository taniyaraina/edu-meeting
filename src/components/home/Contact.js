import React from 'react';

import ContactForm from '../elements/ContactForm';
import ContactInfo from '../elements/ContactInfo';
import HorizontalLine from '../atoms/HorizontalLine';

const Contact = ({ data }) => {
  return (
    <div className="section" id="contact">
      <div className="container my-6 py-6">
        <div className="columns  is-vcentered">
          <div className="column is-9">
            <ContactForm data={data} />
          </div>
          <div className="column">
            <ContactInfo data={data} />
          </div>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
};

export default Contact;
