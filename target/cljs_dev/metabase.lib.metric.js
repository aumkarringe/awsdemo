var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.legacy_mbql.normalize.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.join.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.query.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.metric.js");

goog.provide('metabase.lib.metric');
metabase.lib.metric.resolve_metric = (function metabase$lib$metric$resolve_metric(query,metric_id){
if(cljs.core.integer_QMARK_(metric_id)){
return metabase.lib.metadata.metric(query,metric_id);
} else {
return null;
}
});
/**
 * Inputs: [{:keys [dataset-query], :as _metric-metadata} :- :metabase.lib.schema.metadata/metric]
 *   Return: [:maybe :metabase.lib.schema/stage.mbql]
 */
metabase.lib.metric.metric_definition = (function metabase$lib$metric$metric_definition(p__79759){
var map__79760 = p__79759;
var map__79760__$1 = cljs.core.__destructure_map(map__79760);
var _metric_metadata = map__79760__$1;
var dataset_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79760__$1,new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427));
if(cljs.core.truth_(dataset_query)){
var normalized_definition = (function (){var G__79761 = dataset_query;
if((!(cljs.core.contains_QMARK_(dataset_query,new cljs.core.Keyword("lib","type","lib/type",1175424801))))){
return metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.normalize.normalize(G__79761));
} else {
return G__79761;
}
})();
return metabase.lib.util.query_stage(normalized_definition,(-1));
} else {
return null;
}
});
metabase.lib.ref.ref_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),(function (p__79762){
var map__79763 = p__79762;
var map__79763__$1 = cljs.core.__destructure_map(map__79763);
var metric_metadata = map__79763__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79763__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79763__$1,new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023));
var effective_type = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(metric_metadata);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(metric_metadata);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var temp__5804__auto__ = cljs.core.first(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.metric.metric_definition(metric_metadata)));
if(cljs.core.truth_(temp__5804__auto__)){
var aggregation = temp__5804__auto__;
var ag_effective_type = metabase.lib.schema.expression.type_of(aggregation);
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(ag_effective_type,new cljs.core.Keyword("type","*","type/*",-1283496752))){
return ag_effective_type;
} else {
return null;
}
} else {
return null;
}
}
}
})();
var options = (function (){var G__79764 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null);
var G__79764__$1 = (cljs.core.truth_(join_alias)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79764,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),join_alias):G__79764);
if(cljs.core.truth_(effective_type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79764__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),effective_type);
} else {
return G__79764__$1;
}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metric","metric",408798077),options,id], null);
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),(function (query,stage_number,metric_metadata){
var or__5002__auto__ = (function (){var temp__5804__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.metric.metric_definition(metric_metadata)));
if(cljs.core.truth_(temp__5804__auto__)){
var vec__79768 = temp__5804__auto__;
var aggregation = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79768,(0),null);
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,aggregation);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (query,stage_number,p__79774){
var vec__79775 = p__79774;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79775,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79775,(1),null);
var metric_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79775,(2),null);
var or__5002__auto__ = (function (){var temp__5804__auto__ = metabase.lib.metric.resolve_metric(query,metric_id_or_name);
if(cljs.core.truth_(temp__5804__auto__)){
var metric_metadata = temp__5804__auto__;
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,metric_metadata);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
}));
metabase.lib.metric.fallback_display_name = (function metabase$lib$metric$fallback_display_name(){
return metabase.shared.util.i18n.js_i18n("[Unknown Metric]");
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),(function (_query,_stage_number,metric_metadata,_style){
var or__5002__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"name","name",1843675177))(metric_metadata);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.metric.fallback_display_name();
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (query,stage_number,p__79782,style){
var vec__79783 = p__79782;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79783,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79783,(1),null);
var metric_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79783,(2),null);
var or__5002__auto__ = (function (){var temp__5804__auto__ = metabase.lib.metric.resolve_metric(query,metric_id_or_name);
if(cljs.core.truth_(temp__5804__auto__)){
var metric_metadata = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,metric_metadata,style);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.metric.fallback_display_name();
}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),(function (query,stage_number,metric_metadata){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var fexpr__79789 = cljs.core.get_method(metabase.lib.metadata.calculation.display_info_method,new cljs.core.Keyword(null,"default","default",-1987822328));
return (fexpr__79789.cljs$core$IFn$_invoke$arity$3 ? fexpr__79789.cljs$core$IFn$_invoke$arity$3(query,stage_number,metric_metadata) : fexpr__79789.call(null,query,stage_number,metric_metadata));
})(),cljs.core.select_keys(metric_metadata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"aggregation-position","aggregation-position",441696125)], null))], 0));
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (query,stage_number,p__79791){
var vec__79795 = p__79791;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79795,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79795,(1),null);
var metric_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79795,(2),null);
var temp__5802__auto__ = metabase.lib.metric.resolve_metric(query,metric_id_or_name);
if(cljs.core.truth_(temp__5802__auto__)){
var metric_metadata = temp__5802__auto__;
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,metric_metadata);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword("type","*","type/*",-1283496752),new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metric.fallback_display_name(),new cljs.core.Keyword(null,"long-display-name","long-display-name",1550784464),metabase.lib.metric.fallback_display_name()], null);
}
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (query,stage_number,p__79798){
var vec__79799 = p__79798;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79799,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79799,(1),null);
var metric_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79799,(2),null);
var or__5002__auto__ = (function (){var temp__5804__auto__ = metabase.lib.metric.resolve_metric(query,metric_id_or_name);
if(cljs.core.truth_(temp__5804__auto__)){
var metric_metadata = temp__5804__auto__;
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,metric_metadata);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "metric";
}
}));
/**
 * Returns the `:metadata/metric` for the given stage, or nil if this stage is not based on a metric.
 */
metabase.lib.metric.source_metric = (function metabase$lib$metric$source_metric(metadata_providerable,stage){
var G__79802 = stage;
var G__79802__$1 = (((G__79802 == null))?null:new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(G__79802));
if((G__79802__$1 == null)){
return null;
} else {
return metabase.lib.metadata.metric(metadata_providerable,G__79802__$1);
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int]
 *   Return: :boolean
 *        
 * 
 *   Returns true if this MBQL `query` is based on metrics.
 * 
 *   This is always false for stages other than 0, but accepting the parameter means consumers of the API don't need to
 *   know about that.
 * 
 *   Being "based on metrics" means the source is a metric.
 */
metabase.lib.metric.metric_based_QMARK_ = (function metabase$lib$metric$metric_based_QMARK_(query,stage_number){
var and__5000__auto__ = (metabase.lib.util.canonical_stage_index(query,stage_number) === (0));
if(and__5000__auto__){
var and__5000__auto____$1 = (!(metabase.lib.query.native_QMARK_(query)));
if(and__5000__auto____$1){
return metabase.lib.metric.source_metric(query,metabase.lib.util.query_stage(query,stage_number));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential {:min 1} :metabase.lib.schema.metadata/metric]]
 *        
 * 
 *   Get a list of Metrics that you may consider using as aggregations for a query.
 */
metabase.lib.metric.available_metrics = (function() {
var metabase$lib$metric$available_metrics = null;
var metabase$lib$metric$available_metrics__1 = (function (query){
return (metabase.lib.metric.available_metrics.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.metric.available_metrics.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.metric.available_metrics.call(null,query,(-1)));
});
var metabase$lib$metric$available_metrics__2 = (function (query,stage_number){
var first_stage_QMARK_ = (metabase.lib.util.canonical_stage_index(query,stage_number) === (0));
var metric_aggregations = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$1((function (index,aggregation_clause){
if(metabase.lib.util.clause_of_type_QMARK_(aggregation_clause,new cljs.core.Keyword(null,"metric","metric",408798077))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(aggregation_clause,(2)),new cljs.core.Keyword(null,"join-alias","join-alias",1454206794).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(aggregation_clause))], null),index], null);
} else {
return null;
}
})),metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$2(query,stage_number));
var s_metric = metabase.lib.metric.source_metric(query,metabase.lib.util.query_stage(query,stage_number));
var source_table = metabase.lib.util.source_table_id(query);
var maybe_add_aggregation_pos = (function (metric_metadata){
var aggregation_pos = (function (){var G__79805 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023))(metric_metadata);
return (metric_aggregations.cljs$core$IFn$_invoke$arity$1 ? metric_aggregations.cljs$core$IFn$_invoke$arity$1(G__79805) : metric_aggregations.call(null,G__79805));
})();
var G__79806 = metric_metadata;
if(cljs.core.truth_(aggregation_pos)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79806,new cljs.core.Keyword(null,"aggregation-position","aggregation-position",441696125),aggregation_pos);
} else {
return G__79806;
}
});
if(cljs.core.truth_((function (){var and__5000__auto__ = first_stage_QMARK_;
if(and__5000__auto__){
return s_metric;
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_add_aggregation_pos(s_metric)], null);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = first_stage_QMARK_;
if(and__5000__auto__){
return source_table;
} else {
return and__5000__auto__;
}
})())){
var metrics = metabase.lib.metadata.metadatas_for_table(query,new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),source_table);
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (metric_card){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),metabase.lib.query.stage_count(metabase.lib.query.query(query,new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427).cljs$core$IFn$_invoke$arity$1(metric_card))));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(maybe_add_aggregation_pos)),metrics));
} else {
return null;
}
}
});
metabase$lib$metric$available_metrics = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$metric$available_metrics__1.call(this,query);
case 2:
return metabase$lib$metric$available_metrics__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$metric$available_metrics.cljs$core$IFn$_invoke$arity$1 = metabase$lib$metric$available_metrics__1;
metabase$lib$metric$available_metrics.cljs$core$IFn$_invoke$arity$2 = metabase$lib$metric$available_metrics__2;
return metabase$lib$metric$available_metrics;
})()
;

//# sourceMappingURL=metabase.lib.metric.js.map
