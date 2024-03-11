//КОНФИГ ЗАПРОСА
const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-8",
  headers: {
    authorization: "07856970-aeab-4f5a-981c-3edd70510edb",
    "Content-Type": "application/json",
  },
};

//ФУНКЦИЯ ПРЕОБРАЗОВАНИЯ В JSON
function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

//ЗАГРУЗКА КАРТОЧЕК С СЕРВЕРА
const getCards = () => {
  return fetch(config.baseUrl + "/cards", {
    headers: config.headers,
  }).then(getResponseData);
};

//ЗАГРУЗКА ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ С СЕРВЕРА
const getInformation = () => {
  return fetch(config.baseUrl + "/users/me", {
    headers: config.headers,
  }).then(getResponseData);
};

//ОТПРАВЛЕНИЕ НОВОЙ КАРТОЧКИ НА СЕРВЕР
const sendingCard = async (name, link) => {
  const res = await fetch(config.baseUrl + "/cards", {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  })
  return await getResponseData(res);
};

//ОТПРАВЛЕНИЕ ИМЕНИ И ЗАНЯТИЯ О ПОЛЬЗОВАТЕЛЕ НА СЕРВЕР
const sendingInformation = async (name, about) => {
  const res = await fetch(config.baseUrl + "/users/me", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  });
  return await getResponseData(res);
};

//ОТПРАВЛЕНИЕ АВАТАРА ПОЛЬЗОВАТЕЛЯ
const sendingAvatar = async (avatar) => {
  const res = await fetch(config.baseUrl + "/users/me/avatar", {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  });
  return await getResponseData(res);
};

//УДАЛЕНИЕ КАРТОЧКИ С СЕРВЕРА
const deleteCard = async (cardId) => {
  const res = await fetch(config.baseUrl + `/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
  return await getResponseData(res);
};

//ДОБАВЛЕНИЕ ЛАЙКА НА СЕРВЕР
const addLike = async (cardId) => {
  const res = await fetch(config.baseUrl + `/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  });
  return await getResponseData(res);
};

//УДАЛЕНИЕ ЛАЙКА С СЕРВЕРА
const deleteLike = async (cardId) => {
  const res = await fetch(config.baseUrl + `/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
  return await getResponseData(res);
};

export { getCards, getInformation, sendingInformation, sendingAvatar, sendingCard, deleteCard, addLike, deleteLike };
