import View from './views.js';
import {html} from '../utils.js';

/**
  * @typedef {{
  * value: FilterType
  * isSelectable: boolean
  * isDisabled: boolean
  * }} ItemState
  *
  * @typedef {{
  *  items: Array<ItemState>
  * }} State
  *
  * @extends {View<State>}
  */

class FilterView extends View {
  constructor() {
    super();
    this.classList.add('trip-filters');
  }

  /**
   * @override
   */
  createHtml() {
    return html`
    <form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">
      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
      <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">
      <label class="trip-filters__filter-label" for="filter-present">Present</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
      <label class="trip-filters__filter-label" for="filter-past">Past</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
    `;
  }
}

customElements.define('filter-view', FilterView);

export default FilterView;
