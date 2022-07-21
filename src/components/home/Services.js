import React from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
      aria-hidden="true"
    />
  );
}

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="p-6" />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container section">
      <h2 className="has-text-black"> Multiple items </h2>
      <Slider {...settings}>
        <div>
          <h3 className="has-text-black is-size-1">1</h3>
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
        <div>
          <h3 className="has-text-black is-size-1">1</h3>
        </div>
        <div>
          <h3 className="has-text-black is-size-1">1</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Services;
