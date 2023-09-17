(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/tool.27cec65c.png";

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/zh/guide/start/tool.md?vue&type=template&id=71d7ec6c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "tools"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#tools"
    }
  }, [_vm._v("#")]), _vm._v(" Tools")]), _vm._v(" "), _c('p', [_c('img', {
    attrs: {
      "src": __webpack_require__(274),
      "alt": "支持的协议转换功能"
    }
  }), _c('br'), _vm._v("\nIn addition to taking advantage of the native platform's whip streaming capabilities, live777 adds tools that can "), _c('strong', [_vm._v("convert rtp to whip or whep to rtp")]), _vm._v(", making it compatible with multiple media player types.")]), _vm._v(" "), _c('p', [_vm._v("For example,"), _c('code', [_vm._v("ffmpeg -> whipinto -> live777 -> whepfrom -> ffplay")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "whipinto"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#whipinto"
    }
  }, [_vm._v("#")]), _vm._v(" whipinto")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Build")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("cargo build --package=whipinto --release\nwhipinto -c vp8 -u http://localhost:3000/whip/777 --port 5003\n")])])]), _c('ul', [_c('li', [_vm._v("Video Test Src")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("ffmpeg -re -f lavfi -i testsrc=size=640x480:rate=30 -vcodec libvpx -f rtp 'rtp://127.0.0.1:5003?pkt_size=1200'\n")])])]), _c('blockquote', [_c('p', [_c('em', [_vm._v("Note:"), _c('strong', [_vm._v("support parameter command")])])])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("cargo run --package=whipinto -- -c vp8 -u http://localhost:3000/whip/777 --command \\\n\"ffmpeg -re -f lavfi -i testsrc=size=640x480:rate=30 -vcodec libvpx -cpu-used 5 -deadline 1 -g 10 -error-resilient 1 -auto-alt-ref 1 -f rtp 'rtp://127.0.0.1:{port}?pkt_size=1200'\"\n")])])]), _c('ul', [_c('li', [_vm._v("VLC RTP stream")])]), _vm._v(" "), _c('blockquote', [_c('p', [_c('em', [_vm._v("Note: VLC can't support all video codec")])])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("vlc -vvv <INPUT_FILE> --sout '#transcode{vcodec=h264}:rtp{dst=127.0.0.1,port=5003}'\n")])])]), _c('h2', {
    attrs: {
      "id": "whepform"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#whepform"
    }
  }, [_vm._v("#")]), _vm._v(" whepform")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("Build")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("cargo build --package=whepfrom --release\n")])])]), _c('ul', [_c('li', [_vm._v("Use WHEP protocol pull stream convert rtp sender")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("whepfrom -c vp8 -u http://localhost:3000/whep/777 -t localhost:5004\n")])])]), _c('ul', [_c('li', [_vm._v("For ffplay, you need a sdp file.")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("cat > stream.sdp << EOF\nv=0\nm=video 5004 RTP/AVP 96\nc=IN IP4 127.0.0.1\na=rtpmap:96 VP8/90000\nEOF\n")])])]), _c('ul', [_c('li', [_vm._v("Use ffplay")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("ffplay -protocol_whitelist rtp,file,udp -i stream.sdp\n")])])]), _c('p', [_c('em', [_vm._v("So, You can use this:")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("cargo run --package=whepfrom -- -c vp8 -u http://localhost:3000/whep/777 -t 127.0.0.1:5004 --command 'ffplay -protocol_whitelist rtp,file,udp -i stream.sdp'\n")])])]), _c('ul', [_c('li', [_vm._v("Use VLC player")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("vlc stream.sdp\n")])])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./docs/zh/guide/start/tool.md?vue&type=template&id=71d7ec6c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./docs/zh/guide/start/tool.md

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

/* harmony default export */ var tool = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);