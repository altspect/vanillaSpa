import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(props) {
    super(props);
    this.setTitle('Settings');
  }

  componentMounted() {
    super.componentMounted();
    console.log('component mounted');
  }

  async render() {
    return `
      <h2>Posts</h2>
      <p>See your posts</p>
    `
  }
}
