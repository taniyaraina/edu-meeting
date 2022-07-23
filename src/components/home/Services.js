/* eslint-disable no-return-assign */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import ServiceCard from '../atoms/ServiceCard';

const ArrowsContainer = styled.div`
  position: relative;
  bottom: 10rem;
  @media only screen and (max-width: 768px) {
    position: relative;
    justify-content: center;
    .slider-arrow {
      justify-content: center !important;
    }
  }
  button {
    cursor: pointer;
    background-color: white;
    border: 1px solid;
    height: 3rem;
    width: 3rem;
    border-radius: 2rem;
    justify-content: center;
    align-items: center;
    display: flex;
    @media only screen and (max-width: 768px) {
      margin: 0 10px !important;
    }
  }
  svg:not(:root).svg-inline--fa {
    color: ${(props) => props.theme.mainBrandColor};
  }
  .slider-arrow {
    justify-content: space-between;
    display: flex;
    width: 100%;
  }
`;

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

  const renderArrows = () => {
    return (
      <div className="slider-arrow is-hidden-mobile">
        <div>
          <button
            type="button"
            className="arrow-btn prev"
            onClick={() => customSlider.current.slickPrev()}>
            <FaChevronLeft />
          </button>
        </div>
        <button
          type="button"
          className="arrow-btn next"
          onClick={() => customSlider.current.slickNext()}>
          <FaChevronRight />
        </button>
      </div>
    );
  };

  return (
    <div>
      <Slider {...settings} ref={(slider) => (customSlider.current = slider)}>
        {serviceData.services &&
          serviceData.services.map((item) => <ServiceCard item={item} />)}
      </Slider>
      <ArrowsContainer>{renderArrows()}</ArrowsContainer>
    </div>
  );
};

export default Services;
