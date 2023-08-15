import View from './views.js';
import {html} from '../utils.js';

class EditorView extends View {
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

customElements.define('editor-view', EditorView);

export default EditorView;
