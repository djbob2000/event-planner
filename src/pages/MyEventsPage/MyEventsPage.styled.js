import styled from 'styled-components';
// import { Container } from '../../components/Container/Container.styled';
import { device } from '../../styles/deviceBreakpoints';

export const H1 = styled.h1`
  color: var(--text);
  font-size: 0px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media ${device.tablet} {
    font-size: 32px;
    flex-basis: 100%;
    order: 2;
  }
  @media ${device.desktop} {
    order: initial;
    flex-basis: initial;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  @media ${device.desktop} {
    justify-content: space-between;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
