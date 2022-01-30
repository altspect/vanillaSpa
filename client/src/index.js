import Dashboard from './pages/Dashboard.js';
import Posts from './pages/Posts.js';
import Post from './pages/Post.js';
import Settings from './pages/Settings.js';
import NotFound from './pages/NotFound.js';

const pathToRegex = path => {
  return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
}

const getParams = match => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }))
}

const router = async () => {
  const routes = [
    { path: '/notfound', view: NotFound },
    { path: '/', view: Dashboard },
    { path: '/posts', view: Posts },
    { path: '/post', view: Post },
    { path: '/settings', view: Settings },
  ];

  const potentialMatches = routes.map(route => {
    return {
      route,
      result: location.pathname.match(pathToRegex((route.path)))
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname]
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector('#app').innerHTML = await view.render();
}

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

window.addEventListener('popstate', router);
