import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import backgroundImage from './assets/images/draftboard-bg.jpg';
import './assets/css/App.css';

const style = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
};

class App extends Component {
  componentWillMount() {
    this.setState({ screenHeight: window.innerHeight });
  }
  render() {
    return (
      <div style={{ ...style, height: this.state.screenHeight }}>
        <Header />
        <div className="main-wrapper">
          <main role="main">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login} />
              </Switch>
            </BrowserRouter>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
