import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 24px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 767px;
  border-bottom: 1px solid #7b61ff;
  background: #fefcff;

  @media (min-width: 768px) {
    max-width: 1279px;
    padding: 26px 40px 18px 40px;
  }

  @media (min-width: 1280px) {
    max-width: 1440px;
    padding: 22px 80px;
  }
`;
