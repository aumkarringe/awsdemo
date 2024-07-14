var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./camel_snake_kebab.internals.macros.js");
require("./clojure.data.js");
require("./cljs.pprint.js");
require("./clojure.set.js");
require("./clojure.string.js");
require("./clojure.walk.js");
require("./flatland.ordered.map.js");
require("./medley.core.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.shared.util.namespaces.js");
require("./metabase.util.format.js");
require("./metabase.util.log.js");
require("./metabase.util.memoize.js");
require("./net.cgrand.macrovich.js");
require("./weavejester.dependency.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.util.js");

goog.provide('metabase.util');
/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.colorize = (function() { 
var metabase$util$colorize__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.colorize,args__70829__auto__);
};
var metabase$util$colorize = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__74894__i = 0, G__74894__a = new Array(arguments.length -  0);
while (G__74894__i < G__74894__a.length) {G__74894__a[G__74894__i] = arguments[G__74894__i + 0]; ++G__74894__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__74894__a,0,null);
} 
return metabase$util$colorize__delegate.call(this,args__70829__auto__);};
metabase$util$colorize.cljs$lang$maxFixedArity = 0;
metabase$util$colorize.cljs$lang$applyTo = (function (arglist__74895){
var args__70829__auto__ = cljs.core.seq(arglist__74895);
return metabase$util$colorize__delegate(args__70829__auto__);
});
metabase$util$colorize.cljs$core$IFn$_invoke$arity$variadic = metabase$util$colorize__delegate;
return metabase$util$colorize;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.format_bytes = (function() { 
var metabase$util$format_bytes__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.format_bytes,args__70829__auto__);
};
var metabase$util$format_bytes = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__74896__i = 0, G__74896__a = new Array(arguments.length -  0);
while (G__74896__i < G__74896__a.length) {G__74896__a[G__74896__i] = arguments[G__74896__i + 0]; ++G__74896__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__74896__a,0,null);
} 
return metabase$util$format_bytes__delegate.call(this,args__70829__auto__);};
metabase$util$format_bytes.cljs$lang$maxFixedArity = 0;
metabase$util$format_bytes.cljs$lang$applyTo = (function (arglist__74897){
var args__70829__auto__ = cljs.core.seq(arglist__74897);
return metabase$util$format_bytes__delegate(args__70829__auto__);
});
metabase$util$format_bytes.cljs$core$IFn$_invoke$arity$variadic = metabase$util$format_bytes__delegate;
return metabase$util$format_bytes;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.format_color = (function() { 
var metabase$util$format_color__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.format_color,args__70829__auto__);
};
var metabase$util$format_color = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__74898__i = 0, G__74898__a = new Array(arguments.length -  0);
while (G__74898__i < G__74898__a.length) {G__74898__a[G__74898__i] = arguments[G__74898__i + 0]; ++G__74898__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__74898__a,0,null);
} 
return metabase$util$format_color__delegate.call(this,args__70829__auto__);};
metabase$util$format_color.cljs$lang$maxFixedArity = 0;
metabase$util$format_color.cljs$lang$applyTo = (function (arglist__74899){
var args__70829__auto__ = cljs.core.seq(arglist__74899);
return metabase$util$format_color__delegate(args__70829__auto__);
});
metabase$util$format_color.cljs$core$IFn$_invoke$arity$variadic = metabase$util$format_color__delegate;
return metabase$util$format_color;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.format_milliseconds = (function() { 
var metabase$util$format_milliseconds__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.format_milliseconds,args__70829__auto__);
};
var metabase$util$format_milliseconds = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__74900__i = 0, G__74900__a = new Array(arguments.length -  0);
while (G__74900__i < G__74900__a.length) {G__74900__a[G__74900__i] = arguments[G__74900__i + 0]; ++G__74900__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__74900__a,0,null);
} 
return metabase$util$format_milliseconds__delegate.call(this,args__70829__auto__);};
metabase$util$format_milliseconds.cljs$lang$maxFixedArity = 0;
metabase$util$format_milliseconds.cljs$lang$applyTo = (function (arglist__74901){
var args__70829__auto__ = cljs.core.seq(arglist__74901);
return metabase$util$format_milliseconds__delegate(args__70829__auto__);
});
metabase$util$format_milliseconds.cljs$core$IFn$_invoke$arity$variadic = metabase$util$format_milliseconds__delegate;
return metabase$util$format_milliseconds;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.format_nanoseconds = (function() { 
var metabase$util$format_nanoseconds__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.format_nanoseconds,args__70829__auto__);
};
var metabase$util$format_nanoseconds = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__74902__i = 0, G__74902__a = new Array(arguments.length -  0);
while (G__74902__i < G__74902__a.length) {G__74902__a[G__74902__i] = arguments[G__74902__i + 0]; ++G__74902__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__74902__a,0,null);
} 
return metabase$util$format_nanoseconds__delegate.call(this,args__70829__auto__);};
metabase$util$format_nanoseconds.cljs$lang$maxFixedArity = 0;
metabase$util$format_nanoseconds.cljs$lang$applyTo = (function (arglist__74903){
var args__70829__auto__ = cljs.core.seq(arglist__74903);
return metabase$util$format_nanoseconds__delegate(args__70829__auto__);
});
metabase$util$format_nanoseconds.cljs$core$IFn$_invoke$arity$variadic = metabase$util$format_nanoseconds__delegate;
return metabase$util$format_nanoseconds;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.util.format_seconds = (function() { 
var metabase$util$format_seconds__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.util.format.format_seconds,args__70829__auto__);
};
var metabase$util$format_seconds = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__74904__i = 0, G__74904__a = new Array(arguments.length -  0);
while (G__74904__i < G__74904__a.length) {G__74904__a[G__74904__i] = arguments[G__74904__i + 0]; ++G__74904__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__74904__a,0,null);
} 
return metabase$util$format_seconds__delegate.call(this,args__70829__auto__);};
metabase$util$format_seconds.cljs$lang$maxFixedArity = 0;
metabase$util$format_seconds.cljs$lang$applyTo = (function (arglist__74905){
var args__70829__auto__ = cljs.core.seq(arglist__74905);
return metabase$util$format_seconds__delegate(args__70829__auto__);
});
metabase$util$format_seconds.cljs$core$IFn$_invoke$arity$variadic = metabase$util$format_seconds__delegate;
return metabase$util$format_seconds;
})()
;
/**
 * Takes a message string and returns a basic exception: [[java.lang.Exception]] on JVM and [[Error]] in JS.
 */
metabase.util.error = (function metabase$util$error(msg){
return (new Error(msg));
});
/**
 * Return `k` as a string, qualified by its namespace, if any (unlike `name`). Handles `nil` values gracefully as well
 *   (also unlike `name`).
 * 
 *   (u/qualified-name :type/FK) -> "type/FK"
 */
metabase.util.qualified_name = (function metabase$util$qualified_name(k){
if((!((k == null)))){
var temp__5802__auto__ = (((((!((k == null))))?(((((k.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === k.cljs$core$INamed$))))?true:(((!k.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.INamed,k):false)):cljs.core.native_satisfies_QMARK_(cljs.core.INamed,k)))?cljs.core.namespace(k):null);
if(cljs.core.truth_(temp__5802__auto__)){
var namespac = temp__5802__auto__;
return [namespac,"/",cljs.core.name(k)].join('');
} else {
return cljs.core.name(k);
}
} else {
return null;
}
});
/**
 * Given a map, returns a new map with all nil values removed.
 */
metabase.util.remove_nils = (function metabase$util$remove_nils(m){
return medley.core.filter_vals(cljs.core.some_QMARK_,m);
});
/**
 * Recursively replace the keys in a map with the value of `(f key)`.
 */
metabase.util.recursive_map_keys = (function metabase$util$recursive_map_keys(f,m){
return clojure.walk.postwalk((function (p1__74746_SHARP_){
if(cljs.core.map_QMARK_(p1__74746_SHARP_)){
return medley.core.map_keys(f,p1__74746_SHARP_);
} else {
return p1__74746_SHARP_;
}
}),m);
});
/**
 * Fixes strings that don't terminate in a period; also accounts for strings
 *   that end in `:`. Used for formatting docs.
 */
metabase.util.add_period = (function metabase$util$add_period(s){
var text = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_((function (){var or__5002__auto__ = clojure.string.blank_QMARK_(text);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var G__74749 = cljs.core.last(text);
var fexpr__74748 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["!",null,".",null,"?",null], null), null);
return (fexpr__74748.cljs$core$IFn$_invoke$arity$1 ? fexpr__74748.cljs$core$IFn$_invoke$arity$1(G__74749) : fexpr__74748.call(null,G__74749));
}
})())){
return text;
} else {
if(clojure.string.ends_with_QMARK_(text,":")){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),(((text).length) - (1))),"."].join('');
} else {
return [text,"."].join('');
}
}
});
/**
 * Locale-agnostic version of [[clojure.string/lower-case]]. [[clojure.string/lower-case]] uses the default locale in
 *   conversions, turning `ID` into `ıd`, in the Turkish locale. This function always uses the `en-US` locale.
 */
metabase.util.lower_case_en = (function metabase$util$lower_case_en(s){
if(cljs.core.truth_(s)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(s).toLowerCase();
} else {
return null;
}
});
/**
 * Locale-agnostic version of `clojure.string/upper-case`.
 *   `clojure.string/upper-case` uses the default locale in conversions, turning
 *   `id` into `İD`, in the Turkish locale. This function always uses the
 *   `en-US` locale.
 */
metabase.util.upper_case_en = (function metabase$util$upper_case_en(s){
if(cljs.core.truth_(s)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(s).toUpperCase();
} else {
return null;
}
});
/**
 * Locale-agnostic version of [[clojure.string/capitalize]].
 */
metabase.util.capitalize_en = (function metabase$util$capitalize_en(s){
var temp__5804__auto__ = (function (){var G__74751 = s;
if((G__74751 == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74751);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var s__$1 = temp__5804__auto__;
if((((s__$1).length) < (2))){
return metabase.util.upper_case_en(s__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.util.upper_case_en(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.util.lower_case_en(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1))))].join('');
}
} else {
return null;
}
});
/**
 * Returns the contents of a regex as a string.
 * 
 *   This is simply [[str]] in Clojure but needs to remove slashes (`"/regex contents/"`) in CLJS.
 */
metabase.util.regex__GT_str = (function metabase$util$regex__GT_str(regex){
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(regex);
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(((s).length) - (1)));
});
metabase.util.__GT_kebab_case_en_STAR_ = (function metabase$util$__GT_kebab_case_en_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74906 = arguments.length;
var i__5727__auto___74907 = (0);
while(true){
if((i__5727__auto___74907 < len__5726__auto___74906)){
args__5732__auto__.push((arguments[i__5727__auto___74907]));

var G__74908 = (i__5727__auto___74907 + (1));
i__5727__auto___74907 = G__74908;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_kebab_case_en_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_kebab_case_en_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (s__43024__auto__,rest__43025__auto__){
var convert_case__43026__auto__ = (function (p1__43023__43027__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"-",p1__43023__43027__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43025__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43024__auto__,convert_case__43026__auto__);
}));

(metabase.util.__GT_kebab_case_en_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_kebab_case_en_STAR_.cljs$lang$applyTo = (function (seq74752){
var G__74753 = cljs.core.first(seq74752);
var seq74752__$1 = cljs.core.next(seq74752);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74753,seq74752__$1);
}));


metabase.util.__GT_kebab_case_en_STAR__string = (function metabase$util$__GT_kebab_case_en_STAR__string(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74909 = arguments.length;
var i__5727__auto___74910 = (0);
while(true){
if((i__5727__auto___74910 < len__5726__auto___74909)){
args__5732__auto__.push((arguments[i__5727__auto___74910]));

var G__74911 = (i__5727__auto___74910 + (1));
i__5727__auto___74910 = G__74911;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_kebab_case_en_STAR__string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_kebab_case_en_STAR__string.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"-",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_kebab_case_en_STAR__string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_kebab_case_en_STAR__string.cljs$lang$applyTo = (function (seq74754){
var G__74755 = cljs.core.first(seq74754);
var seq74754__$1 = cljs.core.next(seq74754);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74755,seq74754__$1);
}));


metabase.util.__GT_kebab_case_en_STAR__symbol = (function metabase$util$__GT_kebab_case_en_STAR__symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74912 = arguments.length;
var i__5727__auto___74913 = (0);
while(true){
if((i__5727__auto___74913 < len__5726__auto___74912)){
args__5732__auto__.push((arguments[i__5727__auto___74913]));

var G__74914 = (i__5727__auto___74913 + (1));
i__5727__auto___74913 = G__74914;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_kebab_case_en_STAR__symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_kebab_case_en_STAR__symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"-",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_kebab_case_en_STAR__symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_kebab_case_en_STAR__symbol.cljs$lang$applyTo = (function (seq74756){
var G__74757 = cljs.core.first(seq74756);
var seq74756__$1 = cljs.core.next(seq74756);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74757,seq74756__$1);
}));


metabase.util.__GT_kebab_case_en_STAR__keyword = (function metabase$util$__GT_kebab_case_en_STAR__keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74915 = arguments.length;
var i__5727__auto___74916 = (0);
while(true){
if((i__5727__auto___74916 < len__5726__auto___74915)){
args__5732__auto__.push((arguments[i__5727__auto___74916]));

var G__74917 = (i__5727__auto___74916 + (1));
i__5727__auto___74916 = G__74917;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_kebab_case_en_STAR__keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_kebab_case_en_STAR__keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"-",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_kebab_case_en_STAR__keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_kebab_case_en_STAR__keyword.cljs$lang$applyTo = (function (seq74758){
var G__74759 = cljs.core.first(seq74758);
var seq74758__$1 = cljs.core.next(seq74758);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74759,seq74758__$1);
}));

metabase.util.__GT_camelCaseEn_STAR_ = (function metabase$util$__GT_camelCaseEn_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74918 = arguments.length;
var i__5727__auto___74919 = (0);
while(true){
if((i__5727__auto___74919 < len__5726__auto___74918)){
args__5732__auto__.push((arguments[i__5727__auto___74919]));

var G__74920 = (i__5727__auto___74919 + (1));
i__5727__auto___74919 = G__74920;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_camelCaseEn_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_camelCaseEn_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (s__43024__auto__,rest__43025__auto__){
var convert_case__43026__auto__ = (function (p1__43023__43027__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.capitalize_en,"",p1__43023__43027__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43025__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43024__auto__,convert_case__43026__auto__);
}));

(metabase.util.__GT_camelCaseEn_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_camelCaseEn_STAR_.cljs$lang$applyTo = (function (seq74760){
var G__74761 = cljs.core.first(seq74760);
var seq74760__$1 = cljs.core.next(seq74760);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74761,seq74760__$1);
}));


metabase.util.__GT_camelCaseEn_STAR_String = (function metabase$util$__GT_camelCaseEn_STAR_String(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74921 = arguments.length;
var i__5727__auto___74922 = (0);
while(true){
if((i__5727__auto___74922 < len__5726__auto___74921)){
args__5732__auto__.push((arguments[i__5727__auto___74922]));

var G__74923 = (i__5727__auto___74922 + (1));
i__5727__auto___74922 = G__74923;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_camelCaseEn_STAR_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_camelCaseEn_STAR_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.capitalize_en,"",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_camelCaseEn_STAR_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_camelCaseEn_STAR_String.cljs$lang$applyTo = (function (seq74762){
var G__74763 = cljs.core.first(seq74762);
var seq74762__$1 = cljs.core.next(seq74762);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74763,seq74762__$1);
}));


metabase.util.__GT_camelCaseEn_STAR_Symbol = (function metabase$util$__GT_camelCaseEn_STAR_Symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74924 = arguments.length;
var i__5727__auto___74925 = (0);
while(true){
if((i__5727__auto___74925 < len__5726__auto___74924)){
args__5732__auto__.push((arguments[i__5727__auto___74925]));

var G__74926 = (i__5727__auto___74925 + (1));
i__5727__auto___74925 = G__74926;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_camelCaseEn_STAR_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_camelCaseEn_STAR_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.capitalize_en,"",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_camelCaseEn_STAR_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_camelCaseEn_STAR_Symbol.cljs$lang$applyTo = (function (seq74764){
var G__74765 = cljs.core.first(seq74764);
var seq74764__$1 = cljs.core.next(seq74764);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74765,seq74764__$1);
}));


metabase.util.__GT_camelCaseEn_STAR_Keyword = (function metabase$util$__GT_camelCaseEn_STAR_Keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74927 = arguments.length;
var i__5727__auto___74928 = (0);
while(true){
if((i__5727__auto___74928 < len__5726__auto___74927)){
args__5732__auto__.push((arguments[i__5727__auto___74928]));

var G__74929 = (i__5727__auto___74928 + (1));
i__5727__auto___74928 = G__74929;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_camelCaseEn_STAR_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_camelCaseEn_STAR_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.capitalize_en,"",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_camelCaseEn_STAR_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_camelCaseEn_STAR_Keyword.cljs$lang$applyTo = (function (seq74766){
var G__74767 = cljs.core.first(seq74766);
var seq74766__$1 = cljs.core.next(seq74766);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74767,seq74766__$1);
}));

metabase.util.__GT_snake_case_en_STAR_ = (function metabase$util$__GT_snake_case_en_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74931 = arguments.length;
var i__5727__auto___74932 = (0);
while(true){
if((i__5727__auto___74932 < len__5726__auto___74931)){
args__5732__auto__.push((arguments[i__5727__auto___74932]));

var G__74934 = (i__5727__auto___74932 + (1));
i__5727__auto___74932 = G__74934;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_snake_case_en_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_snake_case_en_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (s__43024__auto__,rest__43025__auto__){
var convert_case__43026__auto__ = (function (p1__43023__43027__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"_",p1__43023__43027__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43025__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43024__auto__,convert_case__43026__auto__);
}));

(metabase.util.__GT_snake_case_en_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_snake_case_en_STAR_.cljs$lang$applyTo = (function (seq74768){
var G__74769 = cljs.core.first(seq74768);
var seq74768__$1 = cljs.core.next(seq74768);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74769,seq74768__$1);
}));


metabase.util.__GT_snake_case_en_STAR__string = (function metabase$util$__GT_snake_case_en_STAR__string(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74936 = arguments.length;
var i__5727__auto___74937 = (0);
while(true){
if((i__5727__auto___74937 < len__5726__auto___74936)){
args__5732__auto__.push((arguments[i__5727__auto___74937]));

var G__74938 = (i__5727__auto___74937 + (1));
i__5727__auto___74937 = G__74938;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_snake_case_en_STAR__string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_snake_case_en_STAR__string.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"_",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_snake_case_en_STAR__string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_snake_case_en_STAR__string.cljs$lang$applyTo = (function (seq74770){
var G__74771 = cljs.core.first(seq74770);
var seq74770__$1 = cljs.core.next(seq74770);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74771,seq74770__$1);
}));


metabase.util.__GT_snake_case_en_STAR__symbol = (function metabase$util$__GT_snake_case_en_STAR__symbol(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74939 = arguments.length;
var i__5727__auto___74940 = (0);
while(true){
if((i__5727__auto___74940 < len__5726__auto___74939)){
args__5732__auto__.push((arguments[i__5727__auto___74940]));

var G__74941 = (i__5727__auto___74940 + (1));
i__5727__auto___74940 = G__74941;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_snake_case_en_STAR__symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_snake_case_en_STAR__symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"_",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_snake_case_en_STAR__symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_snake_case_en_STAR__symbol.cljs$lang$applyTo = (function (seq74772){
var G__74773 = cljs.core.first(seq74772);
var seq74772__$1 = cljs.core.next(seq74772);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74773,seq74772__$1);
}));


metabase.util.__GT_snake_case_en_STAR__keyword = (function metabase$util$__GT_snake_case_en_STAR__keyword(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74944 = arguments.length;
var i__5727__auto___74945 = (0);
while(true){
if((i__5727__auto___74945 < len__5726__auto___74944)){
args__5732__auto__.push((arguments[i__5727__auto___74945]));

var G__74946 = (i__5727__auto___74945 + (1));
i__5727__auto___74945 = G__74946;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_snake_case_en_STAR__keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_snake_case_en_STAR__keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.lower_case_en,metabase.util.lower_case_en,"_",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_snake_case_en_STAR__keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_snake_case_en_STAR__keyword.cljs$lang$applyTo = (function (seq74774){
var G__74775 = cljs.core.first(seq74774);
var seq74774__$1 = cljs.core.next(seq74774);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74775,seq74774__$1);
}));

metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_ = (function metabase$util$__GT_SCREAMING_SNAKE_CASE_EN_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74947 = arguments.length;
var i__5727__auto___74948 = (0);
while(true){
if((i__5727__auto___74948 < len__5726__auto___74947)){
args__5732__auto__.push((arguments[i__5727__auto___74948]));

var G__74949 = (i__5727__auto___74948 + (1));
i__5727__auto___74948 = G__74949;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (s__43024__auto__,rest__43025__auto__){
var convert_case__43026__auto__ = (function (p1__43023__43027__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.upper_case_en,metabase.util.upper_case_en,"_",p1__43023__43027__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43025__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43024__auto__,convert_case__43026__auto__);
}));

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_.cljs$lang$applyTo = (function (seq74776){
var G__74777 = cljs.core.first(seq74776);
var seq74776__$1 = cljs.core.next(seq74776);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74777,seq74776__$1);
}));


metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING = (function metabase$util$__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74950 = arguments.length;
var i__5727__auto___74951 = (0);
while(true){
if((i__5727__auto___74951 < len__5726__auto___74950)){
args__5732__auto__.push((arguments[i__5727__auto___74951]));

var G__74952 = (i__5727__auto___74951 + (1));
i__5727__auto___74951 = G__74952;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.upper_case_en,metabase.util.upper_case_en,"_",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__STRING.cljs$lang$applyTo = (function (seq74778){
var G__74779 = cljs.core.first(seq74778);
var seq74778__$1 = cljs.core.next(seq74778);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74779,seq74778__$1);
}));


metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL = (function metabase$util$__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74953 = arguments.length;
var i__5727__auto___74954 = (0);
while(true){
if((i__5727__auto___74954 < len__5726__auto___74953)){
args__5732__auto__.push((arguments[i__5727__auto___74954]));

var G__74955 = (i__5727__auto___74954 + (1));
i__5727__auto___74954 = G__74955;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.upper_case_en,metabase.util.upper_case_en,"_",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__SYMBOL.cljs$lang$applyTo = (function (seq74780){
var G__74781 = cljs.core.first(seq74780);
var seq74780__$1 = cljs.core.next(seq74780);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74781,seq74780__$1);
}));


metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD = (function metabase$util$__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74956 = arguments.length;
var i__5727__auto___74957 = (0);
while(true){
if((i__5727__auto___74957 < len__5726__auto___74956)){
args__5732__auto__.push((arguments[i__5727__auto___74957]));

var G__74958 = (i__5727__auto___74957 + (1));
i__5727__auto___74957 = G__74958;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__43029__auto__,rest__43030__auto__){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,metabase.util.upper_case_en,metabase.util.upper_case_en,"_",cljs.core.name(s__43029__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43030__auto__], 0)));
}));

(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR__KEYWORD.cljs$lang$applyTo = (function (seq74782){
var G__74783 = cljs.core.first(seq74782);
var seq74782__$1 = cljs.core.next(seq74782);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74783,seq74782__$1);
}));

/**
 * Wrap a CSK defconversion function so that it handles nil and namespaced keywords, which it doesn't support out of the
 *   box for whatever reason.
 */
metabase.util.wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords = (function metabase$util$wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords(f){
return (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.qualified_keyword_QMARK_(x)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var G__74784 = cljs.core.namespace(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__74784) : f.call(null,G__74784));
})(),(function (){var G__74785 = cljs.core.name(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__74785) : f.call(null,G__74785));
})());
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}
} else {
return null;
}
});
});
/**
 * Like [[camel-snake-kebab.core/->kebab-case]], but always uses English for lower-casing, supports keywords with
 *   namespaces, and returns `nil` when passed `nil` (rather than throwing an exception).
 */
metabase.util.__GT_kebab_case_en = metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$3(metabase.util.wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords(metabase.util.__GT_kebab_case_en_STAR_),new cljs.core.Keyword("lru","threshold","lru/threshold",204067006),(256));
/**
 * Like [[camel-snake-kebab.core/->snake_case]], but always uses English for lower-casing, supports keywords with
 *   namespaces, and returns `nil` when passed `nil` (rather than throwing an exception).
 */
metabase.util.__GT_snake_case_en = metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$3(metabase.util.wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords(metabase.util.__GT_snake_case_en_STAR_),new cljs.core.Keyword("lru","threshold","lru/threshold",204067006),(256));
/**
 * Like [[camel-snake-kebab.core/->camelCase]], but always uses English for upper- and lower-casing, supports keywords
 *   with namespaces, and returns `nil` when passed `nil` (rather than throwing an exception).
 */
metabase.util.__GT_camelCaseEn = metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$3(metabase.util.wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords(metabase.util.__GT_camelCaseEn_STAR_),new cljs.core.Keyword("lru","threshold","lru/threshold",204067006),(256));
/**
 * Like [[camel-snake-kebab.core/->SCREAMING_SNAKE_CASE]], but always uses English for upper- and lower-casing, supports
 *   keywords with namespaces, and returns `nil` when passed `nil` (rather than throwing an exception).
 */
metabase.util.__GT_SCREAMING_SNAKE_CASE_EN = metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$3(metabase.util.wrap_csk_conversion_fn_to_handle_nil_and_namespaced_keywords(metabase.util.__GT_SCREAMING_SNAKE_CASE_EN_STAR_),new cljs.core.Keyword("lru","threshold","lru/threshold",204067006),(256));
/**
 * Like string/capitalize, only it ignores the rest of the string
 *   to retain case-sensitive capitalization, e.g., PostgreSQL.
 */
metabase.util.capitalize_first_char = (function metabase$util$capitalize_first_char(s){
if((cljs.core.count(s) < (2))){
return metabase.util.upper_case_en(s);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.util.upper_case_en(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join('');
}
});
/**
 * Convert the top-level keys in a map to `snake_case`.
 */
metabase.util.snake_keys = (function metabase$util$snake_keys(m){
return cljs.core.update_keys(m,metabase.util.__GT_snake_case_en);
});
/**
 * Recursively convert the keys in a map to `snake_case`.
 */
metabase.util.deep_snake_keys = (function metabase$util$deep_snake_keys(m){
return metabase.util.recursive_map_keys(metabase.util.__GT_snake_case_en,m);
});
/**
 * Given any map-like object, return it as a Clojure map with :kebab-case keyword keys.
 *   The input map can be a:
 *   - Clojure map with string or keyword keys,
 *   - JS object (with string keys)
 *   The keys are converted to `kebab-case` from `camelCase` or `snake_case` as necessary, and turned into keywords.
 * 
 *   Returns an empty map if nil is input (like [[update-keys]]).
 */
metabase.util.normalize_map = (function metabase$util$normalize_map(m){
var base = ((cljs.core.object_QMARK_(m))?cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(m):m);
return cljs.core.update_keys(base,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,metabase.util.__GT_kebab_case_en));
});
(cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.constantly((120)));
/**
 * Is `s` a valid email address string?
 */
metabase.util.email_QMARK_ = (function metabase$util$email_QMARK_(s){
return cljs.core.boolean$(((typeof s === 'string')?cljs.core.re_matches(/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,metabase.util.lower_case_en(s)):null));
});
/**
 * Is `s` a state string?
 */
metabase.util.state_QMARK_ = (function metabase$util$state_QMARK_(s){
return cljs.core.boolean$(((typeof s === 'string')?cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 100, ["rhode island",null,"delaware",null,"ct",null,"ohio",null,"new york",null,"colorado",null,"nh",null,"wi",null,"la",null,"california",null,"md",null,"wisconsin",null,"massachusetts",null,"ne",null,"alaska",null,"al",null,"pennsylvania",null,"oklahoma",null,"texas",null,"mo",null,"vt",null,"north carolina",null,"idaho",null,"nevada",null,"new jersey",null,"indiana",null,"west virginia",null,"florida",null,"new mexico",null,"nc",null,"ky",null,"maine",null,"sc",null,"kentucky",null,"id",null,"arkansas",null,"utah",null,"co",null,"connecticut",null,"vermont",null,"ca",null,"mi",null,"ut",null,"wv",null,"kansas",null,"ma",null,"ia",null,"wa",null,"ms",null,"south dakota",null,"fl",null,"il",null,"oh",null,"south carolina",null,"tn",null,"or",null,"de",null,"ri",null,"hi",null,"wy",null,"iowa",null,"maryland",null,"ga",null,"hawaii",null,"montana",null,"wyoming",null,"mt",null,"tx",null,"missouri",null,"oregon",null,"georgia",null,"nm",null,"mn",null,"north dakota",null,"virginia",null,"illinois",null,"ar",null,"ny",null,"sd",null,"ak",null,"ok",null,"alabama",null,"nv",null,"louisiana",null,"nebraska",null,"tennessee",null,"new hampshire",null,"washington",null,"pa",null,"va",null,"minnesota",null,"ks",null,"me",null,"nj",null,"arizona",null,"michigan",null,"in",null,"az",null,"mississippi",null,"nd",null], null), null),metabase.util.lower_case_en(s)):null));
});
metabase.util.url_regex_pattern = (function (){var alpha = "Alphabetic";
return ["^[\\p{",alpha,"}\\d_\\-]+(\\.[\\p{",alpha,"}\\d_\\-]+)*(:\\d*)?"].join('');
})();
/**
 * Is `s` a valid HTTP/HTTPS URL string?
 */
metabase.util.url_QMARK_ = (function metabase$util$url_QMARK_(s){
try{var url = (new URL(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
return cljs.core.boolean$((function (){var and__5000__auto__ = cljs.core.re_matches((new RegExp(metabase.util.url_regex_pattern,"u")),url.host);
if(cljs.core.truth_(and__5000__auto__)){
var G__74794 = url.protocol;
var fexpr__74793 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (fexpr__74793.cljs$core$IFn$_invoke$arity$1 ? fexpr__74793.cljs$core$IFn$_invoke$arity$1(G__74794) : fexpr__74793.call(null,G__74794));
} else {
return and__5000__auto__;
}
})());
}catch (e74792){if((e74792 instanceof Error)){
var _ = e74792;
return false;
} else {
throw e74792;

}
}});
/**
 * Returns `true` if X is `nil`, otherwise calls (F X).
 * This can be used to see something is either `nil` or statisfies a predicate function:
 * 
 *   (string? nil)          -> false
 *   (string? "A")        -> true
 *   (maybe? string? nil)   -> true
 *   (maybe? string? "A") -> true
 * 
 * It can also be used to make sure a given function won't throw a `NullPointerException`:
 * 
 *   (str/lower-case nil)            -> NullPointerException
 *   (str/lower-case "ABC")        -> "abc"
 *   (maybe? str/lower-case nil)     -> true
 *   (maybe? str/lower-case "ABC") -> "abc"
 * 
 * The latter use-case can be useful for things like sorting where some values in a collection
 * might be `nil`:
 * 
 *   (sort-by (partial maybe? s/lower-case) some-collection)
 */
metabase.util.maybe_QMARK_ = (function metabase$util$maybe_QMARK_(f,x){
var or__5002__auto__ = (x == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}
});
/**
 * Returns the `emoji-string` passed in if emoji in logs are enabled, otherwise always returns an empty string.
 */
metabase.util.emoji = cljs.core.constantly("");
/**
 * Round (presumabily floating-point) `number` to `decimal-place`. Returns a `Double`.
 * 
 *   Rounds by decimal places, no matter how many significant figures the number has. See [[round-to-precision]].
 * 
 *  (round-to-decimals 2 35.5058998M) -> 35.51
 */
metabase.util.round_to_decimals = (function metabase$util$round_to_decimals(decimal_place,number){
if(cljs.core.integer_QMARK_(decimal_place)){
} else {
throw (new Error("Assert failed: (integer? decimal-place)"));
}

if(typeof number === 'number'){
} else {
throw (new Error("Assert failed: (number? number)"));
}

return cljs.core.parse_double(number.toFixed(decimal_place));
});
/**
 * Is `x` a real number (i.e. not a `NaN` or an `Infinity`)?
 */
metabase.util.real_number_QMARK_ = (function metabase$util$real_number_QMARK_(x){
return ((typeof x === 'number') && ((((!(cljs.core.NaN_QMARK_(x)))) && ((!(cljs.core.infinite_QMARK_(x)))))));
});
/**
 * Return a version of `s` with diacritical marks removed.
 */
metabase.util.remove_diacritical_marks = (function metabase$util$remove_diacritical_marks(s){
if(cljs.core.seq(s)){
return s.normalize("NFKD").replace((new RegExp("[\u0300-\u036F]","gu")),"");
} else {
return null;
}
});
/**
 * Valid *ASCII* characters for URL slugs generated by `slugify`.
 */
metabase.util.slugify_valid_chars = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 37, ["a",null,"b",null,"c",null,"d",null,"e",null,"f",null,"g",null,"h",null,"i",null,"j",null,"k",null,"l",null,"m",null,"n",null,"o",null,"0",null,"p",null,"1",null,"q",null,"2",null,"r",null,"3",null,"s",null,"4",null,"t",null,"5",null,"u",null,"6",null,"v",null,"7",null,"w",null,"8",null,"x",null,"9",null,"y",null,"z",null,"_",null], null), null);
metabase.util.slugify_char = (function metabase$util$slugify_char(c,url_encode_QMARK_){
if((c.charCodeAt((0)) < (128))){
if(cljs.core.contains_QMARK_(metabase.util.slugify_valid_chars,c)){
return c;
} else {
return "_";
}
} else {
if(cljs.core.truth_(url_encode_QMARK_)){
return encodeURIComponent(c);
} else {
return c;
}
}
});
/**
 * Return a version of String `s` appropriate for use as a URL slug.
 *   Downcase the name and remove diacritcal marks, and replace non-alphanumeric *ASCII* characters with underscores.
 * 
 *   If `unicode?` is falsy (the default), URL-encode non-ASCII characters. With `unicode?` truthy, non-ASCII characters
 *   are preserved.
 *   (Even when we want full ASCII output for eg. URL slugs, non-ASCII characters should be encoded rather than
 *   replaced with underscores in order to support languages that don't use the Latin alphabet; see metabase#3818).
 * 
 *   Optionally specify `:max-length` which will truncate the slug after that many characters.
 */
metabase.util.slugify = (function metabase$util$slugify(var_args){
var G__74796 = arguments.length;
switch (G__74796) {
case 1:
return metabase.util.slugify.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.util.slugify.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.util.slugify.cljs$core$IFn$_invoke$arity$1 = (function (s){
return metabase.util.slugify.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentArrayMap.EMPTY);
}));

(metabase.util.slugify.cljs$core$IFn$_invoke$arity$2 = (function (s,p__74800){
var map__74801 = p__74800;
var map__74801__$1 = cljs.core.__destructure_map(map__74801);
var max_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74801__$1,new cljs.core.Keyword(null,"max-length","max-length",-254826109));
var unicode_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74801__$1,new cljs.core.Keyword(null,"unicode?","unicode?",-1511958714));
if(cljs.core.seq(s)){
var slug = clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function metabase$util$iter__74802(s__74803){
return (new cljs.core.LazySeq(null,(function (){
var s__74803__$1 = s__74803;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74803__$1);
if(temp__5804__auto__){
var s__74803__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74803__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__74803__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__74805 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__74804 = (0);
while(true){
if((i__74804 < size__5479__auto__)){
var c = cljs.core._nth(c__5478__auto__,i__74804);
cljs.core.chunk_append(b__74805,metabase.util.slugify_char(c,cljs.core.not(unicode_QMARK_)));

var G__74965 = (i__74804 + (1));
i__74804 = G__74965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74805),metabase$util$iter__74802(cljs.core.chunk_rest(s__74803__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74805),null);
}
} else {
var c = cljs.core.first(s__74803__$2);
return cljs.core.cons(metabase.util.slugify_char(c,cljs.core.not(unicode_QMARK_)),metabase$util$iter__74802(cljs.core.rest(s__74803__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(metabase.util.remove_diacritical_marks(metabase.util.lower_case_en(s)));
})());
if(cljs.core.truth_(max_length)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_length,slug));
} else {
return slug;
}
} else {
return null;
}
}));

(metabase.util.slugify.cljs$lang$maxFixedArity = 2);

/**
 * If passed an integer ID, returns it. If passed a map containing an `:id` key, returns the value if it is an integer.
 *   Otherwise returns `nil`.
 * 
 *   Provided as a convenience to allow model-layer functions to easily accept either an object or raw ID. Use this in
 *   cases where the ID/object is allowed to be `nil`. Use `the-id` below in cases where you would also like to guarantee
 *   it is non-`nil`.
 */
metabase.util.id = (function metabase$util$id(object_or_id){
while(true){
if(cljs.core.map_QMARK_(object_or_id)){
var G__74972 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object_or_id);
object_or_id = G__74972;
continue;
} else {
if(cljs.core.integer_QMARK_(object_or_id)){
return object_or_id;
} else {
return null;
}
}
break;
}
});
/**
 * If passed an integer ID, returns it. If passed a map containing an `:id` key, returns the value if it is an integer.
 *   Otherwise, throws an Exception.
 * 
 *   Provided to allow model-layer functions to easily accept either an object or raw ID, and to assert
 *   that you have a valid ID.
 */
metabase.util.the_id = (function metabase$util$the_id(object_or_id){
var or__5002__auto__ = metabase.util.id(object_or_id);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw metabase.util.error(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Not something with an ID: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object_or_id], 0))], 0)));
}
});
/**
 * A regular expression for matching canonical string representations of UUIDs.
 */
metabase.util.uuid_regex = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/;
/**
 * Wraps a single element in a sequence; returns sequences as-is. In lots of situations we'd like to accept either a
 *   single value or a collection of values as an argument to a function, and then loop over them; rather than repeat
 *   logic to check whether something is a collection and wrap if not everywhere, this utility function is provided for
 *   your convenience.
 * 
 *  (u/one-or-many 1)     ; -> [1]
 *  (u/one-or-many [1 2]) ; -> [1 2]
 */
metabase.util.one_or_many = (function metabase$util$one_or_many(arg){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.nil_QMARK_)(arg))){
return arg;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null);
}
});
/**
 * Returns coll if it has multiple elements, or else returns its only element
 */
metabase.util.many_or_one = (function metabase$util$many_or_one(coll){
if(cljs.core.next(coll)){
return coll;
} else {
return cljs.core.first(coll);
}
});
/**
 * Like `select-keys`, but can also handle nested keypaths:
 * 
 *   (select-nested-keys {:a 100, :b {:c 200, :d 300}} [:a [:b :d] :c])
 *   ;; -> {:a 100, :b {:d 300}}
 * 
 * The values of `keyseq` can be either regular keys, which work the same way as `select-keys`,
 * or vectors of the form `[k & nested-keys]`, which call `select-nested-keys` recursively
 * on the value of `k`. 
 */
metabase.util.select_nested_keys = (function metabase$util$select_nested_keys(m,keyseq){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$util$select_nested_keys_$_iter__74806(s__74807){
return (new cljs.core.LazySeq(null,(function (){
var s__74807__$1 = s__74807;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74807__$1);
if(temp__5804__auto__){
var s__74807__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74807__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__74807__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__74809 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__74808 = (0);
while(true){
if((i__74808 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__74808);
var vec__74810 = metabase.util.one_or_many(k);
var seq__74811 = cljs.core.seq(vec__74810);
var first__74812 = cljs.core.first(seq__74811);
var seq__74811__$1 = cljs.core.next(seq__74811);
var k__$1 = first__74812;
var nested_keys = seq__74811__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
if(cljs.core.contains_QMARK_(m,k__$1)){
cljs.core.chunk_append(b__74809,cljs.core.PersistentArrayMap.createAsIfByAssoc([k__$1,((cljs.core.not(cljs.core.seq(nested_keys)))?v:(metabase.util.select_nested_keys.cljs$core$IFn$_invoke$arity$2 ? metabase.util.select_nested_keys.cljs$core$IFn$_invoke$arity$2(v,nested_keys) : metabase.util.select_nested_keys.call(null,v,nested_keys)))]));

var G__74973 = (i__74808 + (1));
i__74808 = G__74973;
continue;
} else {
var G__74974 = (i__74808 + (1));
i__74808 = G__74974;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74809),metabase$util$select_nested_keys_$_iter__74806(cljs.core.chunk_rest(s__74807__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74809),null);
}
} else {
var k = cljs.core.first(s__74807__$2);
var vec__74813 = metabase.util.one_or_many(k);
var seq__74814 = cljs.core.seq(vec__74813);
var first__74815 = cljs.core.first(seq__74814);
var seq__74814__$1 = cljs.core.next(seq__74814);
var k__$1 = first__74815;
var nested_keys = seq__74814__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
if(cljs.core.contains_QMARK_(m,k__$1)){
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([k__$1,((cljs.core.not(cljs.core.seq(nested_keys)))?v:(metabase.util.select_nested_keys.cljs$core$IFn$_invoke$arity$2 ? metabase.util.select_nested_keys.cljs$core$IFn$_invoke$arity$2(v,nested_keys) : metabase.util.select_nested_keys.call(null,v,nested_keys)))]),metabase$util$select_nested_keys_$_iter__74806(cljs.core.rest(s__74807__$2)));
} else {
var G__74975 = cljs.core.rest(s__74807__$2);
s__74807__$1 = G__74975;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(keyseq);
})());
});
/**
 * Is `s` a Base-64 encoded string?
 */
metabase.util.base64_string_QMARK_ = (function metabase$util$base64_string_QMARK_(s){
return cljs.core.boolean$(((typeof s === 'string')?(function (){var s__$1 = s;
var s__$2 = clojure.string.replace(s__$1,/\s/,"");
return cljs.core.re_matches(/^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/,s__$2);
})():null));
});
/**
 * Returns coll split into seqs of up to n items
 */
metabase.util.batches_of = (function metabase$util$batches_of(n,coll){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$4(n,n,null,coll);
});
/**
 * Increment `n` if it is non-`nil`, otherwise return `1` (e.g. as if incrementing `0`).
 */
metabase.util.safe_inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
/**
 * Like `select-keys`, but returns a map only containing keys in KS that are present *and non-nil* in M.
 * 
 *   (select-non-nil-keys {:a 100, :b nil} #{:a :b :c})
 *   ;; -> {:a 100}
 */
metabase.util.select_non_nil_keys = (function metabase$util$select_non_nil_keys(m,ks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$util$select_non_nil_keys_$_iter__74816(s__74817){
return (new cljs.core.LazySeq(null,(function (){
var s__74817__$1 = s__74817;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74817__$1);
if(temp__5804__auto__){
var s__74817__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__74817__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__74817__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__74819 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__74818 = (0);
while(true){
if((i__74818 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__74818);
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null)))){
cljs.core.chunk_append(b__74819,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)]));

var G__74976 = (i__74818 + (1));
i__74818 = G__74976;
continue;
} else {
var G__74977 = (i__74818 + (1));
i__74818 = G__74977;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74819),metabase$util$select_non_nil_keys_$_iter__74816(cljs.core.chunk_rest(s__74817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74819),null);
}
} else {
var k = cljs.core.first(s__74817__$2);
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k) == null)))){
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k)]),metabase$util$select_non_nil_keys_$_iter__74816(cljs.core.rest(s__74817__$2)));
} else {
var G__74978 = cljs.core.rest(s__74817__$2);
s__74817__$1 = G__74978;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(ks);
})());
});
/**
 * Returns a map that only contains keys that are either `:present` or `:non-nil`. Combines behavior of `select-keys`
 *   and `select-non-nil-keys`. This is useful for API endpoints that update a model, which often have complex rules
 *   about what gets updated (some keys are updated if `nil`, others only if non-nil).
 * 
 *   (select-keys-when {:a 100, :b nil, :d 200, :e nil}
 *     :present #{:a :b :c}
 *     :non-nil #{:d :e :f})
 *   ;; -> {:a 100, :b nil, :d 200}
 */
metabase.util.select_keys_when = (function metabase$util$select_keys_when(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74979 = arguments.length;
var i__5727__auto___74980 = (0);
while(true){
if((i__5727__auto___74980 < len__5726__auto___74979)){
args__5732__auto__.push((arguments[i__5727__auto___74980]));

var G__74981 = (i__5727__auto___74980 + (1));
i__5727__auto___74980 = G__74981;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.select_keys_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.select_keys_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__74822){
var map__74823 = p__74822;
var map__74823__$1 = cljs.core.__destructure_map(map__74823);
var options = map__74823__$1;
var present = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74823__$1,new cljs.core.Keyword(null,"present","present",-1224645465));
var non_nil = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74823__$1,new cljs.core.Keyword(null,"non-nil","non-nil",1888502833));
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"present","present",-1224645465),null,new cljs.core.Keyword(null,"non-nil","non-nil",1888502833),null], null), null),cljs.core.keys(options))){
} else {
throw (new Error("Assert failed: (every? #{:present :non-nil} (keys options))"));
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(m,present),metabase.util.select_non_nil_keys(m,non_nil)], 0));
}));

(metabase.util.select_keys_when.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.select_keys_when.cljs$lang$applyTo = (function (seq74820){
var G__74821 = cljs.core.first(seq74820);
var seq74820__$1 = cljs.core.next(seq74820);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74821,seq74820__$1);
}));

/**
 * Return the order of magnitude as a power of 10 of a given number.
 */
metabase.util.order_of_magnitude = (function metabase$util$order_of_magnitude(x){
if((x === (0))){
return (0);
} else {
return Math.floor((Math.log(cljs.core.abs(x)) / Math.log((10))));
}
});
/**
 * Like `clojure.core/update` but does not create a new key if it does not exist. Useful when you don't want to create
 *   cruft.
 */
metabase.util.update_if_exists = (function metabase$util$update_if_exists(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74982 = arguments.length;
var i__5727__auto___74983 = (0);
while(true){
if((i__5727__auto___74983 < len__5726__auto___74982)){
args__5732__auto__.push((arguments[i__5727__auto___74983]));

var G__74984 = (i__5727__auto___74983 + (1));
i__5727__auto___74983 = G__74984;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return metabase.util.update_if_exists.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(metabase.util.update_if_exists.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,args){
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,m,k,f,args);
} else {
return m;
}
}));

(metabase.util.update_if_exists.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metabase.util.update_if_exists.cljs$lang$applyTo = (function (seq74824){
var G__74825 = cljs.core.first(seq74824);
var seq74824__$1 = cljs.core.next(seq74824);
var G__74826 = cljs.core.first(seq74824__$1);
var seq74824__$2 = cljs.core.next(seq74824__$1);
var G__74827 = cljs.core.first(seq74824__$2);
var seq74824__$3 = cljs.core.next(seq74824__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74825,G__74826,G__74827,seq74824__$3);
}));

/**
 * Like `clojure.core/update-in` but does not create new keys if they do not exist. Useful when you don't want to create
 *   cruft.
 */
metabase.util.update_in_if_exists = (function metabase$util$update_in_if_exists(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74985 = arguments.length;
var i__5727__auto___74986 = (0);
while(true){
if((i__5727__auto___74986 < len__5726__auto___74985)){
args__5732__auto__.push((arguments[i__5727__auto___74986]));

var G__74987 = (i__5727__auto___74986 + (1));
i__5727__auto___74986 = G__74987;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return metabase.util.update_in_if_exists.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(metabase.util.update_in_if_exists.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.util","not-found","metabase.util/not-found",186621342),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,new cljs.core.Keyword("metabase.util","not-found","metabase.util/not-found",186621342)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,m,ks,f,args);
} else {
return m;
}
}));

(metabase.util.update_in_if_exists.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metabase.util.update_in_if_exists.cljs$lang$applyTo = (function (seq74828){
var G__74829 = cljs.core.first(seq74828);
var seq74828__$1 = cljs.core.next(seq74828);
var G__74830 = cljs.core.first(seq74828__$1);
var seq74828__$2 = cljs.core.next(seq74828__$1);
var G__74831 = cljs.core.first(seq74828__$2);
var seq74828__$3 = cljs.core.next(seq74828__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74829,G__74830,G__74831,seq74828__$3);
}));

/**
 * Return index of the first element in `coll` for which `pred` reutrns true.
 */
metabase.util.index_of = (function metabase$util$index_of(pred,coll){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return i;
} else {
return null;
}
}),coll));
});
/**
 * Returns truthy if `new-value` is a hexadecimal-string
 */
metabase.util.hexadecimal_string_QMARK_ = (function metabase$util$hexadecimal_string_QMARK_(new_value){
var and__5000__auto__ = typeof new_value === 'string';
if(and__5000__auto__){
return cljs.core.re_matches(/[0-9a-f]{64}/,new_value);
} else {
return and__5000__auto__;
}
});
/**
 * Topologically sorts vertexs in graph g. Graph is a map of vertexs to edges. Optionally takes an
 * additional argument `edges-fn`, a function used to extract edges. Returns data in the same shape
 * (a graph), only sorted.
 * 
 * Say you have a graph shaped like:
 * 
 *   a     b
 *   | \  |
 *   c  |  |
 *   \ | /
 *      d
 *      |
 *      e
 * 
 * (u/topological-sort identity {:b []
 *                               :c [:a]
 *                               :e [:d]
 *                               :d [:a :b :c]
 *                               :a []})
 * 
 * => (ordered-map :a [] :b [] :c [:a] :d [:a :b :c] :e [:d])
 * 
 * If the graph has cycles, throws an exception.
 * 
 * https://en.wikipedia.org/wiki/Topological_sorting
 */
metabase.util.topological_sort = (function metabase$util$topological_sort(var_args){
var G__74833 = arguments.length;
switch (G__74833) {
case 1:
return metabase.util.topological_sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.util.topological_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.util.topological_sort.cljs$core$IFn$_invoke$arity$1 = (function (g){
return metabase.util.topological_sort.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,g);
}));

(metabase.util.topological_sort.cljs$core$IFn$_invoke$arity$2 = (function (edges_fn,g){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(edges_fn,cljs.core.val))),(function() {
var G__74991 = null;
var G__74991__0 = (function (){
return weavejester.dependency.graph();
});
var G__74991__1 = (function (acc){
var sorted = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(g,weavejester.dependency.topo_sort.cljs$core$IFn$_invoke$arity$1(acc));
var independent = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(g)),cljs.core.set(sorted));
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(flatland.ordered.map.ordered_map.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (vertex){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vertex,(g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(vertex) : g.call(null,vertex))], null);
})),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(independent,sorted)));
});
var G__74991__2 = (function (acc,p__74834){
var vec__74835 = p__74834;
var vertex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74835,(0),null);
var edges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74835,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,edge){
return weavejester.dependency.depend(acc__$1,vertex,edge);
}),acc,edges);
});
G__74991 = function(acc,p__74834){
switch(arguments.length){
case 0:
return G__74991__0.call(this);
case 1:
return G__74991__1.call(this,acc);
case 2:
return G__74991__2.call(this,acc,p__74834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__74991.cljs$core$IFn$_invoke$arity$0 = G__74991__0;
G__74991.cljs$core$IFn$_invoke$arity$1 = G__74991__1;
G__74991.cljs$core$IFn$_invoke$arity$2 = G__74991__2;
return G__74991;
})()
,g);
}));

(metabase.util.topological_sort.cljs$lang$maxFixedArity = 2);

/**
 * Changes the keys of a given map to lower case.
 */
metabase.util.lower_case_map_keys = (function metabase$util$lower_case_map_keys(m){
return cljs.core.update_keys(m,(function (p1__74838_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(metabase.util.lower_case_en(cljs.core.name(p1__74838_SHARP_)));
}));
});
/**
 * Returns the output of pretty-printing `x` as a string.
 *   Optionally accepts `color-symb`, which colorizes the output (JVM only, it's ignored in CLJS).
 * 
 *   (pprint-to-str 'green some-obj)
 */
metabase.util.pprint_to_str = (function metabase$util$pprint_to_str(var_args){
var G__74840 = arguments.length;
switch (G__74840) {
case 1:
return metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1 = (function (x){
var _STAR_print_right_margin_STAR__orig_val__74841 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_right_margin_STAR__temp_val__74842 = (120);
(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__74842);

try{var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__74843_74995 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__74844_74996 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__74845_74997 = true;
var _STAR_print_fn_STAR__temp_val__74846_74998 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__74845_74997);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__74846_74998);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__74844_74996);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__74843_74995);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
}finally {(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__74841);
}}));

(metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$2 = (function (color_symb,x){
return metabase.util.format.colorize(color_symb,metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(x));
}));

(metabase.util.pprint_to_str.cljs$lang$maxFixedArity = 2);

/**
 * Impl for `profile` macro -- don't use this directly. Nesting-level for the `profile` macro e.g. 0 for a top-level
 *   `profile` form or 1 for a form inside that.
 */
metabase.util._STAR_profile_level_STAR_ = (0);
/**
 * Impl for [[profile]] macro -- don't use this directly. Prints the `___ took ___` message at the conclusion of a
 *   [[profile]]d form.
 */
metabase.util._profile_print_time = (function metabase$util$_profile_print_time(message_thunk,start_time){
var level__73195__auto__ = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"info","info",-317069002));
var logger__73196__auto__ = "metabase.util";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73196__auto__,level__73195__auto__))){
var x__73197__auto__ = metabase.util.format.format_color.cljs$core$IFn$_invoke$arity$variadic((function (){var G__74847 = (cljs.core.mod(metabase.util._STAR_profile_level_STAR_,(4)) | (0));
switch (G__74847) {
case (0):
return new cljs.core.Keyword(null,"green","green",-945526839);

break;
case (1):
return new cljs.core.Keyword(null,"cyan","cyan",1118839274);

break;
case (2):
return new cljs.core.Keyword(null,"magenta","magenta",1687937081);

break;
case (3):
return new cljs.core.Keyword(null,"yellow","yellow",-881035449);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__74847)].join('')));

}
})(),"%s%s took %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((metabase.util._STAR_profile_level_STAR_ > (0)))?[clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((metabase.util._STAR_profile_level_STAR_ - (1)),"  "))," \u2BA6 "].join(''):""),(message_thunk.cljs$core$IFn$_invoke$arity$0 ? message_thunk.cljs$core$IFn$_invoke$arity$0() : message_thunk.call(null)),metabase.util.format.format_nanoseconds((((1000000) * performance.now()) - start_time))], 0));
if((x__73197__auto__ instanceof Error)){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto__,level__73195__auto__,cljs.core.print_str(),x__73197__auto__);
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto__,level__73195__auto__,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__73197__auto__], 0)),null);
}
} else {
return null;
}
});
/**
 * Convert `seconds` to milliseconds. More readable than doing this math inline.
 */
metabase.util.seconds__GT_ms = (function metabase$util$seconds__GT_ms(seconds){
return (seconds * (1000));
});
/**
 * Convert `minutes` to seconds. More readable than doing this math inline.
 */
metabase.util.minutes__GT_seconds = (function metabase$util$minutes__GT_seconds(minutes){
return ((60) * minutes);
});
/**
 * Convert `minutes` to milliseconds. More readable than doing this math inline.
 */
metabase.util.minutes__GT_ms = (function metabase$util$minutes__GT_ms(minutes){
return metabase.util.seconds__GT_ms(metabase.util.minutes__GT_seconds(minutes));
});
/**
 * Convert `hours` to milliseconds. More readable than doing this math inline.
 */
metabase.util.hours__GT_ms = (function metabase$util$hours__GT_ms(hours){
return metabase.util.seconds__GT_ms(metabase.util.minutes__GT_seconds(((60) * hours)));
});
/**
 * Parse a currency String to a BigDecimal. Handles a variety of different formats, such as:
 * 
 *  $1,000.00
 *  -£127.54
 *  -127,54 €
 *  kr-127,54
 *  € 127,54-
 *  ¥200
 */
metabase.util.parse_currency = (function metabase$util$parse_currency(s){
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return parseFloat(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,clojure.string.replace),s,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/[^\d,.-]+/,""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/(?<=\d)[,.](\d{3})/,"$1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/,/,"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/(^[^-]+)-$/,"-$1"], null)], null)));
}
});
/**
 * Extract the domain portion of an `email-address`.
 * 
 *  (email->domain "cam@toucan.farm") ; -> "toucan.farm"
 */
metabase.util.email__GT_domain = (function metabase$util$email__GT_domain(email_address){
if(typeof email_address === 'string'){
return cljs.core.last(cljs.core.re_find(/^.*@(.*$)/,email_address));
} else {
return null;
}
});
/**
 * Is `email-address` in `domain`?
 * 
 *  (email-in-domain? "cam@toucan.farm" "toucan.farm")  ; -> true
 *  (email-in-domain? "cam@toucan.farm" "metabase.com") ; -> false
 */
metabase.util.email_in_domain_QMARK_ = (function metabase$util$email_in_domain_QMARK_(email_address,domain){
if(metabase.util.email_QMARK_(email_address)){
} else {
throw (new Error("Assert failed: (email? email-address)"));
}

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.util.email__GT_domain(email_address),domain);
});
/**
 * Returns a pair [match others] where match is the first element of `coll` for which `pred` returns
 *   a truthy value and others is a sequence of the other elements of `coll` with the order preserved.
 *   Returns nil if no element satisfies `pred`.
 */
metabase.util.pick_first = (function metabase$util$pick_first(pred,coll){
var xs = cljs.core.seq(coll);
var prefix = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5804__auto__ = xs;
if(temp__5804__auto__){
var vec__74854 = temp__5804__auto__;
var seq__74855 = cljs.core.seq(vec__74854);
var first__74856 = cljs.core.first(seq__74855);
var seq__74855__$1 = cljs.core.next(seq__74855);
var x = first__74856;
var xs__$1 = seq__74855__$1;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(prefix,xs__$1)], null);
} else {
var G__75011 = xs__$1;
var G__75012 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,x);
xs = G__75011;
prefix = G__75012;
continue;
}
} else {
return null;
}
break;
}
});
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","nil","dispatch-type/nil",-2067723388),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","boolean","dispatch-type/boolean",179271749),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","string","dispatch-type/string",171698561),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","keyword","dispatch-type/keyword",-1316103320),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","number","dispatch-type/number",-594990247),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","integer","dispatch-type/integer",1558418815),new cljs.core.Keyword("dispatch-type","number","dispatch-type/number",-594990247));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","set","dispatch-type/set",-1894332821),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","symbol","dispatch-type/symbol",1044875899),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","fn","dispatch-type/fn",922813137),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dispatch-type","regex","dispatch-type/regex",-1190650143),new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403));
/**
 * In Cljs `(type 1) is `js/Number`, but `(isa? 1 js/Number)` isn't truthy, so dispatching off of [[clojure.core/type]]
 *   doesn't really work the way we'd want. Also, type names are different between Clojure and ClojureScript.
 * 
 *   This function exists as a workaround: use it as a multimethod dispatch function for Cljc multimethods that would
 *   have dispatched on `type` if they were written in pure Clojure.
 * 
 *   Returns `:dispatch-type/*` if there is no mapping for the current type, but you can add more as needed if
 *   appropriate. All type keywords returned by this method also derive from `:dispatch-type/*`, meaning you can write an
 *   implementation for `:dispatch-type/*` and use it as a fallback method.
 * 
 *   Think of `:dispatch-type/*` as similar to how you would use `Object` if you were dispatching
 *   off of `type` in pure Clojure.
 */
metabase.util.dispatch_type_keyword = (function metabase$util$dispatch_type_keyword(x){
if((x == null)){
return new cljs.core.Keyword("dispatch-type","nil","dispatch-type/nil",-2067723388);
} else {
if(cljs.core.boolean_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","boolean","dispatch-type/boolean",179271749);
} else {
if(typeof x === 'string'){
return new cljs.core.Keyword("dispatch-type","string","dispatch-type/string",171698561);
} else {
if((x instanceof cljs.core.Keyword)){
return new cljs.core.Keyword("dispatch-type","keyword","dispatch-type/keyword",-1316103320);
} else {
if(cljs.core.integer_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","integer","dispatch-type/integer",1558418815);
} else {
if(typeof x === 'number'){
return new cljs.core.Keyword("dispatch-type","number","dispatch-type/number",-594990247);
} else {
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422);
} else {
if(cljs.core.sequential_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969);
} else {
if(cljs.core.set_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","set","dispatch-type/set",-1894332821);
} else {
if((x instanceof cljs.core.Symbol)){
return new cljs.core.Keyword("dispatch-type","symbol","dispatch-type/symbol",1044875899);
} else {
if(cljs.core.fn_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","fn","dispatch-type/fn",922813137);
} else {
if(cljs.core.regexp_QMARK_(x)){
return new cljs.core.Keyword("dispatch-type","regex","dispatch-type/regex",-1190650143);
} else {
return new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403);

}
}
}
}
}
}
}
}
}
}
}
}
});
/**
 * Called like `(assoc m k v)`, this does [[assoc]] if `(some? v)`, and [[dissoc]] if not.
 * 
 *   Put another way: `k` will either be set to `v`, or removed.
 * 
 *   Note that if `v` is `false`, it will be handled with [[assoc]]; only `nil` causes a [[dissoc]].
 */
metabase.util.assoc_dissoc = (function metabase$util$assoc_dissoc(m,k,v){
if((!((v == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * Called like `(assoc m k v)`, this does [[assoc]] iff `m` does not contain `k`
 *   and `v` is not nil. Can be called with multiple key value pairs. If a key occurs
 *   more than once, only the first occurrence with a non-nil value is used.
 */
metabase.util.assoc_default = (function metabase$util$assoc_default(var_args){
var G__74862 = arguments.length;
switch (G__74862) {
case 3:
return metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___75021 = arguments.length;
var i__5727__auto___75022 = (0);
while(true){
if((i__5727__auto___75022 < len__5726__auto___75021)){
args_arr__5751__auto__.push((arguments[i__5727__auto___75022]));

var G__75023 = (i__5727__auto___75022 + (1));
i__5727__auto___75022 = G__75023;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((((v == null)) || (cljs.core.contains_QMARK_(m,k)))){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}));

(metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3(m,k,v);
if(cljs.core.truth_(kvs)){
if(cljs.core.next(kvs)){
var G__75029 = ret;
var G__75030 = cljs.core.first(kvs);
var G__75031 = cljs.core.second(kvs);
var G__75032 = cljs.core.nnext(kvs);
m = G__75029;
k = G__75030;
v = G__75031;
kvs = G__75032;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("assoc-default expects an even number of key-values",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kvs","kvs",958455492),kvs], null));
}
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(metabase.util.assoc_default.cljs$lang$applyTo = (function (seq74858){
var G__74859 = cljs.core.first(seq74858);
var seq74858__$1 = cljs.core.next(seq74858);
var G__74860 = cljs.core.first(seq74858__$1);
var seq74858__$2 = cljs.core.next(seq74858__$1);
var G__74861 = cljs.core.first(seq74858__$2);
var seq74858__$3 = cljs.core.next(seq74858__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74859,G__74860,G__74861,seq74858__$3);
}));

(metabase.util.assoc_default.cljs$lang$maxFixedArity = (3));

/**
 * Given 2 lists of seq maps of changes, where each map an has an `id` key,
 *   return a map of 3 keys: `:to-create`, `:to-update`, `:to-delete`.
 * 
 *   Where:
 *   - `:to-create` is a list of maps that ids in `new-rows`
 *   - `:to-delete` is a list of maps that has ids only in `current-rows`
 *   - `:to-skip`   is a list of identical maps that has ids in both lists
 *   - `:to-update` is a list of different maps that has ids in both lists
 * 
 *   Optional arguments:
 *   - `id-fn` - function to get row-matching identifiers
 *   - `to-compare` - function to get rows into a comparable state
 *   
 */
metabase.util.row_diff = (function metabase$util$row_diff(var_args){
var args__5732__auto__ = [];
var len__5726__auto___75040 = arguments.length;
var i__5727__auto___75041 = (0);
while(true){
if((i__5727__auto___75041 < len__5726__auto___75040)){
args__5732__auto__.push((arguments[i__5727__auto___75041]));

var G__75042 = (i__5727__auto___75041 + (1));
i__5727__auto___75041 = G__75042;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return metabase.util.row_diff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(metabase.util.row_diff.cljs$core$IFn$_invoke$arity$variadic = (function (current_rows,new_rows,p__74869){
var map__74870 = p__74869;
var map__74870__$1 = cljs.core.__destructure_map(map__74870);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74870__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var to_compare = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74870__$1,new cljs.core.Keyword(null,"to-compare","to-compare",-1769295180),cljs.core.identity);
var vec__74871 = clojure.data.diff(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,current_rows)),cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,new_rows)));
var delete_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74871,(0),null);
var create_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74871,(1),null);
var update_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74871,(2),null);
var known_map = medley.core.index_by(id_fn,current_rows);
var map__74874 = ((cljs.core.seq(update_ids))?cljs.core.group_by((function (x){
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(known_map,(id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(x) : id_fn.call(null,x)));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((to_compare.cljs$core$IFn$_invoke$arity$1 ? to_compare.cljs$core$IFn$_invoke$arity$1(x) : to_compare.call(null,x)),(to_compare.cljs$core$IFn$_invoke$arity$1 ? to_compare.cljs$core$IFn$_invoke$arity$1(y) : to_compare.call(null,y)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74863_SHARP_){
var G__74875 = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__74863_SHARP_) : id_fn.call(null,p1__74863_SHARP_));
return (update_ids.cljs$core$IFn$_invoke$arity$1 ? update_ids.cljs$core$IFn$_invoke$arity$1(G__74875) : update_ids.call(null,G__74875));
}),new_rows)):null);
var map__74874__$1 = cljs.core.__destructure_map(map__74874);
var to_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74874__$1,false);
var to_skip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74874__$1,true);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"to-create","to-create",-49944542),((cljs.core.seq(create_ids))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74864_SHARP_){
var G__74876 = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__74864_SHARP_) : id_fn.call(null,p1__74864_SHARP_));
return (create_ids.cljs$core$IFn$_invoke$arity$1 ? create_ids.cljs$core$IFn$_invoke$arity$1(G__74876) : create_ids.call(null,G__74876));
}),new_rows):null),new cljs.core.Keyword(null,"to-delete","to-delete",1815108123),((cljs.core.seq(delete_ids))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74865_SHARP_){
var G__74877 = (id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__74865_SHARP_) : id_fn.call(null,p1__74865_SHARP_));
return (delete_ids.cljs$core$IFn$_invoke$arity$1 ? delete_ids.cljs$core$IFn$_invoke$arity$1(G__74877) : delete_ids.call(null,G__74877));
}),current_rows):null),new cljs.core.Keyword(null,"to-update","to-update",-219520207),to_update,new cljs.core.Keyword(null,"to-skip","to-skip",-2004067438),to_skip], null);
}));

(metabase.util.row_diff.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.util.row_diff.cljs$lang$applyTo = (function (seq74866){
var G__74867 = cljs.core.first(seq74866);
var seq74866__$1 = cljs.core.next(seq74866);
var G__74868 = cljs.core.first(seq74866__$1);
var seq74866__$2 = cljs.core.next(seq74866__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74867,G__74868,seq74866__$2);
}));

/**
 * True if collection `xs` is either [[empty?]] or all values are [[distinct?]].
 */
metabase.util.empty_or_distinct_QMARK_ = (function metabase$util$empty_or_distinct_QMARK_(xs){
var or__5002__auto__ = cljs.core.empty_QMARK_(xs);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
}
});
/**
 * Traverses a graph of nodes using a user-defined function.
 * 
 *   `nodes`: A collection of initial nodes to start the traversal from.
 *   `traverse-fn`: A function that, given a node, returns its directly connected nodes.
 * 
 *   The function performs a breadth-first traversal starting from the initial nodes, applying
 *   `traverse-fn` to each node to find connected nodes, and continues until all reachable nodes
 *   have been visited. Returns a set of all traversed nodes.
 */
metabase.util.traverse = (function metabase$util$traverse(nodes,traverse_fn){
var to_traverse = cljs.core.set(nodes);
var traversed = cljs.core.PersistentHashSet.EMPTY;
while(true){
var item = cljs.core.first(to_traverse);
var found = (traverse_fn.cljs$core$IFn$_invoke$arity$1 ? traverse_fn.cljs$core$IFn$_invoke$arity$1(item) : traverse_fn.call(null,item));
var traversed__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(traversed,item);
var to_traverse__$1 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(to_traverse,item),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(found,traversed__$1));
if(cljs.core.empty_QMARK_(to_traverse__$1)){
return traversed__$1;
} else {
var G__75066 = to_traverse__$1;
var G__75067 = traversed__$1;
to_traverse = G__75066;
traversed = G__75067;
continue;
}
break;
}
});
/**
 * A reversed java.util.Comparator, useful for sorting elements in descending in order
 */
metabase.util.reverse_compare = (function metabase$util$reverse_compare(x,y){
return cljs.core.compare(y,x);
});
/**
 * Given two maps, return a seq of the keys on which they disagree. We only consider keys that are present in both.
 */
metabase.util.conflicting_keys = (function metabase$util$conflicting_keys(m1,m2){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__74878){
var vec__74879 = p__74878;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74879,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$3(m1,k,v))){
return k;
} else {
return null;
}
}),m2);
});
/**
 * Given two maps, are any keys on which they disagree? We only consider keys that are present in both.
 */
metabase.util.conflicting_keys_QMARK_ = (function metabase$util$conflicting_keys_QMARK_(m1,m2){
return cljs.core.boolean$(cljs.core.some(cljs.core.identity,metabase.util.conflicting_keys(m1,m2)));
});
metabase.util.map_all_STAR_ = (function metabase$util$map_all_STAR_(f,colls){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(cljs.core.some(cljs.core.seq,colls))){
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,colls)),(function (){var G__74882 = f;
var G__74883 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,colls);
return (metabase.util.map_all_STAR_.cljs$core$IFn$_invoke$arity$2 ? metabase.util.map_all_STAR_.cljs$core$IFn$_invoke$arity$2(G__74882,G__74883) : metabase.util.map_all_STAR_.call(null,G__74882,G__74883));
})());
} else {
return cljs.core.List.EMPTY;
}
}),null,null));
});
/**
 * Similar to [[clojure.core/map]], but instead of short-circuiting it continues until the end of the longest
 *   collection, using nil for collection(s) that have already been exhausted.
 */
metabase.util.map_all = (function metabase$util$map_all(var_args){
var G__74889 = arguments.length;
switch (G__74889) {
case 2:
return metabase.util.map_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.util.map_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___75069 = arguments.length;
var i__5727__auto___75070 = (0);
while(true){
if((i__5727__auto___75070 < len__5726__auto___75069)){
args_arr__5751__auto__.push((arguments[i__5727__auto___75070]));

var G__75071 = (i__5727__auto___75070 + (1));
i__5727__auto___75070 = G__75071;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((3) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((3)),(0),null)):null);
return metabase.util.map_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5752__auto__);

}
});

(metabase.util.map_all.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll);
}));

(metabase.util.map_all.cljs$core$IFn$_invoke$arity$3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) || (s2))){
return cljs.core.cons((function (){var G__74890 = cljs.core.first(s1);
var G__74891 = cljs.core.first(s2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__74890,G__74891) : f.call(null,G__74890,G__74891));
})(),metabase.util.map_all.cljs$core$IFn$_invoke$arity$3(f,cljs.core.rest(s1),cljs.core.rest(s2)));
} else {
return null;
}
}),null,null));
}));

(metabase.util.map_all.cljs$core$IFn$_invoke$arity$variadic = (function (f,c1,c2,colls){
return metabase.util.map_all_STAR_(f,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(c1,c2,colls));
}));

/** @this {Function} */
(metabase.util.map_all.cljs$lang$applyTo = (function (seq74885){
var G__74886 = cljs.core.first(seq74885);
var seq74885__$1 = cljs.core.next(seq74885);
var G__74887 = cljs.core.first(seq74885__$1);
var seq74885__$2 = cljs.core.next(seq74885__$1);
var G__74888 = cljs.core.first(seq74885__$2);
var seq74885__$3 = cljs.core.next(seq74885__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74886,G__74887,G__74888,seq74885__$3);
}));

(metabase.util.map_all.cljs$lang$maxFixedArity = (3));

/**
 * Like (first (filter ... )), but doesn't realize chunks of the sequence. Returns the first item in `coll` for which
 *   `pred` returns a truthy value, or `nil` if no such item is found.
 */
metabase.util.seek = (function metabase$util$seek(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return cljs.core.reduced(x);
} else {
return acc;
}
}),null,coll);
});
/**
 * Like [[reduce]] but preserves the [[reduced]] wrapper around the result. This is important because we have some
 *   cases where we want to call [[reduce]] on some rf, but still be able to tell if it returned early.
 * 
 *   Returns a vanilla value if all the `xs` were consumed and `(reduced result)` on an early exit.
 */
metabase.util.reduce_preserving_reduced = (function metabase$util$reduce_preserving_reduced(rf,init,xs){
if(cljs.core.reduced_QMARK_(init)){
return init;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
var acc_SINGLEQUOTE_ = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,x) : rf.call(null,acc,x));
if(cljs.core.reduced_QMARK_(acc_SINGLEQUOTE_)){
return cljs.core.reduced(acc_SINGLEQUOTE_);
} else {
return acc_SINGLEQUOTE_;
}
}),init,xs);
}
});
/**
 * A combination of [[update-keys]] and [[update-vals]], which simultaneously re-maps keys and values.
 */
metabase.util.update_keys_vals = (function metabase$util$update_keys_vals(var_args){
var G__74893 = arguments.length;
switch (G__74893) {
case 2:
return metabase.util.update_keys_vals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.util.update_keys_vals.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.util.update_keys_vals.cljs$core$IFn$_invoke$arity$2 = (function (m,f){
return metabase.util.update_keys_vals.cljs$core$IFn$_invoke$arity$3(m,f,f);
}));

(metabase.util.update_keys_vals.cljs$core$IFn$_invoke$arity$3 = (function (m,key_f,val_f){
var ret = cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(key_f.cljs$core$IFn$_invoke$arity$1 ? key_f.cljs$core$IFn$_invoke$arity$1(k) : key_f.call(null,k)),(val_f.cljs$core$IFn$_invoke$arity$1 ? val_f.cljs$core$IFn$_invoke$arity$1(v) : val_f.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
return cljs.core.with_meta(ret,cljs.core.meta(m));
}));

(metabase.util.update_keys_vals.cljs$lang$maxFixedArity = 3);

/**
 * Number of bytes in a string using UTF-8 encoding.
 */
metabase.util.string_byte_count = (function metabase$util$string_byte_count(s){
return (new TextEncoder()).encode(s).length;
});
/**
 * Truncate string `s` to `max-length-bytes` UTF-8 bytes (as opposed to truncating to some number of *characters*).
 */
metabase.util.truncate_string_to_byte_count = (function metabase$util$truncate_string_to_byte_count(s,max_length_bytes){
var buf = (new Uint8Array(max_length_bytes));
var result = (new TextEncoder()).encodeInto(s,buf);
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),result.read);
});

//# sourceMappingURL=metabase.util.js.map
