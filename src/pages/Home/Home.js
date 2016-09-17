import './Home.scss';
import React, {Component} from 'react';
import {Link} from 'react-router';
import BinaryText from '../../components/BinaryText/BinaryText';
import EmailFormShort from '../../components/EmailForms/EmailFormShort';
import ButtonPrimary from '../../components/Buttons/ButtonPrimary';
import MicahVideo from './MicahVideo/MicahVideo';
import HomeCarousel from './PhotoCarousel/PhotoCarousel';
import Steps from './Steps/Steps';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import Coworking from './Coworking/Coworking';

import Hero from '../../components/Containers/Hero/Hero';
import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';
import CenteredContainerOuter from '../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../components/Containers/CenteredContainer/CenteredContainerInner';

import Parallax from '../../components/Effects/Parallax';

class Home extends Component {
  render() {
    return (
      <RouteTransition>
        <Hero
          titleLineOne="Hacking the"
          titleLineTwo="opportunity gap"
        >
          <span className="divider divider__red"></span>
          <p>Spreading code literacy to young people from traditionally underserved communities.</p>
          <ButtonPrimary to="/get-involved">
            Get Involved
          </ButtonPrimary>
        </Hero>
        <SideBySide className="home-details">
          <SideItem
            type="white"
            className="home-text"
          >
            <h1>OUR MISSION</h1>
            <p>
              We believe in social justice through economic empowerment, and in the opportunity for meritocracy in tech. We think holistically about the
              school-to-workforce pipeline, offering a chaining series of programs that guide our hackers through the extensive journey of learning web development.
            </p>
            <p>
              This isn't about one-off camps or hackathons. This is about meaningful change.
            </p>
          </SideItem>
          <SideItem
            type="image"
            className="home-photo"
          >
            <HomeCarousel/>
          </SideItem>
        </SideBySide>
        <MicahVideo/>
        <CenteredContainerOuter color="grey">
          <CenteredContainerInner color="white" standard={false}>
            <div className="call-to-action-container clearfix">
              <div className="section-main section-tertiary section-tertiary__alert call-to-action">
                <div className="section-container-primary">
                  <p>There's more than one way to join the code literacy movement.</p>
                  <Link to="/get-involved" className="button button__slice">
                    <span>GET INVOLVED</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tiered-program">
              <div className="tiered-program-title">
                <h1>AN END TO END SOLUTION</h1>
                <p>In order to effectively educate and employ our students we’ve developed a funnel with overlapping means of engagement.</p>
                <div className="divider divider__red" />
              </div>
              <Steps/>
            </div>
          </CenteredContainerInner>
          <CenteredContainerInner color="white" standard={false} className="coworking-contact">
            <Coworking />
            <EmailFormShort />
          </CenteredContainerInner>
        </CenteredContainerOuter>
      </RouteTransition>
    );
  }
}

export default Home;
