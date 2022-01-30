import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async render() {
    return `
      <h1>Ooops</h1>
      <p>You are trying to access non existent page!</p>
      <p>
        <a href="/dashboard" data-link>Go to dashboard</a>
      </p>
    `
  }
}
