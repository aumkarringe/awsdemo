var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$moment.js");
require("./metabase.shared.util.internal.time_common.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.util.internal.time.js");

goog.provide('metabase.shared.util.internal.time');
metabase.shared.util.internal.time.now = (function metabase$shared$util$internal$time$now(){
return shadow.js.shim.module$moment();
});
/**
 * Given any value, check if it's a (possibly invalid) Moment.
 */
metabase.shared.util.internal.time.datetime_QMARK_ = (function metabase$shared$util$internal$time$datetime_QMARK_(value){
var and__5000__auto__ = value;
if(cljs.core.truth_(and__5000__auto__)){
return shadow.js.shim.module$moment.isMoment(value);
} else {
return and__5000__auto__;
}
});
/**
 * checks if the provided value is a local time value.
 */
metabase.shared.util.internal.time.time_QMARK_ = (function metabase$shared$util$internal$time$time_QMARK_(value){
return shadow.js.shim.module$moment.isMoment(value);
});
/**
 * Given a Moment, check that it's valid.
 */
metabase.shared.util.internal.time.valid_QMARK_ = (function metabase$shared$util$internal$time$valid_QMARK_(value){
var and__5000__auto__ = metabase.shared.util.internal.time.datetime_QMARK_(value);
if(cljs.core.truth_(and__5000__auto__)){
return value.isValid();
} else {
return and__5000__auto__;
}
});
/**
 * Does nothing. Just a placeholder in CLJS; the JVM implementation does some real work.
 */
metabase.shared.util.internal.time.normalize = (function metabase$shared$util$internal$time$normalize(value){
return value;
});
/**
 * Given two platform-specific datetimes, checks if they fall within the same day.
 */
metabase.shared.util.internal.time.same_day_QMARK_ = (function metabase$shared$util$internal$time$same_day_QMARK_(d1,d2){
return d1.isSame(d2,"day");
});
/**
 * True if these two datetimes fall in the same (year and) month.
 */
metabase.shared.util.internal.time.same_month_QMARK_ = (function metabase$shared$util$internal$time$same_month_QMARK_(d1,d2){
return d1.isSame(d2,"month");
});
/**
 * True if these two datetimes fall in the same year.
 */
metabase.shared.util.internal.time.same_year_QMARK_ = (function metabase$shared$util$internal$time$same_year_QMARK_(d1,d2){
return d1.isSame(d2,"year");
});
/**
 * The first day of the week varies by locale, but Metabase has a setting that overrides it.
 *   In CLJS, Moment is already configured with that setting.
 */
metabase.shared.util.internal.time.first_day_of_week = (function metabase$shared$util$internal$time$first_day_of_week(){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sunday","sunday",1381770036),new cljs.core.Keyword(null,"monday","monday",-1107743655),new cljs.core.Keyword(null,"tuesday","tuesday",299624080),new cljs.core.Keyword(null,"wednesday","wednesday",-2061677647),new cljs.core.Keyword(null,"thursday","thursday",1681780767),new cljs.core.Keyword(null,"friday","friday",459046165),new cljs.core.Keyword(null,"saturday","saturday",-1342278228)], null),shadow.js.shim.module$moment.localeData().firstDayOfWeek());
});
/**
 * The default map of options - empty in CLJS.
 */
metabase.shared.util.internal.time.default_options = cljs.core.PersistentArrayMap.EMPTY;
metabase.shared.util.internal.time.apply_offset = (function metabase$shared$util$internal$time$apply_offset(value,offset_n,offset_unit){
return shadow.js.shim.module$moment(value).add(offset_n,cljs.core.name(offset_unit));
});
metabase.shared.util.internal.time_common.to_range.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (value,p__75292){
var map__75293 = p__75292;
var map__75293__$1 = cljs.core.__destructure_map(map__75293);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75293__$1,new cljs.core.Keyword(null,"n","n",562130025));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75293__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var c1 = value.clone();
var c2 = value.clone();
var adjusted = (((n > (1)))?c2.add((n - (1)),cljs.core.name(unit)):c2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1.startOf(cljs.core.name(unit)),adjusted.endOf(cljs.core.name(unit))], null);
}));
metabase.shared.util.internal.time_common.string__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (value,_){
return shadow.js.shim.module$moment.utc(value,shadow.js.shim.module$moment.ISO_8601);
}));
metabase.shared.util.internal.time_common.string__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),(function (value,options){
var as_default = (function (){try{var fexpr__75295 = cljs.core.get_method(metabase.shared.util.internal.time_common.string__GT_timestamp,new cljs.core.Keyword(null,"default","default",-1987822328));
return (fexpr__75295.cljs$core$IFn$_invoke$arity$2 ? fexpr__75295.cljs$core$IFn$_invoke$arity$2(value,options) : fexpr__75295.call(null,value,options));
}catch (e75294){if((e75294 instanceof Error)){
var _ = e75294;
return null;
} else {
throw e75294;

}
}})();
if(cljs.core.truth_(metabase.shared.util.internal.time.valid_QMARK_(as_default))){
return as_default;
} else {
return metabase.shared.util.internal.time.now().isoWeekday(value).startOf("day");
}
}));
/**
 * Some of the date coercions are relative, and not directly involved with any particular month.
 *   To avoid errors we need to use a reference date that is (a) in a month with 31 days,(b) in a leap year.
 *   This uses 2016-01-01 for the purpose.
 *   This is a function that returns fresh values, since Moments are mutable.
 */
metabase.shared.util.internal.time.magic_base_date = (function metabase$shared$util$internal$time$magic_base_date(){
return shadow.js.shim.module$moment("2016-01-01");
});
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (value,_){
return shadow.js.shim.module$moment.utc(value,shadow.js.shim.module$moment.ISO_8601);
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"minute-of-hour","minute-of-hour",1903220478),(function (value,_){
return metabase.shared.util.internal.time.now().minute(value).startOf("minute");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099),(function (value,_){
return metabase.shared.util.internal.time.now().hour(value).startOf("hour");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),(function (value,_){
return metabase.shared.util.internal.time.now().weekday((value - (1))).startOf("day");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),(function (value,_){
return metabase.shared.util.internal.time.magic_base_date().date(value).startOf("day");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"day-of-year","day-of-year",478600113),(function (value,_){
return metabase.shared.util.internal.time.magic_base_date().dayOfYear(value).startOf("day");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"week-of-year","week-of-year",-910114435),(function (value,_){
return metabase.shared.util.internal.time.now().week(value).startOf("week");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),(function (value,_){
return metabase.shared.util.internal.time.now().month((value - (1))).startOf("month");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quarter-of-year","quarter-of-year",-472803491),(function (value,_){
return metabase.shared.util.internal.time.now().quarter(value).startOf("quarter");
}));
metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"year","year",335913393),(function (value,_){
return metabase.shared.util.internal.time.now().year(value).startOf("year");
}));
/**
 * Parses a timestamp with Z or a timezone offset at the end.
 *   This requires a different API call from timestamps without time zones in CLJS.
 */
metabase.shared.util.internal.time.parse_with_zone = (function metabase$shared$util$internal$time$parse_with_zone(value){
return shadow.js.shim.module$moment.parseZone(value);
});
/**
 * Given a freshly parsed absolute Moment, convert it to a local one.
 */
metabase.shared.util.internal.time.localize = (function metabase$shared$util$internal$time$localize(value){
return value.local();
});
metabase.shared.util.internal.time.parse_time_formats = ["HH:mm:ss.SSS[Z]","HH:mm:ss.SSS","HH:mm:ss","HH:mm"];
/**
 * Parses a time string that has been stripped of any time zone.
 */
metabase.shared.util.internal.time.parse_time_string = (function metabase$shared$util$internal$time$parse_time_string(value){
return shadow.js.shim.module$moment(value,metabase.shared.util.internal.time.parse_time_formats);
});
/**
 * Returns the time elapsed between `before` and `after` in days.
 */
metabase.shared.util.internal.time.day_diff = (function metabase$shared$util$internal$time$day_diff(before,after){
return (metabase.shared.util.internal.time.unit_diff.cljs$core$IFn$_invoke$arity$3 ? metabase.shared.util.internal.time.unit_diff.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"day","day",-274800446),before,after) : metabase.shared.util.internal.time.unit_diff.call(null,new cljs.core.Keyword(null,"day","day",-274800446),before,after));
});
metabase.shared.util.internal.time.coerce_local_date_time = (function metabase$shared$util$internal$time$coerce_local_date_time(input){
return shadow.js.shim.module$moment.utc(metabase.shared.util.internal.time_common.drop_trailing_time_zone(input),shadow.js.shim.module$moment.ISO_8601);
});
/**
 * Formats a date-time value given the temporal extraction unit.
 *   If unit is not supported, returns nil.
 */
metabase.shared.util.internal.time.format_extraction_unit = (function metabase$shared$util$internal$time$format_extraction_unit(t,unit){
var G__75302 = unit;
var G__75302__$1 = (((G__75302 instanceof cljs.core.Keyword))?G__75302.fqn:null);
switch (G__75302__$1) {
case "day-of-week":
return t.format("dddd");

break;
case "month-of-year":
return t.format("MMM");

break;
case "minute-of-hour":
return t.format("m");

break;
case "hour-of-day":
return t.format("h A");

break;
case "day-of-month":
return t.format("D");

break;
case "day-of-year":
return t.format("DDD");

break;
case "week-of-year":
return t.format("w");

break;
case "quarter-of-year":
return t.format("[Q]Q");

break;
default:
return null;

}
});
/**
 * Formats a temporal-value (iso date/time string, int for extraction units) given the temporal-bucketing unit.
 * If unit is nil, formats the full date/time.
 * Time input formatting is only defined with time units.
 */
metabase.shared.util.internal.time.format_unit = (function metabase$shared$util$internal$time$format_unit(var_args){
var G__75304 = arguments.length;
switch (G__75304) {
case 3:
return metabase.shared.util.internal.time.format_unit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return metabase.shared.util.internal.time.format_unit.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.shared.util.internal.time.format_unit.cljs$core$IFn$_invoke$arity$3 = (function (input,unit,_locale){
return metabase.shared.util.internal.time.format_unit.cljs$core$IFn$_invoke$arity$2(input,unit);
}));

(metabase.shared.util.internal.time.format_unit.cljs$core$IFn$_invoke$arity$2 = (function (input,unit){
if(typeof input === 'string'){
var time_QMARK_ = metabase.shared.util.internal.time_common.matches_time_QMARK_(input);
var date_QMARK_ = metabase.shared.util.internal.time_common.matches_date_QMARK_(input);
var date_time_QMARK_ = metabase.shared.util.internal.time_common.matches_date_time_QMARK_(input);
var t = (cljs.core.truth_(time_QMARK_)?shadow.js.shim.module$moment.utc(["2023-01-01T",input].join(''),shadow.js.shim.module$moment.ISO_8601):(cljs.core.truth_((function (){var or__5002__auto__ = date_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return date_time_QMARK_;
}
})())?metabase.shared.util.internal.time.coerce_local_date_time(input):null));
if(cljs.core.truth_((function (){var and__5000__auto__ = t;
if(cljs.core.truth_(and__5000__auto__)){
return t.isValid();
} else {
return and__5000__auto__;
}
})())){
var or__5002__auto__ = metabase.shared.util.internal.time.format_extraction_unit(t,unit);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.truth_(time_QMARK_)){
return t.format("h:mm A");
} else {
if(cljs.core.truth_(date_QMARK_)){
return t.format("MMM D, YYYY");
} else {
if(cljs.core.truth_(date_time_QMARK_)){
return t.format("MMM D, YYYY, h:mm A");
} else {
return null;
}
}
}
}
} else {
return input;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((input === (0)))?"12":(((input <= (12)))?input:(input - (12))
)))," ",(((input <= (11)))?"AM":"PM")].join('');
} else {
var or__5002__auto__ = metabase.shared.util.internal.time.format_extraction_unit(metabase.shared.util.internal.time_common.number__GT_timestamp.cljs$core$IFn$_invoke$arity$2(input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)),unit);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(input);
}
}
}
}));

(metabase.shared.util.internal.time.format_unit.cljs$lang$maxFixedArity = 3);

/**
 * Formats a time difference between two temporal values.
 * Drops redundant information.
 */
metabase.shared.util.internal.time.format_diff = (function metabase$shared$util$internal$time$format_diff(temporal_value_1,temporal_value_2){
var default_format = (function (){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.internal.time.format_unit.cljs$core$IFn$_invoke$arity$2(temporal_value_1,null))," \u2013 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.internal.time.format_unit.cljs$core$IFn$_invoke$arity$2(temporal_value_2,null))].join('');
});
if(cljs.core.truth_(cljs.core.some(cljs.core.complement(cljs.core.string_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [temporal_value_1,temporal_value_2], null)))){
return default_format();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(temporal_value_1,temporal_value_2)){
return metabase.shared.util.internal.time.format_unit.cljs$core$IFn$_invoke$arity$2(temporal_value_1,null);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.shared.util.internal.time_common.matches_time_QMARK_(temporal_value_1);
if(cljs.core.truth_(and__5000__auto__)){
return metabase.shared.util.internal.time_common.matches_time_QMARK_(temporal_value_2);
} else {
return and__5000__auto__;
}
})())){
return default_format();
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.shared.util.internal.time_common.matches_date_time_QMARK_(temporal_value_1);
if(cljs.core.truth_(and__5000__auto__)){
return metabase.shared.util.internal.time_common.matches_date_time_QMARK_(temporal_value_2);
} else {
return and__5000__auto__;
}
})())){
var lhs = metabase.shared.util.internal.time.coerce_local_date_time(temporal_value_1);
var rhs = metabase.shared.util.internal.time.coerce_local_date_time(temporal_value_2);
var year_matches_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lhs.format("YYYY"),rhs.format("YYYY"));
var month_matches_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lhs.format("MMM"),rhs.format("MMM"));
var day_matches_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lhs.format("D"),rhs.format("D"));
var hour_matches_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lhs.format("HH"),rhs.format("HH"));
var vec__75309 = ((((year_matches_QMARK_) && (((month_matches_QMARK_) && (((day_matches_QMARK_) && (hour_matches_QMARK_)))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MMM D, YYYY, h:mm A "," h:mm A"], null):((((year_matches_QMARK_) && (((month_matches_QMARK_) && (day_matches_QMARK_)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MMM D, YYYY, h:mm A "," h:mm A"], null):((year_matches_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MMM D, h:mm A "," MMM D, YYYY, h:mm A"], null):null)));
var lhs_fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75309,(0),null);
var rhs_fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75309,(1),null);
if(cljs.core.truth_(lhs_fmt)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(lhs.format(lhs_fmt)),"\u2013",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhs.format(rhs_fmt))].join('');
} else {
return default_format();
}
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.shared.util.internal.time_common.matches_date_QMARK_(temporal_value_1);
if(cljs.core.truth_(and__5000__auto__)){
return metabase.shared.util.internal.time_common.matches_date_QMARK_(temporal_value_2);
} else {
return and__5000__auto__;
}
})())){
var lhs = shadow.js.shim.module$moment.utc(temporal_value_1,shadow.js.shim.module$moment.ISO_8601);
var rhs = shadow.js.shim.module$moment.utc(temporal_value_2,shadow.js.shim.module$moment.ISO_8601);
var year_matches_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lhs.format("YYYY"),rhs.format("YYYY"));
var month_matches_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lhs.format("MMM"),rhs.format("MMM"));
var vec__75312 = ((((year_matches_QMARK_) && (month_matches_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MMM D","D, YYYY"], null):((year_matches_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["MMM D "," MMM D, YYYY"], null):null));
var lhs_fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75312,(0),null);
var rhs_fmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75312,(1),null);
if(cljs.core.truth_(lhs_fmt)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(lhs.format(lhs_fmt)),"\u2013",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhs.format(rhs_fmt))].join('');
} else {
return default_format();
}
} else {
return default_format();

}
}
}
}
}
});
/**
 * Given a `n` `unit` time interval and the current date, return a string representing the date-time range.
 * Provide an `offset-n` and `offset-unit` time interval to change the date used relative to the current date.
 * `options` is a map and supports `:include-current` to include the current given unit of time in the range.
 */
metabase.shared.util.internal.time.format_relative_date_range = (function metabase$shared$util$internal$time$format_relative_date_range(var_args){
var G__75317 = arguments.length;
switch (G__75317) {
case 5:
return metabase.shared.util.internal.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return metabase.shared.util.internal.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.shared.util.internal.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$5 = (function (n,unit,offset_n,offset_unit,opts){
return metabase.shared.util.internal.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$6(metabase.shared.util.internal.time.now(),n,unit,offset_n,offset_unit,opts);
}));

(metabase.shared.util.internal.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$6 = (function (t,n,unit,offset_n,offset_unit,p__75322){
var map__75323 = p__75322;
var map__75323__$1 = cljs.core.__destructure_map(map__75323);
var include_current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75323__$1,new cljs.core.Keyword(null,"include-current","include-current",-1602371981));
var offset_now = (function (){var G__75324 = t;
var G__75324__$1 = (((n < (0)))?metabase.shared.util.internal.time.apply_offset(G__75324,n,unit):G__75324);
var G__75324__$2 = (((((n > (0))) && (cljs.core.not(include_current))))?metabase.shared.util.internal.time.apply_offset(G__75324__$1,(1),unit):G__75324__$1);
if(cljs.core.truth_((function (){var and__5000__auto__ = offset_n;
if(cljs.core.truth_(and__5000__auto__)){
return offset_unit;
} else {
return and__5000__auto__;
}
})())){
return metabase.shared.util.internal.time.apply_offset(G__75324__$2,offset_n,offset_unit);
} else {
return G__75324__$2;
}
})();
var pos_n = (function (){var G__75330 = cljs.core.abs(n);
if(cljs.core.truth_(include_current)){
return (G__75330 + (1));
} else {
return G__75330;
}
})();
var date_ranges = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75315_SHARP_){
return p1__75315_SHARP_.format((cljs.core.truth_((function (){var fexpr__75332 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hour","hour",-555989214),null,new cljs.core.Keyword(null,"minute","minute",-642875969),null], null), null);
return (fexpr__75332.cljs$core$IFn$_invoke$arity$1 ? fexpr__75332.cljs$core$IFn$_invoke$arity$1(unit) : fexpr__75332.call(null,unit));
})())?"YYYY-MM-DDTHH:mm":"YYYY-MM-DD"));
}),metabase.shared.util.internal.time_common.to_range.cljs$core$IFn$_invoke$arity$2(offset_now,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"unit","unit",375175175),unit,new cljs.core.Keyword(null,"n","n",562130025),pos_n,new cljs.core.Keyword(null,"offset-n","offset-n",555087298),offset_n,new cljs.core.Keyword(null,"offset-unit","offset-unit",-352817795),offset_unit], null)));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.internal.time.format_diff,date_ranges);
}));

(metabase.shared.util.internal.time.format_relative_date_range.cljs$lang$maxFixedArity = 6);

metabase.shared.util.internal.time.temporal_formats = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"offset-date-time","offset-date-time",1403996582),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",939488856),metabase.shared.util.internal.time_common.offset_datetime_regex,new cljs.core.Keyword(null,"formats","formats",-1397890976),["yyyy-MM-DDTHH:mm:ss.SSS[Z]","yyyy-MM-DDTHH:mm:ss[Z]","yyyy-MM-DDTHH:mm[Z]","yyyy-MM-DDTHH[Z]"]], null),new cljs.core.Keyword(null,"local-date-time","local-date-time",-1710577246),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",939488856),metabase.shared.util.internal.time_common.local_datetime_regex,new cljs.core.Keyword(null,"formats","formats",-1397890976),["yyyy-MM-DDTHH:mm:ss.SSS","yyyy-MM-DDTHH:mm:ss","yyyy-MM-DDTHH:mm","yyyy-MM-DDTHH"]], null),new cljs.core.Keyword(null,"local-date","local-date",1829761428),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",939488856),metabase.shared.util.internal.time_common.local_date_regex,new cljs.core.Keyword(null,"formats","formats",-1397890976),["yyyy-MM-DD","yyyy-MM","yyyy"]], null),new cljs.core.Keyword(null,"offset-time","offset-time",1629332358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",939488856),metabase.shared.util.internal.time_common.offset_time_regex,new cljs.core.Keyword(null,"formats","formats",-1397890976),["HH:mm:ss.SSS[Z]","HH:mm:ss[Z]","HH:mm[Z]","HH[Z]"]], null),new cljs.core.Keyword(null,"local-time","local-time",-1873195290),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"regex","regex",939488856),metabase.shared.util.internal.time_common.local_time_regex,new cljs.core.Keyword(null,"formats","formats",-1397890976),["HH:mm:ss.SSS","HH:mm:ss","HH:mm","HH"]], null)], null);
metabase.shared.util.internal.time.iso_8601__GT_moment_PLUS_type = (function metabase$shared$util$internal$time$iso_8601__GT_moment_PLUS_type(s){
return cljs.core.some((function (p__75337){
var vec__75338 = p__75337;
var value_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75338,(0),null);
var map__75341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75338,(1),null);
var map__75341__$1 = cljs.core.__destructure_map(map__75341);
var regex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75341__$1,new cljs.core.Keyword(null,"regex","regex",939488856));
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75341__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
if(cljs.core.truth_(cljs.core.re_matches(regex,s))){
var parsed = shadow.js.shim.module$moment.parseZone(s,formats,true);
if(cljs.core.truth_(parsed.isValid())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parsed,value_type], null);
} else {
return null;
}
} else {
return null;
}
}),metabase.shared.util.internal.time.temporal_formats);
});
if((typeof metabase !== 'undefined') && (typeof metabase.shared !== 'undefined') && (typeof metabase.shared.util !== 'undefined') && (typeof metabase.shared.util.internal !== 'undefined') && (typeof metabase.shared.util.internal.time !== 'undefined') && (typeof metabase.shared.util.internal.time.moment_PLUS_type__GT_iso_8601 !== 'undefined')){
} else {
metabase.shared.util.internal.time.moment_PLUS_type__GT_iso_8601 = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__75347 = cljs.core.get_global_hierarchy;
return (fexpr__75347.cljs$core$IFn$_invoke$arity$0 ? fexpr__75347.cljs$core$IFn$_invoke$arity$0() : fexpr__75347.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.shared.util.internal.time","moment+type->iso-8601"),(function (p__75349){
var vec__75350 = p__75349;
var _t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75350,(0),null);
var value_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75350,(1),null);
return value_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.shared.util.internal.time.moment_PLUS_type__GT_iso_8601.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset-date-time","offset-date-time",1403996582),(function (p__75354){
var vec__75356 = p__75354;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75356,(0),null);
var _value_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75356,(1),null);
var format_string = (((t.milliseconds() > (0)))?"yyyy-MM-DDTHH:mm:ss.SSS[Z]":(((t.seconds() > (0)))?"yyyy-MM-DDTHH:mm:ss[Z]":"yyyy-MM-DDTHH:mm[Z]"
));
return t.format(format_string);
}));
metabase.shared.util.internal.time.moment_PLUS_type__GT_iso_8601.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local-date-time","local-date-time",-1710577246),(function (p__75360){
var vec__75361 = p__75360;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75361,(0),null);
var _value_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75361,(1),null);
var format_string = (((t.milliseconds() > (0)))?"yyyy-MM-DDTHH:mm:ss.SSS":(((t.seconds() > (0)))?"yyyy-MM-DDTHH:mm:ss":"yyyy-MM-DDTHH:mm"
));
return t.format(format_string);
}));
metabase.shared.util.internal.time.moment_PLUS_type__GT_iso_8601.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local-date","local-date",1829761428),(function (p__75755){
var vec__75756 = p__75755;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75756,(0),null);
var _value_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75756,(1),null);
return t.format("yyyy-MM-DD");
}));
metabase.shared.util.internal.time.moment_PLUS_type__GT_iso_8601.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset-time","offset-time",1629332358),(function (p__75759){
var vec__75760 = p__75759;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75760,(0),null);
var _value_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75760,(1),null);
var format_string = (((t.milliseconds() > (0)))?"HH:mm:ss.SSS[Z]":(((t.seconds() > (0)))?"HH:mm:ss[Z]":"HH:mm[Z]"
));
return t.format(format_string);
}));
metabase.shared.util.internal.time.moment_PLUS_type__GT_iso_8601.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local-time","local-time",-1873195290),(function (p__75763){
var vec__75764 = p__75763;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75764,(0),null);
var _value_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75764,(1),null);
var format_string = (((t.milliseconds() > (0)))?"HH:mm:ss.SSS":(((t.seconds() > (0)))?"HH:mm:ss":"HH:mm"
));
return t.format(format_string);
}));
metabase.shared.util.internal.time.__GT_moment = (function metabase$shared$util$internal$time$__GT_moment(t){
if((t instanceof Date)){
return shadow.js.shim.module$moment.utc(t);
} else {
return t;
}
});
/**
 * Return the number of `unit`s between two temporal values `before` and `after`, e.g. maybe there are 32 `:day`s
 *   between Jan 1st and Feb 2nd.
 */
metabase.shared.util.internal.time.unit_diff = (function metabase$shared$util$internal$time$unit_diff(unit,before,after){
var before__$1 = ((typeof before === 'string')?cljs.core.first(metabase.shared.util.internal.time.iso_8601__GT_moment_PLUS_type(before)):metabase.shared.util.internal.time.__GT_moment(before));
var after__$1 = ((typeof after === 'string')?cljs.core.first(metabase.shared.util.internal.time.iso_8601__GT_moment_PLUS_type(after)):metabase.shared.util.internal.time.__GT_moment(after));
return after__$1.diff(before__$1,cljs.core.name(unit));
});
/**
 * ClojureScript implementation of [[metabase.shared.util.time/truncate]]; supports both Moment.js instances and ISO-8601
 *   strings.
 */
metabase.shared.util.internal.time.truncate = (function metabase$shared$util$internal$time$truncate(t,unit){
if(typeof t === 'string'){
var vec__75767 = metabase.shared.util.internal.time.iso_8601__GT_moment_PLUS_type(t);
var t__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75767,(0),null);
var value_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75767,(1),null);
var t__$2 = (metabase.shared.util.internal.time.truncate.cljs$core$IFn$_invoke$arity$2 ? metabase.shared.util.internal.time.truncate.cljs$core$IFn$_invoke$arity$2(t__$1,unit) : metabase.shared.util.internal.time.truncate.call(null,t__$1,unit));
return metabase.shared.util.internal.time.moment_PLUS_type__GT_iso_8601.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t__$2,value_type], null));
} else {
var t__$1 = metabase.shared.util.internal.time.__GT_moment(t);
return t__$1.startOf(cljs.core.name(unit));
}
});
/**
 * ClojureScript implementation of [[metabase.shared.util.time/add]]; supports both Moment.js instances and ISO-8601 strings.
 */
metabase.shared.util.internal.time.add = (function metabase$shared$util$internal$time$add(t,unit,amount){
if(typeof t === 'string'){
var vec__75770 = metabase.shared.util.internal.time.iso_8601__GT_moment_PLUS_type(t);
var t__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75770,(0),null);
var value_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75770,(1),null);
var t__$2 = (metabase.shared.util.internal.time.add.cljs$core$IFn$_invoke$arity$3 ? metabase.shared.util.internal.time.add.cljs$core$IFn$_invoke$arity$3(t__$1,unit,amount) : metabase.shared.util.internal.time.add.call(null,t__$1,unit,amount));
return metabase.shared.util.internal.time.moment_PLUS_type__GT_iso_8601.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t__$2,value_type], null));
} else {
var t__$1 = metabase.shared.util.internal.time.__GT_moment(t);
return t__$1.add(amount,cljs.core.name(unit));
}
});
/**
 * ClojureScript implementation of [[metabase.shared.util.time/format-for-base-type]]; format a temporal value as an
 *   ISO-8601 string appropriate for a value of the given `base-type`, e.g. a `:type/Time` gets formatted as a
 *   `HH:mm:ss.SSS` string.
 */
metabase.shared.util.internal.time.format_for_base_type = (function metabase$shared$util$internal$time$format_for_base_type(t,base_type){
if(typeof t === 'string'){
return t;
} else {
var t__$1 = metabase.shared.util.internal.time.__GT_moment(t);
var value_type = (function (){var pred__75781 = (function (p1__75780_SHARP_,p2__75779_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p2__75779_SHARP_,p1__75780_SHARP_);
});
var expr__75782 = base_type;
if(pred__75781(new cljs.core.Keyword("type","TimeWithTZ","type/TimeWithTZ",-442869120),expr__75782)){
return new cljs.core.Keyword(null,"offset-time","offset-time",1629332358);
} else {
if(pred__75781(new cljs.core.Keyword("type","Time","type/Time",-814852413),expr__75782)){
return new cljs.core.Keyword(null,"local-time","local-time",-1873195290);
} else {
if(pred__75781(new cljs.core.Keyword("type","DateTimeWithTZ","type/DateTimeWithTZ",-1919106635),expr__75782)){
return new cljs.core.Keyword(null,"offset-date-time","offset-date-time",1403996582);
} else {
if(pred__75781(new cljs.core.Keyword("type","DateTime","type/DateTime",352113310),expr__75782)){
return new cljs.core.Keyword(null,"local-date-time","local-date-time",-1710577246);
} else {
if(pred__75781(new cljs.core.Keyword("type","Date","type/Date",-690428629),expr__75782)){
return new cljs.core.Keyword(null,"local-date","local-date",1829761428);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__75782)].join('')));
}
}
}
}
}
})();
return metabase.shared.util.internal.time.moment_PLUS_type__GT_iso_8601.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t__$1,value_type], null));
}
});

//# sourceMappingURL=metabase.shared.util.internal.time.js.map
