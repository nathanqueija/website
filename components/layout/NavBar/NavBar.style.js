import styled from 'styled-components';

export default styled.nav`
  background: ${({ theme }) => theme.colors.secondary};
  height: 60px;
  border-bottom: 5px solid ${({ theme }) => theme.colors.quaternary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;

  a {
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.quaternary};
    margin-right: 10px;
  }
`;
