import Presenter from './presenter.js';

/**
 * @typedef {import('../views/list-view').default} View
 * @typedef {import('../models/app-model').default} Model
 *
 * @extends {Presenter<View, Model>}
 */
class ListPresenter extends Presenter {
  /**
   * @param {[View, Model]} rest
   */
  constructor(...rest) {
    super(...rest);
    this.view.addEventListener('open', this.onViewOpen.bind(this));
    this.view.addEventListener('close', this.onViewClose.bind(this));
    this.view.addEventListener('favorite', this.onViewFavorite.bind(this));

    // this.view.addEventListener('change', this.onViewChange.bind(this));
  }

  /**
   * @param {CustomEvent & {
   *  target: import ('../views/card-view.js').default
   * }} event
   */
  onViewOpen(event) {
    const params = this.navigation.getParams();

    params.edit = event.target.state.id;

    this.navigation.setParams(params);
  }

  onViewClose() {
    const params = this.navigation.getParams();

    delete params.edit;

    this.navigation.setParams(params);
  }

  /**
   * @param {CustomEvent & {
  *  target: import ('../views/card-view.js').default
  * }} event
  */
  async onViewFavorite(event) {
    const card = event.target;

    card.state.isFavorite = !card.state.isFavorite;
    await this.model.updatePoint(this.createPoint(card.state));
    card.render();
  }

  /**
   * @override
   */
  updateView() {
    const params = this.navigation.getParams();
    const points = this.model.getPoints();
    const offerGroups = this.model.getOfferGroups();
    const destinations = this.model.getDestinations();

    const items = points.map((point) => {
      const {offers} = offerGroups.find((group) => group.type === point.type);
      void point;
      return {
        id: point.id,

        types: offerGroups.map((group) => ({
          value: group.type,
          isSelected: group.type === point.type
        })),

        destinations: destinations.map((destination) => ({
          ...destination,
          isSelected: destination.id === point.destinationId
        })),

        dateFrom: point.dateFrom,
        dateTo: point.dateTo,
        basePrice: point.basePrice,

        offers: offers.map((offer) => ({
          ...offer,
          isSelected: point.offerIds?.includes(offer.id)
        })),

        isFavorite: point.isFavorite,
        isEditable: params.edit === point.id
      };
    });

    this.view.setState({items});
  }

  /**
 * @param {import('../views/list-view').ItemState} state
 * @returns {import('../models/point-model.js').default}
 */
  createPoint(state) {
    const point = this.model.createPoint();

    Object.assign(point, {
      id: state.id,
      type: state.types.find((item) => item.isSelected).value,
      destinationId: state.destinations.find((destination) => destination?.isSelected).id,
      dateFrom: state.dateFrom,
      dateTo: state.dateTo,
      offerIds: state.offers.filter((offer) => offer.isSelected).map((item) => item.id),
      isFavorite: state.isFavorite
    });

    return point;
  }
}

export default ListPresenter;
