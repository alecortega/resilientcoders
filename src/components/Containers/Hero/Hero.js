import './Hero.scss';
import React, { PropTypes } from 'react';
import classNames from 'classnames';

import DotLight from '../Dots/dot-light.svg';
import BinaryText from '../../BinaryText/BinaryText';
import HeroVideo from './HeroVideo';

class Hero extends React.Component {
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
            backgroundImage: `url(${image})`
          }}
        />
      )
    }
    else {
      return <HeroVideo />;
    }
  }
  render () {
    const {image, children, className, centered} = this.props;

    const heroClass = classNames('hero', className);

    const heroContentClass = classNames('hero__content', {
      'hero__content--centered': centered,
    });

    return (
      <div className={heroClass}>
        <div
          className="hero__overlay"
          style={{
            backgroundImage: `url(${DotLight}), linear-gradient(rgba(51, 51, 51, 0.7) 30%, rgba(51, 51, 51, 0.35))`
          }}
        />
        {this.renderImageContent()}
        <div className={heroContentClass}>
          {this.renderTitleLineOne()}
          {this.renderTitleLineTwo()}
          {children}
        </div>
      </div>
    )

  }
}

export default Hero;