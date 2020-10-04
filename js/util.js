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
    }
  };

})();
