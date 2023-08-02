import styled from 'styled-components';
import { Filters2 } from 'react-swm-icon-pack';
import { device } from '../../styles/deviceBreakpoints';

export const Filters2Icon = styled(Filters2)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
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

  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const Span = styled.span`
  display: none;
  @media ${device.tablet} {
    display: initial;
  }
`;
