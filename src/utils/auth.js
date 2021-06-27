export const BASE_URL = 'https://auth.nomoreparties.co/';

//Функция обработки ответа от сервера
const handleResponse = response => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);

//Функция регистрация пользователя
export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
    .then(handleResponse)
};

//Функция авторизация пользователя
export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
    },
    body: JSON.stringify({password, email})
  })
    .then(handleResponse)
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(handleResponse)
}
