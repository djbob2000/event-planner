import styled from 'styled-components';

const getPriorityColor = priority => {
  switch (priority) {
    case 'high':
      return 'var(--high)';
    case 'medium':
      return 'var(--medium)';
    case 'low':
      return 'var(--low)';
    default:
      return 'var(--accent)';
  }
};

export const EventCardContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  min-width: 272px;
  /* max-width: 332px; */
  height: 480px;
  box-shadow: var(--shadow-primary);
`;

export const ChipWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;

  display: flex;
  gap: 12px;
`;
export const Chip = styled.span`
  display: flex;
  padding: 6px 12px;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  text-transform: capitalize;
  color: ${({ $priorityColor }) => getPriorityColor($priorityColor)};
  background-color: var(--primary-background-color);
`;

export const EventImageContainer = styled.div`
  width: 100%;
`;

export const EventImage = styled.img`
  width: 100%;
  min-height: 388px;
  object-fit: cover;
`;

export const EventDescriptionContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: -56px;
  width: 100%;

  transform: ${({ $isMouseOver }) =>
    $isMouseOver ? 'translateY(-56px)' : 'translateY(0)'};

  transition: transform 300ms ease-out;
`;

export const EventDetailsWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--primary-background-color);
`;

export const DateTimeContainer = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  background-color: var(--primary-background-color-80);
`;

export const DateTimeText = styled.p`
  color: var(--accent);
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;

export const EventTitle = styled.h2`
  color: var(--text-color-title);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const EventDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const MoreInfoButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const MoreInfoButton = styled.div`
  border-radius: 8px;
  background: var(--accent);
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: var(--light, #fff);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42857;
`;
