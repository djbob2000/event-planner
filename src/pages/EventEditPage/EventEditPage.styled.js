import styled from 'styled-components';
import { device } from '../../styles/deviceBreakpoints';

export const H1 = styled.h1`
  margin: 24px 0px;
  color: var(--text);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media ${device.tablet} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 32px;
    margin-top: 17px;
    margin-bottom: 25px;
  }
`;
