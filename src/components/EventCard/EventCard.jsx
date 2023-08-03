// import { BUTTON_SIZES } from '../../constants/ButtonSizes';
// import { Button } from '../Button/Button';
import * as s from './EventCard.styled';

import defaultImg from '../../assets/images/default-img-card.svg';
import { useState } from 'react';

export const EventCard = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <s.EventCardContainer
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseLeave={() => {
        setIsMouseOver(false);
      }}
    >
      <s.EventImageContainer>
        <s.EventImage src={defaultImg} alt="Event" />
      </s.EventImageContainer>
      <s.EventDescriptionContainer $isMouseOver={isMouseOver}>
        <s.DateTimeContainer>
          <s.DateTimeText>12.07 at 12:00</s.DateTimeText>
          <s.DateTimeText>Kyiv</s.DateTimeText>
        </s.DateTimeContainer>
        <s.EventDetailsWrapper>
          <s.EventTitle>Title</s.EventTitle>
          <s.EventDescription>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
            ducimus rem nostrum eligendi ipsam tempora fugiat culpa repellat
            saepe, quaerat delectus est mollitia beatae aut! Ipsum doloribus
            necessitatibus maxime similique.
          </s.EventDescription>
          <s.MoreInfoButtonContainer>
            <s.MoreInfoButton type="button" title="More info">
              More info
            </s.MoreInfoButton>
          </s.MoreInfoButtonContainer>
        </s.EventDetailsWrapper>
      </s.EventDescriptionContainer>
    </s.EventCardContainer>
  );
};
