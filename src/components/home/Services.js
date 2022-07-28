/* eslint-disable no-return-assign */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import ArrowSlider from '../elements/ArrowSlider';

import ServiceCard from '../elements/ServiceCard';

const Services = ({ serviceData }) => {
  const customSlider = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1181,
        settings: {
          slidesToShow: 3,
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
    <div className="section">
      <div className="container">
        <div className="is-relative">
          <Slider
            {...settings}
            ref={(slider) => (customSlider.current = slider)}>
            {serviceData.services &&
              serviceData.services.map((item) => (
                <ServiceCard backgroundCardImage item={item} />
              ))}
          </Slider>
          <ArrowSlider customSlider={customSlider} />
        </div>
      </div>
    </div>
  );
};

export default Services;
