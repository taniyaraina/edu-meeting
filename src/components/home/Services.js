/* eslint-disable no-return-assign */
import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Image from 'next/image';

const ArrowsContainer = styled.div`
  width: 100%;
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
          slidesPerRow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 1,
          slidesToScroll: 1,
          rows: 1,
          dots: false,
        },
      },
    ],
  };

  const renderArrows = () => {
    return (
      <div className="slider-arrow">
        <button
          type="button"
          className="arrow-btn prev"
          onClick={() => customSlider.current.slickPrev()}>
          <FaChevronLeft />
        </button>
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
    <>
      <div className="section">
        <div className="columns">
          {serviceData.services &&
            serviceData.services.map((item) => (
              <Slider
                {...settings}
                ref={(slider) => (customSlider.current = slider)}>
                <div className="">
                  <div className="card">
                    <div className="card-content">
                      <Image src={item.image} width={60} height={60} />
                      <h4 className="has-text-weight-semibold">{item.title}</h4>
                      <div className="content">
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      Lorem ipsum leo risus, porta ac consectetur ac, vestibulum
                      at eros. Donec id elit non mi porta gravida at eget metus.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Cras mattis consectetur
                      purus sit amet fermentum.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      Lorem ipsum leo risus, porta ac consectetur ac, vestibulum
                      at eros. Donec id elit non mi porta gravida at eget metus.
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Cras mattis consectetur
                      purus sit amet fermentum.
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="has-text-black is-size-1">1</h3>
                </div>
                <div>
                  <h3 className="has-text-black is-size-1">1</h3>
                </div>
                <div>
                  <h3 className="has-text-black is-size-1">1</h3>
                </div>
              </Slider>
            ))}
          <ArrowsContainer>{renderArrows()}</ArrowsContainer>
        </div>
      </div>
    </>
  );
};

export default Services;
