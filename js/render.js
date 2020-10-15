'use strict';
(function () {
  const setup = document.querySelector(`.setup`);
  const amountWizards = 4;

  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content.querySelector(`.setup-similar-item`);

  let renderWizards = function (wizard) {
    let newWizard = similarWizardTemplate.cloneNode(true);
    newWizard.querySelector(`.setup-similar-label`).textContent = wizard.name;
    newWizard.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    newWizard.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;
    return newWizard;
  };

  const similarWizardsList = setup.querySelector(`.setup-similar-list`);


  window.render = function (wizards) {
    const takeNumber = wizards.length > amountWizards
      ? amountWizards
      : wizards.length;

    similarWizardsList.innerHTML = ``;

    let fragment = document.createDocumentFragment();
    for (let i = 0; i < takeNumber; i++) {
      fragment.append(renderWizards(wizards[i]));
    }

    similarWizardsList.append(fragment);
    setup.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

})();
