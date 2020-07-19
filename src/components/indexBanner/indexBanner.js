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
            Ofrecemos a la comunidad colombiana servicios y productos
            relacionados con la salud, el cuidado y el bienestar
          </h1>
          <div className="indexBanner__info-wrap">
            <p className='indexBanner__content'>
              CarePlus es una empresa colombiana 100% a la
              vanguardia y dispuesta a ofrecer lo mejor a todos
              sus clientes tanto en el ámbito de la prestación
              de servicios de salud, como en la distribución de
              productos para el cuidado y bienestar,
              enseñanza y educación continuada.
              Nos ponemos en los zapatos de otro para que
              nuestra razón de ser, siempre sea de calidad
              superior.
            </p>
            <p className='indexBanner__content'>
              Estamos comprometidos con la satisfacción
              permanente de las necesidades y expectativas de
              las partes interesadas cumpliendo con calidad,
              puntualidad y oportunidad a las necesidades de
              nuestros pacientes y clientes en el marco de los
              requisitos legales aplicables.
            </p>

          </div>
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

