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
import image from '../assets/images/350x190.png';

export default () => (
  <Container
    className="h-100"
    style={{ padding: 0, backgroundColor: '#c0c0bc' }}
  >
    <Row>
      <Col className="d-flex justify-content-center">
        <Form inline>
          <FormGroup style={{ marginBottom: 0 }} row>
            <Col>
              <Input
                style={{ width: 310 }}
                placeholder="What's on your mind?"
              />
            </Col>
          </FormGroup>
          <Button color="danger">+</Button>
        </Form>
      </Col>
    </Row>
    <Row>
      <Col>
        <div
          style={{
            backgroundColor: '#fff',
            margin: 15,
            overflow: 'auto',
            padding: 15,
          }}
        >
          <div style={{ height: 75 }}>Feed Header Content</div>
          <hr />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis
            diam eleifend, tristique mi non, porttitor tellus. Cras massa quam,
            pellentesque sed ipsum eu, fermentum facilisis velit. Nam iaculis
            leo turpis, quis dapibus leo facilisis ac. Proin vestibulum ligula
            ac finibus pellentesque. Aenean ligula lectus, pellentesque a purus
            sit amet, mattis viverra mauris
          </div>
          <div>
            <img src={image} alt="img" />
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);
