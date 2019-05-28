import styled from 'styled-components';

export default styled.nav`
  background: ${({ theme }) => theme.colors.secondary};
  height: 60px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.quaternary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;
