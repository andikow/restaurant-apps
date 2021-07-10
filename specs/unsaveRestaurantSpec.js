import SavedRestaurantIdb from './../src/scripts/data/savedrestaurant-idb.js';
import * as TestFactories from './helpers/testFactories.js';

const addSaveButtonContainer = () => {
  document.body.innerHTML = '<div id="saveButtonContainer"></div>';
};

describe('Unsaving A Restaurant', () => {
  beforeEach(async () => {
    addSaveButtonContainer();
    await SavedRestaurantIdb.putRestaurant({id: 1});
  });

  afterEach(async () => {
    await SavedRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unsave widget when the restaurant has been saved',
      async () => {
        await TestFactories.createSaveButtonPresenterWithRestaurant({id: 1});

        expect(document.querySelector('[aria-label="remove this restaurant"]'))
            .toBeTruthy();
      });

  it('should not display save widget when the restaurant has been saved',
      async () => {
        await TestFactories.createSaveButtonPresenterWithRestaurant({id: 1});

        expect(document.querySelector('[aria-label="save this restaurant"]'))
            .toBeFalsy();
      });

  it('should be able to remove saved restaurant from the list',
      async () => {
        await TestFactories.createSaveButtonPresenterWithRestaurant({id: 1});

        document.querySelector('[aria-label="remove this restaurant"]').
            dispatchEvent(new Event('click'));

        expect(await SavedRestaurantIdb.getAllRestaurant()).toEqual([]);
      });

  it('should not throw error if the unsaved restaurant is not in the list',
      async () => {
        await TestFactories.createSaveButtonPresenterWithRestaurant({id: 1});

        // hapus dulu restoran dari daftar restoran yang disimpan
        await SavedRestaurantIdb.deleteRestaurant(1);

        // lalu, simulasikan pengguna menekan widget batal menyimpan restoran
        document.querySelector('[aria-label="remove this restaurant"]').
            dispatchEvent(new Event('click'));

        expect(await SavedRestaurantIdb.getAllRestaurant()).toEqual([]);
      });
});
