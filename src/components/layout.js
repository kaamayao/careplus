import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import Header from './header';
import './layout.scss';
import Navigation from './navigation/navigation.js';
import Footer from '../components/footer/footer.js';
import Helmet from 'react-helmet';

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <Navigation></Navigation>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
};

Layout.propTypes = {children: PropTypes.node.isRequired};

export default Layout;
