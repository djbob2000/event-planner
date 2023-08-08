import { useSelector, useDispatch } from 'react-redux';
import * as css from './Search.styled';
import { setFilterQuery } from '../../redux/filter/filter.slice';
import { selectTextFilter } from '../../redux/selectors';

export const Search = () => {
  const dispatch = useDispatch();
  const filterQuery = useSelector(selectTextFilter);

  const handleClearQuery = () => {
    dispatch(setFilterQuery(''));
  };

  return (
    <>
      <css.SearchContainer>
        <css.SearchIcon size="24" color="var(--accent)" />
        <css.SearchInput
          type="text"
          autoComplete="off"
          placeholder="Search by keywords"
          value={filterQuery}
          onChange={event => dispatch(setFilterQuery(event.target.value))}
        />
        {filterQuery ? (
          <css.CrossSmallIcon
            onClick={handleClearQuery}
            size="24"
            color="var(--accent)"
          />
        ) : null}
      </css.SearchContainer>
    </>
  );
};
