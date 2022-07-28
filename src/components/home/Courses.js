/* eslint-disable no-return-assign */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import CourseCard from '../elements/CourseCard';
import ArrowSlider from '../elements/ArrowSlider';
import Heading from '../atoms/Heading';
import HorizontalLine from '../atoms/HorizontalLine';

const Section = styled.div`
  .card {
    border-radius: 0px !important;
  }

  .slick-dots li button:before {
    color: white;
  }
`;

const Courses = ({ data }) => {
  const customSlider = useRef();

  const settings = {
    dots: true,
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
      <div className="py-6">
        <Heading isLarge fontWeight isUppercase>
          {data.CoursesTitle}
        </Heading>
        <div className="pb-6">
          <HorizontalLine />
        </div>
        <div className="is-relative mb-6">
          <Slider
            {...settings}
            ref={(slider) => (customSlider.current = slider)}>
            {data.courseCard &&
              data.courseCard.map((item) => <CourseCard item={item} />)}
          </Slider>
          <ArrowSlider customSlider={customSlider} />
        </div>
      </div>
    </Section>
  );
};

export default Courses;
