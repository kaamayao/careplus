import React from 'react';
import './contactus.scss';
import Loading from '../../images/contactUs/loading.gif';
import MailService from '../mailService.js';

export default class ContactUs extends React.Component {
  state = {
    form: {
      name: '',
      email: '',
      message: '',
      phone: '',
      surname: 'Deja este espacio en blanco',
      address: 'Deja este espacio en blanco',
    },
    errors: {
      name: '',
      email: '',
      phone: '',
    },
    display: false,
    formStatus: 'input',
  }

  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.mailService = new MailService();
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
      await this.mailService.sendForm('Desde el formulario de contacto.',
          this.state.form);
      this.changeStatus('sent');
    }
  }

  render() {
    return (
      <div className="contactus">
        <div className={
          this.state.formStatus=='sent'?'contactus__sucess':'hide'}>
          <div className="contactus__sucess-wrap">
            <div className="contactus__sucess-content">
              <h1 className="contactus__sucess-title">
                ¡Gracias por contactarnos!
              </h1>
              <p className="contactus__sucess-description">
                Nos comunicaremos lo más pronto posible con usted.
              </p>
            </div>
          </div>
        </div>

        <div className={
          this.state.formStatus=='loading'?'contactus__loading':'hide'}>
          <div className="contactus__loading-wrap">
            <img className="contactus__loading-img" src={Loading} alt="" />
          </div>
        </div>

        <div className={
          this.state.formStatus=='input'?'contactus__wrap':'hide'}>
          <h3 className="contactus__title">CONTÁCTANOS</h3>
          <form className="contactus__form">

            <label className="contactus__label">Nombre</label>
            <input className="contactus__input" type="text" name="name"
              value={this.state.form.name}
              onChange={this.handleFormChange}
              required
            />
            <p className={this.state.errors.name!=''?
              'contactus__error-msg':'hide'}>
              {this.state.errors.name}</p>

            <label className="contactus__label">Email</label>
            <input className="contactus__input" type="email" name="email"
              value={this.state.form.email}
              onChange={this.handleFormChange}
              required
            />
            <p className={this.state.errors.email!=''?
              'contactus__error-msg':'hide'}>
              {this.state.errors.email}</p>

            <label className="contactus__label">Teléfono</label>
            <input className="contactus__input" type="text" name="phone"
              value={this.state.form.phone}
              onChange={this.handleFormChange}
              required
            />
            <p className={this.state.errors.phone!=''?
              'contactus__error-msg':'hide'}>
              {this.state.errors.phone}</p>

            <label className="contactus__label">Mensaje</label>
            <textarea className="contactus__textarea" name="message"
              value={this.state.form.message}
              onChange={this.handleFormChange}
            />

            <input className="contactus__phone"
              value={this.state.form.address}
              onChange={this.handleFormChange}
            />
            <input
              onChange={this.handleFormChange}
              value={this.state.form.surname}
              style={this.state.display?{}:{display: 'none'}}
            />
            <button type="button" className="contactus__btn"
              onClick={this.sendForm}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
