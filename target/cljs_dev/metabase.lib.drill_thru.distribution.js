var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.binning.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.distribution.js");

goog.provide('metabase.lib.drill_thru.distribution');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column value]} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.distribution]
 *        
 * 
 *   Select a column and see a histogram of how many rows fall into an automatic set of bins/buckets.
 *   - For dates, breaks out by month by default.
 *   - For numeric values, by an auto-selected set of bins
 *   - For strings, by each distinct value (which might be = the number of rows)
 */
metabase.lib.drill_thru.distribution.distribution_drill = (function metabase$lib$drill_thru$distribution$distribution_drill(query,stage_number,p__79094){
var map__79095 = p__79094;
var map__79095__$1 = cljs.core.__destructure_map(map__79095);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79095__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79095__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number);
if(and__5000__auto__){
var and__5000__auto____$1 = column;
if(cljs.core.truth_(and__5000__auto____$1)){
return (((value == null)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))) && ((((!(metabase.lib.types.isa.primary_key_QMARK_(column)))) && ((((!(metabase.lib.types.isa.structured_QMARK_(column)))) && ((((!(metabase.lib.types.isa.comment_QMARK_(column)))) && ((((!(metabase.lib.types.isa.description_QMARK_(column)))) && (cljs.core.not(metabase.lib.breakout.breakout_column_QMARK_(query,stage_number,column))))))))))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","distribution","drill-thru/distribution",1480876450),new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
return null;
}
});
metabase.lib.drill_thru.distribution.add_temporal_bucketing_or_binning = (function metabase$lib$drill_thru$distribution$add_temporal_bucketing_or_binning(column){
if(metabase.lib.types.isa.temporal_QMARK_(column)){
return metabase.lib.temporal_bucket.with_temporal_bucket(column,new cljs.core.Keyword(null,"month","month",-1960248533));
} else {
if(((metabase.lib.types.isa.numeric_QMARK_(column)) && ((!(metabase.lib.types.isa.foreign_key_QMARK_(column)))))){
return metabase.lib.binning.with_binning(column,metabase.lib.binning.default_auto_bin());
} else {
return column;

}
}
});
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","distribution","drill-thru/distribution",1480876450),(function (query,stage_number,p__79098){
var map__79099 = p__79098;
var map__79099__$1 = cljs.core.__destructure_map(map__79099);
var _drill_thru = map__79099__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79099__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number)){
var breakout = metabase.lib.drill_thru.distribution.add_temporal_bucketing_or_binning(column);
return metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$3(metabase.lib.aggregation.aggregate.cljs$core$IFn$_invoke$arity$3(metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.Keyword(null,"breakout","breakout",-732419050),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"order-by","order-by",1527318070)], 0)),stage_number,metabase.lib.aggregation.count.cljs$core$IFn$_invoke$arity$0()),stage_number,breakout);
} else {
return null;
}
}));

//# sourceMappingURL=metabase.lib.drill_thru.distribution.js.map
