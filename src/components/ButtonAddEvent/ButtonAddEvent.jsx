import * as css from './ButtonAddEvent.styled';

export const ButtonAddEvent = () => {
  return (
    <>
      <css.Button>
        <css.PlusIcon size="24" color="var(--light)" />
        <css.Span>Add new event</css.Span>
      </css.Button>
    </>
  );
};
