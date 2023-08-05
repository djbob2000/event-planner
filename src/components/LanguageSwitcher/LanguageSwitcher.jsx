import { useState, useEffect } from 'react';
import * as css from './LanguageSwitcher.styled';
import { ChevronSmallDown } from 'react-swm-icon-pack';
import { LANG } from '../../constants/lang';

export const LanguageSwitcher = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(LANG[0]);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <css.Wrapper>
        <css.Button onClick={handleClick}>
          {currentLanguage?.code?.toUpperCase()}
          <ChevronSmallDown size="24" />
        </css.Button>
        {showDropdown && (
          <css.Ul>
            {LANG.map((language, index) => (
              <css.Li
                key={index}
                onClick={() => {
                  setShowDropdown(false);
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
