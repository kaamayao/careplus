import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import IndexBanner from '../components/indexBanner/indexBanner.js';
import IndexServices from '../components/indexServices/indexServices.js';
import ContactUs from '../components/contactus/contactus.js';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexBanner></IndexBanner>
    <IndexServices></IndexServices>
    <ContactUs></ContactUs>
  </Layout>
);

export default IndexPage;
