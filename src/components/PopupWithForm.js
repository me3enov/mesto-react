function PopupWithForm (props) {

  return (
    <div className={(props.isOpen ? `popup popup_place_${props.name} popup_opened` : `popup popup_place_${props.name}`)}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
          aria-label="Закрыть">
        </button>
        <form
          id={`form_place_${props.name}`}
          className={`form form_place_${props.name}`}
          name={`form__${props.name}`}
          noValidate>
            <h2 className="form__title">{props.title}</h2>
            <fieldset className="form__input-container">
              {props.children}
              <button
              type="submit"
              className="form__submit-button"
              aria-label={props.ariaLabel}>
                {props.buttonText}
              </button>
            </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;