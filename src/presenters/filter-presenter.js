import Presenter from './presenter.js';

/**
 * @typedef {import('../views/filter-view').default} View
 * @typedef {import('../models/app-model').default} Model
 *
 * @extends {Presenter<View, Model>}
 */
class FilterPresenter extends Presenter {
  /**
   * @param {[View, Model]} rest
   */
  constructor(...rest) {
    super(...rest);

    this.view.addEventListener('change', this.onViewChange.bind(this));
  }

  /**
   * @override
   */
  updateView() {
    /**
     * @type {Array<FilterType>}
     */
    const values = ['everything', 'future', 'present', 'past'];
    const {filter = 'everything'} = this.navigation.getParams();

    const items = values.map((value) => ({
      value,
      isSelected: value === filter,
      isDisabled: false
    }));
    // @ts-ignore
    this.view.setState({items}); // ругается на типы, надо перепроверить
  }

  /**
  * @param {Event & {
  *  target: HTMLInputElement & {
   *  value: FilterType
   *  }
   * }} event
  */
  onViewChange(event) {
    const params = this.navigation.getParams();

    delete params.filter;
    params.filter = event.target.value;
    this.navigation.setParams(params);
  }
}

export default FilterPresenter;
