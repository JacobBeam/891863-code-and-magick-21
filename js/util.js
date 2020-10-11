'use strict';
(function () {

  window.util = {
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
    }
  };

})();
