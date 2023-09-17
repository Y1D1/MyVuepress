(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10,3,12,14,18,23,25],{

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

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/NavLink.vue?vue&type=template&id=cfa5183e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isInternal ? _c('RouterLink', {
    staticClass: "nav-link",
    attrs: {
      "to": _vm.link,
      "exact": _vm.exact
    },
    nativeOn: {
      "focusout": function ($event) {
        return _vm.focusoutAction.apply(null, arguments);
      }
    }
  }, [_vm._v("\n  " + _vm._s(_vm.item.text) + "\n")]) : _c('a', {
    staticClass: "nav-link external",
    attrs: {
      "href": _vm.link,
      "target": _vm.target,
      "rel": _vm.rel
    },
    on: {
      "focusout": _vm.focusoutAction
    }
  }, [_vm._v("\n  " + _vm._s(_vm.item.text) + "\n  "), _vm.isBlankTarget ? _c('OutboundLink') : _vm._e()], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/NavLink.vue?vue&type=template&id=cfa5183e&

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/util/index.js
var util = __webpack_require__(239);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/NavLink.vue?vue&type=script&lang=js&

/* harmony default export */ var NavLinkvue_type_script_lang_js_ = ({
  name: 'NavLink',
  props: {
    item: {
      required: true
    }
  },
  computed: {
    link() {
      return Object(util["b" /* ensureExt */])(this.item.link);
    },
    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link);
      }
      return this.link === '/';
    },
    isNonHttpURI() {
      return Object(util["g" /* isMailto */])(this.link) || Object(util["h" /* isTel */])(this.link);
    },
    isBlankTarget() {
      return this.target === '_blank';
    },
    isInternal() {
      return !Object(util["f" /* isExternal */])(this.link) && !this.isBlankTarget;
    },
    target() {
      if (this.isNonHttpURI) {
        return null;
      }
      if (this.item.target) {
        return this.item.target;
      }
      return Object(util["f" /* isExternal */])(this.link) ? '_blank' : '';
    },
    rel() {
      if (this.isNonHttpURI) {
        return null;
      }
      if (this.item.rel === false) {
        return null;
      }
      if (this.item.rel) {
        return this.item.rel;
      }
      return this.isBlankTarget ? 'noopener noreferrer' : null;
    }
  },
  methods: {
    focusoutAction() {
      this.$emit('focusout');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/NavLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavLinkvue_type_script_lang_js_ = (NavLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/NavLink.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavLink = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/DropdownTransition.vue?vue&type=template&id=e483110c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('transition', {
    attrs: {
      "name": "dropdown"
    },
    on: {
      "enter": _vm.setHeight,
      "after-enter": _vm.unsetHeight,
      "before-leave": _vm.setHeight
    }
  }, [_vm._t("default")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/DropdownTransition.vue?vue&type=template&id=e483110c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/DropdownTransition.vue?vue&type=script&lang=js&
/* harmony default export */ var DropdownTransitionvue_type_script_lang_js_ = ({
  name: 'DropdownTransition',
  methods: {
    setHeight(items) {
      // explicitly set height so that it can be transitioned
      items.style.height = items.scrollHeight + 'px';
    },
    unsetHeight(items) {
      items.style.height = '';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/DropdownTransition.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DropdownTransitionvue_type_script_lang_js_ = (DropdownTransitionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/DropdownTransition.vue?vue&type=style&index=0&id=e483110c&prod&lang=stylus&
var DropdownTransitionvue_type_style_index_0_id_e483110c_prod_lang_stylus_ = __webpack_require__(243);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/DropdownTransition.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DropdownTransitionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DropdownTransition = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_DropdownTransition_vue_vue_type_style_index_0_id_e483110c_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_DropdownTransition_vue_vue_type_style_index_0_id_e483110c_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_DropdownTransition_vue_vue_type_style_index_0_id_e483110c_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_style_index_0_id_200a9cfa_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_style_index_0_id_200a9cfa_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_style_index_0_id_200a9cfa_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_style_index_0_id_72c0d542_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(245);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_style_index_0_id_72c0d542_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarLink_vue_vue_type_style_index_0_id_72c0d542_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/SidebarLinks.vue?vue&type=template&id=1da4684a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.items.length ? _c('ul', {
    staticClass: "sidebar-links"
  }, _vm._l(_vm.items, function (item, i) {
    return _c('li', {
      key: i
    }, [item.type === 'group' ? _c('SidebarGroup', {
      attrs: {
        "item": item,
        "open": i === _vm.openGroupIndex,
        "collapsable": item.collapsable || item.collapsible,
        "depth": _vm.depth
      },
      on: {
        "toggle": function ($event) {
          return _vm.toggleGroup(i);
        }
      }
    }) : _c('SidebarLink', {
      attrs: {
        "sidebar-depth": _vm.sidebarDepth,
        "item": item
      }
    })], 1);
  }), 0) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/SidebarLinks.vue?vue&type=template&id=1da4684a&

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/SidebarGroup.vue + 4 modules
var SidebarGroup = __webpack_require__(266);

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/SidebarLink.vue + 2 modules
var SidebarLink = __webpack_require__(255);

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/util/index.js
var util = __webpack_require__(239);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/SidebarLinks.vue?vue&type=script&lang=js&



/* harmony default export */ var SidebarLinksvue_type_script_lang_js_ = ({
  name: 'SidebarLinks',
  components: {
    SidebarGroup: SidebarGroup["default"],
    SidebarLink: SidebarLink["default"]
  },
  props: ['items', 'depth',
  // depth of current sidebar links
  'sidebarDepth',
  // depth of headers to be extracted
  'initialOpenGroupIndex'],
  data() {
    return {
      openGroupIndex: this.initialOpenGroupIndex || 0
    };
  },
  watch: {
    '$route'() {
      this.refreshIndex();
    }
  },
  created() {
    this.refreshIndex();
  },
  methods: {
    refreshIndex() {
      const index = resolveOpenGroupIndex(this.$route, this.items);
      if (index > -1) {
        this.openGroupIndex = index;
      }
    },
    toggleGroup(index) {
      this.openGroupIndex = index === this.openGroupIndex ? -1 : index;
    },
    isActive(page) {
      return Object(util["e" /* isActive */])(this.$route, page.regularPath);
    }
  }
});
function resolveOpenGroupIndex(route, items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (descendantIsActive(route, item)) {
      return i;
    }
  }
  return -1;
}
function descendantIsActive(route, item) {
  if (item.type === 'group') {
    const childIsActive = item.path && Object(util["e" /* isActive */])(route, item.path);
    const grandChildIsActive = item.children.some(child => {
      if (child.type === 'group') {
        return descendantIsActive(route, child);
      } else {
        return child.type === 'page' && Object(util["e" /* isActive */])(route, child.path);
      }
    });
    return childIsActive || grandChildIsActive;
  }
  return false;
}
// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/SidebarLinks.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SidebarLinksvue_type_script_lang_js_ = (SidebarLinksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/SidebarLinks.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SidebarLinksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarLinks = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/DropdownLink.vue?vue&type=template&id=200a9cfa&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "dropdown-wrapper",
    class: {
      open: _vm.open
    }
  }, [_c('button', {
    staticClass: "dropdown-title",
    attrs: {
      "type": "button",
      "aria-label": _vm.dropdownAriaLabel
    },
    on: {
      "click": _vm.handleDropdown
    }
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.item.text))]), _vm._v(" "), _c('span', {
    staticClass: "arrow down"
  })]), _vm._v(" "), _c('button', {
    staticClass: "mobile-dropdown-title",
    attrs: {
      "type": "button",
      "aria-label": _vm.dropdownAriaLabel
    },
    on: {
      "click": function ($event) {
        return _vm.setOpen(!_vm.open);
      }
    }
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.item.text))]), _vm._v(" "), _c('span', {
    staticClass: "arrow",
    class: _vm.open ? 'down' : 'right'
  })]), _vm._v(" "), _c('DropdownTransition', [_c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.open,
      expression: "open"
    }],
    staticClass: "nav-dropdown"
  }, _vm._l(_vm.item.items, function (subItem, index) {
    return _c('li', {
      key: subItem.link || index,
      staticClass: "dropdown-item"
    }, [subItem.type === 'links' ? _c('h4', [_vm._v("\n          " + _vm._s(subItem.text) + "\n        ")]) : _vm._e(), _vm._v(" "), subItem.type === 'links' ? _c('ul', {
      staticClass: "dropdown-subitem-wrapper"
    }, _vm._l(subItem.items, function (childSubItem) {
      return _c('li', {
        key: childSubItem.link,
        staticClass: "dropdown-subitem"
      }, [_c('NavLink', {
        attrs: {
          "item": childSubItem
        },
        on: {
          "focusout": function ($event) {
            _vm.isLastItemOfArray(childSubItem, subItem.items) && _vm.isLastItemOfArray(subItem, _vm.item.items) && _vm.setOpen(false);
          }
        }
      })], 1);
    }), 0) : _c('NavLink', {
      attrs: {
        "item": subItem
      },
      on: {
        "focusout": function ($event) {
          _vm.isLastItemOfArray(subItem, _vm.item.items) && _vm.setOpen(false);
        }
      }
    })], 1);
  }), 0)])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/DropdownLink.vue?vue&type=template&id=200a9cfa&

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/NavLink.vue + 4 modules
var NavLink = __webpack_require__(241);

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/DropdownTransition.vue + 4 modules
var DropdownTransition = __webpack_require__(242);

// EXTERNAL MODULE: ./node_modules/lodash/last.js
var last = __webpack_require__(91);
var last_default = /*#__PURE__*/__webpack_require__.n(last);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/DropdownLink.vue?vue&type=script&lang=js&



/* harmony default export */ var DropdownLinkvue_type_script_lang_js_ = ({
  name: 'DropdownLink',
  components: {
    NavLink: NavLink["default"],
    DropdownTransition: DropdownTransition["default"]
  },
  props: {
    item: {
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    dropdownAriaLabel() {
      return this.item.ariaLabel || this.item.text;
    }
  },
  watch: {
    $route() {
      this.open = false;
    }
  },
  methods: {
    setOpen(value) {
      this.open = value;
    },
    isLastItemOfArray(item, array) {
      return last_default()(array) === item;
    },
    /**
     * Open the dropdown when user tab and click from keyboard.
     *
     * Use event.detail to detect tab and click from keyboard. Ref: https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
     * The Tab + Click is UIEvent > KeyboardEvent, so the detail is 0.
     */
    handleDropdown() {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab) this.setOpen(!this.open);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/DropdownLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DropdownLinkvue_type_script_lang_js_ = (DropdownLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/DropdownLink.vue?vue&type=style&index=0&id=200a9cfa&prod&lang=stylus&
var DropdownLinkvue_type_style_index_0_id_200a9cfa_prod_lang_stylus_ = __webpack_require__(251);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/DropdownLink.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DropdownLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DropdownLink = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/util/index.js
var util = __webpack_require__(239);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/SidebarLink.vue?vue&type=script&lang=js&

/* harmony default export */ var SidebarLinkvue_type_script_lang_js_ = ({
  functional: true,
  props: ['item', 'sidebarDepth'],
  render(h, {
    parent: {
      $page,
      $site,
      $route,
      $themeConfig,
      $themeLocaleConfig
    },
    props: {
      item,
      sidebarDepth
    }
  }) {
    // use custom active class matching logic
    // due to edge case of paths ending with / + hash
    const selfActive = Object(util["e" /* isActive */])($route, item.path);
    // for sidebar: auto pages, a hash link should be active if one of its child
    // matches
    const active = item.type === 'auto' ? selfActive || item.children.some(c => Object(util["e" /* isActive */])($route, item.basePath + '#' + c.slug)) : selfActive;
    const link = item.type === 'external' ? renderExternal(h, item.path, item.title || item.path) : renderLink(h, item.path, item.title || item.path, active);
    const maxDepth = [$page.frontmatter.sidebarDepth, sidebarDepth, $themeLocaleConfig.sidebarDepth, $themeConfig.sidebarDepth, 1].find(depth => depth !== undefined);
    const displayAllHeaders = $themeLocaleConfig.displayAllHeaders || $themeConfig.displayAllHeaders;
    if (item.type === 'auto') {
      return [link, renderChildren(h, item.children, item.basePath, $route, maxDepth)];
    } else if ((active || displayAllHeaders) && item.headers && !util["d" /* hashRE */].test(item.path)) {
      const children = Object(util["c" /* groupHeaders */])(item.headers);
      return [link, renderChildren(h, children, item.path, $route, maxDepth)];
    } else {
      return link;
    }
  }
});
function renderLink(h, to, text, active, level) {
  const component = {
    props: {
      to,
      activeClass: '',
      exactActiveClass: ''
    },
    class: {
      active,
      'sidebar-link': true
    }
  };
  if (level > 2) {
    component.style = {
      'padding-left': level + 'rem'
    };
  }
  return h('RouterLink', component, text);
}
function renderChildren(h, children, path, route, maxDepth, depth = 1) {
  if (!children || depth > maxDepth) return null;
  return h('ul', {
    class: 'sidebar-sub-headers'
  }, children.map(c => {
    const active = Object(util["e" /* isActive */])(route, path + '#' + c.slug);
    return h('li', {
      class: 'sidebar-sub-header'
    }, [renderLink(h, path + '#' + c.slug, c.title, active, c.level - 1), renderChildren(h, c.children, path, route, maxDepth, depth + 1)]);
  }));
}
function renderExternal(h, to, text) {
  return h('a', {
    attrs: {
      href: to,
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    class: {
      'sidebar-link': true
    }
  }, [text, h('OutboundLink')]);
}
// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/SidebarLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SidebarLinkvue_type_script_lang_js_ = (SidebarLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/SidebarLink.vue?vue&type=style&index=0&id=72c0d542&prod&lang=stylus&
var SidebarLinkvue_type_style_index_0_id_72c0d542_prod_lang_stylus_ = __webpack_require__(252);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/SidebarLink.vue
var render, staticRenderFns





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SidebarLinkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarLink = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_NavLinks_vue_vue_type_style_index_0_id_f4e8426e_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_NavLinks_vue_vue_type_style_index_0_id_f4e8426e_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_NavLinks_vue_vue_type_style_index_0_id_f4e8426e_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarGroup_vue_vue_type_style_index_0_id_4766f2af_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(250);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarGroup_vue_vue_type_style_index_0_id_4766f2af_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_SidebarGroup_vue_vue_type_style_index_0_id_4766f2af_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/NavLinks.vue?vue&type=template&id=f4e8426e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.userLinks.length || _vm.repoLink ? _c('nav', {
    staticClass: "nav-links"
  }, [_vm._l(_vm.userLinks, function (item) {
    return _c('div', {
      key: item.link,
      staticClass: "nav-item"
    }, [item.type === 'links' ? _c('DropdownLink', {
      attrs: {
        "item": item
      }
    }) : _c('NavLink', {
      attrs: {
        "item": item
      }
    })], 1);
  }), _vm._v(" "), _vm.repoLink ? _c('a', {
    staticClass: "repo-link",
    attrs: {
      "href": _vm.repoLink,
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.repoLabel) + "\n    "), _c('OutboundLink')], 1) : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/NavLinks.vue?vue&type=template&id=f4e8426e&

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/DropdownLink.vue + 4 modules
var DropdownLink = __webpack_require__(254);

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/util/index.js
var util = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/NavLink.vue + 4 modules
var NavLink = __webpack_require__(241);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/NavLinks.vue?vue&type=script&lang=js&



/* harmony default export */ var NavLinksvue_type_script_lang_js_ = ({
  name: 'NavLinks',
  components: {
    NavLink: NavLink["default"],
    DropdownLink: DropdownLink["default"]
  },
  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },
    nav() {
      const {
        locales
      } = this.$site;
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path;
        const routes = this.$router.options.routes;
        const themeLocales = this.$site.themeConfig.locales || {};
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
          items: Object.keys(locales).map(path => {
            const locale = locales[path];
            const text = themeLocales[path] && themeLocales[path].label || locale.lang;
            let link;
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink;
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path);
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [...this.userNav, languageDropdown];
      }
      return this.userNav;
    },
    userLinks() {
      return (this.nav || []).map(link => {
        return Object.assign(Object(util["j" /* resolveNavLinkItem */])(link), {
          items: (link.items || []).map(util["j" /* resolveNavLinkItem */])
        });
      });
    },
    repoLink() {
      const {
        repo
      } = this.$site.themeConfig;
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`;
      }
      return null;
    },
    repoLabel() {
      if (!this.repoLink) return;
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel;
      }
      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0];
      const platforms = ['GitHub', 'GitLab', 'Bitbucket'];
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i];
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform;
        }
      }
      return 'Source';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/NavLinks.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NavLinksvue_type_script_lang_js_ = (NavLinksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/NavLinks.vue?vue&type=style&index=0&id=f4e8426e&prod&lang=stylus&
var NavLinksvue_type_style_index_0_id_f4e8426e_prod_lang_stylus_ = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/NavLinks.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NavLinksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NavLinks = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/SidebarGroup.vue?vue&type=template&id=4766f2af&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "sidebar-group",
    class: [{
      collapsable: _vm.collapsable,
      'is-sub-group': _vm.depth !== 0
    }, `depth-${_vm.depth}`]
  }, [_vm.item.path ? _c('RouterLink', {
    staticClass: "sidebar-heading clickable",
    class: {
      open: _vm.open,
      'active': _vm.isActive(_vm.$route, _vm.item.path)
    },
    attrs: {
      "to": _vm.item.path
    },
    nativeOn: {
      "click": function ($event) {
        return _vm.$emit('toggle');
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.item.title))]), _vm._v(" "), _vm.collapsable ? _c('span', {
    staticClass: "arrow",
    class: _vm.open ? 'down' : 'right'
  }) : _vm._e()]) : _c('p', {
    staticClass: "sidebar-heading",
    class: {
      open: _vm.open
    },
    on: {
      "click": function ($event) {
        return _vm.$emit('toggle');
      }
    }
  }, [_c('span', [_vm._v(_vm._s(_vm.item.title))]), _vm._v(" "), _vm.collapsable ? _c('span', {
    staticClass: "arrow",
    class: _vm.open ? 'down' : 'right'
  }) : _vm._e()]), _vm._v(" "), _c('DropdownTransition', [_vm.open || !_vm.collapsable ? _c('SidebarLinks', {
    staticClass: "sidebar-group-items",
    attrs: {
      "items": _vm.item.children,
      "sidebar-depth": _vm.item.sidebarDepth,
      "initial-open-group-index": _vm.item.initialOpenGroupIndex,
      "depth": _vm.depth + 1
    }
  }) : _vm._e()], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/SidebarGroup.vue?vue&type=template&id=4766f2af&

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/util/index.js
var util = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/DropdownTransition.vue + 4 modules
var DropdownTransition = __webpack_require__(242);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/SidebarGroup.vue?vue&type=script&lang=js&


/* harmony default export */ var SidebarGroupvue_type_script_lang_js_ = ({
  name: 'SidebarGroup',
  components: {
    DropdownTransition: DropdownTransition["default"]
  },
  props: ['item', 'open', 'collapsable', 'depth'],
  // ref: https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
  beforeCreate() {
    this.$options.components.SidebarLinks = __webpack_require__(253).default;
  },
  methods: {
    isActive: util["e" /* isActive */]
  }
});
// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/SidebarGroup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SidebarGroupvue_type_script_lang_js_ = (SidebarGroupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/SidebarGroup.vue?vue&type=style&index=0&id=4766f2af&prod&lang=stylus&
var SidebarGroupvue_type_style_index_0_id_4766f2af_prod_lang_stylus_ = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/SidebarGroup.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SidebarGroupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarGroup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_c16c2e00_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_c16c2e00_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mini_css_extract_plugin_dist_loader_js_css_loader_dist_cjs_js_ref_13_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_13_oneOf_1_2_stylus_loader_index_js_ref_13_oneOf_1_3_cache_loader_dist_cjs_js_ref_0_0_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_c16c2e00_prod_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/Sidebar.vue?vue&type=template&id=c16c2e00&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('aside', {
    staticClass: "sidebar"
  }, [_c('NavLinks'), _vm._v(" "), _vm._t("top"), _vm._v(" "), _c('SidebarLinks', {
    attrs: {
      "depth": 0,
      "items": _vm.items
    }
  }), _vm._v(" "), _vm._t("bottom")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/Sidebar.vue?vue&type=template&id=c16c2e00&

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/SidebarLinks.vue + 4 modules
var SidebarLinks = __webpack_require__(253);

// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/NavLinks.vue + 4 modules
var NavLinks = __webpack_require__(265);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/Sidebar.vue?vue&type=script&lang=js&


/* harmony default export */ var Sidebarvue_type_script_lang_js_ = ({
  name: 'Sidebar',
  components: {
    SidebarLinks: SidebarLinks["default"],
    NavLinks: NavLinks["default"]
  },
  props: ['items']
});
// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/Sidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Sidebarvue_type_script_lang_js_ = (Sidebarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@vuepress/theme-default/components/Sidebar.vue?vue&type=style&index=0&id=c16c2e00&prod&lang=stylus&
var Sidebarvue_type_style_index_0_id_c16c2e00_prod_lang_stylus_ = __webpack_require__(272);

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/@vuepress/theme-default/components/Sidebar.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Sidebarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Sidebar = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);