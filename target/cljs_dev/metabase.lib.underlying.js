var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.field.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.underlying.js");

goog.provide('metabase.lib.underlying');
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: [:maybe :metabase.lib.schema/query]
 *        
 * 
 *   Strips off any trailing stages that do not contain aggregations.
 * 
 *   If there are no such stages, returns nil.
 */
metabase.lib.underlying.pop_until_aggregation_or_breakout = (function metabase$lib$underlying$pop_until_aggregation_or_breakout(query){
while(true){
if(((cljs.core.empty_QMARK_(metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$2(query,(-1)))) && (cljs.core.empty_QMARK_(metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2(query,(-1)))))){
var popped = cljs.core.update.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.pop);
if(cljs.core.seq(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(popped))){
var G__79074 = popped;
query = G__79074;
continue;
} else {
return null;
}
} else {
return query;
}
break;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Returns the "top-level" query for the given query.
 * 
 *   That means dropping any trailing filters, fields, etc. to get back to the last stage that has an aggregation. If there
 *   are no stages with aggregations, the original query is returned.
 * 
 *   If the database does not support nested queries, this also returns the original.
 */
metabase.lib.underlying.top_level_query = (function metabase$lib$underlying$top_level_query(query){
var or__5002__auto__ = (cljs.core.truth_((function (){var fexpr__79063 = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.database(query));
return (fexpr__79063.cljs$core$IFn$_invoke$arity$1 ? fexpr__79063.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nested-queries","nested-queries",419090931)) : fexpr__79063.call(null,new cljs.core.Keyword(null,"nested-queries","nested-queries",419090931)));
})())?metabase.lib.underlying.pop_until_aggregation_or_breakout(query):null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return query;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query column :- :metabase.lib.schema.metadata/column]
 *   Return: :metabase.lib.schema.metadata/column
 *        
 * 
 *   Given a column, returns the "top-level" equivalent.
 * 
 *   Top-level means to find the corresponding column in the [[top-level-query]], which requires walking back through the
 *   stages finding the equivalent column at each one.
 * 
 *   Returns nil if the column can't be traced back to the top-level query.
 */
metabase.lib.underlying.top_level_column = (function metabase$lib$underlying$top_level_column(query,column){
var top_query = metabase.lib.underlying.top_level_query(query);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,top_query)){
return column;
} else {
var query__$1 = query;
var column__$1 = column;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query__$1,top_query)){
return clojure.set.rename_keys(column__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),new cljs.core.Keyword("metabase.lib.underlying","temporal-unit","metabase.lib.underlying/temporal-unit",1900868940),new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),new cljs.core.Keyword("metabase.lib.underlying","binning","metabase.lib.underlying/binning",-2061777572)], null));
} else {
var prev_cols = metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query__$1,(-2),metabase.lib.util.previous_stage(query__$1,(-1)));
var prev_col = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query__$1,(-2),metabase.lib.ref.ref(column__$1),prev_cols);
if(cljs.core.truth_(prev_col)){
var G__79163 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(query__$1,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.pop);
var G__79164 = prev_col;
query__$1 = G__79163;
column__$1 = G__79164;
continue;
} else {
return null;
}
}
break;
}
}
});

//# sourceMappingURL=metabase.lib.underlying.js.map
