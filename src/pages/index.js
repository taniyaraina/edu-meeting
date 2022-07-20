import React from 'react';
import Container from '../components/atoms/Container';
import Layout from '../components/Layout';
import HomeHero from '../components/home/HomeHero';

const index = () => {
  return (
    <Layout>
      <HomeHero />
      <Container />
    </Layout>
  );
};

export default index;
