import { useState } from 'react';
import styled, { css } from 'styled-components';

const StyledSkill = styled.div`
  ${({ nodes }) => nodes > 0 && branchStyles}

  > div {
    margin-top: 10px;
    padding-left: 20px;
    transition: max-height 0.5s ease-out;
    overflow: hidden;
    max-height: ${({ open }) => (open ? '500px' : 0)};
  }
`;

const branchStyles = css`
  margin-bottom: 5px;
  cursor: pointer;
  > span {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }
  :before {
    content: '${({ open }) => (!open ? '+' : '-')}';
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.tertiary};
    padding: 3px;
    margin-right: 5px;
    display: inline;
  }
`;

const Skill = ({ name, level, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <StyledSkill
      level={level}
      nodes={children ? children.length : 0}
      open={open}
      onClick={e => {
        e.stopPropagation();
        setOpen(!open);
      }}
    >
      <span>{name}</span>
      {children && <div>{children}</div>}
    </StyledSkill>
  );
};

export default Skill;
