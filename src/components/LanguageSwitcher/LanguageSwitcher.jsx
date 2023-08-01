import React, { useState, useEffect } from 'react';
import * as css from './LanguageSwitcher.styled';
import { ChevronSmallDown } from 'react-swm-icon-pack';

export const LanguageSwitcher = () => {
  const languages = [
    { id: 1, code: 'en', name: 'English' },
    { id: 2, code: 'es', name: 'Español' },
    { id: 3, code: 'uk', name: 'United Kingdom' },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

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
            {languages.map((language, index) => (
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
