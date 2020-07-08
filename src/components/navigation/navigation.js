import React from 'react';
import Menu from '../../images/menu.svg';
import Close from '../../images/close.svg';
import Logo from '../../images/Logo-sm.png';
import './navigation.scss';
import {Link} from 'gatsby';
import SubscribeNews from '../subscribeNews/subscribeNews';

class Navigation extends React.Component {
  state = {
    isMenuOpen: false,
    isDesktop: false,
  }

  componentDidMount() {
    this.changeMenuType();
    window.addEventListener('resize', this.changeMenuType);
  }

  changeMenuType = (e) => {
    const isDesktop = window.innerWidth>=869;
    this.setState({isDesktop: isDesktop});
  }

  switchMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <nav className="navigation">
        <SubscribeNews></SubscribeNews>
        <div className={this.state.isMenuOpen?'none':'navigation__mobile'}>
          <a className="navigation__button" onClick={()=>this.switchMenu()} >
            <img src={Menu} className="navigation__menu"/>
          </a>
          <div className="navigation__mobile-logo-wrap">
            <img src={Logo} className="navigation__logo"/>
          </div>
        </div>
        <div className={this.state.isMenuOpen|this.state.isDesktop?
          'navigation__wrap':'none'}>
          <div className="navigation__wrap-image">
            <a className="navigation__close-wrap"
              onClick={()=>this.switchMenu()}>
              <img src={Close} className="navigation__close"/>
            </a>
            <div className="navigation__logo-wrap">
              <img src={Logo} className="navigation__logo"/>
            </div>
          </div>
          <div className="navigation__links">
            <Link className="navigation__link" to="/">Inicio</Link>
            <Link className="navigation__link" to="/sobre-nosotros/">
              Sobre Nosotros</Link>
            <Link className="navigation__link" to="/servicios/">Servicios</Link>
            <Link className="navigation__link" to="/blog/">Blog</Link>
            <Link className="navigation__link" to="/testimonios/">
              Testimonios</Link>
            <Link className="navigation__link" to="/page-2/">Cursos</Link>
            <Link className="navigation__link" to="/contactanos/">
              Contáctanos</Link>
          </div>
        </div>
        <div className="navigation__subscribe">
          <Link className="navigation__link-subscribe" to="/">
            Subscribéte </Link>
        </div>
      </nav>
    );
  }
}

export default Navigation;
