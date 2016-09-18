import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import React from 'react'
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class Parallax extends React.Component {
  componentWillMount() {
    this.controller = new ScrollMagic.Controller();
  }
  componentDidMount() {
    if (!this.triggerElement || !this.targetElement) {
      return
    }

    const tween = new TimelineMax().add([TweenMax.fromTo(this.targetElement, 1, {
        y: this.props.from
      }, {
        y: this.props.to,
        ease: Linear.easeNone
      })]);

    this.scene = new ScrollMagic
      .Scene({duration: window.innerWidth, offset: 0.3, triggerHook: 1})
      .setTween(tween)
      .addTo(this.controller)
      .triggerElement(this.triggerElement)
  }
  componentWillUnmount() {
    this.scene.destroy(true)
    this.scene = null;
  }
  getWindowHeight() {
    return window.innerWidth
  }
  setTriggerElementRef(element) {
    this.triggerElement = element;
  }
  setTargetElementRef(element) {
    this.targetElement = element;
  }
  render() {
    const className = classNames('stretch-to-fit', this.props.className);
    
    return (
      <div
        ref={this.setTriggerElementRef.bind(this)}
      >
        <div
          className={this.props.className}
          ref={this.setTargetElementRef.bind(this)}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Parallax;
