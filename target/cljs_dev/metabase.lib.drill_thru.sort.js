var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.order_by.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.schema.order_by.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.sort.js");

goog.provide('metabase.lib.drill_thru.sort');
/**
 * Is `column-ref` orderable? (Does it appear in [[lib.order-by/orderable-columns]]?)
 */
metabase.lib.drill_thru.sort.orderable_column_QMARK_ = (function metabase$lib$drill_thru$sort$orderable_column_QMARK_(query,stage_number,column_ref){
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,column_ref,metabase.lib.order_by.orderable_columns.cljs$core$IFn$_invoke$arity$2(query,stage_number));
});
/**
 * Inputs: [query stage-number column]
 *   Return: [:maybe :metabase.lib.schema.order-by/order-by]
 */
metabase.lib.drill_thru.sort.existing_order_by_clause = (function metabase$lib$drill_thru$sort$existing_order_by_clause(query,stage_number,column){
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p__79433){
var vec__79434 = p__79433;
var _direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79434,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79434,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79434,(2),null);
var _asc_or_desc_clause = vec__79434;
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,expr,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column], null));
}),metabase.lib.order_by.order_bys.cljs$core$IFn$_invoke$arity$2(query,stage_number));
});
/**
 * Inputs: [query stage-number column]
 *   Return: [:maybe :metabase.lib.schema.order-by/direction]
 */
metabase.lib.drill_thru.sort.existing_order_by_direction = (function metabase$lib$drill_thru$sort$existing_order_by_direction(query,stage_number,column){
var temp__5804__auto__ = metabase.lib.drill_thru.sort.existing_order_by_clause(query,stage_number,column);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__79437 = temp__5804__auto__;
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79437,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79437,(1),null);
var _expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79437,(2),null);
return direction;
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column column-ref value], :as _context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.sort]
 *        
 * 
 *   Sorting on a clicked column.
 */
metabase.lib.drill_thru.sort.sort_drill = (function metabase$lib$drill_thru$sort$sort_drill(query,stage_number,p__79441){
var map__79443 = p__79441;
var map__79443__$1 = cljs.core.__destructure_map(map__79443);
var _context = map__79443__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79443__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var column_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79443__$1,new cljs.core.Keyword(null,"column-ref","column-ref",2018188376));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79443__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number);
if(and__5000__auto__){
var and__5000__auto____$1 = column;
if(cljs.core.truth_(and__5000__auto____$1)){
return (((value == null)) && ((!(metabase.lib.types.isa.structured_QMARK_(column)))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
if(cljs.core.truth_(metabase.lib.drill_thru.sort.orderable_column_QMARK_(query,stage_number,column_ref))){
var existing_direction = metabase.lib.drill_thru.sort.existing_order_by_direction(query,stage_number,column);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","sort","drill-thru/sort",511059541),new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"sort-directions","sort-directions",300459345),(function (){var G__79447 = existing_direction;
var G__79447__$1 = (((G__79447 instanceof cljs.core.Keyword))?G__79447.fqn:null);
switch (G__79447__$1) {
case "asc":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764)], null);

break;
case "desc":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword(null,"desc","desc",2093485764)], null);

}
})()], null);
} else {
return null;
}
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","sort","drill-thru/sort",511059541),(function() {
var G__79458 = null;
var G__79458__3 = (function (query,stage_number,drill){
return metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,drill,new cljs.core.Keyword(null,"asc","asc",356854569));
});
var G__79458__4 = (function (query,stage_number,p__79448,direction){
var map__79449 = p__79448;
var map__79449__$1 = cljs.core.__destructure_map(map__79449);
var _drill = map__79449__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79449__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$4(metabase.lib.order_by.remove_all_order_bys.cljs$core$IFn$_invoke$arity$2(query,stage_number),stage_number,column,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(direction));
});
G__79458 = function(query,stage_number,p__79448,direction){
switch(arguments.length){
case 3:
return G__79458__3.call(this,query,stage_number,p__79448);
case 4:
return G__79458__4.call(this,query,stage_number,p__79448,direction);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__79458.cljs$core$IFn$_invoke$arity$3 = G__79458__3;
G__79458.cljs$core$IFn$_invoke$arity$4 = G__79458__4;
return G__79458;
})()
);
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","sort","drill-thru/sort",511059541),(function (_query,_stage_number,p__79450){
var map__79451 = p__79450;
var map__79451__$1 = cljs.core.__destructure_map(map__79451);
var directions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79451__$1,new cljs.core.Keyword(null,"sort-directions","sort-directions",300459345));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","sort","drill-thru/sort",511059541),new cljs.core.Keyword(null,"directions","directions",-1110547766),directions], null);
}));

//# sourceMappingURL=metabase.lib.drill_thru.sort.js.map
