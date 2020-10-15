'use strict';
(function () {

  let DEBOUNCE_INTERVAL = 300;

  window.util = {
    debounce(cb) {
      let lastTimeout = null;

      return function () {
        let parameters = arguments;
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(function () {

          cb.apply(null, parameters);
        }, DEBOUNCE_INTERVAL);

        // if (lastTimeout) {
        //  window.clearTimeout(lastTimeout);
        // }
        // lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
      };
    },
    isEscEvent(evt, action, input) {
      if (evt.key === `Escape` && input !== document.activeElement) {
        action();
      }
    },
    isEnterEvent(evt, action) {
      if (evt.key === `Enter`) {
        action();
      }
    },
    getRandomNumber(min, max) {
      let random = min + Math.random() * (max + 1 - min);
      return Math.floor(random);
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    getRandomElement(array) {
      const randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    },
    createErrorMessage(errorMessage) {
      let node = document.createElement(`div`);
      node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
      node.style.position = `fixed`;
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = `30px`;

      node.textContent = errorMessage;
      document.body.insertAdjacentElement(`afterbegin`, node);
    }
  };

})();
