(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/live777.1b1d4ff5.png";

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/zh/guide/introduction.md?vue&type=template&id=519f02d9&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "live777"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#live777"
    }
  }, [_vm._v("#")]), _vm._v(" Live777")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "概述"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#概述"
    }
  }, [_vm._v("#")]), _vm._v(" 概述")]), _vm._v(" "), _c('p', [_vm._v("  Live777是一个开源的（MIT协议）简单高效的实时视频服务器，支持WHIP/WHEP协议。"), _c('br'), _vm._v("\n  Live777媒体服务器和"), _c('a', {
    attrs: {
      "href": "https://gstreamer.freedesktop.org/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Gstreamer"), _c('OutboundLink')], 1), _vm._v("、"), _c('a', {
    attrs: {
      "href": "https://ffmpeg.org/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("FFmpeg"), _c('OutboundLink')], 1), _vm._v("、"), _c('a', {
    attrs: {
      "href": "https://obsproject.com/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("OBS Studio"), _c('OutboundLink')], 1), _vm._v("、"), _c('a', {
    attrs: {
      "href": "https://www.videolan.org/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("VLC"), _c('OutboundLink')], 1), _vm._v("、 "), _c('a', {
    attrs: {
      "href": "https://webrtc.org/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("WebRTC"), _c('OutboundLink')], 1), _vm._v("等客户端配合使用，提供流的接收和分发的能力，是一个典型的发布 （推流）和订阅（播放）服务器模型。 Live777支持互联网广泛应用的音视频协议转换，比如可以将RTP， 转成WHIP或WHEP等协议。"), _c('br'), _vm._v("\n  Live777使用rust开发，可以在Linux、Windows、macOS等多个平台运行， 我们提供的镜像也是基于Windows 10构建的。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "特性"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#特性"
    }
  }, [_vm._v("#")]), _vm._v(" 特性")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "支持whip-whep"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#支持whip-whep"
    }
  }, [_vm._v("#")]), _vm._v(" 支持WHIP/WHEP")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": __webpack_require__(273),
      "alt": "WHIP和WHEP的原理"
    }
  })]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "sfu架构"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#sfu架构"
    }
  }, [_vm._v("#")]), _vm._v(" - SFU架构")]), _vm._v(" "), _c('p', [_vm._v("  本服务器是一款基于SFU架构的中心节点媒体服务器，只负责转发，不做合流、转码等资源开销较大的媒体处理工作，将编码解码等工作分别放在发送端和接收端，因此大大降低了服务器的压力，放宽了对服务器配置的严格要求。")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "支持多种编码格式"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#支持多种编码格式"
    }
  }, [_vm._v("#")]), _vm._v(" -支持多种编码格式")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("protocol")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("video codecs")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("audio codecs")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("WHIP")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("AV1,VP8,VP9,H264")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("Opus,G722")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("WHEP")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("AV1,VP8,VP9,H264")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right"
    }
  }, [_vm._v("Opus,G722")])])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/zh/guide/introduction.md?vue&type=template&id=519f02d9&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./docs/zh/guide/introduction.md

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

/* harmony default export */ var introduction = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);