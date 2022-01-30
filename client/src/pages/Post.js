import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(props) {
    super(props);
    this.setTitle('Post');
  }

  async render() {
    return `
      <h2>Post</h2>
      <p>Your post message will be here</p>
    `
  }
}
