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
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.`,
      client: `Client 0`,
    },
    {
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.`,
      client: `Client 1`,
    },
    {
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.`,
      client: `Client 3`,
    },
    {
      description: `
            sed do Lorem sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.`,
      client: `Client 4`,
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

  changeSlide(mov) {
    const slideIndex = this.mod(this.state.slideIndex +
                       mov, this.slides.length);
    console.log(slideIndex);
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
    this.setState(
        {
          slide: this.slides[0],
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
