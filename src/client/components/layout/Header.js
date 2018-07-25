import React from 'react';

const Header = ({}) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">FiveCircle</NavbarBrand>
      </Navbar>
    </div>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
