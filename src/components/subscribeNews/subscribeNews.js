import React from 'react';
import './subscribeNews.scss';

export default class SubscribeNews extends React.Component {
  state = {
    open: false,
  }

  constructor(props) {
    super(props);
    this.switchmenu = this.switchmenu.bind(this);
  }

  switchmenu() {
    console.log('Hiiii mini');
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <div className={this.state.open?'subscribeNews':'hide'}>
        <div onClick={this.switchmenu} className="subscribeNews__blackbox">
        </div>
        <div className="subscribeNews__wrap">
          <div className="subscribeNews__close-wrap">
            <a onClick={this.switchmenu} className="subscribeNews__close">X</a>
          </div>
          <div className="subscribeNews__title-wrap">
            <h1 className="subscribeNews__title">
              Subscríbete a nuestras noticias</h1>
          </div>
          <form className="subscribeNews__form">
            <div className="subscribeNews__input-wrap">
              <label className="subscribeNews__label">Correo</label>
              <input type="email" required className="subscribeNews__input"/>
              <label className="subscribeNews__phone">Teléfono</label>
              <input className="subscribeNews__input subscribeNews__phone"/>
              <label className="subscribeNews__address">Dirección</label>
              <input className="subscribeNews__input subscribeNews__address"/>
            </div>
            <a className="subscribeNews__btn">
              Enviar
            </a>
          </form>
        </div>
      </div>
    );
  }
}

