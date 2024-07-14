var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.stage.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.fk_filter.js");

goog.provide('metabase.lib.drill_thru.fk_filter');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column column-ref value], :as _context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.fk-filter]
 *        
 * 
 *   When clicking on a foreign key value, filter this query by that column.
 * 
 *   This has the same effect as the `=` filter on a generic field (ie. not a key), but renders differently.
 * 
 *   Contrast [[metabase.lib.drill-thru.object-details/object-detail-drill]], which shows the details of the foreign
 *   object.
 */
metabase.lib.drill_thru.fk_filter.fk_filter_drill = (function metabase$lib$drill_thru$fk_filter$fk_filter_drill(query,stage_number,p__79244){
var map__79245 = p__79244;
var map__79245__$1 = cljs.core.__destructure_map(map__79245);
var _context = map__79245__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79245__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var column_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79245__$1,new cljs.core.Keyword(null,"column-ref","column-ref",2018188376));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79245__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = column;
if(cljs.core.truth_(and__5000__auto__)){
return (((!((value == null)))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"null","null",-180137709))) && (((metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number)) && ((((!(metabase.lib.types.isa.primary_key_QMARK_(column)))) && (metabase.lib.types.isa.foreign_key_QMARK_(column)))))))));
} else {
return and__5000__auto__;
}
})())){
var source = (function (){var or__5002__auto__ = (function (){var G__79250 = query;
var G__79250__$1 = (((G__79250 == null))?null:metabase.lib.util.source_table_id(G__79250));
if((G__79250__$1 == null)){
return null;
} else {
return metabase.lib.metadata.table(query,G__79250__$1);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__79252 = query;
var G__79252__$1 = (((G__79252 == null))?null:metabase.lib.util.source_card_id(G__79252));
if((G__79252__$1 == null)){
return null;
} else {
return metabase.lib.metadata.card(query,G__79252__$1);
}
}
})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","fk-filter","drill-thru/fk-filter",1598101197),new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),cljs.core.PersistentArrayMap.EMPTY,column_ref,value], null)),new cljs.core.Keyword(null,"column-name","column-name",551523580),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,column,new cljs.core.Keyword(null,"long","long",-171452093)),new cljs.core.Keyword(null,"table-name","table-name",-2117866341),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,(0),source)], null);
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","fk-filter","drill-thru/fk-filter",1598101197),(function (_query,_stage_number,drill_thru){
return cljs.core.select_keys(drill_thru,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"column-name","column-name",551523580),new cljs.core.Keyword(null,"table-name","table-name",-2117866341)], null));
}));
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","fk-filter","drill-thru/fk-filter",1598101197),(function() { 
var G__79261__delegate = function (query,stage_number,drill_thru,_args){
var vec__79256 = ((metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number))?((cljs.core.seq(metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$2(query,stage_number)))?metabase.lib.stage.ensure_extra_stage(query,stage_number):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,stage_number], null)):(function (){var stage_number__$1 = metabase.lib.util.canonical_stage_index(query,stage_number);
var query__$1 = metabase.lib.util.ensure_mbql_final_stage(query);
var next_stage_number = metabase.lib.util.next_stage_number(query__$1,stage_number__$1);
if(cljs.core.truth_(metabase.lib.util.query_stage(query__$1,next_stage_number))){
} else {
throw (new Error(["Assert failed: ","Sanity check: there should be an additional stage by now","\n","(lib.util/query-stage query next-stage-number)"].join('')));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query__$1,next_stage_number], null);
})());
var query__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79256,(0),null);
var stage_number__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79256,(1),null);
return metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(query__$1,stage_number__$1,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(drill_thru));
};
var G__79261 = function (query,stage_number,drill_thru,var_args){
var _args = null;
if (arguments.length > 3) {
var G__79262__i = 0, G__79262__a = new Array(arguments.length -  3);
while (G__79262__i < G__79262__a.length) {G__79262__a[G__79262__i] = arguments[G__79262__i + 3]; ++G__79262__i;}
  _args = new cljs.core.IndexedSeq(G__79262__a,0,null);
} 
return G__79261__delegate.call(this,query,stage_number,drill_thru,_args);};
G__79261.cljs$lang$maxFixedArity = 3;
G__79261.cljs$lang$applyTo = (function (arglist__79263){
var query = cljs.core.first(arglist__79263);
arglist__79263 = cljs.core.next(arglist__79263);
var stage_number = cljs.core.first(arglist__79263);
arglist__79263 = cljs.core.next(arglist__79263);
var drill_thru = cljs.core.first(arglist__79263);
var _args = cljs.core.rest(arglist__79263);
return G__79261__delegate(query,stage_number,drill_thru,_args);
});
G__79261.cljs$core$IFn$_invoke$arity$variadic = G__79261__delegate;
return G__79261;
})()
);

//# sourceMappingURL=metabase.lib.drill_thru.fk_filter.js.map
