import Link from 'next/link';
import StyledLink from './NavLink.style';
import { withRouter } from 'next/router';
const NavLink = ({ href, children, router: { asPath } }) => (
  <Link href={href} passHref>
    <StyledLink active={href === asPath}>{children}</StyledLink>
  </Link>
);

export default withRouter(NavLink);
