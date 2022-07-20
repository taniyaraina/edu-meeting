import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  video {
    position: absolute !important;
    top: 0;
  }
`;

const HomeHero = ({ ...props }) => {
  return (
    <Section>
      <video autoPlay muted loop width="100%" height="100%">
        <track kind="captions" {...props} />
        <source src="/images/course-video.mp4" />
      </video>
    </Section>
  );
};

export default HomeHero;
