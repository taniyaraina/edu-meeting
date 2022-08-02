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
  .tile.is-child.card {
    background-color: rgba(250, 250, 250, 0.15);
  }
  .title {
    color: ${(props) => props.theme.lightShades};
  }
  .image.is-64x64 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const About = ({ data }) => {
  return (
    <Section className="section">
      <div className="container">
        <Heading fontWeight>{data.aboutTitle}</Heading>
        <div className="tile is-ancestor">
          <div className="tile">
            <div className="tile is-parent is-vertical is-5">
              {data.about &&
                data.about.map((item) => (
                  <article className="tile is-child card is-flex is-justify-content-center is-align-items-center">
                    <div className="has-text-centered">
                      <div>
                        <p className="title">{item.aboutSubTitle}</p>
                        <p className="subtitle has-text-white has-text-weight-medium">
                          {item.aboutDescription}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
            </div>

            <div className="tile is-parent is-vertical is-5">
              {data.aboutUs &&
                data.aboutUs.map((item) => (
                  <article className="tile is-child card is-flex is-justify-content-center is-align-items-center">
                    <div className="has-text-centered">
                      <div>
                        <p className="title">{item.aboutSubTitle}</p>
                        <p className="subtitle has-text-white has-text-weight-medium">
                          {item.aboutDescription}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
          <div className="tile is-parent is-5 p-0 is-relative">
            <article className="tile is-child ">
              <figure className="image is-4by3 ">
                <Image
                  className="card "
                  src="/images/video-item-bg.jpg"
                  layout="fill"
                />
              </figure>

              <figure className="image is-64x64">
                <Image src="/images/play-icon.png" layout="fill" />
              </figure>
            </article>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
