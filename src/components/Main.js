import React, {useState, useEffect} from 'react';
import api from '../utils/api.js'
import Card from './Card.js'

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then((result) => {
        const [userData, cardList] = result;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <main className="content">
      <section className="profile root__profile">
        <button className="profile__avatar"
          type="button"
          style={{ backgroundImage: `url(${userAvatar})` }}
          onClick={props.onEditAvatar}>
        </button>
        <div className="profile__line">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfile}>
          </button>
        </div>
        <p className="profile__job">{userDescription}</p>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}>
        </button>
      </section>

      <section className="cards" aria-label="Cards">
        <ul className="gallery">
          {cards.map((card) =>
            <Card
              key={card._id}
              card={card}
              onCardDelete={props.onCardDelete}
              onCardClick={props.onCardClick}/>)}
        </ul>
      </section>
    </main>
    </>
  );
}

export default Main