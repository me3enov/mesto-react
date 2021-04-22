import React from 'react';

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card.name, props.card.link);
  }

  return(
    <li className="card" key={props.card._id}>
      <div className="card__image" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleCardClick}/>
      <button className="card__bin" type="button" onClick={props.onCardDelete}/>
      <h2 className="card__title">{props.card.name}</h2>
      <div className="card__like-container">
        <button className="card__like" type="button"/>
        <span className="card__like-count">{props.card.likes.length}</span>
      </div>
  </li>
  )
}

export default Card;