import React from 'react';
import Menu from '../../images/menu.svg';
import Logo from '../../images/Logo-sm.png';
import '../../fonts/fonts.css';
import './navigation.scss';
import {Link} from 'gatsby';

const Navigation = ()=> (
  <nav className="navigation">
    <div className="navigation__mobile">
      <img src={Menu} className="navigation__menu"/>
      <div className="navigation__mobile-logo-wrap">
        <img src={Logo} className="navigation__logo"/>
      </div>
    </div>
    <div className="navigation__wrap">
      <div className="navigation__wrap-image">
        <img src={Logo} className="navigation__logo"/>
      </div>
      <div className="navigation__links">
        <Link className="navigation__link" to="/page-2/">Inicio</Link>
        <Link className="navigation__link" to="/page-2/">Sobre Nosotros</Link>
        <Link className="navigation__link" to="/page-2/">Servicios</Link>
        <Link className="navigation__link" to="/page-2/">Blog</Link>
        <Link className="navigation__link" to="/page-2/">Testimonios</Link>
        <Link className="navigation__link" to="/page-2/">Cursos</Link>
        <Link className="navigation__link" to="/page-2/">Contáctanos</Link>
      </div>
    </div>
    <div className="navigation__subscribe">
      <Link className="navigation__link-subscribe" to="/">Subscribéte </Link>
    </div>
  </nav>
);

export default Navigation;
