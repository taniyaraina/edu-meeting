import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const Section = styled.div`
  .overlay {
    background-color: rgba(31, 39, 43, 0.75) !important;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    height: 718px;
  }
  .section {
    max-width: 56%;
  }
  .font-weight {
    font-weight: 800;
    font-size: ${(props) => props.theme.fontSizeLarge};
  }
  .font-size {
    font-size: ${(props) => props.theme.fontSize};
    line-height: ${(props) => props.theme.lineHeight};
  }
  .is-size {
    font-size: ${(props) => props.theme.fontSizeSmall};
    background: ${(props) => props.theme.primaryColor};
    border: none;
  }
`;

const HomeHero = ({ ...props }) => {
  return (
    <Section>
      <div>
        <video autoPlay muted loop width="100%" height="100%">
          <track kind="captions" {...props} />
          <source src="/images/course-video.mp4" />
        </video>
        <div className="overlay content has-text-white is-flex is-align-items-center">
          <div className="section is-medium">
            <p className="has-text-weight-semibold is-uppercase mb-2">
              Hello Students
            </p>
            <p className="font-weight is-uppercase mb-4">
              Welcome to Education
            </p>
            <p className="font-size">
              This is an edu meeting HTML CSS template provided by TemplateMo
              website. This is a Bootstrap v5.1.3 layout. The video background
              is taken from Pexels website, a group of young people by
              Pressmaster.
            </p>
            <Button className="button is-rounded px-5 py-5 is-size has-text-weight-medium has-text-white is-uppercase">
              Join Us Now!
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeHero;
