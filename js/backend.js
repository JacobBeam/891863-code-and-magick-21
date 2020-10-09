'use strict';
(function () {

  const urlLoad = `https://21.javascript.pages.academy/code-and-magick/data`;
  const statusCode = {
    OK: 200
  };
  const timeout = 10000;

  const urlSave = `https://21.javascript.pages.academy/code-and-magick`;

  window.backend = {
    load(onLoad, onError) {

      let xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        if (xhr.status === statusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError(`Произошла ошибка. Статус ответа: ${xhr.status}`);
        }
      });

      xhr.addEventListener(`error`, function () {
        onError(`Произошла ошибка соединения`);
      });

      xhr.addEventListener(`timeout`, function () {
        onError(`Запрос не успел выполниться за ${timeout} мс`);
      });

      xhr.open(`GET`, urlLoad);
      xhr.send();
    },
    save(data, onLoad, onError) {
      let xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, function () {
        if (xhr.status === statusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError(`Произошла ошибка. Статус ответа: ${xhr.status}`);
        }
      });
      xhr.open(`POST`, urlSave);
      xhr.send(data);

    }

  };

})();
