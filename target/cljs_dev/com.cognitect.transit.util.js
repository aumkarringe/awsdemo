var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;

var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var weavejester=$CLJS.weavejester || ($CLJS.weavejester = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var module$shadow_js_shim_module$ttag=$CLJS.module$shadow_js_shim_module$ttag || ($CLJS.module$shadow_js_shim_module$ttag = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var module$shadow_js_shim_module$moment_timezone=$CLJS.module$shadow_js_shim_module$moment_timezone || ($CLJS.module$shadow_js_shim_module$moment_timezone = {});
var module$shadow_js_shim_module$moment=$CLJS.module$shadow_js_shim_module$moment || ($CLJS.module$shadow_js_shim_module$moment = {});
var tailrecursion=$CLJS.tailrecursion || ($CLJS.tailrecursion = {});
var module$shadow_js_shim_module$crc_32=$CLJS.module$shadow_js_shim_module$crc_32 || ($CLJS.module$shadow_js_shim_module$crc_32 = {});
var devtools=$CLJS.devtools || ($CLJS.devtools = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var inflections=$CLJS.inflections || ($CLJS.inflections = {});
var net=$CLJS.net || ($CLJS.net = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
var flatland=$CLJS.flatland || ($CLJS.flatland = {});
var lambdaisland=$CLJS.lambdaisland || ($CLJS.lambdaisland = {});
var medley=$CLJS.medley || ($CLJS.medley = {});
var no=$CLJS.no || ($CLJS.no = {});
var metabase=$CLJS.metabase || ($CLJS.metabase = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("com.cognitect.transit.util.js");

goog.provide("com.cognitect.transit.util");
goog.require("goog.object");
goog.scope(function() {
  var util = com.cognitect.transit.util;
  var gobject = goog.object;
  if (typeof Object.keys != "undefined") {
    util.objectKeys = function(obj) {
      return Object.keys(obj);
    };
  } else {
    util.objectKeys = function(obj) {
      return gobject.getKeys(obj);
    };
  }
  if (typeof Array.isArray != "undefined") {
    util.isArray = function(obj) {
      return Array.isArray(obj);
    };
  } else {
    util.isArray = function(obj) {
      return goog.typeOf(obj) === "array";
    };
  }
  util.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d";
  util.randInt = function(ub) {
    return Math.round(Math.random() * ub);
  };
  util.randHex = function() {
    return util.randInt(15).toString(16);
  };
  util.randomUUID = function() {
    var rhex = (8 | 3 & util.randInt(14)).toString(16);
    var ret = util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + "-" + util.randHex() + util.randHex() + util.randHex() + util.randHex() + "-" + "4" + util.randHex() + util.randHex() + util.randHex() + "-" + rhex + util.randHex() + util.randHex() + util.randHex() + "-" + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + util.randHex() + 
    util.randHex() + util.randHex() + util.randHex();
    return ret;
  };
  util.btoa = function(input) {
    if (typeof btoa != "undefined") {
      return btoa(input);
    } else {
      var str = String(input);
      var block;
      var charCode;
      var idx = 0;
      var map = util.chars;
      var output = "";
      for (; str.charAt(idx | 0) || (map = "\x3d", idx % 1); output = output + map.charAt(63 & block >> 8 - idx % 1 * 8)) {
        charCode = str.charCodeAt(idx = idx + 3 / 4);
        if (charCode > 255) {
          throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }
        block = block << 8 | charCode;
      }
      return output;
    }
  };
  util.atob = function(input) {
    if (typeof atob != "undefined") {
      return atob(input);
    } else {
      var str = String(input).replace(/=+$/, "");
      if (str.length % 4 == 1) {
        throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
      }
      var bc = 0;
      var bs;
      var buffer;
      var idx = 0;
      var output = "";
      for (; buffer = str.charAt(idx++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? output = output + String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
        buffer = util.chars.indexOf(buffer);
      }
      return output;
    }
  };
  util.Uint8ToBase64 = function(u8Arr) {
    var CHUNK_SIZE = 32768;
    var index = 0;
    var length = u8Arr.length;
    var result = "";
    var slice = null;
    for (; index < length;) {
      slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
      result = result + String.fromCharCode.apply(null, slice);
      index = index + CHUNK_SIZE;
    }
    return util.btoa(result);
  };
  util.Base64ToUint8 = function(base64) {
    var binary_string = util.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    var i = 0;
    for (; i < len; i++) {
      var ascii = binary_string.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  };
});

module.exports = com.cognitect.transit.util;

//# sourceMappingURL=com.cognitect.transit.util.js.map
