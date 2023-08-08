import * as css from './ButtonSort.styled';
import sprite from '../../assets/images/sprite.svg';
import { SORT_OPTIONS } from '../../constants/sortOptions';
import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortFilter } from '../../redux/filter/filter.slice';
import { useClickAway, useKeyPressEvent } from 'react-use';
import { selectSortFilter } from '../../redux/selectors';

export const ButtonSort = () => {
  const dispatch = useDispatch();
  const currSort = useSelector(selectSortFilter);

  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const ClickAreaRef = useRef();
  useClickAway(ClickAreaRef, () => {
    setIsShowDropdown(false);
  });

  useKeyPressEvent('Escape', () => {
    setIsShowDropdown(false);
  });

  const handleSetSort = sort => {
    dispatch(setSortFilter(sort));
  };

  return (
    <>
      <css.Wrapper ref={ClickAreaRef}>
        <css.Button
          $isActive={!!currSort}
          onClick={() => {
            setIsShowDropdown(!isShowDropdown);
          }}
        >
          <css.Span>
            {currSort ? `Sort ${SORT_OPTIONS[currSort]}` : 'Sort by'}
          </css.Span>
          {currSort ? (
            <css.Svg
              style={{
                transform:
                  currSort.split('_')[1] === 'desc' && 'rotate(180deg)',
              }}
            >
              <use href={`${sprite}#icon-arrow-up`} />
            </css.Svg>
          ) : (
            <css.Svg>
              <use href={`${sprite}#filters-2`} />
            </css.Svg>
          )}
        </css.Button>

        {isShowDropdown && (
          <css.WrapperDropdown>
            <css.WrapTitle>
              <css.Span
                onClick={() => {
                  setIsShowDropdown(false);
                }}
                style={{ display: isShowDropdown && 'initial' }}
              >
                {currSort ? `Sort ${SORT_OPTIONS[currSort]}` : 'Sort by'}
              </css.Span>
              {currSort ? (
                <css.Svg>
                  <use href={`${sprite}#icon-arrow-up`} />
                </css.Svg>
              ) : (
                <css.Svg>
                  <use href={`${sprite}#filters-2`} />
                </css.Svg>
              )}
            </css.WrapTitle>
            <css.Ul>
              {Object.keys(SORT_OPTIONS).map(sortKey => (
                <css.Li
                  key={sortKey}
                  onClick={() => {
                    setIsShowDropdown(false);
                    handleSetSort(sortKey);
                  }}
                  $isActive={sortKey === currSort}
                >
                  {SORT_OPTIONS[sortKey]}
                  <css.Svg
                    style={{
                      transform:
                        sortKey.split('_')[1] === 'desc' && 'rotate(180deg)',
                    }}
                  >
                    <use href={`${sprite}#icon-arrow-up`} />
                  </css.Svg>
                </css.Li>
              ))}
            </css.Ul>
          </css.WrapperDropdown>
        )}
      </css.Wrapper>
    </>
  );
};
