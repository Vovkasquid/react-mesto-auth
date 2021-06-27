function InfoToolTip() {
  return (
    <div className={`popup info-tool-tip-popup popup_status_active`}>
      <div className="info-tool-tip-popup__container">
        <img src="../images/auth-success.svg" alt="Картинка успешной авторизации" className="info-tool-tip-popup__picture"/>
        <p className="info-tool-tip-popup__description">Вы успешно зарегистрировались!</p>
        <button aria-label="Закрыть" type="button" className="popup__close-btn info-tool-tip-popup__close-button" ></button>
      </div>
    </div>
  );
}

export default InfoToolTip;
