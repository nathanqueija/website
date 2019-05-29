import Nav from './NavBar.style';
import NavLink from './NavLink';
import { useSpring } from 'react-spring';

const menu = [
  { path: '/about-me', label: 'about-me', as: '/' },
  { path: '/about-this', label: 'about-this-site' }
];

const NavBar = () => {
  return (
    <Nav>
      <NavLink href='/b'>A</NavLink>
      {menu.map(({ path, label, as }) => (
        <NavLink key={path} href={path} as={as}>
          ~/{label}
        </NavLink>
      ))}
      <NavLink href='/c'>B</NavLink>
    </Nav>
  );
};

export default NavBar;
