import View from './views.js';
import {html} from '../utils.js';

/**
 * @typedef {{
 *  message: string
 * }} State
 * @extends {View<State>}
 */
class PlaceholderView extends View {

  /**
   * @override
   */
  createHtml() {
    const {message} = this.state;

    if(!message) {
      return '';
    }

    return html`
      <p class="trip-events__msg">${message}</p>
    `;
  }
}

customElements.define('placeholder-view', PlaceholderView);

export default PlaceholderView;
