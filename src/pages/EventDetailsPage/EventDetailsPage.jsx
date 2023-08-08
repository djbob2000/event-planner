import { ButtonBack } from '../../components/ButtonBack/ButtonBack';
import { BTN_SIZE } from '../../constants/btnSizes';
import defaultImg from '../../assets/images/default-img-card.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { selectEventsById } from '../../redux/selectors';
import * as s from './EventDetailsPage.styled';
import { Button } from '../../components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEvent } from '../../redux/events/events.operations';
import { convertDateFormat } from '../../utils/dateConverter';

const EventDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [event] = useSelector(selectEventsById(id));
  if (!event) {
    return <p>Event not found</p>;
  }

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

    navigate(`/`);
  };

  const handleEditEvent = async () => {
    navigate(`/event/${id}/edit`);
  };

  return (
    <>
      <s.Container>
        <ButtonBack aria-label="Button back" />
        <s.H1>EventDetailsPage</s.H1>
        <s.Wrap>
          <s.ImageWrap>
            <s.Image src={image || defaultImg} alt={title || 'event'} />
          </s.ImageWrap>
          <s.InnerWrap>
            <s.Description>{description}</s.Description>
            <s.BadgesWrap>
              <s.Badge>{category}</s.Badge>
              <s.BadgeColor $priorityColor={priority}>{priority}</s.BadgeColor>
              <s.Badge>{location}</s.Badge>
              <s.Badge
                style={{ fontWeight: '400', textTransform: 'lowercase' }}
              >
                {convertDateFormat(date)}
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
