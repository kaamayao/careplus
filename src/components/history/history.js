import React from 'react';
import './history.scss';
import historyImg from '../../images/history/history.png';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="history">
        <div className="history__wrap">
          <div className="history__content-wrap">
            <h2 className="history__title blue">Historia</h2>
            <p className="history__description">
              A lo largo de los años, hemos sido testigos de situaciones
              desfavorables para el ser humano y la sociedad. Hemos sido
              testigos
              de desigualdad, irrespeto, falta de compromiso, apatía, impiedad,
              entre otros.
            </p>
            <p className="history__description">
              Después de muchas ideas sueltas, sueños, experiencias vividas
              y conversaciones, un día despertamos diciendo “Seamos parte del
              cambio que la sociedad necesita y brindemos servicios a la
              medida”.
              Ese día nos independizamos y fue justo allí cuando nació CarePlus
              Colombia, un empresa colombiana 100% a la vanguardia y dispuesta a
              ofrecer lo mejor a todos sus clientes tanto en el ámbito de la
              prestación de servicios de salud, como en la distribución de
              productos para el cuidado y bienestar y, la enseñanza y educación
              continuada.
            </p>
            <p className="history__description">
              Nos ponemos en los zapatos del otro para que nuestra razón de ser,
              siempre sea de calidad superior.
            </p>
            <p className="history__description">
              Estamos comprometidos con la satisfacción permanente de las
              necesidades y expectativas de las partes interesadas cumpliendo
              con
              calidad, puntualidad y oportunidad a las necesidades de nuestros
              pacientes y clientes en el marco de los requisitos legales
              aplicables.
            </p>
          </div>
          <div className="history__img-wrap">
            <img src={historyImg} className="history__img"/>
          </div>

        </div>
      </div>
    );
  }
}
