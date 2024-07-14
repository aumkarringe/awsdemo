var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.metadata.protocols.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.id.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.metadata.js");

goog.provide('metabase.lib.metadata');
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable]
 *   Return: :metabase.lib.schema.metadata/metadata-provider
 *        
 * 
 *   Get a MetadataProvider from something that can provide one.
 */
metabase.lib.metadata.__GT_metadata_provider = (function metabase$lib$metadata$__GT_metadata_provider(metadata_providerable){
if(metabase.lib.metadata.protocols.metadata_provider_QMARK_(metadata_providerable)){
return metadata_providerable;
} else {
var G__76696 = metadata_providerable;
var G__76696__$1 = (((G__76696 == null))?null:new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220).cljs$core$IFn$_invoke$arity$1(G__76696));
if((G__76696__$1 == null)){
return null;
} else {
return (metabase.lib.metadata.__GT_metadata_provider.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.metadata.__GT_metadata_provider.cljs$core$IFn$_invoke$arity$1(G__76696__$1) : metabase.lib.metadata.__GT_metadata_provider.call(null,G__76696__$1));
}
}
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable]
 *   Return: :metabase.lib.schema.metadata/database
 *        
 * 
 *   Get metadata about the Database we're querying.
 */
metabase.lib.metadata.database = (function metabase$lib$metadata$database(metadata_providerable){
return metabase.lib.metadata.protocols.database(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable));
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable]
 *   Return: [:sequential :metabase.lib.schema.metadata/table]
 *        
 * 
 *   Get metadata about all Tables for the Database we're querying.
 */
metabase.lib.metadata.tables = (function metabase$lib$metadata$tables(metadata_providerable){
return metabase.lib.metadata.protocols.tables(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable));
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable table-id :- :metabase.lib.schema.id/table]
 *   Return: :metabase.lib.schema.metadata/table
 *        
 * 
 *   Find metadata for a specific Table, either by string `table-name`, and optionally `schema`, or by ID.
 */
metabase.lib.metadata.table = (function metabase$lib$metadata$table(metadata_providerable,table_id){
return metabase.lib.metadata.protocols.table(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),table_id);
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable table-id :- :metabase.lib.schema.id/table]
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Get metadata about all the Fields belonging to a specific Table.
 */
metabase.lib.metadata.fields = (function metabase$lib$metadata$fields(metadata_providerable,table_id){
return metabase.lib.metadata.protocols.fields(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),table_id);
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable metadata-type :- [:enum :metadata/column :metadata/metric :metadata/segment] table-id :- :metabase.lib.schema.id/table]
 *   Return: [:sequential
 *         [:or :metabase.lib.schema.metadata/column :metabase.lib.schema.metadata/metric :metabase.lib.schema.metadata/segment]]
 *        
 * 
 *   Return active (non-archived) metadatas associated with a particular Table, either Fields, Metrics, or
 * Segments -- `metadata-type` must be one of either `:metadata/column`, `:metadata/metric`, `:metadata/segment`.
 */
metabase.lib.metadata.metadatas_for_table = (function metabase$lib$metadata$metadatas_for_table(metadata_providerable,metadata_type,table_id){
return metabase.lib.metadata.protocols.metadatas_for_table(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),metadata_type,table_id);
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable field-id :- :metabase.lib.schema.id/field]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Get metadata about a specific Field in the Database we're querying.
 */
metabase.lib.metadata.field = (function metabase$lib$metadata$field(metadata_providerable,field_id){
return metabase.lib.metadata.protocols.field(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),field_id);
});
/**
 * Inputs: ([metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable setting-key :- [:or string? keyword?]])
 *   Return: any?
 *        
 * 
 *   Get the value of a Metabase setting for the instance we're querying.
 */
metabase.lib.metadata.setting = (function metabase$lib$metadata$setting(metadata_providerable,setting_key){
return metabase.lib.metadata.protocols.setting(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),setting_key);
});
/**
 * Inputs: [query :- :map stage-number :- :int]
 *   Return: [:maybe :metabase.lib.schema.metadata/stage]
 *        
 * 
 *   Get metadata associated with a particular `stage-number` of the query, if any. `stage-number` can be a negative
 *   index.
 * 
 *   Currently, only returns metadata if it is explicitly attached to a stage; in the future we will probably dynamically
 *   calculate this stuff if possible based on DatabaseMetadata and previous stages. Stay tuned!
 */
metabase.lib.metadata.stage = (function metabase$lib$metadata$stage(query,stage_number){
return new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number));
});
/**
 * Inputs: ([query :- :map column-name :- :metabase.lib.schema.common/non-blank-string]
 *         [query :- :map stage-number :- :int column-name :- :metabase.lib.schema.common/non-blank-string])
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Metadata about a specific column returned by a specific stage of the query, e.g. perhaps the first stage of the
 *   query has an expression `num_cans`, then
 * 
 *  (lib.metadata/stage-column query stage "num_cans")
 * 
 *   should return something like
 * 
 *  {:name "num_cans", :base-type :type/Integer, ...}
 * 
 *   This is currently a best-effort thing and will only return information about columns if stage metadata is attached
 *   to a particular stage. In the near term future this should be better about calculating that metadata dynamically and
 *   returning correct info here.
 */
metabase.lib.metadata.stage_column = (function() {
var metabase$lib$metadata$stage_column = null;
var metabase$lib$metadata$stage_column__2 = (function (query,column_name){
return (metabase.lib.metadata.stage_column.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.metadata.stage_column.cljs$core$IFn$_invoke$arity$3(query,(-1),column_name) : metabase.lib.metadata.stage_column.call(null,query,(-1),column_name));
});
var metabase$lib$metadata$stage_column__3 = (function (query,stage_number,column_name){
return cljs.core.some((function (column){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column),column_name)){
return column;
} else {
return null;
}
}),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.stage(query,stage_number)));
});
metabase$lib$metadata$stage_column = function(query,stage_number,column_name){
switch(arguments.length){
case 2:
return metabase$lib$metadata$stage_column__2.call(this,query,stage_number);
case 3:
return metabase$lib$metadata$stage_column__3.call(this,query,stage_number,column_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$metadata$stage_column.cljs$core$IFn$_invoke$arity$2 = metabase$lib$metadata$stage_column__2;
metabase$lib$metadata$stage_column.cljs$core$IFn$_invoke$arity$3 = metabase$lib$metadata$stage_column__3;
return metabase$lib$metadata$stage_column;
})()
;
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable card-id :- :metabase.lib.schema.id/card]
 *   Return: [:maybe :metabase.lib.schema.metadata/card]
 *        
 * 
 *   Get metadata for a Card, aka Saved Question, with `card-id`, if it can be found.
 */
metabase.lib.metadata.card = (function metabase$lib$metadata$card(metadata_providerable,card_id){
return metabase.lib.metadata.protocols.card(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),card_id);
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable card-id :- :metabase.lib.schema.id/card]
 *   Return: :metabase.lib.schema.metadata/card
 *        
 * 
 *   Like [[card]], but throws if the Card is not found.
 */
metabase.lib.metadata.card_or_throw = (function metabase$lib$metadata$card_or_throw(metadata_providerable,card_id){
var or__5002__auto__ = metabase.lib.metadata.card(metadata_providerable,card_id);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Card {0} does not exist, or belongs to a different Database.",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([card_id], 0))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-id","card-id",-1770060179),card_id], null));
}
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable segment-id :- :metabase.lib.schema.id/segment]
 *   Return: [:maybe :metabase.lib.schema.metadata/segment]
 *        
 * 
 *   Get metadata for the Segment with `segment-id`, if it can be found.
 */
metabase.lib.metadata.segment = (function metabase$lib$metadata$segment(metadata_providerable,segment_id){
return metabase.lib.metadata.protocols.segment(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),segment_id);
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable metric-id :- :metabase.lib.schema.id/metric]
 *   Return: [:maybe :metabase.lib.schema.metadata/metric]
 *        
 * 
 *   Get metadata for the Metric with `metric-id`, if it can be found.
 */
metabase.lib.metadata.metric = (function metabase$lib$metadata$metric(metadata_providerable,metric_id){
var temp__5804__auto__ = metabase.lib.metadata.protocols.card(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable),metric_id);
if(cljs.core.truth_(temp__5804__auto__)){
var card_meta = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card_meta),new cljs.core.Keyword(null,"metric","metric",408798077))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card_meta,new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","metric","metadata/metric",538003406));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable table-id :- [:or :metabase.lib.schema.id/table :string]]
 *   Return: [:maybe [:or :metabase.lib.schema.metadata/card :metabase.lib.schema.metadata/table]]
 *        
 * 
 *   Convenience, for frontend JS usage (see #31915): look up metadata based on Table ID, handling legacy-style
 *   `card__<id>` strings as well. Throws an Exception (Clj-only, due to Malli validation) if passed an integer Table ID
 *   and the Table does not exist, since this is a real error; however if passed a `card__<id>` that does not exist,
 *   simply returns `nil` (since we do not have a strict expectation that Cards always be present in the
 *   MetadataProvider).
 */
metabase.lib.metadata.table_or_card = (function metabase$lib$metadata$table_or_card(metadata_providerable,table_id){
var temp__5802__auto__ = metabase.lib.util.legacy_string_table_id__GT_card_id(table_id);
if(cljs.core.truth_(temp__5802__auto__)){
var card_id = temp__5802__auto__;
return metabase.lib.metadata.card(metadata_providerable,card_id);
} else {
return metabase.lib.metadata.table(metadata_providerable,table_id);
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: :boolean
 *        
 * 
 *   Given a query, returns whether it is considered editable.
 * 
 *   There's no editable flag! Instead, a query is **not** editable if:
 *   - Database is missing from the metadata (no permissions at all);
 *   - Database is present but it doesn't have native write permissions;
 *   - Database is present but tables (at least the `:source-table`) are missing (missing table permissions); or
 *   - Similarly, the card specified by `:source-card` is missing from the metadata.
 *   If metadata for the `:source-table` or `:source-card` can be found, then the query is editable.
 */
metabase.lib.metadata.editable_QMARK_ = (function metabase$lib$metadata$editable_QMARK_(query){
var map__76729 = metabase.lib.util.query_stage(query,(0));
var map__76729__$1 = cljs.core.__destructure_map(map__76729);
var stage0 = map__76729__$1;
var source_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76729__$1,new cljs.core.Keyword(null,"source-table","source-table",-225307692));
var source_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76729__$1,new cljs.core.Keyword(null,"source-card","source-card",-1580820390));
return cljs.core.boolean$((function (){var and__5000__auto__ = (function (){var temp__5804__auto__ = metabase.lib.metadata.database(query);
if(cljs.core.truth_(temp__5804__auto__)){
var map__76730 = temp__5804__auto__;
var map__76730__$1 = cljs.core.__destructure_map(map__76730);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76730__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"database","database",1849087575).cljs$core$IFn$_invoke$arity$1(query),id);
} else {
return null;
}
})();
if(cljs.core.truth_(and__5000__auto__)){
var or__5002__auto__ = (function (){var and__5000__auto____$1 = source_table;
if(cljs.core.truth_(and__5000__auto____$1)){
return metabase.lib.metadata.table(query,source_table);
} else {
return and__5000__auto____$1;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var and__5000__auto____$1 = source_card;
if(cljs.core.truth_(and__5000__auto____$1)){
return metabase.lib.metadata.card(query,source_card);
} else {
return and__5000__auto____$1;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(stage0),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"write","write",-1857649168),new cljs.core.Keyword(null,"native-permissions","native-permissions",1277672164).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.database(query)))));
}
}
} else {
return and__5000__auto__;
}
})());
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable metadata-type :- :metabase.lib.schema.metadata/type ids :- [:maybe [:or [:sequential pos-int?] [:set pos-int?]]]]
 *   Return: [:maybe [:sequential [:map [:lib/type :keyword] [:id pos-int?]]]]
 *        
 * 
 *   Fetch multiple objects in bulk. If our metadata provider is a bulk provider (e.g., the application database
 *   metadata provider), does a single fetch with [[lib.metadata.protocols/bulk-metadata]] if not (i.e., if this is a
 *   mock provider), fetches them with repeated calls to the appropriate single-object method,
 *   e.g. [[lib.metadata.protocols/field]].
 * 
 *   The order of the returned objects will match the order of `ids`, but does check that all objects are returned. If
 *   you want that behavior, use [[bulk-metadata-or-throw]] instead.
 * 
 *   This can also be called for side-effects to warm the cache.
 */
metabase.lib.metadata.bulk_metadata = (function metabase$lib$metadata$bulk_metadata(metadata_providerable,metadata_type,ids){
var temp__5804__auto__ = cljs.core.not_empty((function (){var G__76731 = ids;
if((!(cljs.core.set_QMARK_(ids)))){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(G__76731);
} else {
return G__76731;
}
})());
if(cljs.core.truth_(temp__5804__auto__)){
var ids__$1 = temp__5804__auto__;
var provider = metabase.lib.metadata.__GT_metadata_provider(metadata_providerable);
var results = metabase.lib.metadata.protocols.metadatas(provider,metadata_type,ids__$1);
var id__GT_result = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity)),results);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(id__GT_result),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)),ids__$1);
} else {
return null;
}
});
metabase.lib.metadata.missing_bulk_metadata_error = (function metabase$lib$metadata$missing_bulk_metadata_error(metadata_type,id){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Failed to fetch {0} {1}: either it does not exist, or it belongs to a different Database",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata_type], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status-code","status-code",-1060410130),(400),new cljs.core.Keyword(null,"metadata-type","metadata-type",-1206767140),metadata_type,new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable metadata-type :- :metabase.lib.schema.metadata/type ids :- [:maybe [:or [:sequential pos-int?] [:set pos-int?]]]]
 *   Return: [:maybe [:sequential [:map [:lib/type :keyword] [:id pos-int?]]]]
 *        
 * 
 *   Like [[bulk-metadata]], but verifies that all the requested objects were returned; throws an Exception otherwise.
 */
metabase.lib.metadata.bulk_metadata_or_throw = (function metabase$lib$metadata$bulk_metadata_or_throw(metadata_providerable,metadata_type,ids){
var results = metabase.lib.metadata.bulk_metadata(metadata_providerable,metadata_type,ids);
var fetched_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),results);
var seq__76732_76736 = cljs.core.seq(ids);
var chunk__76733_76737 = null;
var count__76734_76738 = (0);
var i__76735_76739 = (0);
while(true){
if((i__76735_76739 < count__76734_76738)){
var id_76740 = chunk__76733_76737.cljs$core$IIndexed$_nth$arity$2(null,i__76735_76739);
if(cljs.core.contains_QMARK_(fetched_ids,id_76740)){
} else {
throw metabase.lib.metadata.missing_bulk_metadata_error(metadata_type,id_76740);
}


var G__76741 = seq__76732_76736;
var G__76742 = chunk__76733_76737;
var G__76743 = count__76734_76738;
var G__76744 = (i__76735_76739 + (1));
seq__76732_76736 = G__76741;
chunk__76733_76737 = G__76742;
count__76734_76738 = G__76743;
i__76735_76739 = G__76744;
continue;
} else {
var temp__5804__auto___76745 = cljs.core.seq(seq__76732_76736);
if(temp__5804__auto___76745){
var seq__76732_76746__$1 = temp__5804__auto___76745;
if(cljs.core.chunked_seq_QMARK_(seq__76732_76746__$1)){
var c__5525__auto___76747 = cljs.core.chunk_first(seq__76732_76746__$1);
var G__76748 = cljs.core.chunk_rest(seq__76732_76746__$1);
var G__76749 = c__5525__auto___76747;
var G__76750 = cljs.core.count(c__5525__auto___76747);
var G__76751 = (0);
seq__76732_76736 = G__76748;
chunk__76733_76737 = G__76749;
count__76734_76738 = G__76750;
i__76735_76739 = G__76751;
continue;
} else {
var id_76752 = cljs.core.first(seq__76732_76746__$1);
if(cljs.core.contains_QMARK_(fetched_ids,id_76752)){
} else {
throw metabase.lib.metadata.missing_bulk_metadata_error(metadata_type,id_76752);
}


var G__76753 = cljs.core.next(seq__76732_76746__$1);
var G__76754 = null;
var G__76755 = (0);
var G__76756 = (0);
seq__76732_76736 = G__76753;
chunk__76733_76737 = G__76754;
count__76734_76738 = G__76755;
i__76735_76739 = G__76756;
continue;
}
} else {
}
}
break;
}

return results;
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable metadata-type :- :metabase.lib.schema.metadata/type]
 *   Return: [:maybe [:sequential :any]]
 *        
 * 
 *   Get all invoked ids of a metadata type.
 */
metabase.lib.metadata.invoked_ids = (function metabase$lib$metadata$invoked_ids(metadata_providerable,metadata_type){
return metabase.lib.metadata.protocols.invoked_ids(metadata_providerable,metadata_type);
});

//# sourceMappingURL=metabase.lib.metadata.js.map
