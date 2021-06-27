import React from 'react';
import Header from './Header';

//Компонент для логина пользователя
function Login() {
  return (
    <>
      <Header textButton={'Войти'}/>
      <section className="auth page__auth">
        <h1 className="auth__header">Регистрация</h1>
        <form name='authorization' className="auth__form">
          <input type="email" name="editLinkAvatar" id="email-input-login" className="auth__input" placeholder="Email" required/>
          <input type="password" name="editLinkAvatar" id="password-input-login" className="auth__input" placeholder="Пароль" required/>
          <button aria-label="Войти" type="submit" className={`auth__button`}>Вход</button>
        </form>
      </section>
    </>
  );
}

export default Login;
