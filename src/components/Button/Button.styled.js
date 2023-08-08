import styled from 'styled-components';
import { BTN_SIZE } from '../../constants/btnSizes';
import { device } from '../../styles/deviceBreakpoints';

const paddingSize = ({ size }) => {
  switch (size) {
    case BTN_SIZE.small:
      return '8px 16px';
    case BTN_SIZE.large:
      return '16px 12px';
    default:
      return '16px 12px';
  }
};
const borderRadiusSize = ({ size }) => {
  switch (size) {
    case BTN_SIZE.small:
      return '4px';
    case BTN_SIZE.large:
      return '8px';
    default:
      return '8px';
  }
};

export const ButtonPrimary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${paddingSize};
  border-radius: ${borderRadiusSize};
  width: 100%;
  color: var(--light);
  background-color: var(--accent);
  box-shadow: var(--shadow-primary);
  transition: background-color var(--animation);
  @media ${device.tablet} {
    max-width: 193px;
  }

  &:hover {
    background-color: var(--button-hover);
  }
`;

export const ButtonSecondary = styled.button`
  width: 100%;
  padding: 7px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-background-color);
  box-shadow: var(--shadow-primary);
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--accent);
  color: var(--accent);
  transition: color var(--animation), border-color var(--animation);

  @media ${device.tablet} {
    width: initial;
  }
  @media ${device.desktop} {
    width: initial;
  }

  &:hover {
    border-color: var(--button-hover);
    color: var(--button-hover);
  }
`;

export const SpanPrimary = styled.span`
  color: inherit;
  font-size: ${({ size }) => (size === BTN_SIZE.small ? '12px' : '16px')};
  font-weight: 500;
  line-height: ${({ size }) => (size === BTN_SIZE.small ? '1.33' : 'normal')};
`;

export const SpanSecondary = styled.span`
  color: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;
