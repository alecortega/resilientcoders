import './GetInvolvedMentor.scss';
import React from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import ButtonPrimary from '../../../components/Buttons/ButtonPrimary';
import Hero from '../../../components/Containers/Hero/Hero';
import SideBySide from '../../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../../components/Containers/SideBySide/SideItem/SideItem';
import CenteredContainerOuter from '../../../components/Containers/CenteredContainer/CenteredContainerOuter'
import EmailFormLong from '../../../components/EmailForms/EmailFormLong';

import mentorImage from './get-involved-mentor.jpg';
import communityImage from './community.jpg';

const MENTOR_FORM_URL = '/api/subscribe/mentor';

const GetInvolvedMentor = (props) => {
  return (
    <RouteTransition>
      <Hero
        titleLineOne="For mentors"
        image={mentorImage}
        short={true}
      >
        <div className="divider divider__red" />
      </Hero>

      <SideBySide color="white">
        <SideItem className="p-y">
          <h2>
            Stay informed
          </h2>
          <p>
            Enter in your information and we'll send over some details on how to get involved as
            a mentor and keep you up to date as new opportunities become available.
          </p>
        </SideItem>
        <SideItem className="pull-up-3" flush={true}>
          <EmailFormLong
            formUrl={MENTOR_FORM_URL}
          />
        </SideItem>
      </SideBySide>

      <SideBySide className="p-top">
        <SideItem className="p-y">
          <h2>
            Bootcamp
          </h2>
          <p>
            We're currently looking for hacktivists who share our vision of technology as an
            opportunity for real meritocracy, to join us. Share your passion.
          </p>

          <p>
            Coders who want to get involved as mentors should peruse our mentorhsip calendar
            that features moments during our Bootcamp, during which we could benefit from your
            help as a TA. Find a slot that works for your schedule and your skill set and book it.
            And send an email to Leon (@resilientcoders.org) so that we know to expect you.
          </p>
          <ButtonPrimary href="https://calendar.google.com/calendar/selfsched?sstoken=UUYwX0FsN0dKV0pvfGRlZmF1bHR8YjZiMzI2NThiYTAyMGZlN2JkMWJlMjNkZTQ5NzcxYTY">
            Book a time to mentor
          </ButtonPrimary>
        </SideItem>
        <SideItem flush={true}>
          <img src={communityImage} alt="Resilient community" />
        </SideItem>
      </SideBySide>
    </RouteTransition>
  )
}

export default GetInvolvedMentor
