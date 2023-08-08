import styled from 'styled-components';
import { device } from '../../styles/deviceBreakpoints';
import { Link } from 'react-router-dom';

const getPriorityColor = priority => {
  switch (priority) {
    case 'High':
      return 'var(--high)';
    case 'Medium':
      return 'var(--medium)';
    case 'Low':
      return 'var(--low)';
    default:
      return 'var(--accent)';
  }
};

export const H1 = styled.h1`
  color: var(--text);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media ${device.tablet} {
    max-width: 688px;
  }
  @media ${device.desktop} {
    max-width: 628px;
  }
`;
export const Wrap = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  /* background: var(--primary-background-color); */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  @media ${device.tablet} {
    max-width: 688px;
  }
  @media ${device.desktop} {
    max-width: 628px;
  }
`;

export const ImageWrap = styled.div`
  height: 168px;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: var(--primary-background-color);

  @media ${device.tablet} {
    height: 272px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const InnerWrap = styled.div`
  width: 100%;
  padding: 24px 16px 40px 16px;
  background: var(--primary-background-color);
  @media ${device.tablet} {
    padding: 24px 24px 40px 24px;
  }
  @media ${device.desktop} {
    padding: 20px 16px 40px 10px;
  }
`;

export const Description = styled.div`
  color: var(--m-3-sys-light-on-surface-variant, #49454f);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 24px;
`;

export const BadgesWrap = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export const Badge = styled.div`
  color: var(--accent);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--primary-background-color);
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
  text-transform: capitalize;
`;

export const BadgeColor = styled(Badge)`
  color: ${({ $priorityColor }) => getPriorityColor($priorityColor)};
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
`;
export const StyledLink = styled(Link)`
  max-width: 100%;
`;
