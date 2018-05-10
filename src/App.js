import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import Landing from './feed/Landing';

const App = () => (
  <React.Fragment>
    <Header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/feed" component={Landing} />
        </Switch>
      </BrowserRouter>
    </Header>
  </React.Fragment>
);

export default App;
