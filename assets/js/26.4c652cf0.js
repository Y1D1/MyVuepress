(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/live777.1b1d4ff5.png";

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/guide/introduction.md?vue&type=template&id=2d84ad48&
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
      "id": "overview"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#overview"
    }
  }, [_vm._v("#")]), _vm._v(" Overview")]), _vm._v(" "), _c('p', [_vm._v("Live777 is an open source (MIT protocol) simple and efficient live video server that supports the WHIP/WHEP protocol.")]), _vm._v(" "), _c('p', [_vm._v("Live777 media server is used with "), _c('a', {
    attrs: {
      "href": "https://gstreamer.freedesktop.org/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("Gstreamer"), _c('OutboundLink')], 1), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://ffmpeg.org/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("FFmpeg"), _c('OutboundLink')], 1), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://obsproject.com/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("OBS Studio"), _c('OutboundLink')], 1), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://www.videolan.org/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("VLC"), _c('OutboundLink')], 1), _vm._v(", "), _c('a', {
    attrs: {
      "href": "https://webrtc.org/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("WebRTC"), _c('OutboundLink')], 1), _vm._v(" and other clients to provide the ability to receive and distribute streams, and is a typical publishing (pushing) and subscription (playing) server model.")]), _vm._v(" "), _c('p', [_vm._v("Live777 supports the conversion of audio and video protocols widely used in the Internet, such as RTP to WHIP or WHEP and other protocols.")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "peculiarity"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#peculiarity"
    }
  }, [_vm._v("#")]), _vm._v(" Peculiarity")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "support-whip-whep"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#support-whip-whep"
    }
  }, [_vm._v("#")]), _vm._v(" Support WHIP/WHEP")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": __webpack_require__(273),
      "alt": "Live777"
    }
  }), _vm._v("\nThe WHIP"), _c('a', {
    attrs: {
      "href": ""
    }
  }), _vm._v("/WHEP"), _c('a', {
    attrs: {
      "href": ""
    }
  }), _vm._v(" protocol is implemented to improve interoperability with other WebRTC application modules without the need for custom adaptations.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "sfu-architecture"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#sfu-architecture"
    }
  }, [_vm._v("#")]), _vm._v(" SFU architecture")]), _vm._v(" "), _c('p', [_vm._v("Only responsible for forwarding, do not do confluence, transcoding and other resource overhead of the media processing work, the encoding and decoding work are respectively placed on the sender and the receiver, so greatly reduce the pressure on the server, relax the strict requirements for server configuration.")]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "multiple-audio-and-video-encoding-formats-support"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#multiple-audio-and-video-encoding-formats-support"
    }
  }, [_vm._v("#")]), _vm._v(" Multiple audio and video encoding formats support")]), _vm._v(" "), _c('p', [_vm._v("Provides a wider range of compatibility to help enable adaptive streaming, dynamically selecting the most appropriate encoding format and bit rate based on terminal network connection and device performance to provide the best viewing experience.")]), _vm._v(" "), _c('h4', {
    attrs: {
      "id": "currently-supported"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#currently-supported"
    }
  }, [_vm._v("#")]), _vm._v(" Currently supported")]), _vm._v(" "), _c('table', [_c('thead', [_c('tr', [_c('th', [_vm._v("protocol")]), _vm._v(" "), _c('th', {
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
  }, [_vm._v("Opus,G722")])])])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "multiple-platform-support"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#multiple-platform-support"
    }
  }, [_vm._v("#")]), _vm._v(" Multiple platform support")]), _vm._v(" "), _c('p', [_vm._v("Developed using rust, Live777 can run on multiple platforms such as Linux, Windows, macOS, and more.")])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/guide/introduction.md?vue&type=template&id=2d84ad48&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./docs/guide/introduction.md

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