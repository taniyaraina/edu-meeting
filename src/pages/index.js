import React from 'react';
import Container from '../components/atoms/Container';
import Layout from '../components/Layout';
import HomeHero from '../components/home/HomeHero';
import Services from '../components/home/Services';

const index = () => {
  return (
    <Layout>
      <HomeHero />
      <Services />
      <Container />
    </Layout>
  );
};

export default index;
