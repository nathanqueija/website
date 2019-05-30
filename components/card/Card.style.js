import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

export default styled(animated.div)`
  border: 2px solid black;
  width: 320px;
  height: 40ch;
  border-radius: 5px;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  border: 1px solid #6c6c70;

  :hover {
    box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.6);
  }

  ${({ img }) => img && imgStyles}
`;

const imgStyles = css`
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center center;
`;
