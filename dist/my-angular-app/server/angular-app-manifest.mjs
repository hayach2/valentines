
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
    'index.csr.html': {size: 5686, hash: '8489a04bb285f8d28313310fea2af394d9ed22202dd696e8a197fcde20465245', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 981, hash: '827873ade735ba8775366222ceac1a07afc3f339697b1c52297dd30533cf73b2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'yes/index.html': {size: 7464, hash: 'a71ef6bb9934f70ea158682021ab72e1846e8f6fb0ce0506a50ffe51a5668c3f', text: () => import('./assets-chunks/yes_index_html.mjs').then(m => m.default)},
    'index.html': {size: 11157, hash: 'f36be5337bad751bb1e5b6cf222b8046efd15c4f1f27c55888a341c53b9c18df', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-O5ODYPRE.css': {size: 13439, hash: '2Fpq3YQCOsQ', text: () => import('./assets-chunks/styles-O5ODYPRE_css.mjs').then(m => m.default)}
  },
};
