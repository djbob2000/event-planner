import * as css from './MyEventsPage.styled';
import { ButtonAddEvent } from '../../components/ButtonAddEvent/ButtonAddEvent';
import { ButtonCategory } from '../../components/ButtonCategory/ButtonCategory';
import { ButtonSort } from '../../components/ButtonSort/ButtonSort';
import { EventsList } from '../../components/EventsList/EventsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../redux/events/events.operations';
import { resetEvents } from '../../redux/events/events.slice';
import { selectEvents } from '../../redux/selectors';

export const MyEventsPage = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(selectEvents);
  const [filteredEvents, setFilteredEvents] = useState(allEvents);

  useEffect(() => {
    dispatch(resetEvents());
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleFilterCategory = selectedCategory => {
    const filteredData = allEvents.filter(event =>
      event.category.toLowerCase().includes(selectedCategory.toLowerCase())
    );
    setFilteredEvents(filteredData);
  };

  // setFilteredEvents(filteredData.sort((a, b) => a.name.localeCompare(b.name)));

  return (
    <>
      <css.MyEventsPageContainer>
        <css.Wrapper>
          <css.H1>My events</css.H1>
          <css.ButtonWrapper>
            <ButtonCategory handleFilterCategory={handleFilterCategory} />
            <ButtonSort />
            <ButtonAddEvent />
          </css.ButtonWrapper>
        </css.Wrapper>
        {filteredEvents && <EventsList events={filteredEvents} />}
      </css.MyEventsPageContainer>
    </>
  );
};
