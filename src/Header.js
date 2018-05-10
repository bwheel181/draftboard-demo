import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  // TODO: Set config file for navbar height
  render() {
    return (
      <React.Fragment>
        <Navbar color="dark" style={{ height: 60 }} dark>
          <NavbarToggler onClick={this.toggleNavbar} />
          <NavbarBrand href="/" className="ml-auto mr-auto">
            DRAFTBOARD
          </NavbarBrand>
          <Collapse isOpen={!this.state.collapsed} navbar />
        </Navbar>
        <Container
          className="d-flex justify-content-center"
          style={{ height: window.innerHeight - 60 }}
        >
          {this.props.children}
        </Container>
      </React.Fragment>
    );
  }
}
