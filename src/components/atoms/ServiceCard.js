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
  p {
    font-size: ${(props) => props.theme.fontSizeSmall};
    line-height: ${(props) => props.theme.lineHeight};
  }
`;

const ServiceCard = ({ item, backgroundCardImage }) => {
  return (
    <Section
      className="columns p-4 has-text-white"
      backgroundCardImage={backgroundCardImage}>
      <div className="column card has-text-centered has-text-white">
        <div className="card-content">
          <Image src={item.image} width={60} height={60} />
          <h4 className="has-text-weight-semibold py-3">{item.title}</h4>
          <div className="content">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceCard;
