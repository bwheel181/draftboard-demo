import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import Header from './Header';
import Login from './Login';
import Image from './assets/images/bg-baseball.jpg';

const styles = {
  bgImage: {
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: '#999',
    height: '100%',
  },
};

class App extends Component {
  render() {
    return (
      <Row style={styles.bgImage}>
        <Col>
          <Header />
          <main role="main" className="h-100">
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login} />
              </Switch>
            </BrowserRouter>
          </main>
        </Col>
      </Row>
    );
  }
}

export default App;
