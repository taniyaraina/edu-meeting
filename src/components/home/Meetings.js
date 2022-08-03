import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import CardHeading from '../atoms/CardHeading';
import Heading from '../atoms/Heading';
import HorizontalLine from '../atoms/HorizontalLine';
import Button from '../atoms/Button';

const Section = styled.div`
  .is-multiline {
    flex-wrap: wrap !important;
  }
  .card {
    height: 100%;
  }
`;

const Meetings = ({ data }) => {
  return (
    <Section className="section">
      <div className="container">
        <div className="has-text-centered">
          <Heading isLarge fontWeight isUppercase>
            {data.UpcomingMeetings.title}
          </Heading>
          <div className="pb-6">
            <HorizontalLine />
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical is-4">
            <article className="tile is-child">
              <div className="card p-5 mt-2">
                <CardHeading>Meeting Catgories</CardHeading>
                <HorizontalLine borderColor />
                <aside className="menu p-3">
                  {data.MeetingRightCard.map((item) => (
                    <ul className="menu-list">
                      <li className="pb-1">
                        <Link href="#">
                          <a className="card-onhover-red has-text-weight-medium">
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    </ul>
                  ))}
                  <div className="pt-5">
                    <HorizontalLine borderColor />
                  </div>
                  <div className="pt-5 mt-1">
                    <Button bgColor>{data.UpcomingMeetings.Button}</Button>
                  </div>
                </aside>
              </div>
            </article>
          </div>
          <div className="tile is-parent is-8 is-multiline">
            <article className="tile is-6 is-child m-2 p-4">
              <div className="has-text-centered card">
                <div>hnk</div>
              </div>
            </article>
            <article className="tile is-6 is-child m-2">
              <div className="has-text-centered card">
                <div>hnk</div>
              </div>
            </article>{' '}
            <article className="tile is-6 is-child m-2">
              <div className="has-text-centered card">
                <div>hnk</div>
              </div>
            </article>{' '}
            <article className="tile is-6 is-child m-2">
              <div className="has-text-centered card">
                <div>hnk</div>
              </div>
            </article>{' '}
            <article className="tile is-6 is-child m-2">
              <div className="has-text-centered card">
                <div>hnk</div>
              </div>
            </article>{' '}
            <article className="tile is-6 is-child m-2">
              <div className="has-text-centered card">
                <div>hnk</div>
              </div>
            </article>{' '}
            <article className="tile is-6 is-child m-2">
              <div className="has-text-centered card">
                <div>hnk</div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Meetings;
