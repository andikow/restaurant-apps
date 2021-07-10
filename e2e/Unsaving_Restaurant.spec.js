const assert = require('assert');

Feature('Unsaving Restaurant');

Scenario('unsaving a restaurant', async ({I}) => {
  I.amOnPage('/');
  I.seeElement('.post-item__content');
  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(locate('.readmore__button').first());

  I.seeElement('#saveButton');
  I.click('#saveButton');
  I.amOnPage('/#/saved');
  I.seeElement('.post-item__content');
  const savedrestaurantName = await I.grabTextFrom('.post-item__title a');
    assert.strictEqual(firstRestaurantName, savedrestaurantName);
  I.amOnPage('/#/saved');
  I.seeElement('.post-item__content');
  I.click(locate('.readmore__button').first());

  I.seeElement('#saveButton');
  I.click('#saveButton');
});
