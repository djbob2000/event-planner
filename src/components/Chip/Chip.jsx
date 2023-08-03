import * as s from './Mark.styled';

export const Mark = ({ text, color = 'var(--accent)' }) => {
  return (
    <s.Container color={color}>
      <s.Span>{text}</s.Span>
    </s.Container>
  );
};
