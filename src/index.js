import '../src/pages/index.css';
import { initialCards } from '../src/scripts/cards';
import { createCard, escClose, overlayClose } from '../src/components/card';
import { openModal, closeModal } from '../src/components/modal';

const placesList = document.querySelector('.places__list');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImageImage = popupTypeImage.querySelector('.popup__image');
const popupImageCaption = popupTypeImage.querySelector('.popup__caption');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeEditName = popupTypeEdit.querySelector('.popup__input_type_name');
const popupTypeEditDescription = popupTypeEdit.querySelector('.popup__input_type_description');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeNewCardName = popupTypeNewCard.querySelector('.popup__input_type_card-name'); 
const popupTypeNewCardLink = popupTypeNewCard.querySelector('.popup__input_type_url'); 

//КОЛБЭК УДАЛЕНИЯ
const deleteCallbackArgument = function(event) {
    event.target.parentElement.remove()
}

//КОЛБЭК ЛАЙКА
const likeCallbackArgument = function(event) {
    event.target.classList.toggle('card__like-button_is-active')
}

//КОЛБЭК ИЗОБРАЖЕНИЯ
const imageCallbackArgument = function(event) {
    popupImageImage.src = event.target.src;
    popupImageImage.alt = event.target.alt;
    popupImageCaption.textContent = event.target.alt;
    openModal(popupTypeImage);
}

//СОЗДАНИЕ
initialCards.forEach(function(item) {
    placesList.append(createCard(item, deleteCallbackArgument, likeCallbackArgument, imageCallbackArgument));
})

//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
const profileEditButton = document.querySelector('.profile__edit-button');
profileEditButton.addEventListener('click', function() {
    popupTypeEditName.value = profileTitle.textContent;
    popupTypeEditDescription.value = profileDescription.textContent;
    openModal(popupTypeEdit);
    profileEditButton.addEventListener('keydown', escClose);
    popupTypeEdit.addEventListener('click', overlayClose);
});

const popupEditCloseButton = popupTypeEdit.querySelector('.popup__close');
popupEditCloseButton.addEventListener('click', function() {
    closeModal(popupTypeEdit);
});

//ЗАКРЫТИЕ МЕНЮ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ ПО КНОПКЕ ESCAPE(СНЯТИЕ ОБРАБОТЧИКА)
profileEditButton.removeEventListener('keydown', escClose);

//ЗАКРЫТИЕ МЕНЮ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ ПО КЛИКУ НА ОВЕРЛЕЙ(СНЯТИЕ ОБРАБОТЧИКА)
popupTypeEdit.removeEventListener('click', overlayClose);

//ФУНКЦИЯ ДЛЯ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
function editFunction() {
    profileTitle.textContent = popupTypeEditName.value;
    profileDescription.textContent = popupTypeEditDescription.value;
}

//КНОПКА СОХРАНИТЬ В МЕНЮ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
const popupFormEdit = popupTypeEdit.querySelector('.popup__form');
popupFormEdit.addEventListener('submit', function(evt) {
    evt.preventDefault();
    editFunction();
    popupFormEdit.reset();
    closeModal(popupTypeEdit);
});

//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
const profileAddButton = document.querySelector('.profile__add-button');
profileAddButton.addEventListener('click', function() {
    openModal(popupTypeNewCard);
    profileAddButton.addEventListener('keydown', escClose);
    popupTypeNewCard.addEventListener('click', overlayClose);
})

const popupAddCloseButton = popupTypeNewCard.querySelector('.popup__close');
popupAddCloseButton.addEventListener('click', function() {
    closeModal(popupTypeNewCard);
})

//ЗАКРЫТИЕ МЕНЮ ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ ПО КНОПКЕ ESCAPE(СНЯТИЕ ОБРАБОТЧИКА)
profileAddButton.removeEventListener('keydown', escClose);

//ЗАКРЫТИЕ МЕНЮ  ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ ПО КЛИКУ НА ОВЕРЛЕЙ(СНЯТИЕ ОБРАБОТЧИКА)
popupTypeNewCard.removeEventListener('click', overlayClose);

//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ 
function addCardFunction() { 
    const cardNewArray = [{name: popupTypeNewCardName.value, link: popupTypeNewCardLink.value}];
    cardNewArray.forEach(function(item) {
        placesList.append(createCard(item, deleteCallbackArgument, likeCallbackArgument, imageCallbackArgument)); 
    })
}

//КНОПКА СОХРАНИТЬ В МЕНЮ  ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
const popupFormCard = popupTypeNewCard.querySelector('.popup__form');
popupFormCard.addEventListener('submit', function(evt) {
    evt.preventDefault();
    addCardFunction();
    popupFormCard.reset();
    closeModal(popupTypeNewCard);
});

//ЗАКРЫТИЕ ПОПАПА ИЗОБРАЖЕНИЯ
const popupImageCloseButton = popupTypeImage.querySelector('.popup__close');
popupImageCloseButton.addEventListener('click', function() {
    closeModal(popupTypeImage);
});

//ЗАКРЫТИЕ МЕНЮ ДЛЯ ПОПАПА IMAGE ПО КЛИКУ НА ОВЕРЛЕЙ
popupTypeImage.addEventListener('click', overlayClose);


