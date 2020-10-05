'use strict';
(function () {

  window.colorize = function (element, input, colors) {
    element.addEventListener(`click`, function () {
      if (element.tagName === `DIV`) {
        element.style.backgroundColor = colors[window.util.getRandomNumber(0, colors.length - 1)];
      } else {
        element.style.fill = colors[window.util.getRandomNumber(0, colors.length - 1)];
      }
      input.value = element.style.fill;
    });
  };
})();
