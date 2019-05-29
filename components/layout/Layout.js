import React from 'react';
import Wrapper from './Layout.style';
import NavBar from './NavBar';
import { useSpring } from 'react-spring';
import { easeExpOut } from 'd3-ease';

const Layout = ({ children }) => {
  const props = useSpring({
    config: {
      duration: 500,
      easing: easeExpOut
    },
    delay: 1000,
    transform: 'scale(1)',
    from: { transform: 'scale(0)' }
  });
  return (
    <Wrapper style={props}>
      <NavBar />
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
