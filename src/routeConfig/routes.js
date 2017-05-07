import React from 'react';
import Home from '../pages/Home/Home';

import GetInvolvedPage from '../pages/GetInvolvedPage/GetInvolvedPage';
import GetInvolvedVolunteer from '../pages/GetInvolvedPage/GetInvolvedVolunteer/GetInvolvedVolunteer';
import GetInvolvedCompany from '../pages/GetInvolvedPage/GetInvolvedCompany/GetInvolvedCompany';
import GetInvolvedStudent from '../pages/GetInvolvedPage/GetInvolvedStudent/GetInvolvedStudent';

import Lab from '../pages/Lab/Lab';
import Team from '../pages/Team/Team';
import News from '../pages/News/News';
import Bootcamp from '../pages/Bootcamp/Bootcamp';

import Roster from '../pages/Bootcamp/Roster/Roster';
import RosterMember from '../pages/Bootcamp/Roster/RosterMember/RosterMember';
import rosterMembersConfig from '../pages/Bootcamp/Roster/rosterMembersConfig';

import {Route, IndexRoute, Redirect} from 'react-router';
import App from '../App';

const rosterMemberRoutes = rosterMembersConfig.map((item, key) => {
  return (
    <Route
      key={key}
      path="roster/:memberName"
      component={RosterMember}
    />
  )
});

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Home} key="home"/>
    <Route path="bootcamp">
      <Route path="roster" component={Roster} />
      {rosterMemberRoutes}
      <IndexRoute component={Bootcamp}/>
    </Route>
    <Route path="lab" component={Lab}/>
    <Route path="team" component={Team}/>
    <Route path="news" component={News}/>
    <Route path="get-involved">
      <IndexRoute component={GetInvolvedPage} />
      <Route path="company" component={GetInvolvedCompany}/>
      <Route path="volunteer" component={GetInvolvedVolunteer}/>
      <Route path="student" component={GetInvolvedStudent}/>
      <Redirect from="mentor" to='volunteer' />
    </Route>

    {/* This is a catch-all instead of a 404. DO NOT REMOVE */}
    <Redirect from="*" to="/" />
  </Route>
);
