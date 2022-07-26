import React from 'react';
import Layout from '../components/Layout';
import HomeHero from '../components/home/HomeHero';
import Services from '../components/home/Services';
import serviceData from '../../content/services.yaml';
import homeData from '../../content/homePage.yaml';
import Contact from '../components/home/Contact';
import About from '../components/home/About';

const index = () => {
  return (
    <Layout data={homeData}>
      <HomeHero data={homeData} />
      <Services serviceData={serviceData} />
      <Contact data={homeData} />
      <About data={homeData} />
    </Layout>
  );
};

export default index;
