//ФУНКЦИЯ ПОКАЗА ОШИБКИ
const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(validationConfig.errorClass);
}

//ФУНКЦИЯ СКРЫТИЯ ОШИБКИ
const hideInputError = (formElement, inputElement, validationConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(validationConfig.errorClass);
}

//ФУНКЦИЯ ПРОВЕРКИ ВАЛИДАЦИИ ПОЛЯ
const isValid = (formElement, inputElement, validationConfig) => {
    if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } 
    else {
    inputElement.setCustomValidity("");
    }
    if(!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
    }
    else  {
        hideInputError(formElement, inputElement, validationConfig);
    }
}

//ФУНКЦИЯ ПРОВЕРЯЮЩАЯ ЕСТЬ ЛИ ХОТЬ ОДИН ИНПУТ КОТОРЫЙ НЕ ПРОШЕЛ ВАЛИДАЦИЮ
 const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

//ФУНКЦИЯ КОТОРАЯ БЛОКИРУЕТ КНОПКУ "ОТПРАВИТЬ" В СЛУЧАЕ ЕСЛИ ХОТЬ ОДИН ИНПУТ НЕ ПРОШЕЛ ВАЛИДАЦИЮ
const toggleButtonState = (inputList, buttonElement, validationConfig) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        buttonElement.classList.add(validationConfig.inactiveButtonClass);
    } else {
        buttonElement.disabled = false;
        buttonElement.classList.remove(validationConfig.inactiveButtonClass);
    }
  }; 

//ДОБАВЛЕНИЕ ОБРАБОТЧИКА ВСЕМ ПОЛЯМ
const setEventListeners = (formElement, validationConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, validationConfig);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, validationConfig);
            toggleButtonState(inputList, buttonElement, validationConfig);
        })
    })
}

//ДОБАВЛЕНИЕ ОБРАБОТЧИКА ВСЕМ ФОРМАМ
const enableValidation = (validationConfig) => {
    const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, validationConfig);
    })
}

//ФУНКЦИЯ КОТОРАЯ ОЧИЩАЕТ ОШИБКИ ВАЛИДАЦИИ ФОРМЫ И ДЕЛАЕТ КНОПКУ НЕ АКТИВНОЙ
const clearValidation = (profileForm, validationConfig) => {
    const buttonElement= profileForm.querySelector(validationConfig.submitButtonSelector);
    buttonElement.disabled = true;
    buttonElement.classList.add(validationConfig.inactiveButtonClass);
    const inputElements = Array.from(profileForm.querySelectorAll(validationConfig.inputSelector));
    inputElements.forEach((inputElement) => {
        hideInputError(profileForm, inputElement, validationConfig)
    }) 
}

export { enableValidation, clearValidation };