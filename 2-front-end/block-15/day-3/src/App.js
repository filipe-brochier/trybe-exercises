import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import PersonalData from './pages/PersonalData';
import ProfessionalData from './pages/ProfessionalData';
import FormDataDisplay from './pages/FormDataDisplay';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = "/" component={ PersonalData } />
        <Route exact path = "/professionalForm" component={ ProfessionalData } />
        <Route exact path = "/formDataDisplay" component={ FormDataDisplay } />
      </Switch>
    );
  }
}
export default App;
