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
    this.view.addEventListener('edit', this.onViewEdit.bind(this));
    this.view.addEventListener('favorite', this.onViewFavorite.bind(this));
    this.view.addEventListener('save', this.onViewSave.bind(this));
    this.view.addEventListener('delete', this.onViewDelete.bind(this));

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

    try {
      card.state.isFavorite = !card.state.isFavorite;
      await this.model.updatePoint(this.createPoint(card.state));
      card.render();

    } catch {
      card.shake();
    }
  }

  /**
   * @override
   */
  updateView() {
    const params = this.navigation.getParams();
    const previousParams = this.navigation.getPreviousParams();
    const points = this.model.getPoints(params);
    const offerGroups = this.model.getOfferGroups();
    const destinations = this.model.getDestinations();

    if(params.edit === 'draft') {
      points.unshift(this.createDraftPoint());
    }

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
        isEditable: params.edit === point.id,
        isAnimated: params.edit === point.id || previousParams.edit === point.id
      };
    });

    this.view.setState({
      items,
      isAnimated: !('edit' in params) && !('edit' in previousParams)
    });
  }

  /**
 * @param {import('../views/list-view').ItemState} state
 * @returns {import('../models/point-model.js').default}
 */
  createPoint(state) {
    const point = this.model.createPoint();

    Object.assign(point, {
      id: (state.id === 'draft') ? undefined : state.id,
      type: state.types.find((item) => item.isSelected).value,
      destinationId: state.destinations.find((destination) => destination?.isSelected).id,
      dateFrom: state.dateFrom,
      dateTo: state.dateTo,
      offerIds: state.offers.filter((offer) => offer.isSelected).map((item) => item.id),
      basePrice: state.basePrice,
      isFavorite: state.isFavorite
    });

    return point;
  }

  /**
 * @returns {import('../models/point-model.js').default}
 */
  createDraftPoint() {
    const point = this.model.createPoint();

    Object.assign(point, {
      id: 'draft',
      type: 'flight',
      basePrice: 0,
      isFavorite: false
    });

    return point;
  }

  /**
   * @param {CustomEvent<HTMLInputElement> & {
  *  target: import('../views/editor-view').default
  * }} event
  */
  onViewEdit(event) {
    const editor = event.target;
    const input = event.detail;

    const offerGroups = this.model.getOfferGroups();

    if(input.name === 'event-type') {
      const {offers} = offerGroups.find((group) => group.type === input.value);

      editor.state.offers = offers.map((offer) => ({
        ...offer,
        isSelected: false
      }));

      editor.state.types.forEach((item) => {
        item.isSelected = item.value === input.value;
      });

      editor.render();
      return;
    }

    if(input.name === 'event-destination') {
      editor.state.destinations.forEach((destination) => {
        destination.isSelected = destination.name === input.value;
      });
      editor.render();
      return;
    }

    if(input.name === 'event-start-time') {
      editor.state.dateFrom = input.value;
      return;
    }

    if(input.name === 'event-end-time') {
      editor.state.dateTo = input.value;
      return;
    }

    if(input.name === 'event-price') {
      editor.state.basePrice = Number(input.value);
      return;
    }

    if(input.name === 'event-offer') {
      editor.state.offers.some((item) => {
        if(item.id === input.value) {
          item.isSelected = !item.isSelected;
          return true;
        }
      });
    }
  }

  /**
   * @param {CustomEvent & {
  *  target: import('../views/editor-view').default
  * }} event
  */
  async onViewSave(event) {
    const editor = event.target;
    const point = this.createPoint(editor.state);
    try {
      editor.setState({isSaving: true});

      if(editor.state.id === 'draft') {
        await this.model.addPoint(point);
      } else {
        await this.model.updatePoint(point);
      }
      editor.dispatch('close');

    } catch {
      editor.setState({isSaving: false});
      editor.shake();
    }
  }

  /**
   * @param {CustomEvent & {
  *  target: import('../views/editor-view').default
  * }} event
  */
  async onViewDelete(event) {
    const editor = event.target;
    try {
      editor.setState({isDeleting: true});
      await this.model.deletePoint(editor.state.id);
      editor.dispatch('close');

    } catch {
      editor.setState({isDeleting: false});
      editor.shake();
    }
  }
}

export default ListPresenter;
