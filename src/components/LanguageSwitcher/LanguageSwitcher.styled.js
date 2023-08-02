import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  width: 69px;
  padding: 12px 4px 12px 12px;
  align-items: center;
  gap: 4px;

  border-radius: 8px;
  background: var(--primary-background-color);

  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  color: var(--text);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
`;

export const Ul = styled.ul`
  position: absolute;
  top: 0;
  display: flex;
  width: 69px;
  padding: 16px 12px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  color: var(--divider, #aca7c3);
  font-feature-settings: 'clig' off, 'liga' off;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
`;

export const Li = styled.li`
  border-bottom: 1px solid var(--divider, #aca7c3);
  width: 100%;
  &:hover,
  &:active {
    color: var(--accent);
    border-bottom: 1px solid var(--accent);
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  order: 2;

  @media (min-width: 768px) {
    order: 3;
  }
`;
