var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.summarize_column.js");

goog.provide('metabase.lib.drill_thru.summarize_column');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column value]} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.summarize-column]
 *        
 * 
 *   A set of possible aggregations that can summarize this column: distinct values, sum, average.
 *   Separate from [[summarize-column-by-time-drill]] which breaks out a column over time.
 */
metabase.lib.drill_thru.summarize_column.summarize_column_drill = (function metabase$lib$drill_thru$summarize_column$summarize_column_drill(query,stage_number,p__79413){
var map__79414 = p__79413;
var map__79414__$1 = cljs.core.__destructure_map(map__79414);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79414__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79414__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number);
if(and__5000__auto__){
var and__5000__auto____$1 = column;
if(cljs.core.truth_(and__5000__auto____$1)){
return (((value == null)) && ((((!(metabase.lib.types.isa.structured_QMARK_(column)))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))) && (cljs.core.not(metabase.lib.breakout.breakout_column_QMARK_(query,stage_number,column))))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var aggregation_ops = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"distinct","distinct",-1788879121)], null),((metabase.lib.types.isa.summable_QMARK_(column))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"avg","avg",197406200)], null):null));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","summarize-column","drill-thru/summarize-column",-156285576),new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"aggregations","aggregations",-1081114338),aggregation_ops], null);
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","summarize-column","drill-thru/summarize-column",-156285576),(function (_query,_stage_number,p__79415){
var map__79416 = p__79415;
var map__79416__$1 = cljs.core.__destructure_map(map__79416);
var aggregations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79416__$1,new cljs.core.Keyword(null,"aggregations","aggregations",-1081114338));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","summarize-column","drill-thru/summarize-column",-156285576),new cljs.core.Keyword(null,"aggregations","aggregations",-1081114338),aggregations], null);
}));
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","summarize-column","drill-thru/summarize-column",-156285576),(function (query,stage_number,p__79417,aggregation){
var map__79418 = p__79417;
var map__79418__$1 = cljs.core.__destructure_map(map__79418);
var _drill_thru = map__79418__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79418__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var aggregation_fn = (function (){var G__79419 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(aggregation);
var G__79419__$1 = (((G__79419 instanceof cljs.core.Keyword))?G__79419.fqn:null);
switch (G__79419__$1) {
case "distinct":
return metabase.lib.aggregation.distinct;

break;
case "sum":
return metabase.lib.aggregation.sum;

break;
case "avg":
return metabase.lib.aggregation.avg;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79419__$1)].join('')));

}
})();
return metabase.lib.aggregation.aggregate.cljs$core$IFn$_invoke$arity$3(query,stage_number,(aggregation_fn.cljs$core$IFn$_invoke$arity$1 ? aggregation_fn.cljs$core$IFn$_invoke$arity$1(column) : aggregation_fn.call(null,column)));
}));

//# sourceMappingURL=metabase.lib.drill_thru.summarize_column.js.map
