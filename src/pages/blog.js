import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PostList from '../components/postList/postList.js';

const Blog = () => (
  <Layout>
    <SEO title="Page two" />
    <PostList></PostList>
  </Layout>
);

export default Blog;
