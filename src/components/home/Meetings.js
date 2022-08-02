import React from 'react';
import Link from 'next/link';
import CardHeading from '../atoms/CardHeading';
import Heading from '../atoms/Heading';
import HorizontalLine from '../atoms/HorizontalLine';
import Button from '../atoms/Button';

const Meetings = ({ data }) => {
  return (
    <div className="container">
      <div className="section">
        <div className="py-6 has-text-centered">
          <Heading isLarge fontWeight isUppercase>
            {data.UpcomingMeetings.title}
          </Heading>
          <div className="pb-6">
            <HorizontalLine />
          </div>
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-parent is-vertical is-4">
            <article className="tile is-child card p-5">
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
            </article>
          </div>

          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child card is-flex is-justify-content-center is-align-items-center">
                <div className="has-text-centered">
                  <div>hnk</div>
                </div>
              </article>
              <article className="tile is-child card is-flex is-justify-content-center is-align-items-center">
                <div className="has-text-centered">
                  <div>hnk</div>
                </div>
              </article>
            </div>
            <div className="tile is-parent is-vertical">
              <article className="tile is-child card is-flex is-justify-content-center is-align-items-center">
                <div className="has-text-centered">
                  <div>hnk</div>
                </div>
              </article>
              <article className="tile is-child card is-flex is-justify-content-center is-align-items-center">
                <div className="has-text-centered">
                  <div>hnk</div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
