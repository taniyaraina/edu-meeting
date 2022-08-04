import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.div`
  .is-multiline {
    flex-wrap: wrap !important;
  }
  .card {
    height: 100%;
  }
  .content-color {
    color: ${(props) => props.theme.darkShades} !important;
  }
  .is-upppercase {
    color: ${(props) => props.theme.primaryColor};
  }
  .date-weight {
    font-size: ${(props) => props.theme.fontSizeLarge};
  }
`;

const MeetingCard = ({ posts, isSecondary }) => {
  return (
    <Section>
      <div className="tile is-parent is-multiline">
        {posts &&
          posts.map((item) => (
            <article
              className={`tile ${
                isSecondary ? 'is-4' : 'is-6'
              } is-child m-2 p-4`}>
              <Link href={`/meeting/${item?.slug}`}>
                <a>
                  <div className="has-text-centered card">
                    <div className="card-image">
                      <figure className="image is-16by9 card">
                        <Image
                          className="image-border"
                          src={item.image}
                          layout="fill"
                        />
                      </figure>
                    </div>
                    <div className="card-content content-color">
                      <div className="media">
                        <div className="media-left">
                          <p className="is-upppercase has-text-weight-semibold">
                            Nov
                          </p>
                          <p className="has-text-weight-semibold date-weight">
                            {item.date}
                          </p>
                        </div>
                        <div className="media-content has-text-left">
                          <p className="title is-5 content-color">
                            {item.title}
                          </p>
                          <p className="content-color">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </article>
          ))}
      </div>
    </Section>
  );
};

export default MeetingCard;
