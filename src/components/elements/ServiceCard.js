import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Section = styled.div`
  margin-left: 0 !important;
  margin-right: 0 !important;

  .card {
    background-image: ${(props) =>
      props.backgroundCardImage ? `url('/images/service-item-bg.jpg')` : ''};
    background-size: cover;
    background-position: center center;
  }
  h4 {
    font-size: ${(props) => props.theme.fontSizeMedium};
  }
`;

const ServiceCard = ({ item, backgroundCardImage }) => {
  return (
    <Section backgroundCardImage={backgroundCardImage} className="px-5">
      <div className=" card has-text-centered has-text-white">
        <div className="card-content">
          <Image src={item.image} width={60} height={60} />
          <h4 className="has-text-weight-semibold py-3">{item.title}</h4>
          <div className="content">
            <p className="paragraph">{item.description}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceCard;
