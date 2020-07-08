import React from 'react';
import './indexServices.scss';
import FirstBanner from '../../images/indexServices/firstBanner.png';
import SecondBanner from '../../images/indexServices/secondBanner.png';
import ThirdBanner from '../../images/indexServices/thirdBanner.png';

export default class indexServices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='IndexServices'>
        <div className='IndexServices__service-wrap
                        IndexServices__service-wrap-regular'>
          <div className='IndexServices__service-wrap-img'>
            <img src={FirstBanner} className="IndexServices__service-img"/>
          </div>
          <div className='IndexServices__service-content
                          IndexServices__service-border-blue'>
            <h3 className='IndexServices__service-title'>
              SERVICIOS
            </h3>
            <p className='IndexServices__service-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              labore et dolore magna aliqua.<br></br>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla.
            </p>
            <a className="IndexServices__btn
                          IndexServices__btn-blue">Agenda tu servicio</a>
          </div>
        </div>
        <div className='IndexServices__service-wrap
                        IndexServices__service-wrap-reverse'>
          <div className='IndexServices__service-wrap-img'>
            <img src={SecondBanner} className="IndexServices__service-img"/>
          </div>
          <div className='IndexServices__service-content
                          IndexServices__service-border-green'>
            <h3 className='IndexServices__service-title-green'>
              ENTÉRATE DE NUESTROS CURSOS
            </h3>
            <p className='IndexServices__service-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              labore et dolore magna aliqua.<br></br>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla.
            </p>
            <a className="IndexServices__btn
                          IndexServices__btn-green">Únete al curso</a>
          </div>
        </div>
        <div className='IndexServices__service-wrap'>
          <div className='IndexServices__service-wrap-img'>
            <img src={ThirdBanner} className="IndexServices__service-img"/>
          </div>
          <div className='IndexServices__service-content
                          IndexServices__service-border-blue'>
            <h3 className='IndexServices__service-title'>
              COMPRA Y VENTA DE EQUIPOS
            </h3>
            <p className='IndexServices__service-description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
              labore et dolore magna aliqua.<br></br>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla.
            </p>
            <a className="IndexServices__btn
                          IndexServices__btn-blue-sm">compra</a>
          </div>
        </div>
      </div>);
  }
}
