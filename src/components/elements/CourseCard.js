import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import HorizontalLine from '../atoms/HorizontalLine';

const priceWrapper = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const Section = styled.div`
  margin-left: 0 !important;
  margin-right: 0 !important;
  .card-image:first-child img {
    border-radius: 0px;
  }
  p {
    font-size: ${(props) => props.theme.fontSizeMedium} !important;
  }
  .icon-color {
    color: ${(props) => props.theme.lightShades};
  }
  .price-color {
    color: ${(props) => props.theme.mainBrandColor};
  }
`;

const CourseCard = ({ item }) => {
  return (
    <Section className="px-4">
      <div className="card has-text-centered has-text-white">
        <div className="card-image">
          <figure className="image is-4by3">
            <Image src={item.image} alt="Placeholder image" layout="fill" />
          </figure>
        </div>
        <div className="card-content">
          <p className="has-text-black has-text-weight-medium py-4">
            {item.description}
          </p>
          <HorizontalLine borderColor />
          <div className="is-flex pt-5 is-justify-content-space-between">
            <div className="is-flex">
              {priceWrapper.map((i) => (
                <div className="icon-color">
                  <FaStar item={i} />
                </div>
              ))}
            </div>
            <div className="price-color">{item.price}</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CourseCard;
