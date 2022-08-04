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
  .card {
    background-color: rgba(250, 250, 250, 0.15);
    height: 100%;
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
            <div className="tile is-parent is-multiline is-12">
              {data.about &&
                data.about.map((item) => (
                  <article className="tile is-child is-6 m-2 p-4">
                    <div className="card is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
                      <p className="title">{item.aboutSubTitle}</p>
                      <p className="subtitle has-text-white has-text-weight-medium">
                        {item.aboutDescription}
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
          <div className="tile is-parent is-5 is-relative">
            <article className="tile is-child ">
              <figure className="image is-4by3 ">
                <Image className="card " src={data.aboutImage} layout="fill" />
              </figure>

              <figure className="image is-64x64">
                <Image src={data.aboutImagePlayIcon} layout="fill" />
              </figure>
            </article>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
