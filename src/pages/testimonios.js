import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import QuoteTestimonial from
  '../components/quoteTestimonial/quoteTestimonial.js';
import ShareExperience from '../components/shareExperience/shareExperience.js';

const Testimonios = () => (
  <Layout>
    <SEO title="Testimonios" />
    <QuoteTestimonial></QuoteTestimonial>
    <ShareExperience></ShareExperience>
  </Layout>
);

export default Testimonios;


