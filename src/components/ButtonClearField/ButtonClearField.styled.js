import styled from 'styled-components';
export const Button = styled.button`
  display: flex;
  position: absolute;
  top: 40px;
  right: 12px;
  color: ${props => (props.error ? 'var(--hight, #FF2B77)' : 'inherit')};
`;

export const Svg = styled.svg`
  width: 24px;
  height: 24px;
  color: inherit;
  transition: color var(--animation);

  &:hover {
    color: var(--accent);
  }
`;
