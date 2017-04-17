import './GetInvolvedMentor.scss';
import React from 'react';
import RouteTransition from '../../../components/RouteTransition/RouteTransition';
import Hero from '../../../components/Containers/Hero/Hero';
import SideBySide from '../../../components/Containers/SideBySide/SideBySide';
import SideItem from '../../../components/Containers/SideBySide/SideItem/SideItem';
import EmailFormLong from '../../../components/EmailForms/EmailFormLong';
import Helmet from 'react-helmet';
import mentorImage from './get-involved-mentor.jpg';
import communityImage from './community.jpg';

const MENTOR_FORM_URL = '/api/subscribe/mentor';

const GetInvolvedMentor = (props) => {
  return (
    <RouteTransition>
      <Helmet title="For Mentors" />
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
            Volunteer Corps
          </h2>
          <p>
            There's more than one way to contribute at Resilient Coders. Our Volunteer Corps is comprised of
            three Task Forces: Mentorship, Content Production, and Talent Placement. You can <a href="https://cdn2.hubspot.net/hubfs/2253693/Docs/VolunteerCorps.pdf" alt="Resilient Coders Volunteer Corps">read about Volunteer Corps</a>, or just fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSdgFPrBw28g3vlDL0XMUzQ3kmwHLWVFk2YAKa7M8ChbEeyoCA/viewform">this survey</a>.
            Once you've done that, come by.
            We want to meet you. Our Community Hours are Tuesdays and Thursdays, at 50 Milk St. Boston MA, 5th floor, between 3:30 and 6. <a href="mailto:leon@resilientcoders.org?subject=Mentor%20stopping%20by">Email Leon</a> if you're planning on stopping by,
            so we know to expect you.
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
            We're always looking for hacktivists who share our vision of technology as an
            opportunity for real meritocracy, to join us. Share your passion.

          </p>
          <p>Next Bootcamp will be at the Roxbury Innovation Center, from July 10th through September 1st. More details coming soon.
          </p>
          {/*
          <p>
            Coders who want to get involved as mentors should peruse our mentorhsip calendar
            that features moments during our Bootcamp, during which we could benefit from your
            help as a TA. Find a slot that works for your schedule and your skill set and book it.
            And send an email to Leon (@resilientcoders.org) so that we know to expect you.
          </p>
          <ButtonPrimary href="https://calendar.google.com/calendar/selfsched?sstoken=UUYwX0FsN0dKV0pvfGRlZmF1bHR8YjZiMzI2NThiYTAyMGZlN2JkMWJlMjNkZTQ5NzcxYTY">
            Book a time to mentor
          </ButtonPrimary>
          */}
        </SideItem>
        <SideItem flush={true}>
          <img src={communityImage} alt="Resilient community" />
        </SideItem>
      </SideBySide>
    </RouteTransition>
  )
}

export default GetInvolvedMentor
