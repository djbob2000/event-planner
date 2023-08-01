import { Logo } from '../Logo/Logo';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import * as css from './Header.styled';

export const Header = () => {
  return (
    <>
      <css.Container>
        <Logo />
        <LanguageSwitcher />
        <input />
      </css.Container>
    </>
  );
};
