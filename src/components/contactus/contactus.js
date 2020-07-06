import React from 'react';
import './contactus.scss';
import axios from 'axios';

export default class ContactUs extends React.Component {
  state = {
    form: {
      name: '',
      email: '',
      message: '',
      phone: 'Deja este espacio en blanco',
      address: 'Deja este espacio en blanco',
    },
    display: false,
  }
  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }
  handleFormChange() {
    const form = this.state.form;
    form[event.target.name] = event.target.value;
    this.setState(
        {form: form},
    );
    console.log(this.state.form);
  }
  sendForm() {
    axios.post(
        'https://0gza7dizjd.execute-api.us-west-2.amazonaws.com/PROD/SendEmail'+
      '?name='+this.state.form.name+
      '&message='+this.state.form.message+
      '&targetAddress=kevinamaya04@gmail.com'+
      '&email='+this.state.form.email,
        {
          'name': this.state.form.name,
          'message': this.state.form.message,
          'targetAddress': 'kevinamaya04@gmail.com',
          'email': this.state.form.email,
        }
        ,
        {headers: {'Content-Type': 'application/json'}},
    ).then((response) =>{
      console.log(response);
    });
  }
  render() {
    return (
      <div className="contactus">
        <div className="contactus__wrap">
          <h3 className="contactus__title">CONTÁCTANOS</h3>
          <form className="contactus__form">
            <label className="contactus__label">Nombre</label>
            <input className="contactus__input" type="text" name="name"
              value={this.state.form.name}
              onChange={this.handleFormChange}
              required
            />
            <label className="contactus__label">Email</label>
            <input className="contactus__input" type="email" name="email"
              value={this.state.form.email}
              onChange={this.handleFormChange}
              required
            />
            <label className="contactus__label">Mensaje</label>
            <textarea className="contactus__textarea" name="message"
              value={this.state.form.message.value}
              onChange={this.handleFormChange}
            />
            <input className="contactus__phone"
              value={this.state.form.address}
              onChange={this.handleFormChange}
            />
            <input
              onChange={this.handleFormChange}
              value={this.state.form.phone}
              style={this.state.display?{}:{display: 'none'}}
            />
            <button className="contactus__btn"
              onClick={this.sendForm}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
