import React from 'react';
import Heading from '../atoms/Heading';
import HorizontalLine from '../atoms/HorizontalLine';

const Meetings = ({ data }) => {
  return (
    <div className="container">
      <div className="py-6 has-text-centered">
        <Heading isLarge fontWeight isUppercase>
          {data.UpcomingMeetings.title}
        </Heading>
        <div className="pb-6">
          <HorizontalLine />
        </div>
      </div>
    </div>
  );
};

export default Meetings;
