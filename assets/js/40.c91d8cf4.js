(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"1afab464-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--3-0!./node_modules/babel-loader/lib??ref--3-1!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./docs/zh/guide/start/source.md?vue&type=template&id=2c2622f0&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('ContentSlotsDistributor', {
    attrs: {
      "slot-key": _vm.$parent.slotKey
    }
  }, [_c('h1', {
    attrs: {
      "id": "build"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#build"
    }
  }, [_vm._v("#")]), _vm._v(" Build")]), _vm._v(" "), _c('p', [_vm._v("Live777 可以从源码编译和启动，但推荐更简单的Docker方式启动。")]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "live-streaming"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#live-streaming"
    }
  }, [_vm._v("#")]), _vm._v(" Live Streaming")]), _vm._v(" "), _c('p', [_vm._v("直播是Live777的典型场景，支持推直播流后浏览器直接观看的方式。")]), _vm._v(" "), _c('ul', [_c('li', [_vm._v("安装rust("), _c('a', {
    attrs: {
      "href": "https://www.rust-lang.org/tools/install",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("下载"), _c('OutboundLink')], 1), _vm._v(")：\n由于本项目是基于rust开发，需要提前安装rust")]), _vm._v(" "), _c('li', [_vm._v("下载源码:")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("git clone https://github.com/binbat/live777.git\n")])])]), _c('ul', [_c('li', [_vm._v("编译，注意需要切换live777目录")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("cd live777\ncargo build\n")])])]), _c('ul', [_c('li', [_vm._v("启动服务器")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("cargo run\n")])])]), _c('ul', [_c('li', [_vm._v("使用Gstreamer("), _c('a', {
    attrs: {
      "href": "https://gstreamer.freedesktop.org/download/",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("下载"), _c('OutboundLink')], 1), _vm._v(")或OBS Studio("), _c('a', {
    attrs: {
      "href": "https://github.com/obsproject/obs-studio/tree/30.0.0-beta2",
      "target": "_blank",
      "rel": "noopener noreferrer"
    }
  }, [_vm._v("下载"), _c('OutboundLink')], 1), _vm._v(")推流：")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("gst-launch-1.0 videotestsrc ! videoconvert ! vp8enc ! rtpvp8pay ! whipsink whip-endpoint=\"http://localhost:3000/whip/777\"\n")])])]), _c('ul', [_c('li', [_vm._v("打开浏览器，输入网址：\"http://localhost:3000/\"，输入对应ID(777)即可观看到视频")])]), _vm._v(" "), _c('h2', {
    attrs: {
      "id": "tools"
    }
  }, [_c('a', {
    staticClass: "header-anchor",
    attrs: {
      "href": "#tools"
    }
  }, [_vm._v("#")]), _vm._v(" Tools")]), _vm._v(" "), _c('p', [_vm._v("支持rtp到whip/whep的转换\n如：")]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("ffmpeg -> whipinto -> live777 -> whepfrom -> ffplay\n")])])]), _c('h3', {
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
  }, [_c('code', [_vm._v("ffmpeg -re -f lavfi -i testsrc=size=640x480:rate=30 -vcodec libvpx -f rtp 'rtp://127.0.0.1:5003?pkt_size=1200'\n")])])]), _c('p', [_c('em', [_vm._v("support parameter command")])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("cargo run --package=whipinto -- -c vp8 -u http://localhost:3000/whip/777 --command \\\n\"ffmpeg -re -f lavfi -i testsrc=size=640x480:rate=30 -vcodec libvpx -cpu-used 5 -deadline 1 -g 10 -error-resilient 1 -auto-alt-ref 1 -f rtp 'rtp://127.0.0.1:{port}?pkt_size=1200'\"\n")])])]), _c('ul', [_c('li', [_vm._v("VLC RTP stream  "), _c('em', [_vm._v("Note: VLC can't support all video codec")])])]), _vm._v(" "), _c('div', {
    staticClass: "language- extra-class"
  }, [_c('pre', {
    pre: true,
    attrs: {
      "class": "language-text"
    }
  }, [_c('code', [_vm._v("vlc -vvv <INPUT_FILE> --sout '#transcode{vcodec=h264}:rtp{dst=127.0.0.1,port=5003}'\n")])])]), _c('h3', {
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
  }, [_c('code', [_vm._v("whepfrom -c vp8 -u http://localhost:3000/whep/777 -t localhost:5004\n")])])]), _c('ul', [_c('li', [_vm._v("For ffplay. You Need a sdp file")])]), _vm._v(" "), _c('div', {
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
  }, [_c('code', [_vm._v("ffplay -protocol_whitelist rtp,file,udp -i stream.sdp\n")])])]), _c('p', [_c('em', [_vm._v("So. You can use this:")])]), _vm._v(" "), _c('div', {
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

// CONCATENATED MODULE: ./docs/zh/guide/start/source.md?vue&type=template&id=2c2622f0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14);

// CONCATENATED MODULE: ./docs/zh/guide/start/source.md

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

/* harmony default export */ var source = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);