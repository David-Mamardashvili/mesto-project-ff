//КОНФИГ ЗАПРОСА
const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-8",
  headers: {
    authorization: "07856970-aeab-4f5a-981c-3edd70510edb",
    "Content-Type": "application/json",
  },
};

//ЗАГРУЗКА КАРТОЧЕК С СЕРВЕРА
const downloadingCards = () => {
  return fetch(config.baseUrl + "/cards", {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//ЗАГРУЗКА ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ С СЕРВЕРА
const downloadingInformation = () => {
  return fetch(config.baseUrl + "/users/me", {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
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
  });
  return await res.json();
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
  return await res.json();
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
  return await res.json();
};

//УДАЛЕНИЕ КАРТОЧКИ С СЕРВЕРА
const deleteCard = async (cardId) => {
  const res = await fetch(config.baseUrl + `/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
  return await res.json();
};

//ДОБАВЛЕНИЕ ЛАЙКА НА СЕРВЕР
const addLike = async (cardId) => {
  const res = await fetch(config.baseUrl + `/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  });
  return await res.json();
};

//УДАЛЕНИЕ ЛАЙКА С СЕРВЕРА
const deleteLike = async (cardId) => {
  const res = await fetch(config.baseUrl + `/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  });
  return await res.json();
};

export {
  downloadingCards,
  downloadingInformation,
  sendingInformation,
  sendingAvatar,
  sendingCard,
  deleteCard,
  addLike,
  deleteLike,
};
