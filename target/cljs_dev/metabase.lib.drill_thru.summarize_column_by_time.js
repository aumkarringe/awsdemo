var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.schema.util.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.types.isa.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.summarize_column_by_time.js");

goog.provide('metabase.lib.drill_thru.summarize_column_by_time');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column value]} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.summarize-column-by-time]
 *        
 * 
 *   A breakout summarizing a column over time.
 *   Separate from single-value [[summarize-column-drill]] for sum, average, and distinct value count.
 */
metabase.lib.drill_thru.summarize_column_by_time.summarize_column_by_time_drill = (function metabase$lib$drill_thru$summarize_column_by_time$summarize_column_by_time_drill(query,stage_number,p__79422){
var map__79423 = p__79422;
var map__79423__$1 = cljs.core.__destructure_map(map__79423);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79423__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79423__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number);
if(and__5000__auto__){
var and__5000__auto____$1 = column;
if(cljs.core.truth_(and__5000__auto____$1)){
return (((value == null)) && ((((!(metabase.lib.types.isa.structured_QMARK_(column)))) && (((metabase.lib.types.isa.summable_QMARK_(column)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var temp__5804__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.temporal_QMARK_,metabase.lib.breakout.breakoutable_columns.cljs$core$IFn$_invoke$arity$2(query,stage_number));
if(cljs.core.truth_(temp__5804__auto__)){
var breakout_column = temp__5804__auto__;
var temp__5804__auto____$1 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3(query,stage_number,breakout_column));
if(cljs.core.truth_(temp__5804__auto____$1)){
var bucketing_unit = temp__5804__auto____$1;
var bucketed = metabase.lib.temporal_bucket.with_temporal_bucket(breakout_column,bucketing_unit);
if(cljs.core.truth_(metabase.lib.schema.util.distinct_refs_QMARK_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,cljs.core.cons(bucketed,metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2(query,stage_number)))))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","summarize-column-by-time","drill-thru/summarize-column-by-time",-765720821),new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"breakout","breakout",-732419050),breakout_column,new cljs.core.Keyword(null,"unit","unit",375175175),metabase.lib.temporal_bucket.raw_temporal_bucket(bucketing_unit)], null);
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
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","summarize-column-by-time","drill-thru/summarize-column-by-time",-765720821),(function() { 
var G__79430__delegate = function (query,stage_number,p__79424,_){
var map__79425 = p__79424;
var map__79425__$1 = cljs.core.__destructure_map(map__79425);
var _drill_thru = map__79425__$1;
var breakout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79425__$1,new cljs.core.Keyword(null,"breakout","breakout",-732419050));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79425__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79425__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var bucketed = metabase.lib.temporal_bucket.with_temporal_bucket(breakout,unit);
return metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$3(metabase.lib.aggregation.aggregate.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.aggregation.sum(column)),stage_number,bucketed);
};
var G__79430 = function (query,stage_number,p__79424,var_args){
var _ = null;
if (arguments.length > 3) {
var G__79431__i = 0, G__79431__a = new Array(arguments.length -  3);
while (G__79431__i < G__79431__a.length) {G__79431__a[G__79431__i] = arguments[G__79431__i + 3]; ++G__79431__i;}
  _ = new cljs.core.IndexedSeq(G__79431__a,0,null);
} 
return G__79430__delegate.call(this,query,stage_number,p__79424,_);};
G__79430.cljs$lang$maxFixedArity = 3;
G__79430.cljs$lang$applyTo = (function (arglist__79432){
var query = cljs.core.first(arglist__79432);
arglist__79432 = cljs.core.next(arglist__79432);
var stage_number = cljs.core.first(arglist__79432);
arglist__79432 = cljs.core.next(arglist__79432);
var p__79424 = cljs.core.first(arglist__79432);
var _ = cljs.core.rest(arglist__79432);
return G__79430__delegate(query,stage_number,p__79424,_);
});
G__79430.cljs$core$IFn$_invoke$arity$variadic = G__79430__delegate;
return G__79430;
})()
);

//# sourceMappingURL=metabase.lib.drill_thru.summarize_column_by_time.js.map
