import React from 'react'; import Menu from '../../images/menu.svg';
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

  constructor(props) {
    super(props);
    this.switchMenu = this.switchMenu.bind(this);
    this.switchSubscribeMenu = this.switchSubscribeMenu.bind(this);
    this.subscribeNews = React.createRef();
  }

  componentDidMount() {
    this.changeMenuType();
    window.addEventListener('resize', this.changeMenuType);
  }

  changeMenuType = (e) => {
    const isDesktop = window.innerWidth>=869;
    this.setState({isDesktop: isDesktop});
  }

  switchMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }

  switchSubscribeMenu() {
    this.subscribeNews.current.switchmenu();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <nav className="navigation">
        <SubscribeNews ref={this.subscribeNews}></SubscribeNews>
        <div className={this.state.isMenuOpen?'none':'navigation__mobile'}>
          <a className="navigation__button" onClick={this.switchMenu} >
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
            <Link className="navigation__link" activeClassName="green"
              to="/" >
              Inicio</Link>
            <Link className="navigation__link" to="/sobre-nosotros/"
              activeClassName="green" >
              Sobre Nosotros</Link>
            <Link className="navigation__link" activeClassName="green"
              to="/servicios/" >
              Servicios</Link>
            <Link className="navigation__link" to="/blog/"
              activeClassName="green" >
              Blog</Link>
            <Link className="navigation__link" to="/testimonios/"
              activeClassName="green" >
              Testimonios</Link>
            <a className="navigation__link-disabled">
              Cursos</a>
            <Link className="navigation__link" to="/contactanos/"
              activeClassName="green" >
              Contáctanos</Link>
          </div>
        </div>
        <a className="navigation__subscribe"
          onClick={this.switchSubscribeMenu}>
            Subscribéte
        </a>
      </nav>
    );
  }
}

export default Navigation;
