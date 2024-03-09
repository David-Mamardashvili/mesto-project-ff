//ФУНКЦИЯ ПОКАЗА ОШИБКИ
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__error_visible');
}

//ФУНКЦИЯ СКРЫТИЯ ОШИБКИ
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__input_type_error');
    errorElement.textContent = '';
    errorElement.classList.remove('popup__error_visible');
}

//ФУНКЦИЯ ПРОВЕРКИ ВАЛИДАЦИИ ПОЛЯ
const isValid = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity("Разрешены только латинские, кириллические буквы, знаки дефиса и пробелы");
    } 
    else {
    inputElement.setCustomValidity("");
    }
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else  {
        hideInputError(formElement, inputElement);
    }
}

//ФУНКЦИЯ ПРОВЕРЯЮЩАЯ ЕСТЬ ЛИ ХОТЬ ОДИН ИНПУТ КОТОРЫЙ НЕ ПРОШЕЛ ВАЛИДАЦИЮ
 const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

//ФУНКЦИЯ КОТОРАЯ БЛОКИРУЕТ КНОПКУ "ОТПРАВИТЬ" В СЛУЧАЕ ЕСЛИ ХОТЬ ОДИН ИНПУТ НЕ ПРОШЕЛ ВАЛИДАЦИЮ
const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add('popup__button_disabled');
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove('popup__button_disabled');
    }
  }; 

//ДОБАВЛЕНИЕ ОБРАБОТЧИКА ВСЕМ ПОЛЯМ
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        })
    })
}

//ДОБАВЛЕНИЕ ОБРАБОТЧИКА ВСЕМ ФОРМАМ
const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
        setEventListeners(formElement);
    })
}

//ФУНКЦИЯ КОТОРАЯ ОЧИЩАЕТ ОШИБКИ ВАЛИДАЦИИ ФОРМЫ И ДЕЛАЕТ КНОПКУ НЕ АКТИВНОЙ
const clearValidation = (profileForm, validationConfig) => {
    const errorElements = Array.from(profileForm.querySelectorAll(validationConfig.noErrorClass));
    errorElements.forEach((errorElement) => {
       errorElement.classList.remove(validationConfig.errorClass);
       errorElement.textContent = '';
    }) 
    const inputElements = Array.from(profileForm.querySelectorAll(validationConfig.inputSelector));
    inputElements.forEach((inputElement) => {
        inputElement.classList.remove(validationConfig.inputErrorClass);
    }) 
}

export { enableValidation, clearValidation };