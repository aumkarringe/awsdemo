var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.metadata.protocols.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.segment.js");

goog.provide('metabase.lib.segment');
metabase.lib.segment.resolve_segment = (function metabase$lib$segment$resolve_segment(query,segment_id){
if(cljs.core.integer_QMARK_(segment_id)){
return metabase.lib.metadata.segment(query,segment_id);
} else {
return null;
}
});
metabase.lib.ref.ref_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015),(function (p__79766){
var map__79767 = p__79766;
var map__79767__$1 = cljs.core.__destructure_map(map__79767);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79767__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"segment","segment",-964921196),cljs.core.PersistentArrayMap.EMPTY,id], null));
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015),(function (_query,_stage_number,_metric_metadata){
return new cljs.core.Keyword("type","Boolean","type/Boolean",26348630);
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (_query,_stage_number,_segment_clause){
return new cljs.core.Keyword("type","Boolean","type/Boolean",26348630);
}));
metabase.lib.segment.fallback_display_name = (function metabase$lib$segment$fallback_display_name(){
return metabase.shared.util.i18n.js_i18n("[Unknown Segment]");
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015),(function (_query,_stage_number,segment_metadata,_style){
var or__5002__auto__ = new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(segment_metadata);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(segment_metadata);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return metabase.lib.segment.fallback_display_name();
}
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (query,stage_number,p__79778,style){
var vec__79779 = p__79778;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79779,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79779,(1),null);
var segment_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79779,(2),null);
var or__5002__auto__ = ((cljs.core.integer_QMARK_(segment_id_or_name))?(function (){var temp__5804__auto__ = metabase.lib.metadata.segment(query,segment_id_or_name);
if(cljs.core.truth_(temp__5804__auto__)){
var segment_metadata = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,segment_metadata,style);
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.segment.fallback_display_name();
}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015),(function (query,stage_number,p__79786){
var map__79787 = p__79786;
var map__79787__$1 = cljs.core.__destructure_map(map__79787);
var segment_metadata = map__79787__$1;
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79787__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var filter_positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79787__$1,new cljs.core.Keyword(null,"filter-positions","filter-positions",378749375));
var default_display_info_method = cljs.core.get_method(metabase.lib.metadata.calculation.display_info_method,new cljs.core.Keyword(null,"default","default",-1987822328));
var default_display_info = (default_display_info_method.cljs$core$IFn$_invoke$arity$3 ? default_display_info_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,segment_metadata) : default_display_info_method.call(null,query,stage_number,segment_metadata));
var G__79788 = default_display_info;
var G__79788__$1 = (cljs.core.truth_(description)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79788,new cljs.core.Keyword(null,"description","description",-1428560544),description):G__79788);
if(cljs.core.truth_(filter_positions)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79788__$1,new cljs.core.Keyword(null,"filter-positions","filter-positions",378749375),filter_positions);
} else {
return G__79788__$1;
}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (query,stage_number,p__79790){
var vec__79792 = p__79790;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79792,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79792,(1),null);
var segment_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79792,(2),null);
var temp__5802__auto__ = metabase.lib.segment.resolve_segment(query,segment_id_or_name);
if(cljs.core.truth_(temp__5802__auto__)){
var segment_metadata = temp__5802__auto__;
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,segment_metadata);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword("type","Boolean","type/Boolean",26348630),new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.segment.fallback_display_name(),new cljs.core.Keyword(null,"long-display-name","long-display-name",1550784464),metabase.lib.segment.fallback_display_name()], null);
}
}));
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential {:min 1} :metabase.lib.schema.metadata/segment]]
 *        
 * 
 *   Get a list of Segments that you may consider using as filter for a query. Only Segments that have the same
 *   `table-id` as the `source-table` for this query will be suggested.
 */
metabase.lib.segment.available_segments = (function() {
var metabase$lib$segment$available_segments = null;
var metabase$lib$segment$available_segments__1 = (function (query){
return (metabase.lib.segment.available_segments.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.segment.available_segments.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.segment.available_segments.call(null,query,(-1)));
});
var metabase$lib$segment$available_segments__2 = (function (query,stage_number){
if((metabase.lib.util.canonical_stage_index(query,stage_number) === (0))){
var temp__5804__auto__ = metabase.lib.util.source_table_id(query);
if(cljs.core.truth_(temp__5804__auto__)){
var source_table_id = temp__5804__auto__;
var segments = metabase.lib.metadata.protocols.segments(metabase.lib.metadata.__GT_metadata_provider(query),source_table_id);
var segment_filters = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$1((function (index,filter_clause){
if(metabase.lib.util.clause_of_type_QMARK_(filter_clause,new cljs.core.Keyword(null,"segment","segment",-964921196))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(filter_clause,(2)),index], null);
} else {
return null;
}
})),metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$2(query,(0)));
if(cljs.core.empty_QMARK_(segments)){
return null;
} else {
if(cljs.core.empty_QMARK_(segment_filters)){
return cljs.core.vec(segments);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (segment_metadata){
var filter_pos = (function (){var G__79815 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(segment_metadata);
return (segment_filters.cljs$core$IFn$_invoke$arity$1 ? segment_filters.cljs$core$IFn$_invoke$arity$1(G__79815) : segment_filters.call(null,G__79815));
})();
var G__79816 = segment_metadata;
if(cljs.core.truth_(filter_pos)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79816,new cljs.core.Keyword(null,"filter-positions","filter-positions",378749375),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_pos], null));
} else {
return G__79816;
}
}),segments);

}
}
} else {
return null;
}
} else {
return null;
}
});
metabase$lib$segment$available_segments = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$segment$available_segments__1.call(this,query);
case 2:
return metabase$lib$segment$available_segments__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$segment$available_segments.cljs$core$IFn$_invoke$arity$1 = metabase$lib$segment$available_segments__1;
metabase$lib$segment$available_segments.cljs$core$IFn$_invoke$arity$2 = metabase$lib$segment$available_segments__2;
return metabase$lib$segment$available_segments;
})()
;

//# sourceMappingURL=metabase.lib.segment.js.map
