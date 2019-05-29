import styled from 'styled-components';

export default styled.nav`
  background: ${({ theme }) => theme.colors.quaternary};
  height: 60px;
  display: grid;
  grid-template-columns: auto 1fr 1fr auto;
`;
