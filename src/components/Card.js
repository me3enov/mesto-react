import React from 'react';

function Card({ card, onCardClick, onBinClick }) {
  function handleCardClick() {
    onCardClick(card)
  }
  return(
    <li className="card" key={card._id}>
      <div className="card__image" style={{ backgroundImage: `url(${card.link})` }} onClick={handleCardClick}/>
      <button className="card__bin" type="button" onClick={onBinClick}/>
      <h2 className="card__title">{card.name}</h2>
      <div className="card__like-container">
        <button className="card__like" type="button"/>
        <span className="card__like-count">{card.likes.length}</span>
      </div>
  </li>
  )
}

export default Card;