import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Login from './Login';

const App = () => (
  <React.Fragment>
    <Header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </Header>
  </React.Fragment>
);

export default App;
