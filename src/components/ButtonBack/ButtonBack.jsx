import sprite from '../../assets/images/sprite.svg';
import * as css from './ButtonBack.styled';

export const ButtonBack = () => {
  return (
    <css.LinkStyled to={'/'}>
      <css.Svg>
        <use href={`${sprite}#icon-arrow-left`} />
      </css.Svg>
      <css.Span>Back</css.Span>
    </css.LinkStyled>
  );
};
