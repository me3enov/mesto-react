import React, {useState, useEffect} from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js'
import Footer from "./Footer.js";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleDeleteCardClick() {
    setIsCardDeletePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setIsCardDeletePopupOpen(false);
    setSelectedCard(null)
  }

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [])

  return (
    <div className="app">
      <div className="root">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onBinClick={handleDeleteCardClick}/>

        <PopupWithForm
          name="place_edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          ariaLabel="Сохранить профиль"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
            <input
              id="form__input_string_name"
              className="form__input form__input_string_name"
              name="name"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required/>
            <span
              id="form__input_string_name-error"
              className="form__input-error"/>
            <input
              id="form__input_string_job"
              className="form__input form__input_string_job"
              name="about"
              type="text"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required/>
            <span
              id="form__input_string_job-error"
              className="form__input-error"/>
        </PopupWithForm>

        <PopupWithForm
          name="place_add"
          title="Новое место"
          buttonText="Создать"
          ariaLabel="Добавить фото"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
            <input
              id="form__input_string_title"
              className="form__input form__input_string_title"
              type="text"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required/>
            <span
              id="form__input_string_title-error"
              className="form__input-error"/>
            <input
              id="form__input_string_link"
              className="form__input form__input_string_link"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required/>
            <span
              id="form__input_string_link-error"
              className="form__input-error"/>
          </PopupWithForm>

        <PopupWithForm
          name="place_avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          ariaLabel="Сохранить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
            <input
              id="form__input_string_avatar"
              className="form__input form__input_string_avatar"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required/>
            <span
              id="form__input_string_avatar-error"
              className="form__input-error"/>
          </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          isOpen={isCardDeletePopupOpen}
          onClose={closeAllPopups}
          name='place_confirm'
          title='Вы уверены?'
          buttonText="Да"
          ariaLabel="Удалить фото"
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
