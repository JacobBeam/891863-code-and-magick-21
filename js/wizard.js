'use strict';
(function () {
  const setup = document.querySelector(`.setup`);
  const coatColosArray = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const eyesColorsArray = [`black`, `red`, `blue`, `yellow`, `green`];
  const fireballColors = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];

  let wizard = {
    onEyesChange: function () { },
    onCoatChange: function () { }
  };

  const setupPlayerCoat = setup.querySelector(`.wizard-coat`);
  const inputPlayerCoat = setup.querySelector(`input[name="coat-color"]`);

  setupPlayerCoat.addEventListener(`click`, function (evt) {
    let newColor = window.util.getRandomElement(coatColosArray);
    evt.target.style.fill = newColor;
    inputPlayerCoat.value = newColor;
    wizard.onCoatChange(newColor);
  });

  const setupPlayerEyes = setup.querySelector(`.wizard-eyes`);
  const inputPlayerEyes = setup.querySelector(`input[name="eyes-color"]`);

  setupPlayerEyes.addEventListener(`click`, function (evt) {
    let newColor = window.util.getRandomElement(eyesColorsArray);
    evt.target.style.fill = newColor;
    inputPlayerEyes.value = newColor;
    wizard.onEyesChange(newColor);
  });


  const setupPlayerFireball = setup.querySelector(`.setup-fireball-wrap`);
  const inputPlayerFireball = setup.querySelector(`input[name="fireball-color"]`);

  setupPlayerFireball.addEventListener(`click`, function (evt) {
    let newColor = window.util.getRandomElement(fireballColors);
    evt.target.style.backgroundColor = newColor;
    inputPlayerFireball.value = newColor;
  });


  window.wizard = {
    setCoatChangeHandler(cb) {
      wizard.onCoatChange = cb;
    },

    setEyesChangeHandler(cb) {
      wizard.onEyesChange = cb;
    }
  };

})();
