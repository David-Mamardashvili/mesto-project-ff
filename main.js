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

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLike: () => (/* binding */ addLike),\n/* harmony export */   deleteLike: () => (/* binding */ deleteLike),\n/* harmony export */   downloadingCards: () => (/* binding */ downloadingCards),\n/* harmony export */   downloadingInformation: () => (/* binding */ downloadingInformation),\n/* harmony export */   unloadingAvatar: () => (/* binding */ unloadingAvatar),\n/* harmony export */   unloadingCard: () => (/* binding */ unloadingCard),\n/* harmony export */   unloadingInformation: () => (/* binding */ unloadingInformation)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ \"./src/components/card.js\");\n\n\n\n//ЗАГРУЗКА КАРТОЧЕК С СЕРВЕРА\nvar downloadingCards = function downloadingCards(userId) {\n  return fetch('https://nomoreparties.co/v1/wff-cohort-8/cards', {\n    headers: {\n      authorization: '07856970-aeab-4f5a-981c-3edd70510edb'\n    }\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n};\n\n//ЗАГРУЗКА ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ С СЕРВЕРА \nvar downloadingInformation = function downloadingInformation() {\n  return fetch('https://nomoreparties.co/v1/wff-cohort-8/users/me', {\n    headers: {\n      authorization: '07856970-aeab-4f5a-981c-3edd70510edb'\n    }\n  }).then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n    return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n  });\n};\n\n//ДОБАВЛЕНИЕ ЛАЙКА КАРТОЧКИ\nvar addLike = function addLike(cardId, userId) {\n  fetch(\"https://nomoreparties.co/v1/wff-cohort-8/cards/likes/\".concat(cardId), {\n    method: 'PUT',\n    headers: {\n      authorization: '07856970-aeab-4f5a-981c-3edd70510edb',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      likes: userId\n    })\n  });\n};\n\n//УДАЛЕНИЕ ЛАЙКА КАРТОЧКИ\nvar deleteLike = function deleteLike(cardId, userId) {\n  fetch(\"https://nomoreparties.co/v1/wff-cohort-8/cards/likes/\".concat(cardId), {\n    method: 'DELETE',\n    headers: {\n      authorization: '07856970-aeab-4f5a-981c-3edd70510edb',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      likes: userId\n    })\n  });\n};\n\n//ВЫГРУЗКА НОВОЙ КАРТОЧКИ НА СЕРВЕР\nvar unloadingCard = function unloadingCard(name, link) {\n  fetch('https://nomoreparties.co/v1/wff-cohort-8/cards ', {\n    method: 'POST',\n    headers: {\n      authorization: '07856970-aeab-4f5a-981c-3edd70510edb',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: name,\n      link: link\n    })\n  });\n};\n\n//ВЫГРУЗКА ИМЕНИ И ЗАНЯТИЯ О ПОЛЬЗОВАТЕЛЕ НА СЕРВЕР \nvar unloadingInformation = function unloadingInformation(name, about) {\n  fetch('https://nomoreparties.co/v1/wff-cohort-8/users/me', {\n    method: 'PATCH',\n    headers: {\n      authorization: '07856970-aeab-4f5a-981c-3edd70510edb',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  });\n};\n\n//ВЫГРУЗКА АВАТАРА ПОЛЬЗОВАТЕЛЯ \nvar unloadingAvatar = function unloadingAvatar(avatar) {\n  fetch('https://nomoreparties.co/v1/wff-cohort-8/users/me/avatar', {\n    method: 'PATCH',\n    headers: {\n      authorization: '07856970-aeab-4f5a-981c-3edd70510edb',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      avatar: avatar\n    })\n  });\n};\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardTemplate: () => (/* binding */ cardTemplate),\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   deleteCard: () => (/* binding */ deleteCard)\n/* harmony export */ });\nvar cardTemplate = document.querySelector('#card-template').content;\n\n//ФУНКЦИЯ ДЛЯ СОЗДАНИЯ И УДАЛЕНИЯ КАРТОЧЕК ИЗ МАССИВА\nvar createCard = function createCard(cardData, deleteCallback, likeCallback, imageCallback, userId) {\n  var cardElement = cardTemplate.cloneNode(true);\n  var cardElementImage = cardElement.querySelector('.card__image');\n  cardElement.querySelector('.card__title').textContent = cardData.name;\n  cardElementImage.src = cardData.link;\n  cardElementImage.alt = cardData.name;\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  if (userId === cardData.owner._id) {\n    deleteButton.addEventListener('click', deleteCallback);\n  } else {\n    deleteButton.remove();\n  }\n  var likeButton = cardElement.querySelector('.card__like-button');\n  likeButton.addEventListener('click', likeCallback);\n  var imageButton = cardElement.querySelector('.card__image');\n  imageButton.addEventListener('click', imageCallback);\n  return cardElement;\n};\n\n//КОЛБЭК УДАЛЕНИЯ\nvar deleteCard = function deleteCard(event) {\n  event.target.closest('.places__item').remove();\n};\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/card.js?");

/***/ }),

/***/ "./src/components/config.js":
/*!**********************************!*\
  !*** ./src/components/config.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\nvar config = {\n  formSelector: '.popup__form',\n  inputSelector: '.popup__input',\n  submitButtonSelector: '.popup__button',\n  inactiveButtonClass: 'popup__button_disabled',\n  inputErrorClass: 'popup__input_type_error',\n  noErrorClass: '.popup__error_invisible',\n  errorClass: 'popup__error_visible'\n};\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/config.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\n//ФУНКЦИЯ ОТКРЫТИЯ ПОПАПА\nfunction openModal(popup) {\n  popup.classList.add('popup_is-opened', 'popup_is-animated');\n  document.addEventListener('keydown', handleCloseByEsc);\n  popup.addEventListener('click', handleCloseByOverlay);\n}\n\n//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА\nfunction closeModal(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', handleCloseByEsc);\n  popup.removeEventListener('click', handleCloseByOverlay);\n}\n\n//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА ПО КЛИКУ НА ESCAPE\nfunction handleCloseByEsc(evt) {\n  if (evt.key === 'Escape') {\n    var popupIsOpen = document.querySelector('.popup_is-opened');\n    closeModal(popupIsOpen);\n  }\n}\n\n//ФУНКЦИЯ ЗАКРЫТИЯ ПОПАПА ПО КЛИКУ НА ОВЕРЛЕЙ\nfunction handleCloseByOverlay(evt) {\n  if (evt.target.classList.contains('popup')) {\n    closeModal(evt.target);\n  }\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validation.js":
/*!**************************************!*\
  !*** ./src/components/validation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearValidation: () => (/* binding */ clearValidation),\n/* harmony export */   enableValidation: () => (/* binding */ enableValidation)\n/* harmony export */ });\n//ФУНКЦИЯ ПОКАЗА ОШИБКИ\nvar showInputError = function showInputError(formElement, inputElement, errorMessage) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.add('popup__input_type_error');\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add('popup__error_visible');\n};\n\n//ФУНКЦИЯ СКРЫТИЯ ОШИБКИ\nvar hideInputError = function hideInputError(formElement, inputElement) {\n  var errorElement = formElement.querySelector(\".\".concat(inputElement.id, \"-error\"));\n  inputElement.classList.remove('popup__input_type_error');\n  errorElement.textContent = '';\n  errorElement.classList.remove('popup__error_visible');\n};\n\n//ФУНКЦИЯ ПРОВЕРКИ ВАЛИДАЦИИ ПОЛЯ\nvar isValid = function isValid(formElement, inputElement) {\n  if (inputElement.validity.patternMismatch) {\n    inputElement.setCustomValidity(\"Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы\");\n  } else {\n    inputElement.setCustomValidity(\"\");\n  }\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage);\n  } else {\n    hideInputError(formElement, inputElement);\n  }\n};\n\n//ФУНКЦИЯ ПРОВЕРЯЮЩАЯ ЕСТЬ ЛИ ХОТЬ ОДИН ИНПУТ КОТОРЫЙ НЕ ПРОШЕЛ ВАЛИДАЦИЮ\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (inputElement) {\n    return !inputElement.validity.valid;\n  });\n};\n\n//ФУНКЦИЯ КОТОРАЯ БЛОКИРУЕТ КНОПКУ \"ОТПРАВИТЬ\" В СЛУЧАЕ ЕСЛИ ХОТЬ ОДИН ИНПУТ НЕ ПРОШЕЛ ВАЛИДАЦИЮ\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement) {\n  if (hasInvalidInput(inputList)) {\n    buttonElement.disabled = true;\n    buttonElement.classList.add('popup__button_disabled');\n  } else {\n    buttonElement.disabled = false;\n    buttonElement.classList.remove('popup__button_disabled');\n  }\n};\n\n//ДОБАВЛЕНИЕ ОБРАБОТЧИКА ВСЕМ ПОЛЯМ\nvar setEventListeners = function setEventListeners(formElement) {\n  var inputList = Array.from(formElement.querySelectorAll('.popup__input'));\n  var buttonElement = formElement.querySelector('.popup__button');\n  toggleButtonState(inputList, buttonElement);\n  inputList.forEach(function (inputElement) {\n    inputElement.addEventListener('input', function () {\n      isValid(formElement, inputElement);\n      toggleButtonState(inputList, buttonElement);\n    });\n  });\n};\n\n//ДОБАВЛЕНИЕ ОБРАБОТЧИКА ВСЕМ ФОРМАМ\nvar enableValidation = function enableValidation() {\n  var formList = Array.from(document.querySelectorAll('.popup__form'));\n  formList.forEach(function (formElement) {\n    setEventListeners(formElement);\n  });\n};\n\n//ФУНКЦИЯ КОТОРАЯ ОЧИЩАЕТ ОШИБКИ ВАЛИДАЦИИ ФОРМЫ И ДЕЛАЕТ КНОПКУ НЕ АКТИВНОЙ\nvar clearValidation = function clearValidation(profileForm, validationConfig) {\n  var errorElements = Array.from(profileForm.querySelectorAll(validationConfig.noErrorClass));\n  errorElements.forEach(function (errorElement) {\n    errorElement.classList.remove(validationConfig.errorClass);\n    errorElement.textContent = '';\n  });\n  var inputElements = Array.from(profileForm.querySelectorAll(validationConfig.inputSelector));\n  inputElements.forEach(function (inputElement) {\n    inputElement.classList.remove(validationConfig.inputErrorClass);\n  });\n};\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/components/validation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardsContainer: () => (/* binding */ cardsContainer),\n/* harmony export */   openImagePopup: () => (/* binding */ openImagePopup),\n/* harmony export */   profileDescription: () => (/* binding */ profileDescription),\n/* harmony export */   profileImage: () => (/* binding */ profileImage),\n/* harmony export */   profileTitle: () => (/* binding */ profileTitle)\n/* harmony export */ });\n/* harmony import */ var _src_pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _src_components_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/card */ \"./src/components/card.js\");\n/* harmony import */ var _src_components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/modal */ \"./src/components/modal.js\");\n/* harmony import */ var _components_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/validation */ \"./src/components/validation.js\");\n/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/config */ \"./src/components/config.js\");\n/* harmony import */ var _components_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/api */ \"./src/components/api.js\");\n\n\n\n\n\n\nvar cardsContainer = document.querySelector('.places__list');\nvar cardLikesAmount = _src_components_card__WEBPACK_IMPORTED_MODULE_1__.cardTemplate.querySelector('.card__likes-amount');\nvar profileImage = document.querySelector('.profile__image');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar popupTypeImage = document.querySelector('.popup_type_image');\nvar popupImageImage = popupTypeImage.querySelector('.popup__image');\nvar popupImageCaption = popupTypeImage.querySelector('.popup__caption');\nvar popupTypeEdit = document.querySelector('.popup_type_edit');\nvar popupTypeEditNameInput = popupTypeEdit.querySelector('.popup__input_type_name');\nvar popupTypeEditDescriptionInput = popupTypeEdit.querySelector('.popup__input_type_description');\nvar popupTypeNewCard = document.querySelector('.popup_type_new-card');\nvar popupTypeNewCardNameInput = popupTypeNewCard.querySelector('.popup__input_type_card-name');\nvar popupTypeNewCardLinkInput = popupTypeNewCard.querySelector('.popup__input_type_url');\nvar popupTypeAvatar = document.querySelector('.popup_type_avatar');\nvar popupTypeAvatarInput = popupTypeAvatar.querySelector('.popup__input_type_url');\n\n(0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.enableValidation)();\n(0,_components_api__WEBPACK_IMPORTED_MODULE_5__.downloadingInformation)();\n(0,_components_api__WEBPACK_IMPORTED_MODULE_5__.downloadingCards)();\n\n//КОЛБЭК ИЗОБРАЖЕНИЯ\nvar openImagePopup = function openImagePopup(event) {\n  popupImageImage.src = event.target.src;\n  popupImageImage.alt = event.target.alt;\n  popupImageCaption.textContent = event.target.alt;\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupTypeImage);\n};\n\n//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ\nvar profileEditButton = document.querySelector('.profile__edit-button');\nprofileEditButton.addEventListener('click', function () {\n  popupTypeEditNameInput.value = profileTitle.textContent;\n  popupTypeEditDescriptionInput.value = profileDescription.textContent;\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(popupTypeEdit, _components_config__WEBPACK_IMPORTED_MODULE_4__.config);\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupTypeEdit);\n});\nvar popupEditCloseButton = popupTypeEdit.querySelector('.popup__close');\npopupEditCloseButton.addEventListener('click', function () {\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupTypeEdit);\n});\n\n//КНОПКА СОХРАНИТЬ В МЕНЮ РЕДАКТИРОВАНИЯ ИМЕНИ И ЗАНЯТИЯ\nvar popupFormEdit = popupTypeEdit.querySelector('.popup__form');\npopupFormEdit.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_5__.unloadingInformation)(popupTypeEditNameInput.value, popupTypeEditDescriptionInput.value);\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupTypeEdit);\n});\n\n//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ\nvar profileAddButton = document.querySelector('.profile__add-button');\nprofileAddButton.addEventListener('click', function () {\n  (0,_components_validation__WEBPACK_IMPORTED_MODULE_3__.clearValidation)(popupTypeNewCard, _components_config__WEBPACK_IMPORTED_MODULE_4__.config);\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupTypeNewCard);\n});\nvar popupAddCloseButton = popupTypeNewCard.querySelector('.popup__close');\npopupAddCloseButton.addEventListener('click', function () {\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupTypeNewCard);\n});\n\n//КНОПКА СОХРАНИТЬ В МЕНЮ  ДЛЯ СОЗДАНИЯ НОВОЙ КАРТОЧКИ\nvar popupFormCard = popupTypeNewCard.querySelector('.popup__form');\npopupFormCard.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_5__.unloadingCard)(popupTypeNewCardNameInput.value, popupTypeNewCardLinkInput.value);\n  popupFormCard.reset();\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupTypeNewCard);\n});\n\n//ОТКРЫТИЕ И ЗАКРЫТИЕ МЕНЮ АВАТАРА\nvar profileAvatarButton = document.querySelector('.profile__image');\nprofileAvatarButton.addEventListener('click', function () {\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)(popupTypeAvatar);\n});\nvar profileAvatarCloseButton = popupTypeAvatar.querySelector('.popup__close');\nprofileAvatarCloseButton.addEventListener('click', function () {\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupTypeAvatar);\n});\n\n//КНОПКА СОХРАНИТЬ В МЕНЮ  ДЛЯ ЗАМЕНЫ АВАТАРА\nvar popupFormAvatar = popupTypeAvatar.querySelector('.popup__form');\npopupFormAvatar.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  (0,_components_api__WEBPACK_IMPORTED_MODULE_5__.unloadingAvatar)(popupTypeAvatarInput.value);\n  popupFormAvatar.reset();\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupTypeAvatar);\n});\n\n//ЗАКРЫТИЕ ПОПАПА ИЗОБРАЖЕНИЯ\nvar popupImageCloseButton = popupTypeImage.querySelector('.popup__close');\npopupImageCloseButton.addEventListener('click', function () {\n  (0,_src_components_modal__WEBPACK_IMPORTED_MODULE_2__.closeModal)(popupTypeImage);\n});\nPromise.all([(0,_components_api__WEBPACK_IMPORTED_MODULE_5__.downloadingInformation)(), (0,_components_api__WEBPACK_IMPORTED_MODULE_5__.downloadingCards)()]).then(function (result) {\n  var image = document.createElement('img');\n  image.setAttribute('src', result[0].avatar);\n  profileImage.append(image);\n  profileTitle.textContent = result[0].name;\n  profileDescription.textContent = result[0].about;\n  var userId = result[0]._id;\n  result[1].forEach(function (item) {\n    var myLike = item.likes.some(function (like) {\n      return like._id === userId;\n    });\n    var likeCard = function likeCard(event) {\n      if (myLike) {\n        event.target.classList.remove('card__like-button_is-active');\n        (0,_components_api__WEBPACK_IMPORTED_MODULE_5__.deleteLike)(item._id, userId);\n      } else {\n        event.target.classList.add('card__like-button_is-active');\n        (0,_components_api__WEBPACK_IMPORTED_MODULE_5__.addLike)(item._id, userId);\n      }\n    };\n    cardLikesAmount.textContent = item.likes.length;\n    cardsContainer.append((0,_src_components_card__WEBPACK_IMPORTED_MODULE_1__.createCard)(item, _src_components_card__WEBPACK_IMPORTED_MODULE_1__.deleteCard, likeCard, openImagePopup, userId));\n  });\n}).catch(function (err) {\n  console.log(err);\n});\n\n//# sourceURL=webpack://mesto-project-ff/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;