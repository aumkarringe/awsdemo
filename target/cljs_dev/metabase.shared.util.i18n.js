var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$ttag.js");
require("./clojure.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.util.i18n.js");

goog.provide('metabase.shared.util.i18n');
/**
 * Converts `''` to `'` inside the string; that's `java.text.MessageFormat` escaping that isn't needed in JS.
 */
metabase.shared.util.i18n.escape_format_string = (function metabase$shared$util$i18n$escape_format_string(format_string){
return clojure.string.replace(format_string,/''/,"'");
});
/**
 * Format an i18n `format-string` with `args` with a translated string in the user locale.
 * 
 *   The strings are formatted in `java.test.MessageFormat` style. That's used directly in JVM Clojure, but in CLJS we have
 *   to adapt to ttag, which doesn't have the same escaping rules.
 *   - 'xyz' single quotes wrap literal text which should not be interpolated, and could contain literal '{0}'.
 *   - A literal single quote is written with two single quotes: `''`
 *   The first part is not supported at all. `''` is converted to a single `'`.
 */
metabase.shared.util.i18n.js_i18n = (function metabase$shared$util$i18n$js_i18n(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74692 = arguments.length;
var i__5727__auto___74693 = (0);
while(true){
if((i__5727__auto___74693 < len__5726__auto___74692)){
args__5732__auto__.push((arguments[i__5727__auto___74693]));

var G__74695 = (i__5727__auto___74693 + (1));
i__5727__auto___74693 = G__74695;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic = (function (format_string,args){
var strings = clojure.string.split.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.escape_format_string(format_string),/\{\d+\}/);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(shadow.js.shim.module$ttag.t,cljs.core.clj__GT_js(strings),cljs.core.clj__GT_js(args));
}));

(metabase.shared.util.i18n.js_i18n.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.shared.util.i18n.js_i18n.cljs$lang$applyTo = (function (seq74633){
var G__74642 = cljs.core.first(seq74633);
var seq74633__$1 = cljs.core.next(seq74633);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74642,seq74633__$1);
}));

metabase.shared.util.i18n.re_param_zero = /\{0\}/;
/**
 * Format an i18n `format-string` with the appropriate plural form based on the value `n`.
 * Allows `n` to be interpolated into the string using {0}.
 */
metabase.shared.util.i18n.js_i18n_n = (function metabase$shared$util$i18n$js_i18n_n(format_string,format_string_pl,n){
var format_string_esc = metabase.shared.util.i18n.escape_format_string(format_string);
var strings = clojure.string.split.cljs$core$IFn$_invoke$arity$2(format_string_esc,metabase.shared.util.i18n.re_param_zero);
var strings__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strings),(1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_string_esc,""], null):strings);
var has_n_QMARK_ = cljs.core.re_find(/.*\{0\}.*/,format_string_esc);
return shadow.js.shim.module$ttag.ngettext(shadow.js.shim.module$ttag.msgid(cljs.core.clj__GT_js(strings__$1),(cljs.core.truth_(has_n_QMARK_)?n:"")),clojure.string.replace(metabase.shared.util.i18n.escape_format_string(format_string_pl),metabase.shared.util.i18n.re_param_zero,cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)),n);
});

//# sourceMappingURL=metabase.shared.util.i18n.js.map
