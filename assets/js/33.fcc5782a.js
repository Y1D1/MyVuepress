(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/guide/start/docker.md?vue&type=template&id=9b510238&
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
  }, [_vm._v("#")]), _vm._v(" Docker")]), _vm._v(" "), _c('p', [_vm._v("Please run Live777 with docker.")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "live-streaming"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#live-streaming"
    }
  }, [_vm._v("#")]), _vm._v(" Live Streaming")]), _vm._v(" "), _c('p', [_vm._v("Live777 supports live streaming.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "run-live777-using-docker"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#run-live777-using-docker"
    }
  }, [_vm._v("#")]), _vm._v(" Run Live777 using docker:")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-server --rm --network host ghcr.io/binbat/live777-server:latest live777\n")])])]), _c('blockquote', [_c('p', [_c('em', [_vm._v("Note: The available images is "), _c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("here")]), _vm._v(".")])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "publish-stream"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#publish-stream"
    }
  }, [_vm._v("#")]), _vm._v(" Publish stream")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Use docker of "), _c('a', {
    attrs: {
      "href": "https://gstreamer.freedesktop.org/download/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Gstreamer"), _c('OutboundLink')], 1), _vm._v(" to publish:")])]), _vm._v(" "), _c('p', [_vm._v("  * Video: VP8")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:latest gst-launch-1.0 videotestsrc ! videoconvert ! vp8enc ! rtpvp8pay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\"\n")])])]), _c('p', [_vm._v("  * Video: VP9")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:latest gst-launch-1.0 videotestsrc ! videoconvert ! vp9enc ! rtpvp9pay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\"\n")])])]), _c('p', [_vm._v("  * Video: H264")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-client --rm --network host ghcr.io/binbat live777-client:latest gst-launch-1.0 videotestsrc ! videoconvert ! x264enc ! rtph264pay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\"\n")])])]), _c('p', [_vm._v("  * Audio: Opus")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:latest gst-launch-1.0 audiotestsrc ! audioconvert ! opusenc ! rtpopuspay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\"\n")])])]), _c('p', [_vm._v("  * Audio: G722")]), _vm._v(" "), _c('blockquote', [_c('p', [_c('em', [_vm._v("Note: GStreamer G722 need avenc_g722 in gstreamer-libav.")])])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("docker run --name live777-client --rm --network host ghcr.io/binbat/live777-client:latest gst-launch-1.0 audiotestsrc ! audioconvert ! avenc_g722 ! rtpg722pay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\n")])])]), _c('ul', [_c('li', [_vm._v("Or publish stream by "), _c('a', {
    attrs: {
      "href": "https://gstreamer.freedesktop.org/download/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Gstreamer"), _c('OutboundLink')], 1), _vm._v(" or "), _c('a', {
    attrs: {
      "href": "(https://github.com/obsproject/obs-studio/tree/30.0.0-beta2)"
    }
  }, [_vm._v("OBS")]), _vm._v(" :")])]), _vm._v(" "), _c('blockquote', [_c('p', [_c('em', [_vm._v("Note:"), _c('strong', [_vm._v("OBS Studio version 30 or higher")]), _vm._v(".")]), _c('br'), _vm._v(" "), _c('em', [_vm._v("Note:OBS WHIP Current only support "), _c('strong', [_vm._v("H264")]), _vm._v(" video codecs and "), _c('strong', [_vm._v("Opus")]), _vm._v(" audio codecs.")])])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("gst-launch-1.0 videotestsrc ! videoconvert ! vp8enc ! rtpvp8pay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\"\n")])])]), _c('h3', {
    attrs: {
      "id": "play-stream"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#play-stream"
    }
  }, [_vm._v("#")]), _vm._v(" Play stream")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("open your browser,enter the URL:"), _c('code', [_vm._v("http://localhost:3000/")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/guide/start/docker.md?vue&type=template&id=9b510238&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./docs/guide/start/docker.md

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