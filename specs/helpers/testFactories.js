import SaveButtonPresenter
  from './../../src/scripts/utils/save-button-initiator.js';

const createSaveButtonPresenterWithRestaurant = async (restaurant) => {
  await SaveButtonPresenter.init({
    saveButtonContainer: document.querySelector('#saveButtonContainer'),
    restaurant,
  });
};

export {createSaveButtonPresenterWithRestaurant};
