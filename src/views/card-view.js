import View from './views.js';
import {html} from '../utils.js';

class CardView extends View {
  constructor() {
    super();

    // this.classList.add('class1', 'class2');
  }

  /**
   * @override
   */
  createHtml() {
    return html`

    `;
  }
}

customElements.define('card-view', CardView);

export default CardView;
