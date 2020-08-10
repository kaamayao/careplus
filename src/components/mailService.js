import React from 'react';

export default class MailService extends React.Component {
  constructor(props) {
    super(props);
  }

  formIsValid(state) {
    let isValid = true;
    let errors;
    for (const field in state.errors) {
      if (state.errors.hasOwnProperty(field)) {
        errors = this.checkErrors({name: field, value: state.form[field]}, state);
        if (errors[field]!='') {
          isValid = false;
        }
      }
    }
    return {isValid: isValid, errors: errors};
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkErrors(field, state) {
    const errors = state.errors;
    errors[field.name] = '';
    if (field.value==''||field.value==null) {
      errors[field.name] = errors[field.name] + 'El campo esta vacío. ';
    }
    if (field.name=='email' && !this.validateEmail(field.value)) {
      errors[field.name] = errors[field.name] + 'El correo no es válido. ';
    }
    return errors;
  }

  async sendForm(title, form) {
    await fetch('https://vj0jnj7x37.execute-api.us-west-2.amazonaws.com/default/Send_Mail_HoneyPot',
        {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            surname: form.surname,
            message: form.message,
            address: form.address,
            title: title,
            toAddress: 'carepluscolombia@outlook.com',
          }),
        });
    return true;
  }
}

