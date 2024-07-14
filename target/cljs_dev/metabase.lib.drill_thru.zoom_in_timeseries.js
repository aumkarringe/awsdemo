var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.remove_replace.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.zoom_in_timeseries.js");

goog.provide('metabase.lib.drill_thru.zoom_in_timeseries');
metabase.lib.drill_thru.zoom_in_timeseries.valid_current_units = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"quarter","quarter",-508147616),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"week","week",-1326473278),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"minute","minute",-642875969)], null);
metabase.lib.drill_thru.zoom_in_timeseries.unit__GT_next_unit = cljs.core.zipmap(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(metabase.lib.drill_thru.zoom_in_timeseries.valid_current_units),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),metabase.lib.drill_thru.zoom_in_timeseries.valid_current_units));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int dimensions :- [:sequential :metabase.lib.schema.drill-thru/context.row.value]]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/context.row.value]
 */
metabase.lib.drill_thru.zoom_in_timeseries.matching_breakout_dimension = (function metabase$lib$drill_thru$zoom_in_timeseries$matching_breakout_dimension(query,stage_number,dimensions){
return cljs.core.first((function (){var iter__5480__auto__ = (function metabase$lib$drill_thru$zoom_in_timeseries$matching_breakout_dimension_$_iter__79475(s__79476){
return (new cljs.core.LazySeq(null,(function (){
var s__79476__$1 = s__79476;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79476__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var breakout = cljs.core.first(xs__6360__auto__);
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.util.clause_of_type_QMARK_(breakout,new cljs.core.Keyword(null,"field","field",-1302436500));
if(and__5000__auto__){
return metabase.lib.temporal_bucket.temporal_bucket(breakout);
} else {
return and__5000__auto__;
}
})())){
var iterys__5476__auto__ = ((function (s__79476__$1,breakout,xs__6360__auto__,temp__5804__auto__){
return (function metabase$lib$drill_thru$zoom_in_timeseries$matching_breakout_dimension_$_iter__79475_$_iter__79477(s__79478){
return (new cljs.core.LazySeq(null,((function (s__79476__$1,breakout,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__79478__$1 = s__79478;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__79478__$1);
if(temp__5804__auto____$1){
var s__79478__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79478__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79478__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79480 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79479 = (0);
while(true){
if((i__79479 < size__5479__auto__)){
var map__79488 = cljs.core._nth(c__5478__auto__,i__79479);
var map__79488__$1 = cljs.core.__destructure_map(map__79488);
var dimension = map__79488__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79488__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$2(breakout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column], null));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.temporal_bucket(breakout),metabase.lib.temporal_bucket.temporal_bucket(column));
} else {
return and__5000__auto__;
}
})())){
cljs.core.chunk_append(b__79480,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dimension,new cljs.core.Keyword(null,"column-ref","column-ref",2018188376),breakout));

var G__79521 = (i__79479 + (1));
i__79479 = G__79521;
continue;
} else {
var G__79522 = (i__79479 + (1));
i__79479 = G__79522;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79480),metabase$lib$drill_thru$zoom_in_timeseries$matching_breakout_dimension_$_iter__79475_$_iter__79477(cljs.core.chunk_rest(s__79478__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79480),null);
}
} else {
var map__79494 = cljs.core.first(s__79478__$2);
var map__79494__$1 = cljs.core.__destructure_map(map__79494);
var dimension = map__79494__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79494__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$2(breakout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column], null));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.temporal_bucket(breakout),metabase.lib.temporal_bucket.temporal_bucket(column));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dimension,new cljs.core.Keyword(null,"column-ref","column-ref",2018188376),breakout),metabase$lib$drill_thru$zoom_in_timeseries$matching_breakout_dimension_$_iter__79475_$_iter__79477(cljs.core.rest(s__79478__$2)));
} else {
var G__79523 = cljs.core.rest(s__79478__$2);
s__79478__$1 = G__79523;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__79476__$1,breakout,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__79476__$1,breakout,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(dimensions));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,metabase$lib$drill_thru$zoom_in_timeseries$matching_breakout_dimension_$_iter__79475(cljs.core.rest(s__79476__$1)));
} else {
var G__79524 = cljs.core.rest(s__79476__$1);
s__79476__$1 = G__79524;
continue;
}
} else {
var G__79525 = cljs.core.rest(s__79476__$1);
s__79476__$1 = G__79525;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2(query,stage_number));
})());
});
/**
 * Inputs: [column :- :metabase.lib.schema.metadata/column]
 *   Return: [:maybe :metabase.lib.schema.temporal-bucketing/unit.date-time.truncate]
 */
metabase.lib.drill_thru.zoom_in_timeseries.next_breakout_unit = (function metabase$lib$drill_thru$zoom_in_timeseries$next_breakout_unit(column){
var temp__5804__auto__ = metabase.lib.temporal_bucket.raw_temporal_bucket(column);
if(cljs.core.truth_(temp__5804__auto__)){
var current_unit = temp__5804__auto__;
if(cljs.core.contains_QMARK_(cljs.core.set(metabase.lib.drill_thru.zoom_in_timeseries.valid_current_units),current_unit)){
return (metabase.lib.drill_thru.zoom_in_timeseries.unit__GT_next_unit.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.drill_thru.zoom_in_timeseries.unit__GT_next_unit.cljs$core$IFn$_invoke$arity$1(current_unit) : metabase.lib.drill_thru.zoom_in_timeseries.unit__GT_next_unit.call(null,current_unit));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [unit :- :metabase.lib.schema.drill-thru/drill-thru.zoom-in.timeseries.next-unit]
 *   Return: :metabase.lib.schema.common/non-blank-string
 */
metabase.lib.drill_thru.zoom_in_timeseries.describe_next_unit = (function metabase$lib$drill_thru$zoom_in_timeseries$describe_next_unit(unit){
var G__79508 = unit;
var G__79508__$1 = (((G__79508 instanceof cljs.core.Keyword))?G__79508.fqn:null);
switch (G__79508__$1) {
case "quarter":
return metabase.shared.util.i18n.js_i18n("See this year by quarter");

break;
case "month":
return metabase.shared.util.i18n.js_i18n("See this quarter by month");

break;
case "week":
return metabase.shared.util.i18n.js_i18n("See this month by week");

break;
case "day":
return metabase.shared.util.i18n.js_i18n("See this week by day");

break;
case "hour":
return metabase.shared.util.i18n.js_i18n("See this day by hour");

break;
case "minute":
return metabase.shared.util.i18n.js_i18n("See this hour by minute");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79508__$1)].join('')));

}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [dimensions], :as _context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.zoom-in.timeseries]
 *        
 * 
 *   Zooms in on some window, showing it in finer detail.
 * 
 *   For example: The month of a year, days or weeks of a quarter, smaller lat/long regions, etc.
 * 
 *   This is different from the `:drill-thru/zoom` type, which is for showing the details of a single object.
 */
metabase.lib.drill_thru.zoom_in_timeseries.zoom_in_timeseries_drill = (function metabase$lib$drill_thru$zoom_in_timeseries$zoom_in_timeseries_drill(query,stage_number,p__79512){
var map__79513 = p__79512;
var map__79513__$1 = cljs.core.__destructure_map(map__79513);
var _context = map__79513__$1;
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79513__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number);
if(and__5000__auto__){
return cljs.core.not_empty(dimensions);
} else {
return and__5000__auto__;
}
})())){
var temp__5804__auto__ = metabase.lib.drill_thru.zoom_in_timeseries.matching_breakout_dimension(query,stage_number,dimensions);
if(cljs.core.truth_(temp__5804__auto__)){
var map__79514 = temp__5804__auto__;
var map__79514__$1 = cljs.core.__destructure_map(map__79514);
var dimension = map__79514__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79514__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(value)){
var temp__5804__auto____$1 = metabase.lib.drill_thru.zoom_in_timeseries.next_breakout_unit(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(dimension));
if(cljs.core.truth_(temp__5804__auto____$1)){
var next_unit = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.drill_thru.zoom_in_timeseries.describe_next_unit(next_unit),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","zoom-in.timeseries","drill-thru/zoom-in.timeseries",-168450975),new cljs.core.Keyword(null,"dimension","dimension",543254198),dimension,new cljs.core.Keyword(null,"next-unit","next-unit",166270362),next_unit], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","zoom-in.timeseries","drill-thru/zoom-in.timeseries",-168450975),(function (query,stage_number,p__79516){
var map__79517 = p__79516;
var map__79517__$1 = cljs.core.__destructure_map(map__79517);
var dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79517__$1,new cljs.core.Keyword(null,"dimension","dimension",543254198));
var next_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79517__$1,new cljs.core.Keyword(null,"next-unit","next-unit",166270362));
var map__79518 = dimension;
var map__79518__$1 = cljs.core.__destructure_map(map__79518);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79518__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79518__$1,new cljs.core.Keyword(null,"value","value",305978217));
var old_breakout = new cljs.core.Keyword(null,"column-ref","column-ref",2018188376).cljs$core$IFn$_invoke$arity$1(dimension);
var new_breakout = metabase.lib.temporal_bucket.with_temporal_bucket(old_breakout,next_unit);
return metabase.lib.remove_replace.replace_clause.cljs$core$IFn$_invoke$arity$4(metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.filter._EQ_(column,value)),stage_number,old_breakout,new_breakout);
}));

//# sourceMappingURL=metabase.lib.drill_thru.zoom_in_timeseries.js.map
