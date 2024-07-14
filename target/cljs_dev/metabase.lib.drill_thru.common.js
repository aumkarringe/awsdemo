var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.common.js");

goog.provide('metabase.lib.drill_thru.common');
/**
 * Is this query stage an MBQL stage?
 */
metabase.lib.drill_thru.common.mbql_stage_QMARK_ = (function metabase$lib$drill_thru$common$mbql_stage_QMARK_(query,stage_number){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798));
});
metabase.lib.drill_thru.common.drill_thru_dispatch = (function metabase$lib$drill_thru$common$drill_thru_dispatch(var_args){
var args__5732__auto__ = [];
var len__5726__auto___78677 = arguments.length;
var i__5727__auto___78678 = (0);
while(true){
if((i__5727__auto___78678 < len__5726__auto___78677)){
args__5732__auto__.push((arguments[i__5727__auto___78678]));

var G__78679 = (i__5727__auto___78678 + (1));
i__5727__auto___78678 = G__78679;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return metabase.lib.drill_thru.common.drill_thru_dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(metabase.lib.drill_thru.common.drill_thru_dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (_query,_stage_number,drill_thru,_args){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(drill_thru);
}));

(metabase.lib.drill_thru.common.drill_thru_dispatch.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metabase.lib.drill_thru.common.drill_thru_dispatch.cljs$lang$applyTo = (function (seq78641){
var G__78642 = cljs.core.first(seq78641);
var seq78641__$1 = cljs.core.next(seq78641);
var G__78644 = cljs.core.first(seq78641__$1);
var seq78641__$2 = cljs.core.next(seq78641__$1);
var G__78645 = cljs.core.first(seq78641__$2);
var seq78641__$3 = cljs.core.next(seq78641__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78642,G__78644,G__78645,seq78641__$3);
}));

if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.drill_thru !== 'undefined') && (typeof metabase.lib.drill_thru.common !== 'undefined') && (typeof metabase.lib.drill_thru.common.drill_thru_method !== 'undefined')){
} else {
/**
 * e.g.
 * 
 *  (drill-thru-method query stage-number drill-thru)`
 * 
 *   Applies the `drill-thru` to the query and stage. Keyed on the `:type` of the drill-thru.
 *   Returns the updated query.
 */
metabase.lib.drill_thru.common.drill_thru_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__78666 = cljs.core.get_global_hierarchy;
return (fexpr__78666.cljs$core$IFn$_invoke$arity$0 ? fexpr__78666.cljs$core$IFn$_invoke$arity$0() : fexpr__78666.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.drill-thru.common","drill-thru-method"),metabase.lib.drill_thru.common.drill_thru_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.drill_thru !== 'undefined') && (typeof metabase.lib.drill_thru.common !== 'undefined') && (typeof metabase.lib.drill_thru.common.drill_thru_info_method !== 'undefined')){
} else {
/**
 * Helper for getting the display-info of each specific type of drill-thru.
 */
metabase.lib.drill_thru.common.drill_thru_info_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__78668 = cljs.core.get_global_hierarchy;
return (fexpr__78668.cljs$core$IFn$_invoke$arity$0 ? fexpr__78668.cljs$core$IFn$_invoke$arity$0() : fexpr__78668.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.drill-thru.common","drill-thru-info-method"),metabase.lib.drill_thru.common.drill_thru_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_query,_stage_number,drill_thru){
return cljs.core.select_keys(drill_thru,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"display-name","display-name",694513143)], null));
}));
/**
 * Does the source table for this `query` have more than one primary key?
 */
metabase.lib.drill_thru.common.many_pks_QMARK_ = (function metabase$lib$drill_thru$common$many_pks_QMARK_(query){
return (cljs.core.count(metabase.lib.metadata.calculation.primary_keys(query)) > (1));
});
/**
 * Convert a drill value to a JS value
 */
metabase.lib.drill_thru.common.drill_value__GT_js = (function metabase$lib$drill_thru$common$drill_value__GT_js(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"null","null",-180137709))){
return null;
} else {
return value;
}
});

//# sourceMappingURL=metabase.lib.drill_thru.common.js.map
