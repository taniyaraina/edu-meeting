import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';

const Section = styled.div`
  position: absolute;
  top: 40%;
  bottom: 50%;
  right: 0;
  left: 0;

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

const ArrowSlider = ({ customSlider }) => {
  return (
    <Section className="slider-arrow is-hidden-mobile">
      <div className="is-flex is-justify-content-space-between">
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
    </Section>
  );
};

export default ArrowSlider;
