import Presenter from './presenter.js';

/**
 * @typedef {import('../views/sort-view').default} View
 * @typedef {import('../models/app-model').default} Model
 *
 * @extends {Presenter<View, Model>}
 */
class SortPresenter extends Presenter {
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
     * @type {Array<SortType>}
     */
    const values = ['day', 'event', 'offers', 'price', 'time'];
    const {sort = 'day'} = this.navigation.getParams();

    const items = values.map((value) => ({
      value,
      isSelected: value === sort,
      isDisabled: value === 'event' || value === 'offers'
    }));
    this.view.setState({items});
  }
}

export default SortPresenter;
