import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(props) {
    super(props);
    this.setTitle('Settings');
  }

  async render() {
    return `
      <h2>Posts</h2>
      <p>See your posts</p>
    `
  }
}
