//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА
function openModal(popup) {
    popup.classList.add('popup_is-opened', 'popup_is-animated');
}
//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА
function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
}

export { openModal, closeModal }; 