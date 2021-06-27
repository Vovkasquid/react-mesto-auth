import React from 'react';
import Header from "./Header";
import { Link } from 'react-router-dom';

//Чтобы не дублировать практически одинакоый код в Login и Register
//Делаем этот компонент
function AuthComponent({isLogin}) {
  return (
    <>
      <Header textButton={isLogin ? 'Регистрация' : 'Войти' }/>
      <section className="auth page__auth">
        <h1 className="auth__header">{isLogin ? 'Вход' : 'Регистрация'}</h1>
        <form name='authorization' className="auth__form">
          <input type="email" name="editLinkAvatar" id="email-input-login" className="auth__input" placeholder="Email" required/>
          <input type="password" name="editLinkAvatar" id="password-input-login" className="auth__input" placeholder="Пароль" required/>
          <button aria-label={isLogin ? 'Войти' : 'Зарегестрироваться'} type="submit" className={`auth__button`}>{isLogin ? 'Войти' : 'Зарегестрироваться'}</button>
          {!isLogin && (<p className='auth__answer-text'>Уже зарегистрированы? {!isLogin && (<Link to='/sign-in' className='auth__link'>Войти</Link>)} </p>)}
        </form>
      </section>
    </>
  );
}

export default AuthComponent;
