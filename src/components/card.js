//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ И УДАЛЕНИЯ КАРТОЧЕК ИЗ МАССИВА
import { closeModal } from "../components/modal";
const cardTemplate = document.querySelector('#card-template').content;

const createCard = (cardData, deleteCallback, likeCallback, imageCallback) => {
    const elementTemplate = cardTemplate.cloneNode(true);
    elementTemplate.querySelector('.card__title').textContent = cardData.name;
    elementTemplate.querySelector('.card__image').src = cardData.link;
    elementTemplate.querySelector('.card__image').alt = cardData.name;

    const deleteButton = elementTemplate.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCallback);

    const likeButton = elementTemplate.querySelector('.card__like-button');
    likeButton.addEventListener('click', likeCallback);

    const imageButton = elementTemplate.querySelector('.card__image');
    imageButton.addEventListener('click', imageCallback);
    imageButton.addEventListener('keydown', escClose);

    return elementTemplate;
}

//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА ПО КЛИКУ НА ESCAPE
function escClose(evt) {
    if(evt.key === 'Escape') {
        const popupIsOpen = document.querySelector('.popup_is-opened');
        closeModal(popupIsOpen);
    }
}

//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА ПО КЛИКУ НА ОВЕРЛЕЙ
function overlayClose(evt) {
    if(evt.target.classList.contains('popup')) {
        closeModal(evt.target);
    }
}

export { createCard, escClose, overlayClose };