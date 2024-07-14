var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.shared.util.time.js");
require("./metabase.util.js");
require("./metabase.util.malli.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.temporal_bucket.js");

goog.provide('metabase.lib.temporal_bucket');
/**
 * Inputs: ([]
 *         [unit]
 *         [n :- :int unit :- [:maybe :keyword]])
 *   Return: :string
 *        
 * 
 *   Get a translated description of a temporal bucketing unit.
 */
metabase.lib.temporal_bucket.describe_temporal_unit = (function() {
var metabase$lib$temporal_bucket$describe_temporal_unit = null;
var metabase$lib$temporal_bucket$describe_temporal_unit__0 = (function (){
return (metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2((1),null) : metabase.lib.temporal_bucket.describe_temporal_unit.call(null,(1),null));
});
var metabase$lib$temporal_bucket$describe_temporal_unit__1 = (function (unit){
return (metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2((1),unit) : metabase.lib.temporal_bucket.describe_temporal_unit.call(null,(1),unit));
});
var metabase$lib$temporal_bucket$describe_temporal_unit__2 = (function (n,unit){
if(cljs.core.not(unit)){
return "";
} else {
var n__$1 = cljs.core.abs(n);
var G__76995 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit);
var G__76995__$1 = (((G__76995 instanceof cljs.core.Keyword))?G__76995.fqn:null);
switch (G__76995__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n_n("Default period","Default periods",n__$1);

break;
case "millisecond":
return metabase.shared.util.i18n.js_i18n_n("Millisecond","Milliseconds",n__$1);

break;
case "second":
return metabase.shared.util.i18n.js_i18n_n("Second","Seconds",n__$1);

break;
case "minute":
return metabase.shared.util.i18n.js_i18n_n("Minute","Minutes",n__$1);

break;
case "hour":
return metabase.shared.util.i18n.js_i18n_n("Hour","Hours",n__$1);

break;
case "day":
return metabase.shared.util.i18n.js_i18n_n("Day","Days",n__$1);

break;
case "week":
return metabase.shared.util.i18n.js_i18n_n("Week","Weeks",n__$1);

break;
case "month":
return metabase.shared.util.i18n.js_i18n_n("Month","Months",n__$1);

break;
case "quarter":
return metabase.shared.util.i18n.js_i18n_n("Quarter","Quarters",n__$1);

break;
case "year":
return metabase.shared.util.i18n.js_i18n_n("Year","Years",n__$1);

break;
case "minute-of-hour":
return metabase.shared.util.i18n.js_i18n_n("Minute of hour","Minutes of hour",n__$1);

break;
case "hour-of-day":
return metabase.shared.util.i18n.js_i18n_n("Hour of day","Hours of day",n__$1);

break;
case "day-of-week":
return metabase.shared.util.i18n.js_i18n_n("Day of week","Days of week",n__$1);

break;
case "day-of-month":
return metabase.shared.util.i18n.js_i18n_n("Day of month","Days of month",n__$1);

break;
case "day-of-year":
return metabase.shared.util.i18n.js_i18n_n("Day of year","Days of year",n__$1);

break;
case "week-of-year":
return metabase.shared.util.i18n.js_i18n_n("Week of year","Weeks of year",n__$1);

break;
case "month-of-year":
return metabase.shared.util.i18n.js_i18n_n("Month of year","Months of year",n__$1);

break;
case "quarter-of-year":
return metabase.shared.util.i18n.js_i18n_n("Quarter of year","Quarters of year",n__$1);

break;
default:
var vec__76999 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(unit),/-/);
var seq__77000 = cljs.core.seq(vec__76999);
var first__77001 = cljs.core.first(seq__77000);
var seq__77000__$1 = cljs.core.next(seq__77000);
var unit__$1 = first__77001;
var more = seq__77000__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.cons(clojure.string.capitalize(unit__$1),more));

}
}
});
metabase$lib$temporal_bucket$describe_temporal_unit = function(n,unit){
switch(arguments.length){
case 0:
return metabase$lib$temporal_bucket$describe_temporal_unit__0.call(this);
case 1:
return metabase$lib$temporal_bucket$describe_temporal_unit__1.call(this,n);
case 2:
return metabase$lib$temporal_bucket$describe_temporal_unit__2.call(this,n,unit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$temporal_bucket$describe_temporal_unit.cljs$core$IFn$_invoke$arity$0 = metabase$lib$temporal_bucket$describe_temporal_unit__0;
metabase$lib$temporal_bucket$describe_temporal_unit.cljs$core$IFn$_invoke$arity$1 = metabase$lib$temporal_bucket$describe_temporal_unit__1;
metabase$lib$temporal_bucket$describe_temporal_unit.cljs$core$IFn$_invoke$arity$2 = metabase$lib$temporal_bucket$describe_temporal_unit__2;
return metabase$lib$temporal_bucket$describe_temporal_unit;
})()
;
metabase.lib.temporal_bucket.TemporalIntervalAmount = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"last","last",1105735132),new cljs.core.Keyword(null,"next","next",-117701485)], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null);
metabase.lib.temporal_bucket.interval_n__GT_int = (function metabase$lib$temporal_bucket$interval_n__GT_int(n){
if(typeof n === 'number'){
return n;
} else {
var G__77004 = n;
var G__77004__$1 = (((G__77004 instanceof cljs.core.Keyword))?G__77004.fqn:null);
switch (G__77004__$1) {
case "current":
return (0);

break;
case "next":
return (1);

break;
case "last":
return (-1);

break;
default:
return (0);

}
}
});
/**
 * Inputs: [n :- TemporalIntervalAmount unit :- [:maybe :keyword]]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Get a translated description of a temporal bucketing interval. If unit is unspecified, assume `:day`.
 */
metabase.lib.temporal_bucket.describe_temporal_interval = (function metabase$lib$temporal_bucket$describe_temporal_interval(n,unit){
var n__$1 = metabase.lib.temporal_bucket.interval_n__GT_int(n);
var unit__$1 = (function (){var or__5002__auto__ = unit;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"day","day",-274800446);
}
})();
if((n__$1 === (0))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit__$1,new cljs.core.Keyword(null,"day","day",-274800446))){
return metabase.shared.util.i18n.js_i18n("Today");
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("This {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1(unit__$1)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit__$1,new cljs.core.Keyword(null,"day","day",-274800446))){
return metabase.shared.util.i18n.js_i18n("Tomorrow");
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Next {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1(unit__$1)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(-1))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit__$1,new cljs.core.Keyword(null,"day","day",-274800446))){
return metabase.shared.util.i18n.js_i18n("Yesterday");
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Previous {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1(unit__$1)], 0));
}
} else {
if((n__$1 < (0))){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Previous {0} {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.abs(n__$1),metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2(cljs.core.abs(n__$1),unit__$1)], 0));
} else {
if((n__$1 > (0))){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Next {0} {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2(n__$1,unit__$1)], 0));
} else {
return null;
}
}
}
}
}
});
/**
 * Inputs: [n :- TemporalIntervalAmount unit :- [:maybe :keyword]]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Get a translated description of a relative datetime interval, ported from
 *  `frontend/src/metabase-lib/queries/utils/query-time.js`.
 * 
 *   e.g. if the relative interval is `-1 days`, then `n` = `-1` and `unit` = `:day`.
 * 
 *   If `:unit` is unspecified, assume `:day`.
 */
metabase.lib.temporal_bucket.describe_relative_datetime = (function metabase$lib$temporal_bucket$describe_relative_datetime(n,unit){
var n__$1 = metabase.lib.temporal_bucket.interval_n__GT_int(n);
var unit__$1 = (function (){var or__5002__auto__ = unit;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"day","day",-274800446);
}
})();
if((n__$1 === (0))){
return metabase.shared.util.i18n.js_i18n("Now");
} else {
if((n__$1 < (0))){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} {1} ago",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.abs(n__$1),clojure.string.lower_case(metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2(cljs.core.abs(n__$1),unit__$1))], 0));
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} {1} from now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,clojure.string.lower_case(metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2(n__$1,unit__$1))], 0));

}
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.temporal_bucket !== 'undefined') && (typeof metabase.lib.temporal_bucket.with_temporal_bucket_method !== 'undefined')){
} else {
/**
 * Implementation for [[temporal-bucket]]. Implement this to tell [[temporal-bucket]] how to add a bucket to a
 *   particular MBQL clause.
 */
metabase.lib.temporal_bucket.with_temporal_bucket_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77016 = cljs.core.get_global_hierarchy;
return (fexpr__77016.cljs$core$IFn$_invoke$arity$0 ? fexpr__77016.cljs$core$IFn$_invoke$arity$0() : fexpr__77016.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.temporal-bucket","with-temporal-bucket-method"),(function (x,_unit){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
/**
 * Inputs: [x option-or-unit :- [:maybe [:or :metabase.lib.schema.temporal-bucketing/option :metabase.lib.schema.temporal-bucketing/unit]]]
 *   Return: :any
 *        
 * 
 *   Add a temporal bucketing unit, e.g. `:day` or `:day-of-year`, to an MBQL clause or something that can be converted to
 *   an MBQL clause. E.g. for a Field or Field metadata or `:field` clause, this might do something like this:
 * 
 *  (temporal some-field :day)
 * 
 *  =>
 * 
 *  [:field 1 {:temporal-unit :day}]
 * 
 *   Pass a `nil` `unit` to remove the temporal bucket.
 */
metabase.lib.temporal_bucket.with_temporal_bucket = (function metabase$lib$temporal_bucket$with_temporal_bucket(x,option_or_unit){
return metabase.lib.temporal_bucket.with_temporal_bucket_method.cljs$core$IFn$_invoke$arity$2(x,(function (){var G__77018 = option_or_unit;
if((!((option_or_unit instanceof cljs.core.Keyword)))){
return new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__77018);
} else {
return G__77018;
}
})());
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.temporal_bucket !== 'undefined') && (typeof metabase.lib.temporal_bucket.temporal_bucket_method !== 'undefined')){
} else {
/**
 * Implementation of [[temporal-bucket]]. Return the current temporal bucketing unit associated with `x`.
 */
metabase.lib.temporal_bucket.temporal_bucket_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77025 = cljs.core.get_global_hierarchy;
return (fexpr__77025.cljs$core$IFn$_invoke$arity$0 ? fexpr__77025.cljs$core$IFn$_invoke$arity$0() : fexpr__77025.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.temporal-bucket","temporal-bucket-method"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.temporal_bucket.temporal_bucket_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_x){
return null;
}));
metabase.lib.temporal_bucket.temporal_bucket_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),(function (option){
return new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(option);
}));
/**
 * Inputs: [x]
 *   Return: [:maybe :metabase.lib.schema.temporal-bucketing/unit]
 *        
 * 
 *   Get the raw temporal bucketing `unit` associated with something e.g. a `:field` ref or a ColumnMetadata.
 */
metabase.lib.temporal_bucket.raw_temporal_bucket = (function metabase$lib$temporal_bucket$raw_temporal_bucket(x){
return metabase.lib.temporal_bucket.temporal_bucket_method.cljs$core$IFn$_invoke$arity$1(x);
});
/**
 * Inputs: [x]
 *   Return: [:maybe :metabase.lib.schema.temporal-bucketing/option]
 *        
 * 
 *   Get the current temporal bucketing option associated with something, if any.
 */
metabase.lib.temporal_bucket.temporal_bucket = (function metabase$lib$temporal_bucket$temporal_bucket(x){
var temp__5804__auto__ = metabase.lib.temporal_bucket.raw_temporal_bucket(x);
if(cljs.core.truth_(temp__5804__auto__)){
var unit = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
} else {
return null;
}
});
/**
 * Options that are technically legal in MBQL, but that should be hidden in the UI.
 */
metabase.lib.temporal_bucket.hidden_bucketing_options = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"second","second",-444702010),null,new cljs.core.Keyword(null,"millisecond","millisecond",-540123566),null,new cljs.core.Keyword(null,"year-of-era","year-of-era",682445876),null,new cljs.core.Keyword(null,"second-of-minute","second-of-minute",222734326),null], null), null);
/**
 * The temporal bucketing options for time type expressions.
 */
metabase.lib.temporal_bucket.time_bucket_options = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(metabase.lib.temporal_bucket.hidden_bucketing_options),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (unit){
var G__77028 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"hour","hour",-555989214))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77028,new cljs.core.Keyword(null,"default","default",-1987822328),true);
} else {
return G__77028;
}
}))),metabase.lib.schema.temporal_bucketing.ordered_time_bucketing_units);
/**
 * The temporal bucketing options for date type expressions.
 */
metabase.lib.temporal_bucket.date_bucket_options = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (unit){
var G__77030 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"day","day",-274800446))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77030,new cljs.core.Keyword(null,"default","default",-1987822328),true);
} else {
return G__77030;
}
}),metabase.lib.schema.temporal_bucketing.ordered_date_bucketing_units);
/**
 * The temporal bucketing units for datetime type expressions.
 */
metabase.lib.temporal_bucket.datetime_bucket_units = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(metabase.lib.temporal_bucket.hidden_bucketing_options),metabase.lib.schema.temporal_bucketing.ordered_datetime_bucketing_units);
/**
 * The temporal bucketing options for datetime type expressions.
 */
metabase.lib.temporal_bucket.datetime_bucket_options = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (unit){
var G__77034 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),new cljs.core.Keyword(null,"unit","unit",375175175),unit], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"day","day",-274800446))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77034,new cljs.core.Keyword(null,"default","default",-1987822328),true);
} else {
return G__77034;
}
}),metabase.lib.temporal_bucket.datetime_bucket_units);
/**
 * The temporal bucketing units for datetime type expressions.
 */
metabase.lib.temporal_bucket.available_temporal_units = (function metabase$lib$temporal_bucket$available_temporal_units(){
return metabase.lib.temporal_bucket.datetime_bucket_units;
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),(function (_query,_stage_number,p__77039,_style){
var map__77040 = p__77039;
var map__77040__$1 = cljs.core.__destructure_map(map__77040);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77040__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
return metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1(unit);
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("option","temporal-bucketing","option/temporal-bucketing",-108914562),(function (query,stage_number,option){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,option),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),metabase.util.qualified_name(metabase.lib.temporal_bucket.raw_temporal_bucket(option)),new cljs.core.Keyword(null,"is-temporal-extraction","is-temporal-extraction",-1029608872),(function (){var bucket = metabase.lib.temporal_bucket.raw_temporal_bucket(option);
return ((cljs.core.contains_QMARK_(metabase.lib.schema.temporal_bucketing.datetime_extraction_units,bucket)) && ((!(cljs.core.contains_QMARK_(metabase.lib.schema.temporal_bucketing.datetime_truncation_units,bucket)))));
})()], null),cljs.core.select_keys(option,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"selected","selected",574897764)], null))], 0));
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.temporal_bucket !== 'undefined') && (typeof metabase.lib.temporal_bucket.available_temporal_buckets_method !== 'undefined')){
} else {
/**
 * Implementation for [[available-temporal-buckets]]. Return a set of units from
 *   `:metabase.lib.schema.temporal-bucketing/unit` that are allowed to be used with `x`.
 */
metabase.lib.temporal_bucket.available_temporal_buckets_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77050 = cljs.core.get_global_hierarchy;
return (fexpr__77050.cljs$core$IFn$_invoke$arity$0 ? fexpr__77050.cljs$core$IFn$_invoke$arity$0() : fexpr__77050.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.temporal-bucket","available-temporal-buckets-method"),(function (_query,_stage_number,x){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.temporal_bucket.available_temporal_buckets_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_query,_stage_number,_x){
return cljs.core.PersistentHashSet.EMPTY;
}));
/**
 * Inputs: ([query x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x])
 *   Return: [:sequential [:ref :metabase.lib.schema.temporal-bucketing/option]]
 *        
 * 
 *   Get a set of available temporal bucketing units for `x`. Returns nil if no units are available.
 */
metabase.lib.temporal_bucket.available_temporal_buckets = (function() {
var metabase$lib$temporal_bucket$available_temporal_buckets = null;
var metabase$lib$temporal_bucket$available_temporal_buckets__2 = (function (query,x){
return (metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3(query,(-1),x) : metabase.lib.temporal_bucket.available_temporal_buckets.call(null,query,(-1),x));
});
var metabase$lib$temporal_bucket$available_temporal_buckets__3 = (function (query,stage_number,x){
return metabase.lib.temporal_bucket.available_temporal_buckets_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
});
metabase$lib$temporal_bucket$available_temporal_buckets = function(query,stage_number,x){
switch(arguments.length){
case 2:
return metabase$lib$temporal_bucket$available_temporal_buckets__2.call(this,query,stage_number);
case 3:
return metabase$lib$temporal_bucket$available_temporal_buckets__3.call(this,query,stage_number,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$temporal_bucket$available_temporal_buckets.cljs$core$IFn$_invoke$arity$2 = metabase$lib$temporal_bucket$available_temporal_buckets__2;
metabase$lib$temporal_bucket$available_temporal_buckets.cljs$core$IFn$_invoke$arity$3 = metabase$lib$temporal_bucket$available_temporal_buckets__3;
return metabase$lib$temporal_bucket$available_temporal_buckets;
})()
;
/**
 * Inputs: [temporal-column temporal-value :- [:or :int :string]]
 *   Return: :string
 *        
 * 
 *   Return a string describing the temporal pair.
 * Used when comparing temporal values like `[:!= ... [:field {:temporal-unit :day-of-week} ...] "2022-01-01"]`
 */
metabase.lib.temporal_bucket.describe_temporal_pair = (function metabase$lib$temporal_bucket$describe_temporal_pair(temporal_column,temporal_value){
return metabase.shared.util.time.format_unit.cljs$core$IFn$_invoke$arity$2(temporal_value,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(metabase.lib.temporal_bucket.temporal_bucket(temporal_column)));
});

//# sourceMappingURL=metabase.lib.temporal_bucket.js.map
