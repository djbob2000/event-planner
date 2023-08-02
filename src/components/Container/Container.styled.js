import styled from 'styled-components';
import { device, size } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
  margin: 0 auto;

  @media ${device.mobile} {
    max-width: ${size.tablet};
    padding: 0 24px;
  }

  @media ${device.tablet} {
    max-width: ${size.desktop};
    padding: 0 40px;
  }

  @media ${device.desktop} {
    max-width: ${size.desktopLarge};
    padding: 0 80px;
  }
`;
