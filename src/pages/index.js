import React from 'react';
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

const index = () => {
  return (
    <Layout data={homeData}>
      <HomeHero data={homeData} />
      <Services serviceData={serviceData} />
      <Meetings data={homeData} />
      <AboutEduMeeting data={homeData} />
      <Courses data={homeData} serviceData={serviceData} />
      <About data={homeData} />
      <Contact data={homeData} />
    </Layout>
  );
};

export default index;
