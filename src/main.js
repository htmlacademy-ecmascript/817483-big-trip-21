import './views/brief-view.js';
import './views/filter-view.js';
import './views/add-button-view.js';
import './views/sort-view.js';


/**
 * @type { import('./views/brief-view.js').default }
 */
const briefView = document.querySelector('brief-view');

/**
 * @type { import('./views/filter-view.js').default }
 */
const filterView = document.querySelector('filter-view');

/**
 * @type { import('./views/add-button-view.js').default }
 */
const addButtonView = document.querySelector('add-button-view');

/**
 * @type { import('./views/sort-view.js').default }
 */
const sortView = document.querySelector('sort-view');

sortView.render();
addButtonView.render();
briefView.render();
filterView.render();

