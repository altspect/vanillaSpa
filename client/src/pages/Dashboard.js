import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Dashboard");
  }

  async render() {
    return `
      <h1>Welcome back</h1>
      <p>Hi there, you are currently on dashboard page</p>
      <p>
        <a href="/posts" data-link>View recent posts</a>
      </p>
    `
  }
}
