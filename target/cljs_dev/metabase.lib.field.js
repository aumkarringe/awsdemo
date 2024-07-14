var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./medley.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.binning.js");
require("./metabase.lib.card.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.expression.js");
require("./metabase.lib.join.js");
require("./metabase.lib.join.util.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.remove_replace.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.shared.util.time.js");
require("./metabase.util.js");
require("./metabase.util.humanization.js");
require("./metabase.util.log.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.field.js");

goog.provide('metabase.lib.field');
/**
 * Inputs: [column-name :- :metabase.lib.schema.common/non-blank-string column-metadatas :- [:sequential :metabase.lib.schema.metadata/column]]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Find the column with `column-name` in a sequence of `column-metadatas`.
 */
metabase.lib.field.resolve_column_name_in_metadata = (function metabase$lib$field$resolve_column_name_in_metadata(column_name,column_metadatas){
var or__5002__auto__ = cljs.core.some((function (k){
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__78935_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__78935_SHARP_,k),column_name);
}),column_metadatas);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var level__73199__auto___79058 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73200__auto___79059 = "metabase.lib.field";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73200__auto___79059,level__73199__auto___79058))){
var x__73201__auto___79060 = "Invalid :field clause: column %s does not exist. Found: %s";
if((x__73201__auto___79060 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___79059,level__73199__auto___79058,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_name], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),column_metadatas)], 0))], 0)),x__73201__auto___79060);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___79059,level__73199__auto___79058,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__73201__auto___79060,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_name], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),column_metadatas)], 0))], 0)),null);
}
} else {
}

return null;
}
});
/**
 * Whether we're in a recursive call to [[resolve-column-name]] or not. Prevent infinite recursion (#32063)
 */
metabase.lib.field._STAR_recursive_column_resolution_by_name_STAR_ = false;
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int column-name :- :metabase.lib.schema.common/non-blank-string]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   String column name: get metadata from the previous stage, if it exists, otherwise if this is the first stage and we
 *   have a native query or a Saved Question source query or whatever get it from our results metadata.
 */
metabase.lib.field.resolve_column_name = (function metabase$lib$field$resolve_column_name(query,stage_number,column_name){
if(cljs.core.truth_(metabase.lib.field._STAR_recursive_column_resolution_by_name_STAR_)){
return null;
} else {
var _STAR_recursive_column_resolution_by_name_STAR__orig_val__78942 = metabase.lib.field._STAR_recursive_column_resolution_by_name_STAR_;
var _STAR_recursive_column_resolution_by_name_STAR__temp_val__78943 = true;
(metabase.lib.field._STAR_recursive_column_resolution_by_name_STAR_ = _STAR_recursive_column_resolution_by_name_STAR__temp_val__78943);

try{var previous_stage_number = metabase.lib.util.previous_stage_number(query,stage_number);
var stage = (cljs.core.truth_(previous_stage_number)?metabase.lib.util.query_stage(query,previous_stage_number):metabase.lib.util.query_stage(query,stage_number));
var stage_columns = (function (){var or__5002__auto__ = new cljs.core.Keyword("metabase.lib.stage","cached-metadata","metabase.lib.stage/cached-metadata",-1406479151).cljs$core$IFn$_invoke$arity$1(stage);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610),new cljs.core.Keyword(null,"columns","columns",1998437288)], null));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = (cljs.core.truth_((function (){var or__5002__auto____$2 = new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(stage);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(stage);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(stage);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
return new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(stage);
}
}
}
})())?metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage):null);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var level__73199__auto__ = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73200__auto__ = "metabase.lib.field";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73200__auto__,level__73199__auto__))){
var x__73201__auto__ = "Cannot resolve column %s: stage has no metadata";
if((x__73201__auto__ instanceof Error)){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto__,level__73199__auto__,metabase.util.log.format_msg(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_name], 0))),x__73201__auto__);
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto__,level__73199__auto__,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__73201__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_name], 0))], 0)),null);
}
} else {
return null;
}
}
}
}
})();
var temp__5804__auto__ = (function (){var and__5000__auto__ = cljs.core.seq(stage_columns);
if(and__5000__auto__){
return metabase.lib.field.resolve_column_name_in_metadata(column_name,stage_columns);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var column = temp__5804__auto__;
var G__78945 = column;
if(cljs.core.truth_(previous_stage_number)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.join.with_join_alias(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__78945,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727)], 0)),null),new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5002__auto__ = new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column);
}
})()),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878));
} else {
return G__78945;
}
} else {
return null;
}
}finally {(metabase.lib.field._STAR_recursive_column_resolution_by_name_STAR_ = _STAR_recursive_column_resolution_by_name_STAR__orig_val__78942);
}}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int [_field {:keys [join-alias], :as opts} id-or-name :as _field-clause] :- :mbql.clause/field]
 *   Return: :metabase.lib.schema.metadata/column
 *        
 * 
 *   Resolve metadata for a `:field` ref. This is part of the implementation
 *   for [[lib.metadata.calculation/metadata-method]] a `:field` clause.
 */
metabase.lib.field.resolve_field_metadata = (function metabase$lib$field$resolve_field_metadata(query,stage_number,p__78948){
var vec__78949 = p__78948;
var _field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78949,(0),null);
var map__78952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78949,(1),null);
var map__78952__$1 = cljs.core.__destructure_map(map__78952);
var opts = map__78952__$1;
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78952__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78949,(2),null);
var _field_clause = vec__78949;
var metadata = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var base_type = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),base_type], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var effective_type = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),effective_type], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"binning","binning",1709835866).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var binning = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),binning], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5804__auto__)){
var unit = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),unit], null);
} else {
return null;
}
})(),((cljs.core.integer_QMARK_(id_or_name))?(function (){var or__5002__auto__ = metabase.lib.equality.resolve_field_id(query,stage_number,id_or_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_or_name)], null);
}
})():(cljs.core.truth_(join_alias)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_or_name)], null):(function (){var or__5002__auto__ = metabase.lib.field.resolve_column_name(query,stage_number,id_or_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id_or_name)], null);
}
})()
))], 0));
var G__78955 = metadata;
if(cljs.core.truth_(join_alias)){
return metabase.lib.join.with_join_alias(G__78955,join_alias);
} else {
return G__78955;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query metadata :- :metabase.lib.schema.metadata/column]
 *   Return: :any
 *        
 * 
 *   If this is a nested column, add metadata about the parent column.
 */
metabase.lib.field.add_parent_column_metadata = (function metabase$lib$field$add_parent_column_metadata(query,metadata){
var parent_metadata = metabase.lib.metadata.field(query,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(metadata));
var map__78956 = (function (){var G__78957 = parent_metadata;
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(parent_metadata))){
return (metabase.lib.field.add_parent_column_metadata.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.field.add_parent_column_metadata.cljs$core$IFn$_invoke$arity$2(query,G__78957) : metabase.lib.field.add_parent_column_metadata.call(null,query,G__78957));
} else {
return G__78957;
}
})();
var map__78956__$1 = cljs.core.__destructure_map(map__78956);
var parent_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78956__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var parent_display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78956__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metadata,new cljs.core.Keyword("lib","simple-name","lib/simple-name",-734346338),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata)),new cljs.core.Keyword(null,"name","name",1843675177),(function (field_name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_name),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name)].join('');
})),new cljs.core.Keyword("metabase.lib.field","simple-display-name","metabase.lib.field/simple-display-name",494797345),new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(metadata)),new cljs.core.Keyword(null,"display-name","display-name",694513143),(function (display_name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_display_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)].join('');
}));
});
/**
 * Effective type of a column when taking the `::temporal-unit` into account. If we have a temporal extraction like
 *   `:month-of-year`, then this actually returns an integer rather than the 'original` effective type of `:type/Date` or
 *   whatever.
 */
metabase.lib.field.column_metadata_effective_type = (function metabase$lib$field$column_metadata_effective_type(p__78958){
var map__78959 = p__78958;
var map__78959__$1 = cljs.core.__destructure_map(map__78959);
var column_metadata = map__78959__$1;
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78959__$1,new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727));
if(cljs.core.truth_((function (){var and__5000__auto__ = temporal_unit;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.contains_QMARK_(metabase.lib.schema.temporal_bucketing.datetime_extraction_units,temporal_unit);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword("type","Integer","type/Integer",-638928316);
} else {
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(column_metadata);
}
});
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (_query,_stage_number,column_metadata){
return metabase.lib.field.column_metadata_effective_type(column_metadata);
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,p__78960){
var vec__78961 = p__78960;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78961,(0),null);
var map__78964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78961,(1),null);
var map__78964__$1 = cljs.core.__destructure_map(map__78964);
var _opts = map__78964__$1;
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78964__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78961,(2),null);
var field_ref = vec__78961;
var metadata = (function (){var G__78965 = metabase.lib.field.resolve_field_metadata(query,stage_number,field_ref);
if(cljs.core.truth_(temporal_unit)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78965,new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),temporal_unit);
} else {
return G__78965;
}
})();
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,metadata);
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (_query,_stage_number,p__78966){
var map__78967 = p__78966;
var map__78967__$1 = cljs.core.__destructure_map(map__78967);
var field_metadata = map__78967__$1;
var field_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78967__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(field_metadata,new cljs.core.Keyword(null,"name","name",1843675177),field_name);
}));
/**
 * Extend column metadata `metadata` with information specific to `field-ref` in `query` at stage `stage-number`.
 *   `metadata` should be the metadata of a resolved field or a visible column matching `field-ref`.
 */
metabase.lib.field.extend_column_metadata_from_ref = (function metabase$lib$field$extend_column_metadata_from_ref(query,stage_number,metadata,p__78968){
var vec__78969 = p__78968;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78969,(0),null);
var map__78972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78969,(1),null);
var map__78972__$1 = cljs.core.__destructure_map(map__78972);
var opts = map__78972__$1;
var source_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78972__$1,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78972__$1,new cljs.core.Keyword(null,"base-type","base-type",1167971299));
var binning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78972__$1,new cljs.core.Keyword(null,"binning","binning",1709835866));
var effective_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78972__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458));
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78972__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
var source_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78972__$1,new cljs.core.Keyword(null,"source-field","source-field",933829534));
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78972__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
var field_ref = vec__78969;
var metadata__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),source_uuid], null),metadata,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,field_ref);
}
})()], null)], 0));
var G__78973 = metadata__$1;
var G__78973__$1 = (cljs.core.truth_(effective_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78973,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),effective_type):G__78973);
var G__78973__$2 = (cljs.core.truth_(base_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78973__$1,new cljs.core.Keyword(null,"base-type","base-type",1167971299),base_type):G__78973__$1);
var G__78973__$3 = (cljs.core.truth_(temporal_unit)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78973__$2,new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),temporal_unit):G__78973__$2);
var G__78973__$4 = (cljs.core.truth_(binning)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78973__$3,new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),binning):G__78973__$3);
var G__78973__$5 = (cljs.core.truth_(source_field)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78973__$4,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),source_field):G__78973__$4);
if(cljs.core.truth_(join_alias)){
return metabase.lib.join.with_join_alias(G__78973__$5,join_alias);
} else {
return G__78973__$5;
}
});
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,field_ref){
var field_metadata = metabase.lib.field.resolve_field_metadata(query,stage_number,field_ref);
var metadata = metabase.lib.field.extend_column_metadata_from_ref(query,stage_number,field_metadata,field_ref);
var G__78974 = metadata;
if(cljs.core.truth_(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(metadata))){
return metabase.lib.field.add_parent_column_metadata(query,G__78974);
} else {
return G__78974;
}
}));
metabase.lib.field.field_nesting_path = (function metabase$lib$field$field_nesting_path(metadata_providerable,p__78975){
var map__78976 = p__78975;
var map__78976__$1 = cljs.core.__destructure_map(map__78976);
var _field_metadata = map__78976__$1;
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78976__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78976__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var field_id = parent_id;
var path = (new cljs.core.List(null,display_name,null,(1),null));
while(true){
if(cljs.core.truth_(field_id)){
var map__78978 = metabase.lib.metadata.field(metadata_providerable,field_id);
var map__78978__$1 = cljs.core.__destructure_map(map__78978);
var display_name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78978__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
var parent_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78978__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var G__79061 = parent_id__$1;
var G__79062 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,display_name__$1);
field_id = G__79061;
path = G__79062;
continue;
} else {
return path;
}
break;
}
});
metabase.lib.field.nest_display_name = (function metabase$lib$field$nest_display_name(metadata_providerable,field_metadata){
var path = metabase.lib.field.field_nesting_path(metadata_providerable,field_metadata);
if(cljs.core.every_QMARK_(cljs.core.some_QMARK_,path)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(": ",path);
} else {
return null;
}
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (query,stage_number,p__78979,style){
var map__78980 = p__78979;
var map__78980__$1 = cljs.core.__destructure_map(map__78980);
var field_metadata = map__78980__$1;
var binning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78980__$1,new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823));
var fk_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78980__$1,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78980__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78980__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78980__$1,new cljs.core.Keyword(null,"source-alias","source-alias",1652088724));
var simple_display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78980__$1,new cljs.core.Keyword("metabase.lib.field","simple-display-name","metabase.lib.field/simple-display-name",494797345));
var field_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78980__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var hide_bin_bucket_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78980__$1,new cljs.core.Keyword("lib","hide-bin-bucket?","lib/hide-bin-bucket?",-701033945));
var field_display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78980__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78980__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var humanized_name = metabase.util.humanization.name__GT_human_readable_name.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"simple","simple",-581868663),field_name);
var field_display_name__$1 = (function (){var or__5002__auto__ = simple_display_name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (cljs.core.truth_((function (){var and__5000__auto__ = parent_id;
if(cljs.core.truth_(and__5000__auto__)){
return (((field_display_name == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field_display_name,humanized_name)));
} else {
return and__5000__auto__;
}
})())?metabase.lib.field.nest_display_name(query,field_metadata):null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = field_display_name;
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
if(typeof field_name === 'string'){
return humanized_name;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_name);
}
}
}
}
})();
var join_display_name = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"long","long",-171452093))) && ((!(clojure.string.includes_QMARK_(field_display_name__$1," \u2192 "))))))?(function (){var or__5002__auto__ = (cljs.core.truth_(fk_field_id)?(function (){var temp__5802__auto__ = metabase.lib.metadata.field(query,fk_field_id);
if(cljs.core.truth_(temp__5802__auto__)){
var field = temp__5802__auto__;
return metabase.lib.util.strip_id(new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,field)));
} else {
var table = metabase.lib.metadata.table_or_card(query,table_id);
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,table,style);
}
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = join_alias;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return metabase.lib.join.util.current_join_alias(field_metadata);
}
}
})():null);
var display_name = (cljs.core.truth_(join_display_name)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(join_display_name)," \u2192 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_display_name__$1)].join(''):field_display_name__$1);
var temporal_format = (function (display_name__$1){
var G__78981 = "%s: %s";
var G__78982 = display_name__$1;
var G__78983 = metabase.util.capitalize_en(clojure.string.replace(cljs.core.name(temporal_unit),"-"," "));
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3(G__78981,G__78982,G__78983) : metabase.lib.util.format.call(null,G__78981,G__78982,G__78983));
});
var bin_format = (function (display_name__$1){
var G__78984 = "%s: %s";
var G__78985 = display_name__$1;
var G__78986 = metabase.lib.binning.binning_display_name(binning,field_metadata);
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3(G__78984,G__78985,G__78986) : metabase.lib.util.format.call(null,G__78984,G__78985,G__78986));
});
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"long","long",-171452093));
if(and__5000__auto__){
return hide_bin_bucket_QMARK_;
} else {
return and__5000__auto__;
}
})())){
return display_name;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = temporal_unit;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(display_name,temporal_format(humanized_name));
} else {
return and__5000__auto__;
}
})())){
return temporal_format(display_name);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = binning;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(display_name,bin_format(humanized_name));
} else {
return and__5000__auto__;
}
})())){
return bin_format(display_name);
} else {
return display_name;

}
}
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,p__78987,style){
var vec__78988 = p__78987;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78988,(0),null);
var map__78991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78988,(1),null);
var map__78991__$1 = cljs.core.__destructure_map(map__78991);
var _opts = map__78991__$1;
var binning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78991__$1,new cljs.core.Keyword(null,"binning","binning",1709835866));
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78991__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78991__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
var source_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78991__$1,new cljs.core.Keyword(null,"source-field","source-field",933829534));
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78988,(2),null);
var field_clause = vec__78988;
var temp__5802__auto__ = (function (){var G__78992 = metabase.lib.field.resolve_field_metadata(query,stage_number,field_clause);
var G__78992__$1 = (cljs.core.truth_(join_alias)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78992,new cljs.core.Keyword(null,"source-alias","source-alias",1652088724),join_alias):G__78992);
var G__78992__$2 = (cljs.core.truth_(temporal_unit)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78992__$1,new cljs.core.Keyword(null,"unit","unit",375175175),temporal_unit):G__78992__$1);
var G__78992__$3 = (cljs.core.truth_(binning)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78992__$2,new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),binning):G__78992__$2);
if(cljs.core.truth_(source_field)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78992__$3,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),source_field);
} else {
return G__78992__$3;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var field_metadata = temp__5802__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,field_metadata,style);
} else {
return metabase.shared.util.i18n.js_i18n("[Unknown Field]");
}
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (_query,_stage_number,p__78993){
var map__78994 = p__78993;
var map__78994__$1 = cljs.core.__destructure_map(map__78994);
var field_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78994__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return field_name;
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,p__78995){
var vec__78996 = p__78995;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78996,(0),null);
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78996,(1),null);
var field_clause = vec__78996;
var temp__5802__auto__ = metabase.lib.field.resolve_field_metadata(query,stage_number,field_clause);
if(cljs.core.truth_(temp__5802__auto__)){
var field_metadata = temp__5802__auto__;
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,field_metadata);
} else {
return "unknown_field";
}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (query,stage_number,field_metadata){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__78999 = cljs.core.get_method(metabase.lib.metadata.calculation.display_info_method,new cljs.core.Keyword(null,"default","default",-1987822328));
return (fexpr__78999.cljs$core$IFn$_invoke$arity$3 ? fexpr__78999.cljs$core$IFn$_invoke$arity$3(query,stage_number,field_metadata) : fexpr__78999.call(null,query,stage_number,field_metadata));
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,field_metadata),new cljs.core.Keyword(null,"long-display-name","long-display-name",1550784464),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,field_metadata,new cljs.core.Keyword(null,"long","long",-171452093))], null),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(field_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var description = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),description], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022).cljs$core$IFn$_invoke$arity$1(field_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var fingerprint = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022),fingerprint], null);
} else {
return null;
}
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(field_metadata),new cljs.core.Keyword("source","card","source/card",-139977973)))?(function (){var temp__5804__auto__ = new cljs.core.Keyword("lib","card-id","lib/card-id",-1770167062).cljs$core$IFn$_invoke$arity$1(field_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var card_id = temp__5804__auto__;
var temp__5804__auto____$1 = metabase.lib.metadata.card(query,card_id);
if(cljs.core.truth_(temp__5804__auto____$1)){
var card = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card)], null)], null);
} else {
return null;
}
} else {
return null;
}
})():null)], 0));
}));
metabase.lib.temporal_bucket.temporal_bucket_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__79000){
var vec__79001 = p__79000;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79001,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79001,(1),null);
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79001,(2),null);
return new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(opts);
}));
metabase.lib.temporal_bucket.temporal_bucket_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (metadata){
return new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727).cljs$core$IFn$_invoke$arity$1(metadata);
}));
metabase.lib.temporal_bucket.with_temporal_bucket_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__79004,unit){
var vec__79005 = p__79004;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79005,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79005,(1),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79005,(2),null);
if(cljs.core.truth_(unit)){
var extraction_unit_QMARK_ = cljs.core.contains_QMARK_(metabase.lib.schema.temporal_bucketing.datetime_extraction_units,unit);
var original_effective_type = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(options);
var new_effective_type = ((extraction_unit_QMARK_)?new cljs.core.Keyword("type","Integer","type/Integer",-638928316):original_effective_type);
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new_effective_type,new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372),original_effective_type], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),options__$1,id_or_name], null);
} else {
var options__$1 = (function (){var temp__5802__auto__ = new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5802__auto__)){
var original_effective_type = temp__5802__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),original_effective_type),new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372));
} else {
return options;
}
})();
var options__$2 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),options__$2,id_or_name], null);
}
}));
metabase.lib.temporal_bucket.with_temporal_bucket_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (metadata,unit){
if(cljs.core.truth_(unit)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metadata,new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),unit,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(metadata)], 0));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(metadata,new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372)], 0));
}
}));
metabase.lib.temporal_bucket.available_temporal_buckets_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,field_ref){
return metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.field.resolve_field_metadata(query,stage_number,field_ref));
}));
metabase.lib.field.fingerprint_based_default_unit = (function metabase$lib$field$fingerprint_based_default_unit(fingerprint){
try{var temp__5804__auto__ = new cljs.core.Keyword("type","DateTime","type/DateTime",352113310).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(fingerprint));
if(cljs.core.truth_(temp__5804__auto__)){
var map__79009 = temp__5804__auto__;
var map__79009__$1 = cljs.core.__destructure_map(map__79009);
var earliest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79009__$1,new cljs.core.Keyword(null,"earliest","earliest",-1928154382));
var latest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79009__$1,new cljs.core.Keyword(null,"latest","latest",24323665));
var days = metabase.shared.util.time.day_diff.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$1(earliest),metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$1(latest)], 0));
if(cljs.core.NaN_QMARK_(days)){
return null;
} else {
var pred__79010 = cljs.core._GT_;
var expr__79011 = days;
if(cljs.core.truth_((pred__79010.cljs$core$IFn$_invoke$arity$2 ? pred__79010.cljs$core$IFn$_invoke$arity$2((1),expr__79011) : pred__79010.call(null,(1),expr__79011)))){
return new cljs.core.Keyword(null,"minute","minute",-642875969);
} else {
if(cljs.core.truth_((pred__79010.cljs$core$IFn$_invoke$arity$2 ? pred__79010.cljs$core$IFn$_invoke$arity$2((31),expr__79011) : pred__79010.call(null,(31),expr__79011)))){
return new cljs.core.Keyword(null,"day","day",-274800446);
} else {
if(cljs.core.truth_((pred__79010.cljs$core$IFn$_invoke$arity$2 ? pred__79010.cljs$core$IFn$_invoke$arity$2((365),expr__79011) : pred__79010.call(null,(365),expr__79011)))){
return new cljs.core.Keyword(null,"week","week",-1326473278);
} else {
return new cljs.core.Keyword(null,"month","month",-1960248533);
}
}
}
}
} else {
return null;
}
}catch (e79008){if((e79008 instanceof Error)){
var _ = e79008;
return null;
} else {
throw e79008;

}
}});
metabase.lib.field.mark_unit = (function metabase$lib$field$mark_unit(options,option_key,unit){
var G__79014 = options;
if(cljs.core.truth_(cljs.core.some((function (p1__79013_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(p1__79013_SHARP_),unit);
}),options))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (option){
var G__79015 = option;
var G__79015__$1 = ((cljs.core.contains_QMARK_(option,option_key))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__79015,option,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([option_key], 0)):G__79015);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(option),unit)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79015__$1,option_key,true);
} else {
return G__79015__$1;
}
}),G__79014);
} else {
return G__79014;
}
});
metabase.lib.temporal_bucket.available_temporal_buckets_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (_query,_stage_number,field_metadata){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(field_metadata),new cljs.core.Keyword("source","expressions","source/expressions",-458367840))){
var effective_type = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(field_metadata);
var fingerprint_default = (function (){var G__79016 = field_metadata;
var G__79016__$1 = (((G__79016 == null))?null:new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022).cljs$core$IFn$_invoke$arity$1(G__79016));
if((G__79016__$1 == null)){
return null;
} else {
return metabase.lib.field.fingerprint_based_default_unit(G__79016__$1);
}
})();
var G__79017 = ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("type","DateTime","type/DateTime",352113310)))?metabase.lib.temporal_bucket.datetime_bucket_options:((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("type","Date","type/Date",-690428629)))?metabase.lib.temporal_bucket.date_bucket_options:((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("type","Time","type/Time",-814852413)))?metabase.lib.temporal_bucket.time_bucket_options:cljs.core.PersistentVector.EMPTY
)));
var G__79017__$1 = (cljs.core.truth_(fingerprint_default)?metabase.lib.field.mark_unit(G__79017,new cljs.core.Keyword(null,"default","default",-1987822328),fingerprint_default):G__79017);
if(cljs.core.truth_(new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727).cljs$core$IFn$_invoke$arity$1(field_metadata))){
return metabase.lib.field.mark_unit(G__79017__$1,new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727).cljs$core$IFn$_invoke$arity$1(field_metadata));
} else {
return G__79017__$1;
}
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));
metabase.lib.binning.binning_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (field_clause){
var G__79018 = field_clause;
var G__79018__$1 = (((G__79018 == null))?null:metabase.lib.options.options(G__79018));
var G__79018__$2 = (((G__79018__$1 == null))?null:new cljs.core.Keyword(null,"binning","binning",1709835866).cljs$core$IFn$_invoke$arity$1(G__79018__$1));
if((G__79018__$2 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__79018__$2,new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.binning","binning","metabase.lib.binning/binning",-2037319392),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"metadata-fn","metadata-fn",915781389),(function (query,stage_number){
return metabase.lib.field.resolve_field_metadata(query,stage_number,field_clause);
})], 0));
}
}));
metabase.lib.binning.binning_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (metadata){
var G__79019 = metadata;
var G__79019__$1 = (((G__79019 == null))?null:new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823).cljs$core$IFn$_invoke$arity$1(G__79019));
if((G__79019__$1 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__79019__$1,new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.binning","binning","metabase.lib.binning/binning",-2037319392),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"metadata-fn","metadata-fn",915781389),cljs.core.constantly(metadata)], 0));
}
}));
metabase.lib.binning.with_binning_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (field_clause,binning){
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(field_clause,metabase.util.assoc_dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"binning","binning",1709835866),binning], 0));
}));
metabase.lib.binning.with_binning_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (metadata,binning){
return metabase.util.assoc_dissoc(metadata,new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),binning);
}));
metabase.lib.binning.available_binning_strategies_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (query,stage_number,field_ref){
return metabase.lib.binning.available_binning_strategies.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.field.resolve_field_metadata(query,stage_number,field_ref));
}));
metabase.lib.binning.available_binning_strategies_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (query,_stage_number,p__79020){
var map__79021 = p__79020;
var map__79021__$1 = cljs.core.__destructure_map(map__79021);
var field_metadata = map__79021__$1;
var effective_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79021__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458));
var fingerprint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79021__$1,new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022));
var semantic_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79021__$1,new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(field_metadata),new cljs.core.Keyword("source","expressions","source/expressions",-458367840))){
var binning_QMARK_ = (function (){var G__79022 = query;
var G__79022__$1 = (((G__79022 == null))?null:metabase.lib.metadata.database(G__79022));
var G__79022__$2 = (((G__79022__$1 == null))?null:new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(G__79022__$1));
if((G__79022__$2 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__79022__$2,new cljs.core.Keyword(null,"binning","binning",1709835866));
}
})();
var fingerprint__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(fingerprint,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("type","Number","type/Number",-2071693690)], null));
var existing = metabase.lib.binning.binning(field_metadata);
var strategies = ((cljs.core.not((function (){var and__5000__auto__ = binning_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(fingerprint__$1);
if(cljs.core.truth_(and__5000__auto____$1)){
return new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(fingerprint__$1);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})()))?null:((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(semantic_type,new cljs.core.Keyword("type","Coordinate","type/Coordinate",1950913043)))?metabase.lib.binning.coordinate_binning_strategies():((((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(effective_type,new cljs.core.Keyword("type","Number","type/Number",-2071693690))) && ((!(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(semantic_type,new cljs.core.Keyword("Relation","*","Relation/*",-706261522)))))))?metabase.lib.binning.numeric_binning_strategies():null)));
var iter__5480__auto__ = (function metabase$lib$field$iter__79023(s__79024){
return (new cljs.core.LazySeq(null,(function (){
var s__79024__$1 = s__79024;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79024__$1);
if(temp__5804__auto__){
var s__79024__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79024__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79024__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79026 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79025 = (0);
while(true){
if((i__79025 < size__5479__auto__)){
var strat = cljs.core._nth(c__5478__auto__,i__79025);
cljs.core.chunk_append(b__79026,(function (){var G__79027 = strat;
if(metabase.lib.binning.strategy_EQ_(strat,existing)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79027,new cljs.core.Keyword(null,"selected","selected",574897764),true);
} else {
return G__79027;
}
})());

var G__79111 = (i__79025 + (1));
i__79025 = G__79111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79026),metabase$lib$field$iter__79023(cljs.core.chunk_rest(s__79024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79026),null);
}
} else {
var strat = cljs.core.first(s__79024__$2);
return cljs.core.cons((function (){var G__79028 = strat;
if(metabase.lib.binning.strategy_EQ_(strat,existing)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79028,new cljs.core.Keyword(null,"selected","selected",574897764),true);
} else {
return G__79028;
}
})(),metabase$lib$field$iter__79023(cljs.core.rest(s__79024__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(strategies);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));
metabase.lib.ref.ref_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (field_clause){
return field_clause;
}));
metabase.lib.field.column_metadata__GT_field_ref = (function metabase$lib$field$column_metadata__GT_field_ref(metadata){
var inherited_column_QMARK_ = (cljs.core.truth_(new cljs.core.Keyword("metabase.lib.card","force-broken-id-refs","metabase.lib.card/force-broken-id-refs",-868945458).cljs$core$IFn$_invoke$arity$1(metadata))?null:(function (){var G__79030 = new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(metadata);
var fexpr__79029 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("source","card","source/card",-139977973),null,new cljs.core.Keyword("source","native","source/native",-1444604147),null,new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878),null], null), null);
return (fexpr__79029.cljs$core$IFn$_invoke$arity$1 ? fexpr__79029.cljs$core$IFn$_invoke$arity$1(G__79030) : fexpr__79029.call(null,G__79030));
})());
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),metabase.lib.field.column_metadata_effective_type(metadata)], null),(function (){var temp__5804__auto__ = (function (){var and__5000__auto__ = cljs.core.not(inherited_column_QMARK_);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357).cljs$core$IFn$_invoke$arity$1(metadata));
if(and__5000__auto____$1){
var and__5000__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("source","implicitly-joinable","source/implicitly-joinable",-729101197),new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(metadata));
if(and__5000__auto____$2){
return new cljs.core.Keyword(null,"source-alias","source-alias",1652088724).cljs$core$IFn$_invoke$arity$1(metadata);
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var source_alias = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),source_alias], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = (cljs.core.truth_(inherited_column_QMARK_)?null:metabase.lib.join.util.current_join_alias(metadata));
if(cljs.core.truth_(temp__5804__auto__)){
var join_alias = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),join_alias], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var temporal_unit = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),temporal_unit], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var original_effective_type = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372),original_effective_type], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var binning = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binning","binning",1709835866),binning], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = (cljs.core.truth_(inherited_column_QMARK_)?null:new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357).cljs$core$IFn$_invoke$arity$1(metadata));
if(cljs.core.truth_(temp__5804__auto__)){
var source_field_id = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source-field","source-field",933829534),source_field_id], null);
} else {
return null;
}
})()], 0));
var id_or_name = (cljs.core.truth_(inherited_column_QMARK_)?cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.Keyword(null,"name","name",1843675177)):cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)))(metadata);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),options,id_or_name], null);
});
metabase.lib.ref.ref_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),(function (p__79033){
var map__79034 = p__79033;
var map__79034__$1 = cljs.core.__destructure_map(map__79034);
var metadata = map__79034__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79034__$1,new cljs.core.Keyword("lib","source","lib/source",-434086550));
var G__79035 = source;
var G__79035__$1 = (((G__79035 instanceof cljs.core.Keyword))?G__79035.fqn:null);
switch (G__79035__$1) {
case "source/aggregations":
return metabase.lib.aggregation.column_metadata__GT_aggregation_ref(metadata);

break;
case "source/expressions":
return metabase.lib.expression.column_metadata__GT_expression_ref(metadata);

break;
case "source/fields":
case "source/breakouts":
if(cljs.core.truth_(new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590).cljs$core$IFn$_invoke$arity$1(metadata))){
return metabase.lib.expression.column_metadata__GT_expression_ref(metadata);
} else {
return metabase.lib.field.column_metadata__GT_field_ref(metadata);
}

break;
default:
return metabase.lib.field.column_metadata__GT_field_ref(metadata);

}
}));
/**
 * Return the [[::lib.schema.metadata/column]] for all the expressions in a stage of a query.
 */
metabase.lib.field.expression_columns = (function metabase$lib$field$expression_columns(query,stage_number){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__79036_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(p1__79036_SHARP_),new cljs.core.Keyword("source","expressions","source/expressions",-458367840));
}),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(query,stage_number),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"include-joined?","include-joined?",-410632824),false,new cljs.core.Keyword(null,"include-expressions?","include-expressions?",-1817639288),true,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null)));
});
/**
 * Inputs: ([xs]
 *         [query xs]
 *         [query :- :metabase.lib.schema/query stage-number :- :int xs])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Specify the `:fields` for a query. Pass `nil` or an empty sequence to remove `:fields`.
 */
metabase.lib.field.with_fields = (function() {
var metabase$lib$field$with_fields = null;
var metabase$lib$field$with_fields__1 = (function (xs){
return (function (query,stage_number){
return (metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$3(query,stage_number,xs) : metabase.lib.field.with_fields.call(null,query,stage_number,xs));
});
});
var metabase$lib$field$with_fields__2 = (function (query,xs){
return (metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.field.with_fields.cljs$core$IFn$_invoke$arity$3(query,(-1),xs) : metabase.lib.field.with_fields.call(null,query,(-1),xs));
});
var metabase$lib$field$with_fields__3 = (function (query,stage_number,xs){
var xs__$1 = cljs.core.not_empty(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,xs));
var expr_cols = metabase.lib.field.expression_columns(query,stage_number);
var included = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__79037_SHARP_){
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,p1__79037_SHARP_,expr_cols);
})),(function (){var or__5002__auto__ = xs__$1;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var to_add = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(included,expr_cols);
var xs__$2 = (cljs.core.truth_(xs__$1)?cljs.core.into.cljs$core$IFn$_invoke$arity$3(xs__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.ref.ref),to_add):null);
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,metabase.util.assoc_dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230),xs__$2], 0));
});
metabase$lib$field$with_fields = function(query,stage_number,xs){
switch(arguments.length){
case 1:
return metabase$lib$field$with_fields__1.call(this,query);
case 2:
return metabase$lib$field$with_fields__2.call(this,query,stage_number);
case 3:
return metabase$lib$field$with_fields__3.call(this,query,stage_number,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$field$with_fields.cljs$core$IFn$_invoke$arity$1 = metabase$lib$field$with_fields__1;
metabase$lib$field$with_fields.cljs$core$IFn$_invoke$arity$2 = metabase$lib$field$with_fields__2;
metabase$lib$field$with_fields.cljs$core$IFn$_invoke$arity$3 = metabase$lib$field$with_fields__3;
return metabase$lib$field$with_fields;
})()
;
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:ref :metabase.lib.schema/fields]]
 *        
 * 
 *   Fetches the `:fields` for a query. Returns `nil` if there are no `:fields`. `:fields` should never be empty; this is
 *   enforced by the Malli schema.
 */
metabase.lib.field.fields = (function() {
var metabase$lib$field$fields = null;
var metabase$lib$field$fields__1 = (function (query){
return (metabase.lib.field.fields.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.field.fields.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.field.fields.call(null,query,(-1)));
});
var metabase$lib$field$fields__2 = (function (query,stage_number){
return new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number));
});
metabase$lib$field$fields = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$field$fields__1.call(this,query);
case 2:
return metabase$lib$field$fields__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$field$fields.cljs$core$IFn$_invoke$arity$1 = metabase$lib$field$fields__1;
metabase$lib$field$fields.cljs$core$IFn$_invoke$arity$2 = metabase$lib$field$fields__2;
return metabase$lib$field$fields;
})()
;
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Return a sequence of column metadatas for columns that you can specify in the `:fields` of a query. This is
 *   basically just the columns returned by the source Table/Saved Question/Model or previous query stage.
 * 
 *   Includes a `:selected?` key letting you know this column is already in `:fields` or not; if `:fields` is
 *   unspecified, all these columns are returned by default, so `:selected?` is true for all columns (this is a little
 *   strange but it matches the behavior of the QB UI).
 */
metabase.lib.field.fieldable_columns = (function() {
var metabase$lib$field$fieldable_columns = null;
var metabase$lib$field$fieldable_columns__1 = (function (query){
return (metabase.lib.field.fieldable_columns.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.field.fieldable_columns.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.field.fieldable_columns.call(null,query,(-1)));
});
var metabase$lib$field$fieldable_columns__2 = (function (query,stage_number){
var visible_columns = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(query,stage_number),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"include-joined?","include-joined?",-410632824),false,new cljs.core.Keyword(null,"include-expressions?","include-expressions?",-1817639288),false,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null));
var selected_fields = metabase.lib.field.fields.cljs$core$IFn$_invoke$arity$2(query,stage_number);
if(cljs.core.empty_QMARK_(selected_fields)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (col){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
}),visible_columns);
} else {
return metabase.lib.equality.mark_selected_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,visible_columns,selected_fields);
}
});
metabase$lib$field$fieldable_columns = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$field$fieldable_columns__1.call(this,query);
case 2:
return metabase$lib$field$fieldable_columns__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$field$fieldable_columns.cljs$core$IFn$_invoke$arity$1 = metabase$lib$field$fieldable_columns__1;
metabase$lib$field$fieldable_columns.cljs$core$IFn$_invoke$arity$2 = metabase$lib$field$fieldable_columns__2;
return metabase$lib$field$fieldable_columns;
})()
;
/**
 * Given a query and stage, sets the `:fields` list to be the fields which would be selected by default.
 *   This is exactly [[lib.metadata.calculation/returned-columns]] filtered by the `:lib/source`.
 *   Fields from explicit joins are listed on the join itself and should not be listed in `:fields`.
 */
metabase.lib.field.populate_fields_for_stage = (function metabase$lib$field$populate_fields_for_stage(query,stage_number){
var defaults = metabase.lib.metadata.calculation.default_columns_for_stage(query,stage_number);
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,defaults)], 0));
});
/**
 * If the given stage already has a `:fields` clause, do nothing. If it doesn't, populate the `:fields` clause with the
 *   full set of `returned-columns`. (See [[populate-fields-for-stage]] for the details.)
 */
metabase.lib.field.query_with_fields = (function metabase$lib$field$query_with_fields(query,stage_number){
var G__79041 = query;
if(cljs.core.not(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)))){
return metabase.lib.field.populate_fields_for_stage(G__79041,stage_number);
} else {
return G__79041;
}
});
metabase.lib.field.include_field = (function metabase$lib$field$include_field(query,stage_number,column){
var populated = metabase.lib.field.query_with_fields(query,stage_number);
var field_refs = metabase.lib.field.fields.cljs$core$IFn$_invoke$arity$2(populated,stage_number);
var match_ref = metabase.lib.equality.find_matching_ref(column,field_refs);
var column_ref = metabase.lib.ref.ref(column);
if(cljs.core.truth_((function (){var and__5000__auto__ = match_ref;
if(cljs.core.truth_(and__5000__auto__)){
return ((typeof cljs.core.last(column_ref) === 'string') || (cljs.core.integer_QMARK_(cljs.core.last(match_ref))));
} else {
return and__5000__auto__;
}
})())){
return query;
} else {
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(populated,stage_number,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.conj,column_ref], 0));
}
});
metabase.lib.field.add_field_to_join = (function metabase$lib$field$add_field_to_join(query,stage_number,column){
var column_ref = metabase.lib.ref.ref(column);
var vec__79042 = cljs.core.first((function (){var iter__5480__auto__ = (function metabase$lib$field$add_field_to_join_$_iter__79045(s__79046){
return (new cljs.core.LazySeq(null,(function (){
var s__79046__$1 = s__79046;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79046__$1);
if(temp__5804__auto__){
var s__79046__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79046__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79046__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79048 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79047 = (0);
while(true){
if((i__79047 < size__5479__auto__)){
var join = cljs.core._nth(c__5478__auto__,i__79047);
var joinables = metabase.lib.join.joinable_columns(query,stage_number,join);
var field = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,column_ref,joinables);
if(cljs.core.truth_(field)){
cljs.core.chunk_append(b__79048,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,field], null));

var G__79113 = (i__79047 + (1));
i__79047 = G__79113;
continue;
} else {
var G__79114 = (i__79047 + (1));
i__79047 = G__79114;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79048),metabase$lib$field$add_field_to_join_$_iter__79045(cljs.core.chunk_rest(s__79046__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79048),null);
}
} else {
var join = cljs.core.first(s__79046__$2);
var joinables = metabase.lib.join.joinable_columns(query,stage_number,join);
var field = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,column_ref,joinables);
if(cljs.core.truth_(field)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,field], null),metabase$lib$field$add_field_to_join_$_iter__79045(cljs.core.rest(s__79046__$2)));
} else {
var G__79115 = cljs.core.rest(s__79046__$2);
s__79046__$1 = G__79115;
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
return iter__5480__auto__(metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2(query,stage_number));
})());
var join = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79042,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79042,(1),null);
var join_fields = metabase.lib.join.join_fields(join);
if(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(join_fields,new cljs.core.Keyword(null,"all","all",892129742));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var and__5000__auto__ = field;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(join_fields,new cljs.core.Keyword(null,"none","none",1333468478));
if(and__5000__auto____$1){
return metabase.lib.equality.find_matching_ref(field,join_fields);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
})())){
return query;
} else {
return metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$4(query,stage_number,join,metabase.lib.join.with_join_fields(join,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(join_fields,new cljs.core.Keyword(null,"none","none",1333468478)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column], null):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(join_fields,column))));
}
});
metabase.lib.field.native_query_fields_edit_error = (function metabase$lib$field$native_query_fields_edit_error(){
return metabase.shared.util.i18n.js_i18n("Fields cannot be adjusted on native queries. Either edit the native query, or save this question and edit the fields in a GUI question based on this one.");
});
metabase.lib.field.source_clauses_only_fields_edit_error = (function metabase$lib$field$source_clauses_only_fields_edit_error(){
return metabase.shared.util.i18n.js_i18n(["Only source columns (those from a table, model, or saved question) can be adjusted on a query. ","Aggregations, breakouts and expressions are always returned, and must be removed from the query or ","hidden in the UI."].join(''));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int column :- lib.metadata.calculation/ColumnMetadataWithSource]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Adds a given field (`ColumnMetadata`, as returned from eg. [[visible-columns]]) to the fields returned by the query.
 *   Exactly what this means depends on the source of the field:
 *   - Source table/card, previous stage of the query, custom expression, aggregation or breakout:
 *    - Add it to the `:fields` list
 *    - If `:fields` is missing, it's implicitly `:all`, so do nothing.
 *   - Implicit join: add it to the `:fields` list; query processor will do the right thing with it.
 *   - Explicit join: add it to that join's `:fields` list.
 */
metabase.lib.field.add_field = (function metabase$lib$field$add_field(query,stage_number,column){
var stage = metabase.lib.util.query_stage(query,stage_number);
var source = new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column);
return metabase.lib.remove_replace.normalize_fields_clauses.cljs$core$IFn$_invoke$arity$1((function (){var G__79049 = source;
var G__79049__$1 = (((G__79049 instanceof cljs.core.Keyword))?G__79049.fqn:null);
switch (G__79049__$1) {
case "source/table-defaults":
case "source/fields":
case "source/card":
case "source/previous-stage":
case "source/expressions":
case "source/aggregations":
case "source/breakouts":
var G__79050 = query;
if(cljs.core.contains_QMARK_(stage,new cljs.core.Keyword(null,"fields","fields",-1932066230))){
return metabase.lib.field.include_field(G__79050,stage_number,column);
} else {
return G__79050;
}

break;
case "source/joins":
return metabase.lib.field.add_field_to_join(query,stage_number,column);

break;
case "source/implicitly-joinable":
return metabase.lib.field.include_field(query,stage_number,column);

break;
case "source/native":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.native_query_fields_edit_error(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage","stage",1843544772),stage_number], null));

break;
default:
var level__73199__auto___79117 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73200__auto___79118 = "metabase.lib.field";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73200__auto___79118,level__73199__auto___79117))){
var x__73201__auto___79119 = "Cannot add-field with unknown source %s";
if((x__73201__auto___79119 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___79118,level__73199__auto___79117,metabase.util.log.format_msg(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source], 0))),x__73201__auto___79119);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___79118,level__73199__auto___79117,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__73201__auto___79119,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source], 0))], 0)),null);
}
} else {
}

return query;

}
})());
});
metabase.lib.field.remove_matching_ref = (function metabase$lib$field$remove_matching_ref(column,refs){
var match = metabase.lib.equality.find_matching_ref(column,refs);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__79051_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__79051_SHARP_,match);
}),refs);
});
/**
 * This is called only for fields that plausibly need removing. If the stage has no `:fields`, this will populate it.
 *   It shouldn't happen that we can't find the target field, but if that does happen, this will return the original query
 *   unchanged. (In particular, if `:fields` did not exist before it will still be omitted.)
 */
metabase.lib.field.exclude_field = (function metabase$lib$field$exclude_field(query,stage_number,column){
var old_fields = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(metabase.lib.field.query_with_fields(query,stage_number),stage_number));
var new_fields = metabase.lib.field.remove_matching_ref(column,old_fields);
var G__79052 = query;
if((cljs.core.count(new_fields) < cljs.core.count(old_fields))){
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(G__79052,stage_number,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230),new_fields], 0));
} else {
return G__79052;
}
});
metabase.lib.field.remove_field_from_join = (function metabase$lib$field$remove_field_from_join(query,stage_number,column){
var join = metabase.lib.join.resolve_join(query,stage_number,new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023).cljs$core$IFn$_invoke$arity$1(column));
var join_fields = metabase.lib.join.join_fields(join);
if((((join_fields == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(join_fields,new cljs.core.Keyword(null,"none","none",1333468478))))){
return query;
} else {
var resolved_join_fields = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(join_fields,new cljs.core.Keyword(null,"all","all",892129742)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,join)):join_fields);
var removed = metabase.lib.field.remove_matching_ref(column,resolved_join_fields);
var G__79053 = query;
if((cljs.core.count(removed) < cljs.core.count(resolved_join_fields))){
return metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$4(G__79053,stage_number,join,metabase.lib.join.with_join_fields(join,removed));
} else {
return G__79053;
}
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int column :- lib.metadata.calculation/ColumnMetadataWithSource]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Removes the field (a `ColumnMetadata`, as returned from eg. [[visible-columns]]) from those fields returned by the
 *   query. Exactly what this means depends on the source of the field:
 *   - Source table/card, previous stage, custom expression, aggregations or breakouts:
 *    - If `:fields` is missing, it's implicitly `:all` - populate it with all the columns except the removed one.
 *    - Remove the target column from the `:fields` list
 *   - Implicit join: remove it from the `:fields` list; do nothing if it's not there.
 *    - (An implicit join only exists in the `:fields` clause, so if it's not there then it's not anywhere.)
 *   - Explicit join: remove it from that join's `:fields` list (handle `:fields :all` like for source tables).
 */
metabase.lib.field.remove_field = (function metabase$lib$field$remove_field(query,stage_number,column){
var source = new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column);
return metabase.lib.remove_replace.normalize_fields_clauses.cljs$core$IFn$_invoke$arity$1((function (){var G__79054 = source;
var G__79054__$1 = (((G__79054 instanceof cljs.core.Keyword))?G__79054.fqn:null);
switch (G__79054__$1) {
case "source/table-defaults":
case "source/fields":
case "source/card":
case "source/previous-stage":
case "source/expressions":
case "source/implicitly-joinable":
return metabase.lib.field.exclude_field(query,stage_number,column);

break;
case "source/joins":
return metabase.lib.field.remove_field_from_join(query,stage_number,column);

break;
case "source/native":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.native_query_fields_edit_error(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage","stage",1843544772),stage_number], null));

break;
case "source/breakouts":
case "source/aggregations":
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.source_clauses_only_fields_edit_error(),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage","stage",1843544772),stage_number,new cljs.core.Keyword(null,"source","source",-433931539),source], null));

break;
default:
var level__73199__auto___79126 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73200__auto___79127 = "metabase.lib.field";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73200__auto___79127,level__73199__auto___79126))){
var x__73201__auto___79129 = "Cannot remove-field with unknown source %s";
if((x__73201__auto___79129 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___79127,level__73199__auto___79126,metabase.util.log.format_msg(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source], 0))),x__73201__auto___79129);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___79127,level__73199__auto___79126,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__73201__auto___79129,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source], 0))], 0)),null);
}
} else {
}

return query;

}
})());
});
/**
 * Inputs: ([query field-ref]
 *         [query :- :metabase.lib.schema/query stage-number :- :int field-ref :- some?])
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Return the visible column in `query` at `stage-number` referenced by `field-ref`. If `stage-number` is omitted, the
 *   last stage is used. This is currently only meant for use with `:field` clauses.
 */
metabase.lib.field.find_visible_column_for_ref = (function() {
var metabase$lib$field$find_visible_column_for_ref = null;
var metabase$lib$field$find_visible_column_for_ref__2 = (function (query,field_ref){
return (metabase.lib.field.find_visible_column_for_ref.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.field.find_visible_column_for_ref.cljs$core$IFn$_invoke$arity$3(query,(-1),field_ref) : metabase.lib.field.find_visible_column_for_ref.call(null,query,(-1),field_ref));
});
var metabase$lib$field$find_visible_column_for_ref__3 = (function (query,stage_number,field_ref){
var stage = metabase.lib.util.query_stage(query,stage_number);
var columns = (function (){var fexpr__79055 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.dispatch.dispatch_value(field_ref),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696)))?metabase.lib.metadata.calculation.returned_columns:metabase.lib.metadata.calculation.visible_columns);
return (fexpr__79055.cljs$core$IFn$_invoke$arity$3 ? fexpr__79055.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage) : fexpr__79055.call(null,query,stage_number,stage));
})();
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,field_ref,columns);
});
metabase$lib$field$find_visible_column_for_ref = function(query,stage_number,field_ref){
switch(arguments.length){
case 2:
return metabase$lib$field$find_visible_column_for_ref__2.call(this,query,stage_number);
case 3:
return metabase$lib$field$find_visible_column_for_ref__3.call(this,query,stage_number,field_ref);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$field$find_visible_column_for_ref.cljs$core$IFn$_invoke$arity$2 = metabase$lib$field$find_visible_column_for_ref__2;
metabase$lib$field$find_visible_column_for_ref.cljs$core$IFn$_invoke$arity$3 = metabase$lib$field$find_visible_column_for_ref__3;
return metabase$lib$field$find_visible_column_for_ref;
})()
;
/**
 * Return true if field is a JSON field, false if not.
 */
metabase.lib.field.json_field_QMARK_ = (function metabase$lib$field$json_field_QMARK_(field){
return (!((new cljs.core.Keyword(null,"nfc-path","nfc-path",-707850002).cljs$core$IFn$_invoke$arity$1(field) == null)));
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.field","field-values-search-info.has-field-values","metabase.lib.field/field-values-search-info.has-field-values",1753198226),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"none","none",1333468478)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.field","field-values-search-info","metabase.lib.field/field-values-search-info",-468454179),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field-id","field-id",-353751335),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","field","metabase.lib.schema.id/field",-985236431)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-field-id","search-field-id",-699326724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","field","metabase.lib.schema.id/field",-985236431)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-field-values","has-field-values",626648377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.field","field-values-search-info.has-field-values","metabase.lib.field/field-values-search-info.has-field-values",1753198226)], null)], null)], null));
/**
 * Inputs: [{:keys [has-field-values], :as field} :- [:map [:base-type {:optional true} [:maybe :metabase.lib.schema.common/base-type]] [:effective-type {:optional true} [:maybe :metabase.lib.schema.common/base-type]] [:has-field-values {:optional true} [:maybe :metabase.lib.schema.metadata/column.has-field-values]]]]
 *   Return: :metabase.lib.field/field-values-search-info.has-field-values
 *        
 * 
 *   Determine the value of `:has-field-values` we should return for column metadata for frontend consumption to power
 *   filter search widgets, either when returned by the the REST API or in MLv2 with [[field-values-search-info]].
 * 
 *   Note that this value is not necessarily the same as the value of `has_field_values` in the application database.
 *   `has_field_values` may be unset, in which case we will try to infer it. `:auto-list` is not currently understood by
 *   the FE filter stuff, so we will instead return `:list`; the distinction is not important to it anyway.
 */
metabase.lib.field.infer_has_field_values = (function metabase$lib$field$infer_has_field_values(p__79056){
var map__79057 = p__79056;
var map__79057__$1 = cljs.core.__destructure_map(map__79057);
var field = map__79057__$1;
var has_field_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79057__$1,new cljs.core.Keyword(null,"has-field-values","has-field-values",626648377));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(has_field_values,new cljs.core.Keyword(null,"auto-list","auto-list",314197731))){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.truth_(has_field_values)){
return has_field_values;
} else {
if(metabase.lib.types.isa.searchable_QMARK_(field)){
return new cljs.core.Keyword(null,"search","search",1564939822);
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);

}
}
}
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable column :- :metabase.lib.schema.metadata/column]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 */
metabase.lib.field.remapped_field = (function metabase$lib$field$remapped_field(metadata_providerable,column){
if(metabase.lib.types.isa.foreign_key_QMARK_(column)){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","external-remap","lib/external-remap",543358316),new cljs.core.Keyword(null,"field-id","field-id",-353751335)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var remap_field_id = temp__5804__auto__;
return metabase.lib.metadata.field(metadata_providerable,remap_field_id);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable column :- :metabase.lib.schema.metadata/column]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 */
metabase.lib.field.search_field = (function metabase$lib$field$search_field(metadata_providerable,column){
var col = (function (){var or__5002__auto__ = ((metabase.lib.types.isa.primary_key_QMARK_(column))?(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"name-field","name-field",-1347695388).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(temp__5804__auto__)){
var name_field = temp__5804__auto__;
return metabase.lib.metadata.field(metadata_providerable,metabase.util.the_id(name_field));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = metabase.lib.field.remapped_field(metadata_providerable,column);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return column;
}
}
})();
if(metabase.lib.types.isa.searchable_QMARK_(col)){
return col;
} else {
return null;
}
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable column :- :metabase.lib.schema.metadata/column]
 *   Return: :metabase.lib.field/field-values-search-info
 *        
 * 
 *   Info about whether the column in question has FieldValues associated with it for purposes of powering a search
 *   widget in the QB filter modals.
 */
metabase.lib.field.field_values_search_info = (function metabase$lib$field$field_values_search_info(metadata_providerable,column){
if(cljs.core.truth_(column)){
var column_field_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column);
var search_field_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metabase.lib.field.search_field(metadata_providerable,column));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"field-id","field-id",-353751335),((cljs.core.int_QMARK_(column_field_id))?column_field_id:null),new cljs.core.Keyword(null,"search-field-id","search-field-id",-699326724),((cljs.core.int_QMARK_(search_field_id))?search_field_id:null),new cljs.core.Keyword(null,"has-field-values","has-field-values",626648377),(cljs.core.truth_(column)?metabase.lib.field.infer_has_field_values(column):new cljs.core.Keyword(null,"none","none",1333468478))], null);
} else {
return null;
}
});

//# sourceMappingURL=metabase.lib.field.js.map
