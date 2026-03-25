import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_V0lNnBfD.mjs';
import { manifest } from './manifest_B7YpFwlB.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admin.astro.mjs');
const _page3 = () => import('./pages/oauth/callback.astro.mjs');
const _page4 = () => import('./pages/oauth.astro.mjs');
const _page5 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@astrojs/starlight/routes/static/404.astro", _page1],
    ["node_modules/astro-decap-cms-oauth/src/admin.astro", _page2],
    ["node_modules/astro-decap-cms-oauth/src/oauth/callback.ts", _page3],
    ["node_modules/astro-decap-cms-oauth/src/oauth/index.ts", _page4],
    ["node_modules/@astrojs/starlight/routes/static/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "fcf3a376-e135-48e4-9e80-34ea3ce69a57",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
