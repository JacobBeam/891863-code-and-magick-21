'use strict';

const setup = document.querySelector(`.setup`);


const names = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const surnames = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const coatColos = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];
const fireballColors = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const amountWizards = 4;

let getRandomNumber = function (min, max) {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

let getRandomName = function (arrNames, arrSurnames) {
  let randomName = arrNames[getRandomNumber(0, arrNames.length - 1)];
  let randomSurname = arrSurnames[getRandomNumber(0, arrSurnames.length - 1)];

  return (0.5 - Math.random() <= 0) ? `${randomName} ${randomSurname}` : `${randomSurname} ${randomName}`;
};

let getArrayWizards = function (arrNames, arrSurnames, arrCoatColos, arrEyesColors, amount) {
  let arrayWizards = [];

  for (let i = 0; i < amount; i++) {
    let objWizard = {
      name: getRandomName(arrNames, arrSurnames),
      coatColor: arrCoatColos[getRandomNumber(0, arrCoatColos.length - 1)],
      eyesColor: arrEyesColors[getRandomNumber(0, arrEyesColors.length - 1)]
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

const setupOpen = document.querySelector(`.setup-open`);
const setupClose = setup.querySelector(`.setup-close`);
const inputName = setup.querySelector(`.setup-user-name`);


const onPopupEscPress = function (evt) {
  if (evt.key === `Escape` && inputName !== document.activeElement) {
    evt.preventDefault();
    closePopup();
  }
};


const openPopup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    evt.preventDefault();
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    evt.preventDefault();
    closePopup();
  }
});


const setupPlayerCoat = setup.querySelector(`.wizard-coat`);
const inputPlayerCoat = setup.querySelector(`input[name="coat-color"]`);

setupPlayerCoat.addEventListener(`click`, function () {
  setupPlayerCoat.style.fill = coatColos[getRandomNumber(0, coatColos.length - 1)];
  inputPlayerCoat.value = setupPlayerCoat.style.fill;
});

const setupPlayerEyes = setup.querySelector(`.wizard-eyes`);
const inputPlayerEyes = setup.querySelector(`input[name="eyes-color"]`);

setupPlayerEyes.addEventListener(`click`, function () {
  setupPlayerEyes.style.fill = eyesColors[getRandomNumber(0, eyesColors.length - 1)];
  inputPlayerEyes.value = setupPlayerEyes.style.fill;
});

const setupPlayerFireball = setup.querySelector(`.setup-fireball-wrap`);
const inputPlayerFireball = setup.querySelector(`input[name="fireball-color"]`);

setupPlayerFireball.addEventListener(`click`, function () {
  setupPlayerFireball.style.backgroundColor = fireballColors[getRandomNumber(0, fireballColors.length - 1)];
  inputPlayerFireball.value = setupPlayerFireball.style.backgroundColor;
});
