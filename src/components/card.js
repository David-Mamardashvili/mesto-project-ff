import { deleteCard, addLike, deleteLike } from "./api";
const cardTemplate = document.querySelector("#card-template").content;

//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ И УДАЛЕНИЯ КАРТОЧЕК ИЗ МАССИВА
const createCard = (cardData, deleteCallback, likeCallback, imageCallback, userId) => {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImage = cardElement.querySelector(".card__image");
  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardElementImage.src = cardData.link;
  cardElementImage.alt = cardData.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  if (userId === cardData.owner._id) {
    deleteButton.addEventListener("click", (event) => {
      deleteCallback(event, cardData._id);
    });
  } else {
    deleteButton.remove();
  }

  const likeButton = cardElement.querySelector(".card__like-button");
  const cardLikesAmount = cardElement.querySelector(".card__likes-amount");
  cardLikesAmount.textContent = cardData.likes.length;
  const isUserLike = cardData.likes.some((item) => {
    return item._id === userId
  })
  if(isUserLike) {
    likeButton.classList.add("card__like-button_is-active")
  }
  likeButton.addEventListener("click", (event) => {
    likeCallback(event, cardData._id);
  });

  const imageButton = cardElement.querySelector(".card__image");
  imageButton.addEventListener("click", imageCallback);

  return cardElement;
};

//КОЛБЭК УДАЛЕНИЯ
const removeCard = function (event, cardId) {
  const card = event.target.closest(".places__item");
  deleteCard(cardId)
    .then((result) => {
      card.remove();
    })
    .catch((err) => console.log(err));
};

//КОЛБЭК ЛАЙКА
const likeCard = function (event, cardId) {
  const card = event.target.closest(".places__item");
  const counterLikes = card.querySelector(".card__likes-amount");
  if (event.target.classList.contains("card__like-button_is-active")) {
    deleteLike(cardId).then((res) => {
      event.target.classList.remove("card__like-button_is-active");
      counterLikes.textContent = res.likes.length;
    });
  } else {
    addLike(cardId).then((res) => {
      event.target.classList.add("card__like-button_is-active");
      counterLikes.textContent = res.likes.length;
    });
  }
};

export { cardTemplate, createCard, removeCard, likeCard };
