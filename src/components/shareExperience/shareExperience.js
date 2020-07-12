import React from 'react';
import './shareExperience.scss';
import MailService from '../mailService.js';
import Loading from '../../images/Testimonials/loading-blue.gif';

export default class shareExperience extends React.Component {
  state = {
    form: {
      name: '',
      message: '',
      phone: 'Deja este espacio en blanco',
      address: 'Deja este espacio en blanco',
    },
    errors: {
      name: '',
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
    this.changeStatus('loading');
    await this.mailService.sendForm('Desde el formulario de testimonio',
        this.state.form);
    this.changeStatus('sent');
  }

  render() {
    return (
      <div className="share-experience">
        <div className="share-experience__green-line"></div>
        <h2 className="share-experience__title">Cuéntanos tu Experiencia</h2>

        <div className={
          this.state.formStatus=='sent'?'share-experience__sucess':'hide'}>
          <div className="share-experience__sucess-wrap">
            <div className="share-experience__sucess-content">
              <h1 className="share-experience__sucess-title">
                ¡Gracias por contactarnos!
              </h1>
              <p className="share-experience__sucess-description">
                Tu experiencia es valiosa para nosotros.
              </p>
            </div>
          </div>
        </div>

        <div className={
          this.state.formStatus=='loading'?'share-experience__loading':'hide'}>
          <div className="share-experience__loading-wrap">
            <img className="share-experience__loading-img" src={Loading} alt="" />
          </div>
        </div>

        <form
          className={this.state.formStatus=='input'?'share-experience__form':
          'hide'}>

          <label className="share-experience__text">Nombre</label>
          <input type="text" name="name" value={this.state.form.email}
            onChange={this.handleFormChange}
            className="share-experience__input"/>

          <label className="share-experience__address">Dirección</label>
          <input type="text" name="address" value={this.state.form.address}
            onChange={this.handleFormChange}
            className="share-experience__input share-experience__address"/>

          <label className="share-experience__phone"> Teléfono</label>
          <input type="text" name="phone" value={this.state.form.phone}
            onChange={this.handleFormChange}
            className="share-experience__input share-experience__phone"/>

          <label className="share-experience__text">Comentario</label>
          <textarea type="text" name="message" value={this.state.form.message}
            onChange={this.handleFormChange}
            className="share-experience__comment"></textarea>

          <button type="button" className="share-experience__btn"
            onClick={this.sendForm}>
              Enviar
          </button>
        </form>
      </div>
    );
  }
}


