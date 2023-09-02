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

    // this.view.addEventListener('change', this.onViewChange.bind(this));
  }

  /**
   * @override
   */
  updateView() {
    /**
     * @type {Array<FilterType>}
     */
    const values = ['everything', 'future', 'past', 'present'];

    const items = values.map((value) => ({
      value,
      isSelected: value === 'everything',
      isDisabled: value === 'future'
    }));
    // @ts-ignore
    this.view.setState({items}); // ругается на типы, надо перепроверить
  }
}

export default FilterPresenter;
