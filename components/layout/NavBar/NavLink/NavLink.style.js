import styled, { css } from 'styled-components';

export default styled.a`
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  height: 100%;
  flex: 1;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ active }) => active && activeStyles}
`;

const activeStyles = css`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-color: #4d4f58;
  border-style: solid;
  border-width: 1px 1px 0 1px;
  height: 102%;
`;
