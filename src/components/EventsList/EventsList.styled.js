import styled from 'styled-components';
import { device } from '../../styles/deviceBreakpoints';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  justify-items: center;
  gap: 24px;
  margin-top: 40px;
  @media ${device.tablet} {
    margin-top: 24px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.desktop} {
    margin-top: 40px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
