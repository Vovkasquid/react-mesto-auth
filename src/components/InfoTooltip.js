import succesPic from '../images/auth-success.svg';
import failPic from '../images/auth-failed.svg';

function InfoToolTip({isOpen, isSucces, onClose}) {
  return (
    <div className={isOpen ? `popup info-tool-tip-popup popup_status_active` : `popup info-tool-tip-popup`}>
      <div className="info-tool-tip-popup__container">
        <img src={isSucces ? succesPic : failPic} alt="Картинка успешной авторизации" className="info-tool-tip-popup__picture"/>
        <p className="info-tool-tip-popup__description">{isSucces ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</p>
        <button aria-label="Закрыть" type="button" className="popup__close-btn info-tool-tip-popup__close-button" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default InfoToolTip;
