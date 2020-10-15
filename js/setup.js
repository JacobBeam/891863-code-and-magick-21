'use strict';
(function () {

  let coatColor = `rgb(101, 137, 164)`;
  let eyesColor = `black`;

  let wizards = [];

  const getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  const namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  const updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      let rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  let successHandler = function (data) {
    wizards = data;
    updateWizards();
  };


  let errorHandler = function (errorMessage) {
    window.util.createErrorMessage(errorMessage);
  };

  window.backend.load(successHandler, errorHandler);

  const setup = document.querySelector(`.setup`);
  const form = setup.querySelector(`.setup-wizard-form`);


  let setupHidden = function () {
    setup.classList.add(`hidden`);
  };

  form.addEventListener(`submit`, function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), setupHidden, errorHandler);

  });


  // window.wizard.setEyesChangeHandler(window.util.debounce(function (color) {
  //  eyesColor = color;
  //  updateWizards();
  // }));

  // window.wizard.setCoatChangeHandler(window.util.debounce(function (color) {
  //  coatColor = color;
  //  updateWizards();
  // }));


  window.wizard.setEyesChangeHandler(function (color) {
    eyesColor = color;

    window.util.debounce(updateWizards);
  });

  window.wizard.setCoatChangeHandler(function (color) {
    coatColor = color;

    window.util.debounce(updateWizards);
  });


})();
