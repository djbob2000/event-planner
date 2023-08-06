import { Logo } from '../Logo/Logo';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Search } from '../Search/Search';
import * as css from './Header.styled';

export const Header = () => {
  return (
    <header>
      <css.HeaderContainer>
        <Logo />
        <LanguageSwitcher />
        <Search />
      </css.HeaderContainer>
    </header>
  );
};
