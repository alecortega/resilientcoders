import './Home.scss';
import React, {PureComponent} from 'react';
import EmailFormShort from '../../components/EmailForms/EmailFormShort';
import UIButton from 'UILibrary/button/UIButton';
import MicahVideo from './MicahVideo/MicahVideo';
import PhotoCarousel from './PhotoCarousel/PhotoCarousel';
import Steps from './Steps/Steps';
import {Power1, Power2} from 'TweenMax';
import skylineForegroundImage from '../../images/skyline-foreground.svg';
import skylineBackgroundImage from '../../images/skyline-background.svg';
import homeImage from './home_photo.png';
import Hero from '../../components/Containers/Hero/Hero';
import RouteTransition from '../../components/RouteTransition/RouteTransition';
import SideBySide from '../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../components/Containers/SideBySide/SideItem/SideItem';
import CenteredContainerOuter from '../../components/Containers/CenteredContainer/CenteredContainerOuter';
import CenteredContainerInner from '../../components/Containers/CenteredContainer/CenteredContainerInner';
import Parallax from '../../components/Effects/Parallax';
import Partners from '../../components/Containers/Partners/Partners';
import alumniCompaniesConfig from './alumniCompaniesConfig';
import Helmet from "react-helmet";


import UIFlexRow from 'UILibrary/grid/UIFlexRow';
import UIFlex from 'UILibrary/grid/UIFlex';
import UICard from 'UILibrary/layout/UICard';
import UIImage from 'UILibrary/image/UIImage';
import UISection from 'UILibrary/layout/UISection';
import UILayout from 'UILibrary/layout/UILayout';

class Home extends PureComponent {
  render() {
    return (
      <RouteTransition>
        <Helmet title="Resilient Coders" />
        <Hero
          titleLineOne="Hacking the"
          titleLineTwo="opportunity gap"
          setIsPageLoaded={this.props.setIsPageLoaded}
          isPageLoaded={this.props.isPageLoaded}
        >
          <span className="divider divider__red"></span>
          <p>
            Spreading code literacy to young people from traditionally underserved communities.
          </p>
          <UIButton to="/get-involved">
            Get Involved
          </UIButton>
        </Hero>

        <UILayout>
          <UISection className="p-bottom-6">
            <UIFlexRow>
              <UIFlex className="pull-up-1 index-10">
                <UICard className="p-all-6">
                  <h1>OUR MISSION</h1>
                  <p>
                    We believe in social justice through economic empowerment, and in the opportunity
                    for meritocracy in tech. We think holistically about the school-to-workforce
                    pipeline, offering a chaining series of programs that guide our hackers through
                    the extensive journey of learning web development.
                  </p>
                  <p>
                    This isn't about one-off camps or hackathons. This is about
                    <span className="strong">
                      &nbsp;meaningful change.
                    </span>
                  </p>
                </UICard>
              </UIFlex>
              <UIFlex className="pull-up-2 index-10">
                <UIImage type="cover" src={homeImage} />
              </UIFlex>
            </UIFlexRow>
          </UISection>
        </UILayout>

        <CenteredContainerOuter color="dark-grey">
          <CenteredContainerInner className="text-center" color="dark-grey">
            <h1>Meet our students</h1>
            <p className="text-constrained text-on-dark">
              Our students come from have a variety of backgrounds and perspectives, but
              they all share drive and passion.
            </p>
          </CenteredContainerInner>
        </CenteredContainerOuter>
        <PhotoCarousel />
        <CenteredContainerOuter color="white">
          <CenteredContainerInner color="white" className="text-center">
            <h3>Our alumni are employed by companies like:</h3>
            <Partners
              partnersConfig={alumniCompaniesConfig}
              buttonText="Hire our students"
              to="/bootcamp/roster"
            />
          </CenteredContainerInner>
        </CenteredContainerOuter>

        <MicahVideo/>

        <CenteredContainerOuter color="white">
          <CenteredContainerInner
            color="dark-grey"
            className="text-center pull-up"
            accent={true}
          >
            <p className="text-on-dark">
              There's more than one way to join the code literacy movement.
            </p>
            <UIButton to="/get-involved" className="center-block">
              GET INVOLVED
            </UIButton>
          </CenteredContainerInner>
          <Steps />
        </CenteredContainerOuter>

        <CenteredContainerOuter color="grey" className="subscribe-section">
          <CenteredContainerInner color="transparent" className="text-center">
            <h1>Keep in Touch</h1>
            <p className="text-constrained">
              We're on a mission to make computer science a meritocracy.
              Help us make the Boston tech community more diverse and inclusive.
            </p>
            <div className="general-subscribe-form">
              <EmailFormShort />
            </div>
          </CenteredContainerInner>
          <div className="skyline">
            <div className="foreground">
              <Parallax
                to={0}
                from={500}
                triggerHook={0.7}
                duration="90%"
                ease={Power2.easeOut}
                className="align-bottom"
              >
                <img src={skylineForegroundImage} role="presentation" />
              </Parallax>
            </div>
            <div className="background">
              <Parallax
                to={0}
                from={350}
                triggerHook={0.7}
                duration="90%"
                ease={Power1.easeOut}
                className="align-bottom"
              >
                <img src={skylineBackgroundImage} role="presentation" />
              </Parallax>
            </div>
          </div>
        </CenteredContainerOuter>
      </RouteTransition>
    );
  }
}

export default Home;
