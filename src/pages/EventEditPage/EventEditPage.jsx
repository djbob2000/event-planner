import { ButtonBack } from '../../components/ButtonBack/ButtonBack';
import * as s from './EventEditPage.styled';
import { CreateEventForm } from '../../components/CreateEventForm/CreateEventForm';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectEventsById } from '../../redux/selectors';

const EventEditPage = () => {
  const { id } = useParams();
  const [event] = useSelector(selectEventsById(id));

  return (
    <>
      <ButtonBack aria-label="Button back" />
      <s.H1>Edit event</s.H1>
      <CreateEventForm event={event} />
    </>
  );
};

export default EventEditPage;
