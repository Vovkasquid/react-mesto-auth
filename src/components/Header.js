import logo from '../images/logo_mesto.svg';

function Header({loggedIn, textButton, userEmail}) {
  return (
    <header className="header page__header">
      <img src={logo} alt="Логотип соцсети Место" className="logo"/>
      <div className="header__info-block">
        <p className="header__user-email">{userEmail || ''}</p>
        <button className= {loggedIn ? "header__universal-button header__universal-button_color_grey" : "header__universal-button"}>{textButton}</button>
      </div>
    </header>
  );
}

export default Header;
