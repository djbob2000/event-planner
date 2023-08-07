import styled from 'styled-components';
import { ChevronDown } from 'react-swm-icon-pack';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LabelStyled = styled.label`
  color: var(--color-accent);
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 48px 16px 12px;
  background-color: transparent;
  color: var(--text);
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.$error ? 'var(--hight, #FF2B77)' : 'var(--divider, #aca7c3)'};
  outline: none;
  transition: border-color var(--animation);
  cursor: pointer;

  &:hover {
    border-color: var(--accent);
  }

  &::placeholder {
    color: ${props => (props.$active ? 'var(--accent)' : 'var(--text)')};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const Ul = styled.ul`
  position: absolute;
  left: 0;
  top: 74px;
  width: 100%;
  padding: 0 16px;
  margin-bottom: 40px;
  border-radius: 8px;
  background: var(--primary-background-color);
  box-shadow: var(--shadow-primary);
  z-index: 99;
`;

export const Li = styled.li`
  padding: 16px 0px;
  color: var(--text);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-transform: capitalize;
  border-bottom: 1px solid var(--divider);
  cursor: pointer;
  transition: color var(--animation);

  &:hover {
    color: var(--accent);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const StyledChevronDown = styled(ChevronDown)`
  position: absolute;
  right: 12px;
  top: 16px;
  transition: transform 250ms;
`;
