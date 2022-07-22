import React from 'react';
import Container from '../components/atoms/Container';
import Layout from '../components/Layout';
import HomeHero from '../components/home/HomeHero';
import Services from '../components/home/Services';
import serviceData from '../../content/services.yaml';

const index = () => {
  return (
    <Layout>
      <HomeHero />
      <Container>
        <Services serviceData={serviceData} />
      </Container>
    </Layout>
  );
};

export default index;
