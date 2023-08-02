import styled from 'styled-components';
import { Filters3 } from 'react-swm-icon-pack';
import { device } from '../../styles/deviceBreakpoints';

export const Filters3Icon = styled(Filters3)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  stroke: red;
`;

export const Button = styled.button`
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 8px;

  color: var(--text);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: var(--light);
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  &:hover {
    color: var(--button-hover);
  }
`;

export const Span = styled.span`
  display: none;
  @media ${device.tablet} {
    display: initial;
  }
`;
