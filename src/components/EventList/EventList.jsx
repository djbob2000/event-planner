import { EventCard } from '../EventCard/EventCard';
import * as s from './EventList.styled';

export const EventList = ({ events }) => {
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
