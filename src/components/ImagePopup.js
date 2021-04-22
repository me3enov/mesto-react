import React from 'react';

function ImagePopup(props) {
  return(
    <div className={(props.card.isOpen ? `popup popup_place_img popup_opened` : `popup popup_place_img`)}>
      <div className="popup__image-container">
        <button className="popup__close-button popup__close-button_place_img" type="button" onClick={props.onClose}/>
        <figure className="popup__figure">
          <img className="popup__image" alt={props.card.name} src={props.card.link}/>
          <figcaption className="popup__description">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default ImagePopup;