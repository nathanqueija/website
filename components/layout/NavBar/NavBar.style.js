import styled from 'styled-components';

export default styled.nav`
  background: ${({ theme }) => theme.colors.backgroundDark};
  height: 45px;
  display: grid;
  grid-template-columns: auto 1fr 1fr auto;
`;
