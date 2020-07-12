import React from 'react';
import './indexBanner.scss';
import '../../fonts/fonts.css';
import Banner from '../../images/indexbanner/banner.png';
import {Link} from 'gatsby';

export default class indexBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='indexBanner'>
        <div className='indexBanner__content-wrap'>
          <h1 className='indexBanner__title'>
            Ofrecemos a la comunidad colombiana productos relacionados con
            la salud, el cuidado y el bienestar
          </h1>
          <p className='indexBanner__content'>
            Participamos en procesos de formación continuada con estándares
            de calidad, comprometidos en satisfacer las necesidades de todos
            nuestros clientes en medio de una relación responsable, de
            empatía y de confianza.
          </p>
          <Link className="indexBanner__learn-more-btn" to="/sobre-nosotros/"
            activeClassName="green" >
              Contáctanos</Link>
        </div>
        <img src={Banner} className="indexBanner__img"/>
        <div className="indexBanner__banner-img-wrap">
        </div>
      </div>
    );
  }
}

