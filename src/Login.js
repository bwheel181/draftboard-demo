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
  Row,
  Col,
  Container,
} from 'reactstrap';

const styles = {
  wrapper: {
    boxShadow: '5px 5px 10px #121212',
  },
  buttons: {
    marginTop: '1em',
  },
};

export default class Login extends React.Component {
  render() {
    return (
      <Container className="h-100">
        <Row className="d-flex justify-content-center h-100">
          <Col xs={10} className="my-auto">
            <Card style={styles.wrapper}>
              <CardBody>
                <CardTitle className="title">Login</CardTitle>
                <CardSubtitle className="subtitle">
                  Please fill in your username and password or register for free
                </CardSubtitle>
              </CardBody>
              <hr />
              <CardBody>
                <Form>
                  <Row>
                    <Col>
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
                    </Col>
                  </Row>
                  <Row className="form-actions">
                    <Col xs={12} md={6}>
                      <Button
                        style={styles.buttons}
                        className="btn-block"
                        color="success"
                      >
                        Login
                      </Button>
                    </Col>
                    <Col xs={12} md={6}>
                      <Button
                        style={styles.buttons}
                        className="btn-block"
                        color="primary"
                      >
                        Login with Facebook
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
