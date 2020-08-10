import React from 'react';
import './quoteTestimonial.scss';
import Bottom from '../../images/Testimonials/bottom-image.png';

export default class QuoteTestimonial extends React.Component {
  state = {
    currentDescription: '',
    slide: {},
    slideIndex: 0,
  }

  slides = [
    {
      description: `Decidimos con mi esposo que de ahora en adelante seas la
      pediatra de nuestro hijo Esteban. No gusto mucho`,
      client: `Bibiana Ruiz`,
    },
    {
      description: `Excelente profesional, ama lo que hace y lo demuestra,
      feliz de tener a mi hija en manos confiables `, client: `Belkis B.`,
    },
    {
      description: `Excelente atención. El trato con mi hijo bueno. Nos aclaró
      todas las dudas que teníamos. Buena actitud Buen trato`,
      client: `Adriana`,
    },
    {
      description: `Excelente resuelve las dudas a las mamitas es muy dedicada
      con sus pacientes y profesional recomendada`, client: `Dileidy escorcia`,
    },
    {
      description: `Se evidencia su experiencia y conocimiento de los niños,
      todo esto sumado a su carisma con los chiquis y su nivel de
      profesionalismo, una gran persona.`, client: `Danny d`,
    },
    {
      description: `Es una excelente profesional, siempre resuelve nuestra
      dudas e inquietudes y está en contacto con nosotros siempre que la hemos
      necesitado.`, client: `Diana c`,
    },
    {
      description: `Súper ... muchas gracias, las recomendaciones dadas son
      efectivas y se solicitaron los exámenes de acuerdo al plan de desarrollo
      de mi bebe.`,
      client: `Lorena Murcia`,
    },
    {
      description: `La doctora es muy amable cariñosa con los bebés y escucha
      muchísimo todas las dudas e inquietudes por pequeñas que parezcan Buena
      Ubicacion`, client: `Vanessa Márquez`,
    },
    {
      description: `Excelente atención! Muy buen trato con los niños, cariñosa,
      amable y profesional... y buenas recomendaciones`, client: `Wendy`,
    },
    {
      description: `Calidad humana y profesionalismo! Después de ver varios
      pediatras, quedamos maravillados con ella! Además las mejorias en el bebé
      fueron evidentes desde que comenzó a tratarlo`, client: `Ji.lopez2504`,
    },
  ]

  intervalSlide

  constructor(props) {
    super(props);
    this.changeSlide = this.changeSlide.bind(this);
    this.moveSlide = this.moveSlide.bind(this);
  }

  mod(n, m) {
    return ((n % m) + m) % m;
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  changeSlide(mov) {
    const slideIndex = this.mod(this.state.slideIndex +
      mov, this.slides.length);
    this.setState(
        {
          slide: this.slides[slideIndex],
          slideIndex: slideIndex,
        },
    );
  }

  async changeSlideState() {
    this.changeSlide(1);
  }

  componentDidMount() {
    const slideIndex = this.getRandomArbitrary(0, this.slides.length);
    this.setState(
        {
          slide: this.slides[slideIndex],
          slideIndex: slideIndex,
        },
    );
    this.intervalSlide = setInterval(() => this.changeSlideState(), 2500);
  }

  moveSlide(mov) {
    clearInterval(this.intervalSlide);
    this.changeSlide(mov);
    this.intervalSlide = setInterval(() => {
      this.startAnimation;
      this.changeSlide(1);
    }, 2500);
  }

  render() {
    return (
      <div className="quote-testimonial">
        <div className="quote-testimonial__content">
          <h1 className="quote-testimonial__title">Testimonios</h1>
          <p className="quote-testimonial__lquote
            quote-testimonial__quote">
            &ldquo;</p>
          <p className={`quote-testimonial__description
                        ${this.state.animation}`}
          onAnimationEnd={this.onAnimationEnd}
          onAnimationStart={this.onAnimationStart}>
            {this.state.slide.description}
          </p>
          <p className="quote-testimonial__rquote
                        quote-testimonial__quote">&rdquo;</p>
        </div>
        <div className="quote-testimonial__btn-wrap">
          <button onClick={()=>this.moveSlide(-1)}
            className="quote-testimonial__btn quote-testimonial__lbtn">
                        &lt; </button>
          <p className="quote-testimonial__user">
            {this.state.slide.client}
          </p>
          <button onClick={()=>this.moveSlide(1)}
            className="quote-testimonial__btn quote-testimonial__rbtn">
                        &gt; </button>
        </div>
        <img className="quote-testimonial__bottom-img" src={Bottom} />
      </div>
    );
  }
}
