import React from 'react';
import {Navbar, NavbarBrand} from "reactstrap"

const Header = () => {
  return (
    <header className="app-header">
      <Navbar color="light" light expand="md">
        <div className="container">
          <NavbarBrand href="/">FiveCircle</NavbarBrand>
        </div>
      </Navbar>
    </header>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
