import Model from './model.js';
import points from '../data/points.json';
import offerGroups from '../data/offers.json';
import destinations from '../data/destination.json';
import PointModel from './point-model.js';

class AppModel extends Model {
  constructor() {
    super();

    /**
     * @type { Array<Point> }
     */
    this.points = [];

    /**
     * @type { Array<Destination> }
     */
    this.destinations = [];

    /**
     * @type { Array<OfferGroup> }
     */
    this.offerGroups = [];

    /**
     * @type {Record<SortType, (pointA: PointModel, pointB: PointModel) => Number>}
     */
    this.sortCallbacks = {
      day: (pointA, pointB) => pointA.dateFromInMs - pointB.dateFromInMs,
      event: () => 0,
      time: () => 0,
      price: (pointA, pointB) => pointB.basePrice - pointA.basePrice,
      offers: () => 0
    };
  }

  /**
   * @returns { Promise<void> }
   */
  async ready() {
    // TODO : получение данных с сервера
    // @ts-ignore
    this.destinations = destinations;
    // @ts-ignore
    this.offerGroups = offerGroups;
    // @ts-ignore
    this.points = points;

    console.table(
      this.getPoints({sort: 'day'})
    );
  }

  /**
   * @param {{sort?: SortType}}
   * @returns { Array<PointModel> }
   */
  getPoints(options = {}) {
    const defaultSort = this.sortCallbacks.day;
    const sort = this.sortCallbacks[options.sort] ?? defaultSort ;

    return this.points.map(this.createPoint).sort(sort);
  }

  /**
   * @param {Point} data
   * @returns {PointModel}
   */
  createPoint(data = Object.create(null)) {
    return new PointModel(data);
  }

  /**
   * @param {PointModel} model
   * @returns {Promise<void>}
   */
  async updatePoint(model) {
    // TO DO: Обновить данные на сервере
    const data = model.toJSON();
    const index = this.points.findIndex((point) => point.id === data.id);

    this.points.splice(index, 1, data);
  }

  /**
   * @returns { Array<OfferGroup> }
  */
  getOfferGroups() {
    return structuredClone(this.offerGroups);
  }

  /**
   * @returns { Array<Destination> }
  */
  getDestinations() {
    return structuredClone(this.destinations);
  }
}

export default AppModel;

