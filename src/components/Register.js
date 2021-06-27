import React from 'react';
import AuthComponent from './AuthComponent';

//Компонент для логина пользователя
function Register() {
  //Ниже передадим компоненту не стейт, а просто переменную, чтобы он правильно отрендерил компонент
  //Компонент будет не динамическим, а статистическим и включать по роуту. Его перерисовывать не надо
  return (
    <AuthComponent isLogin={false}/>
  );
}

export default Register;