import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import QuoteBanner from '../components/quoteBanner/quoteBanner';
import MissionVision from '../components/missionVision/missionVision.js';
import History from '../components/history/history.js';

const AboutUs = () => (
  <Layout>
    <SEO title="about us" />
    <QuoteBanner></QuoteBanner>
    <MissionVision></MissionVision>
    <History></History>
  </Layout>
);

export default AboutUs;
