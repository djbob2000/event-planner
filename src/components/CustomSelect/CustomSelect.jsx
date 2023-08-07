import { useRef, useState } from 'react';
import { useClickAway, useKeyPressEvent } from 'react-use';

import * as s from './CustomSelect.styled';

export const CustomSelect = ({
  options = [''],
  name,
  setFieldValue,
  error,
  ...props
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const ClickAreaRef = useRef();
  useClickAway(ClickAreaRef, () => {
    setIsOpen(false);
  });

  useKeyPressEvent('Escape', () => {
    setIsOpen(false);
  });

  return (
    <s.Container ref={ClickAreaRef}>
      <s.Wrapper>
        <s.Input
          type="text"
          {...props}
          name={name}
          id={name}
          readOnly
          value={inputValue}
          placeholder={isOpen ? `Select ${name}` : 'Select'}
          onChange={event => {
            setInputValue(event.target.value);
          }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          $active={isOpen}
          $error={error}
        />
        <s.StyledChevronDown
          color="var(--accent)"
          style={{
            transform: isOpen && 'rotate(180deg)',
          }}
          size="24"
        />
      </s.Wrapper>

      {isOpen && (
        <s.Ul>
          {options.map(value => (
            <s.Li
              key={value}
              onClick={event => {
                setInputValue(event.target.textContent);
                setFieldValue(name, event.target.textContent);
              }}
            >
              {value}
            </s.Li>
          ))}
        </s.Ul>
      )}
    </s.Container>
  );
};
