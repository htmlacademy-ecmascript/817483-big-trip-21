import Model from './model.js';
import points from '../data/points.json';
import offerGroups from '../data/offers.json';
import destinations from '../data/destination.json';

class AppModel extends Model {
  constructor() {
    super() // вызов родительского constructor когда вызов new что-то, то ющзаем супер()

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
    // @ts-ignore
    this.offerGroups = offerGroups;
    // @ts-ignore
    this.points = points;
  }

  /**
   * @returns { Array<Point> }
   */
  getPoints() {
    return this.points;
  }

  /**
   * @returns { Array<OfferGroup> }
  */
  getOfferGroups() {
    return this.offerGroups;
  }

  /**
   * @returns { Array<Destination> }
  */
  getDestinations() {
    return this.destinations;
  }
}

export default AppModel;

