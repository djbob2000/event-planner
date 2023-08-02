import { useState } from 'react';
import * as css from './Search.styled';

export const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearchChange = e => {
    console.log('handleSearchChange');
    setQuery(e.target.value);
  };

  const handleClearQuery = () => {
    setQuery('');
  };

  return (
    <>
      <css.SearchContainer>
        <css.SearchIcon size="24" color="var(--accent)" />
        <css.SearchInput
          type="text"
          placeholder="Search by keywords"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        {query ? (
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
