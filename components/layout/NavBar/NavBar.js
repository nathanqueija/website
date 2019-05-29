import Nav from './NavBar.style';
import NavLink from './NavLink';

const menu = [
  { path: '/', label: 'About me' },
  { path: '/about-this', label: 'About this site' }
];
const NavBar = () => (
  <Nav>
    <NavLink href='/b'>A</NavLink>
    {menu.map(({ path, label }) => (
      <NavLink key={path} href={path}>
        {label}
      </NavLink>
    ))}
    <NavLink href='/c'>B</NavLink>
  </Nav>
);

export default NavBar;
