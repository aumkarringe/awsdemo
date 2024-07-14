var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.legacy_mbql.normalize.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.query.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
require("./metabase.util.humanization.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.card.js");

goog.provide('metabase.lib.card');
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),(function (_query,_stage_number,card_metadata,_style){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"name","name",1843675177))(card_metadata);
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),(function (_query,_stage_number,p__77806){
var map__77807 = p__77806;
var map__77807__$1 = cljs.core.__destructure_map(map__77807);
var card_metadata = map__77807__$1;
var card_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77807__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77807__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
var G__77808 = card_metadata;
if(cljs.core.not(display_name)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77808,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.util.humanization.name__GT_human_readable_name.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"simple","simple",-581868663),card_name));
} else {
return G__77808;
}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),(function (query,stage_number,card_metadata){
var G__77809 = (function (){var fexpr__77810 = cljs.core.get_method(metabase.lib.metadata.calculation.display_info_method,new cljs.core.Keyword(null,"default","default",-1987822328));
return (fexpr__77810.cljs$core$IFn$_invoke$arity$3 ? fexpr__77810.cljs$core$IFn$_invoke$arity$3(query,stage_number,card_metadata) : fexpr__77810.call(null,query,stage_number,card_metadata));
})();
var G__77809__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card_metadata),new cljs.core.Keyword(null,"question","question",-1411720117)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77809,new cljs.core.Keyword(null,"question?","question?",2094771368),true):G__77809);
var G__77809__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card_metadata),new cljs.core.Keyword(null,"model","model",331153215)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77809__$1,new cljs.core.Keyword(null,"model?","model?",1502581451),true):G__77809__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card_metadata),new cljs.core.Keyword(null,"metric","metric",408798077))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77809__$2,new cljs.core.Keyword(null,"metric?","metric?",695603677),true);
} else {
return G__77809__$2;
}
}));
metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),(function (query,stage_number,p__77811,p__77812){
var map__77813 = p__77811;
var map__77813__$1 = cljs.core.__destructure_map(map__77813);
var card_metadata = map__77813__$1;
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77813__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var result_metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77813__$1,new cljs.core.Keyword(null,"result-metadata","result-metadata",2017934672));
var map__77814 = p__77812;
var map__77814__$1 = cljs.core.__destructure_map(map__77814);
var options = map__77814__$1;
var include_implicitly_joinable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77814__$1,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866));
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77814__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,card_metadata,options),(cljs.core.truth_(include_implicitly_joinable_QMARK_)?metabase.lib.metadata.calculation.implicitly_joinable_columns(query,stage_number,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fields,result_metadata),unique_name_fn):null));
}));
/**
 * Inputs: [card-id :- :metabase.lib.schema.id/card]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   If for some reason the metadata is unavailable. This is better than returning nothing I guess.
 */
metabase.lib.card.fallback_display_name = (function metabase$lib$card$fallback_display_name(card_id){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Question {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([card_id], 0))], 0));
});
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"source-card","source-card",-1580820390),(function (query,stage_number,_k){
var map__77815 = metabase.lib.util.query_stage(query,stage_number);
var map__77815__$1 = cljs.core.__destructure_map(map__77815);
var source_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77815__$1,new cljs.core.Keyword(null,"source-card","source-card",-1580820390));
if(cljs.core.truth_(source_card)){
var or__5002__auto__ = (function (){var temp__5804__auto__ = metabase.lib.metadata.card(query,source_card);
if(cljs.core.truth_(temp__5804__auto__)){
var card_metadata = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,card_metadata,new cljs.core.Keyword(null,"long","long",-171452093));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.card.fallback_display_name(source_card);
}
} else {
return null;
}
}));
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable card-query :- :map]
 *   Return: [:maybe [:sequential :metabase.lib.schema.metadata/column]]
 */
metabase.lib.card.infer_returned_columns = (function metabase$lib$card$infer_returned_columns(metadata_providerable,card_query){
if((!((card_query == null)))){
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$1(metabase.lib.query.query(metadata_providerable,card_query));
} else {
return null;
}
});
metabase.lib.card.Card = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Card with :dataset-query"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427),new cljs.core.Keyword(null,"map","map",1371690461)], null)], null);
/**
 * Things are fundamentally broken because of #29763, and every time I try to fix this is ends up being a giant mess to
 *   untangle. The FE currently ignores results metadata for ad-hoc queries, and thus cannot match up 'correct' Field
 *   refs like 'Products__CATEGORY'... for the time being we'll have to force ID refs even when we should be using
 *   nominal refs so as to not completely destroy the FE. Once we port more stuff over maybe we can fix this.
 */
metabase.lib.card._STAR_force_broken_card_refs_STAR_ = true;
/**
 * Inputs: ([metadata-providerable col]
 *         [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable card-or-id :- [:maybe [:or :metabase.lib.schema.id/card :metabase.lib.schema.metadata/card]] col :- :map])
 *   Return: :metabase.lib.schema.metadata/column
 *        
 * 
 *   Massage possibly-legacy Card results metadata into MLv2 ColumnMetadata.
 */
metabase.lib.card.__GT_card_metadata_column = (function() {
var metabase$lib$card$__GT_card_metadata_column = null;
var metabase$lib$card$__GT_card_metadata_column__2 = (function (metadata_providerable,col){
return (metabase.lib.card.__GT_card_metadata_column.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.card.__GT_card_metadata_column.cljs$core$IFn$_invoke$arity$3(metadata_providerable,null,col) : metabase.lib.card.__GT_card_metadata_column.call(null,metadata_providerable,null,col));
});
var metabase$lib$card$__GT_card_metadata_column__3 = (function (metadata_providerable,card_or_id,col){
var col__$1 = cljs.core.update_keys(col,metabase.util.__GT_kebab_case_en);
var G__77816 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword("type","*","type/*",-1283496752),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054)], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(col__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var field_id = temp__5804__auto__;
try{return metabase.lib.metadata.field(metadata_providerable,field_id);
}catch (e77817){var _ = e77817;
return null;
}} else {
return null;
}
})(),col__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","card","source/card",-139977973),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177))(col__$1)], null)], 0));
var G__77816__$1 = (cljs.core.truth_(card_or_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77816,new cljs.core.Keyword("lib","card-id","lib/card-id",-1770167062),metabase.util.the_id(card_or_id)):G__77816);
var G__77816__$2 = (cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.card._STAR_force_broken_card_refs_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core.not(card_or_id)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.card(metadata_providerable,metabase.util.the_id(card_or_id))),new cljs.core.Keyword(null,"model","model",331153215))));
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77816__$1,new cljs.core.Keyword("metabase.lib.card","force-broken-id-refs","metabase.lib.card/force-broken-id-refs",-868945458),true):G__77816__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107).cljs$core$IFn$_invoke$arity$1(col__$1),new cljs.core.Keyword("type","FK","type/FK",360937035))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77816__$2,new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287),null);
} else {
return G__77816__$2;
}
});
metabase$lib$card$__GT_card_metadata_column = function(metadata_providerable,card_or_id,col){
switch(arguments.length){
case 2:
return metabase$lib$card$__GT_card_metadata_column__2.call(this,metadata_providerable,card_or_id);
case 3:
return metabase$lib$card$__GT_card_metadata_column__3.call(this,metadata_providerable,card_or_id,col);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$card$__GT_card_metadata_column.cljs$core$IFn$_invoke$arity$2 = metabase$lib$card$__GT_card_metadata_column__2;
metabase$lib$card$__GT_card_metadata_column.cljs$core$IFn$_invoke$arity$3 = metabase$lib$card$__GT_card_metadata_column__3;
return metabase$lib$card$__GT_card_metadata_column;
})()
;
metabase.lib.card.CardColumnMetadata = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword("metabase.lib.schema.metadata","column","metabase.lib.schema.metadata/column",-570344650),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("source","card","source/card",-139977973)], null)], null)], null)], null);
metabase.lib.card.CardColumns = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),metabase.lib.card.CardColumnMetadata], null)], null);
/**
 * Used to track the ID of Cards we're resolving columns for, to avoid inifinte recursion for Cards that have circular
 *   references between one another.
 */
metabase.lib.card._STAR_card_metadata_columns_card_ids_STAR_ = cljs.core.PersistentHashSet.EMPTY;
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable card :- Card]
 *   Return: CardColumns
 *        
 * 
 *   Get a normalized version of the saved metadata associated with Card metadata.
 */
metabase.lib.card.card_metadata_columns = (function metabase$lib$card$card_metadata_columns(metadata_providerable,card){
if(cljs.core.contains_QMARK_(metabase.lib.card._STAR_card_metadata_columns_card_ids_STAR_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(card))){
return null;
} else {
var _STAR_card_metadata_columns_card_ids_STAR__orig_val__77818 = metabase.lib.card._STAR_card_metadata_columns_card_ids_STAR_;
var _STAR_card_metadata_columns_card_ids_STAR__temp_val__77819 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.lib.card._STAR_card_metadata_columns_card_ids_STAR_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(card));
(metabase.lib.card._STAR_card_metadata_columns_card_ids_STAR_ = _STAR_card_metadata_columns_card_ids_STAR__temp_val__77819);

try{var temp__5804__auto__ = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"result-metadata","result-metadata",2017934672).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return metabase.lib.card.infer_returned_columns(metadata_providerable,new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427).cljs$core$IFn$_invoke$arity$1(card));
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var result_metadata = temp__5804__auto__;
var temp__5804__auto____$1 = cljs.core.not_empty(((cljs.core.map_QMARK_(result_metadata))?new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(result_metadata):((cljs.core.sequential_QMARK_(result_metadata))?result_metadata:null)));
if(cljs.core.truth_(temp__5804__auto____$1)){
var cols = temp__5804__auto____$1;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(metabase.lib.card.__GT_card_metadata_column,metadata_providerable,card),cols);
} else {
return null;
}
} else {
return null;
}
}finally {(metabase.lib.card._STAR_card_metadata_columns_card_ids_STAR_ = _STAR_card_metadata_columns_card_ids_STAR__orig_val__77818);
}}
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable card-id :- :metabase.lib.schema.id/card]
 *   Return: CardColumns
 *        
 * 
 *   Metadata associated with a Saved Question with `card-id`.
 */
metabase.lib.card.saved_question_metadata = (function metabase$lib$card$saved_question_metadata(metadata_providerable,card_id){
var temp__5804__auto__ = metabase.lib.metadata.card(metadata_providerable,card_id);
if(cljs.core.truth_(temp__5804__auto__)){
var card = temp__5804__auto__;
return metabase.lib.card.card_metadata_columns(metadata_providerable,card);
} else {
return null;
}
});
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),(function (query,_stage_number,card,p__77820){
var map__77821 = p__77820;
var map__77821__$1 = cljs.core.__destructure_map(map__77821);
var options = map__77821__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77821__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
var desired_alias = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177))(col);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(desired_alias) : unique_name_fn.call(null,desired_alias)));
}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword(null,"metric","metric",408798077)))?(function (){var metric_query = metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.normalize.normalize(new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427).cljs$core$IFn$_invoke$arity$1(card))),(-1),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.Keyword(null,"breakout","breakout",-732419050)], 0));
return cljs.core.not_empty(metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metric_query,new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220),new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220).cljs$core$IFn$_invoke$arity$1(query)),(-1),metabase.lib.util.query_stage(metric_query,(-1)),options));
})():metabase.lib.card.card_metadata_columns(query,card)));
}));

//# sourceMappingURL=metabase.lib.card.js.map
