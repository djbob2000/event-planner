import * as css from './ButtonCategory.styled';

export const ButtonCategory = () => {
  return (
    <>
      <css.Button>
        <css.Span>Category</css.Span>
        <css.Filters3Icon size="24" color="var(--text)" />
      </css.Button>
    </>
  );
};
