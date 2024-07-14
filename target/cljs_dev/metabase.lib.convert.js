var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.data.js");
require("./clojure.set.js");
require("./clojure.string.js");
require("./malli.error.js");
require("./medley.core.js");
require("./metabase.legacy_mbql.normalize.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.normalize.js");
require("./metabase.lib.options.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.ref.js");
require("./metabase.lib.util.js");
require("./metabase.util.js");
require("./metabase.util.malli.js");
require("./metabase.util.malli.registry.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.convert.js");

goog.provide('metabase.lib.convert');
metabase.lib.convert._STAR_pMBQL_uuid__GT_legacy_index_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
metabase.lib.convert.clean_location = (function metabase$lib$convert$clean_location(almost_stage,error_type,error_location){
var operate_on_parent_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666),null,new cljs.core.Keyword("malli.core","end-of-input","malli.core/end-of-input",-491237771),null], null), null);
var location__$1 = (cljs.core.truth_((operate_on_parent_QMARK_.cljs$core$IFn$_invoke$arity$1 ? operate_on_parent_QMARK_.cljs$core$IFn$_invoke$arity$1(error_type) : operate_on_parent_QMARK_.call(null,error_type)))?cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),error_location):cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((1),error_location));
var vec__77166 = (cljs.core.truth_((operate_on_parent_QMARK_.cljs$core$IFn$_invoke$arity$1 ? operate_on_parent_QMARK_.cljs$core$IFn$_invoke$arity$1(error_type) : operate_on_parent_QMARK_.call(null,error_type)))?cljs.core.take_last((2),error_location):cljs.core.take_last((1),error_location));
var location_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77166,(0),null);
if(cljs.core.seq(location__$1)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(almost_stage,location__$1,(function (error_loc){
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error_loc,location_key,null);
if(cljs.core.vector_QMARK_(error_loc)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),result);
} else {
if(cljs.core.map_QMARK_(error_loc)){
return metabase.util.remove_nils(result);
} else {
return result;

}
}
}));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(almost_stage,location_key);
}
});
metabase.lib.convert.stage_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"filters","filters",974726919),null,new cljs.core.Keyword(null,"fields","fields",-1932066230),null,new cljs.core.Keyword(null,"joins","joins",1033962699),null,new cljs.core.Keyword(null,"expressions","expressions",255689909),null,new cljs.core.Keyword(null,"breakout","breakout",-732419050),null,new cljs.core.Keyword(null,"order-by","order-by",1527318070),null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),null], null), null);
metabase.lib.convert.clean_stage_schema_errors = (function metabase$lib$convert$clean_stage_schema_errors(almost_stage){
var _STAR_suppress_expression_type_check_QMARK__STAR__orig_val__77181 = metabase.lib.schema.expression._STAR_suppress_expression_type_check_QMARK__STAR_;
var _STAR_suppress_expression_type_check_QMARK__STAR__temp_val__77182 = true;
(metabase.lib.schema.expression._STAR_suppress_expression_type_check_QMARK__STAR_ = _STAR_suppress_expression_type_check_QMARK__STAR__temp_val__77182);

try{var almost_stage__$1 = almost_stage;
var removals = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"in","in",-1531184865)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(metabase.lib.convert.stage_keys,cljs.core.first,new cljs.core.Keyword(null,"in","in",-1531184865)),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(metabase.util.malli.registry.explain(new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388),almost_stage__$1)))));
if(cljs.core.truth_(temp__5802__auto__)){
var vec__77186 = temp__5802__auto__;
var error_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77186,(0),null);
var error_location = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77186,(1),null);
var new_stage = metabase.lib.convert.clean_location(almost_stage__$1,error_type,error_location);
var error_desc = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = error_type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return malli.error.humanize.cljs$core$IFn$_invoke$arity$1(metabase.util.malli.registry.explain(new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388),almost_stage__$1));
}
})()], 0));
console.warn("Clean: Removing bad clause due to error!",error_location,error_desc,metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.data.diff(almost_stage__$1,new_stage))));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_stage,almost_stage__$1)){
return almost_stage__$1;
} else {
var G__77591 = new_stage;
var G__77592 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removals,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [error_type,error_location], null));
almost_stage__$1 = G__77591;
removals = G__77592;
continue;
}
} else {
return almost_stage__$1;
}
break;
}
}finally {(metabase.lib.schema.expression._STAR_suppress_expression_type_check_QMARK__STAR_ = _STAR_suppress_expression_type_check_QMARK__STAR__orig_val__77181);
}});
metabase.lib.convert.clean_stage_ref_errors = (function metabase$lib$convert$clean_stage_ref_errors(almost_stage){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (almost_stage__$1,p__77189){
var vec__77190 = p__77189;
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77190,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77190,(1),null);
return metabase.lib.convert.clean_location(almost_stage__$1,new cljs.core.Keyword("metabase.lib.schema","invalid-ref","metabase.lib.schema/invalid-ref",-2010445475),loc);
}),almost_stage,metabase.lib.schema.ref_errors_for_stage(almost_stage));
});
metabase.lib.convert.clean_stage = (function metabase$lib$convert$clean_stage(almost_stage){
return metabase.lib.convert.clean_stage_ref_errors(metabase.lib.convert.clean_stage_schema_errors(almost_stage));
});
metabase.lib.convert.clean = (function metabase$lib$convert$clean(almost_query){
var almost_query__$1 = almost_query;
var stage_index = (0);
while(true){
var current_stage = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(almost_query__$1),stage_index);
var new_stage = metabase.lib.convert.clean_stage(current_stage);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_stage,new_stage)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stage_index,(cljs.core.count(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(almost_query__$1)) - (1)))){
return almost_query__$1;
} else {
var G__77593 = almost_query__$1;
var G__77594 = (stage_index + (1));
almost_query__$1 = G__77593;
stage_index = G__77594;
continue;
}
} else {
var G__77595 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(almost_query__$1,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.assoc,stage_index,new_stage);
var G__77596 = stage_index;
almost_query__$1 = G__77595;
stage_index = G__77596;
continue;
}
break;
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.convert !== 'undefined') && (typeof metabase.lib.convert.__GT_pMBQL !== 'undefined')){
} else {
/**
 * Coerce something to pMBQL (the version of MBQL manipulated by Metabase Lib v2) if it's not already pMBQL.
 */
metabase.lib.convert.__GT_pMBQL = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77199 = cljs.core.get_global_hierarchy;
return (fexpr__77199.cljs$core$IFn$_invoke$arity$0 ? fexpr__77199.cljs$core$IFn$_invoke$arity$0() : fexpr__77199.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.convert","->pMBQL"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.convert.default_MBQL_clause__GT_pMBQL = (function metabase$lib$convert$default_MBQL_clause__GT_pMBQL(mbql_clause){
var last_elem = cljs.core.peek(mbql_clause);
var last_elem_option_QMARK_ = cljs.core.map_QMARK_(last_elem);
var vec__77200 = (function (){var G__77203 = mbql_clause;
if(last_elem_option_QMARK_){
return cljs.core.pop(G__77203);
} else {
return G__77203;
}
})();
var seq__77201 = cljs.core.seq(vec__77200);
var first__77202 = cljs.core.first(seq__77201);
var seq__77201__$1 = cljs.core.next(seq__77201);
var clause_type = first__77202;
var args = seq__77201__$1;
var options = ((last_elem_option_QMARK_)?last_elem:cljs.core.PersistentArrayMap.EMPTY);
return metabase.lib.options.ensure_uuid(cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_type,options], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.convert.__GT_pMBQL),args));
});
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)))){
return metabase.lib.convert.default_MBQL_clause__GT_pMBQL(x);
} else {
return x;
}
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (query){
return query;
}));
/**
 * In legacy MBQL, join `:alias` was optional, and if unspecified, this was the default alias used. In reality all joins
 *   normally had an explicit `:alias` since the QB would generate one and you generally need one to do useful things
 *   with the join anyway.
 * 
 *   Since the new pMBQL schema makes `:alias` required, we'll explicitly add the implicit default when we encounter a
 *   join without an alias, and remove it so we can round-trip without changes.
 */
metabase.lib.convert.legacy_default_join_alias = "__join";
/**
 * Join `:alias`es had to be unique in legacy MBQL, but they were optional. Since we add [[legacy-default-join-alias]]
 *   to each join that doesn't have an explicit `:alias` for pMBQL compatibility now, we need to deduplicate the aliases
 *   if it is used more than once.
 * 
 *   Only deduplicate the default `__join` aliases; we don't want the [[lib.util/unique-name-generator]] to touch other
 *   aliases and truncate them or anything like that.
 */
metabase.lib.convert.deduplicate_join_aliases = (function metabase$lib$convert$deduplicate_join_aliases(joins){
var unique_name_fn = metabase.lib.util.unique_name_generator.cljs$core$IFn$_invoke$arity$1(null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (join){
var G__77204 = join;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join),metabase.lib.convert.legacy_default_join_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77204,new cljs.core.Keyword(null,"alias","alias",-2039751630),unique_name_fn);
} else {
return G__77204;
}
}),joins);
});
/**
 * If a query `stage` has a legacy `card__<id>` `:source-table`, convert it to a pMBQL-style `:source-card`.
 */
metabase.lib.convert.stage_source_card_id__GT_pMBQL = (function metabase$lib$convert$stage_source_card_id__GT_pMBQL(stage){
if(typeof new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(stage) === 'string'){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(stage,new cljs.core.Keyword(null,"source-card","source-card",-1580820390),metabase.lib.util.legacy_string_table_id__GT_card_id(new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(stage))),new cljs.core.Keyword(null,"source-table","source-table",-225307692));
} else {
return stage;
}
});
/**
 * Impl for [[with-aggregation-list]].
 */
metabase.lib.convert.do_with_aggregation_list = (function metabase$lib$convert$do_with_aggregation_list(aggregations,thunk){
var legacy__GT_pMBQL = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,p__77208){
var vec__77209 = p__77208;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77209,(0),null);
var map__77212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77209,(1),null);
var map__77212__$1 = cljs.core.__destructure_map(map__77212);
var ag_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77212__$1,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,ag_uuid], null);
})),aggregations);
var pMBQL__GT_legacy = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,p__77213){
var vec__77214 = p__77213;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77214,(0),null);
var map__77217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77214,(1),null);
var map__77217__$1 = cljs.core.__destructure_map(map__77217);
var ag_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77217__$1,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ag_uuid,idx], null);
})),aggregations);
var _STAR_legacy_index__GT_pMBQL_uuid_STAR__orig_val__77218 = metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_;
var _STAR_pMBQL_uuid__GT_legacy_index_STAR__orig_val__77219 = metabase.lib.convert._STAR_pMBQL_uuid__GT_legacy_index_STAR_;
var _STAR_legacy_index__GT_pMBQL_uuid_STAR__temp_val__77220 = legacy__GT_pMBQL;
var _STAR_pMBQL_uuid__GT_legacy_index_STAR__temp_val__77221 = pMBQL__GT_legacy;
(metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_ = _STAR_legacy_index__GT_pMBQL_uuid_STAR__temp_val__77220);

(metabase.lib.convert._STAR_pMBQL_uuid__GT_legacy_index_STAR_ = _STAR_pMBQL_uuid__GT_legacy_index_STAR__temp_val__77221);

try{return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
}finally {(metabase.lib.convert._STAR_pMBQL_uuid__GT_legacy_index_STAR_ = _STAR_pMBQL_uuid__GT_legacy_index_STAR__orig_val__77219);

(metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_ = _STAR_legacy_index__GT_pMBQL_uuid_STAR__orig_val__77218);
}});
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (stage){
var aggregations = metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(stage));
var expressions = cljs.core.not_empty(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__77222){
var vec__77223 = p__77222;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77223,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77223,(1),null);
return metabase.lib.util.top_level_expression_clause(metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(v),k);
}),new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(stage)));
return metabase.lib.convert.do_with_aggregation_list(aggregations,(function (){
var stage__$1 = medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.convert.stage_source_card_id__GT_pMBQL(stage),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),aggregations,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expressions","expressions",255689909),expressions], 0));
var stage__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stage__$2,k){
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(stage__$2,k))){
return stage__$2;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(stage__$2,k,metabase.lib.convert.__GT_pMBQL);
}
}),stage__$1,cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.convert.stage_keys,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"expressions","expressions",255689909)], 0)));
var G__77226 = stage__$2;
if(cljs.core.truth_(new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage__$2))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77226,new cljs.core.Keyword(null,"joins","joins",1033962699),metabase.lib.convert.deduplicate_join_aliases);
} else {
return G__77226;
}
}));
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),(function (stage){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$4(stage,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),cljs.core.update_vals,(function (tag){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(tag,new cljs.core.Keyword(null,"dimension","dimension",543254198),metabase.lib.convert.__GT_pMBQL);
}));
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (join){
var join__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"conditions","conditions",-1647236270),metabase.lib.convert.__GT_pMBQL),new cljs.core.Keyword(null,"stages","stages",-442109532),metabase.lib.convert.__GT_pMBQL);
var G__77227 = join__$1;
var G__77227__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(join__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77227,new cljs.core.Keyword(null,"fields","fields",-1932066230),(function (fields){
if(cljs.core.sequential_QMARK_(fields)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_pMBQL,fields);
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fields);
}
})):G__77227);
if(cljs.core.not(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77227__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630),metabase.lib.convert.legacy_default_join_alias);
} else {
return G__77227__$1;
}
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969),(function (xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_pMBQL,xs);
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422),(function (m){
if(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m))){
return metabase.lib.convert.clean(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$3(metabase.lib.util.pipeline(m),new cljs.core.Keyword(null,"stages","stages",-442109532),(function (stages){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_pMBQL,stages);
}))),new cljs.core.Keyword("lib.convert","converted?","lib.convert/converted?",1937433683),true));
} else {
return cljs.core.update_vals(m,metabase.lib.convert.__GT_pMBQL);
}
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__77228){
var vec__77229 = p__77228;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77229,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77229,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77229,(2),null);
var vec__77232 = ((cljs.core.map_QMARK_(x))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77232,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77232,(1),null);
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),options,id_or_name], null));
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"value","value",305978217),(function (p__77235){
var vec__77236 = p__77235;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77236,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77236,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77236,(2),null);
var opts__$1 = clojure.set.rename_keys(opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"base_type","base_type",1908272670),new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"semantic_type","semantic_type",272485089),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.Keyword(null,"database_type","database_type",-54700895),new cljs.core.Keyword(null,"database-type","database-type",-426840562)], null));
var opts__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return metabase.lib.schema.expression.type_of(value);
}
}
})());
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),opts__$2,value], null));
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__77239){
var vec__77240 = p__77239;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77240,(0),null);
var pred_expr_pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77240,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77240,(2),null);
var default$ = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(options);
var G__77243 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"case","case",1143702196),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"default","default",-1987822328)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_pMBQL,pred_expr_pairs)], null);
var G__77243__$1 = metabase.lib.options.ensure_uuid(G__77243)
;
if((!((default$ == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__77243__$1,metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(default$));
} else {
return G__77243__$1;
}
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (p__77244){
var vec__77245 = p__77244;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77245,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77245,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77245,(2),null);
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,opts,value], null));
}));
metabase.lib.convert.get_or_throw_BANG_ = (function metabase$lib$convert$get_or_throw_BANG_(m,k){
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,new cljs.core.Keyword("metabase.lib.convert","not-found","metabase.lib.convert/not-found",967996550));
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword("metabase.lib.convert","not-found","metabase.lib.convert/not-found",967996550))))){
return result;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unable to find key ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))," in map."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m","m",1632677161),m,new cljs.core.Keyword(null,"k","k",-2146297393),k], null));
}
});
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p__77248){
var vec__77249 = p__77248;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77249,(0),null);
var aggregation_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77249,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77249,(2),null);
var clause = vec__77249;
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,opts,(function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_,aggregation_index);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Error converting :aggregation reference: no aggregation at index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(aggregation_index)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clause","clause",1479668060),clause], null));
}
})()], null));
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),(function (p__77252){
var vec__77253 = p__77252;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77253,(0),null);
var aggregation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77253,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77253,(2),null);
var vec__77256 = metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(aggregation);
var seq__77257 = cljs.core.seq(vec__77256);
var first__77258 = cljs.core.first(seq__77257);
var seq__77257__$1 = cljs.core.next(seq__77257);
var tag = first__77258;
var first__77258__$1 = cljs.core.first(seq__77257__$1);
var seq__77257__$2 = cljs.core.next(seq__77257__$1);
var opts = first__77258__$1;
var args = seq__77257__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,options], 0))], null),args);
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(function (p__77259){
var vec__77260 = p__77259;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77260,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77260,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77260,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77260,(3),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77260,(4),null);
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(function (){var or__5002__auto__ = options;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(field),n,unit], null));
}));
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p__77263){
var vec__77265 = p__77263;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77265,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77265,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77265,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77265,(3),null);
var clause = vec__77265;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(clause),(4))){
} else {
throw (new Error("Assert failed: (= (count clause) 4)"));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,opts,metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(expr),n], null);
}));
var seq__77268_77611 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"starts-with","starts-with",366503009),new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853)], null));
var chunk__77269_77612 = null;
var count__77270_77613 = (0);
var i__77271_77614 = (0);
while(true){
if((i__77271_77614 < count__77270_77613)){
var tag_77616 = chunk__77269_77612.cljs$core$IIndexed$_nth$arity$2(null,i__77271_77614);
metabase.lib.hierarchy.derive(tag_77616,new cljs.core.Keyword("metabase.lib.convert","string-comparison","metabase.lib.convert/string-comparison",-1106865819));


var G__77617 = seq__77268_77611;
var G__77618 = chunk__77269_77612;
var G__77619 = count__77270_77613;
var G__77620 = (i__77271_77614 + (1));
seq__77268_77611 = G__77617;
chunk__77269_77612 = G__77618;
count__77270_77613 = G__77619;
i__77271_77614 = G__77620;
continue;
} else {
var temp__5804__auto___77621 = cljs.core.seq(seq__77268_77611);
if(temp__5804__auto___77621){
var seq__77268_77623__$1 = temp__5804__auto___77621;
if(cljs.core.chunked_seq_QMARK_(seq__77268_77623__$1)){
var c__5525__auto___77624 = cljs.core.chunk_first(seq__77268_77623__$1);
var G__77625 = cljs.core.chunk_rest(seq__77268_77623__$1);
var G__77626 = c__5525__auto___77624;
var G__77627 = cljs.core.count(c__5525__auto___77624);
var G__77628 = (0);
seq__77268_77611 = G__77625;
chunk__77269_77612 = G__77626;
count__77270_77613 = G__77627;
i__77271_77614 = G__77628;
continue;
} else {
var tag_77629 = cljs.core.first(seq__77268_77623__$1);
metabase.lib.hierarchy.derive(tag_77629,new cljs.core.Keyword("metabase.lib.convert","string-comparison","metabase.lib.convert/string-comparison",-1106865819));


var G__77631 = cljs.core.next(seq__77268_77623__$1);
var G__77632 = null;
var G__77633 = (0);
var G__77634 = (0);
seq__77268_77611 = G__77631;
chunk__77269_77612 = G__77632;
count__77270_77613 = G__77633;
i__77271_77614 = G__77634;
continue;
}
} else {
}
}
break;
}
metabase.lib.convert.__GT_pMBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.convert","string-comparison","metabase.lib.convert/string-comparison",-1106865819),(function (p__77272){
var vec__77273 = p__77272;
var seq__77274 = cljs.core.seq(vec__77273);
var first__77275 = cljs.core.first(seq__77274);
var seq__77274__$1 = cljs.core.next(seq__77274);
var tag = first__77275;
var first__77275__$1 = cljs.core.first(seq__77274__$1);
var seq__77274__$2 = cljs.core.next(seq__77274__$1);
var opts = first__77275__$1;
var args = seq__77274__$2;
var clause = vec__77273;
if((cljs.core.count(args) > (2))){
return metabase.lib.options.ensure_uuid(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,opts], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_pMBQL,args)));
} else {
var vec__77276 = clause;
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77276,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77276,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77276,(2),null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77276,(3),null);
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,(function (){var or__5002__auto__ = opts__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(x),metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(y)], null));
}
}));
/**
 * Convert a legacy 'inner query' to a full legacy 'outer query' so you can pass it to stuff
 *   like [[metabase.legacy-mbql.normalize/normalize]], and then probably to [[->pMBQL]].
 */
metabase.lib.convert.legacy_query_from_inner_query = (function metabase$lib$convert$legacy_query_from_inner_query(database_id,inner_query){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"database","database",1849087575),database_id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(inner_query))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),clojure.set.rename_keys(inner_query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null))], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),inner_query], null))], 0));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.convert !== 'undefined') && (typeof metabase.lib.convert.__GT_legacy_MBQL !== 'undefined')){
} else {
/**
 * Coerce something to legacy MBQL (the version of MBQL understood by the query processor and Metabase Lib v1) if it's
 *   not already legacy MBQL.
 */
metabase.lib.convert.__GT_legacy_MBQL = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77279 = cljs.core.get_global_hierarchy;
return (fexpr__77279.cljs$core$IFn$_invoke$arity$0 ? fexpr__77279.cljs$core$IFn$_invoke$arity$0() : fexpr__77279.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.convert","->legacy-MBQL"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
/**
 * Does keyword `k` have a`:lib/` or a `:metabase.lib.* /` namespace?
 */
metabase.lib.convert.metabase_lib_keyword_QMARK_ = (function metabase$lib$convert$metabase_lib_keyword_QMARK_(k){
var and__5000__auto__ = cljs.core.qualified_keyword_QMARK_(k);
if(and__5000__auto__){
var temp__5804__auto__ = cljs.core.namespace(k);
if(cljs.core.truth_(temp__5804__auto__)){
var symb_namespace = temp__5804__auto__;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(symb_namespace,"lib")) || (clojure.string.starts_with_QMARK_(symb_namespace,"metabase.lib.")));
} else {
return null;
}
} else {
return and__5000__auto__;
}
});
/**
 * Remove any keys starting with the `:lib/` `:metabase.lib.* /` namespaces from map `m`.
 * 
 *   No args = return transducer to remove keys from a map. One arg = update a map `m`.
 */
metabase.lib.convert.disqualify = (function metabase$lib$convert$disqualify(var_args){
var G__77281 = arguments.length;
switch (G__77281) {
case 0:
return metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__77283){
var vec__77284 = p__77283;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77284,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77284,(1),null);
return metabase.lib.convert.metabase_lib_keyword_QMARK_(k);
}));
}));

(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1 = (function (m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$0(),m);
}));

(metabase.lib.convert.disqualify.cljs$lang$maxFixedArity = 1);

/**
 * Convert an options map in an MBQL clause to the equivalent shape for legacy MBQL. Remove `:lib/*` keys and
 *   `:effective-type`, which is not used in options maps in legacy MBQL.
 */
metabase.lib.convert.options__GT_legacy_MBQL = (function metabase$lib$convert$options__GT_legacy_MBQL(m){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$0(),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__77293){
var vec__77294 = p__77293;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77294,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77294,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458));
}))),((cljs.core.contains_QMARK_(m,new cljs.core.Keyword("metabase.lib.query","transformation-added-base-type","metabase.lib.query/transformation-added-base-type",121891381)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword("metabase.lib.query","transformation-added-base-type","metabase.lib.query/transformation-added-base-type",121891381),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base-type","base-type",1167971299)], 0)):m)));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.convert !== 'undefined') && (typeof metabase.lib.convert.aggregation__GT_legacy_MBQL !== 'undefined')){
} else {
metabase.lib.convert.aggregation__GT_legacy_MBQL = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77299 = cljs.core.get_global_hierarchy;
return (fexpr__77299.cljs$core$IFn$_invoke$arity$0 ? fexpr__77299.cljs$core$IFn$_invoke$arity$0() : fexpr__77299.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.convert","aggregation->legacy-MBQL"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.convert.aggregation__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__77301){
var vec__77302 = p__77301;
var seq__77303 = cljs.core.seq(vec__77302);
var first__77304 = cljs.core.first(seq__77303);
var seq__77303__$1 = cljs.core.next(seq__77303);
var tag = first__77304;
var first__77304__$1 = cljs.core.first(seq__77303__$1);
var seq__77303__$2 = cljs.core.next(seq__77303__$1);
var options = first__77304__$1;
var args = seq__77303__$2;
var inner = cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.convert.__GT_legacy_MBQL),args);
var inner__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"case","case",1143702196))) && (cljs.core.next(args))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(inner),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.peek(inner)], null)):inner);
var temp__5802__auto__ = cljs.core.not_empty(metabase.lib.convert.options__GT_legacy_MBQL(options));
if(cljs.core.truth_(temp__5802__auto__)){
var aggregation_opts = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),inner__$1,aggregation_opts], null);
} else {
return inner__$1;
}
}));
metabase.lib.convert.aggregation__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (clause){
return metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(clause);
}));
metabase.lib.convert.clause_with_options__GT_legacy_MBQL = (function metabase$lib$convert$clause_with_options__GT_legacy_MBQL(p__77309){
var vec__77310 = p__77309;
var seq__77311 = cljs.core.seq(vec__77310);
var first__77312 = cljs.core.first(seq__77311);
var seq__77311__$1 = cljs.core.next(seq__77311);
var k = first__77312;
var first__77312__$1 = cljs.core.first(seq__77311__$1);
var seq__77311__$2 = cljs.core.next(seq__77311__$1);
var options = first__77312__$1;
var args = seq__77311__$2;
if(cljs.core.map_QMARK_(options)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_legacy_MBQL,args),(function (){var temp__5804__auto__ = metabase.lib.convert.options__GT_legacy_MBQL(options);
if(cljs.core.truth_(temp__5804__auto__)){
var options__$1 = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [options__$1], null);
} else {
return null;
}
})()));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_legacy_MBQL,cljs.core.cons(options,args)));
}
});
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)))){
return metabase.lib.convert.clause_with_options__GT_legacy_MBQL(x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.update_vals(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(x),metabase.lib.convert.__GT_legacy_MBQL);
} else {
return x;

}
}
}));
var seq__77313_77653 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.convert","aggregation","metabase.lib.convert/aggregation",108290790),new cljs.core.Keyword("metabase.lib.convert","expression","metabase.lib.convert/expression",1648102782)], null));
var chunk__77314_77655 = null;
var count__77315_77656 = (0);
var i__77316_77657 = (0);
while(true){
if((i__77316_77657 < count__77315_77656)){
var tag_77659 = chunk__77314_77655.cljs$core$IIndexed$_nth$arity$2(null,i__77316_77657);
metabase.lib.hierarchy.derive(tag_77659,new cljs.core.Keyword("metabase.lib.convert","aggregation-or-expression","metabase.lib.convert/aggregation-or-expression",1924029672));


var G__77660 = seq__77313_77653;
var G__77661 = chunk__77314_77655;
var G__77662 = count__77315_77656;
var G__77663 = (i__77316_77657 + (1));
seq__77313_77653 = G__77660;
chunk__77314_77655 = G__77661;
count__77315_77656 = G__77662;
i__77316_77657 = G__77663;
continue;
} else {
var temp__5804__auto___77665 = cljs.core.seq(seq__77313_77653);
if(temp__5804__auto___77665){
var seq__77313_77666__$1 = temp__5804__auto___77665;
if(cljs.core.chunked_seq_QMARK_(seq__77313_77666__$1)){
var c__5525__auto___77667 = cljs.core.chunk_first(seq__77313_77666__$1);
var G__77668 = cljs.core.chunk_rest(seq__77313_77666__$1);
var G__77669 = c__5525__auto___77667;
var G__77670 = cljs.core.count(c__5525__auto___77667);
var G__77671 = (0);
seq__77313_77653 = G__77668;
chunk__77314_77655 = G__77669;
count__77315_77656 = G__77670;
i__77316_77657 = G__77671;
continue;
} else {
var tag_77672 = cljs.core.first(seq__77313_77666__$1);
metabase.lib.hierarchy.derive(tag_77672,new cljs.core.Keyword("metabase.lib.convert","aggregation-or-expression","metabase.lib.convert/aggregation-or-expression",1924029672));


var G__77673 = cljs.core.next(seq__77313_77666__$1);
var G__77674 = null;
var G__77675 = (0);
var G__77676 = (0);
seq__77313_77653 = G__77673;
chunk__77314_77655 = G__77674;
count__77315_77656 = G__77675;
i__77316_77657 = G__77676;
continue;
}
} else {
}
}
break;
}
var seq__77322_77677 = cljs.core.seq(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.Keyword(null,"count-where","count-where",385407720),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"percentile","percentile",-601188752),new cljs.core.Keyword(null,"share","share",-589433933),new cljs.core.Keyword(null,"stddev","stddev",-865474939),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"sum-where","sum-where",2135348428)], null));
var chunk__77323_77678 = null;
var count__77324_77679 = (0);
var i__77325_77680 = (0);
while(true){
if((i__77325_77680 < count__77324_77679)){
var tag_77681 = chunk__77323_77678.cljs$core$IIndexed$_nth$arity$2(null,i__77325_77680);
metabase.lib.hierarchy.derive(tag_77681,new cljs.core.Keyword("metabase.lib.convert","aggregation","metabase.lib.convert/aggregation",108290790));


var G__77682 = seq__77322_77677;
var G__77683 = chunk__77323_77678;
var G__77684 = count__77324_77679;
var G__77685 = (i__77325_77680 + (1));
seq__77322_77677 = G__77682;
chunk__77323_77678 = G__77683;
count__77324_77679 = G__77684;
i__77325_77680 = G__77685;
continue;
} else {
var temp__5804__auto___77686 = cljs.core.seq(seq__77322_77677);
if(temp__5804__auto___77686){
var seq__77322_77687__$1 = temp__5804__auto___77686;
if(cljs.core.chunked_seq_QMARK_(seq__77322_77687__$1)){
var c__5525__auto___77688 = cljs.core.chunk_first(seq__77322_77687__$1);
var G__77689 = cljs.core.chunk_rest(seq__77322_77687__$1);
var G__77690 = c__5525__auto___77688;
var G__77691 = cljs.core.count(c__5525__auto___77688);
var G__77692 = (0);
seq__77322_77677 = G__77689;
chunk__77323_77678 = G__77690;
count__77324_77679 = G__77691;
i__77325_77680 = G__77692;
continue;
} else {
var tag_77693 = cljs.core.first(seq__77322_77687__$1);
metabase.lib.hierarchy.derive(tag_77693,new cljs.core.Keyword("metabase.lib.convert","aggregation","metabase.lib.convert/aggregation",108290790));


var G__77694 = cljs.core.next(seq__77322_77687__$1);
var G__77695 = null;
var G__77696 = (0);
var G__77697 = (0);
seq__77322_77677 = G__77694;
chunk__77323_77678 = G__77695;
count__77324_77679 = G__77696;
i__77325_77680 = G__77697;
continue;
}
} else {
}
}
break;
}
var seq__77334_77698 = cljs.core.seq(cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"/","/",1282502798),new cljs.core.Keyword(null,"case","case",1143702196),new cljs.core.Keyword(null,"coalesce","coalesce",654622029),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929),new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"round","round",2009433328),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"interval","interval",1708495417),new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"absolute-datetime","absolute-datetime",-560340465),new cljs.core.Keyword(null,"now","now",-1650525531),new cljs.core.Keyword(null,"convert-timezone","convert-timezone",-124803001),new cljs.core.Keyword(null,"get-week","get-week",-888059349),new cljs.core.Keyword(null,"get-year","get-year",-936011274),new cljs.core.Keyword(null,"get-month","get-month",-369374731),new cljs.core.Keyword(null,"get-day","get-day",127568857),new cljs.core.Keyword(null,"get-hour","get-hour",622714059),new cljs.core.Keyword(null,"get-minute","get-minute",1468086343),new cljs.core.Keyword(null,"get-second","get-second",-2065946318),new cljs.core.Keyword(null,"get-quarter","get-quarter",1327778593),new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),new cljs.core.Keyword(null,"datetime-subtract","datetime-subtract",275307697),new cljs.core.Keyword(null,"concat","concat",-2108183992),new cljs.core.Keyword(null,"substring","substring",1140866276),new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.Keyword(null,"regexextract","regexextract",689742894),new cljs.core.Keyword(null,"regex-match-first","regex-match-first",-657299718),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"trim","trim",774319767),new cljs.core.Keyword(null,"ltrim","ltrim",1654269283),new cljs.core.Keyword(null,"rtrim","rtrim",-661336449),new cljs.core.Keyword(null,"upper","upper",246243906),new cljs.core.Keyword(null,"lower","lower",1120320821)], true));
var chunk__77335_77699 = null;
var count__77336_77700 = (0);
var i__77337_77701 = (0);
while(true){
if((i__77337_77701 < count__77336_77700)){
var tag_77702 = chunk__77335_77699.cljs$core$IIndexed$_nth$arity$2(null,i__77337_77701);
metabase.lib.hierarchy.derive(tag_77702,new cljs.core.Keyword("metabase.lib.convert","expression","metabase.lib.convert/expression",1648102782));


var G__77703 = seq__77334_77698;
var G__77704 = chunk__77335_77699;
var G__77705 = count__77336_77700;
var G__77706 = (i__77337_77701 + (1));
seq__77334_77698 = G__77703;
chunk__77335_77699 = G__77704;
count__77336_77700 = G__77705;
i__77337_77701 = G__77706;
continue;
} else {
var temp__5804__auto___77707 = cljs.core.seq(seq__77334_77698);
if(temp__5804__auto___77707){
var seq__77334_77708__$1 = temp__5804__auto___77707;
if(cljs.core.chunked_seq_QMARK_(seq__77334_77708__$1)){
var c__5525__auto___77709 = cljs.core.chunk_first(seq__77334_77708__$1);
var G__77710 = cljs.core.chunk_rest(seq__77334_77708__$1);
var G__77711 = c__5525__auto___77709;
var G__77712 = cljs.core.count(c__5525__auto___77709);
var G__77713 = (0);
seq__77334_77698 = G__77710;
chunk__77335_77699 = G__77711;
count__77336_77700 = G__77712;
i__77337_77701 = G__77713;
continue;
} else {
var tag_77714 = cljs.core.first(seq__77334_77708__$1);
metabase.lib.hierarchy.derive(tag_77714,new cljs.core.Keyword("metabase.lib.convert","expression","metabase.lib.convert/expression",1648102782));


var G__77715 = cljs.core.next(seq__77334_77708__$1);
var G__77716 = null;
var G__77717 = (0);
var G__77718 = (0);
seq__77334_77698 = G__77715;
chunk__77335_77699 = G__77716;
count__77336_77700 = G__77717;
i__77337_77701 = G__77718;
continue;
}
} else {
}
}
break;
}
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.convert","aggregation-or-expression","metabase.lib.convert/aggregation-or-expression",1924029672),(function (input){
return metabase.lib.convert.aggregation__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(input);
}));
metabase.lib.convert.stage_metadata__GT_legacy_metadata = (function metabase$lib$convert$stage_metadata__GT_legacy_metadata(stage_metadata){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__77346_SHARP_){
return cljs.core.update_keys(p1__77346_SHARP_,metabase.util.__GT_snake_case_en);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.convert.__GT_legacy_MBQL)),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(stage_metadata));
});
/**
 * Inputs: [{:keys [stages]} :- [:map [:stages [:sequential :map]]]]
 *   Return: :any
 */
metabase.lib.convert.chain_stages = (function metabase$lib$convert$chain_stages(p__77352){
var map__77353 = p__77352;
var map__77353__$1 = cljs.core.__destructure_map(map__77353);
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77353__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
var inner_query = cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__77355,stage){
var vec__77356 = p__77355;
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77356,(0),null);
var stage_metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77356,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__77359 = metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(stage);
var G__77359__$1 = (cljs.core.truth_(inner)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77359,new cljs.core.Keyword(null,"source-query","source-query",198004422),inner):G__77359);
if(cljs.core.truth_(stage_metadata)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77359__$1,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085),metabase.lib.convert.stage_metadata__GT_legacy_metadata(stage_metadata));
} else {
return G__77359__$1;
}
})(),new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610).cljs$core$IFn$_invoke$arity$1(stage)], null);
}),null,stages));
var G__77361 = inner_query;
if(cljs.core.truth_(new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(inner_query))){
return clojure.set.rename_keys(G__77361,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
} else {
return G__77361;
}
});
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422),(function (m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__77368){
var vec__77369 = p__77368;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77369,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77369,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(v)], null);
}))),m);
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p__77373){
var vec__77375 = p__77373;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77375,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77375,(1),null);
var agg_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77375,(2),null);
var ag = vec__77375;
if(cljs.core.map_QMARK_(opts)){
try{var opts__$1 = metabase.lib.convert.options__GT_legacy_MBQL(opts);
var base_agg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),metabase.lib.convert.get_or_throw_BANG_(metabase.lib.convert._STAR_pMBQL_uuid__GT_legacy_index_STAR_,agg_uuid)], null);
if(cljs.core.seq(opts__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_agg,opts__$1);
} else {
return base_agg;
}
}catch (e77378){var e = e77378;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3((function (){var G__77379 = "Error converting aggregation reference to pMBQL: %s";
var G__77380 = cljs.core.ex_message(e);
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$2(G__77379,G__77380) : metabase.lib.util.format.call(null,G__77379,G__77380));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ag], null),e);
}} else {
return ag;
}
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969),(function (xs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_legacy_MBQL,xs);
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__77382){
var vec__77383 = p__77382;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77383,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77383,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77383,(2),null);
var vec__77386 = (((((opts == null)) || (cljs.core.map_QMARK_(opts))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,id], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,opts], null));
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77386,(0),null);
var id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77386,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(id__$1),metabase.lib.convert.options__GT_legacy_MBQL(opts__$1)], null);
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"value","value",305978217),(function (p__77405){
var vec__77407 = p__77405;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77407,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77407,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77407,(2),null);
var opts__$1 = metabase.lib.convert.options__GT_legacy_MBQL(clojure.set.rename_keys(opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base_type","base_type",1908272670),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.Keyword(null,"semantic_type","semantic_type",272485089),new cljs.core.Keyword(null,"database-type","database-type",-426840562),new cljs.core.Keyword(null,"database_type","database_type",-54700895)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value,opts__$1], null);
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p__77414){
var vec__77415 = p__77414;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77415,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77415,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77415,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77415,(3),null);
var clause = vec__77415;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(clause),(4))){
} else {
throw (new Error("Assert failed: (= (count clause) 4)"));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,opts,metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(expr),n], null);
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.convert","string-comparison","metabase.lib.convert/string-comparison",-1106865819),(function (p__77422){
var vec__77424 = p__77422;
var seq__77425 = cljs.core.seq(vec__77424);
var first__77426 = cljs.core.first(seq__77425);
var seq__77425__$1 = cljs.core.next(seq__77425);
var tag = first__77426;
var first__77426__$1 = cljs.core.first(seq__77425__$1);
var seq__77425__$2 = cljs.core.next(seq__77425__$1);
var opts = first__77426__$1;
var args = seq__77425__$2;
if((cljs.core.count(args) > (2))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(opts)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_legacy_MBQL,args));
} else {
var opts__$1 = metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(opts);
var G__77438 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_legacy_MBQL,args));
if(cljs.core.seq(opts__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__77438,opts__$1);
} else {
return G__77438;
}
}
}));
metabase.lib.convert.update_list__GT_legacy_boolean_expression = (function metabase$lib$convert$update_list__GT_legacy_boolean_expression(m,pMBQL_key,legacy_key){
var G__77450 = m;
var G__77450__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pMBQL_key)),(1)))?medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(G__77450,pMBQL_key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_legacy_MBQL,cljs.core.first)):G__77450);
var G__77450__$2 = (((cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pMBQL_key)) > (1)))?medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(G__77450__$1,pMBQL_key,(function (p1__77448_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.convert.__GT_legacy_MBQL),p1__77448_SHARP_);
})):G__77450__$1);
return clojure.set.rename_keys(G__77450__$2,cljs.core.PersistentArrayMap.createAsIfByAssoc([pMBQL_key,legacy_key]));

});
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (join){
var base = (function (){var G__77463 = metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(join);
if(clojure.string.starts_with_QMARK_(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join),metabase.lib.convert.legacy_default_join_alias)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__77463,new cljs.core.Keyword(null,"alias","alias",-2039751630));
} else {
return G__77463;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update_vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(base,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], 0)),metabase.lib.convert.__GT_legacy_MBQL),metabase.lib.convert.update_list__GT_legacy_boolean_expression(cljs.core.select_keys(base,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null)),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.Keyword(null,"condition","condition",1668437652)),metabase.lib.convert.chain_stages(base)], 0));
}));
/**
 * If a pMBQL query stage has `:source-card` convert it to legacy-style `:source-table "card__<id>"`.
 */
metabase.lib.convert.source_card__GT_legacy_source_table = (function metabase$lib$convert$source_card__GT_legacy_source_table(stage){
var temp__5802__auto__ = new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(stage);
if(cljs.core.truth_(temp__5802__auto__)){
var source_card_id = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(stage,new cljs.core.Keyword(null,"source-card","source-card",-1580820390)),new cljs.core.Keyword(null,"source-table","source-table",-225307692),["card__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_card_id)].join(''));
} else {
return stage;
}
});
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (stage){
return metabase.lib.convert.do_with_aggregation_list(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(stage),(function (){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__77489_SHARP_,p2__77490_SHARP_){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(p1__77489_SHARP_,p2__77490_SHARP_,metabase.lib.convert.__GT_legacy_MBQL);
}),metabase.lib.convert.update_list__GT_legacy_boolean_expression(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(metabase.lib.convert.source_card__GT_legacy_source_table(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(stage)),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p1__77491_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.aggregation__GT_legacy_MBQL,p1__77491_SHARP_);
})),new cljs.core.Keyword(null,"expressions","expressions",255689909),(function (expressions){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$lib$convert$iter__77504(s__77505){
return (new cljs.core.LazySeq(null,(function (){
var s__77505__$1 = s__77505;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__77505__$1);
if(temp__5804__auto__){
var s__77505__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77505__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__77505__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__77507 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__77506 = (0);
while(true){
if((i__77506 < size__5479__auto__)){
var expression = cljs.core._nth(c__5478__auto__,i__77506);
var legacy_clause = metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(expression);
cljs.core.chunk_append(b__77507,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.util.expression_name(expression),(cljs.core.truth_((function (){var G__77524 = cljs.core.first(legacy_clause);
var fexpr__77523 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),null], null), null);
return (fexpr__77523.cljs$core$IFn$_invoke$arity$1 ? fexpr__77523.cljs$core$IFn$_invoke$arity$1(G__77524) : fexpr__77523.call(null,G__77524));
})())?cljs.core.second(legacy_clause):legacy_clause)], null));

var G__77725 = (i__77506 + (1));
i__77506 = G__77725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77507),metabase$lib$convert$iter__77504(cljs.core.chunk_rest(s__77505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77507),null);
}
} else {
var expression = cljs.core.first(s__77505__$2);
var legacy_clause = metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(expression);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.util.expression_name(expression),(cljs.core.truth_((function (){var G__77538 = cljs.core.first(legacy_clause);
var fexpr__77537 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),null], null), null);
return (fexpr__77537.cljs$core$IFn$_invoke$arity$1 ? fexpr__77537.cljs$core$IFn$_invoke$arity$1(G__77538) : fexpr__77537.call(null,G__77538));
})())?cljs.core.second(legacy_clause):legacy_clause)], null),metabase$lib$convert$iter__77504(cljs.core.rest(s__77505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(expressions);
})());
})),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"filter","filter",-948537934)),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.convert.stage_keys,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"expressions","expressions",255689909)], 0)));
}));
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),(function (stage){
return cljs.core.update_vals(metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(stage),metabase.lib.convert.__GT_legacy_MBQL);
}));
metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (query){
try{var base = metabase.lib.convert.disqualify.cljs$core$IFn$_invoke$arity$1(query);
var parameters = new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(base);
var inner_query = metabase.lib.convert.chain_stages(base);
var query_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(cljs.core.last(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query))),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194)))?new cljs.core.Keyword(null,"native","native",-613060878):new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(base,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword("lib.convert","converted?","lib.convert/converted?",1937433683)], 0)),(function (){var G__77567 = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"type","type",1174270348),query_type,query_type,inner_query]);
if(cljs.core.seq(parameters)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77567,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),parameters);
} else {
return G__77567;
}
})()], 0));
}catch (e77554){var e = e77554;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3((function (){var G__77560 = "Error converting MLv2 query to legacy query: %s";
var G__77561 = cljs.core.ex_message(e);
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$2(G__77560,G__77561) : metabase.lib.util.format.call(null,G__77560,G__77561));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null),e);
}}));
/**
 * Inputs: ([query legacy-ref]
 *         [query :- :metabase.lib.schema/query stage-number :- :int legacy-ref :- some?])
 *   Return: :metabase.lib.schema.ref/ref
 *        
 * 
 *   Convert a legacy MBQL `:field`/`:aggregation`/`:expression` reference to pMBQL. Normalizes the reference if needed,
 *   and handles JS -> Clj conversion as needed.
 */
metabase.lib.convert.legacy_ref__GT_pMBQL = (function() {
var metabase$lib$convert$legacy_ref__GT_pMBQL = null;
var metabase$lib$convert$legacy_ref__GT_pMBQL__2 = (function (query,legacy_ref){
return (metabase.lib.convert.legacy_ref__GT_pMBQL.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.convert.legacy_ref__GT_pMBQL.cljs$core$IFn$_invoke$arity$3(query,(-1),legacy_ref) : metabase.lib.convert.legacy_ref__GT_pMBQL.call(null,query,(-1),legacy_ref));
});
var metabase$lib$convert$legacy_ref__GT_pMBQL__3 = (function (query,stage_number,legacy_ref){
var legacy_ref__$1 = metabase.legacy_mbql.normalize.normalize_fragment(null,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(legacy_ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
var map__77575 = metabase.lib.util.query_stage(query,stage_number);
var map__77575__$1 = cljs.core.__destructure_map(map__77575);
var aggregations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77575__$1,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696));
return metabase.lib.convert.do_with_aggregation_list(aggregations,(function (){
try{return metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(legacy_ref__$1);
}catch (e77580){var e = e77580;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3((function (){var G__77581 = "Error converting legacy ref to pMBQL: %s";
var G__77582 = cljs.core.ex_message(e);
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$2(G__77581,G__77582) : metabase.lib.util.format.call(null,G__77581,G__77582));
})(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number,new cljs.core.Keyword(null,"legacy-ref","legacy-ref",1686404700),legacy_ref__$1,new cljs.core.Keyword(null,"legacy-index->pMBQL-uuid","legacy-index->pMBQL-uuid",-192973336),metabase.lib.convert._STAR_legacy_index__GT_pMBQL_uuid_STAR_], null),e);
}}));
});
metabase$lib$convert$legacy_ref__GT_pMBQL = function(query,stage_number,legacy_ref){
switch(arguments.length){
case 2:
return metabase$lib$convert$legacy_ref__GT_pMBQL__2.call(this,query,stage_number);
case 3:
return metabase$lib$convert$legacy_ref__GT_pMBQL__3.call(this,query,stage_number,legacy_ref);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$convert$legacy_ref__GT_pMBQL.cljs$core$IFn$_invoke$arity$2 = metabase$lib$convert$legacy_ref__GT_pMBQL__2;
metabase$lib$convert$legacy_ref__GT_pMBQL.cljs$core$IFn$_invoke$arity$3 = metabase$lib$convert$legacy_ref__GT_pMBQL__3;
return metabase$lib$convert$legacy_ref__GT_pMBQL;
})()
;
metabase.lib.convert.from_json = (function metabase$lib$convert$from_json(query_fragment){
if(cljs.core.object_QMARK_(query_fragment)){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(query_fragment,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
} else {
return query_fragment;
}
});
/**
 * Given a JSON-formatted legacy MBQL query, transform it to pMBQL.
 * 
 *   If you have only the inner query map (`{:source-table 2 ...}` or similar), call [[js-legacy-inner-query->pMBQL]]
 *   instead.
 */
metabase.lib.convert.js_legacy_query__GT_pMBQL = (function metabase$lib$convert$js_legacy_query__GT_pMBQL(query_map){
var clj_map = metabase.lib.convert.from_json(query_map);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(clj_map),"mbql/query")){
return metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$1(clj_map);
} else {
return metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.normalize.normalize(metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3(clj_map,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510))));
}
});
/**
 * Given a JSON-formatted *inner* query, transform it to pMBQL.
 * 
 *   If you have a complete legacy query (`{:type :query, :query {...}}` or similar), call [[js-legacy-query->pMBQL]]
 *   instead.
 */
metabase.lib.convert.js_legacy_inner_query__GT_pMBQL = (function metabase$lib$convert$js_legacy_inner_query__GT_pMBQL(inner_query){
return metabase.lib.convert.js_legacy_query__GT_pMBQL(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),metabase.lib.convert.from_json(inner_query)], null));
});

//# sourceMappingURL=metabase.lib.convert.js.map
