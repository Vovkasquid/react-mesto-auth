import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);
  //Вытаскиваем данные пользователя из контекста
  const userInfo = currentUser;
  //Проверяем наша ли карточка
  const isThisCardMine = userInfo._id === card.owner._id;
  //Проверяем есть ли наш лайк
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = isLiked ? `card__like-button card__like-button_status_active` : `card__like-button`;

  return (
    <li className="card">
      <img src={card.link} alt={card.name} className="card__photo" onClick={() => onCardClick(card)}/>
      <div className="card__info">
        <h2 className="card__description">{card.name}</h2>
        <div className="card__like-container">
          <button aria-label="Нравится" type="button" className={cardLikeButtonClassName} onClick={() => onCardLike(card)}></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
      {isThisCardMine && (<button aria-label="Удалить место" type="button" className="card__delete-button" onClick={() => onCardDelete(card)}></button>)}
    </li>
  );
}

export default Card;
