import {sanitize} from '../utils.js';
import Service from './service.js';

class ApiService extends Service {

  /**
 * @param {Partial<import('./service.js').Options>} options
 */
  constructor(options) {
    super({
      baseUrl: 'https://21.objects.pages.academy/big-trip/',
      authorization: '',
      minResponseTime: 500,
      ...options
    });
  }

  /**
 * @returns {Promise<Array<Point>>}
 */
  async getPoints() {
    const response = await this.request('points');

    return sanitize(await response.json());
  }

  /**
 * @returns {Promise<Array<Destination>>}
 */
  async getDestinations() {
    const response = await this.request('destinations');

    return sanitize(await response.json());
  }

  /**
 * @returns {Promise<Array<Offer>>}
 */
  async getOfferGroups() {
    const response = await this.request('offers');

    return sanitize(await response.json());
  }
}

export default ApiService;
