import Link from 'next/link';
import StyledLink from './NavLink.style';
import { withRouter } from 'next/router';
const NavLink = ({ href, children, as, router: { asPath } }) => (
  <Link href={href} passHref as={as}>
    <StyledLink active={href === asPath || as === asPath}>
      {console.log(asPath, href)}
      {children}
    </StyledLink>
  </Link>
);

export default withRouter(NavLink);
