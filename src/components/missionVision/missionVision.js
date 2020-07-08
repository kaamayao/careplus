import React from 'react';
import './missionVision.scss';
import MissionImg from '../../images/missionVision/missionBG.png';
import VisionImg from '../../images/missionVision/visionBG.png';

export default class MissionVision extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='missionVision'>
        <div className='missionVision__mission'>
          <div className='missionVision__content-wrap'>
            <h2 className='missionVision__title blue
                           missionVision__border-blue'>
              Misión
            </h2>
            <p className='missionVision__description'>
              Ofrecemos a la comunidad colombiana servicios integrales de salud,
              productos relacionados con la salud, el cuidado y el bienestar y,
              participamos en procesos de formación continuada con estándares de
              calidad, comprometidos en satisfacer las necesidades de todos
              nuestros clientes en medio de una relación responsable, de
              empatía y de confianza.
            </p>
          </div>
          <img src={MissionImg}
            className="missionVision__img"/>
        </div>
        <div className='missionVision__vision'>
          <div className='missionVision__content-wrap'>
            <h2 className='missionVision__title green
                           missionVision__border-green'>
              Visión
            </h2>
            <p className='missionVision__description'>
              Ser una empresa reconocida a nivel nacional en la prestación de
              servicios de salud,distribución de insumos y liderazgo de espacios
              de formación académica continuada relacionados con el cuidado de
              la salud y bienestar generando un impacto social, científico
              y académico.
            </p>
          </div>
          <img src={VisionImg}
            className="missionVision__img"/>
        </div>
      </div>
    );
  }
}
