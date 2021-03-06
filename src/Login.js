import React from 'react';
import { Link } from 'react-router-dom';
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

export default () => (
  <Container className="d-flex justify-content-center h-100">
    <Row className="mt-auto mb-auto">
      <Col>
        <Card style={{ boxShadow: '3px 5px 10px black', maxWidth: 500 }}>
          <CardBody>
            <CardTitle className="title" style={{ color: '#4fc1e9' }}>
              Login
            </CardTitle>
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
                  <FormGroup check inline className="mb-2">
                    <Label check>
                      <Input type="checkbox" /> Remember Me
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="form-actions">
                <Col xs={12} md={6} className="mb-2">
                  <Link to="/feed">
                    <Button className="btn-block" color="success">
                      Login
                    </Button>
                  </Link>
                </Col>
                <Col xs={12} md={6}>
                  <Button className="btn-block" color="primary">
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
