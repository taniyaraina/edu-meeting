import React from 'react';
import Layout from '../components/Layout';
import homeData from '../../content/homePage.yaml';
import meetData from '../../content/meeting.yaml';
import Heading from '../components/atoms/Heading';

const meeting = () => {
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
      </Layout>
    </>
  );
};

export default meeting;
