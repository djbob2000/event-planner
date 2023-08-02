import styled from 'styled-components';
import { Container } from '../Container/Container.styled';
import { device } from '../../styles/deviceBreakpoints';

export const HeaderContainer = styled(Container)`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* max-width: 767px; */
  border-bottom: 1px solid #7b61ff;
  background: #fefcff;

  @media ${device.tablet} {
    /* max-width: 1279px; */
    padding-top: 26px;
    padding-bottom: 18px;
  }

  @media ${device.desktop} {
    /* max-width: 1440px; */
    padding: 22px 80px;
  }
`;
