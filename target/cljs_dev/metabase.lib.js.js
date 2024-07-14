var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./clojure.walk.js");
require("./medley.core.js");
require("./metabase.legacy_mbql.js.js");
require("./metabase.legacy_mbql.normalize.js");
require("./metabase.lib.cache.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.core.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.expression.js");
require("./metabase.lib.field.js");
require("./metabase.lib.join.js");
require("./metabase.lib.js.metadata.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.metadata.protocols.js");
require("./metabase.lib.normalize.js");
require("./metabase.lib.order_by.js");
require("./metabase.lib.query.js");
require("./metabase.lib.stage.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.time.js");
require("./metabase.util.js");
require("./metabase.util.log.js");
require("./metabase.util.memoize.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.js.js");

goog.provide('metabase.lib.js');
goog.scope(function(){
  metabase.lib.js.goog$module$goog$object = goog.module.get('goog.object');
});
metabase.lib.js.remove_undefined_properties = (function metabase$lib$js$remove_undefined_properties(obj){
var G__80049 = obj;
if(cljs.core.object_QMARK_(obj)){
return metabase.lib.js.goog$module$goog$object.filter(G__80049,(function (e,_,___$1){
return (!((void 0 === e)));
}));
} else {
return G__80049;
}
});
metabase.lib.js.convert_js_template_tags = (function metabase$lib$js$convert_js_template_tags(tags){
return cljs.core.update_vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(metabase.lib.js.goog$module$goog$object.map(tags,(function (e,_,___$1){
return metabase.lib.js.remove_undefined_properties(e);
}))),(function (p1__80051_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_keys(p1__80051_SHARP_,cljs.core.keyword),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword);
}));
});
/**
 * Extract the template tags from a native query's text.
 * 
 *   > **Code health:** Healthy
 * 
 *   If the optional map of existing tags previously parsed is given, this will reuse the existing tags where
 *   they match up with the new one (in particular, it will preserve the UUIDs).
 * 
 *   Given the text of a native query, extract a possibly-empty set of template tag strings from it.
 * 
 *   These look like mustache templates. For variables, we only allow alphanumeric characters, eg. `{{foo}}`.
 *   For snippets they start with `snippet:`, eg. `{{ snippet: arbitrary text here }}`.
 *   And for card references either `{{ #123 }}` or with the optional human label `{{ #123-card-title-slug }}`.
 * 
 *   Invalid patterns are simply ignored, so something like `{{&foo!}}` is just disregarded.
 * 
 *   Returns `::lib.schema.template-tags/template-tag-map`, a map of tag names (strings) to an object describing the tag,
 *   converted to JS objects.
 */
metabase.lib.js.extract_template_tags = (function metabase$lib$js$extract_template_tags(var_args){
var G__80065 = arguments.length;
switch (G__80065) {
case 1:
return metabase.lib.js.extract_template_tags.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.js.extract_template_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.extract_template_tags', metabase.lib.js.extract_template_tags);

(metabase.lib.js.extract_template_tags.cljs$core$IFn$_invoke$arity$1 = (function (query_text){
return metabase.lib.js.extract_template_tags.cljs$core$IFn$_invoke$arity$2(query_text,cljs.core.PersistentArrayMap.EMPTY);
}));

(metabase.lib.js.extract_template_tags.cljs$core$IFn$_invoke$arity$2 = (function (query_text,existing_tags){
return cljs.core.clj__GT_js(metabase.lib.core.extract_template_tags.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query_text,metabase.lib.js.convert_js_template_tags(existing_tags)], 0)));
}));

(metabase.lib.js.extract_template_tags.cljs$lang$maxFixedArity = 2);

/**
 * Return a nice description of a query.
 * 
 *   > **Code health:** Single use, smelly. Name is not idiomatic Clojure. Could it be merged with `display-name-method`?
 */
metabase.lib.js.suggestedName = (function metabase$lib$js$suggestedName(query){
return metabase.lib.core.suggested_name.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([query], 0));
});
/**
 * Convert the provided metadata container to an MLv2 metadata provider.
 * 
 *   > **Code health:** Smelly. Name is not idiomatic Clojure.
 * 
 *   If the `metadata` is already an MLv2 metadata provider, it is simply returned. If it is a JavaScript `Metadata`
 *   instance, it is wrapped with an MLv2 adapter.
 */
metabase.lib.js.metadataProvider = (function metabase$lib$js$metadataProvider(database_id,metadata){
if(metabase.lib.metadata.protocols.metadata_provider_QMARK_(metadata)){
return metadata;
} else {
return metabase.lib.js.metadata.metadata_provider(database_id,metadata);
}
});
/**
 * Creates an MLv2 query from the provided input: either a table or card metadata, or a legacy MLv1 query in JSON form.
 * 
 *   > **Code health:** Healthy.
 * 
 *   There are two *arities* for this function:
 * 
 *   With two arguments `metadata-provider` and `table-or-card-metadata`, creates an MLv2 query for that table or card.
 * 
 *   With three arguments `database-id`, `metadata-provider`, and `query-map`, expects the `query-map` to be an MLv1 legacy
 *   query in JSON form. The query is converted to MLv2 form based on the metadata and the provided `database-id` (which is
 *   not always included on the `query-map`).
 * 
 *   <details>
 *   <summary>Caching</summary>
 *   Attaches a cache to `metadata-provider` so that subsequent calls with the same `database-id` and `query-map` return
 *   the same query object.
 * 
 *   It would be simpler to attach the MLv2 query to a (non-enumerable) property on the `query-map`, but the `query-map`
 *   might have been `Object.freeze`'d by Immer. So instead we attach a two-level cache to the `metadata-provider`. The
 *   outer key is `database-id`, and the inner cache is a JS `WeakMap`, using the `query-map` itself as the key.
 *   This cache is efficient to check, and because it uses a `WeakMap` it does not retain legacy queries if they would
 *   otherwise be garbage collected.
 * 
 *   If the metadata gets updated, the `metadata-provider` will be discarded and replaced, destroying the cache.
 *   </details>
 */
metabase.lib.js.query = (function metabase$lib$js$query(var_args){
var G__80104 = arguments.length;
switch (G__80104) {
case 2:
return metabase.lib.js.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.js.query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.query', metabase.lib.js.query);

(metabase.lib.js.query.cljs$core$IFn$_invoke$arity$2 = (function (metadata_provider,table_or_card_metadata){
return metabase.lib.core.query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata_provider,table_or_card_metadata], 0));
}));

(metabase.lib.js.query.cljs$core$IFn$_invoke$arity$3 = (function (database_id,metadata_provider,query_map){
return metabase.lib.cache.side_channel_cache_weak_refs(cljs.core.str.cljs$core$IFn$_invoke$arity$1(database_id),metadata_provider,query_map,(function (p1__80094_SHARP_){
return metabase.lib.core.query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata_provider,metabase.lib.convert.js_legacy_query__GT_pMBQL(p1__80094_SHARP_)], 0));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force?","force?",1839038675),true], null));
}));

(metabase.lib.js.query.cljs$lang$maxFixedArity = 3);

/**
 * Converts namespaced keywords to strings like `"foo/bar"`.
 * 
 *   [[clj->js]] supports overriding how keyword map *keys* get transformed, but it doesn't let you override how *values*
 *   are handled. So this function runs first to recursively transform keywords in value position into strings.
 * 
 *   As examples of such a value, `(get-in card [:template-tags "some-tag" :widget-type])` can be `:date/all-options`;
 *   and the `:base-type` of a column might be `:type/Text`.
 */
metabase.lib.js.fix_namespaced_values = (function metabase$lib$js$fix_namespaced_values(x){
if(cljs.core.qualified_keyword_QMARK_(x)){
return [cljs.core.namespace(x),"/",cljs.core.name(x)].join('');
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.update_vals(x,metabase.lib.js.fix_namespaced_values);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.js.fix_namespaced_values,x);
} else {
return x;

}
}
}
});
/**
 * Coerce an MLv2 query (pMBQL in CLJS data structures) into a legacy MLv1 query in vanilla JSON form.
 * 
 *   > **Code health:** Legacy. This has many legitimate uses (as of March 2024), but we should aim to reduce the places
 *   where a legacy query is still needed. Consider if it's practical to port the consumer of this legacy query to MLv2.
 */
metabase.lib.js.legacy_query = (function metabase$lib$js$legacy_query(query_map){
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.js.fix_namespaced_values(metabase.lib.query.__GT_legacy_MBQL(query_map)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),metabase.util.qualified_name], 0));
});
/**
 * Adds a new, blank *stage* to the provided `query`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.append_stage = (function metabase$lib$js$append_stage(a_query){
return metabase.lib.core.append_stage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
});
/**
 * Drops the final *stage* in the query, even if it's not empty. If there is only one stage, this is a no-op.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.drop_stage = (function metabase$lib$js$drop_stage(a_query){
return metabase.lib.core.drop_stage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
});
/**
 * Drops **all** stages which are empty from `a-query`. To be fully clear, this does not only drop empty final stages,
 *   it drops all empty middle stages as well.
 * 
 *   No-op if there are no empty stages. Note that the first stage is never empty, since it contains eg. `:source-table`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.drop_empty_stages = (function metabase$lib$js$drop_empty_stages(a_query){
return metabase.lib.core.drop_empty_stages.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
});
/**
 * When a query has aggregations in stage `N`, there's an important difference between adding an expression to stage `N`
 *   (with access to the colums before aggregation) or adding it to stage `N+1` (with access to the aggregations and
 *   breakouts).
 * 
 *   Given `a-query` and `stage-number`, this returns a **JS object** with `query` and `stageIndex` keys, for working with
 *   "what it returns". If there is already a later stage, that stage is reused. Appends a new stage if we were already
 *   looking at the last stage.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.as_returned = (function metabase$lib$js$as_returned(a_query,stage_number){
if(((cljs.core.empty_QMARK_(metabase.lib.core.aggregations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)))) && (cljs.core.empty_QMARK_(metabase.lib.core.breakouts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)))))){
return ({"query": a_query, "stageIndex": stage_number});
} else {
var temp__5802__auto__ = metabase.lib.util.next_stage_number(a_query,metabase.lib.util.canonical_stage_index(a_query,stage_number));
if(cljs.core.truth_(temp__5802__auto__)){
var next_stage = temp__5802__auto__;
return ({"query": a_query, "stageIndex": next_stage});
} else {
return ({"query": metabase.lib.core.append_stage.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0)), "stageIndex": (-1)});
}
}
});
/**
 * Returns a JS Array of *column metadata* values for all columns which can be used to add an `ORDER BY` to `a-query` at
 *   `stage-number`.
 * 
 *   To add an `ORDER BY`, pass one of the columns to [[order-by]].
 * 
 *   Cached on `a-query`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.orderable_columns = (function metabase$lib$js$orderable_columns(a_query,stage_number){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("orderable-columns",["stage-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stage_number)].join('')),a_query,(function (_){
return cljs.core.to_array(metabase.lib.order_by.orderable_columns.cljs$core$IFn$_invoke$arity$2(a_query,stage_number));
}));
});
/**
 * Converts idiomatic Clojure keys (`:kebab-case-keywords`) into idiomatic JavaScript keys (`"camelCaseStrings"`).
 * 
 *   Namespaces are preserved. A `?` suffix in Clojure is replaced with an `"is"` prefix in JavaScript, eg.
 *   `:many-pks?` becomes `isManyPks`.
 */
metabase.lib.js.cljs_key__GT_js_key = (function metabase$lib$js$cljs_key__GT_js_key(cljs_key){
var key_str = metabase.util.qualified_name(cljs_key);
var key_str__$1 = ((clojure.string.ends_with_QMARK_(key_str,"?"))?["is-",clojure.string.replace(key_str,/\?$/,"")].join(''):key_str);
return (metabase.util.__GT_camelCaseEn.cljs$core$IFn$_invoke$arity$1 ? metabase.util.__GT_camelCaseEn.cljs$core$IFn$_invoke$arity$1(key_str__$1) : metabase.util.__GT_camelCaseEn.call(null,key_str__$1));
});
metabase.lib.js.display_info_map__GT_js_STAR_ = (function metabase$lib$js$display_info_map__GT_js_STAR_(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (obj,p__80294){
var vec__80295 = p__80294;
var cljs_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80295,(0),null);
var cljs_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80295,(1),null);
var js_key = metabase.lib.js.cljs_key__GT_js_key(cljs_key);
var js_val = (metabase.lib.js.display_info__GT_js.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.js.display_info__GT_js.cljs$core$IFn$_invoke$arity$1(cljs_val) : metabase.lib.js.display_info__GT_js.call(null,cljs_val));
metabase.lib.js.goog$module$goog$object.set(obj,js_key,js_val);

return obj;
}),({}),x);
});
metabase.lib.js.display_info_map__GT_js = metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$3(metabase.lib.js.display_info_map__GT_js_STAR_,new cljs.core.Keyword("lru","threshold","lru/threshold",204067006),(256));
metabase.lib.js.display_info_seq__GT_js_STAR_ = (function metabase$lib$js$display_info_seq__GT_js_STAR_(x){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.js.display_info__GT_js,x));
});
metabase.lib.js.display_info_seq__GT_js = metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$3(metabase.lib.js.display_info_seq__GT_js_STAR_,new cljs.core.Keyword("lru","threshold","lru/threshold",204067006),(256));
/**
 * Converts CLJS [[lib.core/display-info]] results into JS objects for the FE to consume.
 *   Recursively converts CLJS maps and sequences into JS objects and arrays.
 */
metabase.lib.js.display_info__GT_js = (function metabase$lib$js$display_info__GT_js(x){
if((x == null)){
return null;
} else {
if(cljs.core.map_QMARK_(x)){
return (metabase.lib.js.display_info_map__GT_js.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.js.display_info_map__GT_js.cljs$core$IFn$_invoke$arity$1(x) : metabase.lib.js.display_info_map__GT_js.call(null,x));
} else {
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.seqable_QMARK_(x)){
return (metabase.lib.js.display_info_seq__GT_js.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.js.display_info_seq__GT_js.cljs$core$IFn$_invoke$arity$1(x) : metabase.lib.js.display_info_seq__GT_js.call(null,x));
} else {
if((x instanceof cljs.core.Keyword)){
return metabase.util.qualified_name(x);
} else {
return x;

}
}
}
}
}
});
/**
 * Inner implementation of [[display-info]], which caches this function's results. See there for documentation.
 */
metabase.lib.js.display_info_STAR_ = (function metabase$lib$js$display_info_STAR_(a_query,stage_number,x){
return metabase.lib.js.display_info__GT_js(metabase.lib.core.display_info.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.stage.ensure_previous_stages_have_metadata(a_query,stage_number),stage_number,x], 0)));
});
/**
 * Given an opaque CLJS value (in the context of `a-query` and `stage-number`), return a plain JS object with the info
 *   needed to render UI for that opaque value.
 * 
 *   The info returned depends on what kind of value `x` is; see [[metabase.lib.metadata.calculation/display-info]] for
 *   details.
 * 
 *   The JS objects returned by this function have all keys spelled as `"camelCaseStrings"`. Note that this spelling
 *   differs in a few cases from legacy, where there's a mix of `snake_case` and `"kebab-case"` mixed in.
 * 
 *   > **Code health:** Healthy
 * 
 *   Caches the result on `x`, in case this gets called again for the same object.
 */
metabase.lib.js.display_info = (function metabase$lib$js$display_info(a_query,stage_number,x){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("display-info-outer",["stage-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stage_number)].join('')),x,(function (p1__80326_SHARP_){
return metabase.lib.js.display_info_STAR_(a_query,stage_number,p1__80326_SHARP_);
}));
});
/**
 * Create an `ORDER BY` clause and return it, independently of a query.
 * 
 *   `orderable` can be another [[order-by-clause]], a column, etc.
 * 
 *   `direction` is optional; if provided it should be either a keyword `:asc` or `:desc`, or string `"asc" or `"desc".
 *   The default is `:asc`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.order_by_clause = (function metabase$lib$js$order_by_clause(var_args){
var G__80386 = arguments.length;
switch (G__80386) {
case 1:
return metabase.lib.js.order_by_clause.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.js.order_by_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.order_by_clause', metabase.lib.js.order_by_clause);

(metabase.lib.js.order_by_clause.cljs$core$IFn$_invoke$arity$1 = (function (orderable){
return metabase.lib.js.order_by_clause.cljs$core$IFn$_invoke$arity$2(orderable,new cljs.core.Keyword(null,"asc","asc",356854569));
}));

(metabase.lib.js.order_by_clause.cljs$core$IFn$_invoke$arity$2 = (function (orderable,direction){
return metabase.lib.core.order_by_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(orderable,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(direction)], 0));
}));

(metabase.lib.js.order_by_clause.cljs$lang$maxFixedArity = 2);

/**
 * Add an `ORDER BY` clause to `a-query`. Returns the updated query.
 * 
 *   `orderable` and `direction` are the same as the arguments to [[order-by-clause]].
 * 
 *   > **Code health:** Smelly. This should be refactored to accept an [[order-by-clause]]; that is how [[aggregate]] and
 *   other analogous functions work. But don't hesitate to add calls to this function.
 */
metabase.lib.js.order_by = (function metabase$lib$js$order_by(a_query,stage_number,orderable,direction){
return metabase.lib.core.order_by.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,orderable,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(direction)], 0));
});
/**
 * Get the `ORDER BY` clauses in `a-query` at `stage-number`, as a JS array of opaque values.
 * 
 *   Returns an empty array if there are no order-bys in the given stage.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.order_bys = (function metabase$lib$js$order_bys(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.order_bys.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Flip the direction of `current-order-by` in `a-query`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.change_direction = (function metabase$lib$js$change_direction(a_query,current_order_by){
return metabase.lib.core.change_direction.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,current_order_by], 0));
});
/**
 * Returns a JS array of opaque columns representing the columns that can be used as breakouts in the given stage of
 *   `a-query.`
 * 
 *   Pass one of these values to [[breakout]] to add it to the query.
 * 
 *   > **Code health:** Healthy
 * 
 *   Caches the result on the query by stage.
 */
metabase.lib.js.breakoutable_columns = (function metabase$lib$js$breakoutable_columns(a_query,stage_number){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breakoutable-columns",["stage-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stage_number)].join('')),a_query,(function (_){
return cljs.core.to_array(metabase.lib.core.breakoutable_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
}));
});
/**
 * Get the list of breakout clauses in `a-query` at the given `stage-number`, as a JS array of opaque values.
 * 
 *   Returns an empty array if there are no breakouts in the query.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.breakouts = (function metabase$lib$js$breakouts(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.breakouts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Add a `breakout` clause to `a-query`. Returns the updated query.
 * 
 *   `breakoutable` should have come from [[breakoutable-columns]].
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.breakout = (function metabase$lib$js$breakout(a_query,stage_number,breakoutable){
return metabase.lib.core.breakout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,metabase.lib.core.ref.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([breakoutable], 0))], 0));
});
/**
 * Given a `breakout-clause` from [[breakouts]], returns the column corresponding to `breakout-clause`.
 * 
 *   That column will include any temporal bucketing or binning settings on the breakout.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.breakout_column = (function metabase$lib$js$breakout_column(a_query,stage_number,breakout_clause){
return metabase.lib.core.breakout_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,breakout_clause], 0));
});
/**
 * Retrieves the binning settings for `a-column-or-clause`. Returns `nil` if binning is not set.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.binning = (function metabase$lib$js$binning(a_column_or_clause){
return metabase.lib.core.binning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_column_or_clause], 0));
});
/**
 * Given `a-column-or-clause` and a `binning-option`, return a new column/clause with its binning settings updated.
 * 
 *   If `binning-option` is `nil`, removes any binning options currently present on `a-column-or-clause`.
 * 
 *   `binning-option` should be one of the opaque values returned by [[available-binning-strategies]].
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.with_binning = (function metabase$lib$js$with_binning(a_column_or_clause,binning_option){
return metabase.lib.core.with_binning.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_column_or_clause,binning_option], 0));
});
/**
 * Returns a JS array of available binning strategies for `a-column-or-clause`, in the context of `a-query` and
 *   optionally `stage-number`. Defaults to the last stage.
 * 
 *   The list contains opaque values, which can be passed to [[display-info]] for rendering, or [[with-binning]] to
 *   attach them to `a-column-or-clause`.
 * 
 *   > **Code health:** Smelly. Stage numbers are required parameters nearly everywhere in this interface, and this
 *   function should be consistent.
 */
metabase.lib.js.available_binning_strategies = (function metabase$lib$js$available_binning_strategies(var_args){
var G__80437 = arguments.length;
switch (G__80437) {
case 2:
return metabase.lib.js.available_binning_strategies.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.js.available_binning_strategies.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.available_binning_strategies', metabase.lib.js.available_binning_strategies);

(metabase.lib.js.available_binning_strategies.cljs$core$IFn$_invoke$arity$2 = (function (a_query,x){
return cljs.core.to_array(metabase.lib.core.available_binning_strategies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,x], 0)));
}));

(metabase.lib.js.available_binning_strategies.cljs$core$IFn$_invoke$arity$3 = (function (a_query,stage_number,x){
return cljs.core.to_array(metabase.lib.core.available_binning_strategies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,x], 0)));
}));

(metabase.lib.js.available_binning_strategies.cljs$lang$maxFixedArity = 3);

/**
 * Get the current temporal bucketing setting of `a-clause-or-column`, if any.
 *   Returns `nil` if no temporal bucketing is set.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.temporal_bucket = (function metabase$lib$js$temporal_bucket(a_clause_or_column){
return metabase.lib.core.temporal_bucket.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_clause_or_column], 0));
});
/**
 * Add the specified `bucketing-option` to `a-clause-or-column`, returning an updated form of the clause or column.
 * 
 *   If `bucketing-option` is `nil` (JS `undefined` or `null`), any existing temporal bucketing is removed.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.with_temporal_bucket = (function metabase$lib$js$with_temporal_bucket(a_clause_or_column,bucketing_option){
return metabase.lib.core.with_temporal_bucket.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_clause_or_column,bucketing_option], 0));
});
/**
 * Get a list of available temporal bucketing options for `a-clause-or-column` in the context of `a-query`
 *   and `stage-number`. (Defaults to the last stage.)
 * 
 *   Returns a JS array of opaque values, which can be passed to [[display-info]] for rendering and
 *   [[with-temporal-bucket]] to set the bucketing on a clause or column.
 * 
 *   > **Code health:** Smelly. Most functions required `stage-number`, make it required here too for consistency.
 */
metabase.lib.js.available_temporal_buckets = (function metabase$lib$js$available_temporal_buckets(var_args){
var G__80440 = arguments.length;
switch (G__80440) {
case 2:
return metabase.lib.js.available_temporal_buckets.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.js.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.available_temporal_buckets', metabase.lib.js.available_temporal_buckets);

(metabase.lib.js.available_temporal_buckets.cljs$core$IFn$_invoke$arity$2 = (function (a_query,x){
return cljs.core.to_array(metabase.lib.core.available_temporal_buckets.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,x], 0)));
}));

(metabase.lib.js.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3 = (function (a_query,stage_number,x){
return cljs.core.to_array(metabase.lib.core.available_temporal_buckets.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,x], 0)));
}));

(metabase.lib.js.available_temporal_buckets.cljs$lang$maxFixedArity = 3);

/**
 * The temporal bucketing units for date type expressions.
 */
metabase.lib.js.available_temporal_units = (function metabase$lib$js$available_temporal_units(){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,metabase.lib.core.available_temporal_units()));
});
/**
 * Removes the `target-clause` from the given stage of `a-query`.
 * 
 *   Use this to remove any clause (aggregations, breakouts, order by, filters, custom expressions, joins) from a query.
 * 
 *   The deletion *cascades*, recursively removing any other clauses that depended on the removed clause, such as a
 *   filter based on a custom expression.
 * 
 *   Does nothing if the clause can't be found.
 * 
 *   > **Code health:** Healthy.
 */
metabase.lib.js.remove_clause = (function metabase$lib$js$remove_clause(a_query,stage_number,clause){
return metabase.lib.core.remove_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0))], 0));
});
/**
 * Replaces the `target-clause` with `new-clause` in the `query` stage.
 * 
 *   Does nothing if the `target-clause` cannot be found.
 * 
 *   > **Code health:** Healthy.
 */
metabase.lib.js.replace_clause = (function metabase$lib$js$replace_clause(a_query,stage_number,target_clause,new_clause){
return metabase.lib.core.replace_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(target_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0)),metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(new_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0))], 0));
});
/**
 * Exchanges the positions of two clauses of the same kind. Can be used for filters, aggregations, breakouts, and
 *   expressions.
 * 
 *   Returns the updated query. If it can't find both clauses in a single list, emits a warning and returns the query
 *   unchanged.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.swap_clauses = (function metabase$lib$js$swap_clauses(a_query,stage_number,source_clause,target_clause){
return metabase.lib.core.swap_clauses.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(source_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0)),metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(target_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0))], 0));
});
metabase.lib.js.unwrap = (function metabase$lib$js$unwrap(a_query){
var a_query__$1 = metabase.legacy_mbql.js.unwrap(a_query);
var G__80441 = a_query__$1;
if(cljs.core.map_QMARK_(a_query__$1)){
return new cljs.core.Keyword(null,"dataset_query","dataset_query",-2010226446).cljs$core$IFn$_invoke$arity$2(G__80441,a_query__$1);
} else {
return G__80441;
}
});
metabase.lib.js.normalize_to_clj = (function metabase$lib$js$normalize_to_clj(a_query){
var normalize_fn = (function (q){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.normalized_query_type(q),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662))){
return metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$1(q);
} else {
return metabase.legacy_mbql.normalize.normalize(q);
}
});
return normalize_fn(metabase.lib.js.unwrap(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(a_query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
});
/**
 * Normalize the MBQL or pMBQL query `a-query`.
 * 
 *   Returns the JS form of the normalized query.
 */
metabase.lib.js.normalize = (function metabase$lib$js$normalize(a_query){
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.js.normalize_to_clj(a_query),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),metabase.util.qualified_name], 0));
});
metabase.lib.js.prep_query_for_equals_legacy = (function metabase$lib$js$prep_query_for_equals_legacy(a_query,field_ids){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(a_query,new cljs.core.Keyword(null,"native","native",-613060878),(function (p1__80442_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),cljs.core.PersistentArrayMap.EMPTY], null),p1__80442_SHARP_], 0));
})),new cljs.core.Keyword(null,"query","query",-1288509510),(function (inner_query){
var fields = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(inner_query);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var iter__5480__auto__ = (function metabase$lib$js$prep_query_for_equals_legacy_$_iter__80455(s__80456){
return (new cljs.core.LazySeq(null,(function (){
var s__80456__$1 = s__80456;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80456__$1);
if(temp__5804__auto__){
var s__80456__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80456__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__80456__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__80458 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__80457 = (0);
while(true){
if((i__80457 < size__5479__auto__)){
var id = cljs.core._nth(c__5478__auto__,i__80457);
cljs.core.chunk_append(b__80458,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id,null], null));

var G__80624 = (i__80457 + (1));
i__80457 = G__80624;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80458),metabase$lib$js$prep_query_for_equals_legacy_$_iter__80455(cljs.core.chunk_rest(s__80456__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80458),null);
}
} else {
var id = cljs.core.first(s__80456__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id,null], null),metabase$lib$js$prep_query_for_equals_legacy_$_iter__80455(cljs.core.rest(s__80456__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(field_ids);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inner_query,new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.frequencies(fields));
}));
});
metabase.lib.js.prep_query_for_equals_pMBQL = (function metabase$lib$js$prep_query_for_equals_pMBQL(a_query,field_ids){
var fields = (function (){var or__5002__auto__ = (function (){var G__80461 = metabase.lib.core.fields.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
if((G__80461 == null)){
return null;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80460_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80460_SHARP_,(1),cljs.core.PersistentArrayMap.EMPTY);
}),G__80461);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.PersistentArrayMap.EMPTY,id], null);
}),field_ids);
}
})();
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(a_query,(-1),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.frequencies(fields)], 0));
});
metabase.lib.js.prep_query_for_equals = (function metabase$lib$js$prep_query_for_equals(a_query,field_ids){
var temp__5804__auto__ = (function (){var G__80462 = a_query;
if((G__80462 == null)){
return null;
} else {
return metabase.lib.js.normalize_to_clj(G__80462);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var normalized_query = temp__5804__auto__;
if(cljs.core.contains_QMARK_(normalized_query,new cljs.core.Keyword("lib","type","lib/type",1175424801))){
return metabase.lib.js.prep_query_for_equals_pMBQL(normalized_query,field_ids);
} else {
return metabase.lib.js.prep_query_for_equals_legacy(normalized_query,field_ids);
}
} else {
return null;
}
});
metabase.lib.js.compare_field_refs = (function metabase$lib$js$compare_field_refs(p__80465,p__80466){
var vec__80467 = p__80465;
var key1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80467,(0),null);
var id1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80467,(1),null);
var opts1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80467,(2),null);
var vec__80470 = p__80466;
var key2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80470,(0),null);
var id2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80470,(1),null);
var opts2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80470,(2),null);
var clean_opts = (function metabase$lib$js$compare_field_refs_$_clean_opts(o1,o2){
return cljs.core.not_empty((function (){var G__80482 = o1;
var G__80482__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(o2)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__80482,new cljs.core.Keyword(null,"base-type","base-type",1167971299)):G__80482);
if(cljs.core.not(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(o2))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__80482__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458));
} else {
return G__80482__$1;
}
})());
});
if(cljs.core.map_QMARK_(id1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key1,clean_opts(id1,id2),opts1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key2,clean_opts(id2,id1),opts2], null));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key1,id1,clean_opts(opts1,opts2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [key2,id2,clean_opts(opts2,opts1)], null));
}
});
metabase.lib.js.query_EQ__STAR_ = (function metabase$lib$js$query_EQ__STAR_(x,y){
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core.vector_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(x),cljs.core.first(y),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"field","field",-1302436500)], 0))))))){
return metabase.lib.js.compare_field_refs(x,y);
} else {
if(((cljs.core.map_QMARK_(x)) && (cljs.core.map_QMARK_(y)))){
var x__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
var y__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(y,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(x__$1)),cljs.core.set(cljs.core.keys(y__$1)))) && (cljs.core.every_QMARK_((function (p__80491){
var vec__80492 = p__80491;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80492,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80492,(1),null);
var G__80495 = v;
var G__80496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(y__$1,k);
return (metabase.lib.js.query_EQ__STAR_.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.js.query_EQ__STAR_.cljs$core$IFn$_invoke$arity$2(G__80495,G__80496) : metabase.lib.js.query_EQ__STAR_.call(null,G__80495,G__80496));
}),x__$1)));
} else {
if(((cljs.core.sequential_QMARK_(x)) && (cljs.core.sequential_QMARK_(y)))){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y))) && (cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(metabase.lib.js.query_EQ__STAR_,x,y))));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}
});
/**
 * Returns whether the provided queries should be considered equal.
 * 
 *   If `field-ids` is specified, an input MBQL query without `:fields` set defaults to the `field-ids`.
 * 
 *   Currently this works only for legacy queries in JS form!
 *   It duplicates the logic formerly found in `query_builder/selectors.js`.
 * 
 *   > **Code health:** Legacy. New calls are acceptable if necessary. Eventually this will be replaced with an equivalent
 *   function that compares two pMBQL queries in CLJS form, but that needs pMBQL queries to be the source of truth on the
 *   wire, rather than legacy.
 */
metabase.lib.js.query_EQ_ = (function metabase$lib$js$query_EQ_(var_args){
var G__80503 = arguments.length;
switch (G__80503) {
case 2:
return metabase.lib.js.query_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.js.query_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.query_EQ_', metabase.lib.js.query_EQ_);

(metabase.lib.js.query_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (query1,query2){
return metabase.lib.js.query_EQ_.cljs$core$IFn$_invoke$arity$3(query1,query2,null);
}));

(metabase.lib.js.query_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (query1,query2,field_ids){
var ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj,field_ids);
var n1 = metabase.lib.js.prep_query_for_equals(query1,ids);
var n2 = metabase.lib.js.prep_query_for_equals(query2,ids);
return metabase.lib.js.query_EQ__STAR_(n1,n2);
}));

(metabase.lib.js.query_EQ_.cljs$lang$maxFixedArity = 3);

/**
 * Given the list of columns returned by a function like [[orderable-columns]], groups those columns by *source*,
 *   in the appropriate shape for rendering in the Query Builder.
 * 
 *   *Source* is any of:
 * 
 *   - source table/card/model
 *   - previous stage
 *   - explicitly joined table
 *   - implicitly joinable for each foreign key
 * 
 *   For example, given a sequence of columns like this:
 * 
 *    [venues.id
 *     venues.name
 *     venues.category-id
 *     ;; implicitly joinable
 *     categories.id
 *     categories.name]
 * 
 *   the groups would be:
 * 
 *    [{::columns [venues.id
 *                 venues.name
 *                 venues.category-id]}
 *     {::columns [categories.id
 *                 categories.name]}]
 * 
 *   Groups have the type `:metadata/column-group` and can be passed directly to [[display-info]].
 * 
 *   Use [[columns-group-columns]] to extract the columns from a group.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.group_columns = (function metabase$lib$js$group_columns(column_metadatas){
return cljs.core.to_array(metabase.lib.core.group_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_metadatas], 0)));
});
/**
 * Return the columns in this `column-group`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.columns_group_columns = (function metabase$lib$js$columns_group_columns(column_group){
return cljs.core.to_array(metabase.lib.core.columns_group_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_group], 0)));
});
/**
 * Get a translated description of a temporal bucketing unit.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.describe_temporal_unit = (function metabase$lib$js$describe_temporal_unit(n,unit){
var unit__$1 = ((typeof unit === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit):unit);
return metabase.lib.core.describe_temporal_unit.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,unit__$1], 0));
});
/**
 * Get a translated description of a temporal bucketing interval.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.describe_temporal_interval = (function metabase$lib$js$describe_temporal_interval(n,unit){
var n__$1 = ((typeof n === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(n):n);
var unit__$1 = ((typeof unit === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit):unit);
return metabase.lib.core.describe_temporal_interval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,unit__$1], 0));
});
/**
 * Get a translated description of a relative datetime interval.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.describe_relative_datetime = (function metabase$lib$js$describe_relative_datetime(n,unit){
var n__$1 = ((typeof n === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(n):n);
var unit__$1 = ((typeof unit === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit):unit);
return metabase.lib.core.describe_relative_datetime.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,unit__$1], 0));
});
/**
 * Adds an aggregation to `a-query`, returning the updated query.
 * 
 *   Construct `an-aggregation-clause` by calling [[aggregation-clause]].
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.aggregate = (function metabase$lib$js$aggregate(a_query,stage_number,an_aggregate_clause){
return metabase.lib.core.aggregate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(an_aggregate_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0));
});
/**
 * Return a JS array of aggregations on a given stage of `a-query`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.aggregations = (function metabase$lib$js$aggregations(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.aggregations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Given an `aggregation-clause` from [[aggregations]], returns the column corresponding to that aggregation.
 * 
 *   Returns `nil` (JS `null`) if the aggregation is one like `:count` that doesn't have a column.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.aggregation_column = (function metabase$lib$js$aggregation_column(a_query,stage_number,aggregation_clause){
return metabase.lib.core.aggregation_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,aggregation_clause], 0));
});
/**
 * Returns a standalone aggregation clause for an `aggregation-operator` and a `column`.
 * 
 *   For aggregations requiring an argument, `column` is mandatory, otherwise it is optional.
 * 
 *   Get a list of valid aggregation operators with [[available-aggregation-operators]].
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.aggregation_clause = (function metabase$lib$js$aggregation_clause(aggregation_operator,column){
if((void 0 === column)){
return metabase.lib.core.aggregation_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aggregation_operator], 0));
} else {
return metabase.lib.core.aggregation_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aggregation_operator,column], 0));
}
});
/**
 * Get the available aggregation operators for the stage with `stage-number` of the query `a-query`.
 * 
 *   These are opaque values that can be passed to [[display-info]], or to [[aggregation-clause]] to construct an
 *   aggregation.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.available_aggregation_operators = (function metabase$lib$js$available_aggregation_operators(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.available_aggregation_operators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Return a JS array of columns which `aggregation-operator` can be applied to.
 * 
 *   The columns are valid for the stage of the query that was used in
 *   [[available-aggregation-operators]] to get `aggregation-operator`.
 */
metabase.lib.js.aggregation_operator_columns = (function metabase$lib$js$aggregation_operator_columns(aggregation_operator){
return cljs.core.to_array(metabase.lib.core.aggregation_operator_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([aggregation_operator], 0)));
});
/**
 * Used when editing an aggregation. We need to show the list of possible aggregation operators with the selected one
 *   highlighted, and if it has a column, also the list of applicable columns with the selected one highlighted.
 * 
 *   Given a list of `agg-operators` from [[available-aggregation-operators]], goes through the operators and marks the
 *   operator used in `agg-clause` as `:selected? true`.
 * 
 *   If that operator needs a column, also searches the columns and marks the column from `agg-clause` as `:selected? true`
 *   as well.
 * 
 *   Returns the same list of `agg-operators` with those adjustments made.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.selected_aggregation_operators = (function metabase$lib$js$selected_aggregation_operators(agg_operators,agg_clause){
return cljs.core.to_array(metabase.lib.core.selected_aggregation_operators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(agg_operators),agg_clause], 0)));
});
/**
 * Returns a JS array of columns available for filtering `a-query` on the given stage.
 * 
 *   The columns have extra information attached, giving the filter operators that can be used with that column.
 * 
 *   Cached on the query.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.filterable_columns = (function metabase$lib$js$filterable_columns(a_query,stage_number){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("filterable-columns",["stage-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stage_number)].join('')),a_query,(function (_){
return cljs.core.to_array(metabase.lib.core.filterable_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
}));
});
/**
 * Returns the filteroperators which can be used in a filter for `filterable-column`.
 * 
 *   `filterable-column` must be column coming from [[filterable-columns]]; this won't work with columns from other sources
 *   like [[visible-columns]].
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.filterable_column_operators = (function metabase$lib$js$filterable_column_operators(filterable_column){
return cljs.core.to_array(metabase.lib.core.filterable_column_operators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([filterable_column], 0)));
});
/**
 * Given a `filter-operator`, `column`, and 0 or more extra arguments, returns a standalone filter clause.
 * 
 *   `filter-operator` comes from [[filterable-column-operators]], and `column` from [[filterable-columns]].
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.filter_clause = (function metabase$lib$js$filter_clause(var_args){
var args__5732__auto__ = [];
var len__5726__auto___80626 = arguments.length;
var i__5727__auto___80627 = (0);
while(true){
if((i__5727__auto___80627 < len__5726__auto___80626)){
args__5732__auto__.push((arguments[i__5727__auto___80627]));

var G__80628 = (i__5727__auto___80627 + (1));
i__5727__auto___80627 = G__80628;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return metabase.lib.js.filter_clause.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});
goog.exportSymbol('metabase.lib.js.filter_clause', metabase.lib.js.filter_clause);

(metabase.lib.js.filter_clause.cljs$core$IFn$_invoke$arity$variadic = (function (filter_operator,column,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(metabase.lib.core.filter_clause,filter_operator,column,args);
}));

(metabase.lib.js.filter_clause.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.js.filter_clause.cljs$lang$applyTo = (function (seq80504){
var G__80505 = cljs.core.first(seq80504);
var seq80504__$1 = cljs.core.next(seq80504);
var G__80506 = cljs.core.first(seq80504__$1);
var seq80504__$2 = cljs.core.next(seq80504__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80505,G__80506,seq80504__$2);
}));

/**
 * Returns the filter operator used in `a-filter-clause`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.filter_operator = (function metabase$lib$js$filter_operator(a_query,stage_number,a_filter_clause){
return metabase.lib.core.filter_operator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,a_filter_clause], 0));
});
/**
 * Adds `a-filter-clause` as a filter on `a-query`.
 */
metabase.lib.js.filter = (function metabase$lib$js$filter(a_query,stage_number,a_filter_clause){
return metabase.lib.core.filter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(a_filter_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0));
});
/**
 * Returns a JS array of all the filters on stage `stage-number` of `a-query`.
 * 
 *   Logically, the `WHERE` clause (or equivalent) of the query is the conjunction of these filters.
 * 
 *   If there are no filters on this query, returns an empty list.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.filters = (function metabase$lib$js$filters(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.filters.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Returns a standalone expression clause for the given `operator`, `options`, and list of arguments.
 */
metabase.lib.js.expression_clause = (function metabase$lib$js$expression_clause(an_operator,args,options){
return metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.core.expression_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(an_operator),args,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0))], 0));
});
/**
 * Returns an AST for `an-expression-clause`.
 * 
 *   Each clause is transformed to a JS object like:
 * 
 *    {
 *      operator: "=",
 *      options: {"case-sensitive": true, "include-current": false},
 *      args: [column, 7],
 *    }
 * 
 *   Note that the `args` can contain nested expressions in the same form.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.expression_parts = (function metabase$lib$js$expression_parts(a_query,stage_number,an_expression_clause){
var parts = metabase.lib.core.expression_parts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,an_expression_clause], 0));
return clojure.walk.postwalk((function (node){
if(((cljs.core.map_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("mbql","expression-parts","mbql/expression-parts",-1116248354),new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(node))))){
var map__80548 = node;
var map__80548__$1 = cljs.core.__destructure_map(map__80548);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80548__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80548__$1,new cljs.core.Keyword(null,"options","options",99638489));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80548__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return ({"operator": cljs.core.name(operator), "options": cljs.core.clj__GT_js(cljs.core.select_keys(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"case-sensitive","case-sensitive",-1005239404),new cljs.core.Keyword(null,"include-current","include-current",-1602371981)], null))), "args": cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80547_SHARP_){
if((p1__80547_SHARP_ instanceof cljs.core.Keyword)){
return metabase.util.qualified_name(p1__80547_SHARP_);
} else {
return p1__80547_SHARP_;
}
}),args))});
} else {
return node;
}
}),parts);
});
/**
 * Returns true if arg is an MLv2 column, ie. has `:lib/type :metadata/column`.
 * 
 *   > **Code health:** Smelly. When is this called and why does the FE need to know? The values are supposed to be opaque,
 *   and we should see if there's a better way to get the needed information.
 */
metabase.lib.js.is_column_metadata = (function metabase$lib$js$is_column_metadata(arg){
return ((cljs.core.map_QMARK_(arg)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(arg))));
});
/**
 * Get the list of fields currently set on `a-query` as a JS array.
 * 
 *   Returns `[]` if the fields are not set.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.fields = (function metabase$lib$js$fields(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.fields.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Set the fields list for `a-query` to `new-fields`, a list of columns as returned by [[fieldable-columns]].
 * 
 *   This replaces any existing fields list. If `new-fields` is an empty array or `nil` (JS `null` or `undefined`), then
 *   the fields list on the query is cleared.
 * 
 *   > **Code health:** Healthy. But depending on what you're doing, it might be easier to call [[add-field]] and
 *   [[remove-field]].
 */
metabase.lib.js.with_fields = (function metabase$lib$js$with_fields(a_query,stage_number,new_fields){
return metabase.lib.core.with_fields.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,new_fields], 0));
});
/**
 * Return a JS array of columns that are valid to set in the fields list of `a-query`.
 * 
 *   Cached on the query.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.fieldable_columns = (function metabase$lib$js$fieldable_columns(a_query,stage_number){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("fieldable-columns",["stage-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stage_number)].join('')),a_query,(function (_){
return cljs.core.to_array(metabase.lib.core.fieldable_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
}));
});
/**
 * Adds a given `column` (as returned by [[fieldable-columns]]) to the fields returned by `a-query`.
 * 
 *   Exactly what this means depends on where the column comes from:
 * 
 *   - Source table/card, previous stage of the query, aggregation or breakout:
 *    - Add it to the fields list
 *    - If no fields list is set, it defaults to returning all fields, so do nothing.
 *   - Implicit join: add it to the fields list; the query processor will add the necessary join.
 *   - Explicit join: add it to the fields list on the join clause.
 *   - Custom expression: Do nothing - expressions are always included.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.add_field = (function metabase$lib$js$add_field(a_query,stage_number,column){
return metabase.lib.core.add_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,column], 0));
});
/**
 * Removes the field (a `ColumnMetadata`, as returned from eg. [[visible-columns]]) from those fields returned by the
 *   query. Exactly what this means depends on the source of the field:
 *   - Source table/card, previous stage, aggregations or breakouts:
 *    - If `:fields` is missing, it's implicitly `:all` - populate it with all the columns except the removed one.
 *    - Remove the target column from the `:fields` list
 *   - Implicit join: remove it from the `:fields` list; do nothing if it's not there.
 *    - (An implicit join only exists in the `:fields` clause, so if it's not there then it's not anywhere.)
 *   - Explicit join: remove it from that join's `:fields` list (handle `:fields :all` like for source tables).
 *   - Custom expression: Throw! Custom expressions are always returned. To remove a custom expression, the expression
 *  itself should be removed from the query.
 */
metabase.lib.js.remove_field = (function metabase$lib$js$remove_field(a_query,stage_number,column){
return metabase.lib.core.remove_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,column], 0));
});
/**
 * Inner implementation for [[returned-columns]], which wraps this with caching.
 */
metabase.lib.js.returned_columns_STAR_ = (function metabase$lib$js$returned_columns_STAR_(a_query,stage_number){
var stage = metabase.lib.util.query_stage(a_query,stage_number);
var unique_name_fn = metabase.lib.util.unique_name_generator.cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.__GT_metadata_provider(a_query));
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80558_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80558_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true),new cljs.core.Keyword(null,"name","name",1843675177),unique_name_fn);
}),metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(a_query,stage_number,stage)));
});
/**
 * Return a JS array of columns which are returned from this stage of `a-query`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.returned_columns = (function metabase$lib$js$returned_columns(a_query,stage_number){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("returned-columns",["stage-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stage_number)].join('')),a_query,(function (_){
return metabase.lib.js.returned_columns_STAR_(a_query,stage_number);
}));
});
/**
 * Inner implementation for [[visible-columns]], which wraps this with caching.
 */
metabase.lib.js.visible_columns_STAR_ = (function metabase$lib$js$visible_columns_STAR_(a_query,stage_number){
var stage = metabase.lib.util.query_stage(a_query,stage_number);
var vis_columns = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(a_query,stage_number,stage);
var ret_columns = metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(a_query,stage_number,stage);
return cljs.core.to_array(metabase.lib.equality.mark_selected_columns.cljs$core$IFn$_invoke$arity$4(a_query,stage_number,vis_columns,ret_columns));
});
/**
 * Returns a JS array of all columns "visible" at the given stage of `a-query`.
 * 
 *   Does not pass any options to [[lib.core/visible-columns]], so it uses the defaults (which are to include everything).
 * 
 *   One important difference from the Clojure-facing [[lib.core/visible-columns]]: this marks all the columns which are
 *   returned from the query as `:selected? true` (`isSelected: true` in JS display info).
 * 
 *   > **Code health:** Slightly smelly. Generally the specialized subsets such as [[expressionable-columns]] should be
 *   preferred over calling [[visible-columns]] directly.
 */
metabase.lib.js.visible_columns = (function metabase$lib$js$visible_columns(a_query,stage_number){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("visible-columns",["stage-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stage_number)].join('')),a_query,(function (_){
return metabase.lib.js.visible_columns_STAR_(a_query,stage_number);
}));
});
/**
 * Given a column, as returned by [[visible-columns]], [[returned-columns]] etc., return a string suitable for uniquely
 *   identifying the column on its query.
 * 
 *   This key will generally not be changed by unrelated edits to the query.
 * 
 *   (Currently this is powered by `:lib/desired-column-alias`, but it's deliberately opaque.)
 */
metabase.lib.js.column_key = (function metabase$lib$js$column_key(a_column){
var or__5002__auto__ = new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(a_column);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(a_column);
}
});
metabase.lib.js.normalize_legacy_ref = (function metabase$lib$js$normalize_legacy_ref(a_ref){
if(cljs.core.truth_((function (){var G__80561 = cljs.core.first(a_ref);
var fexpr__80560 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"segment","segment",-964921196),null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),null,new cljs.core.Keyword(null,"metric","metric",408798077),null], null), null);
return (fexpr__80560.cljs$core$IFn$_invoke$arity$1 ? fexpr__80560.cljs$core$IFn$_invoke$arity$1(G__80561) : fexpr__80560.call(null,G__80561));
})())){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(a_ref,(0),(2));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(a_ref,(2),cljs.core.update_vals,(function (p1__80559_SHARP_){
if(cljs.core.qualified_keyword_QMARK_(p1__80559_SHARP_)){
return metabase.util.qualified_name(p1__80559_SHARP_);
} else {
return p1__80559_SHARP_;
}
}));
}
});
/**
 * Given a column, metric or segment metadata from eg. [[fieldable-columns]] or [[available-segments]],
 *   return it as a legacy JSON field ref.
 * 
 *   For compatibility reasons, segment and metric references are always returned without options.
 * 
 *   > **Code health:** Legacy. New calls strongly discouraged; refs are a bad leak in the abstraction and we should aim
 *   to refactor the existing ones.
 */
metabase.lib.js.legacy_ref = (function metabase$lib$js$legacy_ref(a_query,stage_number,column){
return metabase.lib.convert.do_with_aggregation_list(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(a_query,stage_number)),(function (){
return cljs.core.clj__GT_js(metabase.lib.js.normalize_legacy_ref(metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(metabase.lib.core.ref.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column], 0)))));
}));
});
metabase.lib.js.legacy_ref__GT_pMBQL = (function metabase$lib$js$legacy_ref__GT_pMBQL(a_legacy_ref){
return metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(a_legacy_ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),(0),cljs.core.keyword));
});
metabase.lib.js.__GT_column_or_ref = (function metabase$lib$js$__GT_column_or_ref(column){
var temp__5802__auto__ = ((cljs.core.object_QMARK_(column))?column:null);
if(cljs.core.truth_(temp__5802__auto__)){
var legacy_column = temp__5802__auto__;
var parsed = (metabase.lib.js.metadata.parse_column.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.js.metadata.parse_column.cljs$core$IFn$_invoke$arity$1(legacy_column) : metabase.lib.js.metadata.parse_column.call(null,legacy_column));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(parsed),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))){
var agg_ref = metabase.lib.js.legacy_ref__GT_pMBQL(legacy_column.field_ref);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed,new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),cljs.core.last(agg_ref));
} else {
return parsed;
}
} else {
return column;
}
});
/**
 * Given a list of columns (either JS `data.cols` or MLv2 `ColumnMetadata`) and a list of legacy refs, find each ref's
 *   corresponding index into the list of columns.
 * 
 *   Returns a parallel list to the refs, with the corresponding index, or -1 if no matching column is found.
 * 
 *   > **Code health:** Legacy. This is used in several places, mostly because legacy field refs are used as the keys to
 *   identify a column in viz settings. Avoid new calls if you have an alternative way to find the column you need. But if
 *   you need it, no worries about a new call.
 */
metabase.lib.js.find_column_indexes_from_legacy_refs = (function metabase$lib$js$find_column_indexes_from_legacy_refs(a_query,stage_number,legacy_columns,legacy_refs){
return metabase.lib.convert.do_with_aggregation_list(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(a_query,stage_number)),(function (){
var haystack = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.js.__GT_column_or_ref,legacy_columns);
var needles = cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.js.legacy_ref__GT_pMBQL,legacy_refs);
var column_refs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$1((function (i,col){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.js.normalize_legacy_ref(metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(metabase.lib.core.ref.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([col], 0)))),i], null);
})),legacy_columns);
var exact_matches = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80562_SHARP_){
var G__80567 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__80562_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),(0),cljs.core.keyword);
return (column_refs.cljs$core$IFn$_invoke$arity$1 ? column_refs.cljs$core$IFn$_invoke$arity$1(G__80567) : column_refs.call(null,G__80567));
}),legacy_refs);
if(cljs.core.every_QMARK_((function (p1__80563_SHARP_){
var and__5000__auto__ = p1__80563_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return (p1__80563_SHARP_ >= (0));
} else {
return and__5000__auto__;
}
}),exact_matches)){
return cljs.core.to_array(exact_matches);
} else {
return cljs.core.to_array(metabase.lib.equality.find_column_indexes_for_refs(a_query,stage_number,needles,haystack));
}
}));
});
/**
 * Returns the ID of the source table (as a number) or the ID of the source card (as a string prefixed
 *   with "card__") of `a-query`. If `a-query` has none of these, nil is returned.
 * 
 *   > **Code health:** Legacy. This is exposing too much about cards and sources. Its callers will likely have to be
 *   updated to handle Metrics v2.
 */
metabase.lib.js.source_table_or_card_id = (function metabase$lib$js$source_table_or_card_id(a_query){
var or__5002__auto__ = metabase.lib.util.source_table_id(a_query);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__80571 = metabase.lib.util.source_card_id(a_query);
if((G__80571 == null)){
return null;
} else {
return ["card__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80571)].join('');
}
}
});
/**
 * Get the strategy (`INNER`, `LEFT`, `OUTER`) of `a-join` as an opaque value.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.join_strategy = (function metabase$lib$js$join_strategy(a_join){
return metabase.lib.core.join_strategy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join], 0));
});
/**
 * Returns `a-join` with its *strategy* updated to the given `strategy`.
 * 
 *   `strategy` should be one of the opaque values returned by [[available-join-strategies]].
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.with_join_strategy = (function metabase$lib$js$with_join_strategy(a_join,strategy){
return metabase.lib.core.with_join_strategy.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join,strategy], 0));
});
/**
 * Returns a JS array of available join strategies for the current Database (based on the Database's
 *   supported [[metabase.driver/features]]), as opaque values suitable for passing to [[with-join-strategy]].
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.available_join_strategies = (function metabase$lib$js$available_join_strategies(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.available_join_strategies.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Returns a JS array of columns which are valid as the left-hand-side in a join condition. By "left-hand-side" is
 *   meant the *source column*, the one already present in the query. These columns come from the source table/card/model,
 *   a previous stage, or a *previous* join.
 * 
 *   When editing an existing join, `join-or-joinable` must be the original join clause, or this function will return
 *   incorrect results. That's what enables this function to know which joins are before this one, and therefore visible as
 *   a possible LHS. It doesn't make sense to show this join's own columns, or those of later joins.
 * 
 *   When creating a new join, `join-or-joinable` can be `nil` (JS `undefined` or `null`), or a *joinable*: a table or
 *   card.
 * 
 *   If you are changing the LHS of a condition for an existing join, pass in that existing join as `join-or-joinable` so
 *   we can filter out the columns added by it (it doesn't make sense to present the columns added by a join as options
 *   for its own LHS) or added by later joins (joins can only depend on things from previous joins).
 * 
 *   When building a new join, either pass in `nil` or something joinable (Table or Card metadata) that we're joining to.
 *   (This argument is actually ignored if it's not a join, but these types are accepted for consistency with
 *   [[join-condition-rhs-columns]] which does use the argument. See #32005.)
 * 
 *   If the left-hand-side column has already been chosen and we're UPDATING it, pass in `lhs-column-or-nil` so we can
 *   mark the current column as `:selected` in the return value.
 * 
 *   If the right-hand-side column has already been chosen (they can be chosen in any order in the Query Builder UI),
 *   pass it as `rhs-column-or-nil`. In the future this may be used to restrict results to compatible columns; see #31174.
 * 
 *   Results will be returned in a 'somewhat smart' order, with PKs and FKs returned before other columns.
 * 
 *   Unlike most other things that return columns, implicitly joinable columns **are not** returned here.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.join_condition_lhs_columns = (function metabase$lib$js$join_condition_lhs_columns(a_query,stage_number,join_or_joinable,lhs_column_or_nil,rhs_column_or_nil){
return cljs.core.to_array(metabase.lib.core.join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,join_or_joinable,lhs_column_or_nil,rhs_column_or_nil], 0)));
});
/**
 * Returns a JS array of columns which are valid as the right-hand side of a join condition. By "right-hand side" is
 *   meant the *target column*, the column on the table being joined into the query.
 * 
 *   `join-or-joinable` is either the current join clause being edited, or anything *joinable*: a table, saved question,
 *   model, etc.
 * 
 *   If the left-hand-side column has already been chosen (they can be chosen in any order in the Query Builder UI),
 *   pass it as `lhs-column-or-nil`. (Currently this is ignored, but in the future it may be used to restrict results to
 *   compatible columns; see #31174.)
 * 
 *   If we're *editing* an existing join condition with the RHS column already chosen, pass it as `rhs-column-or-nil`, so
 *   it can be marked as `:selected` in the returned list.
 * 
 *   Results will be returned in a 'somewhat smart' order with PKs and FKs returned before other columns.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.join_condition_rhs_columns = (function metabase$lib$js$join_condition_rhs_columns(a_query,stage_number,join_or_joinable,lhs_column_or_nil,rhs_column_or_nil){
return cljs.core.to_array(metabase.lib.core.join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,join_or_joinable,lhs_column_or_nil,rhs_column_or_nil], 0)));
});
/**
 * Returns a JS array of valid filter clause operators that can be used to build a join condition.
 * 
 *   In the Query Builder UI, this can be chosen at any point before or after choosing the LHS and RHS columns. Invalid
 *   operators are not currently filtered out based on values of the LHS or RHS, but in the future we can add this.
 *   See #31174.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.join_condition_operators = (function metabase$lib$js$join_condition_operators(a_query,stage_number,lhs_column_or_nil,rhs_column_or_nil){
return cljs.core.to_array(metabase.lib.core.join_condition_operators.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,lhs_column_or_nil,rhs_column_or_nil], 0)));
});
/**
 * Adds a `an-expression-clause` to `query` with the user-defined `expression-name`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.expression = (function metabase$lib$js$expression(a_query,stage_number,expression_name,an_expression_clause){
return metabase.lib.core.expression.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,expression_name,an_expression_clause], 0));
});
/**
 * Return a new expression clause like `an-expression-clause` but with name `new-name`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.with_expression_name = (function metabase$lib$js$with_expression_name(an_expression_clause,new_name){
return metabase.lib.core.with_expression_name.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([an_expression_clause,new_name], 0));
});
/**
 * Returns a JS array of expressions on the given stage of `a-query`.
 */
metabase.lib.js.expressions = (function metabase$lib$js$expressions(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.expressions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Returns a JS array of those columns that can be used in an expression in the given stage of `a-query`.
 * 
 *   Expressions can only see other expressions on the same stage which appear earlier in the list, so you must pass
 *   `expression-position` (a 0-based index) when editing an existing expression.
 * 
 *   When creating a new expression, `expression-position` should be `nil` (JS `null` or `undefined`).
 * 
 *   Cached on the query and stage.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.expressionable_columns = (function metabase$lib$js$expressionable_columns(a_query,stage_number,expression_position){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("expressionable-columns",["stage-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stage_number),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expression_position)].join('')),a_query,(function (_){
return cljs.core.to_array(metabase.lib.core.expressionable_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,expression_position], 0)));
}));
});
/**
 * Column extractions are a set of transformations possible on a given `column`, based on its type.
 * 
 *   For example, we might extract the day of the week from a temporal column, or the domain name from an email or URL.
 * 
 *   Returns a (possibly empty) JS array of possible column extractions for the given column.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.column_extractions = (function metabase$lib$js$column_extractions(a_query,column){
return cljs.core.to_array(metabase.lib.core.column_extractions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,column], 0)));
});
/**
 * Given `a-query` and an `extraction` from [[column-extractions]], apply that extraction to the query.
 * 
 *   Generally this means adding a new expression. Returns an updated query.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.extract = (function metabase$lib$js$extract(a_query,stage_number,extraction){
return metabase.lib.core.extract.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,extraction], 0));
});
/**
 * Given `a-query` and an `extraction`, returns the expression it represents, as an opaque form similarly to
 *   [[expression-clause]]. It can be passed to [[expression]] to add it to the query. (Though if that's all you need, use
 *   [[extract]] instead.)
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.extraction_expression = (function metabase$lib$js$extraction_expression(_a_query,_stage_number,extraction){
return metabase.lib.core.extraction_expression.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([extraction], 0));
});
/**
 * Returns a JS array of possible default join conditions when joining against `joinable`, e.g. a Table, Saved
 *   Question, or another query. Suggested conditions will be returned if the existing query has a foreign key to the
 *   primary key of the `joinable`. (See #31175 for more info.)
 * 
 *   When editing a join, the `position` (0-based index) of the join should be provided. Any columns introduced by that
 *   join or later joins are treated as not available for join conditions.
 * 
 *   Returns `[]` if we cannot determine any "obvious" join conditions.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.suggested_join_conditions = (function metabase$lib$js$suggested_join_conditions(var_args){
var G__80577 = arguments.length;
switch (G__80577) {
case 3:
return metabase.lib.js.suggested_join_conditions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.js.suggested_join_conditions.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.suggested_join_conditions', metabase.lib.js.suggested_join_conditions);

(metabase.lib.js.suggested_join_conditions.cljs$core$IFn$_invoke$arity$3 = (function (a_query,stage_number,joinable){
return cljs.core.to_array(metabase.lib.core.suggested_join_conditions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,joinable], 0)));
}));

(metabase.lib.js.suggested_join_conditions.cljs$core$IFn$_invoke$arity$4 = (function (a_query,stage_number,joinable,position){
return cljs.core.to_array(metabase.lib.core.suggested_join_conditions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,joinable,position], 0)));
}));

(metabase.lib.js.suggested_join_conditions.cljs$lang$maxFixedArity = 4);

/**
 * Get the fields list associated with `a-join`. That is, the set of fields from the *joinable* which are being joined
 *   into the query.
 * 
 *   This is either a JS array of columns, or one of the keywords `:all` or `:none`.
 * 
 *   > **Code health:** Healthy. This returns refs, but they're treated as opaque.
 */
metabase.lib.js.join_fields = (function metabase$lib$js$join_fields(a_join){
var joined_fields = metabase.lib.core.join_fields.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join], 0));
if((joined_fields instanceof cljs.core.Keyword)){
return metabase.util.qualified_name(joined_fields);
} else {
return cljs.core.to_array(joined_fields);
}
});
/**
 * Set the `:fields` for `a-join`, returning a new join clause.
 * 
 *   This can either be a list of fields, or a string or keyword `:all` or `:none`.
 * 
 *   > **Code health:** Healthy. This consumes field refs, but they're treated as opaque.
 */
metabase.lib.js.with_join_fields = (function metabase$lib$js$with_join_fields(a_join,new_fields){
return metabase.lib.core.with_join_fields.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join,(function (){var G__80593 = new_fields;
if(typeof new_fields === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__80593);
} else {
return G__80593;
}
})()], 0));
});
/**
 * Create a join clause (an `:mbql/join` map) against something `joinable` (Table metadata, a Saved Question, another
 *   query, etc.) with 1 or more `conditions`, which should be an array of filter clauses, and a join strategy. You can
 *   then adjust this join clause with functions like [[with-join-fields]], or add it to a query with [[join]].
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.join_clause = (function metabase$lib$js$join_clause(joinable,conditions,strategy){
return metabase.lib.core.join_clause.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([joinable,conditions,strategy], 0));
});
/**
 * Add `a-join`, a join clause as created by [[join-clause]], to the specified stage of `a-query`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.join = (function metabase$lib$js$join(a_query,stage_number,a_join){
return metabase.lib.core.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,a_join], 0));
});
/**
 * Get the conditions associated with `a-join`, as a JS array of filter clauses.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.join_conditions = (function metabase$lib$js$join_conditions(a_join){
return cljs.core.to_array(metabase.lib.core.join_conditions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join], 0)));
});
/**
 * Set the conditions for `a-join`, returning a new join clause.
 * 
 *   `conditions` should be a list of filter clauses; see [[filter-clause]].
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.with_join_conditions = (function metabase$lib$js$with_join_conditions(a_join,conditions){
return metabase.lib.core.with_join_conditions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_join,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(conditions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0));
});
/**
 * Return a JS array of all joins on the given stage of `a-query`.
 * 
 *   Returns `[]` if there are no joins on this stage.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.joins = (function metabase$lib$js$joins(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.joins.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Rename the join specified by `join-spec` on the given stage of `a-query` to `new-name`.
 * 
 *   `join-spec` can be any of:
 * 
 *   - The join clause itself (as returned by [[joins]])
 *   - Its join alias (a string)
 *   - Its index in the list of joins as returned by [[joins]]
 * 
 *   If the specified join cannot be found, then `a-query` is returned with no changes.
 * 
 *   If renaming the join to `new-name` would clash with an existing join, a suffix is appended to `new-name` to make it
 *   unique.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.rename_join = (function metabase$lib$js$rename_join(a_query,stage_number,join_spec,new_name){
return metabase.lib.core.rename_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,join_spec,new_name], 0));
});
/**
 * Remove the join specified by `join-spec` from the given stage of `a-query` at `stage-number`.
 * 
 *   `join-spec` can be any of:
 * 
 *   - The join clause itself (as returned by [[joins]])
 *   - Its join alias (a string)
 *   - Its index in the list of joins as returned by [[joins]]
 * 
 *   If the specified join cannot be found, then `a-query` is returned with no changes.
 * 
 *   Other clauses which reference the removed join (eg. filters, breakouts or aggregations which reference joined columns)
 *   are also removed, and so on recursively.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.remove_join = (function metabase$lib$js$remove_join(a_query,stage_number,join_spec){
return metabase.lib.core.remove_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,join_spec], 0));
});
/**
 * Return metadata about the origin of `a-join`, typically a table, card or model.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.joined_thing = (function metabase$lib$js$joined_thing(a_query,a_join){
return metabase.lib.join.joined_thing(a_query,a_join);
});
/**
 * Temporary solution providing access to internal IDs for the FE to pass on to MLv1 functions.
 * 
 *   > **Code health:** Single-use, Legacy, Deprecated! This exists only to support some legacy UI in the join picker. No
 *   new calls should be added, and the UI should be refactored to remove the need for this function.
 */
metabase.lib.js.picker_info = (function metabase$lib$js$picker_info(a_query,metadata){
var G__80594 = new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metadata);
var G__80594__$1 = (((G__80594 instanceof cljs.core.Keyword))?G__80594.fqn:null);
switch (G__80594__$1) {
case "metadata/table":
return ({"databaseId": new cljs.core.Keyword(null,"database","database",1849087575).cljs$core$IFn$_invoke$arity$1(a_query), "tableId": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metadata)});

break;
case "metadata/card":
return ({"databaseId": new cljs.core.Keyword(null,"database","database",1849087575).cljs$core$IFn$_invoke$arity$1(a_query), "tableId": ["card__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metadata))].join(''), "cardId": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(metadata), "isModel": cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(metadata)),new cljs.core.Keyword(null,"model","model",331153215))});

break;
default:
var level__73195__auto___80631 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73196__auto___80632 = "metabase.lib.js";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73196__auto___80632,level__73195__auto___80631))){
var x__73197__auto___80633 = "Cannot provide picker-info for";
if((x__73197__auto___80633 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___80632,level__73195__auto___80631,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metadata)], 0)),x__73197__auto___80633);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___80632,level__73195__auto___80631,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__73197__auto___80633,new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metadata)], 0)),null);
}
} else {
}

return null;

}
});
/**
 * Convert an expression or filter `clause` to the AST format used by [[expression-parts]].
 * 
 *   > **Code health:** Smelly. How is this different from [[expression-parts]]? These two should likely be unified.
 */
metabase.lib.js.external_op = (function metabase$lib$js$external_op(clause){
var map__80595 = metabase.lib.core.external_op.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0));
var map__80595__$1 = cljs.core.__destructure_map(map__80595);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80595__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80595__$1,new cljs.core.Keyword(null,"options","options",99638489));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80595__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return ({"operator": operator, "options": cljs.core.clj__GT_js(options), "args": cljs.core.to_array(args)});
});
/**
 * Create a new native query.
 * 
 *   *Native* in this sense means a pMBQL query where the first stage is `:mbql.stage/native`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.native_query = (function metabase$lib$js$native_query(database_id,metadata,inner_query){
return metabase.lib.core.native_query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.js.metadataProvider(database_id,metadata),inner_query], 0));
});
/**
 * Update the raw native query. The first stage of `a-query` must already be a native stage.
 * 
 *   Replaces templates tags.
 * 
 *   > **Code health:** Healthy.
 */
metabase.lib.js.with_native_query = (function metabase$lib$js$with_native_query(a_query,inner_query){
return metabase.lib.core.with_native_query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,inner_query], 0));
});
/**
 * Updates the native first stage of `a-query`'s template tags to the provided `tags`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.with_template_tags = (function metabase$lib$js$with_template_tags(a_query,tags){
return metabase.lib.core.with_template_tags.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,metabase.lib.js.convert_js_template_tags(tags)], 0));
});
/**
 * Returns the native query string for the native first stage of `a-query`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.raw_native_query = (function metabase$lib$js$raw_native_query(a_query){
return metabase.lib.core.raw_native_query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
});
/**
 * Returns the template tags for the native first stage of `a-query`, as a JS object mapping tag names to tag info.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.template_tags = (function metabase$lib$js$template_tags(a_query){
return cljs.core.clj__GT_js(metabase.lib.core.template_tags.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0)));
});
/**
 * Returns a JS array of the extra keys that are required for this database's native queries.
 * 
 *   For example `:collection` name is needed for MongoDB queries.
 * 
 *   > **Code health:** Single use. This is only intended to be called from the native query editor.
 */
metabase.lib.js.required_native_extras = (function metabase$lib$js$required_native_extras(database_id,metadata){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.util.qualified_name,metabase.lib.core.required_native_extras.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.js.metadataProvider(database_id,metadata)], 0))));
});
/**
 * Returns whether the database targeted by `a-query` has native write permissions.
 * 
 *   > **Code health:** Single use. This is only intended to be called from the native query editor.
 */
metabase.lib.js.has_write_permission = (function metabase$lib$js$has_write_permission(a_query){
return metabase.lib.core.has_write_permission.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
});
/**
 * Changes the database for `a-query`. The first stage of `a-query` must be a native type.
 * 
 *   `native-extras` must be provided if the database needs any extras (eg. MongoDB collection name), as a map from extra
 *   name to value.
 * 
 *   Returns the updated query.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.with_different_database = (function metabase$lib$js$with_different_database(var_args){
var G__80597 = arguments.length;
switch (G__80597) {
case 3:
return metabase.lib.js.with_different_database.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.js.with_different_database.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.with_different_database', metabase.lib.js.with_different_database);

(metabase.lib.js.with_different_database.cljs$core$IFn$_invoke$arity$3 = (function (a_query,database_id,metadata){
return metabase.lib.js.with_different_database.cljs$core$IFn$_invoke$arity$4(a_query,database_id,metadata,null);
}));

(metabase.lib.js.with_different_database.cljs$core$IFn$_invoke$arity$4 = (function (a_query,database_id,metadata,native_extras){
return metabase.lib.core.with_different_database.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,metabase.lib.js.metadataProvider(database_id,metadata),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(native_extras,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0));
}));

(metabase.lib.js.with_different_database.cljs$lang$maxFixedArity = 4);

/**
 * Updates the values of the extras required for the DB to run `a-query`. The first stage must be a native type.
 * 
 *   `native-extras` is a JS map of extra names (as returned by [[required-native-extras]]) to their values.
 * 
 *   Will ignore extras not in [[required-native-extras]].
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.with_native_extras = (function metabase$lib$js$with_native_extras(a_query,native_extras){
return metabase.lib.core.with_native_extras.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(native_extras,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], 0));
});
/**
 * Returns the native extras (eg. MongoDB collection name) associated with `a-query`'s native first stage, as a JS map
 *   of extra names to values.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.native_extras = (function metabase$lib$js$native_extras(a_query){
return cljs.core.clj__GT_js(metabase.lib.core.native_extras.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0)));
});
/**
 * Returns the database engine of the database targeted by `a-query`, which must have a native first stage.
 * 
 *   > **Code health:** Healthy.
 */
metabase.lib.js.engine = (function metabase$lib$js$engine(a_query){
return cljs.core.name(metabase.lib.core.engine.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0)));
});
/**
 * Get metadata for the legacy Segment with `segment-id`, if it can be found.
 * 
 *   `metadata-providerable` is anything that can provide metadata - it can be JS `Metadata` itself, but more commonly it
 *   will be a query.
 * 
 *   > **Code health:** Legacy, Single use, Deprecated. No new calls; this is only for legacy Segments and will be removed
 *   when they are.
 */
metabase.lib.js.segment_metadata = (function metabase$lib$js$segment_metadata(metadata_providerable,segment_id){
return metabase.lib.metadata.segment(metadata_providerable,segment_id);
});
/**
 * Returns a JS array of opaque legacy Segments metadata objects, that could be used as filters for `a-query`.
 * 
 *   > **Code health:** Legacy, Single use, Deprecated. No new calls; this is only for legacy Segments and will be removed
 *   when they are.
 */
metabase.lib.js.available_segments = (function metabase$lib$js$available_segments(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.available_segments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Returns a JS array of opaque metadata values for those Metrics that could be used as aggregations on
 *   `a-query`.
 * 
 *   > **Code health:** Healthy.
 */
metabase.lib.js.available_metrics = (function metabase$lib$js$available_metrics(a_query,stage_number){
return cljs.core.to_array(metabase.lib.core.available_metrics.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)));
});
/**
 * Given `a-query`, returns true if it is based on metrics. That means the main data source is a metric and so are all
 *   joins (if any).
 * 
 *   > **Code health:** Healthy.
 */
metabase.lib.js.metric_based_QMARK_ = (function metabase$lib$js$metric_based_QMARK_(a_query,stage_number){
return metabase.lib.core.metric_based_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0));
});
/**
 * Returns a JS array of columns that are available when joining `join-or-joinable` into `a-query`.
 * 
 *   `join-or-joinable` can be a join clause, or something joinable (a table, card, model, etc.).
 * 
 *   If `join-or-joinable` is a join clause already added to `a-query`, the currently selected columns will be marked
 *   `:selected true` for highlighting in the UI.
 * 
 *   The returned columns can be passed to [[with-join-fields]] to configure which list of columns are joined.
 * 
 *   Note that this is *not* cached like most of the other `___able-columns` functions, since the `join-or-joinable` is
 *   part of the key and difficult to cache.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.joinable_columns = (function metabase$lib$js$joinable_columns(a_query,stage_number,join_or_joinable){
return cljs.core.to_array(metabase.lib.core.joinable_columns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,join_or_joinable], 0)));
});
/**
 * Given an integer `table-id`, returns the table's metadata. Given a legacy `"card__123"` string, returns the card's
 *   metadata.
 * 
 *   Returns `nil` (JS `null`) if no matching metadata is found.
 * 
 *   > **Code health:** Legacy. Avoid new calls - this leaks too much of how sources are stored, and with Metrics v2 the
 *   way sources are stored will be evolving. A more general API for checking the sources of a query (or join) should be
 *   added, and then this function deprecated and removed.
 */
metabase.lib.js.table_or_card_metadata = (function metabase$lib$js$table_or_card_metadata(query_or_metadata_provider,table_id){
return metabase.lib.metadata.table_or_card(query_or_metadata_provider,table_id);
});
/**
 * Get the display name for the joined table, card, model, etc.
 * 
 *   For an existing join, `join-or-joinable` should be the join clause as returned by [[joins]].
 * 
 *   For a new join under construction, `join-or-joinable` should be the target entity, eg. table or card metadata.
 * 
 *   If the join has a condition set, its LHS column should be passed as `condition-lhs-column-or-nil`. If not defined yet,
 *   pass `nil` (JS `null` or `undefined`).
 * 
 *   > **Code health:** Smelly. Name should be updated, and docs expanded to explain how the name is calculated; see the
 *   docs on [[metabase.lib.join/join-lhs-display-name]].
 */
metabase.lib.js.join_lhs_display_name = (function metabase$lib$js$join_lhs_display_name(a_query,stage_number,join_or_joinable,condition_lhs_column_or_nil){
return metabase.lib.core.join_lhs_display_name.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,join_or_joinable,condition_lhs_column_or_nil], 0));
});
/**
 * Get the Database ID (`:database`) associated with `a-query`.
 * 
 *   Typically this is straightforward: queries generally specify the database ID they are querying.
 * 
 *   However, in some cases where the source is a saved question, a magic value is used,
 *   [[metabase.legacy-mbql.schema/saved-questions-virtual-database-id]]:
 * 
 *    {:database -1337}
 * 
 *   We attempt to resolve the correct Database ID by getting the metadata for any source card and checking its
 *   database ID. If that is not available, this function will return `nil` (JS `null`).
 * 
 *   > **Code health:** Healthy.
 */
metabase.lib.js.database_id = (function metabase$lib$js$database_id(a_query){
return metabase.lib.core.database_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
});
/**
 * Updates the provided `join-condition` so both the LHS and RHS columns have the provied temporal bucketing option.
 * 
 *   `join-condition` must be a *standard join condition*, meaning it's in the form constructed by the query builder UI,
 *   where the LHS is a column in the outer query and RHS is a column from the joinable.
 * 
 *   Returns a new `join-condition`, where both the LHS and RHS of the comparison are updated with `bucketing-option`.
 *   If temporal bucketing is not supported by these columns, they are returned unchanged.
 * 
 *   > **Code health:** Single use. Avoid new calls; this is only intended to be called from the query builder UI.
 */
metabase.lib.js.join_condition_update_temporal_bucketing = (function metabase$lib$js$join_condition_update_temporal_bucketing(a_query,stage_number,join_condition,bucketing_option){
return metabase.lib.core.join_condition_update_temporal_bucketing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,join_condition,bucketing_option], 0));
});
metabase.lib.js.fix_column_with_ref = (function metabase$lib$js$fix_column_with_ref(a_ref,column){
var G__80598 = column;
if(cljs.core.truth_((function (){var G__80599 = a_ref;
var G__80599__$1 = (((G__80599 == null))?null:cljs.core.first(G__80599));
if((G__80599__$1 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__80599__$1,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80598,new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),cljs.core.last(a_ref));
} else {
return G__80598;
}
});
/**
 * Given a JS `DatasetColumn`, return a CLJS `:metadata/column` for the same column.
 * 
 *   This properly handles fields, expressions and aggregations.
 * 
 *   > **Code health:** Legacy. Avoid new calls. We should refactor the existing callers so they receive MLv2 columns in
 *   the first place, and don't need to convert via to MLv2 via this function.
 */
metabase.lib.js.legacy_column__GT_metadata = (function metabase$lib$js$legacy_column__GT_metadata(a_query,stage_number,js_column){
return metabase.lib.convert.do_with_aggregation_list(metabase.lib.core.aggregations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)),(function (){
var column_ref = (function (){var temp__5804__auto__ = js_column.field_ref;
if(cljs.core.truth_(temp__5804__auto__)){
var a_ref = temp__5804__auto__;
return metabase.lib.js.legacy_ref__GT_pMBQL(a_ref);
} else {
return null;
}
})();
return metabase.lib.js.fix_column_with_ref(column_ref,(metabase.lib.js.metadata.parse_column.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.js.metadata.parse_column.cljs$core$IFn$_invoke$arity$1(js_column) : metabase.lib.js.metadata.parse_column.call(null,js_column)));
}));
});
/**
 * Given a `col-fn`, returns a function that will extract a JS object like
 *   `{col: {name: "ID", ...}, value: 12}` into a CLJS map like
 *   ```
 *   {:column     {:lib/type :metadata/column ...}
 * :column-ref [:field ...]
 * :value 12}
 *   ```
 * 
 *   The spelling of the column key differs between multiple JS objects of this same general shape
 *   (`col` on data rows, `column` on dimensions), etc., hence the abstraction.
 */
metabase.lib.js.js_cells_by = (function metabase$lib$js$js_cells_by(col_fn){
return (function (cell){
var column = (function (){var G__80600 = (col_fn.cljs$core$IFn$_invoke$arity$1 ? col_fn.cljs$core$IFn$_invoke$arity$1(cell) : col_fn.call(null,cell));
return (metabase.lib.js.metadata.parse_column.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.js.metadata.parse_column.cljs$core$IFn$_invoke$arity$1(G__80600) : metabase.lib.js.metadata.parse_column.call(null,G__80600));
})();
var column_ref = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"field-ref","field-ref",-1699303428).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(temp__5804__auto__)){
var a_ref = temp__5804__auto__;
return metabase.lib.js.legacy_ref__GT_pMBQL(a_ref);
} else {
return null;
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column","column",2078222095),metabase.lib.js.fix_column_with_ref(column_ref,column),new cljs.core.Keyword(null,"column-ref","column-ref",2018188376),column_ref,new cljs.core.Keyword(null,"value","value",305978217),cell.value], null);
});
});
metabase.lib.js.row_cell = metabase.lib.js.js_cells_by((function (p1__80601_SHARP_){
return p1__80601_SHARP_.col;
}));
metabase.lib.js.dimension_cell = metabase.lib.js.js_cells_by((function (p1__80602_SHARP_){
return p1__80602_SHARP_.column;
}));
/**
 * Return an array (possibly empty) of drill-thrus given:
 * 
 *   - Nullable `column`
 *   - Nullable `value`
 *   - Nullable data `row` - an array of `{col, value}` maps (`clicked.data` in the FE)
 *   - Nullable `dimensions` - an array of `{column, value}` maps (`clicked.dimensions` in the FE)
 * 
 *   Note that `value` makes a distinction between JS `undefined` and JS `null`, even though both values are normally
 *   turned into `nil` in CLJS. The difference is important here: if `value` is unset (`undefined`) then the click was in a
 *   context with no value, such as a column header. If `value` is `null`, we have clicked a value of `NULL` in the SQL
 *   sense. This distinction is important for several drills.
 * 
 *   `column` is `nil` when clicking on a "chart legend", eg. when viewing multiple time series broken out by category,
 *   and then clicking one of the categories in the legend.
 * 
 *   `dimensions` correspond to the breakouts on the query, eg. the `x` axis of a chart. They are vital context for certain
 *   clicks, eg. clicking a point in a time series. In that context, `column` is the aggregation being visualized as the
 *   `y` axis, `value` is the value of the aggregation at that point, and `dimensions` contains the temporal column and its
 *   value for that point. If there are multiple time series, such as different product categories, that column and the
 *   clicked value are also in the `dimensions` list.
 * 
 *   > **Code health:** Single use. This is only here to support the context menu UI and should not be reused.
 */
metabase.lib.js.available_drill_thrus = (function metabase$lib$js$available_drill_thrus(a_query,stage_number,column,value,row,dimensions){
return metabase.lib.convert.do_with_aggregation_list(metabase.lib.core.aggregations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)),(function (){
var column_ref = (function (){var temp__5804__auto__ = (function (){var and__5000__auto__ = column;
if(cljs.core.truth_(and__5000__auto__)){
return column.field_ref;
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var a_ref = temp__5804__auto__;
return metabase.lib.js.legacy_ref__GT_pMBQL(a_ref);
} else {
return null;
}
})();
return cljs.core.to_array(metabase.lib.core.available_drill_thrus.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column","column",2078222095),(cljs.core.truth_(column)?metabase.lib.js.fix_column_with_ref(column_ref,(metabase.lib.js.metadata.parse_column.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.js.metadata.parse_column.cljs$core$IFn$_invoke$arity$1(column) : metabase.lib.js.metadata.parse_column.call(null,column))):null),new cljs.core.Keyword(null,"column-ref","column-ref",2018188376),column_ref,new cljs.core.Keyword(null,"value","value",305978217),(((void 0 === value))?null:(((value == null))?new cljs.core.Keyword(null,"null","null",-180137709):value
))], null),(cljs.core.truth_(row)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.js.row_cell,row)], null):null),(cljs.core.truth_(cljs.core.not_empty(dimensions))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.js.dimension_cell,dimensions)], null):null)], 0))], 0)));
}));
});
/**
 * Applies the given `a-drill-thru` to the specified stage of `a-query`. Returns the updated query.
 * 
 *   Any number of additional `args` can be included when calling this variadic function. The specific drill-thru will
 *   specify the `args` it expects, if any.
 * 
 *   The exact effect on the query depends on the specific drill-thru and the `args`.
 * 
 *   > **Code health:** Single use. This is only here to support the context menu UI and should not be reused.
 */
metabase.lib.js.drill_thru = (function metabase$lib$js$drill_thru(var_args){
var args__5732__auto__ = [];
var len__5726__auto___80635 = arguments.length;
var i__5727__auto___80636 = (0);
while(true){
if((i__5727__auto___80636 < len__5726__auto___80635)){
args__5732__auto__.push((arguments[i__5727__auto___80636]));

var G__80637 = (i__5727__auto___80636 + (1));
i__5727__auto___80636 = G__80637;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return metabase.lib.js.drill_thru.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});
goog.exportSymbol('metabase.lib.js.drill_thru', metabase.lib.js.drill_thru);

(metabase.lib.js.drill_thru.cljs$core$IFn$_invoke$arity$variadic = (function (a_query,stage_number,a_drill_thru,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(metabase.lib.core.drill_thru,a_query,stage_number,a_drill_thru,args);
}));

(metabase.lib.js.drill_thru.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metabase.lib.js.drill_thru.cljs$lang$applyTo = (function (seq80603){
var G__80604 = cljs.core.first(seq80603);
var seq80603__$1 = cljs.core.next(seq80603);
var G__80605 = cljs.core.first(seq80603__$1);
var seq80603__$2 = cljs.core.next(seq80603__$1);
var G__80606 = cljs.core.first(seq80603__$2);
var seq80603__$3 = cljs.core.next(seq80603__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80604,G__80605,G__80606,seq80603__$3);
}));

/**
 * Returns a JS object with the details needed to render the complex UI for `column-filter` and some `quick-filter`
 *   drills. The argument is the opaque `a-drill-thru` value returned by [[available-drill-thrus]].
 * 
 *   Since `a-query` might need an extra stage added (if filtering on aggregation columns) this includes a possible-updated
 *   `query` and `stageIndex`.
 * 
 *   The return value has the form:
 * 
 *    column:     column as returned by [[filterable-columns]] (with the valid filter operators included)
 *    query:      possibly updated query
 *    stageIndex: possibly updated stage
 *    value:      the clicked value (JS `null` for a SQL `NULL` value)
 * 
 *   > **Code health:** Single use. This is only here to support the context menu UI and should not be reused.
 */
metabase.lib.js.filter_drill_details = (function metabase$lib$js$filter_drill_details(p__80607){
var map__80608 = p__80607;
var map__80608__$1 = cljs.core.__destructure_map(map__80608);
var _filter_drill = map__80608__$1;
var a_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80608__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80608__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var stage_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80608__$1,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80608__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ({"column": column, "query": a_query, "stageIndex": stage_number, "value": metabase.lib.drill_thru.common.drill_value__GT_js(value)});
});
/**
 * Returns a JS object with the details needed to render the complex UI for `compare-aggregation` drills.
 *   The argument is the opaque `a-drill-thru` value returned by [[available-drill-thrus]].
 * 
 *   The return value has the form:
 * 
 *    aggregation: aggregation clause as returned by [[aggregation-clause]]
 * 
 *   > **Code health:** Single use. This is only here to support the context menu UI and should not be reused.
 */
metabase.lib.js.aggregation_drill_details = (function metabase$lib$js$aggregation_drill_details(p__80609){
var map__80610 = p__80609;
var map__80610__$1 = cljs.core.__destructure_map(map__80610);
var _aggregation_drill = map__80610__$1;
var aggregation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80610__$1,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696));
return ({"aggregation": aggregation});
});
/**
 * Returns a JS array of the possible column *extractions* offered by `column-extract-drill`.
 * 
 *   The extractions are opaque values of the same type as are returned by [[column-extractions]].
 * 
 *   > **Code health:** Single use. This is only here to support UI for column extract drills, and should not be reused.
 */
metabase.lib.js.column_extract_drill_extractions = (function metabase$lib$js$column_extract_drill_extractions(column_extract_drill){
return cljs.core.to_array(metabase.lib.core.extractions_for_drill.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([column_extract_drill], 0)));
});
/**
 * Returns a JS array of pivot types that are available in `a-drill-thru`, which must be a `pivot` drill-thru.
 * 
 *   The list contains a subset of the strings `"category"`, `"location"` and `"time"`.
 * 
 *   > **Code health:** Single use. This is only here to support the context menu UI and should not be reused.
 */
metabase.lib.js.pivot_types = (function metabase$lib$js$pivot_types(a_drill_thru){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,metabase.lib.core.pivot_types.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_drill_thru], 0))));
});
/**
 * Returns a JS array of pivotable columns for `a-drill-thru`, given the selected `pivot-type`.
 * 
 *   `a-drill-thru` must be a `:drill-thru/pivot` drill, and `pivot-type` one of the strings from the list returned by
 *   [[pivot-types]].
 * 
 *   > **Code health:** Single use. This is only here to support the context menu UI and should not be reused.
 */
metabase.lib.js.pivot_columns_for_type = (function metabase$lib$js$pivot_columns_for_type(a_drill_thru,pivot_type){
return cljs.core.to_array(metabase.lib.core.pivot_columns_for_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_drill_thru,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pivot_type)], 0)));
});
/**
 * Changes an existing `a-query` to use a different source table or card.
 * 
 *   Can be passed an integer table id or a legacy `"card__<id>"` string.
 * 
 *   > **Code health:** Smelly. This leaks the `card__<id>` format and how sources work. Should be refactored into a new
 *   system for handling data sources.
 */
metabase.lib.js.with_different_table = (function metabase$lib$js$with_different_table(a_query,table_id){
return metabase.lib.core.with_different_table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,table_id], 0));
});
/**
 * Given a `n` `unit` time interval and the current date, return a string representing the date-time range.
 * Provide an `offset-n` and `offset-unit` time interval to change the date used relative to the current date.
 * `options` is a map and supports `:include-current` to include the current given unit of time in the range.
 * 
 *   > **Code health:** Deprecated. This is a direct call to a shared date/time formatting library elsewhere in the CLJC
 *   code. It does not need to be wrapped or included here. Just merge these extra keyword conversions into that code and
 *   remove this.
 */
metabase.lib.js.format_relative_date_range = (function metabase$lib$js$format_relative_date_range(n,unit,offset_n,offset_unit,options){
return metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$5(n,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit),offset_n,(function (){var G__80611 = offset_unit;
if((G__80611 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__80611);
}
})(),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});
/**
 * Given `a-ref-or-column` and a list of `columns`, finds the column that best matches this ref or column.
 * 
 * Matching is based on finding the basically plausible matches first. There is often zero or one plausible matches, and
 * this can return quickly.
 * 
 * If there are multiple plausible matches, they are disambiguated by the most important extra included in the `ref`.
 * (`:join-alias` first, then `:temporal-unit`, etc.)
 * 
 * - Integer IDs in the `ref` are matched by ID; this usually is unambiguous.
 * - If there are multiple joins on one table (including possible implicit joins), check `:join-alias` next.
 * - If `a-ref` has a `:join-alias`, only a column which matches it can be the match, and it should be unique.
 * - If `a-ref` doesn't have a `:join-alias`, prefer the column with no `:join-alias`, and prefer already selected
 * columns over implicitly joinable ones.
 * - There may be broken cases where the ref has an ID but the column does not. Therefore the ID must be resolved to a
 * name or `:lib/desired-column-alias` and matched that way.
 * - `query` and `stage-number` are required for this case, since they're needed to resolve the correct name.
 * - Columns with `:id` set are dropped to prevent them matching. (If they didn't match by `:id` above they shouldn't
 * match by name due to a coincidence of column names in different tables.)
 * - String IDs are checked against `:lib/desired-column-alias` first.
 * - If that doesn't match any columns, `:name` is compared next.
 * - The same disambiguation (by `:join-alias` etc.) is applied if there are multiple plausible matches.
 * 
 * Returns the matching column, or nil if no match is found.
 * 
 *   > **Code health:** Legacy, borderline Deprecated. Refs are a leak in the API that needs closing. This is called with a
 *   legacy column for ordering a table, which passes through [[legacy-column->metadata]] and then is used to match up the
 *   orderable-columns. (That should be replaced with `:selected true` or equivalent on [[orderable-columns]].) The other
 *   use maps a breakout column against [[filterable-columns]].
 */
metabase.lib.js.find_matching_column = (function metabase$lib$js$find_matching_column(a_query,stage_number,a_ref,columns){
return metabase.lib.core.find_matching_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,a_ref,columns], 0));
});
/**
 * Return `true` if the given stage of `a-query` contains any clauses.
 * 
 *   This returns `false` in the same conditions which [[drop-empty-stages]] considers "empty".
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.has_clauses = (function metabase$lib$js$has_clauses(a_query,stage_number){
return metabase.lib.core.has_clauses_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0));
});
/**
 * Returns the number of stages in `a-query`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.stage_count = (function metabase$lib$js$stage_count(a_query){
return metabase.lib.core.stage_count.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query], 0));
});
/**
 * Provides a reasonable display name for `a-filter-clause`, excluding the column name.
 * 
 *   Can be expanded as needed but only currently defined for a narrow set of date filters.
 * 
 *   Falls back to the full filter display-name.
 * 
 *   > **Code health:** Smelly, Single use. This feels like over-fitting to a particular use case. It should probably
 *   become parts of the display info for the filter clause, rather than a separate specific function.
 */
metabase.lib.js.filter_args_display_name = (function metabase$lib$js$filter_args_display_name(a_query,stage_number,a_filter_clause){
return metabase.lib.core.filter_args_display_name.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,a_filter_clause], 0));
});
/**
 * Convert `legacy-expression` into a modern expression clause.
 * 
 *   > **Code health:** Legacy, Single use. We should refactor away the round trip through legacy expressions and make the
 *   expression parser understand MLv2 expressions.
 */
metabase.lib.js.expression_clause_for_legacy_expression = (function metabase$lib$js$expression_clause_for_legacy_expression(a_query,stage_number,legacy_expression){
return metabase.lib.convert.do_with_aggregation_list(metabase.lib.core.aggregations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)),(function (){
var expr = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(legacy_expression,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var expr__$1 = cljs.core.first(metabase.legacy_mbql.normalize.normalize_fragment(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr], null)));
return metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(expr__$1)], 0));
}));
});
/**
 * Convert `an-expression-clause` into a legacy expression.
 * 
 *   When processing aggregation clauses with custom expressions, any `aggregation-options` wrapper is thrown away. (The
 *   options specify extras like the name of the aggregation expression.)
 * 
 *   > **Code health:** Legacy, Single use. We should refactor away the round trip through legacy expressions and make the
 *   expression parser understand MLv2 expressions.
 */
metabase.lib.js.legacy_expression_for_expression_clause = (function metabase$lib$js$legacy_expression_for_expression_clause(a_query,stage_number,an_expression_clause){
return metabase.lib.convert.do_with_aggregation_list(metabase.lib.core.aggregations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)),(function (){
var legacy_expr = metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(an_expression_clause);
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic((function (){var G__80612 = legacy_expr;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.vector_QMARK_(legacy_expr);
if(and__5000__auto__){
var G__80614 = cljs.core.first(legacy_expr);
var fexpr__80613 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),null], null), null);
return (fexpr__80613.cljs$core$IFn$_invoke$arity$1 ? fexpr__80613.cljs$core$IFn$_invoke$arity$1(G__80614) : fexpr__80613.call(null,G__80614));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__80612,(1));
} else {
return G__80612;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),metabase.util.qualified_name], 0));
}));
});
/**
 * Checks `legacy-expression` for type errors and possibly for cyclic references to other expressions.
 * 
 *   - `expression-mode` specifies what type of thing `expr` is: an "expression" (custom column),
 *  an "aggregation" expression, or a "filter" condition.
 *   - `legacy-expression` is a legacy MBQL expression created using the custom column editor in the FE.
 *   - `expression-position` is provided when editing an existing custom column, and `nil` otherwise.
 * 
 *   Cyclic references are checked only when `expression-mode` is `"expression"` and `expression-position` is non-`nil`.
 *   In that case it is an error for an expression at position `i` to reference an expression at position `j >= i`.
 * 
 *   Returns an i18n error message describing the problem, or `nil` (JS `null`) if there are no issues.
 * 
 *   > **Code health:** Legacy, Single use. The expression parser should be refactored to support MLv2 expressions, and
 *   then several of these functions for dealing with legacy can be removed.
 */
metabase.lib.js.diagnose_expression = (function metabase$lib$js$diagnose_expression(a_query,stage_number,expression_mode,legacy_expression,expression_position){
return metabase.lib.convert.do_with_aggregation_list(metabase.lib.core.aggregations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number], 0)),(function (){
var expr = (function (){var expr = legacy_expression;
var expr__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(expr,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var expr__$2 = cljs.core.first(metabase.legacy_mbql.normalize.normalize_fragment(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr__$1], null)));
var expr__$3 = metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(expr__$2);
return metabase.lib.core.normalize.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__$3], 0));
})();
return cljs.core.clj__GT_js(metabase.lib.expression.diagnose_expression(a_query,stage_number,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(expression_mode),expr,expression_position));
}));
});
/**
 * Info about whether the column in question has FieldValues associated with it for purposes of powering a search
 *   widget in the QB filter modals.
 * 
 *   > **Code health:** Single use. Only supports the search info.
 */
metabase.lib.js.field_values_search_info = (function metabase$lib$js$field_values_search_info(metadata_providerable,column){
return cljs.core.clj__GT_js(cljs.core.update_keys(cljs.core.update.cljs$core$IFn$_invoke$arity$3(metabase.lib.field.field_values_search_info(metadata_providerable,column),new cljs.core.Keyword(null,"has-field-values","has-field-values",626648377),cljs.core.name),metabase.lib.js.cljs_key__GT_js_key));
});
/**
 * Add or update a filter against a `latitude-column` and `longitude-column`, based on a bounding rectangle drawn on a
 *   map. **Removes** any existing filters for either column.
 * 
 *   `bounds` is a JS object `{north: number, south: number, west: number, east: number}` giving the bounding rectangle.
 * 
 *   > **Code health:** Smelly; Single use. This is highly specialized in the UI, but should probably continue to exist.
 *   However, it should be adjusted to accept only MLv2 columns. Any legacy conversion should be done by the caller, and
 *   ideally refactored away.
 */
metabase.lib.js.update_lat_lon_filter = (function metabase$lib$js$update_lat_lon_filter(a_query,stage_number,latitude_column,longitude_column,bounds){
var bounds__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(bounds,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var latitude_column__$1 = metabase.lib.js.legacy_column__GT_metadata(a_query,stage_number,latitude_column);
var longitude_column__$1 = metabase.lib.js.legacy_column__GT_metadata(a_query,stage_number,longitude_column);
return metabase.lib.core.update_lat_lon_filter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,latitude_column__$1,longitude_column__$1,bounds__$1], 0));
});
/**
 * Add or update a filter against `numeric-column`, based on the provided start and end values. **Removes** any existing
 *   filters for `numeric-column`.
 * 
 *   > **Code health:** Smelly; Single use. This is highly specialized in the UI, but should probably continue to exist.
 *   However, it should be adjusted to accept only MLv2 columns. Any legacy conversion should be done by the caller, and
 *   ideally refactored away.
 */
metabase.lib.js.update_numeric_filter = (function metabase$lib$js$update_numeric_filter(a_query,stage_number,numeric_column,start,end){
var numeric_column__$1 = metabase.lib.js.legacy_column__GT_metadata(a_query,stage_number,numeric_column);
return metabase.lib.core.update_numeric_filter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,numeric_column__$1,start,end], 0));
});
/**
 * Add or update a filter against `temporal-column`, based on the provided start and end values.
 *   **Removes** any existing filters for `numeric-column`.
 * 
 *   Modifies the temporal unit for any breakouts to on `temporal-column` to still be useful: If there are fewer than 4
 *   points (see [[metabase.lib.filter.update/temporal-filter-min-num-points]]), move to the next-smaller unit.
 * 
 *   > **Code health:** Smelly; Single use. This is highly specialized in the UI, but should probably continue to exist.
 *   However, it should be adjusted to accept only MLv2 columns. Any legacy conversion should be done by the caller, and
 *   ideally refactored away.
 */
metabase.lib.js.update_temporal_filter = (function metabase$lib$js$update_temporal_filter(a_query,stage_number,temporal_column,start,end){
var temporal_column__$1 = metabase.lib.js.legacy_column__GT_metadata(a_query,stage_number,temporal_column);
return metabase.lib.core.update_temporal_filter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,temporal_column__$1,start,end], 0));
});
/**
 * Given two columns, returns true if `src-column` is a valid source to use for filtering `dst-column`.
 * 
 *   > **Code health:** Healthy.
 */
metabase.lib.js.valid_filter_for_QMARK_ = (function metabase$lib$js$valid_filter_for_QMARK_(src_column,dst_column){
return metabase.lib.types.isa.valid_filter_for_QMARK_(src_column,dst_column);
});
/**
 * Return a JS array of entities which `a-query` requires to be loaded. `card-id` is provided
 *   when editing the card with that ID and in this case `a-query` is its definition (i.e., the
 *   dataset-query). `card-type` specifies the type of the card being created or edited.
 * 
 *   Required entities are all tables and cards which are used as sources or joined in, etc.
 * 
 *   Each entity is returned as a JS map `{type: "database"|"schema"|"table"|"field", id: number}`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.dependent_metadata = (function metabase$lib$js$dependent_metadata(a_query,card_id,card_type){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,metabase.lib.core.dependent_metadata.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,card_id,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(card_type)], 0))));
});
/**
 * Return a JS array of entities which are needed upfront to create a new query based on a table/card.
 * 
 *   Each entity is returned as a JS map `{type: "database"|"schema"|"table"|"field", id: number}`.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.table_or_card_dependent_metadata = (function metabase$lib$js$table_or_card_dependent_metadata(metadata_providerable,table_id){
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.clj__GT_js,metabase.lib.core.table_or_card_dependent_metadata.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata_providerable,table_id], 0))));
});
/**
 * Returns true if the query is runnable.
 *   `card-type` is optional and defaults to "question".
 * 
 *   MBQL queries are always runnable. Native queries can run when:
 * 
 *   - Every *extra* from [[native-extras]] has a value, and
 *   - The native query is non-empty.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.can_run = (function metabase$lib$js$can_run(var_args){
var G__80616 = arguments.length;
switch (G__80616) {
case 1:
return metabase.lib.js.can_run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.js.can_run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.can_run', metabase.lib.js.can_run);

(metabase.lib.js.can_run.cljs$core$IFn$_invoke$arity$1 = (function (a_query){
return metabase.lib.js.can_run.cljs$core$IFn$_invoke$arity$2(a_query,"question");
}));

(metabase.lib.js.can_run.cljs$core$IFn$_invoke$arity$2 = (function (a_query,card_type){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("can-run",card_type),a_query,(function (_){
return metabase.lib.core.can_run.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(card_type)], 0));
}));
}));

(metabase.lib.js.can_run.cljs$lang$maxFixedArity = 2);

/**
 * *Truncates* a query for use in the Notebook editor's "preview" system.
 * 
 *   Takes `a-query` and `stage-index` as usual.
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
 *   - `:aggregation`
 *   - `:breakout`
 *   - `:order-by`
 *   - `:limit`
 * 
 *   If the resulting query fails [[can-preview]], returns nil.
 * 
 *   > **Code health:** Healthy, Single use.
 */
metabase.lib.js.preview_query = (function metabase$lib$js$preview_query(a_query,stage_number,clause_type,clause_index){
var truncated_query = metabase.lib.core.preview_query.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,stage_number,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clause_type),clause_index], 0));
if(cljs.core.truth_(metabase.lib.core.can_preview.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([truncated_query], 0)))){
return truncated_query;
} else {
return null;
}
});
/**
 * Returns true if the query can be saved.
 *   `card-type` is optional and defaults to "question".
 * 
 *   A query can be saved when:
 * 
 *   - It is runnable, according to [[can-run]], and:
 *   - For a native query, all its template tags either have a value provided, or a default.
 * 
 *   > **Code health:** Healthy
 */
metabase.lib.js.can_save = (function metabase$lib$js$can_save(var_args){
var G__80618 = arguments.length;
switch (G__80618) {
case 1:
return metabase.lib.js.can_save.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.js.can_save.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.lib.js.can_save', metabase.lib.js.can_save);

(metabase.lib.js.can_save.cljs$core$IFn$_invoke$arity$1 = (function (a_query){
return metabase.lib.js.can_save.cljs$core$IFn$_invoke$arity$2(a_query,"question");
}));

(metabase.lib.js.can_save.cljs$core$IFn$_invoke$arity$2 = (function (a_query,card_type){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("can-save",card_type),a_query,(function (_){
return metabase.lib.core.can_save.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a_query,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(card_type)], 0));
}));
}));

(metabase.lib.js.can_save.cljs$lang$maxFixedArity = 2);

Object.defineProperty(module.exports, "extract_template_tags", { enumerable: true, get: function() { return metabase.lib.js.extract_template_tags; } });
Object.defineProperty(module.exports, "suggestedName", { enumerable: true, get: function() { return metabase.lib.js.suggestedName; } });
Object.defineProperty(module.exports, "metadataProvider", { enumerable: true, get: function() { return metabase.lib.js.metadataProvider; } });
Object.defineProperty(module.exports, "query", { enumerable: true, get: function() { return metabase.lib.js.query; } });
Object.defineProperty(module.exports, "legacy_query", { enumerable: true, get: function() { return metabase.lib.js.legacy_query; } });
Object.defineProperty(module.exports, "append_stage", { enumerable: true, get: function() { return metabase.lib.js.append_stage; } });
Object.defineProperty(module.exports, "drop_stage", { enumerable: true, get: function() { return metabase.lib.js.drop_stage; } });
Object.defineProperty(module.exports, "drop_empty_stages", { enumerable: true, get: function() { return metabase.lib.js.drop_empty_stages; } });
Object.defineProperty(module.exports, "as_returned", { enumerable: true, get: function() { return metabase.lib.js.as_returned; } });
Object.defineProperty(module.exports, "orderable_columns", { enumerable: true, get: function() { return metabase.lib.js.orderable_columns; } });
Object.defineProperty(module.exports, "display_info", { enumerable: true, get: function() { return metabase.lib.js.display_info; } });
Object.defineProperty(module.exports, "order_by_clause", { enumerable: true, get: function() { return metabase.lib.js.order_by_clause; } });
Object.defineProperty(module.exports, "order_by", { enumerable: true, get: function() { return metabase.lib.js.order_by; } });
Object.defineProperty(module.exports, "order_bys", { enumerable: true, get: function() { return metabase.lib.js.order_bys; } });
Object.defineProperty(module.exports, "change_direction", { enumerable: true, get: function() { return metabase.lib.js.change_direction; } });
Object.defineProperty(module.exports, "breakoutable_columns", { enumerable: true, get: function() { return metabase.lib.js.breakoutable_columns; } });
Object.defineProperty(module.exports, "breakouts", { enumerable: true, get: function() { return metabase.lib.js.breakouts; } });
Object.defineProperty(module.exports, "breakout", { enumerable: true, get: function() { return metabase.lib.js.breakout; } });
Object.defineProperty(module.exports, "breakout_column", { enumerable: true, get: function() { return metabase.lib.js.breakout_column; } });
Object.defineProperty(module.exports, "binning", { enumerable: true, get: function() { return metabase.lib.js.binning; } });
Object.defineProperty(module.exports, "with_binning", { enumerable: true, get: function() { return metabase.lib.js.with_binning; } });
Object.defineProperty(module.exports, "available_binning_strategies", { enumerable: true, get: function() { return metabase.lib.js.available_binning_strategies; } });
Object.defineProperty(module.exports, "temporal_bucket", { enumerable: true, get: function() { return metabase.lib.js.temporal_bucket; } });
Object.defineProperty(module.exports, "with_temporal_bucket", { enumerable: true, get: function() { return metabase.lib.js.with_temporal_bucket; } });
Object.defineProperty(module.exports, "available_temporal_buckets", { enumerable: true, get: function() { return metabase.lib.js.available_temporal_buckets; } });
Object.defineProperty(module.exports, "available_temporal_units", { enumerable: true, get: function() { return metabase.lib.js.available_temporal_units; } });
Object.defineProperty(module.exports, "remove_clause", { enumerable: true, get: function() { return metabase.lib.js.remove_clause; } });
Object.defineProperty(module.exports, "replace_clause", { enumerable: true, get: function() { return metabase.lib.js.replace_clause; } });
Object.defineProperty(module.exports, "swap_clauses", { enumerable: true, get: function() { return metabase.lib.js.swap_clauses; } });
Object.defineProperty(module.exports, "normalize", { enumerable: true, get: function() { return metabase.lib.js.normalize; } });
Object.defineProperty(module.exports, "query_EQ_", { enumerable: true, get: function() { return metabase.lib.js.query_EQ_; } });
Object.defineProperty(module.exports, "group_columns", { enumerable: true, get: function() { return metabase.lib.js.group_columns; } });
Object.defineProperty(module.exports, "columns_group_columns", { enumerable: true, get: function() { return metabase.lib.js.columns_group_columns; } });
Object.defineProperty(module.exports, "describe_temporal_unit", { enumerable: true, get: function() { return metabase.lib.js.describe_temporal_unit; } });
Object.defineProperty(module.exports, "describe_temporal_interval", { enumerable: true, get: function() { return metabase.lib.js.describe_temporal_interval; } });
Object.defineProperty(module.exports, "describe_relative_datetime", { enumerable: true, get: function() { return metabase.lib.js.describe_relative_datetime; } });
Object.defineProperty(module.exports, "aggregate", { enumerable: true, get: function() { return metabase.lib.js.aggregate; } });
Object.defineProperty(module.exports, "aggregations", { enumerable: true, get: function() { return metabase.lib.js.aggregations; } });
Object.defineProperty(module.exports, "aggregation_column", { enumerable: true, get: function() { return metabase.lib.js.aggregation_column; } });
Object.defineProperty(module.exports, "aggregation_clause", { enumerable: true, get: function() { return metabase.lib.js.aggregation_clause; } });
Object.defineProperty(module.exports, "available_aggregation_operators", { enumerable: true, get: function() { return metabase.lib.js.available_aggregation_operators; } });
Object.defineProperty(module.exports, "aggregation_operator_columns", { enumerable: true, get: function() { return metabase.lib.js.aggregation_operator_columns; } });
Object.defineProperty(module.exports, "selected_aggregation_operators", { enumerable: true, get: function() { return metabase.lib.js.selected_aggregation_operators; } });
Object.defineProperty(module.exports, "filterable_columns", { enumerable: true, get: function() { return metabase.lib.js.filterable_columns; } });
Object.defineProperty(module.exports, "filterable_column_operators", { enumerable: true, get: function() { return metabase.lib.js.filterable_column_operators; } });
Object.defineProperty(module.exports, "filter_clause", { enumerable: true, get: function() { return metabase.lib.js.filter_clause; } });
Object.defineProperty(module.exports, "filter_operator", { enumerable: true, get: function() { return metabase.lib.js.filter_operator; } });
Object.defineProperty(module.exports, "filter", { enumerable: true, get: function() { return metabase.lib.js.filter; } });
Object.defineProperty(module.exports, "filters", { enumerable: true, get: function() { return metabase.lib.js.filters; } });
Object.defineProperty(module.exports, "expression_clause", { enumerable: true, get: function() { return metabase.lib.js.expression_clause; } });
Object.defineProperty(module.exports, "expression_parts", { enumerable: true, get: function() { return metabase.lib.js.expression_parts; } });
Object.defineProperty(module.exports, "is_column_metadata", { enumerable: true, get: function() { return metabase.lib.js.is_column_metadata; } });
Object.defineProperty(module.exports, "fields", { enumerable: true, get: function() { return metabase.lib.js.fields; } });
Object.defineProperty(module.exports, "with_fields", { enumerable: true, get: function() { return metabase.lib.js.with_fields; } });
Object.defineProperty(module.exports, "fieldable_columns", { enumerable: true, get: function() { return metabase.lib.js.fieldable_columns; } });
Object.defineProperty(module.exports, "add_field", { enumerable: true, get: function() { return metabase.lib.js.add_field; } });
Object.defineProperty(module.exports, "remove_field", { enumerable: true, get: function() { return metabase.lib.js.remove_field; } });
Object.defineProperty(module.exports, "returned_columns", { enumerable: true, get: function() { return metabase.lib.js.returned_columns; } });
Object.defineProperty(module.exports, "visible_columns", { enumerable: true, get: function() { return metabase.lib.js.visible_columns; } });
Object.defineProperty(module.exports, "column_key", { enumerable: true, get: function() { return metabase.lib.js.column_key; } });
Object.defineProperty(module.exports, "legacy_ref", { enumerable: true, get: function() { return metabase.lib.js.legacy_ref; } });
Object.defineProperty(module.exports, "find_column_indexes_from_legacy_refs", { enumerable: true, get: function() { return metabase.lib.js.find_column_indexes_from_legacy_refs; } });
Object.defineProperty(module.exports, "source_table_or_card_id", { enumerable: true, get: function() { return metabase.lib.js.source_table_or_card_id; } });
Object.defineProperty(module.exports, "join_strategy", { enumerable: true, get: function() { return metabase.lib.js.join_strategy; } });
Object.defineProperty(module.exports, "with_join_strategy", { enumerable: true, get: function() { return metabase.lib.js.with_join_strategy; } });
Object.defineProperty(module.exports, "available_join_strategies", { enumerable: true, get: function() { return metabase.lib.js.available_join_strategies; } });
Object.defineProperty(module.exports, "join_condition_lhs_columns", { enumerable: true, get: function() { return metabase.lib.js.join_condition_lhs_columns; } });
Object.defineProperty(module.exports, "join_condition_rhs_columns", { enumerable: true, get: function() { return metabase.lib.js.join_condition_rhs_columns; } });
Object.defineProperty(module.exports, "join_condition_operators", { enumerable: true, get: function() { return metabase.lib.js.join_condition_operators; } });
Object.defineProperty(module.exports, "expression", { enumerable: true, get: function() { return metabase.lib.js.expression; } });
Object.defineProperty(module.exports, "with_expression_name", { enumerable: true, get: function() { return metabase.lib.js.with_expression_name; } });
Object.defineProperty(module.exports, "expressions", { enumerable: true, get: function() { return metabase.lib.js.expressions; } });
Object.defineProperty(module.exports, "expressionable_columns", { enumerable: true, get: function() { return metabase.lib.js.expressionable_columns; } });
Object.defineProperty(module.exports, "column_extractions", { enumerable: true, get: function() { return metabase.lib.js.column_extractions; } });
Object.defineProperty(module.exports, "extract", { enumerable: true, get: function() { return metabase.lib.js.extract; } });
Object.defineProperty(module.exports, "extraction_expression", { enumerable: true, get: function() { return metabase.lib.js.extraction_expression; } });
Object.defineProperty(module.exports, "suggested_join_conditions", { enumerable: true, get: function() { return metabase.lib.js.suggested_join_conditions; } });
Object.defineProperty(module.exports, "join_fields", { enumerable: true, get: function() { return metabase.lib.js.join_fields; } });
Object.defineProperty(module.exports, "with_join_fields", { enumerable: true, get: function() { return metabase.lib.js.with_join_fields; } });
Object.defineProperty(module.exports, "join_clause", { enumerable: true, get: function() { return metabase.lib.js.join_clause; } });
Object.defineProperty(module.exports, "join", { enumerable: true, get: function() { return metabase.lib.js.join; } });
Object.defineProperty(module.exports, "join_conditions", { enumerable: true, get: function() { return metabase.lib.js.join_conditions; } });
Object.defineProperty(module.exports, "with_join_conditions", { enumerable: true, get: function() { return metabase.lib.js.with_join_conditions; } });
Object.defineProperty(module.exports, "joins", { enumerable: true, get: function() { return metabase.lib.js.joins; } });
Object.defineProperty(module.exports, "rename_join", { enumerable: true, get: function() { return metabase.lib.js.rename_join; } });
Object.defineProperty(module.exports, "remove_join", { enumerable: true, get: function() { return metabase.lib.js.remove_join; } });
Object.defineProperty(module.exports, "joined_thing", { enumerable: true, get: function() { return metabase.lib.js.joined_thing; } });
Object.defineProperty(module.exports, "picker_info", { enumerable: true, get: function() { return metabase.lib.js.picker_info; } });
Object.defineProperty(module.exports, "external_op", { enumerable: true, get: function() { return metabase.lib.js.external_op; } });
Object.defineProperty(module.exports, "native_query", { enumerable: true, get: function() { return metabase.lib.js.native_query; } });
Object.defineProperty(module.exports, "with_native_query", { enumerable: true, get: function() { return metabase.lib.js.with_native_query; } });
Object.defineProperty(module.exports, "with_template_tags", { enumerable: true, get: function() { return metabase.lib.js.with_template_tags; } });
Object.defineProperty(module.exports, "raw_native_query", { enumerable: true, get: function() { return metabase.lib.js.raw_native_query; } });
Object.defineProperty(module.exports, "template_tags", { enumerable: true, get: function() { return metabase.lib.js.template_tags; } });
Object.defineProperty(module.exports, "required_native_extras", { enumerable: true, get: function() { return metabase.lib.js.required_native_extras; } });
Object.defineProperty(module.exports, "has_write_permission", { enumerable: true, get: function() { return metabase.lib.js.has_write_permission; } });
Object.defineProperty(module.exports, "with_different_database", { enumerable: true, get: function() { return metabase.lib.js.with_different_database; } });
Object.defineProperty(module.exports, "with_native_extras", { enumerable: true, get: function() { return metabase.lib.js.with_native_extras; } });
Object.defineProperty(module.exports, "native_extras", { enumerable: true, get: function() { return metabase.lib.js.native_extras; } });
Object.defineProperty(module.exports, "engine", { enumerable: true, get: function() { return metabase.lib.js.engine; } });
Object.defineProperty(module.exports, "segment_metadata", { enumerable: true, get: function() { return metabase.lib.js.segment_metadata; } });
Object.defineProperty(module.exports, "available_segments", { enumerable: true, get: function() { return metabase.lib.js.available_segments; } });
Object.defineProperty(module.exports, "available_metrics", { enumerable: true, get: function() { return metabase.lib.js.available_metrics; } });
Object.defineProperty(module.exports, "metric_based_QMARK_", { enumerable: true, get: function() { return metabase.lib.js.metric_based_QMARK_; } });
Object.defineProperty(module.exports, "joinable_columns", { enumerable: true, get: function() { return metabase.lib.js.joinable_columns; } });
Object.defineProperty(module.exports, "table_or_card_metadata", { enumerable: true, get: function() { return metabase.lib.js.table_or_card_metadata; } });
Object.defineProperty(module.exports, "join_lhs_display_name", { enumerable: true, get: function() { return metabase.lib.js.join_lhs_display_name; } });
Object.defineProperty(module.exports, "database_id", { enumerable: true, get: function() { return metabase.lib.js.database_id; } });
Object.defineProperty(module.exports, "join_condition_update_temporal_bucketing", { enumerable: true, get: function() { return metabase.lib.js.join_condition_update_temporal_bucketing; } });
Object.defineProperty(module.exports, "legacy_column__GT_metadata", { enumerable: true, get: function() { return metabase.lib.js.legacy_column__GT_metadata; } });
Object.defineProperty(module.exports, "available_drill_thrus", { enumerable: true, get: function() { return metabase.lib.js.available_drill_thrus; } });
Object.defineProperty(module.exports, "drill_thru", { enumerable: true, get: function() { return metabase.lib.js.drill_thru; } });
Object.defineProperty(module.exports, "filter_drill_details", { enumerable: true, get: function() { return metabase.lib.js.filter_drill_details; } });
Object.defineProperty(module.exports, "aggregation_drill_details", { enumerable: true, get: function() { return metabase.lib.js.aggregation_drill_details; } });
Object.defineProperty(module.exports, "column_extract_drill_extractions", { enumerable: true, get: function() { return metabase.lib.js.column_extract_drill_extractions; } });
Object.defineProperty(module.exports, "pivot_types", { enumerable: true, get: function() { return metabase.lib.js.pivot_types; } });
Object.defineProperty(module.exports, "pivot_columns_for_type", { enumerable: true, get: function() { return metabase.lib.js.pivot_columns_for_type; } });
Object.defineProperty(module.exports, "with_different_table", { enumerable: true, get: function() { return metabase.lib.js.with_different_table; } });
Object.defineProperty(module.exports, "format_relative_date_range", { enumerable: true, get: function() { return metabase.lib.js.format_relative_date_range; } });
Object.defineProperty(module.exports, "find_matching_column", { enumerable: true, get: function() { return metabase.lib.js.find_matching_column; } });
Object.defineProperty(module.exports, "has_clauses", { enumerable: true, get: function() { return metabase.lib.js.has_clauses; } });
Object.defineProperty(module.exports, "stage_count", { enumerable: true, get: function() { return metabase.lib.js.stage_count; } });
Object.defineProperty(module.exports, "filter_args_display_name", { enumerable: true, get: function() { return metabase.lib.js.filter_args_display_name; } });
Object.defineProperty(module.exports, "expression_clause_for_legacy_expression", { enumerable: true, get: function() { return metabase.lib.js.expression_clause_for_legacy_expression; } });
Object.defineProperty(module.exports, "legacy_expression_for_expression_clause", { enumerable: true, get: function() { return metabase.lib.js.legacy_expression_for_expression_clause; } });
Object.defineProperty(module.exports, "diagnose_expression", { enumerable: true, get: function() { return metabase.lib.js.diagnose_expression; } });
Object.defineProperty(module.exports, "field_values_search_info", { enumerable: true, get: function() { return metabase.lib.js.field_values_search_info; } });
Object.defineProperty(module.exports, "update_lat_lon_filter", { enumerable: true, get: function() { return metabase.lib.js.update_lat_lon_filter; } });
Object.defineProperty(module.exports, "update_numeric_filter", { enumerable: true, get: function() { return metabase.lib.js.update_numeric_filter; } });
Object.defineProperty(module.exports, "update_temporal_filter", { enumerable: true, get: function() { return metabase.lib.js.update_temporal_filter; } });
Object.defineProperty(module.exports, "valid_filter_for_QMARK_", { enumerable: true, get: function() { return metabase.lib.js.valid_filter_for_QMARK_; } });
Object.defineProperty(module.exports, "dependent_metadata", { enumerable: true, get: function() { return metabase.lib.js.dependent_metadata; } });
Object.defineProperty(module.exports, "table_or_card_dependent_metadata", { enumerable: true, get: function() { return metabase.lib.js.table_or_card_dependent_metadata; } });
Object.defineProperty(module.exports, "can_run", { enumerable: true, get: function() { return metabase.lib.js.can_run; } });
Object.defineProperty(module.exports, "preview_query", { enumerable: true, get: function() { return metabase.lib.js.preview_query; } });
Object.defineProperty(module.exports, "can_save", { enumerable: true, get: function() { return metabase.lib.js.can_save; } });
//# sourceMappingURL=metabase.lib.js.js.map
