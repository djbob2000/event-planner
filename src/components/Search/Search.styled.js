import styled from 'styled-components';
import { Search } from 'react-swm-icon-pack';
import { CrossSmall } from 'react-swm-icon-pack';
import { device } from '../../styles/deviceBreakpoints';

export const SearchContainer = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 12px;
  flex-basis: 100%;
  border-radius: 8px;
  background: var(--primary-background-color);

  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  order: 3;

  @media ${device.tablet} {
    order: 2;
    max-width: 368px;
  }
  @media ${device.desktop} {
    order: 2;
    max-width: 410px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  color: var(--accent);
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 1;
  border: 0;
  outline: none;

  &::placeholder {
    color: #888;
  }
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

export const CrossSmallIcon = styled(CrossSmall)`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
