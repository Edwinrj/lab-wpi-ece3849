import { e as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, f as renderSlot, r as renderComponent, b as addAttribute, g as renderScript, F as Fragment, h as defineStyleVars, A as AstroUserError, s as spreadAttributes, d as renderHead } from './astro/server_I-R8HWCB.mjs';
import 'piccolore';
import { s as starlightConfig, a as stripTrailingSlash, b as stripLeadingSlash, e as ensureHtmlExtension, c as stripHtmlExtension, d as ensureTrailingSlash$1, p as project, B as BuiltInDefaultLocale, g as getCollection, f as getCollectionPathFromRoot, h as pickLang, i as stripLeadingAndTrailingSlashes, j as ensureLeadingSlash, k as stripExtension, l as getEntry, u as useTranslations, r as renderEntry } from './translations_D-u4DL3Q.mjs';
import { p as printHref } from './index.9f91b58d_FGPHcvA3.mjs';
import 'clsx';
import { $ as $$Icon, a as $$LinkButton, b as $$Badge } from './Code_C63UbqyS.mjs';
import { $ as $$Image } from './_astro_assets_C1eeMM60.mjs';
import path from 'node:path';
import micromatch from 'micromatch';
import 'github-slugger';
import * as z from 'zod';
import yaml from 'js-yaml';
import { klona } from 'klona/lite';

const $$Astro$C = createAstro("https://ece3849.wpiembedded.com");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$C, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.locals.starlightRoute.entry.data;
  return renderTemplate`${banner && renderTemplate`${maybeRenderHead()}<div class="sl-banner astro-laz2plt2" data-pagefind-ignore>${unescapeHTML(banner.content)}</div>`}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/Banner.astro", void 0);

const $$ContentPanel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="content-panel astro-7nkwcw3z"> <div class="sl-container astro-7nkwcw3z">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/ContentPanel.astro", void 0);

const $$Astro$B = createAstro("https://ece3849.wpiembedded.com");
const $$ContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$ContentNotice;
  const { icon, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="sl-flex astro-opzsrvew"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1.5em", "color": "var(--sl-color-orange-high)", "class": "astro-opzsrvew" })} <span class="astro-opzsrvew">${label}</span> </p> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/ContentNotice.astro", void 0);

const $$Astro$A = createAstro("https://ece3849.wpiembedded.com");
const $$FallbackContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$FallbackContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("i18n.untranslatedContent") })}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/FallbackContentNotice.astro", void 0);

const $$Astro$z = createAstro("https://ece3849.wpiembedded.com");
const $$DraftContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$DraftContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("page.draft") })}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/DraftContentNotice.astro", void 0);

const $$Astro$y = createAstro("https://ece3849.wpiembedded.com");
const $$EditLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$EditLink;
  const { editUrl } = Astro2.locals.starlightRoute;
  return renderTemplate`${editUrl && renderTemplate`${maybeRenderHead()}<a${addAttribute(editUrl, "href")} class="sl-flex print:hidden astro-eez2twj6">${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "size": "1.2em", "class": "astro-eez2twj6" })}${Astro2.locals.t("page.editLink")}</a>`}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/EditLink.astro", void 0);

const $$Astro$x = createAstro("https://ece3849.wpiembedded.com");
const $$LastUpdated = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$LastUpdated;
  const { lang, lastUpdated } = Astro2.locals.starlightRoute;
  return renderTemplate`${lastUpdated && renderTemplate`${maybeRenderHead()}<p>${Astro2.locals.t("page.lastUpdated")}${" "}<time${addAttribute(lastUpdated.toISOString(), "datetime")}>${lastUpdated.toLocaleDateString(lang, { dateStyle: "medium", timeZone: "UTC" })}</time></p>`}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/LastUpdated.astro", void 0);

const $$Astro$w = createAstro("https://ece3849.wpiembedded.com");
const $$Pagination$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Pagination$1;
  const { dir, pagination } = Astro2.locals.starlightRoute;
  const { prev, next } = pagination;
  const isRtl = dir === "rtl";
  return renderTemplate`${maybeRenderHead()}<div class="pagination-links print:hidden astro-u2l5gyhi"${addAttribute(dir, "dir")}> ${prev && renderTemplate`<a${addAttribute(prev.href, "href")} rel="prev" class="astro-u2l5gyhi"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "right-arrow" : "left-arrow", "size": "1.5rem", "class": "astro-u2l5gyhi" })} <span class="astro-u2l5gyhi"> ${Astro2.locals.t("page.previousLink")} <br class="astro-u2l5gyhi"> <span class="link-title astro-u2l5gyhi">${prev.label}</span> </span> </a>`} ${next && renderTemplate`<a${addAttribute(next.href, "href")} rel="next" class="astro-u2l5gyhi"> ${renderComponent($$result, "Icon", $$Icon, { "name": isRtl ? "left-arrow" : "right-arrow", "size": "1.5rem", "class": "astro-u2l5gyhi" })} <span class="astro-u2l5gyhi"> ${Astro2.locals.t("page.nextLink")} <br class="astro-u2l5gyhi"> <span class="link-title astro-u2l5gyhi">${next.label}</span> </span> </a>`} </div> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/Pagination.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$v = createAstro("https://ece3849.wpiembedded.com");
const $$Comments = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Comments;
  const { entry, lang } = Astro2.locals.starlightRoute;
  const {
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    reactions,
    inputPosition,
    theme,
    lazy
  } = globalThis.giscusConfig;
  const preparedTheme = typeof theme === "object" ? theme : { auto: theme };
  const giscus = entry.data.giscus ?? true;
  return renderTemplate`${giscus && renderTemplate`${renderComponent($$result, "giscus-comments", "giscus-comments", { "data-theme": JSON.stringify(preparedTheme) }, { "default": () => renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div class="comments"><script src="https://giscus.app/client.js"', "", "", "", "", ' data-strict="1"', ' data-emit-metadata="0"', "", "", "", ' crossorigin="anonymous" async>\n                <\/script></div>'])), maybeRenderHead(), addAttribute(repo, "data-repo"), addAttribute(repoId, "data-repo-id"), addAttribute(category, "data-category"), addAttribute(categoryId, "data-category-id"), addAttribute(mapping, "data-mapping"), addAttribute(+reactions, "data-reactions-enabled"), addAttribute(inputPosition, "data-input-position"), addAttribute(preparedTheme.auto, "data-theme"), addAttribute(lang, "data-lang"), addAttribute(lazy ? "lazy" : null, "data-loading")) })}

        ${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-giscus/components/Comments.astro?astro&type=script&index=0&lang.ts")}`}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-giscus/components/Comments.astro", void 0);

const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Comments", $$Comments, {})} ${renderComponent($$result, "Default", $$Pagination$1, {})}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-giscus/overrides/Pagination.astro", void 0);

const $$Astro$u = createAstro("https://ece3849.wpiembedded.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="sl-flex astro-3yyafb3n"> <div class="meta sl-flex astro-3yyafb3n"> ${renderComponent($$result, "EditLink", $$EditLink, { "class": "astro-3yyafb3n" })} ${renderComponent($$result, "LastUpdated", $$LastUpdated, { "class": "astro-3yyafb3n" })} </div> ${renderComponent($$result, "Pagination", $$Pagination, { "class": "astro-3yyafb3n" })} ${starlightConfig.credits} </footer> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/Footer.astro", void 0);

const $$Astro$t = createAstro("https://ece3849.wpiembedded.com");
const $$Head$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Head$1;
  const { head } = Astro2.locals.starlightRoute;
  return renderTemplate`${head.map(({ tag: Tag, attrs, content }) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs }, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`)}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/Head.astro", void 0);

const $$Astro$s = createAstro("https://ece3849.wpiembedded.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$r = createAstro("https://ece3849.wpiembedded.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$q = createAstro("https://ece3849.wpiembedded.com");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Head;
  return renderTemplate`${renderComponent($$result, "StarlightHead", $$Head$1, { ...Astro2.props }, { "default": ($$result2) => renderTemplate`  <meta name="algolia-site-verification" content="3B3E8545D4F02777"> ${renderSlot($$result2, $$slots["default"])} ` })} ${renderComponent($$result, "Analytics", $$Index$1, {})} ${renderComponent($$result, "SpeedInsights", $$Index, {})}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/components/head.astro", void 0);

const $$Astro$p = createAstro("https://ece3849.wpiembedded.com");
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(`--sl-select-width: ${Astro2.props.width}`, "style")} class="astro-4yphtoen"> <span class="sr-only astro-4yphtoen">${Astro2.props.label}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": Astro2.props.icon, "class": "icon label-icon astro-4yphtoen" })} <select autocomplete="off" class="astro-4yphtoen"> ${Astro2.props.options.map(({ value, selected, label }) => renderTemplate`<option${addAttribute(value, "value")}${addAttribute(selected, "selected")} class="astro-4yphtoen">${unescapeHTML(label)}</option>`)} </select> ${renderComponent($$result, "Icon", $$Icon, { "name": "down-caret", "class": "icon caret astro-4yphtoen" })} </label> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/Select.astro", void 0);

const $$Astro$o = createAstro("https://ece3849.wpiembedded.com");
const $$LanguageSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$LanguageSelect;
  return renderTemplate`${starlightConfig.isMultilingual}${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/LanguageSelect.astro", void 0);

const $$Astro$n = createAstro("https://ece3849.wpiembedded.com");
const $$DocSearch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$DocSearch;
  const pick = (keyStart) => Object.fromEntries(
    Object.entries(Astro2.locals.t.all()).filter(([key]) => key.startsWith(keyStart)).map(([key, value]) => [key.replace(keyStart, ""), value])
  );
  const docsearchTranslations = {
    placeholder: Astro2.locals.t("search.label"),
    translations: {
      button: {
        buttonText: Astro2.locals.t("search.label"),
        buttonAriaLabel: Astro2.locals.t("search.label")
      },
      modal: {
        searchBox: pick("docsearch.searchBox."),
        startScreen: pick("docsearch.startScreen."),
        errorScreen: pick("docsearch.errorScreen."),
        footer: pick("docsearch.footer."),
        noResultsScreen: pick("docsearch.noResultsScreen.")
      }
    }
  };
  return renderTemplate`${renderComponent($$result, "sl-doc-search", "sl-doc-search", { "data-translations": JSON.stringify(docsearchTranslations) }, { "default": () => renderTemplate` ${maybeRenderHead()}<button type="button" class="DocSearch DocSearch-Button"${addAttribute(Astro2.locals.t("search.label"), "aria-label")}> <span class="DocSearch-Button-Container"> <svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"> <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <span class="DocSearch-Button-Placeholder">${Astro2.locals.t("search.label")}</span> </span> <span class="DocSearch-Button-Keys"></span> </button> ` })}  ${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/components/DocSearch.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/src/components/DocSearch.astro", void 0);

const logos = {};

const $$Astro$m = createAstro("https://ece3849.wpiembedded.com");
const $$SiteTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$SiteTitle;
  const { siteTitle, siteTitleHref } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(siteTitleHref, "href")} class="site-title sl-flex astro-m46x6ez3"> ${starlightConfig.logo && logos.dark && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-m46x6ez3" }, { "default": ($$result2) => renderTemplate` <img${addAttribute([{ "light:sl-hidden print:hidden": !("src" in starlightConfig.logo) }, "astro-m46x6ez3"], "class:list")}${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.dark.src, "src")}${addAttribute(logos.dark.width, "width")}${addAttribute(logos.dark.height, "height")}> ${!("src" in starlightConfig.logo) && renderTemplate`<img class="dark:sl-hidden print:block astro-m46x6ez3"${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.light?.src, "src")}${addAttribute(logos.light?.width, "width")}${addAttribute(logos.light?.height, "height")}>`}` })}`} <span${addAttribute([{ "sr-only": starlightConfig.logo?.replacesTitle }, "astro-m46x6ez3"], "class:list")} translate="no"> ${siteTitle} </span> </a> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/SiteTitle.astro", void 0);

const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const links = starlightConfig.social || [];
  return renderTemplate`${links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-wy4te6ga" }, { "default": ($$result2) => renderTemplate`${links.map(({ label, href, icon }) => renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} rel="me" class="sl-flex astro-wy4te6ga"><span class="sr-only astro-wy4te6ga">${label}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "astro-wy4te6ga" })}</a>`)}` })}`}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/SocialIcons.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$l = createAstro("https://ece3849.wpiembedded.com");
const $$ThemeSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$ThemeSelect;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "  <script>\n	StarlightThemeProvider.updatePickers();\n<\/script> ", ""])), renderComponent($$result, "starlight-theme-select", "starlight-theme-select", {}, { "default": () => renderTemplate`  ${renderComponent($$result, "Select", $$Select, { "icon": "laptop", "label": Astro2.locals.t("themeSelect.accessibleLabel"), "options": [
    { label: Astro2.locals.t("themeSelect.dark"), selected: false, value: "dark" },
    { label: Astro2.locals.t("themeSelect.light"), selected: false, value: "light" },
    { label: Astro2.locals.t("themeSelect.auto"), selected: true, value: "auto" }
  ], "width": "6.25em" })} ` }), renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/ThemeSelect.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/ThemeSelect.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="header astro-kmkmnagf"> <div class="title-wrapper sl-flex astro-kmkmnagf"> ${renderComponent($$result, "SiteTitle", $$SiteTitle, { "class": "astro-kmkmnagf" })} </div> <div class="sl-flex print:hidden astro-kmkmnagf"> ${renderTemplate`${renderComponent($$result, "Search", $$DocSearch, { "class": "astro-kmkmnagf" })}`} </div> <div class="sl-hidden md:sl-flex print:hidden right-group astro-kmkmnagf"> <div class="sl-flex social-icons astro-kmkmnagf"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "astro-kmkmnagf" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "class": "astro-kmkmnagf" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "class": "astro-kmkmnagf" })} </div> </div> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/Header.astro", void 0);

const PAGE_TITLE_ID = "_top";

const $$Astro$k = createAstro("https://ece3849.wpiembedded.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Hero;
  const { data } = Astro2.locals.starlightRoute.entry;
  const { title = data.title, tagline, image, actions = [] } = data.hero || {};
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    height: 400,
    alt: image?.alt || ""
  };
  let darkImage;
  let lightImage;
  let rawHtml;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      rawHtml = image.html;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-jbfsktt5"> ${darkImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": darkImage, ...imageAttrs, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-jbfsktt5"] })}`} ${lightImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": lightImage, ...imageAttrs, "class": "dark:sl-hidden astro-jbfsktt5" })}`} ${rawHtml && renderTemplate`<div class="hero-html sl-flex astro-jbfsktt5">${unescapeHTML(rawHtml)}</div>`} <div class="sl-flex stack astro-jbfsktt5"> <div class="sl-flex copy astro-jbfsktt5"> <h1${addAttribute(PAGE_TITLE_ID, "id")} data-page-title class="astro-jbfsktt5">${unescapeHTML(title)}</h1> ${tagline && renderTemplate`<div class="tagline astro-jbfsktt5">${unescapeHTML(tagline)}</div>`} </div> ${actions.length > 0 && renderTemplate`<div class="sl-flex actions astro-jbfsktt5"> ${actions.map(
    ({ attrs: { class: className, ...attrs } = {}, icon, link: href, text, variant }) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": href, "variant": variant, "icon": icon?.name, "class:list": [[className], "astro-jbfsktt5"], ...attrs }, { "default": ($$result2) => renderTemplate`${text}${icon?.html && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon.html)}` })}`}` })}`
  )} </div>`} </div> </div> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/Hero.astro", void 0);

const $$MarkdownContent$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sl-markdown-content">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/MarkdownContent.astro", void 0);

const $$ImageZoom = createComponent(($$result, $$props, $$slots) => {
  const dataAttributes = {};
  return renderTemplate`${renderComponent($$result, "starlight-image-zoom", "starlight-image-zoom", { ...dataAttributes }, { "default": () => renderTemplate` <template class="astro-vjux6bgf"> ${maybeRenderHead()}<dialog class="starlight-image-zoom-dialog astro-vjux6bgf"> <button aria-label="Unzoom image" class="starlight-image-zoom-control astro-vjux6bgf"> <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" class="astro-vjux6bgf"> <use href="#starlight-image-zoom-icon-unzoom" class="astro-vjux6bgf"></use> </svg> </button> <figure class="astro-vjux6bgf"></figure> </dialog> </template> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute({ display: "none" }, "style")} class="astro-vjux6bgf"> <symbol id="starlight-image-zoom-icon-zoom" viewBox="0 0 24 24" class="astro-vjux6bgf"> <path d="M9.79 12.79 4 18.59V17a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54A1 1 0 0 0 3 22h4a1 1 0 0 0 0-2H5.41l5.8-5.79a1 1 0 0 0-1.42-1.42ZM21.92 2.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-4a1 1 0 0 0 0 2h1.59l-5.8 5.79a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L20 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z" class="astro-vjux6bgf"></path> </symbol> <symbol id="starlight-image-zoom-icon-unzoom" viewBox="0 0 24 24" class="astro-vjux6bgf"> <path d="M21.71 2.29a1 1 0 0 0-1.42 0l-5.79 5.8V6.5a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38 1 1 0 0 0 .54.54 1 1 0 0 0 .38.08h4a1 1 0 0 0 0-2h-1.59l5.8-5.79a1 1 0 0 0 0-1.42ZM10.88 12.58a1 1 0 0 0-.38-.08h-4a1 1 0 0 0 0 2h1.59l-5.8 5.79a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.79-5.8v1.59a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38 1 1 0 0 0-.54-.54Z" class="astro-vjux6bgf"></path> </symbol> </svg> ` })}   ${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-image-zoom/components/ImageZoom.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-image-zoom/components/ImageZoom.astro", void 0);

const $$MarkdownContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ImageZoom", $$ImageZoom, {})} ${renderComponent($$result, "StarlightMarkdownContent", $$MarkdownContent$1, {}, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-image-zoom/overrides/MarkdownContent.astro", void 0);

const $$Astro$j = createAstro("https://ece3849.wpiembedded.com");
const $$MobileMenuToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$MobileMenuToggle;
  return renderTemplate`${renderComponent($$result, "starlight-menu-button", "starlight-menu-button", { "class": "print:hidden astro-jif73yzw" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button aria-expanded="false"${addAttribute(Astro2.locals.t("menuButton.accessibleLabel"), "aria-label")} aria-controls="starlight__sidebar" class="sl-flex md:sl-hidden astro-jif73yzw"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "open-menu astro-jif73yzw" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "close", "class": "close-menu astro-jif73yzw" })} </button> ` })} ${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts")}  `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro", void 0);

const $$Astro$i = createAstro("https://ece3849.wpiembedded.com");
const $$PageFrame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$PageFrame;
  const { hasSidebar } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<div class="page sl-flex astro-vrdttmbt"> <header class="header astro-vrdttmbt">${renderSlot($$result, $$slots["header"])}</header> ${hasSidebar && renderTemplate`<nav class="sidebar print:hidden astro-vrdttmbt"${addAttribute(Astro2.locals.t("sidebarNav.accessibleLabel"), "aria-label")}> ${renderComponent($$result, "MobileMenuToggle", $$MobileMenuToggle, { "class": "astro-vrdttmbt" })} <div id="starlight__sidebar" class="sidebar-pane astro-vrdttmbt"> <div class="sidebar-content sl-flex astro-vrdttmbt"> ${renderSlot($$result, $$slots["sidebar"])} </div> </div> </nav>`} <div class="main-frame astro-vrdttmbt">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/PageFrame.astro", void 0);

const $$Astro$h = createAstro("https://ece3849.wpiembedded.com");
const $$TableOfContentsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, isMobile = false, depth = 0 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ depth }]);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ isMobile }, "astro-g2bywc46"], "class:list")}${addAttribute($$definedVars, "style")}> ${toc.map((heading) => renderTemplate`<li class="astro-g2bywc46"${addAttribute($$definedVars, "style")}> <a${addAttribute("#" + heading.slug, "href")} class="astro-g2bywc46"${addAttribute($$definedVars, "style")}> <span class="astro-g2bywc46"${addAttribute($$definedVars, "style")}>${heading.text}</span> </a> ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "class": "astro-g2bywc46" })}`} </li>`)} </ul> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$g = createAstro("https://ece3849.wpiembedded.com");
const $$MobileTableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { toc } = Astro2.locals.starlightRoute;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "mobile-starlight-toc", "mobile-starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel, "class": "astro-doynk5tl" }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page--mobile" class="astro-doynk5tl"><details id="starlight__mobile-toc" class="astro-doynk5tl"><summary id="starlight__on-this-page--mobile" class="sl-flex astro-doynk5tl"><span class="toggle sl-flex astro-doynk5tl">${Astro2.locals.t("tableOfContents.onThisPage")}${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-doynk5tl", "size": "1rem" })}</span><span class="display-current astro-doynk5tl"></span></summary><div class="dropdown astro-doynk5tl">${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items, "isMobile": true, "class": "astro-doynk5tl" })}</div></details></nav>` })}`}${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro", void 0);

const $$Astro$f = createAstro("https://ece3849.wpiembedded.com");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { toc } = Astro2.locals.starlightRoute;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page"><h2 id="starlight__on-this-page">${Astro2.locals.t("tableOfContents.onThisPage")}</h2>${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items })}</nav>` })}`}${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/TableOfContents.astro", void 0);

const $$Astro$e = createAstro("https://ece3849.wpiembedded.com");
const $$PageSidebar$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$PageSidebar$1;
  return renderTemplate`${Astro2.locals.starlightRoute.toc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-pb3aqygn" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="lg:sl-hidden astro-pb3aqygn">${renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { "class": "astro-pb3aqygn" })}</div><div class="right-sidebar-panel sl-hidden lg:sl-block astro-pb3aqygn"><div class="sl-container astro-pb3aqygn">${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "class": "astro-pb3aqygn" })}</div></div>` })}`}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/PageSidebar.astro", void 0);

const $$Astro$d = createAstro("https://ece3849.wpiembedded.com");
const $$Graph = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Graph;
  const { config, sitemap, slug, debug = false, trailingSlashes = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="slsg-graph-component slsg-graph-skeleton"> <div class="slsg-graph-container"></div> </div> ${renderComponent($$result, "graph-component", "graph-component", { "data-config": JSON.stringify(config), "data-sitemap": JSON.stringify(sitemap), "data-slug": slug, "data-debug": debug, "data-trailing-slashes": trailingSlashes })} ${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-site-graph/components/graph/Graph.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-site-graph/components/graph/Graph.astro", void 0);

const config = {"debug":false,"graphConfig":{"actions":["fullscreen","depth","reset-zoom","render-arrows","settings"],"tagStyles":{},"tagRenderMode":"node","prefetchPages":true,"enableDrag":true,"enableZoom":true,"enablePan":true,"enableHover":true,"enableClick":"auto","nodeInclusionRules":["**/*"],"depth":1,"depthDirection":"outgoing","followLink":"same","scale":1.1,"minZoom":0.05,"maxZoom":4,"renderLabels":true,"renderArrows":false,"renderUnresolved":false,"renderExternal":true,"scaleLinks":true,"scaleArrows":true,"minZoomArrows":0.8,"labelOpacityScale":1.3,"labelMutedOpacity":0,"labelHoverOpacity":1,"labelAdjacentOpacity":1,"labelFontSize":12,"labelHoverScale":1,"labelOffset":10,"labelHoverOffset":14,"zoomDuration":75,"zoomEase":"out_quad","hoverDuration":200,"hoverEase":"out_quad","nodeDefaultStyle":{"shape":"circle","shapeSize":6,"shapeColor":"nodeColor","strokeWidth":0,"colliderScale":1,"nodeScale":1,"neighborScale":0.5},"nodeVisitedStyle":{"shapeColor":"nodeColorVisited"},"nodeCurrentStyle":{"shapeColor":"nodeColorCurrent"},"nodeUnresolvedStyle":{"shapeColor":"nodeColorUnresolved"},"nodeExternalStyle":{"shape":"square","shapeColor":"nodeColorExternal","strokeColor":"inherit","nodeScale":0.8},"tagDefaultStyle":{"shape":"circle","shapeSize":6,"shapeColor":"backgroundColor","strokeWidth":1,"strokeColor":"nodeColorTag","colliderScale":1,"nodeScale":1,"neighborScale":0.7},"linkWidth":1,"linkHoverWidth":1,"arrowSize":5,"arrowAngle":0.5235987755982988,"centerForce":0.05,"colliderPadding":25,"repelForce":200,"linkDistance":20,"alphaDecay":0.0228,"visibilityRules":["**/*"]},"sitemapConfig":{"sitemap":{"faq/":{"external":false,"exists":true,"title":"Frequently Asked Questions","backlinks":[]},"guides/ccs/enviromentsetup/":{"external":false,"exists":true,"title":"Environment setup for CCS","backlinks":["guides/ccs/setupguide/"]},"guides/ccs/external_libraries/":{"external":false,"exists":true,"title":"external_libraries","backlinks":["guides/ccs/setupguide/"]},"guides/ccs/installccs/":{"external":false,"exists":true,"title":"How to Install Code Composer Studio (CCS) and TivaWare","backlinks":["guides/ccs/setupguide/"]},"guides/ccs/openworkspace/":{"external":false,"exists":true,"title":"Workspace setup for CCS","backlinks":["guides/ccs/setupguide/","reference/example-projects/blinkexample/","reference/example-projects/buzzerexample/"]},"guides/ccs/setupguide/":{"external":false,"exists":true,"title":"Lab Setup Quick Start Guide","links":["guides/ccs/installccs/","guides/ccs/enviromentsetup/","guides/ccs/openworkspace/","guides/labkit/","guides/ccs/external_libraries/","guides/programmingstyle/"],"backlinks":["labs/lab0/","labs/lab1/"]},"guides/freertos/freertos/":{"external":false,"exists":true,"title":"FreeRTOS Fundamentals","tags":["#freertos"],"backlinks":[]},"guides/freertos/freertosproyects/":{"external":false,"exists":true,"title":"FreeRTOS Project Setup","tags":["#freertos"],"links":["guides/freertos/","guides/labtimeline/"],"backlinks":["labs/lab1/"]},"guides/freertos/hooks/":{"external":false,"exists":true,"title":"System Hooks","tags":["#freertos"],"links":["guides/freertos/"],"backlinks":[]},"guides/freertos/queues/":{"external":false,"exists":true,"title":"Queues: Task-to-Task and ISR Communication","tags":["#freertos"],"links":["guides/freertos/"],"backlinks":["guides/freertos/tasks/"]},"guides/freertos/semaphores-mutexes/":{"external":false,"exists":true,"title":"Semaphores and Mutexes","tags":["#freertos"],"links":["guides/freertos/"],"backlinks":["guides/freertos/tasks/"]},"guides/freertos/software-timers/":{"external":false,"exists":true,"title":"Software Timers","tags":["#freertos"],"links":["guides/freertos/"],"backlinks":[]},"guides/freertos/system-utilities/":{"external":false,"exists":true,"title":"System Utilities","tags":["#freertos"],"links":["guides/freertos/"],"backlinks":[]},"guides/freertos/tasks/":{"external":false,"exists":true,"title":"Tasks: Creation and Control","tags":["#freertos"],"links":["guides/freertos/queues/","guides/freertos/semaphores-mutexes/","guides/freertos/"],"backlinks":[]},"guides/labkit/":{"external":false,"exists":true,"title":"labkit","backlinks":["guides/ccs/setupguide/"]},"guides/labtimeline/":{"external":false,"exists":true,"title":"Lab Timeline & Summaries","links":["labs/lab0/","labs/lab1/"],"backlinks":["guides/freertos/freertosproyects/","labs/lab0/","labs/lab1/"]},"guides/programmingstyle/":{"external":false,"exists":true,"title":"programmingstyle","backlinks":["guides/ccs/setupguide/"]},"/":{"external":false,"exists":true,"title":"ECE 3849 Real-Time Embedded Systems","backlinks":[]},"labs/lab0/":{"external":false,"exists":true,"title":"Lab 0: Stopwatch","links":["https://www.ti.com/tool/SW-TM4C/","https://www.ti.com/lit/ug/spmu300e/spmu300e.pdf/","https://www.ti.com/lit/ds/symlink/tm4c1294ncpdt.pdf/","https://www.ti.com/tool/EK-TM4C1294XL/","https://www.ti.com/tool/BOOSTXL-EDUMKII/","guides/ccs/setupguide/","guides/labtimeline/"],"backlinks":["guides/labtimeline/","reference/example-projects/stopwatchoverflow/","reference/libraries/buttonsdriver/","reference/libraries/elapsedtime/","reference/libraries/timerlib/"]},"labs/lab1/":{"external":false,"exists":true,"title":"Lab 1: FreeRTOS Stopwatch","tags":["#freertos"],"links":["labs/lab1/","guides/labtimeline/","guides/ccs/setupguide/","guides/freertos/","guides/freertos/freertosproyects/"],"backlinks":["guides/labtimeline/","labs/lab1/","reference/libraries/buttonsdriver/","reference/libraries/elapsedtime/","reference/libraries/joystickdriver/","reference/libraries/otp3001/","reference/libraries/timerlib/"]},"reference/example-projects/blinkexample/":{"external":false,"exists":true,"title":"Buttons Callback Example","links":["guides/ccs/openworkspace/"],"backlinks":[]},"reference/example-projects/buzzerexample/":{"external":false,"exists":true,"title":"Button with audio feedback","links":["guides/ccs/openworkspace/"],"backlinks":["reference/tivaware/pwmsignals/"]},"reference/example-projects/stopwatchoverflow/":{"external":false,"exists":true,"title":"Fixing the Stopwatch Overflow and Drift Bug","links":["labs/lab0/"],"backlinks":[]},"reference/libraries/buttonsdriver/":{"external":false,"exists":true,"title":"Button Driver","tags":["#libraries"],"links":["example_projects/buzzerexample/","example_projects/blinkexample/","labs/lab0/","labs/lab1/"],"backlinks":["reference/tivaware/multiplescreens/","reference/tivaware/pwmsignals/"]},"reference/libraries/elapsedtime/":{"external":false,"exists":true,"title":"elapsedTime","tags":["#libraries"],"links":["labs/lab0/","labs/lab1/"],"backlinks":["reference/tivaware/multiplescreens/","reference/tivaware/pwmsignals/"]},"reference/libraries/joystickdriver/":{"external":false,"exists":true,"title":"Joystick Driver","tags":["#libraries"],"links":["reference/libraries/button-driver/","labs/lab1/"],"backlinks":["reference/tivaware/multiplescreens/"]},"reference/libraries/otp3001/":{"external":false,"exists":true,"title":"OPT3001","tags":["#libraries"],"links":["labs/lab1/"],"backlinks":[]},"reference/libraries/timerlib/":{"external":false,"exists":true,"title":"TimerLib","tags":["#libraries"],"links":["labs/lab0/","labs/lab1/"],"backlinks":["reference/tivaware/multiplescreens/","reference/tivaware/pwmsignals/"]},"reference/tivaware/mic_adc/":{"external":false,"exists":true,"title":"Reading the Microphone Signal","tags":["#reference"],"backlinks":[]},"reference/tivaware/multiplescreens/":{"external":false,"exists":true,"title":"Multi-Screen Interface Tutorial","tags":["#reference"],"links":["reference/libraries/buttonsdriver/","reference/libraries/opt3001/","reference/libraries/joystickdriver/","reference/libraries/elapsedtime/","reference/libraries/timerlib/"],"backlinks":[]},"reference/tivaware/pwmsignals/":{"external":false,"exists":true,"title":"PWM Buzzer","tags":["#reference"],"links":["reference/libraries/buttonsdriver/","reference/libraries/elapsedtime/","reference/libraries/timerlib/","reference/example-projects/buzzerexample/"],"backlinks":[]},"syllabus/":{"external":false,"exists":true,"title":"Course Syllabus","backlinks":[]},"guides/freertos/":{"external":false,"exists":false,"title":"freertos","backlinks":["guides/freertos/freertosproyects/","guides/freertos/hooks/","guides/freertos/queues/","guides/freertos/semaphores-mutexes/","guides/freertos/software-timers/","guides/freertos/system-utilities/","guides/freertos/tasks/","labs/lab1/"]},"https://www.ti.com/tool/SW-TM4C/":{"external":true,"exists":true,"title":"https://www.ti.com/tool/SW-TM4C","backlinks":["labs/lab0/"]},"https://www.ti.com/lit/ug/spmu300e/spmu300e.pdf/":{"external":true,"exists":true,"title":"https://www.ti.com/lit/ug/spmu300e/spmu300e.pdf","backlinks":["labs/lab0/"]},"https://www.ti.com/lit/ds/symlink/tm4c1294ncpdt.pdf/":{"external":true,"exists":true,"title":"https://www.ti.com/lit/ds/symlink/tm4c1294ncpdt.pdf","backlinks":["labs/lab0/"]},"https://www.ti.com/tool/EK-TM4C1294XL/":{"external":true,"exists":true,"title":"https://www.ti.com/tool/EK-TM4C1294XL","backlinks":["labs/lab0/"]},"https://www.ti.com/tool/BOOSTXL-EDUMKII/":{"external":true,"exists":true,"title":"https://www.ti.com/tool/BOOSTXL-EDUMKII","backlinks":["labs/lab0/"]},"example_projects/buzzerexample/":{"external":false,"exists":false,"title":"buzzerexample","backlinks":["reference/libraries/buttonsdriver/"]},"example_projects/blinkexample/":{"external":false,"exists":false,"title":"blinkexample","backlinks":["reference/libraries/buttonsdriver/"]},"reference/libraries/button-driver/":{"external":false,"exists":false,"title":"Button","backlinks":["reference/libraries/joystickdriver/"]},"reference/libraries/opt3001/":{"external":false,"exists":false,"title":"opt3001","backlinks":["reference/tivaware/multiplescreens/"]}}},"backlinksConfig":{"visibilityRules":["**/*"]}};

const astroConfig = {"base":"/"};

function stripSlashes(s, onlyStripPrefix) {
  if (s.startsWith("/")) s = s.substring(1);
  if (s.endsWith("/")) s = s.slice(0, -1);
  return s;
}
function ensureTrailingSlash(path, add) {
  if (!add) return path.endsWith("/") ? path.slice(0, -1) : path;
  return path.endsWith("/") ? path : `${path}/`;
}

function firstMatchingPattern(text, patterns, defaultMatch) {
  const patternList = typeof patterns === "string" ? [patterns] : patterns;
  for (const pattern of patternList) {
    if (micromatch.isMatch(text, pattern.startsWith("!") ? pattern.slice(1) : pattern)) {
      return !pattern.startsWith("!");
    }
  }
  return defaultMatch;
}

const $$Astro$c = createAstro("https://ece3849.wpiembedded.com");
const $$PageGraph = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$PageGraph;
  let graphData = {};
  let { slug, class: className, showGraph, config: graphConfig, trailingSlashes } = Astro2.props;
  let entry = Astro2.locals.starlightRoute?.entry;
  if (entry && entry.id) {
    graphData = entry.data?.graph;
  }
  const slugWithBase = stripSlashes((slug ? path.join(astroConfig.base, slug) : Astro2.url.pathname).replaceAll("\\", "/")) || "/";
  if (showGraph === void 0) {
    if (graphData?.visible !== void 0) {
      showGraph = graphData.visible;
    } else {
      showGraph = config.graphConfig.visibilityRules ? firstMatchingPattern(slugWithBase, config.graphConfig.visibilityRules, false) : true;
    }
  }
  return renderTemplate`${showGraph && renderTemplate`${maybeRenderHead()}<div${addAttribute(className ?? "", "class:list")}>${renderSlot($$result, $$slots["title"])}${renderComponent($$result, "Graph", $$Graph, { "slug": slugWithBase, "sitemap": {}, "config": {
    ...config.graphConfig,
    ...graphData,
    ...graphConfig ?? {}
  }, "debug": config.debug, "trailingSlashes": trailingSlashes ?? astroConfig.trailingSlashes !== "never" ?? true })}</div>`}${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-site-graph/components/graph/PageGraph.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-site-graph/components/graph/PageGraph.astro", void 0);

const $$Astro$b = createAstro("https://ece3849.wpiembedded.com");
const $$Backlinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Backlinks;
  let { backlinks, sitemap } = Astro2.props;
  return renderTemplate`${backlinks.map((link) => renderTemplate`${maybeRenderHead()}<ul class="slsg-backlinks" style="--depth: 0;"><li style="--depth: 0;"><a${addAttribute("/" + link, "href")} style="--depth: 0;" target="_self" class="slsg-backlink"><span style="--depth: 0;">${sitemap[link].title}</span></a></li></ul>`)}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-site-graph/components/backlinks/Backlinks.astro", void 0);

const $$Astro$a = createAstro("https://ece3849.wpiembedded.com");
const $$PageBacklinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$PageBacklinks;
  let backlinksData = {};
  let { slug, showBacklinks, class: className, trailingSlashes } = Astro2.props;
  let { entry } = Astro2.locals.starlightRoute;
  if (entry.id) {
    backlinksData = entry.data?.backlinks;
  }
  trailingSlashes = trailingSlashes ?? astroConfig.trailingSlashes !== "never" ?? true;
  const slugWithBase = ensureTrailingSlash(stripSlashes((slug ? path.join(astroConfig.base, slug) : Astro2.url.pathname).replaceAll("\\", "/")), trailingSlashes);
  const sitemap = config.sitemapConfig.sitemap;
  let backlinks = [];
  if (sitemap) {
    const sitemap_entry = sitemap[slugWithBase];
    if (sitemap_entry?.backlinks)
      backlinks = sitemap_entry.backlinks.sort((a, b) => sitemap[a].title.localeCompare(sitemap[b].title));
  }
  if (showBacklinks === void 0) {
    if (backlinksData?.visible !== void 0) {
      showBacklinks = backlinksData.visible;
    } else {
      showBacklinks = config.backlinksConfig.visibilityRules ? firstMatchingPattern(slugWithBase, config.backlinksConfig.visibilityRules, false) : true;
    }
  }
  return renderTemplate`${showBacklinks && backlinks.length > 0 && renderTemplate`${maybeRenderHead()}<div${addAttribute(className ?? "", "class:list")}${addAttribute(slugWithBase, "data-slug")}>${renderSlot($$result, $$slots["title"])}${renderComponent($$result, "Backlinks", $$Backlinks, { "backlinks": backlinks, "sitemap": sitemap })}</div>`}${renderScript($$result, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-site-graph/components/backlinks/PageBacklinks.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-site-graph/components/backlinks/PageBacklinks.astro", void 0);

const $$Astro$9 = createAstro("https://ece3849.wpiembedded.com");
const $$PageSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$PageSidebar;
  return renderTemplate`${renderComponent($$result, "PageGraph", $$PageGraph, { "class": "right-sidebar-panel slsg-graph-panel" }, { "title": ($$result2) => renderTemplate`${maybeRenderHead()}<h2>${Astro2.locals.t("starlight-site-graph.graph")}</h2>` })} ${renderComponent($$result, "Default", $$PageSidebar$1, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} ${renderComponent($$result, "PageBacklinks", $$PageBacklinks, { "class": "right-sidebar-panel slsg-backlinks-panel" }, { "title": ($$result2) => renderTemplate`<h2>${Astro2.locals.t("starlight-site-graph.backlinks")}</h2>` })}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/starlight-site-graph/overrides/PageSidebar.astro", void 0);

const $$Astro$8 = createAstro("https://ece3849.wpiembedded.com");
const $$PageTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PageTitle;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(PAGE_TITLE_ID, "id")} class="astro-j6tvhyss">${Astro2.locals.starlightRoute.entry.data.title}</h1> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/PageTitle.astro", void 0);

const $$MobileMenuFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mobile-preferences sl-flex astro-wu23bvmt"> <div class="social-icons astro-wu23bvmt"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "astro-wu23bvmt" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "class": "astro-wu23bvmt" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "class": "astro-wu23bvmt" })} </div> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/MobileMenuFooter.astro", void 0);

const base = stripTrailingSlash(process.env.BASE_URL);
function pathWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base + "/";
}
function fileWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base;
}

const defaultFormatStrategy = {
  addBase: pathWithBase,
  handleExtension: (href) => stripHtmlExtension(href)
};
const formatStrategies = {
  file: {
    addBase: fileWithBase,
    handleExtension: (href) => ensureHtmlExtension(href)
  },
  directory: defaultFormatStrategy,
  preserve: defaultFormatStrategy
};
const trailingSlashStrategies = {
  always: ensureTrailingSlash$1,
  never: stripTrailingSlash,
  ignore: (href) => href
};
function formatPath$1(href, { format = "directory", trailingSlash = "ignore" }) {
  const formatStrategy = formatStrategies[format];
  const trailingSlashStrategy = trailingSlashStrategies[trailingSlash];
  href = formatStrategy.handleExtension(href);
  href = formatStrategy.addBase(href);
  if (format === "file") return href;
  href = href === "/" ? href : trailingSlashStrategy(href);
  return href;
}
function createPathFormatter(opts) {
  return (href) => formatPath$1(href, opts);
}

const formatPath = createPathFormatter({
  format: project.build.format,
  trailingSlash: project.trailingSlash
});

function slugToLocale$1(slug, config) {
  const localesConfig = config.locales ?? {};
  const baseSegment = slug?.split("/")[0];
  if (baseSegment && localesConfig[baseSegment]) return baseSegment;
  if (!localesConfig.root) return config.defaultLocale.locale;
  return void 0;
}

function slugToLocale(slug) {
  return slugToLocale$1(slug, starlightConfig);
}
function slugToLocaleData(slug) {
  const locale = slugToLocale(slug);
  return { dir: localeToDir(locale), lang: localeToLang(locale), locale };
}
function localeToLang(locale) {
  const lang = locale ? starlightConfig.locales?.[locale]?.lang : starlightConfig.locales?.root?.lang;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale;
  return lang || defaultLang || BuiltInDefaultLocale.lang;
}
function localeToDir(locale) {
  const dir = locale ? starlightConfig.locales?.[locale]?.dir : starlightConfig.locales?.root?.dir;
  return dir || starlightConfig.defaultLocale.dir;
}
function slugToParam(slug) {
  return slug === "index" || slug === "" || slug === "/" ? void 0 : (slug.endsWith("/index") ? slug.slice(0, -6) : slug).normalize();
}
function slugToPathname(slug) {
  const param = slugToParam(slug);
  return param ? "/" + param + "/" : "/";
}
function localizedId(id, locale) {
  const idLocale = slugToLocale(id);
  if (idLocale) {
    return id.replace(idLocale + "/", locale ? locale + "/" : "");
  } else if (locale) {
    return locale + "/" + id;
  } else {
    return id;
  }
}

function validateLogoImports() {
  if (starlightConfig.logo) {
    let err;
    if ("src" in starlightConfig.logo) {
      if (!logos.dark || !logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.src}" (logo.src)`;
      }
    } else {
      if (!logos.dark) {
        err = `Could not resolve logo import for "${starlightConfig.logo.dark}" (logo.dark)`;
      } else if (!logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.light}" (logo.light)`;
      }
    }
    if (err) throw new Error(err);
  }
}

validateLogoImports();
const normalizeIndexSlug = (slug) => slug === "index" ? "" : slug;
function normalizeCollectionEntry(entry) {
  const slug = normalizeIndexSlug(entry.slug ?? entry.id);
  return {
    ...entry,
    // In a collection with a loader, the `id` is a slug and should be normalized.
    id: entry.slug ? entry.id : slug,
    // In a legacy collection, the `filePath` property doesn't exist.
    filePath: entry.filePath ?? `${getCollectionPathFromRoot("docs", project)}/${entry.id}`,
    // In a collection with a loader, the `slug` property is replaced by the `id`.
    slug: normalizeIndexSlug(entry.slug ?? entry.id)
  };
}
const docs = (await getCollection("docs", ({ data }) => {
  return data.draft === false;
}) ?? []).map(normalizeCollectionEntry);
function getRoutes() {
  const routes2 = docs.map((entry) => ({
    entry,
    slug: entry.slug,
    id: entry.id,
    entryMeta: slugToLocaleData(entry.slug),
    ...slugToLocaleData(entry.slug)
  }));
  return routes2;
}
const routes = getRoutes();
function getParamRouteMapping() {
  const map = /* @__PURE__ */ new Map();
  for (const route of routes) {
    map.set(slugToParam(route.slug), route);
  }
  return map;
}
const routesBySlugParam = getParamRouteMapping();
function getRouteBySlugParam(slugParam) {
  return routesBySlugParam.get(slugParam?.replace(/\/$/, "") || void 0);
}
function getPaths() {
  return routes.map((route) => ({
    params: { slug: slugToParam(route.slug) },
    props: route
  }));
}
const paths = getPaths();
function getLocaleRoutes(locale) {
  return filterByLocale(routes, locale);
}
function filterByLocale(items, locale) {
  if (starlightConfig.locales) {
    if (locale && locale in starlightConfig.locales) {
      return items.filter((i) => i.slug === locale || i.slug.startsWith(locale + "/"));
    } else if (starlightConfig.locales.root) {
      const langKeys = Object.keys(starlightConfig.locales).filter((k) => k !== "root");
      const isLangIndex = new RegExp(`^(${langKeys.join("|")})$`);
      const isLangDir = new RegExp(`^(${langKeys.join("|")})/`);
      return items.filter((i) => !isLangIndex.test(i.slug) && !isLangDir.test(i.slug));
    }
  }
  return items;
}

const DirKey = Symbol("DirKey");
const SlugKey = Symbol("SlugKey");
const neverPathFormatter = createPathFormatter({ trailingSlash: "never" });
const docsCollectionPathFromRoot = getCollectionPathFromRoot("docs", project);
function makeDir(slug) {
  const dir = {};
  Object.defineProperty(dir, DirKey, { enumerable: false });
  Object.defineProperty(dir, SlugKey, { value: slug, enumerable: false });
  return dir;
}
function isDir(data) {
  return DirKey in data;
}
function configItemToEntry(item, currentPathname, locale, routes2) {
  if ("link" in item) {
    return linkFromSidebarLinkItem(item, locale);
  } else if ("autogenerate" in item) {
    return groupFromAutogenerateConfig(item, locale, routes2, currentPathname);
  } else if ("slug" in item) {
    return linkFromInternalSidebarLinkItem(item, locale);
  } else {
    const label = pickLang(item.translations, localeToLang(locale)) || item.label;
    return {
      type: "group",
      label,
      entries: item.items.map((i) => configItemToEntry(i, currentPathname, locale, routes2)),
      collapsed: item.collapsed,
      badge: getSidebarBadge(item.badge, locale, label)
    };
  }
}
function groupFromAutogenerateConfig(item, locale, routes2, currentPathname) {
  const { attrs, collapsed: subgroupCollapsed, directory } = item.autogenerate;
  const localeDir = locale ? locale + "/" + directory : directory;
  const dirDocs = routes2.filter((doc) => {
    const filePathFromContentDir = getRoutePathRelativeToCollectionRoot(doc, locale);
    return (
      // Match against `foo.md` or `foo/index.md`.
      stripExtension(filePathFromContentDir) === localeDir || // Match against `foo/anything/else.md`.
      filePathFromContentDir.startsWith(localeDir + "/")
    );
  });
  const tree = treeify(dirDocs, locale, localeDir);
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return {
    type: "group",
    label,
    entries: sidebarFromDir(
      tree,
      currentPathname,
      locale,
      subgroupCollapsed ?? item.collapsed,
      attrs
    ),
    collapsed: item.collapsed,
    badge: getSidebarBadge(item.badge, locale, label)
  };
}
const isAbsolute = (link) => /^https?:\/\//.test(link);
function linkFromSidebarLinkItem(item, locale) {
  let href = item.link;
  if (!isAbsolute(href)) {
    href = ensureLeadingSlash(href);
    if (locale) href = "/" + locale + href;
  }
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return makeSidebarLink(href, label, getSidebarBadge(item.badge, locale, label), item.attrs);
}
function linkFromInternalSidebarLinkItem(item, locale) {
  const slug = item.slug === "index" ? "" : item.slug;
  const localizedSlug = locale ? slug ? locale + "/" + slug : locale : slug;
  const route = routes.find((entry) => localizedSlug === entry.slug);
  if (!route) {
    const hasExternalSlashes = item.slug.at(0) === "/" || item.slug.at(-1) === "/";
    if (hasExternalSlashes) {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config must not start or end with a slash.`,
        `Please try updating \`"${item.slug}"\` to \`"${stripLeadingAndTrailingSlashes(item.slug)}"\`.`
      );
    } else {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config does not exist.`,
        "Update the Starlight config to reference a valid entry slug in the docs content collection.\nLearn more about Astro content collection slugs at https://docs.astro.build/en/reference/modules/astro-content/#getentry"
      );
    }
  }
  const frontmatter = route.entry.data;
  const label = pickLang(item.translations, localeToLang(locale)) || item.label || frontmatter.sidebar?.label || frontmatter.title;
  const badge = item.badge ?? frontmatter.sidebar?.badge;
  const attrs = { ...frontmatter.sidebar?.attrs, ...item.attrs };
  return makeSidebarLink(
    slugToPathname(route.slug),
    label,
    getSidebarBadge(badge, locale, label),
    attrs
  );
}
function makeSidebarLink(href, label, badge, attrs) {
  if (!isAbsolute(href)) {
    href = formatPath(href);
  }
  return makeLink({ label, href, badge, attrs });
}
function makeLink({
  attrs = {},
  badge = void 0,
  ...opts
}) {
  return { type: "link", ...opts, badge, isCurrent: false, attrs };
}
function pathsMatch(pathA, pathB) {
  return neverPathFormatter(pathA) === neverPathFormatter(pathB);
}
function getBreadcrumbs(path, baseDir) {
  const pathWithoutExt = stripExtension(path);
  if (pathWithoutExt === baseDir) return [];
  baseDir = ensureTrailingSlash$1(baseDir);
  const relativePath = pathWithoutExt.startsWith(baseDir) ? pathWithoutExt.replace(baseDir, "") : pathWithoutExt;
  return relativePath.split("/");
}
function getRoutePathRelativeToCollectionRoot(route, locale) {
  return (        localizedId(route.entry.filePath.replace(`${docsCollectionPathFromRoot}/`, ""), locale)
  );
}
function treeify(routes2, locale, baseDir) {
  const treeRoot = makeDir(baseDir);
  routes2.filter((doc) => !doc.entry.data.sidebar.hidden).map((doc) => [getRoutePathRelativeToCollectionRoot(doc, locale), doc]).sort(([a], [b]) => b.split("/").length - a.split("/").length).forEach(([filePathFromContentDir, doc]) => {
    const parts = getBreadcrumbs(filePathFromContentDir, baseDir);
    let currentNode = treeRoot;
    parts.forEach((part, index) => {
      const isLeaf = index === parts.length - 1;
      if (isLeaf && Object.hasOwn(currentNode, part)) {
        currentNode = currentNode[part];
        part = "index";
      }
      if (!isLeaf) {
        const path = currentNode[SlugKey];
        currentNode[part] ||= makeDir(stripLeadingAndTrailingSlashes(path + "/" + part));
        currentNode = currentNode[part];
      } else {
        currentNode[part] = doc;
      }
    });
  });
  return treeRoot;
}
function linkFromRoute(route, attrs) {
  return makeSidebarLink(
    slugToPathname(route.slug),
    route.entry.data.sidebar.label || route.entry.data.title,
    route.entry.data.sidebar.badge,
    { ...attrs, ...route.entry.data.sidebar.attrs }
  );
}
function getOrder(routeOrDir) {
  return isDir(routeOrDir) ? Math.min(...Object.values(routeOrDir).flatMap(getOrder)) : (
    // If no order value is found, set it to the largest number possible.
    routeOrDir.entry.data.sidebar.order ?? Number.MAX_VALUE
  );
}
function sortDirEntries(dir) {
  const collator = new Intl.Collator(localeToLang(void 0));
  return dir.sort(([_keyA, a], [_keyB, b]) => {
    const [aOrder, bOrder] = [getOrder(a), getOrder(b)];
    if (aOrder !== bOrder) return aOrder < bOrder ? -1 : 1;
    return collator.compare(isDir(a) ? a[SlugKey] : a.slug, isDir(b) ? b[SlugKey] : b.slug);
  });
}
function groupFromDir(dir, fullPath, dirName, currentPathname, locale, collapsed, attrs) {
  const entries = sortDirEntries(Object.entries(dir)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, `${fullPath}/${key}`, key, currentPathname, locale, collapsed, attrs)
  );
  return {
    type: "group",
    label: dirName,
    entries,
    collapsed,
    badge: void 0
  };
}
function dirToItem(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed, attrs) {
  return isDir(dirOrRoute) ? groupFromDir(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed, attrs) : linkFromRoute(dirOrRoute, attrs);
}
function sidebarFromDir(tree, currentPathname, locale, collapsed, attrs) {
  return sortDirEntries(Object.entries(tree)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, key, key, currentPathname, locale, collapsed, attrs)
  );
}
const intermediateSidebars = /* @__PURE__ */ new Map();
function getSidebar(pathname, locale) {
  let intermediateSidebar = intermediateSidebars.get(locale);
  if (!intermediateSidebar) {
    intermediateSidebar = getIntermediateSidebarFromConfig(starlightConfig.sidebar, pathname, locale);
    intermediateSidebars.set(locale, intermediateSidebar);
  }
  return getSidebarFromIntermediateSidebar(intermediateSidebar, pathname);
}
function getIntermediateSidebarFromConfig(sidebarConfig, pathname, locale) {
  const routes2 = getLocaleRoutes(locale);
  if (sidebarConfig) {
    return sidebarConfig.map((group) => configItemToEntry(group, pathname, locale, routes2));
  } else {
    const tree = treeify(routes2, locale, locale || "");
    return sidebarFromDir(tree, pathname, locale, false);
  }
}
function getSidebarFromIntermediateSidebar(intermediateSidebar, pathname) {
  const sidebar = structuredClone(intermediateSidebar);
  setIntermediateSidebarCurrentEntry(sidebar, pathname);
  return sidebar;
}
function setIntermediateSidebarCurrentEntry(intermediateSidebar, pathname) {
  for (const entry of intermediateSidebar) {
    if (entry.type === "link" && pathsMatch(encodeURI(entry.href), pathname)) {
      entry.isCurrent = true;
      return true;
    }
    if (entry.type === "group" && setIntermediateSidebarCurrentEntry(entry.entries, pathname)) {
      return true;
    }
  }
  return false;
}
function getSidebarHash(sidebar) {
  let hash = 0;
  const sidebarIdentity = recursivelyBuildSidebarIdentity(sidebar);
  for (let i = 0; i < sidebarIdentity.length; i++) {
    const char = sidebarIdentity.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return (hash >>> 0).toString(36).padStart(7, "0");
}
function recursivelyBuildSidebarIdentity(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? entry.label + recursivelyBuildSidebarIdentity(entry.entries) : entry.label + entry.href
  ).join("");
}
function flattenSidebar(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
function getPrevNextLinks(sidebar, paginationEnabled, config2) {
  const entries = flattenSidebar(sidebar);
  const currentIndex = entries.findIndex((entry) => entry.isCurrent);
  const prev = applyPrevNextLinkConfig(entries[currentIndex - 1], paginationEnabled, config2.prev);
  const next = applyPrevNextLinkConfig(
    currentIndex > -1 ? entries[currentIndex + 1] : void 0,
    paginationEnabled,
    config2.next
  );
  return { prev, next };
}
function applyPrevNextLinkConfig(link, paginationEnabled, config2) {
  if (config2 === false) return void 0;
  else if (config2 === true) return link;
  else if (typeof config2 === "string" && link) {
    return { ...link, label: config2 };
  } else if (typeof config2 === "object") {
    if (link) {
      return {
        ...link,
        label: config2.label ?? link.label,
        href: config2.link ?? link.href,
        // Explicitly remove sidebar link attributes for prev/next links.
        attrs: {}
      };
    } else if (config2.link && config2.label) {
      return makeLink({ href: config2.link, label: config2.label });
    }
  }
  return paginationEnabled ? link : void 0;
}
function getSidebarBadge(config2, locale, itemLabel) {
  if (!config2) return;
  if (typeof config2 === "string") {
    return { variant: "default", text: config2 };
  }
  return { ...config2, text: getSidebarBadgeText(config2.text, locale, itemLabel) };
}
function getSidebarBadgeText(text, locale, itemLabel) {
  if (typeof text === "string") return text;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale || BuiltInDefaultLocale.lang;
  const defaultText = text[defaultLang];
  if (!defaultText) {
    throw new AstroUserError(
      `The badge text for "${itemLabel}" must have a key for the default language "${defaultLang}".`,
      "Update the Starlight config to include a badge text for the default language.\nLearn more about sidebar badges internationalization at https://starlight.astro.build/guides/sidebar/#internationalization-with-badges"
    );
  }
  return pickLang(text, localeToLang(locale)) || defaultText;
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$7 = createAstro("https://ece3849.wpiembedded.com");
const $$SidebarPersister = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SidebarPersister;
  const hash = getSidebarHash(Astro2.locals.starlightRoute.sidebar);
  return renderTemplate`${renderComponent($$result, "sl-sidebar-state-persist", "sl-sidebar-state-persist", { "data-hash": hash, "class": "astro-kku4brbg" }, { "default": () => renderTemplate(_a$1 || (_a$1 = __template$1([` <script aria-hidden="true">
		(() => {
			try {
				if (!matchMedia('(min-width: 50em)').matches) return;
				/** @type {HTMLElement | null} */
				const target = document.querySelector('sl-sidebar-state-persist');
				const state = JSON.parse(sessionStorage.getItem('sl-sidebar-state') || '0');
				if (!target || !state || target.dataset.hash !== state.hash) return;
				window._starlightScrollRestore = state.scroll;
				customElements.define(
					'sl-sidebar-restore',
					class SidebarRestore extends HTMLElement {
						connectedCallback() {
							try {
								const idx = parseInt(this.dataset.index || '');
								const details = this.closest('details');
								if (details && typeof state.open[idx] === 'boolean') details.open = state.open[idx];
							} catch {}
						}
					}
				);
			} catch {}
		})();
	<\/script> `, ` <script aria-hidden="true">
		(() => {
			const scroller = document.getElementById('starlight__sidebar');
			if (!window._starlightScrollRestore || !scroller) return;
			scroller.scrollTop = window._starlightScrollRestore;
			delete window._starlightScrollRestore;
		})();
	<\/script> `])), renderSlot($$result, $$slots["default"])) })} `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/SidebarPersister.astro", void 0);

const $$Astro$6 = createAstro("https://ece3849.wpiembedded.com");
const $$SidebarRestorePoint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SidebarRestorePoint;
  const currentGroupIndexSymbol = Symbol.for("starlight-sidebar-group-index");
  const locals = Astro2.locals;
  const index = locals[currentGroupIndexSymbol] || 0;
  locals[currentGroupIndexSymbol] = index + 1;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-restore", "sl-sidebar-restore", { "data-index": index })}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/SidebarRestorePoint.astro", void 0);

const $$Astro$5 = createAstro("https://ece3849.wpiembedded.com");
const $$SidebarSublist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SidebarSublist;
  const { sublist, nested } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ "top-level": !nested }, "astro-3ii7xxms"], "class:list")}> ${sublist.map((entry) => renderTemplate`<li class="astro-3ii7xxms"> ${entry.type === "link" ? renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.isCurrent && "page", "aria-current")}${addAttribute([[{ large: !nested }, entry.attrs.class], "astro-3ii7xxms"], "class:list")}${spreadAttributes(entry.attrs)}> <span class="astro-3ii7xxms">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-3ii7xxms", "text": entry.badge.text })}`} </a>` : renderTemplate`<details${addAttribute(flattenSidebar(entry.entries).some((i) => i.isCurrent) || !entry.collapsed, "open")} class="astro-3ii7xxms"> <summary class="astro-3ii7xxms"> <span class="group-label astro-3ii7xxms"> <span class="large astro-3ii7xxms">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-3ii7xxms", "text": entry.badge.text })}`} </span> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-3ii7xxms", "size": "1.25rem" })} </summary> ${renderComponent($$result, "SidebarRestorePoint", $$SidebarRestorePoint, { "class": "astro-3ii7xxms" })} ${renderComponent($$result, "Astro.self", Astro2.self, { "sublist": entry.entries, "nested": true, "class": "astro-3ii7xxms" })} </details>`} </li>`)} </ul> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/SidebarSublist.astro", void 0);

const $$Astro$4 = createAstro("https://ece3849.wpiembedded.com");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { sidebar } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "SidebarPersister", $$SidebarPersister, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SidebarSublist", $$SidebarSublist, { "sublist": sidebar })} ` })} ${maybeRenderHead()}<div class="md:sl-hidden"> ${renderComponent($$result, "MobileMenuFooter", $$MobileMenuFooter, {})} </div>`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/Sidebar.astro", void 0);

const $$Astro$3 = createAstro("https://ece3849.wpiembedded.com");
const $$SkipLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkipLink;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`#${PAGE_TITLE_ID}`, "href")} class="astro-7q3lir66">${Astro2.locals.t("skipLink.label")}</a> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/SkipLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(`#theme-icons`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"], ["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(\\`#theme-icons\\`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"])), renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "light" }), renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "dark" }), renderComponent($$result, "Icon", $$Icon, { "name": "laptop", "class": "auto" }));
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/ThemeProvider.astro", void 0);

const $$Astro$2 = createAstro("https://ece3849.wpiembedded.com");
const $$TwoColumnContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  return renderTemplate`${maybeRenderHead()}<div class="lg:sl-flex astro-67yu43on"> ${Astro2.locals.starlightRoute.toc && renderTemplate`<aside class="right-sidebar-container print:hidden astro-67yu43on"> <div class="right-sidebar astro-67yu43on"> ${renderSlot($$result, $$slots["right-sidebar"])} </div> </aside>`} <div class="main-pane astro-67yu43on">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/TwoColumnContent.astro", void 0);

const $$Astro$1 = createAstro("https://ece3849.wpiembedded.com");
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Page;
  const { starlightRoute } = Astro2.locals;
  const pagefindEnabled = starlightRoute.entry.slug !== "404" && !starlightRoute.entry.slug.endsWith("/404") && starlightRoute.entry.data.pagefind !== false;
  const htmlDataAttributes = { "data-theme": "dark" };
  if (Boolean(starlightRoute.toc)) htmlDataAttributes["data-has-toc"] = "";
  if (starlightRoute.hasSidebar) htmlDataAttributes["data-has-sidebar"] = "";
  if (Boolean(starlightRoute.entry.data.hero)) htmlDataAttributes["data-has-hero"] = "";
  const mainDataAttributes = {};
  if (pagefindEnabled) mainDataAttributes["data-pagefind-body"] = "";
  return renderTemplate`<html${addAttribute(starlightRoute.lang, "lang")}${addAttribute(starlightRoute.dir, "dir")}${spreadAttributes(htmlDataAttributes, void 0, { "class": "astro-bguv2lll" })}> <head>${renderComponent($$result, "Head", $$Head, { "class": "astro-bguv2lll" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { "class": "astro-bguv2lll" })}<link rel="stylesheet"${addAttribute(printHref, "href")} media="print">${renderHead()}</head> <body class="astro-bguv2lll"> ${renderComponent($$result, "SkipLink", $$SkipLink, { "class": "astro-bguv2lll" })} ${renderComponent($$result, "PageFrame", $$PageFrame, { "class": "astro-bguv2lll" }, { "default": ($$result2) => renderTemplate`  ${renderScript($$result2, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/Page.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result2, "TwoColumnContent", $$TwoColumnContent, { "class": "astro-bguv2lll" }, { "default": ($$result3) => renderTemplate`  <main${spreadAttributes(mainDataAttributes, void 0, { "class": "astro-bguv2lll" })}${addAttribute(starlightRoute.entryMeta.lang, "lang")}${addAttribute(starlightRoute.entryMeta.dir, "dir")}>  ${renderComponent($$result3, "Banner", $$Banner, { "class": "astro-bguv2lll" })} ${starlightRoute.entry.data.hero ? renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { "class": "astro-bguv2lll" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Hero", $$Hero, { "class": "astro-bguv2lll" })} ${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderSlot($$result5, $$slots["default"])} ` })} ${renderComponent($$result4, "Footer", $$Footer, { "class": "astro-bguv2lll" })} ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "class": "astro-bguv2lll" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "PageTitle", $$PageTitle, { "class": "astro-bguv2lll" })} ${starlightRoute.entry.data.draft && renderTemplate`${renderComponent($$result5, "DraftContentNotice", $$DraftContentNotice, { "class": "astro-bguv2lll" })}`}${starlightRoute.isFallback && renderTemplate`${renderComponent($$result5, "FallbackContentNotice", $$FallbackContentNotice, { "class": "astro-bguv2lll" })}`}` })} ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-bguv2lll" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "MarkdownContent", $$MarkdownContent, { "class": "astro-bguv2lll" }, { "default": ($$result6) => renderTemplate` ${renderSlot($$result6, $$slots["default"])} ` })} ${renderComponent($$result5, "Footer", $$Footer, { "class": "astro-bguv2lll" })} ` })} ` })}`} </main> `, "right-sidebar": ($$result3) => renderTemplate`${renderComponent($$result3, "PageSidebar", $$PageSidebar, { "slot": "right-sidebar", "class": "astro-bguv2lll" })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "class": "astro-bguv2lll" })}`, "sidebar": ($$result2) => renderTemplate`${starlightRoute.hasSidebar && renderTemplate`${renderComponent($$result2, "Sidebar", $$Sidebar, { "slot": "sidebar", "class": "astro-bguv2lll" })}`}` })} </body></html>`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/components/Page.astro", void 0);

function generateToC(headings, { minHeadingLevel, maxHeadingLevel, title }) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel);
  const toc = [{ depth: 2, slug: PAGE_TITLE_ID, text: title, children: [] }];
  for (const heading of headings) injectChild(toc, { ...heading, children: [] });
  return toc;
}
function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    return injectChild(lastItem.children, item);
  }
}

const makeAPI = (data) => {
  const trackedDocsFiles = new Map(data);
  return {
    getNewestCommitDate: (file) => {
      const timestamp = trackedDocsFiles.get(file);
      if (!timestamp) throw new Error(`Failed to retrieve the git history for file "${file}"`);
      return new Date(timestamp);
    }
  };
};

const api = makeAPI([["src/content/docs/guides/FreeRTOS/freertos.mdx",1774475312000],["src/content/docs/guides/FreeRTOS/queues.mdx",1774475312000],["src/content/docs/guides/FreeRTOS/tasks.mdx",1774475312000],["src/content/docs/guides/labTimeline.mdx",1774475312000],["src/content/docs/index.mdx",1774475312000],["src/content/docs/labs/lab1.bak",1774475312000],["src/content/docs/labs/lab1.mdx",1774475312000],["src/content/docs/labs/lab1_v2.mdx.bak",1774475312000],["src/content/docs/labs/lab2.mdx",1774475312000],["src/content/docs/labs/lab3.bak",1774475312000],["src/content/docs/labs/lab4.bak",1774475312000],["src/content/docs/labs/lab5.bak",1774475312000],["src/content/docs/labs/lab5.mdx",1764097462000],["src/content/docs/labs/lab5",1764080425000],["src/content/docs/labs/lab4.mdx",1763460784000],["src/content/docs/labs/lab3.mdx",1763460425000],["src/content/docs/guides/FreeRTOS/freertosproyects.mdx",1762350465000],["src/content/docs/guides/FreeRTOS/hooks.mdx",1762136801000],["src/content/docs/guides/FreeRTOS/semaphores-mutexes.mdx",1762136801000],["src/content/docs/guides/FreeRTOS/software-timers.mdx",1762136801000],["src/content/docs/guides/FreeRTOS/system-utilities.mdx",1762136801000],["src/content/docs/guides/programmingStyle.mdx",1762136801000],["src/content/docs/labs/lab0.mdx",1762136801000],["src/content/docs/reference/Example Projects/stopwatchoverflow.mdx",1762136801000],["src/content/docs/guides/ccs/enviromentsetup.mdx",1761945644000],["src/content/docs/guides/ccs/external_libraries.mdx",1761945644000],["src/content/docs/guides/ccs/installccs.mdx",1761945644000],["src/content/docs/guides/ccs/openworkspace.mdx",1761945644000],["src/content/docs/guides/ccs/setupguide.mdx",1761945644000],["src/content/docs/reference/Example Projects/blinkExample.mdx",1761945644000],["src/content/docs/reference/Example Projects/buzzerExample.mdx",1761945644000],["src/content/docs/guides/freertos.mdx",1761920386000],["src/content/docs/guides/freertosproyects.mdx",1761920386000],["src/content/docs/guides/setupGuide.mdx",1761777162000],["src/content/docs/reference/Libraries/ButtonsDriver.mdx",1761777162000],["src/content/docs/reference/Libraries/OTP3001.mdx",1761777162000],["src/content/docs/reference/Libraries/TimerLib.mdx",1761777162000],["src/content/docs/reference/Libraries/elapsedTime.mdx",1761777162000],["src/content/docs/reference/Libraries/joystickDriver.mdx",1761777162000],["src/content/docs/reference/Tivaware/mic_adc.mdx",1761777162000],["src/content/docs/reference/Tivaware/multipleScreens.mdx",1761777162000],["src/content/docs/reference/Tivaware/pwmSignals.mdx",1761777162000],["src/content/docs/config.ts",1761764053000],["src/content/docs/resources/index.md",1761671347000],["src/content/docs/reference/Example Proyects/buzzerExample.mdx",1761665085000],["src/content/docs/reference/Example Proyects/blinkExample.mdx",1761637283000],["src/content/docs/reference/example.md",1761597709000],["src/content/docs/labs/lab--lab-0-introduction.mdx",1761583003000],["src/content/docs/labs/lab00.mdx",1761583003000],["src/content/docs/guides/labKit.mdx",1761576300000],["src/content/docs/guides/enviromentsetup.mdx",1761575669000],["src/content/docs/guides/external_libraries.mdx",1761575669000],["src/content/docs/guides/openworkspace.mdx",1761575669000],["src/content/docs/guides/installccs.mdx",1761456038000],["src/content/docs/guides/example.md",1761153766000],["src/content/docs/labs/lab-3-test.mdx",1761153766000],["src/content/docs/syllabus.mdx",1752194340000],["src/content/docs/faq/index.md",1752189697000],["src/content/docs/labs/lab--lab-0-introduction.md",1752188221000]]);const getNewestCommitDate = api.getNewestCommitDate;

const version = "0.36.3";

const HeadConfigSchema = ({
  source
}) => z.array(
  z.object({
    /** Name of the HTML tag to add to `<head>`, e.g. `'meta'`, `'link'`, or `'script'`. */
    tag: z.enum(["title", "base", "link", "style", "meta", "script", "noscript", "template"]),
    /** Attributes to set on the tag, e.g. `{ rel: 'stylesheet', href: '/custom.css' }`. */
    attrs: z.record(z.union([z.string(), z.boolean(), z.undefined()])).optional(),
    /** Content to place inside the tag (optional). */
    content: z.string().optional()
  }).superRefine((config, ctx) => {
    if (config.tag !== "meta" || config.content === void 0) return;
    const { content, ...rest } = config;
    const correctTag = {
      ...rest,
      attrs: { ...config.attrs ?? { name: "identifier" }, content: config.content }
    };
    const code = yaml.dump([correctTag]);
    ctx.addIssue({
      code: "custom",
      message: `The \`head\` configuration includes a \`meta\` tag with \`content\` which is invalid HTML.
You should instead use a \`content\` attribute ` + (Object.keys(rest.attrs ?? {}).length === 0 ? "with an additional attribute such as `name`, `property`, or `http-equiv` to identify the kind of metadata it represents " : "") + `in the \`attrs\` object:

` + code
    });
  })
).default([]);

const canonicalTrailingSlashStrategies = {
  always: ensureTrailingSlash$1,
  never: stripTrailingSlash,
  ignore: ensureTrailingSlash$1
};
function formatCanonical(href, opts) {
  return canonicalTrailingSlashStrategies[opts.trailingSlash](href);
}

const HeadSchema = HeadConfigSchema({ source: "content" });
function getHead({ entry, lang }, context, siteTitle) {
  const { data } = entry;
  const canonical = context.site ? new URL(context.url.pathname, context.site) : void 0;
  const canonicalHref = canonical?.href ? formatCanonical(canonical.href, {
    trailingSlash: project.trailingSlash
  }) : void 0;
  const description = data.description || starlightConfig.description;
  const headDefaults = [
    { tag: "meta", attrs: { charset: "utf-8" } },
    {
      tag: "meta",
      attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }
    },
    { tag: "title", content: `${data.title} ${starlightConfig.titleDelimiter} ${siteTitle}` },
    ...canonicalHref !== void 0 ? [{ tag: "link", attrs: { rel: "canonical", href: canonicalHref } }] : [],
    { tag: "meta", attrs: { name: "generator", content: context.generator } },
    {
      tag: "meta",
      attrs: { name: "generator", content: `Starlight v${version}` }
    },
    // Favicon
    {
      tag: "link",
      attrs: {
        rel: "shortcut icon",
        href: fileWithBase(starlightConfig.favicon.href),
        type: starlightConfig.favicon.type
      }
    },
    // OpenGraph Tags
    { tag: "meta", attrs: { property: "og:title", content: data.title } },
    { tag: "meta", attrs: { property: "og:type", content: "article" } },
    ...canonicalHref !== void 0 ? [{ tag: "meta", attrs: { property: "og:url", content: canonicalHref } }] : [],
    { tag: "meta", attrs: { property: "og:locale", content: lang } },
    ...description !== void 0 ? [{ tag: "meta", attrs: { property: "og:description", content: description } }] : [],
    { tag: "meta", attrs: { property: "og:site_name", content: siteTitle } },
    // Twitter Tags
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" }
    }
  ];
  headDefaults.push({
      tag: "meta",
      attrs: { name: "description", content: description }
    });
  if (context.site) {
    headDefaults.push({
      tag: "link",
      attrs: {
        rel: "sitemap",
        href: fileWithBase("/sitemap-index.xml")
      }
    });
  }
  const twitterLink = starlightConfig.social?.find(({ icon }) => icon === "twitter" || icon === "x.com");
  if (twitterLink) {
    headDefaults.push({
      tag: "meta",
      attrs: {
        name: "twitter:site",
        content: new URL(twitterLink.href).pathname.replace("/", "@")
      }
    });
  }
  return createHead(headDefaults, starlightConfig.head, data.head);
}
function createHead(defaults, ...heads) {
  let head = HeadSchema.parse(defaults);
  for (const next of heads) {
    head = mergeHead(head, next);
  }
  return sortHead(head);
}
function hasTag(head, entry) {
  switch (entry.tag) {
    case "title":
      return head.some(({ tag }) => tag === "title");
    case "meta":
      return hasOneOf(head, entry, ["name", "property", "http-equiv"]);
    case "link":
      return head.some(
        ({ attrs }) => entry.attrs?.rel === "canonical" && attrs?.rel === "canonical" || entry.attrs?.rel === "sitemap" && attrs?.rel === "sitemap"
      );
    default:
      return false;
  }
}
function hasOneOf(head, entry, keys) {
  const attr = getAttr(keys, entry);
  if (!attr) return false;
  const [key, val] = attr;
  return head.some(({ tag, attrs }) => tag === entry.tag && attrs?.[key] === val);
}
function getAttr(keys, entry) {
  let attr;
  for (const key of keys) {
    const val = entry.attrs?.[key];
    if (val) {
      attr = [key, val];
      break;
    }
  }
  return attr;
}
function mergeHead(oldHead, newHead) {
  return [...oldHead.filter((tag) => !hasTag(newHead, tag)), ...newHead];
}
function sortHead(head) {
  return head.sort((a, b) => {
    const aImportance = getImportance(a);
    const bImportance = getImportance(b);
    return aImportance > bImportance ? -1 : bImportance > aImportance ? 1 : 0;
  });
}
function getImportance(entry) {
  if (entry.tag === "meta" && entry.attrs && ("charset" in entry.attrs || "http-equiv" in entry.attrs || entry.attrs.name === "viewport")) {
    return 100;
  }
  if (entry.tag === "title") return 90;
  if (entry.tag !== "meta") {
    if (entry.tag === "link" && entry.attrs && "rel" in entry.attrs && entry.attrs.rel === "shortcut icon") {
      return 70;
    }
    return 80;
  }
  return 0;
}

async function getRoute(context) {
  return "slug" in context.params && getRouteBySlugParam(context.params.slug) || await get404Route(context.locals);
}
function useRouteData(context, route, { Content, headings }) {
  const routeData = generateRouteData({ props: { ...route, headings }, context });
  return { ...routeData, Content };
}
function generateRouteData({
  props,
  context
}) {
  const { entry, locale, lang } = props;
  const sidebar = getSidebar(context.url.pathname, locale);
  const siteTitle = getSiteTitle(lang);
  return {
    ...props,
    siteTitle,
    siteTitleHref: getSiteTitleHref(locale),
    sidebar,
    hasSidebar: entry.data.template !== "splash",
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    toc: getToC(props),
    lastUpdated: getLastUpdated(props),
    editUrl: getEditUrl(props),
    head: getHead(props, context, siteTitle)
  };
}
function getToC({ entry, lang, headings }) {
  const tocConfig = entry.data.template === "splash" ? false : entry.data.tableOfContents !== void 0 ? entry.data.tableOfContents : starlightConfig.tableOfContents;
  if (!tocConfig) return;
  const t = useTranslations(lang);
  return {
    ...tocConfig,
    items: generateToC(headings, { ...tocConfig, title: t("tableOfContents.overview") })
  };
}
function getLastUpdated({ entry }) {
  const { lastUpdated: frontmatterLastUpdated } = entry.data;
  const { lastUpdated: configLastUpdated } = starlightConfig;
  if (frontmatterLastUpdated ?? configLastUpdated) {
    try {
      return frontmatterLastUpdated instanceof Date ? frontmatterLastUpdated : getNewestCommitDate(entry.filePath);
    } catch {
      return void 0;
    }
  }
  return void 0;
}
function getEditUrl({ entry }) {
  const { editUrl } = entry.data;
  if (editUrl === false) return;
  let url;
  if (typeof editUrl === "string") {
    url = editUrl;
  } else if (starlightConfig.editLink.baseUrl) {
    url = ensureTrailingSlash$1(starlightConfig.editLink.baseUrl) + entry.filePath;
  }
  return url ? new URL(url) : void 0;
}
function getSiteTitle(lang) {
  const defaultLang = starlightConfig.defaultLocale.lang;
  if (lang && starlightConfig.title[lang]) {
    return starlightConfig.title[lang];
  }
  return starlightConfig.title[defaultLang];
}
function getSiteTitleHref(locale) {
  return formatPath(locale || "/");
}
async function get404Route(locals) {
  const { lang = BuiltInDefaultLocale.lang, dir = BuiltInDefaultLocale.dir } = starlightConfig.defaultLocale || {};
  let locale = starlightConfig.defaultLocale?.locale;
  if (locale === "root") locale = void 0;
  const entryMeta = { dir, lang, locale };
  const fallbackEntry = {
    slug: "404",
    id: "404",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: locals.t("404.text"), actions: [] },
      pagefind: false,
      sidebar: { hidden: false, attrs: {} },
      draft: false
    },
    filePath: `${getCollectionPathFromRoot("docs", project)}/404.md`
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry ? normalizeCollectionEntry(userEntry) : fallbackEntry;
  return { ...entryMeta, entryMeta, entry, id: entry.id, slug: entry.slug };
}

const routeMiddleware = [
];

async function attachRouteDataAndRunMiddleware(context, routeData) {
  context.locals.starlightRoute = klona(routeData);
  const runner = new MiddlewareRunner(context, routeMiddleware);
  await runner.run();
}
class MiddlewareRunnerStep {
  #callback;
  constructor(callback) {
    this.#callback = callback;
  }
  async run(context, next) {
    if (this.#callback) {
      await this.#callback(context, next);
      this.#callback = null;
    }
  }
}
class MiddlewareRunner {
  #context;
  #steps;
  constructor(context, stack = []) {
    this.#context = context;
    this.#steps = stack.map((callback) => new MiddlewareRunnerStep(callback));
  }
  async #stepThrough(steps) {
    let currentStep;
    while (steps.length > 0) {
      [currentStep, ...steps] = steps;
      await currentStep.run(this.#context, async () => this.#stepThrough(steps));
    }
  }
  async run() {
    await this.#stepThrough(this.#steps);
  }
}

const $$Astro = createAstro("https://ece3849.wpiembedded.com");
const $$Common = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Common;
  const route = await getRoute(Astro2);
  const renderResult = await renderEntry(route.entry);
  await attachRouteDataAndRunMiddleware(Astro2, useRouteData(Astro2, route, renderResult));
  const { Content, entry } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, {}, { "default": async ($$result2) => renderTemplate`${Content && renderTemplate`${renderComponent($$result2, "Content", Content, { "frontmatter": entry.data })}`}` })}`;
}, "C:/Users/Edwin/Documents/GitHub/lab-wpi-ece3849/node_modules/@astrojs/starlight/routes/common.astro", void 0);

export { $$Common as $, paths as p, slugToLocale$1 as s };
