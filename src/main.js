import './views/brief-view.js';
import './views/filter-view.js';
import './views/add-button-view.js';
import './views/sort-view.js';
import './views/list-view.js';

import AppModel from './models/app-model.js';

import BriefPresenter from './presenters/brief-presenter.js';
import FilterPresenter from './presenters/filter-presenter.js';
import AddButtonPresenter from './presenters/add-button-presenter.js';
import SortPresenter from './presenters/sort-presenter.js';
import ListPresenter from './presenters/list-presenter.js';


const appModel = new AppModel();
appModel.ready().then(() => {
  new BriefPresenter(document.querySelector('brief-view'), appModel);
  new FilterPresenter(document.querySelector('filter-view'), appModel);
  new AddButtonPresenter(document.querySelector('add-button-view'), appModel);
  new SortPresenter(document.querySelector('sort-view'), appModel);
  new ListPresenter(document.querySelector('list-view'), appModel);
});
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

/**
 * @type { import('./views/list-view.js').default }
 */
const listView = document.querySelector('list-view');

listView.render();
sortView.render();
addButtonView.render();
briefView.render();
filterView.render();

