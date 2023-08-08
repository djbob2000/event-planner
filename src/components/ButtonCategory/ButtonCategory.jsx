import * as css from './ButtonCategory.styled';
import sprite from '../../assets/images/sprite.svg';
import { CATEGORIES } from '../../constants/categories';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter } from '../../redux/filter/filter.slice';
import { useClickAway, useKeyPressEvent } from 'react-use';
import { selectCategoryFilter } from '../../redux/selectors';

export const ButtonCategory = () => {
  const dispatch = useDispatch();
  const currCategory = useSelector(selectCategoryFilter);

  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const ClickAreaRef = useRef();
  useClickAway(ClickAreaRef, () => {
    setIsShowDropdown(false);
  });

  useKeyPressEvent('Escape', () => {
    setIsShowDropdown(false);
  });

  const handleSetCategory = cat => {
    dispatch(setCategoryFilter(cat));
  };

  return (
    <>
      <css.Wrapper ref={ClickAreaRef}>
        <css.Button
          onClick={() => {
            setIsShowDropdown(!isShowDropdown);
          }}
        >
          <css.Span>Category</css.Span>
          <css.Svg>
            <use href={`${sprite}#filters-3`} />
          </css.Svg>
        </css.Button>
        {isShowDropdown && (
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
                    setIsShowDropdown(false);
                    handleSetCategory(CATEGORIES[categoryKey]);
                  }}
                  isActive={CATEGORIES[categoryKey] === currCategory}
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
