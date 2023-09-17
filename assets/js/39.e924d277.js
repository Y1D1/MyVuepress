(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/zh/guide/start/docker.md?vue&type=template&id=40e1662a&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "docker"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#docker"
    }
  }, [_vm._v("#")]), _vm._v(" Docker")]), _vm._v(" "), _c('p', [_vm._v("推荐使用Docker启动Live777，这是最简单也是最方便的方式。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "使用docker启动live777"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#使用docker启动live777"
    }
  }, [_vm._v("#")]), _vm._v(" 使用Docker启动Live777")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-server --rm --network host ghcr.io/binbat/live777-server:latest live777\n")])])]), _c('h2', {
    attrs: {
      "id": "使用gstreamer的docker推流到本机"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#使用gstreamer的docker推流到本机"
    }
  }, [_vm._v("#")]), _vm._v(" 使用Gstreamer的Docker推流到本机：")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Video: VP8")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:latest gst-launch-1.0 videotestsrc ! videoconvert ! vp8enc ! rtpvp8pay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\"\n")])])]), _c('ul', [_c('li', [_vm._v("Video: VP9")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:latest gst-launch-1.0 videotestsrc ! videoconvert ! vp9enc ! rtpvp9pay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\"\n")])])]), _c('ul', [_c('li', [_vm._v("Video: H264")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-client --rm --network host ghcr.io/binbat live777-client:latest gst-launch-1.0 videotestsrc ! videoconvert ! x264enc ! rtph264pay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\"\n")])])]), _c('ul', [_c('li', [_vm._v("Audio: Opus")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:latest gst-launch-1.0 audiotestsrc ! audioconvert ! opusenc ! rtpopuspay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\"\n")])])]), _c('ul', [_c('li', [_vm._v("Audio: G722")])]), _vm._v(" "), _c('blockquote', [_c('p', [_c('em', [_vm._v("Note: GStreamer G722 need avenc_g722 in gstreamer-libav")])])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:latest gst-launch-1.0 audiotestsrc ! audioconvert ! avenc_g722 ! rtpg722pay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/zh/guide/start/docker.md?vue&type=template&id=40e1662a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./docs/zh/guide/start/docker.md

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var docker = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);