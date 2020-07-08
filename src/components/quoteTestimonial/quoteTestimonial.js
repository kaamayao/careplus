import React from 'react';
import './quoteTestimonial.scss';
import Bottom from '../../images/Testimonials/bottom-image.png';

export default class QuoteTestimonial extends React.Component {
  state = {
    currentDescription: '',
    client: '',
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  render() {
    return (
      <div className="quote-testimonial">
        <div className="quote-testimonial__content">
          <h1 className="quote-testimonial__title">Testimonios</h1>
          <p className="quote-testimonial__lquote
                        quote-testimonial__quote">
            &ldquo;</p>
          <p className="quote-testimonial__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.</p>
          <p className="quote-testimonial__rquote
                        quote-testimonial__quote">&rdquo;</p>
        </div>
        <div className="quote-testimonial__btn-wrap">
          <a className="quote-testimonial__btn quote-testimonial__lbtn">
            &lt; </a>
          <p className="quote-testimonial__user">-Client</p>
          <a className="quote-testimonial__btn quote-testimonial__rbtn">
            &gt; </a>
        </div>
        <img className="quote-testimonial__bottom-img" src={Bottom} />
      </div>
    );
  }
}
