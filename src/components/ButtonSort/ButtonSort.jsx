import * as css from './ButtonSort.styled';

export const ButtonSort = () => {
  return (
    <>
      <css.Button>
        <css.Span>Sort by</css.Span>
        <css.Filters2Icon size="24" color="var(--text)" />
      </css.Button>
    </>
  );
};
