var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.schema.metadata.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.pivot.js");

goog.provide('metabase.lib.drill_thru.pivot');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column value]} :- :metabase.lib.schema.drill-thru/context field-pred :- [:=> [:cat [:schema :metabase.lib.schema.metadata/column]] boolean?]]
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Implementation for pivoting on various kinds of fields.
 * 
 *   Don't call this directly; call [[pivot-drill]].
 */
metabase.lib.drill_thru.pivot.pivot_drill_pred = (function metabase$lib$drill_thru$pivot$pivot_drill_pred(query,stage_number,p__79298,field_pred){
var map__79299 = p__79298;
var map__79299__$1 = cljs.core.__destructure_map(map__79299);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79299__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79299__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number);
if(and__5000__auto__){
var and__5000__auto____$1 = column;
if(cljs.core.truth_(and__5000__auto____$1)){
return (((!((value == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(field_pred,metabase.lib.breakout.breakoutable_columns.cljs$core$IFn$_invoke$arity$2(query,stage_number));
} else {
return null;
}
});
metabase.lib.drill_thru.pivot.pivot_type_predicates = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.category_QMARK_,cljs.core.complement(metabase.lib.types.isa.address_QMARK_)),new cljs.core.Keyword(null,"location","location",1815599388),metabase.lib.types.isa.address_QMARK_,new cljs.core.Keyword(null,"time","time",1385887882),metabase.lib.types.isa.temporal_QMARK_], null);
metabase.lib.drill_thru.pivot.breakout_type = (function metabase$lib$drill_thru$pivot$breakout_type(query,stage_number,breakout){
var column = metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,breakout);
if(metabase.lib.types.isa.temporal_QMARK_(column)){
return new cljs.core.Keyword(null,"date","date",-1463434462);
} else {
if(metabase.lib.types.isa.address_QMARK_(column)){
return new cljs.core.Keyword(null,"address","address",559499426);
} else {
if(metabase.lib.types.isa.category_QMARK_(column)){
return new cljs.core.Keyword(null,"category","category",-593092832);
} else {
return null;
}
}
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int]
 *   Return: [:maybe [:set :metabase.lib.schema.drill-thru/pivot-types]]
 *        
 * 
 *   This captures some complex conditions formerly encoded by `visualizations/click-actions/Mode/*` in the FE.
 *   See [here](https://github.com/metabase/metabase/blob/f4415fec8563353615ef600f52de871507a052ec/frontend/src/metabase/visualizations/click-actions/Mode/utils.ts#L15)
 *   for the original logic. (It returns `MODE_TYPE_*` enums, which are referenced below.)
 *   Pivot drills are only available in certain conditions, like all drills: structured queries with aggregation(s), when
 *   clicking a specific cell.
 *   - No breakouts: any pivot is permitted. (`metric` mode)
 *   - Exactly one date breakout, with an optional category breakout: no `:time` pivot. (`timeseries` mode)
 *   - Exactly one breakout and it's an address: no `:location` pivot. (`geo` mode)
 *   - One or two category breakouts: no `:location` pivot. (`pivot` mode)
 *   - If all these conditions fail, no pivots are allowed and the pivot drill should not be returned.
 * 
 *   This function encodes all these rules, returning a (possibly emtpy) set of permitted types.
 */
metabase.lib.drill_thru.pivot.permitted_pivot_types = (function metabase$lib$drill_thru$pivot$permitted_pivot_types(query,stage_number){
var G__79301 = cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79300_SHARP_){
return metabase.lib.drill_thru.pivot.breakout_type(query,stage_number,p1__79300_SHARP_);
}),metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2(query,stage_number)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),(1)], null),G__79301)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),null,new cljs.core.Keyword(null,"location","location",1815599388),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date","date",-1463434462),(1),new cljs.core.Keyword(null,"category","category",-593092832),(1)], null),G__79301)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),null,new cljs.core.Keyword(null,"location","location",1815599388),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"address","address",559499426),(1)], null),G__79301)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),null,new cljs.core.Keyword(null,"time","time",1385887882),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__79301)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"category","category",-593092832),null,new cljs.core.Keyword(null,"time","time",1385887882),null,new cljs.core.Keyword(null,"location","location",1815599388),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),(1)], null),G__79301)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),null,new cljs.core.Keyword(null,"time","time",1385887882),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"category","category",-593092832),(2)], null),G__79301)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"category","category",-593092832),null,new cljs.core.Keyword(null,"time","time",1385887882),null], null), null);
} else {
return cljs.core.PersistentHashSet.EMPTY;

}
}
}
}
}
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column dimensions value], :as context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.pivot]
 *        
 * 
 *   Return all possible pivoting options on the given column and value.
 * 
 *   See `:pivots` key, which holds a map `{t [breakouts...]}` where `t` is `:category`, `:location`, or `:time`.
 *   If a key is missing, there are no breakouts of that kind.
 */
metabase.lib.drill_thru.pivot.pivot_drill = (function metabase$lib$drill_thru$pivot$pivot_drill(query,stage_number,p__79302){
var map__79303 = p__79302;
var map__79303__$1 = cljs.core.__destructure_map(map__79303);
var context = map__79303__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79303__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79303__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79303__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number);
if(and__5000__auto__){
var and__5000__auto____$1 = column;
if(cljs.core.truth_(and__5000__auto____$1)){
return (((!((value == null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))) && ((cljs.core.count(metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$2(query,stage_number)) > (0))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var breakout_pivot_types = metabase.lib.drill_thru.pivot.permitted_pivot_types(query,stage_number);
var pivots = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$lib$drill_thru$pivot$pivot_drill_$_iter__79304(s__79305){
return (new cljs.core.LazySeq(null,(function (){
var s__79305__$1 = s__79305;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79305__$1);
if(temp__5804__auto__){
var s__79305__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79305__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79305__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79307 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79306 = (0);
while(true){
if((i__79306 < size__5479__auto__)){
var pivot_type = cljs.core._nth(c__5478__auto__,i__79306);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.lib.drill_thru.pivot.pivot_type_predicates,pivot_type);
var columns = metabase.lib.drill_thru.pivot.pivot_drill_pred(query,stage_number,context,pred);
if(cljs.core.truth_(cljs.core.not_empty(columns))){
cljs.core.chunk_append(b__79307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pivot_type,columns], null));

var G__79316 = (i__79306 + (1));
i__79306 = G__79316;
continue;
} else {
var G__79317 = (i__79306 + (1));
i__79306 = G__79317;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79307),metabase$lib$drill_thru$pivot$pivot_drill_$_iter__79304(cljs.core.chunk_rest(s__79305__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79307),null);
}
} else {
var pivot_type = cljs.core.first(s__79305__$2);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.lib.drill_thru.pivot.pivot_type_predicates,pivot_type);
var columns = metabase.lib.drill_thru.pivot.pivot_drill_pred(query,stage_number,context,pred);
if(cljs.core.truth_(cljs.core.not_empty(columns))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pivot_type,columns], null),metabase$lib$drill_thru$pivot$pivot_drill_$_iter__79304(cljs.core.rest(s__79305__$2)));
} else {
var G__79318 = cljs.core.rest(s__79305__$2);
s__79305__$1 = G__79318;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(breakout_pivot_types);
})());
if(cljs.core.empty_QMARK_(pivots)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","pivot","drill-thru/pivot",-1038336574),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),dimensions,new cljs.core.Keyword(null,"pivots","pivots",90109371),pivots], null);
}
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","pivot","drill-thru/pivot",-1038336574),(function (_query,_stage_number,drill_thru){
return cljs.core.select_keys(drill_thru,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"many-pks?","many-pks?",-459675021),new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword(null,"type","type",1174270348)], null));
}));
/**
 * Inputs: [drill-thru :- [:and :metabase.lib.schema.drill-thru/drill-thru [:map [:type [:= :drill-thru/pivot]]]]]
 *   Return: [:sequential :metabase.lib.schema.drill-thru/pivot-types]
 *        
 * 
 *   A helper for the FE. Returns the set of pivot types (category, location, time) that apply to this drill-thru.
 */
metabase.lib.drill_thru.pivot.pivot_types = (function metabase$lib$drill_thru$pivot$pivot_types(drill_thru){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"pivots","pivots",90109371).cljs$core$IFn$_invoke$arity$1(drill_thru)));
});
/**
 * Inputs: [drill-thru :- [:and :metabase.lib.schema.drill-thru/drill-thru [:map [:type [:= :drill-thru/pivot]]]] pivot-type :- :metabase.lib.schema.drill-thru/pivot-types]
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   A helper for the FE. Returns all the columns of the given type which can be used to pivot the query.
 */
metabase.lib.drill_thru.pivot.pivot_columns_for_type = (function metabase$lib$drill_thru$pivot$pivot_columns_for_type(drill_thru,pivot_type){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(drill_thru,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pivots","pivots",90109371),pivot_type], null));
});
metabase.lib.drill_thru.pivot.breakouts__GT_filters = (function metabase$lib$drill_thru$pivot$breakouts__GT_filters(query,stage_number,p__79308){
var map__79309 = p__79308;
var map__79309__$1 = cljs.core.__destructure_map(map__79309);
var _dimension = map__79309__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79309__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79309__$1,new cljs.core.Keyword(null,"value","value",305978217));
return metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(metabase.lib.breakout.remove_existing_breakouts_for_column.cljs$core$IFn$_invoke$arity$3(query,stage_number,column),stage_number,metabase.lib.filter._EQ_(column,value));
});
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","pivot","drill-thru/pivot",-1038336574),(function() { 
var G__79319__delegate = function (query,stage_number,drill_thru,p__79312){
var vec__79313 = p__79312;
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79313,(0),null);
var filtered = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__79310_SHARP_,p2__79311_SHARP_){
return metabase.lib.drill_thru.pivot.breakouts__GT_filters(p1__79310_SHARP_,stage_number,p2__79311_SHARP_);
}),query,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(drill_thru));
return metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$3(filtered,stage_number,column);
};
var G__79319 = function (query,stage_number,drill_thru,var_args){
var p__79312 = null;
if (arguments.length > 3) {
var G__79320__i = 0, G__79320__a = new Array(arguments.length -  3);
while (G__79320__i < G__79320__a.length) {G__79320__a[G__79320__i] = arguments[G__79320__i + 3]; ++G__79320__i;}
  p__79312 = new cljs.core.IndexedSeq(G__79320__a,0,null);
} 
return G__79319__delegate.call(this,query,stage_number,drill_thru,p__79312);};
G__79319.cljs$lang$maxFixedArity = 3;
G__79319.cljs$lang$applyTo = (function (arglist__79321){
var query = cljs.core.first(arglist__79321);
arglist__79321 = cljs.core.next(arglist__79321);
var stage_number = cljs.core.first(arglist__79321);
arglist__79321 = cljs.core.next(arglist__79321);
var drill_thru = cljs.core.first(arglist__79321);
var p__79312 = cljs.core.rest(arglist__79321);
return G__79319__delegate(query,stage_number,drill_thru,p__79312);
});
G__79319.cljs$core$IFn$_invoke$arity$variadic = G__79319__delegate;
return G__79319;
})()
);

//# sourceMappingURL=metabase.lib.drill_thru.pivot.js.map
