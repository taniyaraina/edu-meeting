import React from 'react';
import styled from 'styled-components';
import Heading from '../atoms/Heading';
import Button from '../atoms/Button';

const Section = styled.div`
  background-image: url('/images/apply-bg.jpg');
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  .tile.is-child.card {
    background-color: rgba(250, 250, 250, 0.15);
  }
  ..tile.is-ancestor {
    margin-left: 0;
    margin-right: 0;
  }
  .card {
    border-radius: 0px !important;
  }
`;

const AboutEduMeeting = ({ data }) => {
  return (
    <Section className="section">
      <div className="container tile is-ancestor">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            {data.aboutEduMeeting &&
              data.aboutEduMeeting.map((item, index) => (
                <article className="tile is-child card">
                  <div className="px-6 py-5">
                    <Heading isLarge fontWeight isUppercase>
                      {item.title}
                    </Heading>
                    <p className="title paragraph has-text-white has-text-weight-normal">
                      {item.description}
                    </p>
                    {index + 1 !== data.aboutEduMeeting.length ? (
                      <Button bgColor>{item.button}</Button>
                    ) : (
                      <Button>{item.button}</Button>
                    )}
                  </div>
                </article>
              ))}
          </div>
        </div>
        <div className="tile is-parent p-0">
          <article className="tile is-child notification card">
            <p className="title">...tiles</p>
            <p className="subtitle">Bottom tile</p>
          </article>
        </div>
      </div>
    </Section>
  );
};

export default AboutEduMeeting;