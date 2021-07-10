import SavedRestaurantIdb from './../src/scripts/data/savedrestaurant-idb.js';
import * as TestFactories from './helpers/testFactories.js';
const addSaveButtonContainer = () => {
  document.body.innerHTML = '<div id="saveButtonContainer"></div>';
};

describe('Saving A Restaurant', () => {
  beforeEach(() => {
    addSaveButtonContainer();
  });

  it('should show save button when the restaurant has not been saved before',
      async () => {
        await TestFactories.createSaveButtonPresenterWithRestaurant({id: 1});

        expect(document.querySelector('[aria-label="save this restaurant"]'))
            .toBeTruthy();
      });

  it('should not show the unsave button when restaurant not been saved before',
      async () => {
        await TestFactories.createSaveButtonPresenterWithRestaurant({id: 1});

        expect(document.querySelector('[aria-label="remove this restaurant"]'))
            .toBeFalsy();
      });

  it('should be able to save the restaurant',
      async () => {
        await TestFactories.createSaveButtonPresenterWithRestaurant({id: 1});
        document.querySelector('#saveButton').dispatchEvent(new Event('click'));
        const restaurant = await SavedRestaurantIdb.getRestaurant(1);
        expect(restaurant).toEqual({id: 1});

        SavedRestaurantIdb.deleteRestaurant(1);
      });

  it('should not add a restaurant again when its already saved',
      async () => {
        await TestFactories.createSaveButtonPresenterWithRestaurant({id: 1});

        // Tambahkan Restoran dengan ID 1 ke daftar restoran yang disimpan
        await SavedRestaurantIdb.putRestaurant({id: 1});
        // Simulasikan pengguna menekan tombol simpan restoran
        document.querySelector('#saveButton').dispatchEvent(new Event('click'));
        // tidak ada restoran yang ganda
        expect(await SavedRestaurantIdb.getAllRestaurant()).toEqual([{id: 1}]);
        SavedRestaurantIdb.deleteRestaurant(1);
      });

  it('should not add a restaurant when it has no id',
      async () => {
        await TestFactories.createSaveButtonPresenterWithRestaurant({});

        document.querySelector('#saveButton').dispatchEvent(new Event('click'));
        expect(await SavedRestaurantIdb.getAllRestaurant()).toEqual([]);
      });
});
