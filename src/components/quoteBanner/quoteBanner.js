import React from 'react';
import './quoteBanner.scss';

export default class QuoteBanner extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="quoteBanner">
        <div className="quoteBanner__title">
          Sobre Nosotros
        </div>
        <div className="quoteBanner__line"></div>
        <div className="quoteBanner__content">
          <p className="quoteBanner__quote">&quot;</p>
          <p className="quoteBanner__description">
            Nos ponemos en los zapatos del otro para que nuestra razón de ser
            siempre sea de calidad superior.
          </p>
        </div>
      </div>
    );
  }
}
