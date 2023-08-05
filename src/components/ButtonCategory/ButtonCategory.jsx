import * as css from './ButtonCategory.styled';
import sprite from '../../assets/images/sprite.svg';
import { CATEGORIES } from '../../constants/categories';
import { useState } from 'react';

export const ButtonCategory = ({ handleFilterCategory }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <css.Wrapper>
        <css.Button onClick={handleClick}>
          <css.Span>Category</css.Span>
          <css.Svg>
            <use href={`${sprite}#filters-3`} />
          </css.Svg>
        </css.Button>
        {showDropdown && (
          <css.WrapperDropdown>
            <css.WrapTitle>
              <css.Svg>
                <use href={`${sprite}#filters-3`} />
              </css.Svg>
              <css.Span>Category</css.Span>
            </css.WrapTitle>
            <css.Ul>
              {Object.keys(CATEGORIES).map(categoryKey => (
                <css.Li
                  key={categoryKey}
                  onClick={() => {
                    setShowDropdown(false);
                    handleFilterCategory(CATEGORIES[categoryKey]);
                  }}
                >
                  {CATEGORIES[categoryKey]}
                </css.Li>
              ))}
            </css.Ul>
          </css.WrapperDropdown>
        )}
      </css.Wrapper>
    </>
  );
};
