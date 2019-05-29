import Nav from './NavBar.style';
import NavLink from './NavLink';

const menu = [
  { path: '/', label: 'About me' },
  { path: '/about-this', label: 'About this site' }
];
const NavBar = () => (
  <Nav>
    {menu.map(({ path, label }) => (
      <NavLink key={path} href={path}>
        {label}
      </NavLink>
    ))}
  </Nav>
);

export default NavBar;
