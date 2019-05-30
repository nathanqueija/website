import styled from 'styled-components';

export default styled.p`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 3;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  margin: 0;
  padding-top: 10px;
  left: 0;
  top: 45px;

  svg {
    width: 15px;
    height: 15px;
    margin-right: 2px;
    margin: 0 2px;
  }
`;

export const Span = styled.span`
  color: ${({ theme, color }) => theme.colors[color]};
  display: flex;
  align-items: center;
  margin: 0 5px;
`;
