import * as s from './Button.styled';
import { BTN_SIZE } from '../../constants/btnSizes';

export const Button = ({
  title = 'OK',
  size = BTN_SIZE.large,
  secondary = false,
  onClick,
}) => {
  return (
    <>
      {secondary ? (
        <s.ButtonSecondary type="button" onClick={onClick}>
          <s.SpanSecondary>{title}</s.SpanSecondary>
        </s.ButtonSecondary>
      ) : (
        <s.ButtonPrimary type="button" size={size} onClick={onClick}>
          <s.SpanPrimary size={size}>{title}</s.SpanPrimary>
        </s.ButtonPrimary>
      )}
    </>
  );
};
