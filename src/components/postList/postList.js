import React from 'react';
import './postList.scss';
import Insta from '../../images/blog/insta.png';
import Youtube from '../../images/blog/youtube.png';
import Facebook from '../../images/blog/facebook.png';
import BlogPost1 from '../../images/blog/posts/Post1.jpg';
import BlogPost2 from '../../images/blog/posts/Post2.jpg';
import BlogPost3 from '../../images/blog/posts/Post3.jpg';
import BlogPost4 from '../../images/blog/posts/Post4.jpg';
import BlogPost5 from '../../images/blog/posts/Post5.jpg';

export default class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post">
        <div className="post__list-posts">

          <div className="post__wrap">
            <p className="post__date">2020/07/08</p>
            <h2 className="post__title blue">Alimentación complementaria</h2>
            <img src={BlogPost1} className="post__img"/>
            <p className="post__description">
              La alimentación juega un papel sumamente fundamental en la salud
              de todas las personas, bien sea niños, adolescentes o adultos.
              Es un hábito que hay que crear y es un proceso que debe ser
              equilibrado, suficiente y adecuado para cada individuo.
              Es importante que desde el inicio de la alimentación
              complementaria se creen hábitos de alimentación saludable que se
              mantengan durante toda la vida y que ayuden a prevenir
              enfermedades a largo plazo como obesidad, diabetes, hipertensión,
              enfermedad coronaria, entre otras.
            </p>
            <p className="post__description">
              Pide una asesoría con nuestros expertos en nutrición para
              garantizar un adecuado inicio de alimentación complementaria
              en tu bebé.
            </p>
            <p className="post__description">
              Recuerda que hoy podemos iniciar ese maravilloso proceso con
              ¡casi todo!.
            </p>
          </div>

          <div className="post__wrap">
            <p className="post__date">2020/07/08</p>
            <h2 className="post__title green">En el mercado, compra lo que
              realmente necesitas</h2>
            <img src={BlogPost2} className="post__img"/>
            <p className="post__description">
              Es importante que tus compras sean responsables,
              con esto evitarás comprar más
              de la cuenta y, por ende, consumir más de la cuenta.
              O simplemente evitarás
              comer lo que no necesitas.</p>
            <p className="post__description">
              Ver tantos productos al mismo tiempo nos genera antojo y
              muchas veces
              compramos cosas “por si acaso” y no porque de verdad
              lo necesitamos.
            </p>
            <p className="post__description">
              Te sugerimos:
            </p>
            <ul>
              <li className="post__description">Revisar el inventario de tu
                nevera y despensa.</li>
              <li className="post__description">
                Haz una lista de lo que verdaderamente necesitas.
              </li>
              <li className="post__description">
                Pedir a domicilio.
              </li>
              <li className="post__description">
                Compra la cantidad acorde a los integrantes de tu familia.
              </li>
              <li className="post__description">
                No acumules alimentos sin razón.
              </li>
            </ul>
            <p className="post__description">
              Y recuerda que es importante querer hacer las cosas bien y
              tener fuerza de voluntad.
            </p>
          </div>

          <div className="post__wrap">
            <p className="post__date">2020/07/08</p>
            <h2 className="post__title blue">Elige una Sedación Consciente</h2>
            <img src={BlogPost3} className="post__img"/>
            <p className="post__description">
              La sedación consciente es
              una técnica anestésica aplicada en diferentes
              modalidades a los pacientes evitando la
              sensación de angustia con el uso de uno
              o varios medicamentos, pero manteniendo un
              nivel de conciencia que permita
              establecer contacto verbal con el equipo de salud,
              logrando así disminuir la
              ansiedad y promoviendo un estado de relajación y bienestar.
              Puede haber una
              ligera somnolencia, permitiéndole al paciente tolerar
              y colaborar con el tratamiento
              que se le esta practicando,
              todo con la seguridad de estar en manos de un
              anestesiólogo experto en sedación.
            </p>
          </div>

          <div className="post__wrap">
            <p className="post__date">2020/07/08</p>
            <h2 className="post__title blue">¿Qué conoces de la Medicina del
              Dolor?</h2>
            <img src={BlogPost4} className="post__img"/>
            <p className="post__description">
              La medicina del dolor se encarga de tratar de manera humanitaria
              las dolencias
              nociceptivas y neuropáticas de manera integral,
              buscando como objetivo principal
              el alivio del dolor y generando en el paciente bienestar
              asociado a una mejor
              calidad de vida en el contexto familiar,
              profesional y en los estados de salud de
              enfermedades crónicas que no responde a los
              tratamientos convencionales o
              incluso, en las etapas avanzadas del cáncer.
              Todo esto se consigue con un
              enfoque multidiciplinario del talento humano que conforma
              nuestra institución.
            </p>
          </div>

          <div className="post__wrap">
            <p className="post__date">2020/07/08</p>
            <h2 className="post__title blue">La importancia de la Anestesiología
              y la Medicina Perioperatoria</h2>
            <img src={BlogPost5} className="post__img"/>
            <p className="post__description">
              La Anestesia se encuentra dentro uno de los desarrollos humanos
              con mayor
              impacto en la calidad de vida, ya que permite de manera
              controlada el acto
              quirúrgico sobre una persona para lograr solucionar sus problemas
              de salud
              generando bienestar.
              Se emplea por medio de estrategias multimodales como lo
              son el adecuado control de las náuseas y vómitos,
              el manejo integral del dolor
              intraoperatorio y postoperatorio con el concurso de
              técnicas avanzadas de
              bloqueos de nervios guiados por ecografia,
              valoración preanestesica dirigida de
              acuerdo a las enfermedades existentes en los pacientes y
              su optimización
              preoperatoria. Con todo esto, se logra brindar un proceso
              médico-quirúrgico con
              gran satisfacción en los pacientes y que a su vez,
              ofrece excelentes resultados.
            </p>
          </div>

        </div>
        <div className="post__follow-us">
          <p className="post__follow-us-title">
            Síguenos
          </p>
          <div className="post__follow-us-social">
            <div className="post__follow-us-social-item">
              <a href="https://www.instagram.com/careplus_col/" className="post__follow-us-social-link">
                <img className="post__follow-us-social-img" src={Insta}/>
                <span className="post__follow-us-social-description">
                  @careplus_col</span>
              </a>
              <a href=""className="post__follow-us-social-link">
                <img className="post__follow-us-social-img" src={Youtube}/>
                <span className="post__follow-us-social-description">
                  CarePlus Colombia</span>
              </a>
              <a href="https://www.facebook.com/CarePlus-Colombia-108909850808316/?ref=page_internal&path=%2FCarePlus-Colombia-108909850808316%2F"
                className="post__follow-us-social-link">
                <img className="post__follow-us-social-img" src={Facebook}/>
                <span className="post__follow-us-social-description">
                  CarePlus Colombia
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
