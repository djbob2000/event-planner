import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { device } from '../../styles/deviceBreakpoints';

export const H1 = styled.h1`
  margin: 24px 0px;
  color: var(--text);
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media ${device.tablet} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 32px;
    margin-top: 17px;
    margin-bottom: 25px;
  }
`;

export const StyledForm = styled(Form)`
  padding: 40px 16px;
  border-radius: 8px;
  background: var(--primary-background-color);
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  @media ${device.tablet} {
    padding: 40px 24px;
  }
  @media ${device.desktop} {
    padding: 40px 40px 54px 40px;
  }
`;
export const FieldsWrapper = styled.div`
  /* display: flex; */
`;
export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`;

export const Label = styled.label`
  color: #7b61ff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
  letter-spacing: 0.4px;
`;
