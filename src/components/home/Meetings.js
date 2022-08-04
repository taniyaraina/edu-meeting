import React from 'react';
import Link from 'next/link';
import CardHeading from '../atoms/CardHeading';
import Heading from '../atoms/Heading';
import HorizontalLine from '../atoms/HorizontalLine';
import Button from '../atoms/Button';
import MeetingCard from '../elements/MeetingCard';

const Meetings = ({ data, posts }) => {
  return (
    <div className="section">
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
                <CardHeading>{data.UpcomingMeetings.subTitle}</CardHeading>
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
                    <Link href="/meeting">
                      <a>
                        <Button bgColor>{data.UpcomingMeetings.Button}</Button>
                      </a>
                    </Link>
                  </div>
                </aside>
              </div>
            </article>
          </div>
          <MeetingCard posts={posts} />
        </div>
      </div>
    </div>
  );
};

export default Meetings;
