import * as css from './MyEventsPage.styled';
import { ButtonAddEvent } from '../../components/ButtonAddEvent/ButtonAddEvent';
import { ButtonCategory } from '../../components/ButtonCategory/ButtonCategory';
import { ButtonSort } from '../../components/ButtonSort/ButtonSort';
import { EventList } from '../../components/EventList/EventList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/events/events.operations';
import { resetEvents } from '../../redux/events/events.slice';
import { selectEvents } from '../../redux/selectors';

export const MyEventsPage = () => {
  const selectedEvents = useSelector(selectEvents);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetEvents());
    dispatch(fetchEvents());
  }, [dispatch]);

  console.log(
    '🚀 ~ file: MyEventsPage.jsx:14 ~ MyEventsPage ~ selectedEvents:',
    selectedEvents
  );
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
        <EventList events={selectedEvents} />
      </css.MyEventsPageContainer>
    </>
  );
};
