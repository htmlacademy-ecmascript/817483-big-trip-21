import Model from './model.js';
import points from '../data/points.json';
import offerGroups from '../data/offers.json';
import destinations from '../data/destination.json';
import PointModel from './point-model.js';

class AppModel extends Model {
  constructor() {
    super()

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
  }

  /**
   * @returns { Promise<void> }
   */
  async ready() {
    // TODO : получение данных с сервера
    // @ts-ignore
    this.destinations = destinations;
    console.log(destinations);
    // @ts-ignore
    this.offerGroups = offerGroups;
    // @ts-ignore
    this.points = points;
  }

  /**
   * @returns { Array<PointModel> }
   */
  getPoints() {
    return this.points.map((point) => new PointModel(point));
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

