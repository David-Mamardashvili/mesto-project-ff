const cardTemplate = document.querySelector('#card-template').content;

//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ И УДАЛЕНИЯ КАРТОЧЕК ИЗ МАССИВА
const createCard = (cardData, deleteCallback, likeCallback, imageCallback, userId) => {
    const cardElement = cardTemplate.cloneNode(true);
    const cardElementImage =  cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__title').textContent = cardData.name;
    cardElementImage.src = cardData.link;
    cardElementImage.alt = cardData.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    if (userId === cardData.owner._id) {
        deleteButton.addEventListener('click', deleteCallback);
    }
    else {
        deleteButton.remove()
    }

    const likeButton = cardElement.querySelector('.card__like-button');
    likeButton.addEventListener('click', likeCallback);

    const imageButton = cardElement.querySelector('.card__image');
    imageButton.addEventListener('click', imageCallback);

    return cardElement; 
}

//КОЛБЭК УДАЛЕНИЯ
const deleteCard = function(event) {
    event.target.closest('.places__item').remove();
}
 
export { cardTemplate, createCard, deleteCard }; 