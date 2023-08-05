import * as s from './Chip.styled';

export const Chip = ({ text, color = 'var(--accent)' }) => {
  return (
    <s.Container color={color}>
      <s.Span>{text}</s.Span>
    </s.Container>
  );
};
