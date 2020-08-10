import React from 'react';
import './subscribeNews.scss';
import Loading from '../../images/contactUs/loading.gif';
import MailService from '../mailService.js';

export default class SubscribeNews extends React.Component {
  state = {
    form: {
      email: '',
      surname: 'Deja este espacio en blanco',
      address: 'Deja este espacio en blanco',
    },
    errors: {
      email: '',
    },
    display: false,
    formStatus: 'input',
    open: false,
  }
  subscription = true

  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.mailService = new MailService();
    this.switchmenu = this.switchmenu.bind(this);
  }

  switchmenu() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleFormChange() {
    const form = this.state.form;
    form[event.target.name] = event.target.value;
    form.errors = this.mailService.checkErrors(event.target, this.state);
    this.setState(
        {form: form},
    );
  }

  changeStatus(status) {
    this.setState(
        {formStatus: status},
    );
  }

  async sendForm() {
    const {isValid, errors} = this.mailService.formIsValid(this.state);
    this.setState({
      errors: errors,
    });
    if (isValid) {
      this.changeStatus('loading');
      await this.mailService.sendForm('Alguién se suscribió.', this.state.form);
      this.changeStatus('sent');
    }
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
              Suscríbete a nuestras noticias</h1>
          </div>

          <div className={
            this.state.formStatus=='sent'?'subscribeNews__sucess':'hide'}>
            <div className="subscribeNews__sucess-wrap">
              <div className="subscribeNews__sucess-content">
                <h1 className="subscribeNews__sucess-title">
                  ¡Gracias por suscribirte!
                </h1>
                <p className="subscribeNews__sucess-description">
                  Te informaremos acerca de nuestras ofertas prontamente
                </p>
              </div>
            </div>
          </div>

          <div className={
            this.state.formStatus=='loading'?'subscribeNews__loading ':'hide'}>
            <div className="subscribeNews__loading-wrap">
              <img className="subscribeNews__loading-img" src={Loading}
                alt="loading icon" />
            </div>
          </div>

          <div className={this.state.formStatus=='input'?'':'hide'}>
            <form className="subscribeNews__form">
              <div className="subscribeNews__input-wrap">

                <label className="subscribeNews__label">Correo</label>
                <input type="email" required className="subscribeNews__input"
                  name="email" value={this.state.form.email}
                  onChange={this.handleFormChange}/>

                <label className="subscribeNews__phone">Teléfono</label>
                <input className="subscribeNews__input subscribeNews__phone"
                  name="phone" value={this.state.form.phone}
                  onChange={this.handleFormChange}/>

                <label className={!this.subscription?'subscribeNews__address':
                                'hide'}>
                  Dirección</label>
                <input value={this.state.form.address}
                  className={!this.subscription?
                  'subscribeNews__address':'hide'}
                  name="address" onChange={this.handleFormChange}/>
              </div>
              <p className={this.state.errors.email!=''?
                'subscribeNews__error-msg':'hide'}>
                {this.state.errors.email}
              </p>

              <button type="button" className="subscribeNews__btn"
                onClick={this.sendForm}>
                Enviar
              </button>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

