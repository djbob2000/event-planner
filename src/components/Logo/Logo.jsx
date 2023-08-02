import logo from '../../assets/images/logo.svg';
import * as css from './Logo.styled';

export const Logo = () => {
  return (
    <>
      <css.A href="./">
        <img src={logo} alt="Logo Event Planner" />
      </css.A>
    </>
  );
};
