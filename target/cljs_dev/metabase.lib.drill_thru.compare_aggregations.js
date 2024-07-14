var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.compare_aggregations.js");

goog.provide('metabase.lib.drill_thru.compare_aggregations');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column value]} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.compare-aggregations]
 *        
 * 
 *   Column clicks on aggregated columns.
 */
metabase.lib.drill_thru.compare_aggregations.compare_aggregations_drill = (function metabase$lib$drill_thru$compare_aggregations$compare_aggregations_drill(query,stage_number,p__79064){
var map__79065 = p__79064;
var map__79065__$1 = cljs.core.__destructure_map(map__79065);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79065__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79065__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = column;
if(cljs.core.truth_(and__5000__auto__)){
return (((value == null)) && (((metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))))));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","compare-aggregations","drill-thru/compare-aggregations",1851643583),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),metabase.lib.aggregation.resolve_aggregation(query,stage_number,new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581).cljs$core$IFn$_invoke$arity$1(column))], null);
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","compare-aggregations","drill-thru/compare-aggregations",1851643583),(function() { 
var G__79075__delegate = function (_query,_stage_number,_drill,_args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Do not call drill-thru for compare-aggregations; add the aggregations directly",cljs.core.PersistentArrayMap.EMPTY);
};
var G__79075 = function (_query,_stage_number,_drill,var_args){
var _args = null;
if (arguments.length > 3) {
var G__79076__i = 0, G__79076__a = new Array(arguments.length -  3);
while (G__79076__i < G__79076__a.length) {G__79076__a[G__79076__i] = arguments[G__79076__i + 3]; ++G__79076__i;}
  _args = new cljs.core.IndexedSeq(G__79076__a,0,null);
} 
return G__79075__delegate.call(this,_query,_stage_number,_drill,_args);};
G__79075.cljs$lang$maxFixedArity = 3;
G__79075.cljs$lang$applyTo = (function (arglist__79077){
var _query = cljs.core.first(arglist__79077);
arglist__79077 = cljs.core.next(arglist__79077);
var _stage_number = cljs.core.first(arglist__79077);
arglist__79077 = cljs.core.next(arglist__79077);
var _drill = cljs.core.first(arglist__79077);
var _args = cljs.core.rest(arglist__79077);
return G__79075__delegate(_query,_stage_number,_drill,_args);
});
G__79075.cljs$core$IFn$_invoke$arity$variadic = G__79075__delegate;
return G__79075;
})()
);

//# sourceMappingURL=metabase.lib.drill_thru.compare_aggregations.js.map
