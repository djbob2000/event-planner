import styled from 'styled-components';
import { device } from '../../styles/deviceBreakpoints';

export const Wrapper = styled.div`
  position: relative;
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

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const WrapperDropdown = styled.div`
  min-width: 158px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 4px;

  top: 0;
  z-index: 99;
  background-color: var(--primary-background-color);
  border-radius: 8px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Li = styled.li`
  cursor: pointer;
  padding: 8px 24px;
  color: var(--divider, #aca7c3);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  &:not(:last-child) {
    border-bottom: 1px solid var(--divider, #aca7c3);
  }
  &:hover,
  &:active {
    color: var(--accent);
  }
`;
export const WrapTitle = styled.div`
  display: flex;
  gap: 4px;
  padding: 16px 21px;
  border-bottom: 1px solid var(--divider, #aca7c3);
  color: var(--accent);
`;
