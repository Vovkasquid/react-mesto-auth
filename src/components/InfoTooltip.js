import succesPic from '../images/auth-success.svg';
import failPic from '../images/auth-failed.svg';

function InfoToolTip() {
  return (
    <div className={`popup info-tool-tip-popup`}>
      <div className="info-tool-tip-popup__container">
        <img src={succesPic} alt="Картинка успешной авторизации" className="info-tool-tip-popup__picture"/>
        <p className="info-tool-tip-popup__description">Вы успешно зарегистрировались!</p>
        <button aria-label="Закрыть" type="button" className="popup__close-btn info-tool-tip-popup__close-button" ></button>
      </div>
    </div>
  );
}

export default InfoToolTip;
