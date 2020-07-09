import React from 'react';
import './footer.scss';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='footer'>
        <div className='footer__wrap'>
          <div className='footer__sideinfo'>
            <div className='footer__info'>
              <p className='footer__info-title'>Cra 63A #10-12</p>
              <p className='footer__info-subtitle'>Edificio Aleatorio</p>
            </div>
            <div className='footer__info'>
              <p className='footer__info-title'>Example email</p>
            </div>
            <div className='footer__info'>
              <p className='footer__info-title'>Teléfonos</p>
              <p className='footer__info-subtitle'>Teléfonos</p>
              <p className='footer__info-subtitle'>Teléfonos</p>
            </div>
          </div>
          <div className='footer__maininfo'>
            <p className='footer__maininfo-title'>CAREPLUS</p>
            <p className='footer__maininfo-description'>
              Estamos comprometidos con la satisfacción permanente de las
              necesidades y expectativas de las partes interesadas cumpliendo
              con calidad, puntualidad y oportunidad a las necesidades de
              nuestros pacientes y clientes en el marco de los
              requisitos legales aplicables
            </p>
          </div>
        </div>
      </div>
    );
  }
}
