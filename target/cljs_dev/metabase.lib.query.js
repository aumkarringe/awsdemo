var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.legacy_mbql.normalize.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.expression.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.normalize.js");
require("./metabase.lib.options.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.util.js");
require("./metabase.lib.util.match.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.query.js");

goog.provide('metabase.lib.query');
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (_query,_stage_number,_x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You can't calculate a metadata map for a query! Use lib.metadata.calculation/returned-columns-method instead.",cljs.core.PersistentArrayMap.EMPTY);
}));
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (query,stage_number,a_query,options){
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(a_query,stage_number),options);
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (query,stage_number,x,style){
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(x,stage_number),style);
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: :boolean
 *        
 * 
 *   Given a query, return whether it is a native query.
 */
metabase.lib.query.native_QMARK_ = (function metabase$lib$query$native_QMARK_(query){
var stage = metabase.lib.util.query_stage(query,(0));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(stage),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194));
});
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (_query,_stage_number,query){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-native","is-native",-1797717934),metabase.lib.query.native_QMARK_(query),new cljs.core.Keyword(null,"is-editable","is-editable",269018020),metabase.lib.metadata.editable_QMARK_(query)], null);
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: :metabase.lib.schema.common/int-greater-than-or-equal-to-zero
 *        
 * 
 *   Returns the count of stages in query
 */
metabase.lib.query.stage_count = (function metabase$lib$query$stage_count(query){
return cljs.core.count(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.query !== 'undefined') && (typeof metabase.lib.query.can_run_method !== 'undefined')){
} else {
/**
 * Returns whether the query is runnable based on first stage :lib/type
 */
metabase.lib.query.can_run_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77726 = cljs.core.get_global_hierarchy;
return (fexpr__77726.cljs$core$IFn$_invoke$arity$0 ? fexpr__77726.cljs$core$IFn$_invoke$arity$0() : fexpr__77726.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.query","can-run-method"),(function (query,_card_type){
return new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,(0)));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.query.can_run_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_query,_card_type){
return true;
}));
metabase.lib.query.can_run_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (query,card_type){
var or__5002__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(card_type,new cljs.core.Keyword(null,"metric","metric",408798077));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var last_stage = metabase.lib.util.query_stage(query,(-1));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(last_stage)),(1));
}
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query card-type :- :metabase.lib.schema.metadata/card.type]
 *   Return: :boolean
 *        
 * 
 *   Returns whether the query is runnable. Manually validate schema for cljs.
 */
metabase.lib.query.can_run = (function metabase$lib$query$can_run(query,card_type){
var and__5000__auto__ = (function (){var _STAR_suppress_expression_type_check_QMARK__STAR__orig_val__77727 = metabase.lib.schema.expression._STAR_suppress_expression_type_check_QMARK__STAR_;
var _STAR_suppress_expression_type_check_QMARK__STAR__temp_val__77728 = true;
(metabase.lib.schema.expression._STAR_suppress_expression_type_check_QMARK__STAR_ = _STAR_suppress_expression_type_check_QMARK__STAR__temp_val__77728);

try{return metabase.util.malli.registry.validate(new cljs.core.Keyword("metabase.lib.schema","query","metabase.lib.schema/query",-1207387140),query);
}finally {(metabase.lib.schema.expression._STAR_suppress_expression_type_check_QMARK__STAR_ = _STAR_suppress_expression_type_check_QMARK__STAR__orig_val__77727);
}})();
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.boolean$(metabase.lib.query.can_run_method.cljs$core$IFn$_invoke$arity$2(query,card_type));
} else {
return and__5000__auto__;
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.query !== 'undefined') && (typeof metabase.lib.query.can_save_method !== 'undefined')){
} else {
/**
 * Returns whether the query can be saved based on first stage :lib/type.
 */
metabase.lib.query.can_save_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77729 = cljs.core.get_global_hierarchy;
return (fexpr__77729.cljs$core$IFn$_invoke$arity$0 ? fexpr__77729.cljs$core$IFn$_invoke$arity$0() : fexpr__77729.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.query","can-save-method"),(function (query,_card_type){
return new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,(0)));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.query.can_save_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_query,_card_type){
return true;
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query card-type :- :metabase.lib.schema.metadata/card.type]
 *   Return: :boolean
 *        
 * 
 *   Returns whether `query` for a card of `card-type` can be saved.
 */
metabase.lib.query.can_save = (function metabase$lib$query$can_save(query,card_type){
var and__5000__auto__ = metabase.lib.metadata.editable_QMARK_(query);
if(and__5000__auto__){
var and__5000__auto____$1 = metabase.lib.query.can_run(query,card_type);
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.boolean$(metabase.lib.query.can_save_method.cljs$core$IFn$_invoke$arity$2(query,card_type));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: :boolean
 *        
 * 
 *   Returns whether the query can be previewed.
 * 
 *   See [[metabase.lib.js/can-preview]] for how this differs from [[can-run]].
 */
metabase.lib.query.can_preview = (function metabase$lib$query$can_preview(query){
var and__5000__auto__ = metabase.lib.query.can_run(query,"question");
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.every_QMARK_((function (stage){
return cljs.core.boolean$(((cljs.core.seq(new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(stage))) || (cljs.core.not(cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$query$can_preview_$_match_77730(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__77733 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__77733)) && ((cljs.core.count(_AMPERSAND_match_left__77733) === (1))))){
try{var _AMPERSAND_match_left__77733_0__77735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__77733,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__77733_0__77735,new cljs.core.Keyword(null,"offset","offset",296498311))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77751){if((e77751 instanceof Error)){
var e__46214__auto__ = e77751;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77751;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77750){if((e77750 instanceof Error)){
var e__46214__auto__ = e77750;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77750;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77749){if((e77749 instanceof Error)){
var e__46214__auto__ = e77749;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$query$can_preview_$_match_77730,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e77749;

}
}})(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(stage)))))))));
}),new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query));
} else {
return and__5000__auto__;
}
});
/**
 * Add `:base-type` and `:effective-type` to options of fields in `x` using `metadata-provider`. Works on pmbql fields.
 *   `:effective-type` is required for coerced fields to pass schema checks.
 */
metabase.lib.query.add_types_to_fields = (function metabase$lib$query$add_types_to_fields(x,metadata_provider){
var temp__5802__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$query$add_types_to_fields_$_match_77752(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__77754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__77754,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_1__77755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.complement(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458))))(_AMPERSAND_match_1__77755))){
try{var _AMPERSAND_match_2__77756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.integer_QMARK_(_AMPERSAND_match_2__77756)){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var _options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("mbql","stage-metadata","mbql/stage-metadata",1090845629),null], null), null),_AMPERSAND_parents))?null:id)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77760){if((e77760 instanceof Error)){
var e__46214__auto__ = e77760;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77760;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77759){if((e77759 instanceof Error)){
var e__46214__auto__ = e77759;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77759;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77758){if((e77758 instanceof Error)){
var e__46214__auto__ = e77758;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77758;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77757){if((e77757 instanceof Error)){
var e__46214__auto__ = e77757;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$query$add_types_to_fields_$_match_77752,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e77757;

}
}})(cljs.core.PersistentVector.EMPTY,x)));
if(temp__5802__auto__){
var field_ids = temp__5802__auto__;
metabase.lib.metadata.bulk_metadata(metadata_provider,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),field_ids);

return (function metabase$lib$query$add_types_to_fields_$_replace_77761(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__77763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__77763,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_1__77764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.complement(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458))))(_AMPERSAND_match_1__77764))){
try{var _AMPERSAND_match_2__77765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.integer_QMARK_(_AMPERSAND_match_2__77765)){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("mbql","stage-metadata","mbql/stage-metadata",1090845629),null], null), null),_AMPERSAND_parents))){
return _AMPERSAND_match;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(_AMPERSAND_match,(1),cljs.core.merge,(((((!((new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(options) == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.field(metadata_provider,id))))))?null:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"base-type","base-type",1167971299)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.lib.query","transformation-added-base-type","metabase.lib.query/transformation-added-base-type",121891381),true], null)),cljs.core.select_keys(metabase.lib.metadata.field(metadata_provider,id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458)], null))], 0))));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e77769){if((e77769 instanceof Error)){
var e__46214__auto__ = e77769;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77769;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77768){if((e77768 instanceof Error)){
var e__46214__auto__ = e77768;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77768;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77767){if((e77767 instanceof Error)){
var e__46214__auto__ = e77767;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77767;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77766){if((e77766 instanceof Error)){
var e__46214__auto__ = e77766;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$lib$query$add_types_to_fields_$_replace_77761,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e77766;

}
}})(cljs.core.PersistentVector.EMPTY,x);
} else {
return x;
}
});
/**
 * Inputs: ([metadata-providerable stages]
 *         [database-id :- :metabase.lib.schema.id/database metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable stages])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Create a query from a sequence of stages.
 */
metabase.lib.query.query_with_stages = (function() {
var metabase$lib$query$query_with_stages = null;
var metabase$lib$query$query_with_stages__2 = (function (metadata_providerable,stages){
var G__77770 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.database(metadata_providerable));
var G__77771 = metadata_providerable;
var G__77772 = stages;
return (metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$3(G__77770,G__77771,G__77772) : metabase.lib.query.query_with_stages.call(null,G__77770,G__77771,G__77772));
});
var metabase$lib$query$query_with_stages__3 = (function (database_id,metadata_providerable,stages){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220),metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),new cljs.core.Keyword(null,"database","database",1849087575),database_id,new cljs.core.Keyword(null,"stages","stages",-442109532),stages], null);
});
metabase$lib$query$query_with_stages = function(database_id,metadata_providerable,stages){
switch(arguments.length){
case 2:
return metabase$lib$query$query_with_stages__2.call(this,database_id,metadata_providerable);
case 3:
return metabase$lib$query$query_with_stages__3.call(this,database_id,metadata_providerable,stages);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$query$query_with_stages.cljs$core$IFn$_invoke$arity$2 = metabase$lib$query$query_with_stages__2;
metabase$lib$query$query_with_stages.cljs$core$IFn$_invoke$arity$3 = metabase$lib$query$query_with_stages__3;
return metabase$lib$query$query_with_stages;
})()
;
metabase.lib.query.query_from_legacy_query = (function metabase$lib$query$query_from_legacy_query(metadata_providerable,legacy_query){
try{var pmbql_query = metabase.lib.query.add_types_to_fields((function (){var _STAR_suppress_expression_type_check_QMARK__STAR__orig_val__77774 = metabase.lib.schema.expression._STAR_suppress_expression_type_check_QMARK__STAR_;
var _STAR_suppress_expression_type_check_QMARK__STAR__temp_val__77775 = true;
(metabase.lib.schema.expression._STAR_suppress_expression_type_check_QMARK__STAR_ = _STAR_suppress_expression_type_check_QMARK__STAR__temp_val__77775);

try{return metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.normalize.normalize_or_throw(legacy_query));
}finally {(metabase.lib.schema.expression._STAR_suppress_expression_type_check_QMARK__STAR_ = _STAR_suppress_expression_type_check_QMARK__STAR__orig_val__77774);
}})(),metadata_providerable);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pmbql_query,metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(metadata_providerable,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(pmbql_query))], 0));
}catch (e77773){var e = e77773;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error creating query from legacy query: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"legacy-query","legacy-query",-2061120084),legacy_query], null),e);
}});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.query !== 'undefined') && (typeof metabase.lib.query.query_method !== 'undefined')){
} else {
/**
 * Implementation for [[query]].
 */
metabase.lib.query.query_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77776 = cljs.core.get_global_hierarchy;
return (fexpr__77776.cljs$core$IFn$_invoke$arity$0 ? fexpr__77776.cljs$core$IFn$_invoke$arity$0() : fexpr__77776.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.query","query-method"),(function (_metadata_providerable,x){
var or__5002__auto__ = metabase.lib.util.normalized_query_type(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.dispatch.dispatch_value(x);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.query.query_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"query","query",-1288509510),(function (metadata_providerable,legacy_query){
return metabase.lib.query.query_from_legacy_query(metadata_providerable,legacy_query);
}));
metabase.lib.query.query_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"native","native",-613060878),(function (metadata_providerable,legacy_query){
return metabase.lib.query.query_from_legacy_query(metadata_providerable,legacy_query);
}));
metabase.lib.query.query_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422),(function (metadata_providerable,query){
return metabase.lib.query.query_method.cljs$core$IFn$_invoke$arity$2(metadata_providerable,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(query),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662)));
}));
metabase.lib.query.query_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (metadata_providerable,p__77778){
var map__77779 = p__77778;
var map__77779__$1 = cljs.core.__destructure_map(map__77779);
var query = map__77779__$1;
var converted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77779__$1,new cljs.core.Keyword("lib.convert","converted?","lib.convert/converted?",1937433683));
var metadata_provider = metabase.lib.metadata.__GT_metadata_provider(metadata_providerable);
var query__$1 = metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220),metadata_provider),new cljs.core.Keyword("lib.convert","converted?","lib.convert/converted?",1937433683)));
var stages = new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query__$1);
var G__77780 = query__$1;
if(cljs.core.truth_(converted_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77780,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__77781){
var vec__77782 = p__77781;
var stage_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77782,(0),null);
var stage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77782,(1),null);
return (function metabase$lib$query$replace_77785(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__77787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__77787,new cljs.core.Keyword(null,"expression","expression",202311876))){
try{var _AMPERSAND_match_1__77788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.complement(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458))))(_AMPERSAND_match_1__77788))){
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var found_ref = (function (){try{return medley.core.remove_vals((function (p1__77777_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","*","type/*",-1283496752),p1__77777_SHARP_);
}),cljs.core.select_keys(cljs.core.second(metabase.lib.expression.expression_ref.cljs$core$IFn$_invoke$arity$3(query__$1,stage_number,expression_name)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458)], null)));
}catch (e77793){var _ = e77793;
return null;
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([found_ref,opts], 0)),expression_name], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77792){if((e77792 instanceof Error)){
var e__46214__auto__ = e77792;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77792;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77791){if((e77791 instanceof Error)){
var e__46214__auto__ = e77791;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77791;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77790){if((e77790 instanceof Error)){
var e__46214__auto__ = e77790;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$lib$query$replace_77785,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e77790;

}
}})(cljs.core.PersistentVector.EMPTY,metabase.lib.query.add_types_to_fields(stage,metadata_provider));
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(stages)));
} else {
return G__77780;
}
}));
metabase.lib.query.query_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","table","metadata/table",-882499405),(function (metadata_providerable,table_metadata){
return metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(metadata_providerable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.Keyword(null,"source-table","source-table",-225307692),metabase.util.the_id(table_metadata)], null)], null));
}));
metabase.lib.query.metric_query = (function metabase$lib$query$metric_query(metadata_providerable,card_metadata){
var card_id = metabase.util.the_id(card_metadata);
var base_query = metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(metadata_providerable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.Keyword(null,"source-card","source-card",-1580820390),card_id], null)], null));
var metric_breakouts = new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage((function (){var G__77796 = metadata_providerable;
var G__77797 = new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427).cljs$core$IFn$_invoke$arity$1(card_metadata);
return (metabase.lib.query.query.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.query.query.cljs$core$IFn$_invoke$arity$2(G__77796,G__77797) : metabase.lib.query.query.call(null,G__77796,G__77797));
})(),(-1)));
var base_query__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__77794_SHARP_,p2__77795_SHARP_){
return metabase.lib.util.add_summary_clause(p1__77794_SHARP_,(0),new cljs.core.Keyword(null,"breakout","breakout",-732419050),p2__77795_SHARP_);
}),base_query,metric_breakouts);
return metabase.lib.util.add_summary_clause(base_query__$1,(0),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metric","metric",408798077),cljs.core.PersistentArrayMap.EMPTY,card_id], null)));
});
metabase.lib.query.query_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),(function (metadata_providerable,card_metadata){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card_metadata),new cljs.core.Keyword(null,"metric","metric",408798077))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(card_metadata),new cljs.core.Keyword("metdata","metric","metdata/metric",-615748553))))){
return metabase.lib.query.metric_query(metadata_providerable,card_metadata);
} else {
return metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(metadata_providerable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.Keyword(null,"source-card","source-card",-1580820390),metabase.util.the_id(card_metadata)], null)], null));
}
}));
metabase.lib.query.query_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),(function (metadata_providerable,card_metadata){
return metabase.lib.query.metric_query(metadata_providerable,card_metadata);
}));
metabase.lib.query.query_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (metadata_providerable,mbql_stage){
return metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(metadata_providerable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mbql_stage], null));
}));
metabase.lib.query.query_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),(function (metadata_providerable,native_stage){
return metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(metadata_providerable,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [native_stage], null));
}));
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable x]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Create a new MBQL query from anything that could conceptually be an MBQL query, like a Database or Table or an
 *   existing MBQL query or saved question or whatever. If the thing in question does not already include metadata, pass
 *   it in separately -- metadata is needed for most query manipulation operations.
 */
metabase.lib.query.query = (function metabase$lib$query$query(metadata_providerable,x){
return metabase.lib.query.query_method.cljs$core$IFn$_invoke$arity$2(metadata_providerable,x);
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable database-id :- :metabase.lib.schema.id/database inner-query :- :map]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Create a pMBQL query from a legacy inner query.
 */
metabase.lib.query.query_from_legacy_inner_query = (function metabase$lib$query$query_from_legacy_inner_query(metadata_providerable,database_id,inner_query){
return metabase.lib.query.query(metadata_providerable,metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(metabase.lib.convert.legacy_query_from_inner_query(database_id,inner_query)));
});
/**
 * Convert the pMBQL `a-query` into a legacy MBQL query.
 */
metabase.lib.query.__GT_legacy_MBQL = (function metabase$lib$query$__GT_legacy_MBQL(a_query){
return metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(a_query);
});
/**
 * Inputs: [original-query :- :metabase.lib.schema/query table-id :- [:or :metabase.lib.schema.id/table :string]]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Changes an existing query to use a different source table or card.
 * Can be passed an integer table id or a legacy `card__<id>` string.
 */
metabase.lib.query.with_different_table = (function metabase$lib$query$with_different_table(original_query,table_id){
var metadata_provider = metabase.lib.metadata.__GT_metadata_provider(original_query);
return metabase.lib.query.query(metadata_provider,metabase.lib.metadata.table_or_card(metadata_provider,table_id));
});
metabase.lib.query.occurs_in_expression_QMARK_ = (function metabase$lib$query$occurs_in_expression_QMARK_(expression_clause,clause_type,expression_body){
return ((((metabase.lib.util.clause_of_type_QMARK_(expression_clause,clause_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expression_clause,(2)),expression_body)))) || (((cljs.core.sequential_QMARK_(expression_clause)) && (cljs.core.boolean$(cljs.core.some((function (p1__77798_SHARP_){
return (metabase.lib.query.occurs_in_expression_QMARK_.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.query.occurs_in_expression_QMARK_.cljs$core$IFn$_invoke$arity$3(p1__77798_SHARP_,clause_type,expression_body) : metabase.lib.query.occurs_in_expression_QMARK_.call(null,p1__77798_SHARP_,clause_type,expression_body));
}),cljs.core.nnext(expression_clause)))))));
});
/**
 * Tests whether predicate `pred` is true for an element of clause `clause` of `query-or-join`.
 *   The test is transitive over joins.
 */
metabase.lib.query.occurs_in_stage_clause_QMARK_ = (function metabase$lib$query$occurs_in_stage_clause_QMARK_(query_or_join,clause,pred){
return cljs.core.boolean$(cljs.core.some((function (stage){
var or__5002__auto__ = cljs.core.some(pred,(clause.cljs$core$IFn$_invoke$arity$1 ? clause.cljs$core$IFn$_invoke$arity$1(stage) : clause.call(null,stage)));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.some((function (p1__77799_SHARP_){
return (metabase.lib.query.occurs_in_stage_clause_QMARK_.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.query.occurs_in_stage_clause_QMARK_.cljs$core$IFn$_invoke$arity$3(p1__77799_SHARP_,clause,pred) : metabase.lib.query.occurs_in_stage_clause_QMARK_.call(null,p1__77799_SHARP_,clause,pred));
}),new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage));
}
}),new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query_or_join)));
});
/**
 * Inputs: [a-query :- :metabase.lib.schema/query segment-id :- [:or :metabase.lib.schema.id/segment :string]]
 *   Return: :boolean
 *        
 * 
 *   Tests whether `a-query` uses segment with ID `segment-id`.
 *   `segment-id` can be a regular segment ID or a string. The latter is for symmetry
 *   with [[uses-metric?]].
 */
metabase.lib.query.uses_segment_QMARK_ = (function metabase$lib$query$uses_segment_QMARK_(a_query,segment_id){
return metabase.lib.query.occurs_in_stage_clause_QMARK_(a_query,new cljs.core.Keyword(null,"filters","filters",974726919),(function (p1__77800_SHARP_){
return metabase.lib.query.occurs_in_expression_QMARK_(p1__77800_SHARP_,new cljs.core.Keyword(null,"segment","segment",-964921196),segment_id);
}));
});
/**
 * Inputs: [a-query :- :metabase.lib.schema/query metric-id :- :metabase.lib.schema.id/metric]
 *   Return: :boolean
 *        
 * 
 *   Tests whether `a-query` uses metric with ID `metric-id`.
 */
metabase.lib.query.uses_metric_QMARK_ = (function metabase$lib$query$uses_metric_QMARK_(a_query,metric_id){
return metabase.lib.query.occurs_in_stage_clause_QMARK_(a_query,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p1__77801_SHARP_){
return metabase.lib.query.occurs_in_expression_QMARK_(p1__77801_SHARP_,new cljs.core.Keyword(null,"metric","metric",408798077),metric_id);
}));
});
metabase.lib.query.clause_types_order = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.Keyword(null,"breakout","breakout",-732419050),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"expressions","expressions",255689909),new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.Keyword(null,"data","data",-232669377)], null);
metabase.lib.query.preview_stage = (function metabase$lib$query$preview_stage(stage,clause_type,clause_index){
var to_drop = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__77802_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__77802_SHARP_,clause_type);
}),metabase.lib.query.clause_types_order);
var G__77804 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,stage,to_drop);
if(cljs.core.truth_(clause_index)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77804,clause_type,(function (p1__77803_SHARP_){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((clause_index + (1)),p1__77803_SHARP_));
}));
} else {
return G__77804;
}
});
/**
 * Inputs: [a-query :- :metabase.lib.schema/query stage-number :- :int clause-type :- [:enum :data :joins :expressions :filters :aggregation :breakout :order-by :limit] clause-index :- [:maybe :int]]
 *   Return: [:maybe :metabase.lib.schema/query]
 *        
 * 
 *   *Truncates* a query for use in the Notebook editor's "preview" system.
 * 
 *   Takes `query` and `stage-index` as usual.
 * 
 *   - Stages later than `stage-index` are dropped.
 *   - `clause-type` is an enum (see below); all clauses of *later* types are dropped.
 *   - `clause-index` is optional: if not provided then all clauses are kept; if it's a number than clauses
 *  `[0, clause-index]` are kept. (To keep no clauses, specify the earlier `clause-type`.)
 * 
 *   The `clause-type` enum represents the steps of the notebook editor, in the order they appear in the notebook:
 * 
 *   - `:data` - just the source data for the stage
 *   - `:joins`
 *   - `:expressions`
 *   - `:filters`
 *   - `:breakout`
 *   - `:aggregation`
 *   - `:order-by`
 *   - `:limit`
 */
metabase.lib.query.preview_query = (function metabase$lib$query$preview_query(a_query,stage_number,clause_type,clause_index){
if(metabase.lib.query.native_QMARK_(a_query)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("preview-query cannot be called on native queries",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),a_query], null));
} else {
}

var stage_number__$1 = metabase.lib.util.canonical_stage_index(a_query,stage_number);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a_query,new cljs.core.Keyword(null,"stages","stages",-442109532),(function (p1__77805_SHARP_){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((stage_number__$1 + (1)),p1__77805_SHARP_));
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stages","stages",-442109532),stage_number__$1], null),metabase.lib.query.preview_stage,clause_type,clause_index);
});

//# sourceMappingURL=metabase.lib.query.js.map
