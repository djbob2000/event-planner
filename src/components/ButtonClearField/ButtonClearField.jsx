import * as s from './ButtonClearField.styled';
import sprite from '../../assets/images/sprite.svg';

export const ButtonClearField = () => {
  return (
    <s.Button type="button">
      <s.Svg>
        <use href={`${sprite}#icon-clear`} />
      </s.Svg>
    </s.Button>
  );
};
