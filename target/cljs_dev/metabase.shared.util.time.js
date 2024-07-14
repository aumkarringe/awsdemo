var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.shared.util.internal.time.js");
require("./metabase.shared.util.internal.time_common.js");
require("./metabase.shared.util.namespaces.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.util.time.js");

goog.provide('metabase.shared.util.time');
/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.local_date_regex = (function() { 
var metabase$shared$util$time$local_date_regex__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time_common.local_date_regex,args__70829__auto__);
};
var metabase$shared$util$time$local_date_regex = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75797__i = 0, G__75797__a = new Array(arguments.length -  0);
while (G__75797__i < G__75797__a.length) {G__75797__a[G__75797__i] = arguments[G__75797__i + 0]; ++G__75797__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75797__a,0,null);
} 
return metabase$shared$util$time$local_date_regex__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$local_date_regex.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$local_date_regex.cljs$lang$applyTo = (function (arglist__75798){
var args__70829__auto__ = cljs.core.seq(arglist__75798);
return metabase$shared$util$time$local_date_regex__delegate(args__70829__auto__);
});
metabase$shared$util$time$local_date_regex.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$local_date_regex__delegate;
return metabase$shared$util$time$local_date_regex;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.local_datetime_regex = (function() { 
var metabase$shared$util$time$local_datetime_regex__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time_common.local_datetime_regex,args__70829__auto__);
};
var metabase$shared$util$time$local_datetime_regex = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75799__i = 0, G__75799__a = new Array(arguments.length -  0);
while (G__75799__i < G__75799__a.length) {G__75799__a[G__75799__i] = arguments[G__75799__i + 0]; ++G__75799__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75799__a,0,null);
} 
return metabase$shared$util$time$local_datetime_regex__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$local_datetime_regex.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$local_datetime_regex.cljs$lang$applyTo = (function (arglist__75800){
var args__70829__auto__ = cljs.core.seq(arglist__75800);
return metabase$shared$util$time$local_datetime_regex__delegate(args__70829__auto__);
});
metabase$shared$util$time$local_datetime_regex.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$local_datetime_regex__delegate;
return metabase$shared$util$time$local_datetime_regex;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.local_time_regex = (function() { 
var metabase$shared$util$time$local_time_regex__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time_common.local_time_regex,args__70829__auto__);
};
var metabase$shared$util$time$local_time_regex = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75801__i = 0, G__75801__a = new Array(arguments.length -  0);
while (G__75801__i < G__75801__a.length) {G__75801__a[G__75801__i] = arguments[G__75801__i + 0]; ++G__75801__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75801__a,0,null);
} 
return metabase$shared$util$time$local_time_regex__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$local_time_regex.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$local_time_regex.cljs$lang$applyTo = (function (arglist__75802){
var args__70829__auto__ = cljs.core.seq(arglist__75802);
return metabase$shared$util$time$local_time_regex__delegate(args__70829__auto__);
});
metabase$shared$util$time$local_time_regex.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$local_time_regex__delegate;
return metabase$shared$util$time$local_time_regex;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.offset_datetime_regex = (function() { 
var metabase$shared$util$time$offset_datetime_regex__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time_common.offset_datetime_regex,args__70829__auto__);
};
var metabase$shared$util$time$offset_datetime_regex = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75803__i = 0, G__75803__a = new Array(arguments.length -  0);
while (G__75803__i < G__75803__a.length) {G__75803__a[G__75803__i] = arguments[G__75803__i + 0]; ++G__75803__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75803__a,0,null);
} 
return metabase$shared$util$time$offset_datetime_regex__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$offset_datetime_regex.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$offset_datetime_regex.cljs$lang$applyTo = (function (arglist__75804){
var args__70829__auto__ = cljs.core.seq(arglist__75804);
return metabase$shared$util$time$offset_datetime_regex__delegate(args__70829__auto__);
});
metabase$shared$util$time$offset_datetime_regex.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$offset_datetime_regex__delegate;
return metabase$shared$util$time$offset_datetime_regex;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.offset_time_regex = (function() { 
var metabase$shared$util$time$offset_time_regex__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time_common.offset_time_regex,args__70829__auto__);
};
var metabase$shared$util$time$offset_time_regex = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75805__i = 0, G__75805__a = new Array(arguments.length -  0);
while (G__75805__i < G__75805__a.length) {G__75805__a[G__75805__i] = arguments[G__75805__i + 0]; ++G__75805__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75805__a,0,null);
} 
return metabase$shared$util$time$offset_time_regex__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$offset_time_regex.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$offset_time_regex.cljs$lang$applyTo = (function (arglist__75806){
var args__70829__auto__ = cljs.core.seq(arglist__75806);
return metabase$shared$util$time$offset_time_regex__delegate(args__70829__auto__);
});
metabase$shared$util$time$offset_time_regex.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$offset_time_regex__delegate;
return metabase$shared$util$time$offset_time_regex;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.to_range = (function() { 
var metabase$shared$util$time$to_range__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time_common.to_range,args__70829__auto__);
};
var metabase$shared$util$time$to_range = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75807__i = 0, G__75807__a = new Array(arguments.length -  0);
while (G__75807__i < G__75807__a.length) {G__75807__a[G__75807__i] = arguments[G__75807__i + 0]; ++G__75807__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75807__a,0,null);
} 
return metabase$shared$util$time$to_range__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$to_range.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$to_range.cljs$lang$applyTo = (function (arglist__75808){
var args__70829__auto__ = cljs.core.seq(arglist__75808);
return metabase$shared$util$time$to_range__delegate(args__70829__auto__);
});
metabase$shared$util$time$to_range.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$to_range__delegate;
return metabase$shared$util$time$to_range;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.year_month_regex = (function() { 
var metabase$shared$util$time$year_month_regex__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time_common.year_month_regex,args__70829__auto__);
};
var metabase$shared$util$time$year_month_regex = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75809__i = 0, G__75809__a = new Array(arguments.length -  0);
while (G__75809__i < G__75809__a.length) {G__75809__a[G__75809__i] = arguments[G__75809__i + 0]; ++G__75809__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75809__a,0,null);
} 
return metabase$shared$util$time$year_month_regex__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$year_month_regex.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$year_month_regex.cljs$lang$applyTo = (function (arglist__75810){
var args__70829__auto__ = cljs.core.seq(arglist__75810);
return metabase$shared$util$time$year_month_regex__delegate(args__70829__auto__);
});
metabase$shared$util$time$year_month_regex.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$year_month_regex__delegate;
return metabase$shared$util$time$year_month_regex;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.year_regex = (function() { 
var metabase$shared$util$time$year_regex__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time_common.year_regex,args__70829__auto__);
};
var metabase$shared$util$time$year_regex = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75811__i = 0, G__75811__a = new Array(arguments.length -  0);
while (G__75811__i < G__75811__a.length) {G__75811__a[G__75811__i] = arguments[G__75811__i + 0]; ++G__75811__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75811__a,0,null);
} 
return metabase$shared$util$time$year_regex__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$year_regex.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$year_regex.cljs$lang$applyTo = (function (arglist__75812){
var args__70829__auto__ = cljs.core.seq(arglist__75812);
return metabase$shared$util$time$year_regex__delegate(args__70829__auto__);
});
metabase$shared$util$time$year_regex.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$year_regex__delegate;
return metabase$shared$util$time$year_regex;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.zone_offset_part_regex = (function() { 
var metabase$shared$util$time$zone_offset_part_regex__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time_common.zone_offset_part_regex,args__70829__auto__);
};
var metabase$shared$util$time$zone_offset_part_regex = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75813__i = 0, G__75813__a = new Array(arguments.length -  0);
while (G__75813__i < G__75813__a.length) {G__75813__a[G__75813__i] = arguments[G__75813__i + 0]; ++G__75813__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75813__a,0,null);
} 
return metabase$shared$util$time$zone_offset_part_regex__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$zone_offset_part_regex.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$zone_offset_part_regex.cljs$lang$applyTo = (function (arglist__75814){
var args__70829__auto__ = cljs.core.seq(arglist__75814);
return metabase$shared$util$time$zone_offset_part_regex__delegate(args__70829__auto__);
});
metabase$shared$util$time$zone_offset_part_regex.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$zone_offset_part_regex__delegate;
return metabase$shared$util$time$zone_offset_part_regex;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.valid_QMARK_ = (function() { 
var metabase$shared$util$time$valid_QMARK___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.valid_QMARK_,args__70829__auto__);
};
var metabase$shared$util$time$valid_QMARK_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75815__i = 0, G__75815__a = new Array(arguments.length -  0);
while (G__75815__i < G__75815__a.length) {G__75815__a[G__75815__i] = arguments[G__75815__i + 0]; ++G__75815__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75815__a,0,null);
} 
return metabase$shared$util$time$valid_QMARK___delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$valid_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$valid_QMARK_.cljs$lang$applyTo = (function (arglist__75816){
var args__70829__auto__ = cljs.core.seq(arglist__75816);
return metabase$shared$util$time$valid_QMARK___delegate(args__70829__auto__);
});
metabase$shared$util$time$valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$valid_QMARK___delegate;
return metabase$shared$util$time$valid_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.same_day_QMARK_ = (function() { 
var metabase$shared$util$time$same_day_QMARK___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.same_day_QMARK_,args__70829__auto__);
};
var metabase$shared$util$time$same_day_QMARK_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75817__i = 0, G__75817__a = new Array(arguments.length -  0);
while (G__75817__i < G__75817__a.length) {G__75817__a[G__75817__i] = arguments[G__75817__i + 0]; ++G__75817__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75817__a,0,null);
} 
return metabase$shared$util$time$same_day_QMARK___delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$same_day_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$same_day_QMARK_.cljs$lang$applyTo = (function (arglist__75818){
var args__70829__auto__ = cljs.core.seq(arglist__75818);
return metabase$shared$util$time$same_day_QMARK___delegate(args__70829__auto__);
});
metabase$shared$util$time$same_day_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$same_day_QMARK___delegate;
return metabase$shared$util$time$same_day_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.same_month_QMARK_ = (function() { 
var metabase$shared$util$time$same_month_QMARK___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.same_month_QMARK_,args__70829__auto__);
};
var metabase$shared$util$time$same_month_QMARK_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75819__i = 0, G__75819__a = new Array(arguments.length -  0);
while (G__75819__i < G__75819__a.length) {G__75819__a[G__75819__i] = arguments[G__75819__i + 0]; ++G__75819__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75819__a,0,null);
} 
return metabase$shared$util$time$same_month_QMARK___delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$same_month_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$same_month_QMARK_.cljs$lang$applyTo = (function (arglist__75820){
var args__70829__auto__ = cljs.core.seq(arglist__75820);
return metabase$shared$util$time$same_month_QMARK___delegate(args__70829__auto__);
});
metabase$shared$util$time$same_month_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$same_month_QMARK___delegate;
return metabase$shared$util$time$same_month_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.same_year_QMARK_ = (function() { 
var metabase$shared$util$time$same_year_QMARK___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.same_year_QMARK_,args__70829__auto__);
};
var metabase$shared$util$time$same_year_QMARK_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75822__i = 0, G__75822__a = new Array(arguments.length -  0);
while (G__75822__i < G__75822__a.length) {G__75822__a[G__75822__i] = arguments[G__75822__i + 0]; ++G__75822__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75822__a,0,null);
} 
return metabase$shared$util$time$same_year_QMARK___delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$same_year_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$same_year_QMARK_.cljs$lang$applyTo = (function (arglist__75823){
var args__70829__auto__ = cljs.core.seq(arglist__75823);
return metabase$shared$util$time$same_year_QMARK___delegate(args__70829__auto__);
});
metabase$shared$util$time$same_year_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$same_year_QMARK___delegate;
return metabase$shared$util$time$same_year_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.day_diff = (function() { 
var metabase$shared$util$time$day_diff__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.day_diff,args__70829__auto__);
};
var metabase$shared$util$time$day_diff = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75824__i = 0, G__75824__a = new Array(arguments.length -  0);
while (G__75824__i < G__75824__a.length) {G__75824__a[G__75824__i] = arguments[G__75824__i + 0]; ++G__75824__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75824__a,0,null);
} 
return metabase$shared$util$time$day_diff__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$day_diff.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$day_diff.cljs$lang$applyTo = (function (arglist__75825){
var args__70829__auto__ = cljs.core.seq(arglist__75825);
return metabase$shared$util$time$day_diff__delegate(args__70829__auto__);
});
metabase$shared$util$time$day_diff.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$day_diff__delegate;
return metabase$shared$util$time$day_diff;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.unit_diff = (function() { 
var metabase$shared$util$time$unit_diff__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.unit_diff,args__70829__auto__);
};
var metabase$shared$util$time$unit_diff = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75826__i = 0, G__75826__a = new Array(arguments.length -  0);
while (G__75826__i < G__75826__a.length) {G__75826__a[G__75826__i] = arguments[G__75826__i + 0]; ++G__75826__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75826__a,0,null);
} 
return metabase$shared$util$time$unit_diff__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$unit_diff.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$unit_diff.cljs$lang$applyTo = (function (arglist__75827){
var args__70829__auto__ = cljs.core.seq(arglist__75827);
return metabase$shared$util$time$unit_diff__delegate(args__70829__auto__);
});
metabase$shared$util$time$unit_diff.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$unit_diff__delegate;
return metabase$shared$util$time$unit_diff;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.truncate = (function() { 
var metabase$shared$util$time$truncate__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.truncate,args__70829__auto__);
};
var metabase$shared$util$time$truncate = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75828__i = 0, G__75828__a = new Array(arguments.length -  0);
while (G__75828__i < G__75828__a.length) {G__75828__a[G__75828__i] = arguments[G__75828__i + 0]; ++G__75828__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75828__a,0,null);
} 
return metabase$shared$util$time$truncate__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$truncate.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$truncate.cljs$lang$applyTo = (function (arglist__75829){
var args__70829__auto__ = cljs.core.seq(arglist__75829);
return metabase$shared$util$time$truncate__delegate(args__70829__auto__);
});
metabase$shared$util$time$truncate.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$truncate__delegate;
return metabase$shared$util$time$truncate;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.add = (function() { 
var metabase$shared$util$time$add__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.add,args__70829__auto__);
};
var metabase$shared$util$time$add = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75830__i = 0, G__75830__a = new Array(arguments.length -  0);
while (G__75830__i < G__75830__a.length) {G__75830__a[G__75830__i] = arguments[G__75830__i + 0]; ++G__75830__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75830__a,0,null);
} 
return metabase$shared$util$time$add__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$add.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$add.cljs$lang$applyTo = (function (arglist__75831){
var args__70829__auto__ = cljs.core.seq(arglist__75831);
return metabase$shared$util$time$add__delegate(args__70829__auto__);
});
metabase$shared$util$time$add.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$add__delegate;
return metabase$shared$util$time$add;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.shared.util.time.format_for_base_type = (function() { 
var metabase$shared$util$time$format_for_base_type__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.format_for_base_type,args__70829__auto__);
};
var metabase$shared$util$time$format_for_base_type = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__75832__i = 0, G__75832__a = new Array(arguments.length -  0);
while (G__75832__i < G__75832__a.length) {G__75832__a[G__75832__i] = arguments[G__75832__i + 0]; ++G__75832__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__75832__a,0,null);
} 
return metabase$shared$util$time$format_for_base_type__delegate.call(this,args__70829__auto__);};
metabase$shared$util$time$format_for_base_type.cljs$lang$maxFixedArity = 0;
metabase$shared$util$time$format_for_base_type.cljs$lang$applyTo = (function (arglist__75833){
var args__70829__auto__ = cljs.core.seq(arglist__75833);
return metabase$shared$util$time$format_for_base_type__delegate(args__70829__auto__);
});
metabase$shared$util$time$format_for_base_type.cljs$core$IFn$_invoke$arity$variadic = metabase$shared$util$time$format_for_base_type__delegate;
return metabase$shared$util$time$format_for_base_type;
})()
;
metabase.shared.util.time.prep_options = (function metabase$shared$util$time$prep_options(options){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.util.internal.time.default_options,metabase.util.normalize_map(options)], 0));
});
/**
 * Check whether value is coercible to timestamp. Condition resembles [[coerce-to-timestamp]].
 */
metabase.shared.util.time.timestamp_coercible_QMARK_ = (function metabase$shared$util$time$timestamp_coercible_QMARK_(value){
var or__5002__auto__ = metabase.shared.util.internal.time.datetime_QMARK_(value);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((typeof value === 'string') || (typeof value === 'number'));
}
});
/**
 * Parses a timestamp value into a date object. This can be a straightforward Unix timestamp or ISO format string.
 *   But the `:unit` field can be used to alter the parsing to, for example, treat the input number as a day-of-week or
 *   day-of-month number.
 *   Returns Moments in JS and OffsetDateTimes in Java for coercible values, otherwise nil.
 */
metabase.shared.util.time.coerce_to_timestamp = (function metabase$shared$util$time$coerce_to_timestamp(var_args){
var G__75792 = arguments.length;
switch (G__75792) {
case 1:
return metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.shared.util.time.coerce_to_timestamp', metabase.shared.util.time.coerce_to_timestamp);

(metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$1 = (function (value){
return metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$2(value,cljs.core.PersistentArrayMap.EMPTY);
}));

(metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$2 = (function (value,options){
if(cljs.core.truth_(metabase.shared.util.time.timestamp_coercible_QMARK_(value))){
var options__$1 = metabase.shared.util.time.prep_options(options);
var base = (cljs.core.truth_(metabase.shared.util.internal.time.datetime_QMARK_(value))?metabase.shared.util.internal.time.normalize(value):(cljs.core.truth_((function (){var and__5000__auto__ = typeof value === 'string';
if(and__5000__auto__){
return cljs.core.re_matches(/.*(Z|[+-]\d\d:?\d\d)$/,value);
} else {
return and__5000__auto__;
}
})())?metabase.shared.util.internal.time.parse_with_zone(value):((typeof value === 'string')?metabase.shared.util.internal.time_common.string__GT_timestamp.cljs$core$IFn$_invoke$arity$2(value,options__$1):((typeof value === 'number')?metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IFn$_invoke$arity$2(value,options__$1):null))));
if(cljs.core.truth_(new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(options__$1))){
return metabase.shared.util.internal.time.localize(base);
} else {
return base;
}
} else {
return null;
}
}));

(metabase.shared.util.time.coerce_to_timestamp.cljs$lang$maxFixedArity = 2);

/**
 * Parses a standalone time, or the time portion of a timestamp.
 *   Accepts a platform time value (eg. Moment, OffsetTime, LocalTime) or a string.
 */
metabase.shared.util.time.coerce_to_time = (function metabase$shared$util$time$coerce_to_time(value){
if(cljs.core.truth_(metabase.shared.util.internal.time.time_QMARK_(value))){
return value;
} else {
if(typeof value === 'string'){
return metabase.shared.util.internal.time.parse_time_string(metabase.shared.util.internal.time_common.drop_trailing_time_zone(value));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown input to coerce-to-time; expecting a string",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null));

}
}
});
/**
 * Formats a temporal-value (iso date/time string, int for hour/minute) given the temporal-bucketing unit.
 *   If unit is nil, formats the full date/time.
 * 
 *   If `locale` is provided, that locale will be used for localizing the formatter. In CLJ this should be a `Locale`. Not
 *   supported in CLJS since we have to rely on the browser's locale.
 */
metabase.shared.util.time.format_unit = (function metabase$shared$util$time$format_unit(var_args){
var G__75794 = arguments.length;
switch (G__75794) {
case 2:
return metabase.shared.util.time.format_unit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.shared.util.time.format_unit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.shared.util.time.format_unit.cljs$core$IFn$_invoke$arity$2 = (function (temporal_value,unit){
return metabase.shared.util.internal.time.format_unit.cljs$core$IFn$_invoke$arity$2(temporal_value,unit);
}));

(metabase.shared.util.time.format_unit.cljs$core$IFn$_invoke$arity$3 = (function (temporal_value,unit,locale){
return metabase.shared.util.internal.time.format_unit.cljs$core$IFn$_invoke$arity$3(temporal_value,unit,locale);
}));

(metabase.shared.util.time.format_unit.cljs$lang$maxFixedArity = 3);

/**
 * Formats a time difference between two temporal values.
 * Drops redundant information.
 */
metabase.shared.util.time.format_diff = (function metabase$shared$util$time$format_diff(temporal_value_1,temporal_value_2){
return metabase.shared.util.internal.time.format_diff(temporal_value_1,temporal_value_2);
});
/**
 * Given a `n` `unit` time interval and the current date, return a string representing the date-time range.
 * Provide an `offset-n` and `offset-unit` time interval to change the date used relative to the current date.
 * `options` is a map and supports `:include-current` to include the current given unit of time in the range.
 */
metabase.shared.util.time.format_relative_date_range = (function metabase$shared$util$time$format_relative_date_range(var_args){
var G__75796 = arguments.length;
switch (G__75796) {
case 2:
return metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$2 = (function (n,unit){
return metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$5(n,unit,null,null,null);
}));

(metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$4 = (function (n,unit,offset_n,offset_unit){
return metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$5(n,unit,offset_n,offset_unit,null);
}));

(metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$5 = (function (n,unit,offset_n,offset_unit,options){
return metabase.shared.util.internal.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$5(n,unit,offset_n,offset_unit,options);
}));

(metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$6 = (function (t,n,unit,offset_n,offset_unit,options){
return metabase.shared.util.internal.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$6(metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$1(t),n,unit,offset_n,offset_unit,options);
}));

(metabase.shared.util.time.format_relative_date_range.cljs$lang$maxFixedArity = 6);

Object.defineProperty(module.exports, "timestamp_coercible_QMARK_", { enumerable: true, get: function() { return metabase.shared.util.time.timestamp_coercible_QMARK_; } });
Object.defineProperty(module.exports, "coerce_to_timestamp", { enumerable: true, get: function() { return metabase.shared.util.time.coerce_to_timestamp; } });
Object.defineProperty(module.exports, "coerce_to_time", { enumerable: true, get: function() { return metabase.shared.util.time.coerce_to_time; } });
//# sourceMappingURL=metabase.shared.util.time.js.map
