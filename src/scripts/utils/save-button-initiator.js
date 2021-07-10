import SavedRestaurantIdb from './../data/savedrestaurant-idb.js';
import {
  createSaveButtonTemplate,
  createSavedButtonTemplate,
} from '../views/templates/template-creator';

const SaveButtonPresenter = {
  async init({saveButtonContainer, restaurant}) {
    this._saveButtonContainer = saveButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderSaved();
    } else {
      this._renderSave();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await SavedRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderSave() {
    this._saveButtonContainer.innerHTML = createSaveButtonTemplate();

    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await SavedRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderSaved() {
    this._saveButtonContainer.innerHTML = createSavedButtonTemplate();

    const saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', async () => {
      await SavedRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default SaveButtonPresenter;
