const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeImage = document.querySelector('.popup_type_image');

//КАРТОЧКИ ИЗ МАССИВА
initialCards.forEach(function (element) {
    likeFunction();
    const elementTemplate = cardTemplate.cloneNode(true);
    elementTemplate.querySelector('.card__title').textContent = element.name;
    elementTemplate.querySelector('.card__image').src = element.link;
    elementTemplate.querySelector('.card__image').alt = element.name;
    placesList.append(elementTemplate);
    cardDelete();
    imageFunction();
    likeFunction();
})

//ФУНКЦИЯ УДАЛЕНИЯ КАРТОЧКИ
function cardDelete() {
    const deleteButton = placesList.querySelectorAll('.card__delete-button');
    const placesItemCardDelete = placesList.querySelectorAll('.places__item');

    for(let i = 0; i < deleteButton.length; i += 1) {
        deleteButton[i].addEventListener('click', function() {
            placesItemCardDelete[i].remove();
        })
    }
}

//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ
const profileEditButton = document.querySelector('.profile__edit-button');
profileEditButton.addEventListener('click', function() {
    popupTypeEdit.classList.add('popup_is-opened');
})

const popupEditCloseButton = popupTypeEdit.querySelector('.popup__close');
popupEditCloseButton.addEventListener('click', function() {
    popupTypeEdit.classList.remove('popup_is-opened');
})

//ФУНКЦИЯ ДЛЯ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
function editFunction() {
    const nameEdit = popupTypeEdit.querySelector('.popup__input_type_name');
    const descriptionEdit = popupTypeEdit.querySelector('.popup__input_type_description');
    const profile = document.querySelector('.profile');

    
    profile.querySelector('.profile__title').textContent = nameEdit.value;
    profile.querySelector('.profile__description').textContent = descriptionEdit.value;
}

//КНОПКА СОХРАНИТЬ В МЕНЮ ДЛЯ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ
const popupFormEdit = popupTypeEdit.querySelector('.popup__form');
popupFormEdit.addEventListener('submit', function(evt) {
    evt.preventDefault();
    editFunction();
});

//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ
const profileAddButton = document.querySelector('.profile__add-button');
profileAddButton.addEventListener('click', function() {
    popupTypeNewCard.classList.add('popup_is-opened');
})

const popupAddCloseButton = popupTypeNewCard.querySelector('.popup__close');
popupAddCloseButton.addEventListener('click', function() {
    popupTypeNewCard.classList.remove('popup_is-opened');
})

//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ КАРТОЧКИ 
function addCardFunction() {
likeFunction();
const nameCard = popupTypeNewCard.querySelector('.popup__input_type_card-name');
const linkCard = popupTypeNewCard.querySelector('.popup__input_type_url');
const addCardTemplate = cardTemplate.cloneNode(true);

addCardTemplate.querySelector('.card__title').textContent = nameCard.value;
addCardTemplate.querySelector('.card__image').src = linkCard.value;
addCardTemplate.querySelector('.card__image').alt = nameCard.value;
placesList.append(addCardTemplate);
cardDelete();
imageFunction();
likeFunction();
}

//КНОПКА СОХРАНИТЬ В МЕНЮ ДЛЯ СОЗДАНИЯ КАРТОЧКИ
const popupFormCard = popupTypeNewCard.querySelector('.popup__form');
popupFormCard.addEventListener('submit', function(evt) {
    evt.preventDefault();
    addCardFunction();
});

// //ОТКРЫТИЕ И ЗАКРЫТИЕ POPUP IMAGE
function imageFunction() {
    const imageButton = placesList.querySelectorAll('.card__image');
    const image = popupTypeImage.querySelector('.popup__image');
    const text = popupTypeImage.querySelector('.popup__caption');

    for (let i = 0; i < imageButton.length; i += 1) {
        imageButton[i].addEventListener('click', function() {
            image.src = imageButton[i].src;
            image.alt = imageButton[i].alt;
            text.textContent = imageButton[i].alt;
            popupTypeImage.classList.add('popup_is-opened');
        })
    }
}
const popupImageCloseButton = popupTypeImage.querySelector('.popup__close');
popupImageCloseButton.addEventListener('click', function() {
    popupTypeImage.classList.remove('popup_is-opened');
})

//КНОПКА ЛАЙК
function likeFunction() {
    const likeButton = placesList.querySelectorAll('.card__like-button');

    for(let i = 0; i < likeButton.length; i += 1) {
        likeButton[i].addEventListener('click', function() {
           likeButton[i].classList.toggle('card__like-button_is-active');
        })
    }
}