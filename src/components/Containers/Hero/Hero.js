import './Hero.scss';
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import DotLight from '../Dots/dot-light.svg';
import BinaryText from '../../BinaryText/BinaryText';
import HeroVideo from './HeroVideo';
import HeroImage from './hero-image.jpg';
import Fade from '../../Effects/Fade';
import Scale from '../../Effects/Scale';

class Hero extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      supportsAutoplay: false
    }
  }
  renderTitleLineOne() {
    const {titleLineOne} = this.props;
    if (!titleLineOne) return

    return (
      <h1 className="hero-title-one">
        <BinaryText>
          {titleLineOne}
        </BinaryText>
      </h1>
    )
  }
  renderTitleLineTwo() {
    const {titleLineTwo} = this.props;
    if (!titleLineTwo) return

    return (
      <h1 className="hero-title-two">
        <BinaryText>
          {titleLineTwo}
        </BinaryText>
      </h1>
    )
  }
  renderImageContent() {
    const {image} = this.props;
    if (image) {
      return (
        <div
          className="hero__image"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      )
    }
    else {
      return (
        <HeroVideo />
      )
    }
  }
  render () {
    const {image, children, className, centered, short} = this.props;

    const heroClass = classNames('hero', className, {
      'hero--short': short === true
    });

    const heroContentClass = classNames('hero__content', {
      'hero__content--centered': centered,
    });

    return (
      <div className={heroClass}>
        <Fade from={1} to={0.25} className="hero">
          <div
            className="hero__overlay"
            style={{
              backgroundImage: `url(${DotLight}), linear-gradient(90deg, rgba(51, 51, 51, 0.7) 30%, rgba(51, 51, 51, 0.35))`
            }}
          />
          <Scale from={1} to={1.3}>
            {this.renderImageContent()}
          </Scale>
          <div className={heroContentClass}>
            {this.renderTitleLineOne()}
            {this.renderTitleLineTwo()}
            {children}
          </div>
        </Fade>
      </div>
    )

  }
}

export default Hero;
