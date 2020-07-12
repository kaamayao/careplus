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
              <p className='footer__info-title'>Cra 23 #124-87</p>
              <p className='footer__info-subtitle'>Torre 1.Consultorio 701-1.
                Torre Zentai</p>
            </div>
            <div className='footer__info'>
              <p className='footer__info-title'>carepluscolombia<br></br>@outlook.com</p>
            </div>
            <div className='footer__info'>
              <p className='footer__info-title'>Teléfonos</p>
              <p className='footer__info-subtitle'>3204020942</p>
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
