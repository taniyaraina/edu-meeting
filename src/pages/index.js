import React from 'react';
import { filter } from 'lodash';
import Layout from '../components/Layout';
import HomeHero from '../components/home/HomeHero';
import Services from '../components/home/Services';
import serviceData from '../../content/services.yaml';
import homeData from '../../content/homePage.yaml';
import Contact from '../components/home/Contact';
import About from '../components/home/About';
import Courses from '../components/home/Courses';
import AboutEduMeeting from '../components/home/AboutEduMeeting';
import Meetings from '../components/home/Meetings';
import { getMdxFromDir } from '../utils/helpers';

const index = ({ posts }) => {
  return (
    <Layout data={homeData} post={posts[0]}>
      <HomeHero data={homeData} />
      <Services serviceData={serviceData} />
      <Meetings data={homeData} posts={posts} />
      <AboutEduMeeting data={homeData} />
      <Courses data={homeData} serviceData={serviceData} />
      <About data={homeData} />
      <Contact data={homeData} />
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  let result = getMdxFromDir('content/meetings');
  result = filter(result, (item) => item.isFeatured === true);
  return {
    props: {
      posts: result,
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
