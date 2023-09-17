(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hashRE; });
/* unused harmony export extRE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endingSlashRE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return outboundRE; });
/* unused harmony export normalize */
/* unused harmony export getHash */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isExternal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isMailto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isTel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ensureExt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return resolvePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return resolveSidebarItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return groupHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return resolveNavLinkItem; });
/* unused harmony export resolveMatchingConfig */
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);

const hashRE = /#.*$/;
const extRE = /\.(md|html)$/;
const endingSlashRE = /\/$/;
const outboundRE = /^[a-z]+:/i;
function normalize(path) {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '');
}
function getHash(path) {
  const match = path.match(hashRE);
  if (match) {
    return match[0];
  }
}
function isExternal(path) {
  return outboundRE.test(path);
}
function isMailto(path) {
  return /^mailto:/.test(path);
}
function isTel(path) {
  return /^tel:/.test(path);
}
function ensureExt(path) {
  if (isExternal(path)) {
    return path;
  }
  const hashMatch = path.match(hashRE);
  const hash = hashMatch ? hashMatch[0] : '';
  const normalized = normalize(path);
  if (endingSlashRE.test(normalized)) {
    return path;
  }
  return normalized + '.html' + hash;
}
function isActive(route, path) {
  const routeHash = decodeURIComponent(route.hash);
  const linkHash = getHash(path);
  if (linkHash && routeHash !== linkHash) {
    return false;
  }
  const routePath = normalize(route.path);
  const pagePath = normalize(path);
  return routePath === pagePath;
}
function resolvePage(pages, rawPath, base) {
  if (isExternal(rawPath)) {
    return {
      type: 'external',
      path: rawPath
    };
  }
  if (base) {
    rawPath = resolvePath(rawPath, base);
  }
  const path = normalize(rawPath);
  for (let i = 0; i < pages.length; i++) {
    if (normalize(pages[i].regularPath) === path) {
      return Object.assign({}, pages[i], {
        type: 'page',
        path: ensureExt(pages[i].path)
      });
    }
  }
  console.error(`[vuepress] No matching page found for sidebar item "${rawPath}"`);
  return {};
}
function resolvePath(relative, base, append) {
  const firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative;
  }
  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }
  const stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  const segments = relative.replace(/^\//, '').split('/');
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }
  return stack.join('/');
}

/**
 * @param { Page } page
 * @param { string } regularPath
 * @param { SiteData } site
 * @param { string } localePath
 * @returns { SidebarGroup }
 */
function resolveSidebarItems(page, regularPath, site, localePath) {
  const {
    pages,
    themeConfig
  } = site;
  const localeConfig = localePath && themeConfig.locales ? themeConfig.locales[localePath] || themeConfig : themeConfig;
  const pageSidebarConfig = page.frontmatter.sidebar || localeConfig.sidebar || themeConfig.sidebar;
  if (pageSidebarConfig === 'auto') {
    return resolveHeaders(page);
  }
  const sidebarConfig = localeConfig.sidebar || themeConfig.sidebar;
  if (!sidebarConfig) {
    return [];
  } else {
    const {
      base,
      config
    } = resolveMatchingConfig(regularPath, sidebarConfig);
    if (config === 'auto') {
      return resolveHeaders(page);
    }
    return config ? config.map(item => resolveItem(item, pages, base)) : [];
  }
}

/**
 * @param { Page } page
 * @returns { SidebarGroup }
 */
function resolveHeaders(page) {
  const headers = groupHeaders(page.headers || []);
  return [{
    type: 'group',
    collapsable: false,
    title: page.title,
    path: null,
    children: headers.map(h => ({
      type: 'auto',
      title: h.title,
      basePath: page.path,
      path: page.path + '#' + h.slug,
      children: h.children || []
    }))
  }];
}
function groupHeaders(headers) {
  // group h3s under h2
  headers = headers.map(h => Object.assign({}, h));
  let lastH2;
  headers.forEach(h => {
    if (h.level === 2) {
      lastH2 = h;
    } else if (lastH2) {
      (lastH2.children || (lastH2.children = [])).push(h);
    }
  });
  return headers.filter(h => h.level === 2);
}
function resolveNavLinkItem(linkItem) {
  return Object.assign(linkItem, {
    type: linkItem.items && linkItem.items.length ? 'links' : 'link'
  });
}

/**
 * @param { Route } route
 * @param { Array<string|string[]> | Array<SidebarGroup> | [link: string]: SidebarConfig } config
 * @returns { base: string, config: SidebarConfig }
 */
function resolveMatchingConfig(regularPath, config) {
  if (Array.isArray(config)) {
    return {
      base: '/',
      config: config
    };
  }
  for (const base in config) {
    if (ensureEndingSlash(regularPath).indexOf(encodeURI(base)) === 0) {
      return {
        base,
        config: config[base]
      };
    }
  }
  return {};
}
function ensureEndingSlash(path) {
  return /(\.html|\/)$/.test(path) ? path : path + '/';
}
function resolveItem(item, pages, base, groupDepth = 1) {
  if (typeof item === 'string') {
    return resolvePage(pages, item, base);
  } else if (Array.isArray(item)) {
    return Object.assign(resolvePage(pages, item[0], base), {
      title: item[1]
    });
  } else {
    const children = item.children || [];
    if (children.length === 0 && item.path) {
      return Object.assign(resolvePage(pages, item.path, base), {
        title: item.title
      });
    }
    return {
      type: 'group',
      path: item.path,
      title: item.title,
      sidebarDepth: item.sidebarDepth,
      initialOpenGroupIndex: item.initialOpenGroupIndex,
      children: children.map(child => resolveItem(child, pages, base, groupDepth + 1)),
      collapsable: item.collapsable !== false
    };
  }
}

/***/ }),

/***/ 246:
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PageEdit_vue_vue_type_style_index_0_id_ad1d33ca_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PageEdit_vue_vue_type_style_index_0_id_ad1d33ca_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_PageEdit_vue_vue_type_style_index_0_id_ad1d33ca_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/PageEdit.vue?vue&type=template&id=ad1d33ca&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('footer', {
    staticClass: "page-edit"
  }, [_vm.editLink ? _c('div', {
    staticClass: "edit-link"
  }, [_c('a', {
    attrs: {
      "href": _vm.editLink,
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v(_vm._s(_vm.editLinkText))]), _vm._v(" "), _c('OutboundLink')], 1) : _vm._e(), _vm._v(" "), _vm.lastUpdated ? _c('div', {
    staticClass: "last-updated"
  }, [_c('span', {
    staticClass: "prefix"
  }, [_vm._v(_vm._s(_vm.lastUpdatedText) + ":")]), _vm._v(" "), _c('span', {
    staticClass: "time"
  }, [_vm._v(_vm._s(_vm.lastUpdated))])]) : _vm._e()]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/PageEdit.vue?vue&type=template&id=ad1d33ca&

// EXTERNAL MODULE: ./node_modules/lodash/isNil.js
var isNil = __webpack_require__(246);
var isNil_default = /*#__PURE__*/__webpack_require__.n(isNil);

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/util/index.js
var util = __webpack_require__(239);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/PageEdit.vue?vue&type=script&lang=js&


/* harmony default export */ var PageEditvue_type_script_lang_js_ = ({
  name: 'PageEdit',
  computed: {
    lastUpdated() {
      return this.$page.lastUpdated;
    },
    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated;
      }
      return 'Last Updated';
    },
    editLink() {
      const showEditLink = isNil_default()(this.$page.frontmatter.editLink) ? this.$site.themeConfig.editLinks : this.$page.frontmatter.editLink;
      const {
        repo,
        docsDir = '',
        docsBranch = 'master',
        docsRepo = repo
      } = this.$site.themeConfig;
      if (showEditLink && docsRepo && this.$page.relativePath) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, this.$page.relativePath);
      }
      return null;
    },
    editLinkText() {
      return this.$themeLocaleConfig.editLinkText || this.$site.themeConfig.editLinkText || `Edit this page`;
    }
  },
  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(docsRepo)) {
        const base = docsRepo;
        return base.replace(util["a" /* endingSlashRE */], '') + `/src` + `/${docsBranch}/` + (docsDir ? docsDir.replace(util["a" /* endingSlashRE */], '') + '/' : '') + path + `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`;
      }
      const gitlab = /gitlab.com/;
      if (gitlab.test(docsRepo)) {
        const base = docsRepo;
        return base.replace(util["a" /* endingSlashRE */], '') + `/-/edit` + `/${docsBranch}/` + (docsDir ? docsDir.replace(util["a" /* endingSlashRE */], '') + '/' : '') + path;
      }
      const base = util["i" /* outboundRE */].test(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`;
      return base.replace(util["a" /* endingSlashRE */], '') + '/edit' + `/${docsBranch}/` + (docsDir ? docsDir.replace(util["a" /* endingSlashRE */], '') + '/' : '') + path;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/PageEdit.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PageEditvue_type_script_lang_js_ = (PageEditvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/PageEdit.vue?vue&type=style&index=0&id=ad1d33ca&prod&lang=stylus&
var PageEditvue_type_style_index_0_id_ad1d33ca_prod_lang_stylus_ = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/PageEdit.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PageEditvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PageEdit = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);