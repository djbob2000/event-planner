import styled from 'styled-components';
import { Plus } from 'react-swm-icon-pack';
import { device } from '../../styles/deviceBreakpoints';
import { Link } from 'react-router-dom';

export const PlusIcon = styled(Plus)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const StyledLink = styled(Link)`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 8px;

  color: var(--light);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: var(--accent);
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  &:hover {
    background: var(--button-hover);
  }

  @media ${device.tablet} {
    padding: 16px 12px;
  }
`;

export const Span = styled.span`
  display: none;
  @media ${device.tablet} {
    display: initial;
  }
`;
