import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Heading from '../atoms/Heading';

const Section = styled.div`
  background-image: url('/images/facts-bg.jpg');
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  .tile.is-child.notification.card {
    background-color: rgba(250, 250, 250, 0.15);
  }
  .title {
    color: ${(props) => props.theme.lightShades};
  }
`;

const About = ({ data, background }) => {
  return (
    <Section className="section" background={background}>
      <Heading fontWeight>{data.aboutTitle}</Heading>
      <div className="tile is-ancestor">
        <div className="tile">
          <div className="tile is-parent is-vertical is-5">
            <article className="tile is-child notification card has-text-centered">
              <p className="title">Vertical...</p>
              <p className="subtitle has-text-white">Top tile</p>
            </article>
            <article className="tile is-child notification card">
              <p className="title">...tiles</p>
              <p className="subtitle">Bottom tile</p>
            </article>
          </div>

          <div className="tile is-parent is-vertical is-5">
            <article className="tile is-child notification card">
              <p className="title">Vertical...</p>
              <p className="subtitle">Top tile</p>
            </article>
            <article className="tile is-child notification card">
              <p className="title">...tiles</p>
              <p className="subtitle">Bottom tile</p>
            </article>
          </div>
        </div>
        <div className="tile is-parent is-5 card">
          <article className="tile is-child card-image">
            <figure className="image is-4by3">
              <Image src="/images/video-item-bg.jpg" layout="fill" />
            </figure>

            {/* <figure className="image is-64x64">
              <Image src="/images/play-icon.png" layout="fill" />
            </figure> */}
          </article>
        </div>
      </div>
    </Section>
  );
};

export default About;
