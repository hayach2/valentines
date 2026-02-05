
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/valentine-question/*"
  },
  {
    "renderMode": 2,
    "route": "/yes"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4206, hash: '8458049035afc1de1e72b8bf5213537e8f22d95b5625d7ce6b281e0b8d6094cb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 981, hash: '684306c21c4c9c8f20795c938fd0824b5f5df613ed56102480232caa5ac9a813', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'yes/index.html': {size: 5908, hash: '9cf35bb1794533c1730e17f5a03411c192496ee8bc5dfa3001eb3a780aee26c9', text: () => import('./assets-chunks/yes_index_html.mjs').then(m => m.default)},
    'index.html': {size: 9601, hash: 'd6f94da2bb70708d6c1f0b99275d2e444f81e0fd2d1e7c2c2ce6f9ac64e053cc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-OT6FAHWG.css': {size: 10428, hash: 'P9pe7ff+i3w', text: () => import('./assets-chunks/styles-OT6FAHWG_css.mjs').then(m => m.default)}
  },
};
