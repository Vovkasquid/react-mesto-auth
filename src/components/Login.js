import React from 'react';
import Header from './Header';
import AuthComponent from './AuthComponent';

//Компонент для логина пользователя
function Login() {
  //Ниже передадим компоненту не стейт, а просто переменную, чтобы он правильно отрендерил компонент
  //Компонент будет не динамическим, а статистическим и включать по роуту. Его перерисовывать не надо
  return (
    <AuthComponent isLogin={true}/>
  );
}

export default Login;
