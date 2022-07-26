import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Heading from '../atoms/Heading';

const Section = styled.div`
  .overlay {
    background-color: rgba(31, 39, 43, 0.75) !important;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100%;
  }

  .font-size {
    font-size: ${(props) => props.theme.fontSize};
    line-height: ${(props) => props.theme.lineHeight};
  }
`;

const HomeHero = ({ data, ...props }) => {
  return (
    <Section>
      <div className="is-relative">
        <div>
          <figure className="image pt-0">
            <video autoPlay muted loop width="100%" height="100%">
              <track kind="captions" {...props} />
              <source src="/images/course-video.mp4" />
            </video>
          </figure>
        </div>
        <div className="overlay content has-text-white is-flex is-align-items-center">
          <div className="section is-medium">
            <div className="columns">
              <div className="column is-6">
                <p className="has-text-weight-semibold is-uppercase mb-2">
                  {data.homeHero.heroTag}
                </p>
                <Heading isUppercase>{data.homeHero.heroTitle}</Heading>
                <p className="font-size">{data.homeHero.heroDescription}</p>
                <Button bgcolor>{data.homeHero.buttonTitle}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeHero;
