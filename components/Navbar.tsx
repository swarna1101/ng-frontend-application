import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  width: 100%;
  background: black;
  height: 10vh;
`;

const NavWrapper = styled.nav`
  padding: 5px 29px;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <img src="/logo.svg" alt="logo" width={234} height={80} />
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
