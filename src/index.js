import '../src/pages/index.css';
import { initialCards } from '../src/scripts/cards';
import { createCard, deleteCard, likeCard } from '../src/components/card';
import { openModal, closeModal } from '../src/components/modal';

const cardsContainer = document.querySelector('.places__list');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImageImage = popupTypeImage.querySelector('.popup__image');
const popupImageCaption = popupTypeImage.querySelector('.popup__caption');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeEditNameInput = popupTypeEdit.querySelector('.popup__input_type_name');
const popupTypeEditDescriptionInput = popupTypeEdit.querySelector('.popup__input_type_description');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeNewCardNameInput = popupTypeNewCard.querySelector('.popup__input_type_card-name'); 
const popupTypeNewCardLinkInput = popupTypeNewCard.querySelector('.popup__input_type_url'); 

// //КОЛБЭК ИЗОБРАЖЕНИЯ
const openImagePopup = function(event) {
    popupImageImage.src = event.target.src;
    popupImageImage.alt = event.target.alt;
    popupImageCaption.textContent = event.target.alt;
    openModal(popupTypeImage);
}

//СОЗДАНИЕ
initialCards.forEach(function(item) {
    cardsContainer.append(createCard(item, deleteCard, likeCard, openImagePopup));
})
 
//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
const profileEditButton = document.querySelector('.profile__edit-button');
profileEditButton.addEventListener('click', function() {
    popupTypeEditNameInput.value = profileTitle.textContent;
    popupTypeEditDescriptionInput.value = profileDescription.textContent;
    openModal(popupTypeEdit);
});

const popupEditCloseButton = popupTypeEdit.querySelector('.popup__close');
popupEditCloseButton.addEventListener('click', function() {
    closeModal(popupTypeEdit);
});

//ФУНКЦИЯ ДЛЯ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
function updateProfileInfo() {
    profileTitle.textContent = popupTypeEditNameInput.value;
    profileDescription.textContent = popupTypeEditDescriptionInput.value;
}

//КНОПКА СОХРАНИТЬ В МЕНЮ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
const popupFormEdit = popupTypeEdit.querySelector('.popup__form');
popupFormEdit.addEventListener('submit', function(evt) {
    evt.preventDefault();
    updateProfileInfo();
    closeModal(popupTypeEdit);
});

//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
const profileAddButton = document.querySelector('.profile__add-button');
profileAddButton.addEventListener('click', function() {
    openModal(popupTypeNewCard);
})

const popupAddCloseButton = popupTypeNewCard.querySelector('.popup__close');
popupAddCloseButton.addEventListener('click', function() {
    closeModal(popupTypeNewCard);
})

//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ 
function addCard() { 
    const cardData = {
        name: popupTypeNewCardNameInput.value, 
        link: popupTypeNewCardLinkInput.value
    }
    cardsContainer.prepend(createCard(cardData, deleteCard, likeCard, openImagePopup))
}

//КНОПКА СОХРАНИТЬ В МЕНЮ  ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
const popupFormCard = popupTypeNewCard.querySelector('.popup__form');
popupFormCard.addEventListener('submit', function(evt) {
    evt.preventDefault();
    addCard();
    popupFormCard.reset();
    closeModal(popupTypeNewCard);
});

//ЗАКРЫТИЕ ПОПАПА ИЗОБРАЖЕНИЯ
const popupImageCloseButton = popupTypeImage.querySelector('.popup__close');
popupImageCloseButton.addEventListener('click', function() {
    closeModal(popupTypeImage);
});
