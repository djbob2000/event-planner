import * as s from './EventCard.styled';
import defaultImg from '../../assets/images/default-img-card.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const [isMouseOver, setIsMouseOver] = useState(false);

  const {
    id,
    title,
    description,
    date,
    time,
    location,
    category,
    image,
    priority,
  } = event;

  return (
    <s.EventCardContainer
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
    >
      <s.ChipWrapper>
        <s.Chip>{category} </s.Chip>
        <s.Chip $priorityColor={priority}>{priority}</s.Chip>
      </s.ChipWrapper>
      <s.EventImageContainer>
        <s.EventImage src={image ?? defaultImg} alt={title ?? 'event'} />
      </s.EventImageContainer>
      <s.EventDescriptionContainer $isMouseOver={isMouseOver}>
        <s.DateTimeContainer>
          <s.DateTimeText>
            {date} at {time}
          </s.DateTimeText>
          <s.DateTimeText>{location}</s.DateTimeText>
        </s.DateTimeContainer>
        <s.EventDetailsWrapper>
          <s.EventTitle>{title}</s.EventTitle>
          <s.EventDescription>{description}</s.EventDescription>
          <s.MoreInfoButtonContainer>
            <s.MoreInfoButton
              type="button"
              title="More info"
              onClick={() => {
                navigate(`event/${id}`);
              }}
            >
              More info
            </s.MoreInfoButton>
          </s.MoreInfoButtonContainer>
        </s.EventDetailsWrapper>
      </s.EventDescriptionContainer>
    </s.EventCardContainer>
  );
};
