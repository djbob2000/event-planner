import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  transition: color var(--animation);

  &:hover {
    color: var(--button-hover);
  }
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Span = styled.span`
  color: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
`;
