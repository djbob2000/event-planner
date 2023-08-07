import { ButtonBack } from '../../components/ButtonBack/ButtonBack';
import { BTN_SIZE } from '../../constants/btnSizes';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { selectEventsById } from '../../redux/selectors';
import * as s from './EventDetailsPage.styled';
import { Button } from '../../components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEvent } from '../../redux/events/events.operations';

const EventDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  // const id = 4;
  const [event] = useSelector(selectEventsById(id));

  const {
    title,
    description,
    date,
    time,
    location,
    category,
    image,
    priority,
  } = event;

  const handleDeleteEvent = async () => {
    console.log('Delete event');
    await dispatch(deleteEvent(id));
    navigate('/home');
  };

  const handleEditEvent = async () => {
    console.log('handleEditEvent');
    navigate('/event/${id}/edit');
  };

  return (
    <>
      <s.Container>
        <ButtonBack aria-label="Button back" />
        <s.H1>EventDetailsPage</s.H1>
        <s.Wrap>
          <s.ImageWrap>
            <s.Image src={image} alt={title} />
          </s.ImageWrap>
          <s.InnerWrap>
            <s.Description>{description}</s.Description>
            <s.BadgesWrap>
              <s.Badge>{category}</s.Badge>
              <s.Badge style={{ color: 'var(--hight, #FF2B77' }}>
                {priority}
              </s.Badge>
              <s.Badge>{location}</s.Badge>
              <s.Badge style={{ fontWeight: '400' }}>
                {date}
                {' at '}
                {time}
              </s.Badge>
            </s.BadgesWrap>

            <s.BtnWrap>
              <Button
                type="button"
                secondary="true"
                title="Edit"
                onClick={handleEditEvent}
              ></Button>
              <Button
                type="button"
                title="Delete event"
                size={BTN_SIZE.small}
                onClick={handleDeleteEvent}
              ></Button>
            </s.BtnWrap>
          </s.InnerWrap>
        </s.Wrap>
      </s.Container>
    </>
  );
};

export default EventDetailsPage;
