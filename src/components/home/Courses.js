/* eslint-disable no-return-assign */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ServiceCard from '../atoms/ServiceCard';
import ArrowSlider from '../elements/ArrowSlider';
import Heading from '../atoms/Heading';
import HorizontalLine from '../atoms/HorizontalLine';

const Section = styled.div`
  .card {
    border-radius: 0px !important;
  }
`;

const Courses = ({ data, serviceData }) => {
  const customSlider = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1181,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Section className="container">
      <Heading isLarge fontWeight isUppercase>
        {data.CoursesTitle}
      </Heading>
      <div className="p-6">
        <HorizontalLine />
      </div>
      <Slider {...settings} ref={(slider) => (customSlider.current = slider)}>
        {serviceData.services &&
          serviceData.services.map((item) => <ServiceCard item={item} />)}
      </Slider>
      <ArrowSlider />
    </Section>
  );
};

export default Courses;
