import { withRouter } from 'next/router';
import { IoIosGitBranch } from 'react-icons/io';
import { TiFolderOpen } from 'react-icons/ti';
import Wrapper, { Span } from './Breadcrumb.style';

import packageJson from '../../package.json';

const Breadcrumb = ({ router: { route } }) => (
  <Wrapper>
    <Span color='tertiary'>➜</Span>
    <Span color='primary'>
      <TiFolderOpen />
      nathanqueija.tech{route}
    </Span>
    on
    <Span color='secondary'>
      <IoIosGitBranch />
      master
    </Span>{' '}
    is
    <Span color='quaternary'>📦v{packageJson.version}</Span>
  </Wrapper>
);

export default withRouter(Breadcrumb);
