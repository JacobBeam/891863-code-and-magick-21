'use strict';
(function () {

  const setup = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = setup.querySelector(`.setup-close`);
  const inputName = setup.querySelector(`.setup-user-name`);

  let setupStartComputedStyle = getComputedStyle(setup);
  const setupStartPositionX = setupStartComputedStyle.top;
  const setupStartPositionY = setupStartComputedStyle.left;


  let onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup, inputName);
  };

  let openPopup = function () {
    setup.style.top = setupStartPositionX;
    setup.style.left = setupStartPositionY;

    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);
  };

  let closePopup = function () {
    setup.classList.add(`hidden`);

    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, openPopup());
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    window.util.isEnterEvent(evt, closePopup());
  });

})();
