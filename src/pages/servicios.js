import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Services from '../components/services/services.js';

const SecondPage = () => (
  <Layout>
    <SEO title="Services" />
    <Services></Services>
  </Layout>
);

export default SecondPage;
