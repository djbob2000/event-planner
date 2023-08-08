import { useState, useRef } from 'react';
import * as css from './LanguageSwitcher.styled';
import { ChevronSmallDown } from 'react-swm-icon-pack';
import { LANG } from '../../constants/lang';
import { useClickAway, useKeyPressEvent } from 'react-use';

export const LanguageSwitcher = () => {
  const ClickAreaRef = useRef();

  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(LANG[0]);

  useClickAway(ClickAreaRef, () => {
    setIsShowDropdown(false);
  });

  useKeyPressEvent('Escape', () => {
    setIsShowDropdown(false);
  });

  const handleClick = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  return (
    <>
      <css.Wrapper ref={ClickAreaRef}>
        <css.Button onClick={handleClick}>
          {currentLanguage?.code?.toUpperCase()}
          <ChevronSmallDown size="24" />
        </css.Button>
        {isShowDropdown && (
          <css.Ul>
            {LANG.map((language, index) => (
              <css.Li
                key={index}
                onClick={() => {
                  setIsShowDropdown(false);
                  setCurrentLanguage(language);
                }}
              >
                {language.code.toUpperCase()}
              </css.Li>
            ))}
          </css.Ul>
        )}
      </css.Wrapper>
    </>
  );
};
