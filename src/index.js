import "../src/pages/index.css";
import { createCard, removeCard, likeCard } from "../src/components/card";
import { openModal, closeModal } from "../src/components/modal";
import { enableValidation, clearValidation } from "./components/validation";
import { validationConfig } from "./components/validationConfig";
import { getCards, getInformation, sendingInformation, sendingAvatar, sendingCard } from "./components/api";

const cardsContainer = document.querySelector(".places__list");
const profileImage = document.querySelector(".profile__image");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const popupTypeImage = document.querySelector(".popup_type_image");
const popupImageImage = popupTypeImage.querySelector(".popup__image");
const popupImageCaption = popupTypeImage.querySelector(".popup__caption");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeEditNameInput = popupTypeEdit.querySelector(
  ".popup__input_type_name"
);
const popupTypeEditDescriptionInput = popupTypeEdit.querySelector(
  ".popup__input_type_description"
);
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupTypeNewCardNameInput = popupTypeNewCard.querySelector(
  ".popup__input_type_card-name"
);
const popupTypeNewCardLinkInput = popupTypeNewCard.querySelector(
  ".popup__input_type_url"
);
const popupTypeAvatar = document.querySelector(".popup_type_avatar");
const popupTypeAvatarInput = popupTypeAvatar.querySelector(
  ".popup__input_type_url"
);

export { cardsContainer, openImagePopup, profileTitle, profileDescription, profileImage };
enableValidation(validationConfig);
let userId;

//ПЛАВНОЕ ОТКРЫТИЕ ВСЕХ ПОПАПОВ
const popupList = document.querySelectorAll(".popup");
popupList.forEach(function (popup) {
  popup.classList.add("popup_is-animated");
});

//ФУНКЦИЯ КОГДА ИДЕТ ЗАГРУЗКА
function renderLoading(popupSubmit, isLoading) {
  if(isLoading) {
    popupSubmit.textContent = 'Сохранение...'
  }
  else {
    popupSubmit.textContent = 'Сохранить'
  }
}

//КОЛБЭК ИЗОБРАЖЕНИЯ
const openImagePopup = function (event) {
  popupImageImage.src = event.target.src;
  popupImageImage.alt = event.target.alt;
  popupImageCaption.textContent = event.target.alt;
  openModal(popupTypeImage);
};

//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
const profileEditButton = document.querySelector(".profile__edit-button");
profileEditButton.addEventListener("click", function () {
  popupTypeEditNameInput.value = profileTitle.textContent;
  popupTypeEditDescriptionInput.value = profileDescription.textContent;
  clearValidation(popupTypeEdit, validationConfig);
  openModal(popupTypeEdit);
});

const popupEditCloseButton = popupTypeEdit.querySelector(".popup__close");
popupEditCloseButton.addEventListener("click", function () {
  closeModal(popupTypeEdit);
});

//КНОПКА СОХРАНИТЬ В МЕНЮ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
const popupFormEdit = popupTypeEdit.querySelector(".popup__form");
const popupFormEditButton = popupFormEdit.querySelector(".popup__button");
popupFormEdit.addEventListener("submit", function (evt) {
  evt.preventDefault();
  renderLoading(popupFormEditButton, true);
  sendingInformation(
    popupTypeEditNameInput.value,
    popupTypeEditDescriptionInput.value
  )
    .then((response) => {
      profileTitle.textContent = response.name;
      profileDescription.textContent = response.about;
      closeModal(popupTypeEdit);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(popupFormEditButton, false);
    });
});

//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
const profileAddButton = document.querySelector(".profile__add-button");
profileAddButton.addEventListener("click", function () {
  clearValidation(popupTypeNewCard, validationConfig);
  openModal(popupTypeNewCard);
});

const popupAddCloseButton = popupTypeNewCard.querySelector(".popup__close");
popupAddCloseButton.addEventListener("click", function () {
  closeModal(popupTypeNewCard);
});

//КНОПКА СОХРАНИТЬ В МЕНЮ  ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
const popupFormCard = popupTypeNewCard.querySelector(".popup__form");
const popupFormCardButton = popupFormCard.querySelector(".popup__button");
popupFormCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  renderLoading(popupFormCardButton, true);
  sendingCard(popupTypeNewCardNameInput.value, popupTypeNewCardLinkInput.value)
    .then((response) => {
      cardsContainer.prepend(
        createCard(response, removeCard, likeCard, openImagePopup, userId)
      );
      popupFormCard.reset();
      closeModal(popupTypeNewCard);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(popupFormCardButton, false);
    });
});

//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ АВАТАРА
const profileAvatarButton = document.querySelector(".profile__image");
profileAvatarButton.addEventListener("click", function () {
  clearValidation(popupTypeAvatar, validationConfig);
  openModal(popupTypeAvatar);
});

const profileAvatarCloseButton = popupTypeAvatar.querySelector(".popup__close");
profileAvatarCloseButton.addEventListener("click", function () {
  closeModal(popupTypeAvatar);
});

//КНОПКА СОХРАНИТЬ В МЕНЮ  ДЛЯ ЗАМЕНЫ АВАТАРА
const popupFormAvatar = popupTypeAvatar.querySelector(".popup__form");
const popupFormAvatarButton = popupFormAvatar.querySelector(".popup__button");
popupFormAvatar.addEventListener("submit", function (evt) {
  evt.preventDefault();
  renderLoading(popupFormAvatarButton, true);
  sendingAvatar(popupTypeAvatarInput.value)
    .then((response) => {
      profileImage.setAttribute(
        "style",
        `background-image: url('${response.avatar}')`
      );
      popupFormAvatar.reset();
      closeModal(popupTypeAvatar);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      renderLoading(popupFormAvatarButton, false);
    });
});

//ЗАКРЫТИЕ ПОПАПА ИЗОБРАЖЕНИЯ
const popupImageCloseButton = popupTypeImage.querySelector(".popup__close");
popupImageCloseButton.addEventListener("click", function () {
  closeModal(popupTypeImage);
});

Promise.all([getInformation(), getCards()])
  .then((result) => {
    profileImage.setAttribute(
      "style",
      `background-image: url('${result[0].avatar}')`
    );
    profileTitle.textContent = result[0].name;
    profileDescription.textContent = result[0].about;
    userId = result[0]._id;
    result[1].forEach(function (item) {
      cardsContainer.append(
        createCard(item, removeCard, likeCard, openImagePopup, userId)
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
