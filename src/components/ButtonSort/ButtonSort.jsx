import * as css from './ButtonSort.styled';
import sprite from '../../assets/images/sprite.svg';

export const ButtonSort = () => {
  return (
    <>
      <css.Button>
        <css.Span>Sort by</css.Span>
        <css.Svg>
          <use href={`${sprite}#filters-2`} />
        </css.Svg>
      </css.Button>
    </>
  );
};
