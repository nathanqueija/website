import styled from 'styled-components';

export const Profile = styled.div`
  margin: 0 20px 5px 0;
  float: left;
`;

export const Text = styled.div`
  p {
    display: inline;
  }
`;

export const Me = styled.div`
  margin: 0 40px;
`;

export const Social = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
`;

export const Link = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  > :first-child {
    margin-right: 10px;
  }
`;
