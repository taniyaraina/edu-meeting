import React from 'react';
import Layout from '../components/Layout';
import homeData from '../../content/homePage.yaml';
import meetData from '../../content/meeting.yaml';
import Heading from '../components/atoms/Heading';
import MeetingCard from '../components/elements/MeetingCard';
import { getMdxFromDir } from '../utils/helpers';
import Button from '../components/atoms/Button';
import HorizontalLine from '../components/atoms/HorizontalLine';

const meeting = ({ posts }) => {
  return (
    <>
      <Layout data={homeData}>
        <section className="hero is-medium hero-background-image pt-6">
          <div className="hero-body has-text-centered">
            <h6 className="has-text-white has-text-weight-semibold is-size-4-mobile pb-3 is-uppercase">
              {meetData.subTitle}
            </h6>
            <Heading paddingVerticalNone isUppercase>
              {meetData.title}
            </Heading>
          </div>
        </section>
        <div className="section">
          <div className="container py-6">
            <div className="columns is-justify-content-center is-hidden-mobile">
              <div className="pr-2">
                <Button bgColor>{meetData.topButtonOne}</Button>
              </div>
              <div className="pr-2">
                <Button bgColor>{meetData.topButtonTwo}</Button>
              </div>
              <div className="pr-2">
                <Button bgColor>{meetData.topButtonThree}</Button>
              </div>
              <div className="pr-2">
                <Button bgColor>{meetData.topButtonFour}</Button>
              </div>
            </div>
            <MeetingCard posts={posts} isSecondary />
          </div>
          <HorizontalLine />
        </div>
      </Layout>
    </>
  );
};

export default meeting;

export async function getStaticProps() {
  const result = getMdxFromDir('content/meetings');
  return {
    props: {
      posts: result,
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
