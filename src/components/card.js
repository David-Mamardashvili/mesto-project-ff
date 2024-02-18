const cardTemplate = document.querySelector('#card-template').content;

//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ И УДАЛЕНИЯ КАРТОЧЕК ИЗ МАССИВА
const createCard = (cardData, deleteCallback, likeCallback, imageCallback) => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardElementImage =  cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardElementImage.src = cardData.link;
    cardElementImage.alt = cardData.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCallback);

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', likeCallback);

    const imageButton = cardElement.querySelector('.card__image');
    imageButton.addEventListener('click', imageCallback);

    return cardElement; 
}

//КОЛБЭК УДАЛЕНИЯ
const deleteCard = function(event) {
    event.target.closest('.places__item').remove()
}
 
//КОЛБЭК ЛАЙКА
const likeCard = function(event) {
    event.target.classList.toggle('card__like-button_is-active')
}

export { createCard, deleteCard, likeCard };