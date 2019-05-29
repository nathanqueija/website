import styled, { css } from 'styled-components';

export default styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textLight};
  height: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #4d4f58;
  ${({ active }) => active && activeStyles}
`;

const activeStyles = css`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border-color: #4d4f58;
  border-style: solid;
  border-width: 1px 1px 0 1px;
`;
