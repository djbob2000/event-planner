import * as css from './MyEventsPage.styled';
import { ButtonAddEvent } from '../../components/ButtonAddEvent/ButtonAddEvent';
import { ButtonCategory } from '../../components/ButtonCategory/ButtonCategory';
import { ButtonSort } from '../../components/ButtonSort/ButtonSort';

export const MyEventsPage = () => {
  return (
    <>
      <css.MyEventsPageContainer>
        <css.Wrapper>
          <css.H1>My events</css.H1>
          <css.ButtonWrapper>
            <ButtonCategory />
            <ButtonSort />
            <ButtonAddEvent />
          </css.ButtonWrapper>
        </css.Wrapper>
      </css.MyEventsPageContainer>
    </>
  );
};
