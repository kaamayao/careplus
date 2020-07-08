import React from 'react';
import './shareExperience.scss';

export default class shareExperience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="share-experience">
        <div className="share-experience__green-line"></div>
        <h2 className="share-experience__title">Cuéntanos tu Experiencia</h2>
        <form className="share-experience__form">
          <label className="share-experience__text">Nombre</label>
          <input type="text" className="share-experience__input"/>
          <label className="share-experience__address">Dirección</label>
          <input type="text"
            className="share-experience__input share-experience__address"/>
          <label className="share-experience__phone">
            Teléfono</label>
          <input type="text"
            className="share-experience__input share-experience__phone"/>
          <label className="share-experience__text">Comentario</label>
          <textarea className="share-experience__comment"></textarea>
          <a className="share-experience__btn">Enviar</a>
        </form>
      </div>
    );
  }
}


