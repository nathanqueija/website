import styled from 'styled-components';
import { animated } from 'react-spring';

export default styled(animated.div)`
  overflow: hidden;
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border: 1px solid #6c6c70;
`;
