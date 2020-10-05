'use strict';
(function () {
  const setup = document.querySelector(`.setup`);


  const names = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const surnames = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const coatColos = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];
  const fireballColors = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const amountWizards = 4;

  let getRandomName = function (arrNames, arrSurnames) {
    let randomName = arrNames[window.util.getRandomNumber(0, arrNames.length - 1)];
    let randomSurname = arrSurnames[window.util.getRandomNumber(0, arrSurnames.length - 1)];
    return (0.5 - Math.random() <= 0) ? `${randomName} ${randomSurname}` : `${randomSurname} ${randomName}`;
  };


  let getArrayWizards = function (arrNames, arrSurnames, arrCoatColos, arrEyesColors, amount) {
    let arrayWizards = [];

    for (let i = 0; i < amount; i++) {
      let objWizard = {
        name: getRandomName(arrNames, arrSurnames),
        coatColor: arrCoatColos[window.util.getRandomNumber(0, arrCoatColos.length - 1)],
        eyesColor: arrEyesColors[window.util.getRandomNumber(0, arrEyesColors.length - 1)]
      };
      arrayWizards[i] = objWizard;
    }

    return arrayWizards;
  };

  let wizards = getArrayWizards(names, surnames, coatColos, eyesColors, amountWizards);

  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content.querySelector(`.setup-similar-item`);

  let renderWizards = function (wizard) {
    let newWizard = similarWizardTemplate.cloneNode(true);
    newWizard.querySelector(`.setup-similar-label`).textContent = wizard.name;
    newWizard.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    newWizard.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
    return newWizard;
  };

  let getWizardsBlock = function (array) {
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < array.length; i++) {
      fragment.append(renderWizards(array[i]));
    }
    return fragment;
  };

  const similarWizardsList = setup.querySelector(`.setup-similar-list`);
  similarWizardsList.append(getWizardsBlock(wizards));

  setup.querySelector(`.setup-similar`).classList.remove(`hidden`);


  const setupPlayerCoat = setup.querySelector(`.wizard-coat`);
  const inputPlayerCoat = setup.querySelector(`input[name="coat-color"]`);

  window.colorize(setupPlayerCoat, inputPlayerCoat, coatColos);

  const setupPlayerEyes = setup.querySelector(`.wizard-eyes`);
  const inputPlayerEyes = setup.querySelector(`input[name="eyes-color"]`);


  window.colorize(setupPlayerEyes, inputPlayerEyes, eyesColors);

  const setupPlayerFireball = setup.querySelector(`.setup-fireball-wrap`);
  const inputPlayerFireball = setup.querySelector(`input[name="fireball-color"]`);

  window.colorize(setupPlayerFireball, inputPlayerFireball, fireballColors);

})();
