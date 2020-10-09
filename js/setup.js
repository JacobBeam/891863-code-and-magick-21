'use strict';
(function () {
  const setup = document.querySelector(`.setup`);
  const coatColos = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const eyesColors = [`black`, `red`, `blue`, `yellow`, `green`];
  const fireballColors = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const amountWizards = 4;

  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content.querySelector(`.setup-similar-item`);

  let renderWizards = function (wizard) {
    let newWizard = similarWizardTemplate.cloneNode(true);
    newWizard.querySelector(`.setup-similar-label`).textContent = wizard.name;
    newWizard.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    newWizard.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
    return newWizard;
  };

  const similarWizardsList = setup.querySelector(`.setup-similar-list`);

  let successHandler = function (wizards) {
    window.util.shuffleArray(wizards);
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < amountWizards; i++) {
      fragment.append(renderWizards(wizards[i]));
    }

    similarWizardsList.append(fragment);
    setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };


  let errorHandler = function (errorMessage) {
    let node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `fixed`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.backend.load(successHandler, errorHandler);


  const setupPlayerCoat = setup.querySelector(`.wizard-coat`);
  const inputPlayerCoat = setup.querySelector(`input[name="coat-color"]`);

  window.colorize(setupPlayerCoat, inputPlayerCoat, coatColos);

  const setupPlayerEyes = setup.querySelector(`.wizard-eyes`);
  const inputPlayerEyes = setup.querySelector(`input[name="eyes-color"]`);


  window.colorize(setupPlayerEyes, inputPlayerEyes, eyesColors);

  const setupPlayerFireball = setup.querySelector(`.setup-fireball-wrap`);
  const inputPlayerFireball = setup.querySelector(`input[name="fireball-color"]`);

  window.colorize(setupPlayerFireball, inputPlayerFireball, fireballColors);

  const form = setup.querySelector(`.setup-wizard-form`);


  let setupHidden = function () {
    setup.classList.add(`hidden`);
  };

  form.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), setupHidden, errorHandler);

  });


})();
