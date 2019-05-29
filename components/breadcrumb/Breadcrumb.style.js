import styled from 'styled-components';

export default styled.p`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

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
