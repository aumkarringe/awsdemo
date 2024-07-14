var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.drill_thru.underlying_records.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.automatic_insights.js");

goog.provide('metabase.lib.drill_thru.automatic_insights');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column column-ref dimensions value]} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru]
 *        
 * 
 *   Automatic insights appears:
 *   - When clicking on a value with a breakout - eg. a point in a time series, a cell of a table, a bar or pie slice
 *   - Or when clicking a pivot cell, with a value but no column.
 *   - Or when clicking a chart legend, in which case there's no column or value set.
 *   - There must be at least 1 breakout
 *   - X-rays must be enabled (check the settings)
 * 
 *   There are two forms: X-ray, and "Compare to the rest". This is a simple user choice and does not need extra data.
 */
metabase.lib.drill_thru.automatic_insights.automatic_insights_drill = (function metabase$lib$drill_thru$automatic_insights$automatic_insights_drill(query,stage_number,p__79104){
var map__79105 = p__79104;
var map__79105__$1 = cljs.core.__destructure_map(map__79105);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79105__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var column_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79105__$1,new cljs.core.Keyword(null,"column-ref","column-ref",2018188376));
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79105__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79105__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number);
if(and__5000__auto__){
var and__5000__auto____$1 = ((cljs.core.not(column)) || ((!((value == null)))));
if(and__5000__auto____$1){
var and__5000__auto____$2 = metabase.lib.metadata.setting(query,new cljs.core.Keyword(null,"enable-xrays","enable-xrays",710604294));
if(cljs.core.truth_(and__5000__auto____$2)){
return cljs.core.not_empty(dimensions);
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","automatic-insights","drill-thru/automatic-insights",10252211),new cljs.core.Keyword(null,"column-ref","column-ref",2018188376),column_ref,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),dimensions], null);
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","automatic-insights","drill-thru/automatic-insights",10252211),(function() { 
var G__79106__delegate = function (query,_stage_number,drill_thru,_){
return metabase.lib.drill_thru.underlying_records.drill_underlying_records(metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,(-1),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filters","filters",974726919)], 0)),drill_thru);
};
var G__79106 = function (query,_stage_number,drill_thru,var_args){
var _ = null;
if (arguments.length > 3) {
var G__79107__i = 0, G__79107__a = new Array(arguments.length -  3);
while (G__79107__i < G__79107__a.length) {G__79107__a[G__79107__i] = arguments[G__79107__i + 3]; ++G__79107__i;}
  _ = new cljs.core.IndexedSeq(G__79107__a,0,null);
} 
return G__79106__delegate.call(this,query,_stage_number,drill_thru,_);};
G__79106.cljs$lang$maxFixedArity = 3;
G__79106.cljs$lang$applyTo = (function (arglist__79108){
var query = cljs.core.first(arglist__79108);
arglist__79108 = cljs.core.next(arglist__79108);
var _stage_number = cljs.core.first(arglist__79108);
arglist__79108 = cljs.core.next(arglist__79108);
var drill_thru = cljs.core.first(arglist__79108);
var _ = cljs.core.rest(arglist__79108);
return G__79106__delegate(query,_stage_number,drill_thru,_);
});
G__79106.cljs$core$IFn$_invoke$arity$variadic = G__79106__delegate;
return G__79106;
})()
);

//# sourceMappingURL=metabase.lib.drill_thru.automatic_insights.js.map
