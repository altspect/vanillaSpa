import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(props) {
    super(props);
    this.setTitle('Settings');
  }

  async render() {
    return `
      <h2>Settings</h2>
      <p>Manage your account</p>
    `
  }
}
