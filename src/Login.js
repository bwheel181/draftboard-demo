import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import './assets/css/Login.css';

export default class Login extends React.Component {
  render() {
    return (
      <div className="main">
        <Card className="card">
          <CardBody>
            <CardTitle className="title">Login</CardTitle>
            <CardSubtitle className="subtitle">
              Please fill in your username and password or register for free
            </CardSubtitle>
          </CardBody>
          <hr />
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" /> Remember Me
                </Label>
              </FormGroup>
              <Button className="submit-btn" color="success">
                Login
              </Button>
              <Button className="facebook-btn" color="primary">
                Login with Facebook
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
