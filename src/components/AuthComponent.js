import {useState} from 'react';
import Header from "./Header";
import { Link } from 'react-router-dom';

//Чтобы не дублировать практически одинакоый код в Login и Register
//Делаем этот компонент
function AuthComponent({isLogin, headerHandler, handlerSubmit}) {
  //Стейт для сбора данных с формы
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  //Обработчик сбора данных с инпутов
  const handleChange = (e) => {
    //Вытаскиваем из таргета имя поля и значение
    const {name, value} = e.target;
    //Обновляем стейт с данным
    setData({
      ...data,
      [name]: value
    })
  }

  //Обработчик сабмита формы
  const formSubmitHandler = (event) => {
    event.preventDefault();
    handlerSubmit(data.password, data.email);
  }
  return (
    <>
      <Header
        textButton={isLogin ? 'Регистрация' : 'Войти' }
        headerHandler={headerHandler}
      />
      <section className="auth page__auth">
        <h1 className="auth__header">{isLogin ? 'Вход' : 'Регистрация'}</h1>
        <form onSubmit={formSubmitHandler} name='authorization' className="auth__form">
          <input type="email" name="email" id="email-input-login" className="auth__input" placeholder="Email" value={data.email} onChange={handleChange} required/>
          <input type="password" name="password" id="password-input-login" className="auth__input" placeholder="Пароль" value={data.password} onChange={handleChange} required/>
          <button aria-label={isLogin ? 'Войти' : 'Зарегестрироваться'} type="submit" className={`auth__button`}>{isLogin ? 'Войти' : 'Зарегестрироваться'}</button>
          {!isLogin && (<p className='auth__answer-text'>Уже зарегистрированы? {!isLogin && (<Link to='/sign-in' className='auth__link'>Войти</Link>)} </p>)}
        </form>
      </section>
    </>
  );
}

export default AuthComponent;
