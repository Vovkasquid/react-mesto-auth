import logo from '../images/logo_mesto.svg';

function Header() {
  return (
    <header className="header page__header">
      <img src={logo} alt="Логотип соцсети Место" className="logo"/>
      <div className="header__info-block">
        <p className="header__user-email">domtruba@ya.ru</p>
        <button className="header__universal-button">Войти</button>
      </div>
    </header>
  );
}

export default Header;
