var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.combine_columns.js");

goog.provide('metabase.lib.drill_thru.combine_columns');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column value]} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.combine-columns]
 *        
 * 
 *   Column clicks on string columns.
 * 
 *   Might add a stage, like `:drill-thru/column-filter` does, if the current stage has aggregations.
 */
metabase.lib.drill_thru.combine_columns.combine_columns_drill = (function metabase$lib$drill_thru$combine_columns$combine_columns_drill(query,stage_number,p__79031){
var map__79032 = p__79031;
var map__79032__$1 = cljs.core.__destructure_map(map__79032);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79032__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79032__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = column;
if(cljs.core.truth_(and__5000__auto__)){
return (((value == null)) && (((metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number)) && (metabase.lib.types.isa.string_QMARK_(column)))));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","combine-columns","drill-thru/combine-columns",1186046282),new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","combine-columns","drill-thru/combine-columns",1186046282),(function() { 
var G__79038__delegate = function (_query,_stage_number,_drill,_args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Do not call drill-thru for combine-columns; add the expression directly",cljs.core.PersistentArrayMap.EMPTY);
};
var G__79038 = function (_query,_stage_number,_drill,var_args){
var _args = null;
if (arguments.length > 3) {
var G__79039__i = 0, G__79039__a = new Array(arguments.length -  3);
while (G__79039__i < G__79039__a.length) {G__79039__a[G__79039__i] = arguments[G__79039__i + 3]; ++G__79039__i;}
  _args = new cljs.core.IndexedSeq(G__79039__a,0,null);
} 
return G__79038__delegate.call(this,_query,_stage_number,_drill,_args);};
G__79038.cljs$lang$maxFixedArity = 3;
G__79038.cljs$lang$applyTo = (function (arglist__79040){
var _query = cljs.core.first(arglist__79040);
arglist__79040 = cljs.core.next(arglist__79040);
var _stage_number = cljs.core.first(arglist__79040);
arglist__79040 = cljs.core.next(arglist__79040);
var _drill = cljs.core.first(arglist__79040);
var _args = cljs.core.rest(arglist__79040);
return G__79038__delegate(_query,_stage_number,_drill,_args);
});
G__79038.cljs$core$IFn$_invoke$arity$variadic = G__79038__delegate;
return G__79038;
})()
);

//# sourceMappingURL=metabase.lib.drill_thru.combine_columns.js.map
