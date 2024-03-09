import '../src/pages/index.css';
import { cardTemplate, createCard, deleteCard, likeCard } from '../src/components/card';
import { openModal, closeModal } from '../src/components/modal';
import { enableValidation, clearValidation } from './components/validation';
import { config } from './components/config';
import { downloadingCards, downloadingInformation, unloadingInformation, unloadingAvatar, unloadingCard, addLike, deleteLike } from './components/api'; 

const cardsContainer = document.querySelector('.places__list');
const cardLikesAmount = cardTemplate.querySelector('.card__likes-amount');
const profileImage = document.querySelector('.profile__image');
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
const popupTypeAvatar = document.querySelector('.popup_type_avatar');
const popupTypeAvatarInput = popupTypeAvatar.querySelector('.popup__input_type_url');

export { cardsContainer, openImagePopup, profileTitle, profileDescription, profileImage };
enableValidation();
downloadingInformation();
downloadingCards();


//КОЛБЭК ИЗОБРАЖЕНИЯ
const openImagePopup = function(event) {
    popupImageImage.src = event.target.src;
    popupImageImage.alt = event.target.alt;
    popupImageCaption.textContent = event.target.alt;
    openModal(popupTypeImage);
}
 
//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
const profileEditButton = document.querySelector('.profile__edit-button');
profileEditButton.addEventListener('click', function() {
    popupTypeEditNameInput.value = profileTitle.textContent;
    popupTypeEditDescriptionInput.value = profileDescription.textContent;
    clearValidation(popupTypeEdit, config);
    openModal(popupTypeEdit);
});

const popupEditCloseButton = popupTypeEdit.querySelector('.popup__close');
popupEditCloseButton.addEventListener('click', function() {
    closeModal(popupTypeEdit);
});

//КНОПКА СОХРАНИТЬ В МЕНЮ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
const popupFormEdit = popupTypeEdit.querySelector('.popup__form');
popupFormEdit.addEventListener('submit', function(evt) {
    evt.preventDefault();
    unloadingInformation(popupTypeEditNameInput.value, popupTypeEditDescriptionInput.value);
    closeModal(popupTypeEdit);
});

//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
const profileAddButton = document.querySelector('.profile__add-button');
profileAddButton.addEventListener('click', function() {
    clearValidation(popupTypeNewCard, config);
    openModal(popupTypeNewCard);
})

const popupAddCloseButton = popupTypeNewCard.querySelector('.popup__close');
popupAddCloseButton.addEventListener('click', function() {
    closeModal(popupTypeNewCard);
})

//КНОПКА СОХРАНИТЬ В МЕНЮ  ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
const popupFormCard = popupTypeNewCard.querySelector('.popup__form');
popupFormCard.addEventListener('submit', function(evt) {
    evt.preventDefault();
    unloadingCard(popupTypeNewCardNameInput.value, popupTypeNewCardLinkInput.value);
    popupFormCard.reset();
    closeModal(popupTypeNewCard);
});

//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ АВАТАРА
const profileAvatarButton = document.querySelector('.profile__image');
profileAvatarButton.addEventListener('click', function() {
    openModal(popupTypeAvatar);
})

const profileAvatarCloseButton = popupTypeAvatar.querySelector('.popup__close');
profileAvatarCloseButton.addEventListener('click', function() {
    closeModal(popupTypeAvatar);
})

//КНОПКА СОХРАНИТЬ В МЕНЮ  ДЛЯ ЗАМЕНЫ АВАТАРА
const popupFormAvatar = popupTypeAvatar.querySelector('.popup__form');
popupFormAvatar.addEventListener('submit', function(evt) {
    evt.preventDefault();
    unloadingAvatar(popupTypeAvatarInput.value);
    popupFormAvatar.reset();
    closeModal(popupTypeAvatar);
});

//ЗАКРЫТИЕ ПОПАПА ИЗОБРАЖЕНИЯ
const popupImageCloseButton = popupTypeImage.querySelector('.popup__close');
popupImageCloseButton.addEventListener('click', function() {
    closeModal(popupTypeImage);
});

Promise.all([downloadingInformation(), downloadingCards()])
    .then
    ((result) => { 
    const image = document.createElement('img');
    image.setAttribute('src', result[0].avatar);
    profileImage.append(image);
    profileTitle.textContent = result[0].name;
    profileDescription.textContent = result[0].about;
    const userId = result[0]._id;
    result[1].forEach(function(item) {
        const myLike = item.likes.some(function(like) {
            return like._id === userId;
        })    
        const likeCard = function(event) {
            if(myLike) {
                event.target.classList.remove('card__like-button_is-active')
                deleteLike(item._id, userId)
            }
            else { 
                event.target.classList.add('card__like-button_is-active')
                addLike(item._id, userId)
            }
        }
        cardLikesAmount.textContent = item.likes.length;
        cardsContainer.append(createCard(item, deleteCard, likeCard, openImagePopup, userId));
    })
    })
    .catch((err) => {
        console.log(err);
    }); 