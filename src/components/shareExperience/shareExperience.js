import React from 'react';
import './shareExperience.scss';
import MailService from '../mailService.js';
import Loading from '../../images/Testimonials/loading-blue.gif';

!function($_x, _s, id) {
  let js; const fjs=$_x.getElementsByTagName(_s)[0]; if (!$_x.getElementById(id)) {
    js = $_x.createElement(_s); js.id = id; js.src = '//platform.docplanner.com/js/widget.js'; fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'zl-widget-s');

export default class shareExperience extends React.Component {
  state = {
    form: {
      name: '',
      message: '',
      surname: 'Deja este espacio en blanco',
      address: 'Deja este espacio en blanco',
    },
    errors: {
      name: '',
      message: '',
    },
    display: false,
    formStatus: 'input',
  }

  surname = true

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
      await this.mailService.sendForm('Alguien compartió su experiencia.',
          this.state.form);
      this.changeStatus('sent');
    }
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
        <a id="zl-url" className="zl-url" href="https://www.doctoralia.co/emely-licet-morales-rua/pediatra-nutriologo/bogota" rel="nofollow" data-zlw-doctor="emely-licet-morales-rua" data-zlw-type="big_with_calendar" data-zlw-opinion="false" data-zlw-hide-branding="true">Emely Licet Morales Rúa - Doctoralia.co</a>
        <form
          className={this.state.formStatus=='input'?'share-experience__form':
          'hide'}>

          <label className="share-experience__text">Nombre</label>
          <input type="text" name="name" value={this.state.form.name}
            onChange={this.handleFormChange}
            className="share-experience__input"/>
          <p className={this.state.errors.name!=''?
              'share-experience__error-msg':'hide'}>
            {this.state.errors.name}</p>

          <label className="share-experience__address">Dirección</label>
          <input type="text" name="address" value={this.state.form.address}
            onChange={this.handleFormChange}
            className="share-experience__input share-experience__address"/>

          <label className="share-experience__phone"> Teléfono</label>
          <input type="text" name="phone" value={this.state.form.surname}
            onChange={this.handleFormChange}
            className={this.surname?'hide':'share-experience-input'}/>

          <label className="share-experience__text">Comentario</label>
          <textarea type="text" name="message" value={this.state.form.message}
            onChange={this.handleFormChange}
            className="share-experience__comment"></textarea>
          <p className={this.state.errors.message!=''?
              'share-experience__error-msg':'hide'}>
            {this.state.errors.message}</p>

          <button type="button" className="share-experience__btn"
            onClick={this.sendForm}>
              Enviar
          </button>
        </form>
      </div>
    );
  }
}


