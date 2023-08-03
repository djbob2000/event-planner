import styled from 'styled-components';

export const Container = styled.div`
  padding: 6px 12px;
  border-radius: 8px;
  background-color: var(--primary-background-color);
  width: fit-content;
  box-shadow: var(--shadow-primary);
  color: ${({ color }) => color ?? 'var(--accent)'};
`;
export const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;
