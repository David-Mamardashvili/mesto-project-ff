import { handleCloseByEsc, handleCloseByOverlay } from '../components/card';

//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА
function openModal(popup) {
    popup.classList.add('popup_is-opened', 'popup_is-animated');
    document.addEventListener('keydown', handleCloseByEsc)
    popup.addEventListener('click', handleCloseByOverlay);
}
//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА
function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleCloseByEsc)
    popup.removeEventListener('click', handleCloseByOverlay);
}

export { openModal, closeModal }; 
