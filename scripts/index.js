const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');

//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ И УДАЛЕНИЯ КАРТОЧЕК ИЗ МАССИВА
const createCard = (cardData, deleteCallback) => {
    const elementTemplate = cardTemplate.cloneNode(true);
    elementTemplate.querySelector('.card__title').textContent = cardData.name;
    elementTemplate.querySelector('.card__image').src = cardData.link;
    elementTemplate.querySelector('.card__image').alt = cardData.name;

    const deleteButton = elementTemplate.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCallback);

    return elementTemplate;
}
const deleteCallbackArgument = function(event) {
    event.target.parentElement.remove()
}
initialCards.forEach(function(item) {
    placesList.append(createCard(item, deleteCallbackArgument));
})



