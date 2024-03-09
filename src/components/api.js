import { cardsContainer, openImagePopup, profileTitle, profileDescription, profileImage } from '../index'
import { createCard, deleteCard, likeCard } from './card';

//ЗАГРУЗКА КАРТОЧЕК С СЕРВЕРА
const downloadingCards = (userId) => {
    return fetch('https://nomoreparties.co/v1/wff-cohort-8/cards', {
        headers: {
            authorization:'07856970-aeab-4f5a-981c-3edd70510edb'
        }
    })
    .then(res => {
        if (res.ok) {
        return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

//ЗАГРУЗКА ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ С СЕРВЕРА 
const downloadingInformation = () => {
    return fetch('https://nomoreparties.co/v1/wff-cohort-8/users/me', {
        headers: {
            authorization:'07856970-aeab-4f5a-981c-3edd70510edb'
        }
    })
    .then(res => {
        if (res.ok) {
        return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

//ДОБАВЛЕНИЕ ЛАЙКА КАРТОЧКИ
const addLike = (cardId, userId) => {
    fetch(`https://nomoreparties.co/v1/wff-cohort-8/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization:'07856970-aeab-4f5a-981c-3edd70510edb',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            likes: userId
            })
        })
}

//УДАЛЕНИЕ ЛАЙКА КАРТОЧКИ
const deleteLike = (cardId, userId) => {
    fetch(`https://nomoreparties.co/v1/wff-cohort-8/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization:'07856970-aeab-4f5a-981c-3edd70510edb',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            likes: userId
            })
        })
}

//ВЫГРУЗКА НОВОЙ КАРТОЧКИ НА СЕРВЕР
const unloadingCard = (name, link) => {
    fetch('https://nomoreparties.co/v1/wff-cohort-8/cards ', {
    method: 'POST',
    headers: {
        authorization:'07856970-aeab-4f5a-981c-3edd70510edb',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name, 
        link: link
        })
    })
}

//ВЫГРУЗКА ИМЕНИ И ЗАНЯТИЯ О ПОЛЬЗОВАТЕЛЕ НА СЕРВЕР 
const unloadingInformation = (name, about) => {   
    fetch('https://nomoreparties.co/v1/wff-cohort-8/users/me', {
    method: 'PATCH',
    headers: {
        authorization:'07856970-aeab-4f5a-981c-3edd70510edb',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        about: about
        })
    })
}

//ВЫГРУЗКА АВАТАРА ПОЛЬЗОВАТЕЛЯ 
const unloadingAvatar = (avatar) => {
    fetch('https://nomoreparties.co/v1/wff-cohort-8/users/me/avatar', {
        method: 'PATCH',
        headers: {
            authorization:'07856970-aeab-4f5a-981c-3edd70510edb',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: avatar
            })
        })
}

export { downloadingCards, downloadingInformation, unloadingInformation, unloadingAvatar, unloadingCard, addLike, deleteLike };