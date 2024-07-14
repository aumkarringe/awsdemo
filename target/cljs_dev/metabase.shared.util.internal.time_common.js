var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.util.internal.time_common.js");

goog.provide('metabase.shared.util.internal.time_common');
metabase.shared.util.internal.time_common.by_unit = (function metabase$shared$util$internal$time_common$by_unit(_,p__74786){
var map__74787 = p__74786;
var map__74787__$1 = cljs.core.__destructure_map(map__74787);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74787__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit);
});
if((typeof metabase !== 'undefined') && (typeof metabase.shared !== 'undefined') && (typeof metabase.shared.util !== 'undefined') && (typeof metabase.shared.util.internal !== 'undefined') && (typeof metabase.shared.util.internal.time_common !== 'undefined') && (typeof metabase.shared.util.internal.time_common.to_range !== 'undefined')){
} else {
/**
 * Given a datetime and a unit (eg. "hour"), returns an *inclusive* datetime range as a pair of datetimes.
 *   For a unit of an hour, and a datetime for 13:49:28, that means [13:00:00 13:59:59.999], ie. 1 ms before the end.
 */
metabase.shared.util.internal.time_common.to_range = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__74788 = cljs.core.get_global_hierarchy;
return (fexpr__74788.cljs$core$IFn$_invoke$arity$0 ? fexpr__74788.cljs$core$IFn$_invoke$arity$0() : fexpr__74788.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.shared.util.internal.time-common","to-range"),metabase.shared.util.internal.time_common.by_unit,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof metabase !== 'undefined') && (typeof metabase.shared !== 'undefined') && (typeof metabase.shared.util !== 'undefined') && (typeof metabase.shared.util.internal !== 'undefined') && (typeof metabase.shared.util.internal.time_common !== 'undefined') && (typeof metabase.shared.util.internal.time_common.string__GT_timestamp !== 'undefined')){
} else {
/**
 * Given a string representation of a datetime and the `options` map, parses the string as a representation of the
 *   `:unit` option (eg. "hour").
 *   Returns a platform-specific datetime.
 */
metabase.shared.util.internal.time_common.string__GT_timestamp = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__74789 = cljs.core.get_global_hierarchy;
return (fexpr__74789.cljs$core$IFn$_invoke$arity$0 ? fexpr__74789.cljs$core$IFn$_invoke$arity$0() : fexpr__74789.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.shared.util.internal.time-common","string->timestamp"),metabase.shared.util.internal.time_common.by_unit,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof metabase !== 'undefined') && (typeof metabase.shared !== 'undefined') && (typeof metabase.shared.util !== 'undefined') && (typeof metabase.shared.util.internal !== 'undefined') && (typeof metabase.shared.util.internal.time_common !== 'undefined') && (typeof metabase.shared.util.internal.time_common.number__GT_timestamp !== 'undefined')){
} else {
/**
 * Given a numeric representation of a datetime and the `options` map, interprets the number based on the `:unit` option
 *   (eg. "day-of-week").
 * 
 *   Note that for two relative units - `day-of-month` and `day-of-year` - an arbitrary date is generated, not necessarily
 *   one in the current month or year. When grouping user data by day-of-month, it doesn't matter whether the current month
 *   has 31 days or not.
 * 
 *   Returns a platform-specific datetime.
 */
metabase.shared.util.internal.time_common.number__GT_timestamp = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__74790 = cljs.core.get_global_hierarchy;
return (fexpr__74790.cljs$core$IFn$_invoke$arity$0 ? fexpr__74790.cljs$core$IFn$_invoke$arity$0() : fexpr__74790.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.shared.util.internal.time-common","number->timestamp"),metabase.shared.util.internal.time_common.by_unit,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.shared.util.internal.time_common.year_part = "\\d{4}";
metabase.shared.util.internal.time_common.month_part = "\\d{2}";
metabase.shared.util.internal.time_common.day_part = "\\d{2}";
metabase.shared.util.internal.time_common.date_part = [metabase.shared.util.internal.time_common.year_part,"-",metabase.shared.util.internal.time_common.month_part,"-",metabase.shared.util.internal.time_common.day_part].join('');
metabase.shared.util.internal.time_common.hour_part = "\\d{2}";
metabase.shared.util.internal.time_common.minutes_part = "\\d{2}";
metabase.shared.util.internal.time_common.optional = (function metabase$shared$util$internal$time_common$optional(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74797 = arguments.length;
var i__5727__auto___74798 = (0);
while(true){
if((i__5727__auto___74798 < len__5726__auto___74797)){
args__5732__auto__.push((arguments[i__5727__auto___74798]));

var G__74799 = (i__5727__auto___74798 + (1));
i__5727__auto___74798 = G__74799;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return metabase.shared.util.internal.time_common.optional.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(metabase.shared.util.internal.time_common.optional.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return ["(?:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,parts)),")?"].join('');
}));

(metabase.shared.util.internal.time_common.optional.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metabase.shared.util.internal.time_common.optional.cljs$lang$applyTo = (function (seq74791){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74791));
}));

metabase.shared.util.internal.time_common.seconds_milliseconds_part = [":\\d{2}",metabase.shared.util.internal.time_common.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\\.\\d{1,6}"], 0))].join('');
metabase.shared.util.internal.time_common.time_part = [metabase.shared.util.internal.time_common.hour_part,":",metabase.shared.util.internal.time_common.minutes_part,metabase.shared.util.internal.time_common.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.util.internal.time_common.seconds_milliseconds_part], 0))].join('');
metabase.shared.util.internal.time_common.date_time_part = [metabase.shared.util.internal.time_common.date_part,"[T ]",metabase.shared.util.internal.time_common.time_part].join('');
metabase.shared.util.internal.time_common.offset_part = ["(?:Z|(?:[+-]",metabase.shared.util.internal.time_common.time_part,"))"].join('');
/**
 * Regex for a zone-offset string.
 */
metabase.shared.util.internal.time_common.zone_offset_part_regex = cljs.core.re_pattern(metabase.shared.util.internal.time_common.offset_part);
/**
 * Regex for a local-date string.
 */
metabase.shared.util.internal.time_common.local_date_regex = cljs.core.re_pattern(["^",metabase.shared.util.internal.time_common.date_part,"$"].join(''));
/**
 * Regex for a local-time string.
 */
metabase.shared.util.internal.time_common.local_time_regex = cljs.core.re_pattern(["^",metabase.shared.util.internal.time_common.time_part,"$"].join(''));
/**
 * Regex for an offset-time string.
 */
metabase.shared.util.internal.time_common.offset_time_regex = cljs.core.re_pattern(["^",metabase.shared.util.internal.time_common.time_part,metabase.shared.util.internal.time_common.offset_part,"$"].join(''));
/**
 * Regex for a local-datetime string.
 */
metabase.shared.util.internal.time_common.local_datetime_regex = cljs.core.re_pattern(["^",metabase.shared.util.internal.time_common.date_time_part,"$"].join(''));
/**
 * Regex for an offset-datetime string.
 */
metabase.shared.util.internal.time_common.offset_datetime_regex = cljs.core.re_pattern(["^",metabase.shared.util.internal.time_common.date_time_part,metabase.shared.util.internal.time_common.offset_part,"$"].join(''));
/**
 * Regex for a year-month literal string.
 */
metabase.shared.util.internal.time_common.year_month_regex = cljs.core.re_pattern(["^",metabase.shared.util.internal.time_common.year_part,"-",metabase.shared.util.internal.time_common.month_part,"$"].join(''));
/**
 * Regex for a year literal string.
 */
metabase.shared.util.internal.time_common.year_regex = cljs.core.re_pattern(["^",metabase.shared.util.internal.time_common.year_part,"$"].join(''));
/**
 * Matches a local time string.
 */
metabase.shared.util.internal.time_common.matches_time_QMARK_ = (function metabase$shared$util$internal$time_common$matches_time_QMARK_(input){
return cljs.core.re_matches(metabase.shared.util.internal.time_common.local_time_regex,input);
});
/**
 * Matches a local date string.
 */
metabase.shared.util.internal.time_common.matches_date_QMARK_ = (function metabase$shared$util$internal$time_common$matches_date_QMARK_(input){
return cljs.core.re_matches(metabase.shared.util.internal.time_common.local_date_regex,input);
});
/**
 * Matches a local AND offset date time string.
 */
metabase.shared.util.internal.time_common.matches_date_time_QMARK_ = (function metabase$shared$util$internal$time_common$matches_date_time_QMARK_(input){
return cljs.core.re_matches(cljs.core.re_pattern([metabase.shared.util.internal.time_common.date_time_part,metabase.shared.util.internal.time_common.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.util.internal.time_common.offset_part], 0))].join('')),input);
});
/**
 * Strips off a trailing +0500, -0430, or Z from a time string.
 */
metabase.shared.util.internal.time_common.drop_trailing_time_zone = (function metabase$shared$util$internal$time_common$drop_trailing_time_zone(time_str){
var or__5002__auto__ = cljs.core.second(cljs.core.re_matches(cljs.core.re_pattern(["(.*?)",metabase.shared.util.internal.time_common.optional.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.util.internal.time_common.offset_part], 0)),"$"].join('')),time_str));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return time_str;
}
});

//# sourceMappingURL=metabase.shared.util.internal.time_common.js.map
