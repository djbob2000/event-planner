import PropTypes from 'prop-types';

import * as s from './Button.styled';
import { BTN_SIZE } from '../../constants/btnSizes';

export const Button = ({
  type = 'button',
  title = 'OK',
  size = BTN_SIZE.large,
  secondary = false,
  onClick,
}) => {
  return (
    <>
      {secondary ? (
        <s.ButtonSecondary type={type} onClick={onClick}>
          <s.SpanSecondary>{title}</s.SpanSecondary>
        </s.ButtonSecondary>
      ) : (
        <s.ButtonPrimary type={type} size={size} onClick={onClick}>
          <s.SpanPrimary size={size}>{title}</s.SpanPrimary>
        </s.ButtonPrimary>
      )}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
};
