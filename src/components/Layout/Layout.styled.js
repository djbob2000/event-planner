import styled from 'styled-components';
import { Container } from '../../components/Container/Container.styled';
import backgroundImage from '../../assets/images/background.svg';
import { device } from '../../styles/deviceBreakpoints';

export const Main = styled(Container)`
  height: 100vh;
  width: 100%;
  background-color: var(--primary-background-color);
  background-repeat: no-repeat;
  background-image: url(${backgroundImage});
  background-position-x: -417px;
  padding-top: 40px;
  padding-bottom: 40px;

  @media ${device.tablet} {
    /* background-size: 100% 100%; */
  }

  @media ${device.desktop} {
    padding-top: 60px;
    padding-bottom: 77px;
  }
`;
