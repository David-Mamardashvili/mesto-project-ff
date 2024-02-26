/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard),\n/* harmony export */   likeCard: () => (/* binding */ likeCard)\n/* harmony export */ });\nvar cardTemplate = document.querySelector('#card-template').content;\n\n//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ И УДАЛЕНИЯ КАРТОЧЕК ИЗ МАССИВА\nvar createCard = function createCard(cardData, deleteCallback, likeCallback, imageCallback) {\n  var cardElement = cardTemplate.cloneNode(true);\n  var cardElementImage = cardElement.querySelector('.card__image');\n  cardElement.querySelector('.card__title').textContent = cardData.name;\n  cardElementImage.src = cardData.link;\n  cardElementImage.alt = cardData.name;\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  deleteButton.addEventListener('click', deleteCallback);\n  var likeButton = cardElement.querySelector('.card__like-button');\n  likeButton.addEventListener('click', likeCallback);\n  var imageButton = cardElement.querySelector('.card__image');\n  imageButton.addEventListener('click', imageCallback);\n  return cardElement;\n};\n\n//КОЛБЭК УДАЛЕНИЯ\nvar deleteCard = function deleteCard(event) {\n  event.target.closest('.places__item').remove();\n};\n\n//КОЛБЭК ЛАЙКА\nvar likeCard = function likeCard(event) {\n  event.target.classList.toggle('card__like-button_is-active');\n};\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА\nfunction openModal(popup) {\n  popup.classList.add('popup_is-opened', 'popup_is-animated');\n  document.addEventListener('keydown', handleCloseByEsc);\n  popup.addEventListener('click', handleCloseByOverlay);\n}\n\n//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА \nfunction closeModal(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', handleCloseByEsc);\n  popup.removeEventListener('click', handleCloseByOverlay);\n}\n\n//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА ПО КЛИКУ НА ESCAPE\nfunction handleCloseByEsc(evt) {\n  if (evt.key === 'Escape') {\n    var popupIsOpen = document.querySelector('.popup_is-opened');\n    closeModal(popupIsOpen);\n  }\n}\n\n//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА ПО КЛИКУ НА ОВЕРЛЕЙ\nfunction handleCloseByOverlay(evt) {\n  if (evt.target.classList.contains('popup')) {\n    closeModal(evt.target);\n  }\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _src_scripts_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/scripts/cards */ \"./src/scripts/cards.js\");\n/* harmony import */ var _src_components_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/card */ \"./src/components/card.js\");\n/* harmony import */ var _src_components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/modal */ \"./src/components/modal.js\");\n\n\n\n\nvar cardsContainer = document.querySelector('.places__list');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar popupTypeImage = document.querySelector('.popup_type_image');\nvar popupImageImage = popupTypeImage.querySelector('.popup__image');\nvar popupImageCaption = popupTypeImage.querySelector('.popup__caption');\nvar popupTypeEdit = document.querySelector('.popup_type_edit');\nvar popupTypeEditNameInput = popupTypeEdit.querySelector('.popup__input_type_name');\nvar popupTypeEditDescriptionInput = popupTypeEdit.querySelector('.popup__input_type_description');\nvar popupTypeNewCard = document.querySelector('.popup_type_new-card');\nvar popupTypeNewCardNameInput = popupTypeNewCard.querySelector('.popup__input_type_card-name');\nvar popupTypeNewCardLinkInput = popupTypeNewCard.querySelector('.popup__input_type_url');\n\n// //КОЛБЭК ИЗОБРАЖЕНИЯ\nvar openImagePopup = function openImagePopup(event) {\n  popupImageImage.src = event.target.src;\n  popupImageImage.alt = event.target.alt;\n  popupImageCaption.textContent = event.target.alt;\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupTypeImage);\n};\n\n//СОЗДАНИЕ\n_src_scripts_cards__WEBPACK_IMPORTED_MODULE_1__.initialCards.forEach(function (item) {\n  cardsContainer.append((0,_src_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)(item, _src_components_card__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _src_components_card__WEBPACK_IMPORTED_MODULE_2__.likeCard, openImagePopup));\n});\n\n//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ\nvar profileEditButton = document.querySelector('.profile__edit-button');\nprofileEditButton.addEventListener('click', function () {\n  popupTypeEditNameInput.value = profileTitle.textContent;\n  popupTypeEditDescriptionInput.value = profileDescription.textContent;\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupTypeEdit);\n});\nvar popupEditCloseButton = popupTypeEdit.querySelector('.popup__close');\npopupEditCloseButton.addEventListener('click', function () {\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupTypeEdit);\n});\n\n//ФУНКЦИЯ ДЛЯ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ\nfunction updateProfileInfo() {\n  profileTitle.textContent = popupTypeEditNameInput.value;\n  profileDescription.textContent = popupTypeEditDescriptionInput.value;\n}\n\n//КНОПКА СОХРАНИТЬ В МЕНЮ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ\nvar popupFormEdit = popupTypeEdit.querySelector('.popup__form');\npopupFormEdit.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  updateProfileInfo();\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupTypeEdit);\n});\n\n//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ\nvar profileAddButton = document.querySelector('.profile__add-button');\nprofileAddButton.addEventListener('click', function () {\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(popupTypeNewCard);\n});\nvar popupAddCloseButton = popupTypeNewCard.querySelector('.popup__close');\npopupAddCloseButton.addEventListener('click', function () {\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupTypeNewCard);\n});\n\n//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ \nfunction addCard() {\n  var cardData = {\n    name: popupTypeNewCardNameInput.value,\n    link: popupTypeNewCardLinkInput.value\n  };\n  cardsContainer.prepend((0,_src_components_card__WEBPACK_IMPORTED_MODULE_2__.createCard)(cardData, _src_components_card__WEBPACK_IMPORTED_MODULE_2__.deleteCard, _src_components_card__WEBPACK_IMPORTED_MODULE_2__.likeCard, openImagePopup));\n}\n\n//КНОПКА СОХРАНИТЬ В МЕНЮ  ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ\nvar popupFormCard = popupTypeNewCard.querySelector('.popup__form');\npopupFormCard.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  addCard();\n  popupFormCard.reset();\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupTypeNewCard);\n});\n\n//ЗАКРЫТИЕ ПОПАПА ИЗОБРАЖЕНИЯ\nvar popupImageCloseButton = popupTypeImage.querySelector('.popup__close');\npopupImageCloseButton.addEventListener('click', function () {\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(popupTypeImage);\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/cards.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;