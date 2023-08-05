import { EventCard } from '../EventCard/EventCard';
import * as s from './EventsList.styled';

export const EventsList = ({ events }) => {
  return (
    <s.List>
      {events.map(event => (
        <li key={event.id}>
          <EventCard event={event} />
        </li>
      ))}
    </s.List>
  );
};
