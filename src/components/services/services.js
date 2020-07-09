import React from 'react';
import './services.scss';
import {Link} from 'gatsby';

import Nutrition from '../../images/services/Nutrition.png';
import Medicine from '../../images/services/Medicine.png';
import MedicineEsp from '../../images/services/MedicineEsp.png';
import Kids from '../../images/services/Kids.png';
import Mother from '../../images/services/Mother.png';
import Food from '../../images/services/Food.png';
import Bed from '../../images/services/Bed.png';
import Cart from '../../images/services/Cart.png';
import Computer from '../../images/services/Computer.png';
import Ear from '../../images/services/Ear.png';

export default class Services extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="services">

        <div className="services__item-wrap services__item-blue">
          <div className="services__item">
            <div className="services__item-logo-wrap">
              <img src={Nutrition} className="services__item-logo"/>
            </div>
            <div className="services__item-content-wrap">
              <h2 className="services__item-title blue">
                Nutrilogía Nutrición</h2>
              <p className="services__item-description">
                La nutriología es la especialidad médica que estudia la
                alimentación humana y su relación con los procesos químicos,
                biológicos y metabólicos, así como su relación con la
                composición corporal y estado de salud humana. Le permite al
                médico integrar los conceptos de salud de una persona con un
                adecuado estilo de alimentación diseñado especialmente según
                las necesidades particulares de cada individuo.
              </p>
              <Link to="/contactanos" className="services__item-btn
                services__item-btn-blue">
                Conóce más</Link>
            </div>
          </div>
        </div>

        <div className="services__item-wrap services__item-green">
          <div className="services__item">
            <div className="services__item-logo-wrap">
              <img src={Medicine} className="services__item-logo"/>
            </div>
            <div className="services__item-content-wrap">
              <h2 className="services__item-title green">
                Medicina General</h2>
              <p className="services__item-description"> Ofrecemos atención
                medica general humanizada, con alta calidad profesional de
                manera presencial o virtual, encaminada a orientar y resolver
                integralmente el estado de enfermedad del paciente ayudando a
                recuperar su calidad de vida y que le permita a través de un
                acompañamiento cercano, reintegrarse a las actividades de la
                vida cotidiana.
              </p>
              <Link to="/contactanos" className="services__item-btn
                services__item-btn-green">
                Conóce más</Link>
            </div>
          </div>
        </div>

        <div className="services__item-wrap services__item-blue">
          <div className="services__item">
            <div className="services__item-logo-wrap">
              <img src={MedicineEsp} className="services__item-logo"/>
            </div>
            <div className="services__item-content-wrap">
              <h2 className="services__item-title blue">
                Medicina Especializada</h2>
              <p className="services__item-description">
                Contamos con un equipo humano especializado en diversas áreas
                del conocimiento médico y ciencias de la salud para la atención
                de pacientes que requieran de una atención especializada, con
                un alto grado de humanismo y con
                alto nivel académico y profesional, que conlleven al enfoque
                acertado de los síntomas y signos del paciente, promoviendo así
                una pronta recuperación de la
                salud del mismo.</p>
              <Link to="/contactanos" className="services__item-btn
                services__item-btn-blue">
                Conóce más</Link>
            </div>
          </div>
        </div>

        <div className="services__item-wrap services__item-green">
          <div className="services__item">
            <div className="services__item-logo-wrap">
              <img src={Kids} className="services__item-logo"/>
            </div>
            <div className="services__item-content-wrap">
              <h2 className="services__item-title green">
                Pediatría</h2>
              <p className="services__item-description">Contamos con personal
                médico especializado en pediatría y puericultura, guiando el
                proceso de crecimiento y desarrollo de tu bebé y facilitando la
                prevención de enfermedades y la promoción de la salud desde las
                etapas más tempranas de la vida. Tenemos atención a bebés,
                niños y adolescentes.  Los niños de ahora, serán los adultos de
                mañana.</p>
              <Link to="/contactanos" className="services__item-btn
                services__item-btn-green">
                Conóce más</Link>
            </div>
          </div>
        </div>

        <div className="services__item-wrap services__item-blue">
          <div className="services__item">
            <div className="services__item-logo-wrap">
              <img src={Mother} className="services__item-logo"/>
            </div>
            <div className="services__item-content-wrap">
              <h2 className="services__item-title blue">
                Asesoría en Lactancia Materna</h2>
              <p className="services__item-description">La lactancia materna es
                un proceso maravilloso y único que requiere de un
                acompañamiento adecuado. Evita sentirse desorientada y sola en
                esos primeros momentos después del parto. La falta de
                información hace que muchas mujeres que quieren amamantar
                cometan errores e incluso que otras abandonen de forma temprana
                la lactancia.</p>
              <Link to="/contactanos" className="services__item-btn
                services__item-btn-blue">
                Conóce más</Link>
            </div>
          </div>
        </div>

        <div className="services__item-wrap services__item-green">
          <div className="services__item">
            <div className="services__item-logo-wrap">
              <img src={Food} className="services__item-logo"/>
            </div>
            <div className="services__item-content-wrap">
              <h2 className="services__item-title green">
                Alimentación Complementaria</h2>
              <p className="services__item-description">El inicio y el
                mantenimiento de la alimentación complementaria requieren de
                una asesoría adecuada. Lo que tú comiste cuando pequeño, no
                necesariamente es lo que debes darle a tu bebé. Evita cometer
                errores durante este proceso que puedan generar intoxicaciones
                en los niños y aprende cuáles son los alimentos con los que
                puedes iniciar, la cantidad y la frecuencia correcta.</p>
              <Link to="/contactanos" className="services__item-btn
                services__item-btn-green">
                Conóce más</Link>
            </div>
          </div>
        </div>

        <div className="services__item-wrap services__item-blue">
          <div className="services__item">
            <div className="services__item-logo-wrap">
              <img src={Bed} className="services__item-logo"/>
            </div>
            <div className="services__item-content-wrap">
              <h2 className="services__item-title blue">Consulta de Manejo del
                Dolor en enfermedades crónicas, estado postoperatorio y en
                cuidados paliativos.</h2>
              <p className="services__item-description">Su objetivo principal
                es el alivio del dolor y la generación de bienestar en el
                paciente asociado a una mejor calidad de vida en el contexto
                familiar, profesional y en los estados de salud de enfermedades
                crónicas que no responde a los tratamientos convencionales o
                incluso, en las etapas avanzadas de enfermedades como el
                cáncer. Todo esto se consigue con un enfoque multidisciplinario
                del talento humano que conforma nuestra institución.</p>
              <Link to="/contactanos" className="services__item-btn
                services__item-btn-blue">
                Conóce más</Link>
            </div>
          </div>
        </div>

        <div className="services__item-wrap services__item-green">
          <div className="services__item">
            <div className="services__item-logo-wrap">
              <img src={Cart} className="services__item-logo"/>
            </div>
            <div className="services__item-content-wrap">
              <h2 className="services__item-title green"> Venta de productos
                relacionados con la salud, el bienestar y otros.</h2>
              <p className="services__item-description">Distribuimos tanto
                productos médicos como accesorios para el cuidado de toda tu
                familia.</p>
              <Link to="/contactanos" className="services__item-btn
                services__item-btn-green">
                Conóce más</Link>
            </div>
          </div>
        </div>

        <div className="services__item-wrap services__item-blue">
          <div className="services__item">
            <div className="services__item-logo-wrap">
              <img src={Computer} className="services__item-logo"/>
            </div>
            <div className="services__item-content-wrap">
              <h2 className="services__item-title blue">Cursos Online en salud
                y cuidados generales.</h2>
              <p className="services__item-description">Contamos con cursos que
                te permiten una formación continuada, tanto a nivel profesional
                como a nivel personal. Tenemos cursos dirigidos al personal
                médico y de la salud en general y, a su vez, contamos con
                cursos dirigidos a toda la familia en donde podrás aprender
                muchas cosas sobre el cuidado de tus hijos, sobre cómo
                alimentarlos y educarlos, entre muchos otros. Consúltalos ahora
                mismo en nuestra página web.</p>
              <Link to="/contactanos" className="services__item-btn
                services__item-btn-blue">
                Conóce más</Link>
            </div>
          </div>
        </div>

        <div className="services__item-wrap services__item-green">
          <div className="services__item">
            <div className="services__item-logo-wrap">
              <img src={Kids} className="services__item-logo"/>
            </div>
            <div className="services__item-content-wrap">
              <h2 className="services__item-title green">Consulta Domiciliaria
                de Pediatría</h2>
              <p className="services__item-description">Nuestros servicios de
                pediatría también llegan a tu casa. Elige esta modalidad si
                deseas una valoración desde la comodidad de tu hogar, tanto
                para valoraciones de crecimiento y desarrollo, como para
                valoraciones de las enfermedades más prevalentes en la edad
                pediátrica.</p>
              <Link to="/contactanos" className="services__item-btn
                services__item-btn-green">
                Conóce más</Link>
            </div>
          </div>
        </div>

        <div className="services__item-wrap services__item-blue">
          <div className="services__item">
            <div className="services__item-logo-wrap">
              <img src={Ear} className="services__item-logo"/>
            </div>
            <div className="services__item-content-wrap">
              <h2 className="services__item-title blue">Perforación de orejas
                para bebés
              </h2>
              <p className="services__item-description">Trabajamos con un
                sistema especialmente diseñado para la perforación de orejitas
                en bebés y niñas desde el primer día de vida hasta los 8 años
                de edad. Studex 75 es el único sistema aprobado por la FDA para
                perforar orejitas en este tipo de pacientes. No utiliza pistola
                sino un aplicador. Los aretes vienen en acero quirúrgico para
                evitar reacciones adversas por alergia en las orejitas.
                Igualmente están bañados en oro de 24 kilates y cuenta con un
                sistema de empaque y esterilización individual. ¡Pregunta por
                los modelos disponibles ahora mismo!.  </p>
              <Link to="/contactanos" className="services__item-btn
                services__item-btn-blue">
                Conóce más</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
