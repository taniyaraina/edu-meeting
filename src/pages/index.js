import React from 'react';
import Container from '../components/atoms/Container';
import Layout from '../components/Layout';
import HomeHero from '../components/home/HomeHero';
import Services from '../components/home/Services';
import serviceData from '../../content/services.yaml';
import homeData from '../../content/homePage.yaml';
import Contact from '../components/home/Contact';

const index = () => {
  return (
    <Layout data={homeData}>
      <HomeHero data={homeData} />
      <Container>
        <Services serviceData={serviceData} />
        <Contact data={homeData} />
      </Container>
    </Layout>
  );
};

export default index;
