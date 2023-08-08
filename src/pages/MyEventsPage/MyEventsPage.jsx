import * as css from './MyEventsPage.styled';
import { ButtonAddEvent } from '../../components/ButtonAddEvent/ButtonAddEvent';
import { ButtonCategory } from '../../components/ButtonCategory/ButtonCategory';
import { ButtonSort } from '../../components/ButtonSort/ButtonSort';
import { EventsList } from '../../components/EventsList/EventsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/events/events.operations';
import { resetEvents } from '../../redux/events/events.slice';
import { selectFilteredAndSortedEvents } from '../../redux/selectors';

const MyEventsPage = () => {
  const dispatch = useDispatch();
  const filteredEvents = useSelector(selectFilteredAndSortedEvents);

  useEffect(() => {
    dispatch(resetEvents());
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <>
      <css.Wrapper>
        <css.H1>My events</css.H1>
        <css.ButtonWrapper>
          <ButtonCategory />
          <ButtonSort />
          <ButtonAddEvent />
        </css.ButtonWrapper>
      </css.Wrapper>

      {filteredEvents && <EventsList events={filteredEvents} />}
    </>
  );
};

export default MyEventsPage;
