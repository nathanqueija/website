import styled from 'styled-components';

export default styled.nav`
  background: ${({ theme }) => theme.colors.quaternary};
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #4d4f58;

  > :first-child {
    border-radius: 5px 0 0 0;
  }

  > :last-child {
    border-radius: 0 5px 0 0;
  }
`;
