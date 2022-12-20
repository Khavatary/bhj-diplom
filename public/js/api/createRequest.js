/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

const createRequest = (options = {}, callback) => {
  const xhr = new XMLHttpRequest;
  xhr.responseType = `json`;
  const formData = new FormData;
  if (options.method != `GET`) {
    for (let input in options.data) {
      formData.append(`${input}`, options.data[input])
    }
  }
  try {
    xhr.open(options.method, options.url);
    xhr.send(formData);
    xhr.addEventListener(`load`, () => {
      if (xhr.status === 200 && xhr.readyState === 4) {
        callback(xhr.response);
      }
    });
    xhr.onerror = function () {
      console.error(`Ошибка соединения!`)
    };  
  } catch (err) {
    callback(err);
  }
}