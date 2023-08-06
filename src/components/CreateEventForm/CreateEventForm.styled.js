import styled, { css } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { device } from '../../styles/deviceBreakpoints';

const disabledStyles = css`
  color: var(--divider, #aca7c3);
  cursor: not-allowed;
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;

  color: var(--accent);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;
  ${props => props.disabled && disabledStyles};
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 15px 11px;
  border-radius: 8px;
  /* border: 1px solid var(--divider, #aca7c3); */
  border-width: 1px;
  border-style: solid;
  border-color: ${props =>
    props.error ? 'var(--hight, #FF2B77)' : 'var(--divider, #aca7c3)'};
  color: var(--text, #3f3f3f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  &:focus {
    outline: none;
  }
  ${props => props.disabled && disabledStyles};
`;

export const StyledTextArea = styled(StyledField)`
  min-height: 156px;
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  top: 84px;
  right: 19px;
  color: var(--hight, #ff2b77);
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
`;
