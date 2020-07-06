import React from 'react';
import './services.scss';
import Nutrition from '../../images/services/Nutrition.png';
export default class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="services">
        <div className="services__item services__item-green">
          <div className="services__item-logo-wrap">
            <img src={Nutrition} className="services__item-logo"/>
          </div>
          <div className="services__item-content-wrap">
            <h2 className="services__item-title green">Nutrilogía Nutrición</h2>
            <p className="services__item-description">Lorem ipsum dolor sit amet
              ,consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua labore et dolore magna aliqua.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla.</p>
            <a className="services__item-btn services__item-btn-green">
              Conóce más</a>
          </div>
        </div>
        <div className="services__item services__item-blue">
          <div className="services__item-logo-wrap">
            <img src={Nutrition} className="services__item-logo"/>
          </div>
          <div className="services__item-content-wrap">
            <h2 className="services__item-title blue">Nutrilogía Nutrición</h2>
            <p className="services__item-description">Lorem ipsum dolor sit amet
              ,consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua labore et dolore magna aliqua.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla.</p>
            <a className="services__item-btn services__item-btn-blue">
              Conóce más</a>
          </div>
        </div>
      </div>
    );
  }
}
