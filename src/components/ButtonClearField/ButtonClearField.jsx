import * as s from './ButtonClearField.styled';
import sprite from '../../assets/images/sprite.svg';

export const ButtonClearField = ({ onClick, error }) => {
  return (
    <s.Button type="button" error={error} onClick={onClick}>
      <s.Svg>
        <use href={`${sprite}#icon-clear`} />
      </s.Svg>
    </s.Button>
  );
};
