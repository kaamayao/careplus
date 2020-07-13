import React from 'react';
import './indexServices.scss';

import First from '../../images/indexServices/First.png';
import SecondBanner from '../../images/indexServices/secondBanner.png';
import ThirdBanner from '../../images/indexServices/thirdBanner.png';
import {Link} from 'gatsby';

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
            <img src={First} className="IndexServices__service-img"/>
          </div>
          <div className='IndexServices__service-content
                          IndexServices__service-border-blue'>
            <h3 className='IndexServices__service-title'>
              SERVICIOS
            </h3>
            <p className='IndexServices__service-description'>Contamos con una
              gran variedad de servicios diseñados a tu medida, dirigidos a
              toda tu familia.</p>
            <Link className="IndexServices__btn IndexServices__btn-blue"
              to="/servicios/">Conóce nuestros servicios
            </Link>
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
            <p className='IndexServices__service-description'>Te ofrecemos una
              gran variedad de cursos y talleres para padres de familia,
              población general y profesionales de la salud. Podrás aprender
              junto con nosotros un poco más de alimentación complementaria,
              higiene de sueño en niños, alimentación durante el embarazo y la
              lactancia, alimentación en la vejez, anestesia regional guiada por
              ecografía, entre otros.</p>
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
            <p className='IndexServices__service-description'>Te ofrecemos
              productos y accesorios para todos los miembros del hogar, revisa
              nuestra tienda virtual y elige el producto que más se adapte a
              tus necesidades.</p>
            <Link className="IndexServices__btn IndexServices__btn-blue-sm"
              to="/contactanos/"> compra</Link>
          </div>
        </div>
      </div>);
  }
}
