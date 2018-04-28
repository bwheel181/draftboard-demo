import React from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

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
  render() {
    return (
      <React.Fragment>
        <Navbar color="dark" dark>
          <NavbarToggler onClick={this.toggleNavbar} />
          <NavbarBrand href="/" className="ml-auto mr-auto">
            DRAFTBOARD
          </NavbarBrand>
          <Collapse isOpen={!this.state.collapsed} navbar />
        </Navbar>
      </React.Fragment>
    );
  }
}
