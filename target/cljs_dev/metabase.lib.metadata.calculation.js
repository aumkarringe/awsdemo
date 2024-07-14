var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.lib.cache.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.join.util.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.options.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.metadata.calculation.js");

goog.provide('metabase.lib.metadata.calculation');
/**
 * Schema for valid values of `display-name-style` as passed to [[display-name-method]].
 * 
 *   * `:default`: normal style used for 99% of FE stuff. For example a column that comes from a joined table might return
 *  "Price".
 * 
 *   * `:long`: Slightly longer style that includes a little bit of extra context, used for stuff like query suggested
 *  name generation. For a joined column, this might look like "Venues → Price".
 */
metabase.lib.metadata.calculation.DisplayNameStyle = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"long","long",-171452093)], null);
/**
 * Display name style to use when not explicitly passed in to [[display-name]].
 */
metabase.lib.metadata.calculation._STAR_display_name_style_STAR_ = new cljs.core.Keyword(null,"default","default",-1987822328);
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.display_name_method !== 'undefined')){
} else {
/**
 * Calculate a nice human-friendly display name for something.
 */
metabase.lib.metadata.calculation.display_name_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76860 = cljs.core.get_global_hierarchy;
return (fexpr__76860.cljs$core$IFn$_invoke$arity$0 ? fexpr__76860.cljs$core$IFn$_invoke$arity$0() : fexpr__76860.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","display-name-method"),(function (_query,_stage_number,x,_display_name_style){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.column_name_method !== 'undefined')){
} else {
/**
 * Calculate a database-friendly name to use for something.
 */
metabase.lib.metadata.calculation.column_name_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76865 = cljs.core.get_global_hierarchy;
return (fexpr__76865.cljs$core$IFn$_invoke$arity$0 ? fexpr__76865.cljs$core$IFn$_invoke$arity$0() : fexpr__76865.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","column-name-method"),(function (_query,_stage_number,x){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
/**
 * Inputs: ([query]
 *         [query x]
 *         [query stage-number x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x style :- DisplayNameStyle])
 *   Return: :string
 *        
 * 
 *   Calculate a nice human-friendly display name for something. See [[DisplayNameStyle]] for a the difference between
 *   different `style`s.
 */
metabase.lib.metadata.calculation.display_name = (function() {
var metabase$lib$metadata$calculation$display_name = null;
var metabase$lib$metadata$calculation$display_name__1 = (function (query){
return (metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$2(query,query) : metabase.lib.metadata.calculation.display_name.call(null,query,query));
});
var metabase$lib$metadata$calculation$display_name__2 = (function (query,x){
return (metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,(-1),x) : metabase.lib.metadata.calculation.display_name.call(null,query,(-1),x));
});
var metabase$lib$metadata$calculation$display_name__3 = (function (query,stage_number,x){
return (metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,metabase.lib.metadata.calculation._STAR_display_name_style_STAR_) : metabase.lib.metadata.calculation.display_name.call(null,query,stage_number,x,metabase.lib.metadata.calculation._STAR_display_name_style_STAR_));
});
var metabase$lib$metadata$calculation$display_name__4 = (function (query,stage_number,x,style){
var or__5002__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590))(metabase.lib.options.options(x));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
try{return metabase.lib.metadata.calculation.display_name_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style);
}catch (e76878){if((e76878 instanceof Error)){
var e = e76878;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error calculating display name for {0}: {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"x","x",2099068185),x], null),e);
} else {
throw e76878;

}
}}
});
metabase$lib$metadata$calculation$display_name = function(query,stage_number,x,style){
switch(arguments.length){
case 1:
return metabase$lib$metadata$calculation$display_name__1.call(this,query);
case 2:
return metabase$lib$metadata$calculation$display_name__2.call(this,query,stage_number);
case 3:
return metabase$lib$metadata$calculation$display_name__3.call(this,query,stage_number,x);
case 4:
return metabase$lib$metadata$calculation$display_name__4.call(this,query,stage_number,x,style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$metadata$calculation$display_name.cljs$core$IFn$_invoke$arity$1 = metabase$lib$metadata$calculation$display_name__1;
metabase$lib$metadata$calculation$display_name.cljs$core$IFn$_invoke$arity$2 = metabase$lib$metadata$calculation$display_name__2;
metabase$lib$metadata$calculation$display_name.cljs$core$IFn$_invoke$arity$3 = metabase$lib$metadata$calculation$display_name__3;
metabase$lib$metadata$calculation$display_name.cljs$core$IFn$_invoke$arity$4 = metabase$lib$metadata$calculation$display_name__4;
return metabase$lib$metadata$calculation$display_name;
})()
;
/**
 * Inputs: ([query x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x])
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Calculate a database-friendly name to use for an expression.
 */
metabase.lib.metadata.calculation.column_name = (function() {
var metabase$lib$metadata$calculation$column_name = null;
var metabase$lib$metadata$calculation$column_name__2 = (function (query,x){
return (metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,(-1),x) : metabase.lib.metadata.calculation.column_name.call(null,query,(-1),x));
});
var metabase$lib$metadata$calculation$column_name__3 = (function (query,stage_number,x){
var or__5002__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(x));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
try{return metabase.lib.metadata.calculation.column_name_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
}catch (e76879){if((e76879 instanceof Error)){
var e = e76879;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error calculating column name for {0}: {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null),e);
} else {
throw e76879;

}
}}
});
metabase$lib$metadata$calculation$column_name = function(query,stage_number,x){
switch(arguments.length){
case 2:
return metabase$lib$metadata$calculation$column_name__2.call(this,query,stage_number);
case 3:
return metabase$lib$metadata$calculation$column_name__3.call(this,query,stage_number,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$metadata$calculation$column_name.cljs$core$IFn$_invoke$arity$2 = metabase$lib$metadata$calculation$column_name__2;
metabase$lib$metadata$calculation$column_name.cljs$core$IFn$_invoke$arity$3 = metabase$lib$metadata$calculation$column_name__3;
return metabase$lib$metadata$calculation$column_name;
})()
;
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_query,_stage_number,x,_stage){
var level__73199__auto___76987 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73200__auto___76988 = "metabase.lib.metadata.calculation";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73200__auto___76988,level__73199__auto___76987))){
var x__73201__auto___76989 = "Don't know how to calculate display name for %s. Add an impl for %s for %s";
if((x__73201__auto___76989 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___76988,level__73199__auto___76987,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("metabase.lib.metadata.calculation","display-name-method","metabase.lib.metadata.calculation/display-name-method",37675198,null),metabase.lib.dispatch.dispatch_value(x)], 0)),x__73201__auto___76989);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___76988,level__73199__auto___76987,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__73201__auto___76989,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),new cljs.core.Symbol("metabase.lib.metadata.calculation","display-name-method","metabase.lib.metadata.calculation/display-name-method",37675198,null),metabase.lib.dispatch.dispatch_value(x)], 0)),null);
}
} else {
}


if(((cljs.core.vector_QMARK_(x)) && ((cljs.core.first(x) instanceof cljs.core.Keyword)))){
return cljs.core.name(cljs.core.first(x));
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}
}));
metabase.lib.metadata.calculation.slugify = (function metabase$lib$metadata$calculation$slugify(s){
return metabase.util.slugify.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(s,/[\(\)]/,""),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unicode?","unicode?",-1511958714),true], null));
});
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (query,stage_number,x){
return metabase.lib.metadata.calculation.slugify(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,x));
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.describe_top_level_key_method !== 'undefined')){
} else {
/**
 * Implementation for [[describe-top-level-key]]. Describe part of a stage of a query, e.g. the `:filters` part or the
 *   `:aggregation` part. Return `nil` if there is nothing to describe.
 * 
 *   Implementations that call [[display-name]] should specify the `:long` display name style.
 */
metabase.lib.metadata.calculation.describe_top_level_key_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76892 = cljs.core.get_global_hierarchy;
return (fexpr__76892.cljs$core$IFn$_invoke$arity$0 ? fexpr__76892.cljs$core$IFn$_invoke$arity$0() : fexpr__76892.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","describe-top-level-key-method"),(function (_query,_stage_number,top_level_key){
return top_level_key;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
/**
 * In the interest of making this easy to use in JS-land we'll accept either strings or keywords.
 */
metabase.lib.metadata.calculation.TopLevelKey = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.Keyword(null,"breakout","breakout",-732419050),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"source-card","source-card",-1580820390),new cljs.core.Keyword(null,"joins","joins",1033962699)], null);
/**
 * Inputs: ([query top-level-key]
 *         [query :- :metabase.lib.schema/query stage-number :- :int top-level-key :- TopLevelKey])
 *   Return: [:maybe :metabase.lib.schema.common/non-blank-string]
 *        
 * 
 *   'top-level' here means the top level of an individual stage. Generate a human-friendly string describing a specific
 *   part of an MBQL stage, or `nil` if that part doesn't exist.
 */
metabase.lib.metadata.calculation.describe_top_level_key = (function() {
var metabase$lib$metadata$calculation$describe_top_level_key = null;
var metabase$lib$metadata$calculation$describe_top_level_key__2 = (function (query,top_level_key){
return (metabase.lib.metadata.calculation.describe_top_level_key.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.metadata.calculation.describe_top_level_key.cljs$core$IFn$_invoke$arity$3(query,(-1),top_level_key) : metabase.lib.metadata.calculation.describe_top_level_key.call(null,query,(-1),top_level_key));
});
var metabase$lib$metadata$calculation$describe_top_level_key__3 = (function (query,stage_number,top_level_key){
return metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(top_level_key));
});
metabase$lib$metadata$calculation$describe_top_level_key = function(query,stage_number,top_level_key){
switch(arguments.length){
case 2:
return metabase$lib$metadata$calculation$describe_top_level_key__2.call(this,query,stage_number);
case 3:
return metabase$lib$metadata$calculation$describe_top_level_key__3.call(this,query,stage_number,top_level_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$metadata$calculation$describe_top_level_key.cljs$core$IFn$_invoke$arity$2 = metabase$lib$metadata$calculation$describe_top_level_key__2;
metabase$lib$metadata$calculation$describe_top_level_key.cljs$core$IFn$_invoke$arity$3 = metabase$lib$metadata$calculation$describe_top_level_key__3;
return metabase$lib$metadata$calculation$describe_top_level_key;
})()
;
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.type_of_method !== 'undefined')){
} else {
/**
 * Calculate the effective type of something. This differs from [[metabase.lib.schema.expression/type-of]] in that it is
 *   called with a query/MetadataProvider and a stage number, allowing us to fully resolve information and return
 *   complete, unambigous type information. Default implementation calls [[metabase.lib.schema.expression/type-of]].
 */
metabase.lib.metadata.calculation.type_of_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76901 = cljs.core.get_global_hierarchy;
return (fexpr__76901.cljs$core$IFn$_invoke$arity$0 ? fexpr__76901.cljs$core$IFn$_invoke$arity$0() : fexpr__76901.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","type-of-method"),(function (_query,_stage_number,expr){
return metabase.lib.dispatch.dispatch_value(expr);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
/**
 * Inputs: ([query x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x])
 *   Return: :metabase.lib.schema.common/base-type
 *        
 * 
 *   Get the effective type of an MBQL expression.
 */
metabase.lib.metadata.calculation.type_of = (function() {
var metabase$lib$metadata$calculation$type_of = null;
var metabase$lib$metadata$calculation$type_of__2 = (function (query,x){
return (metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,(-1),x) : metabase.lib.metadata.calculation.type_of.call(null,query,(-1),x));
});
var metabase$lib$metadata$calculation$type_of__3 = (function (query,stage_number,x){
var map__76902 = metabase.lib.options.options(x);
var map__76902__$1 = cljs.core.__destructure_map(map__76902);
var options = map__76902__$1;
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76902__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
var or__5002__auto__ = new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (cljs.core.truth_((function (){var and__5000__auto__ = temporal_unit;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.contains_QMARK_(metabase.lib.schema.temporal_bucketing.datetime_extraction_units,temporal_unit);
} else {
return and__5000__auto__;
}
})())?new cljs.core.Keyword("type","Integer","type/Integer",-638928316):null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var calculated_type = metabase.lib.metadata.calculation.type_of_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(calculated_type,new cljs.core.Keyword("type","*","type/*",-1283496752))){
return calculated_type;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
}
}
}
});
metabase$lib$metadata$calculation$type_of = function(query,stage_number,x){
switch(arguments.length){
case 2:
return metabase$lib$metadata$calculation$type_of__2.call(this,query,stage_number);
case 3:
return metabase$lib$metadata$calculation$type_of__3.call(this,query,stage_number,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$metadata$calculation$type_of.cljs$core$IFn$_invoke$arity$2 = metabase$lib$metadata$calculation$type_of__2;
metabase$lib$metadata$calculation$type_of.cljs$core$IFn$_invoke$arity$3 = metabase$lib$metadata$calculation$type_of__3;
return metabase$lib$metadata$calculation$type_of;
})()
;
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_query,_stage_number,expr){
return metabase.lib.schema.expression.type_of(expr);
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib.type-of","type-is-type-of-first-arg","lib.type-of/type-is-type-of-first-arg",-317600808),(function (query,stage_number,p__76915){
var vec__76916 = p__76915;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76916,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76916,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76916,(2),null);
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,expr);
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib.type-of","type-is-temporal-type-of-first-arg","lib.type-of/type-is-temporal-type-of-first-arg",76272405),(function (query,stage_number,p__76919){
var vec__76920 = p__76919;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76920,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76920,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76920,(2),null);
var clause = vec__76920;
if(typeof expr === 'string'){
return metabase.lib.schema.expression.type_of(clause);
} else {
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,expr);
}
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.metadata_method !== 'undefined')){
} else {
/**
 * Impl for [[metadata]]. Implementations that call [[display-name]] should use the `:default` display name style.
 */
metabase.lib.metadata.calculation.metadata_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76923 = cljs.core.get_global_hierarchy;
return (fexpr__76923.cljs$core$IFn$_invoke$arity$0 ? fexpr__76923.cljs$core$IFn$_invoke$arity$0() : fexpr__76923.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","metadata-method"),(function (_query,_stage_number,x){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (query,stage_number,x){
try{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword(null,"base-type","base-type",1167971299),metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,x),new cljs.core.Keyword(null,"name","name",1843675177),metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,x),new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,x)], null);
}catch (e76924){if((e76924 instanceof Error)){
var e = e76924;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error calculating metadata for {0}: {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.dispatch.dispatch_value(x)], 0)),cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number,new cljs.core.Keyword(null,"x","x",2099068185),x], null),e);
} else {
throw e76924;

}
}}));
metabase.lib.metadata.calculation.MetadataMap = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":lib/type should be a :metadata/ keyword"], null),(function (p1__76925_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(p1__76925_SHARP_),"metadata");
})], null)], null)], null)], null);
/**
 * Inputs: ([query]
 *         [query x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x])
 *   Return: MetadataMap
 *        
 * 
 *   Calculate an appropriate `:metadata/*` object for something. What this looks like depends on what we're calculating
 *   metadata for. If it's a reference or expression of some sort, this should return a single `:metadata/column`
 *   map (i.e., something satisfying the `::lib.schema.metadata/column` schema.
 */
metabase.lib.metadata.calculation.metadata = (function() {
var metabase$lib$metadata$calculation$metadata = null;
var metabase$lib$metadata$calculation$metadata__1 = (function (query){
return (metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,(-1),query) : metabase.lib.metadata.calculation.metadata.call(null,query,(-1),query));
});
var metabase$lib$metadata$calculation$metadata__2 = (function (query,x){
return (metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,(-1),x) : metabase.lib.metadata.calculation.metadata.call(null,query,(-1),x));
});
var metabase$lib$metadata$calculation$metadata__3 = (function (query,stage_number,x){
return metabase.lib.metadata.calculation.metadata_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
});
metabase$lib$metadata$calculation$metadata = function(query,stage_number,x){
switch(arguments.length){
case 1:
return metabase$lib$metadata$calculation$metadata__1.call(this,query);
case 2:
return metabase$lib$metadata$calculation$metadata__2.call(this,query,stage_number);
case 3:
return metabase$lib$metadata$calculation$metadata__3.call(this,query,stage_number,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$metadata$calculation$metadata.cljs$core$IFn$_invoke$arity$1 = metabase$lib$metadata$calculation$metadata__1;
metabase$lib$metadata$calculation$metadata.cljs$core$IFn$_invoke$arity$2 = metabase$lib$metadata$calculation$metadata__2;
metabase$lib$metadata$calculation$metadata.cljs$core$IFn$_invoke$arity$3 = metabase$lib$metadata$calculation$metadata__3;
return metabase$lib$metadata$calculation$metadata;
})()
;
/**
 * Inputs: [query]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Convenience for calling [[display-name]] on a query to describe the results of its final stage.
 */
metabase.lib.metadata.calculation.describe_query = (function metabase$lib$metadata$calculation$describe_query(query){
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$2(query,query);
});
/**
 * Inputs: [query]
 *   Return: [:maybe :metabase.lib.schema.common/non-blank-string]
 *        
 * 
 *   Name you might want to use for a query when saving an previously-unsaved query. This is the same
 *   as [[describe-query]] except for native queries, where we don't describe anything.
 */
metabase.lib.metadata.calculation.suggested_name = (function metabase$lib$metadata$calculation$suggested_name(query){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,(-1))),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194))){
return null;
} else {
try{return metabase.lib.metadata.calculation.describe_query(query);
}catch (e76926){if((e76926 instanceof Error)){
var e = e76926;
var level__73199__auto___76990 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"error","error",-978969032));
var logger__73200__auto___76991 = "metabase.lib.metadata.calculation";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73200__auto___76991,level__73199__auto___76990))){
var x__73201__auto___76992 = e;
if((x__73201__auto___76992 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___76991,level__73199__auto___76990,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic("Error calculating display name for query: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0)),x__73201__auto___76992);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___76991,level__73199__auto___76990,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__73201__auto___76992,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error calculating display name for query: %s",cljs.core.ex_message(e)], 0)),null);
}
} else {
}

return null;
} else {
throw e76926;

}
}}
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.display_info_method !== 'undefined')){
} else {
/**
 * Implementation for [[display-info]]. Implementations that call [[display-name]] should use the `:default` display
 *   name style.
 * 
 *   Do not call this recursively from its own `defmethod`s, aside from calling the `:default`. Prefer calling
 *   [[display-info]] directly, so that its caching can encourage reuse. (Eg. column-groups recursively call `display-info`
 *   on their columns.)
 */
metabase.lib.metadata.calculation.display_info_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76933 = cljs.core.get_global_hierarchy;
return (fexpr__76933.cljs$core$IFn$_invoke$arity$0 ? fexpr__76933.cljs$core$IFn$_invoke$arity$0() : fexpr__76933.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","display-info-method"),(function (_query,_stage_number,x){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.metadata.calculation","display-info","metabase.lib.metadata.calculation/display-info",-2072755534),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"long-display-name","long-display-name",1550784464),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"named?","named?",-213401078),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.metadata.calculation","display-info","metabase.lib.metadata.calculation/display-info",-2072755534)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-from-previous-stage","is-from-previous-stage",956780376),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-from-join","is-from-join",-1107917905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-calculated","is-calculated",-86687269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-implicitly-joinable","is-implicitly-joinable",2054926844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-source-table","is-source-table",1559075056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-breakout-column","is-breakout-column",46784229),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-order-by-column","is-order-by-column",1320802549),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-name","column-name",551523580),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short-name","short-name",-1767085022),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires-column","requires-column",934105295),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword(null,"desc","desc",2093485764)], null)], null)], null));
/**
 * Inputs: ([query x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x])
 *   Return: :metabase.lib.metadata.calculation/display-info
 *        
 * 
 *   Given some sort of Cljs object, return a map with the info you'd need to implement UI for it. This is mostly meant to
 *   power the Frontend JavaScript UI; in JS, results will be converted to plain JavaScript objects, so avoid returning
 *   things that should remain opaque.
 */
metabase.lib.metadata.calculation.display_info = (function() {
var metabase$lib$metadata$calculation$display_info = null;
var metabase$lib$metadata$calculation$display_info__2 = (function (query,x){
return (metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,(-1),x) : metabase.lib.metadata.calculation.display_info.call(null,query,(-1),x));
});
var metabase$lib$metadata$calculation$display_info__3 = (function (query,stage_number,x){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("display-info",["stage-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(stage_number)].join('')),x,(function (x__$1){
try{return metabase.lib.metadata.calculation.display_info_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,x__$1);
}catch (e76943){if((e76943 instanceof Error)){
var e = e76943;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error calculating display info for {0}: {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.dispatch.dispatch_value(x__$1),cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number,new cljs.core.Keyword(null,"x","x",2099068185),x__$1], null),e);
} else {
throw e76943;

}
}}));
});
metabase$lib$metadata$calculation$display_info = function(query,stage_number,x){
switch(arguments.length){
case 2:
return metabase$lib$metadata$calculation$display_info__2.call(this,query,stage_number);
case 3:
return metabase$lib$metadata$calculation$display_info__3.call(this,query,stage_number,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$metadata$calculation$display_info.cljs$core$IFn$_invoke$arity$2 = metabase$lib$metadata$calculation$display_info__2;
metabase$lib$metadata$calculation$display_info.cljs$core$IFn$_invoke$arity$3 = metabase$lib$metadata$calculation$display_info__3;
return metabase$lib$metadata$calculation$display_info;
})()
;
/**
 * Default implementation of [[display-info-method]], available in case you want to use this in a different
 *   implementation and add additional information to it.
 */
metabase.lib.metadata.calculation.default_display_info = (function metabase$lib$metadata$calculation$default_display_info(query,stage_number,x){
var x_metadata = metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,x);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(x_metadata,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107)], null)),(function (){var temp__5804__auto__ = metabase.lib.util.custom_name(x);
if(cljs.core.truth_(temp__5804__auto__)){
var custom = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-name","display-name",694513143),custom,new cljs.core.Keyword(null,"named?","named?",-213401078),true], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,new cljs.core.Keyword(null,"long","long",-171452093));
if(cljs.core.truth_(temp__5804__auto__)){
var long_display_name = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"long-display-name","long-display-name",1550784464),long_display_name], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(x_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var effective_type = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),effective_type], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(x_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var table_id = temp__5804__auto__;
var temp__5804__auto____$1 = ((cljs.core.integer_QMARK_(table_id))?metabase.lib.metadata.table(query,table_id):((typeof table_id === 'string')?metabase.lib.metadata.card(query,metabase.lib.util.legacy_string_table_id__GT_card_id(table_id)):null));
if(cljs.core.truth_(temp__5804__auto____$1)){
var inner_metadata = temp__5804__auto____$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table","table",-564943036),metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,inner_metadata)], null);
} else {
return null;
}
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(x_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var source = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"is-from-previous-stage","is-from-previous-stage",956780376),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878)),new cljs.core.Keyword(null,"is-from-join","is-from-join",-1107917905),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,new cljs.core.Keyword("source","joins","source/joins",1225821486)),new cljs.core.Keyword(null,"is-calculated","is-calculated",-86687269),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,new cljs.core.Keyword("source","expressions","source/expressions",-458367840)),new cljs.core.Keyword(null,"is-implicitly-joinable","is-implicitly-joinable",2054926844),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,new cljs.core.Keyword("source","implicitly-joinable","source/implicitly-joinable",-729101197)),new cljs.core.Keyword(null,"is-aggregation","is-aggregation",872502629),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137)),new cljs.core.Keyword(null,"is-breakout","is-breakout",-1878069983),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source,new cljs.core.Keyword("source","breakouts","source/breakouts",-1706018158))], null);
} else {
return null;
}
})(),(function (){var temp__5808__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(x_metadata);
if((temp__5808__auto__ == null)){
return null;
} else {
var selected = temp__5808__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),selected], null);
}
})(),(function (){var temp__5804__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358))(x_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var temporal_unit = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-temporal-extraction","is-temporal-extraction",-1029608872),((cljs.core.contains_QMARK_(metabase.lib.schema.temporal_bucketing.datetime_extraction_units,temporal_unit)) && ((!(cljs.core.contains_QMARK_(metabase.lib.schema.temporal_bucketing.datetime_truncation_units,temporal_unit)))))], null);
} else {
return null;
}
})(),cljs.core.select_keys(x_metadata,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakout-position","breakout-position",-760153191),new cljs.core.Keyword(null,"order-by-position","order-by-position",-1307229997),new cljs.core.Keyword(null,"filter-positions","filter-positions",378749375)], null))], 0));
});
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (query,stage_number,x){
return metabase.lib.metadata.calculation.default_display_info(query,stage_number,x);
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","table","metadata/table",-882499405),(function (query,stage_number,table){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.default_display_info(query,stage_number,table),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-source-table","is-source-table",1559075056),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.source_table_id(query),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(table)),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(table)], null)], 0));
}));
/**
 * Schema for the column metadata that should be returned by [[metadata]].
 */
metabase.lib.metadata.calculation.ColumnMetadataWithSource = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.metadata","column","metabase.lib.schema.metadata/column",-570344650)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("metabase.lib.schema.metadata","column-source","metabase.lib.schema.metadata/column-source",1071627828)], null)], null)], null);
/**
 * Schema for column metadata that should be returned by [[visible-columns]]. This is mostly used
 *   to power metadata calculation for stages (see [[metabase.lib.stage]].
 */
metabase.lib.metadata.calculation.ColumnsWithUniqueAliases = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),metabase.lib.metadata.calculation.ColumnMetadataWithSource,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(60)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"Column :lib/desired-column-alias values must be distinct, regardless of case, for each stage!",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__76966,_){
var map__76967 = p__76966;
var map__76967__$1 = cljs.core.__destructure_map(map__76967);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76967__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["Column :lib/desired-column-alias values must be distinct, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),value)], 0))].join('');
})], null),(function (columns){
var or__5002__auto__ = cljs.core.empty_QMARK_(columns);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.util.lower_case_en,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402)),columns));
}
})], null)], null);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.metadata.calculation","unique-name-fn","metabase.lib.metadata.calculation/unique-name-fn",191060149),metabase.util.malli.registry._with_doc(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),"Stateful function with the signature\n\n    (f str) => unique-str\n\n  i.e. repeated calls with the same string should return different unique strings."));
/**
 * Schema for options passed to [[returned-columns]] and [[returned-columns-method]].
 */
metabase.lib.metadata.calculation.ReturnedColumnsOptions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.metadata.calculation","unique-name-fn","metabase.lib.metadata.calculation/unique-name-fn",191060149)], null)], null);
/**
 * Inputs: [metadata-providerable]
 *   Return: ReturnedColumnsOptions
 */
metabase.lib.metadata.calculation.default_returned_columns_options = (function metabase$lib$metadata$calculation$default_returned_columns_options(metadata_providerable){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870),metabase.lib.util.unique_name_generator.cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable))], null);
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.returned_columns_method !== 'undefined')){
} else {
/**
 * Impl for [[returned-columns]].
 */
metabase.lib.metadata.calculation.returned_columns_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76968 = cljs.core.get_global_hierarchy;
return (fexpr__76968.cljs$core$IFn$_invoke$arity$0 ? fexpr__76968.cljs$core$IFn$_invoke$arity$0() : fexpr__76968.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","returned-columns-method"),(function (_query,_stage_number,x,_options){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","nil","dispatch-type/nil",-2067723388),(function (_query,_stage_number,_x,_options){
return cljs.core.PersistentVector.EMPTY;
}));
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","integer","dispatch-type/integer",1558418815),(function (query,_stage_number,stage_number,options){
return metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(query,stage_number),options);
}));
/**
 * Inputs: ([query]
 *         [query x]
 *         [query stage-number x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x options :- [:maybe ReturnedColumnsOptions]])
 *   Return: [:maybe ColumnsWithUniqueAliases]
 *        
 * 
 *   Return a sequence of metadata maps for all the columns expected to be 'returned' at a query, stage of the query, or
 *   join, and include the `:lib/source` of where they came from. This should only include columns that will be present
 *   in the results; DOES NOT include 'expected' columns that are not 'exported' to subsequent stages.
 * 
 *   See [[ReturnedColumnsOptions]] for allowed options and [[default-returned-columns-options]] for default values.
 */
metabase.lib.metadata.calculation.returned_columns = (function() {
var metabase$lib$metadata$calculation$returned_columns = null;
var metabase$lib$metadata$calculation$returned_columns__1 = (function (query){
var G__76969 = query;
var G__76970 = metabase.lib.util.query_stage(query,(-1));
return (metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$2(G__76969,G__76970) : metabase.lib.metadata.calculation.returned_columns.call(null,G__76969,G__76970));
});
var metabase$lib$metadata$calculation$returned_columns__2 = (function (query,x){
return (metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query,(-1),x) : metabase.lib.metadata.calculation.returned_columns.call(null,query,(-1),x));
});
var metabase$lib$metadata$calculation$returned_columns__3 = (function (query,stage_number,x){
return (metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,null) : metabase.lib.metadata.calculation.returned_columns.call(null,query,stage_number,x,null));
});
var metabase$lib$metadata$calculation$returned_columns__4 = (function (query,stage_number,x,options){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.default_returned_columns_options(query),options], 0));
return metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,options__$1);
});
metabase$lib$metadata$calculation$returned_columns = function(query,stage_number,x,options){
switch(arguments.length){
case 1:
return metabase$lib$metadata$calculation$returned_columns__1.call(this,query);
case 2:
return metabase$lib$metadata$calculation$returned_columns__2.call(this,query,stage_number);
case 3:
return metabase$lib$metadata$calculation$returned_columns__3.call(this,query,stage_number,x);
case 4:
return metabase$lib$metadata$calculation$returned_columns__4.call(this,query,stage_number,x,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$metadata$calculation$returned_columns.cljs$core$IFn$_invoke$arity$1 = metabase$lib$metadata$calculation$returned_columns__1;
metabase$lib$metadata$calculation$returned_columns.cljs$core$IFn$_invoke$arity$2 = metabase$lib$metadata$calculation$returned_columns__2;
metabase$lib$metadata$calculation$returned_columns.cljs$core$IFn$_invoke$arity$3 = metabase$lib$metadata$calculation$returned_columns__3;
metabase$lib$metadata$calculation$returned_columns.cljs$core$IFn$_invoke$arity$4 = metabase$lib$metadata$calculation$returned_columns__4;
return metabase$lib$metadata$calculation$returned_columns;
})()
;
/**
 * Schema for options passed to [[visible-columns]] and [[visible-columns-method]].
 */
metabase.lib.metadata.calculation.VisibleColumnsOptions = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),metabase.lib.metadata.calculation.ReturnedColumnsOptions,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"include-joined?","include-joined?",-410632824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"include-expressions?","include-expressions?",-1817639288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"include-implicitly-joinable-for-source-card?","include-implicitly-joinable-for-source-card?",1240062794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null);
/**
 * Inputs: [metadata-providerable]
 *   Return: VisibleColumnsOptions
 */
metabase.lib.metadata.calculation.default_visible_columns_options = (function metabase$lib$metadata$calculation$default_visible_columns_options(metadata_providerable){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.default_returned_columns_options(metadata_providerable),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"include-joined?","include-joined?",-410632824),true,new cljs.core.Keyword(null,"include-expressions?","include-expressions?",-1817639288),true,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),true,new cljs.core.Keyword(null,"include-implicitly-joinable-for-source-card?","include-implicitly-joinable-for-source-card?",1240062794),true], null)], 0));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.metadata !== 'undefined') && (typeof metabase.lib.metadata.calculation !== 'undefined') && (typeof metabase.lib.metadata.calculation.visible_columns_method !== 'undefined')){
} else {
/**
 * Impl for [[visible-columns]].
 * 
 *   This should mostly be similar to the implementation for [[metadata-method]], but needs to include
 *   `:lib/source-column-alias` and `:lib/desired-column-alias`. `:lib/source-column-alias` should probably be the same
 *   as `:name`; use the supplied `:unique-name-fn` from `options` with the signature `(f str) => str` to ensure
 *   `:lib/desired-column-alias` is unique.
 * 
 *   Also, columns that aren't 'projected' should be returned as well -- in other words, ignore `:fields`,
 *   `:aggregations`, and `:breakouts`.
 */
metabase.lib.metadata.calculation.visible_columns_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76971 = cljs.core.get_global_hierarchy;
return (fexpr__76971.cljs$core$IFn$_invoke$arity$0 ? fexpr__76971.cljs$core$IFn$_invoke$arity$0() : fexpr__76971.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.metadata.calculation","visible-columns-method"),(function (_query,_stage_number,x,_options){
return metabase.lib.dispatch.dispatch_value(x);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","nil","dispatch-type/nil",-2067723388),(function (_query,_stage_number,_x,_options){
return cljs.core.PersistentVector.EMPTY;
}));
metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (query,stage_number,x,options){
return metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,options);
}));
metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","integer","dispatch-type/integer",1558418815),(function (query,_stage_number,stage_number,options){
return metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(query,stage_number),options);
}));
/**
 * Inputs: ([query]
 *         [query x]
 *         [query stage-number x]
 *         [query :- :metabase.lib.schema/query stage-number :- :int x options :- [:maybe VisibleColumnsOptions]])
 *   Return: ColumnsWithUniqueAliases
 *        
 * 
 *   Return a sequence of columns that should be visible *within* a given stage of something, e.g. a query stage or a
 *   join query. This includes not just the columns that get returned (ones present in [[metadata]], but other columns
 *   that are 'reachable' in this stage of the query. E.g. in a query like
 * 
 *  SELECT id, name
 *  FROM table
 *  ORDER BY position
 * 
 *   only `id` and `name` are 'returned' columns, but other columns such as `position` are visible in this stage as well
 *   and would thus be returned by this function.
 * 
 *   Columns from joins, expressions, and implicitly joinable columns are included automatically by default;
 *   see [[VisibleColumnsOptions]] for the options for disabling these columns.
 */
metabase.lib.metadata.calculation.visible_columns = (function() {
var metabase$lib$metadata$calculation$visible_columns = null;
var metabase$lib$metadata$calculation$visible_columns__1 = (function (query){
var G__76972 = query;
var G__76973 = metabase.lib.util.query_stage(query,(-1));
return (metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$2(G__76972,G__76973) : metabase.lib.metadata.calculation.visible_columns.call(null,G__76972,G__76973));
});
var metabase$lib$metadata$calculation$visible_columns__2 = (function (query,x){
return (metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,(-1),x) : metabase.lib.metadata.calculation.visible_columns.call(null,query,(-1),x));
});
var metabase$lib$metadata$calculation$visible_columns__3 = (function (query,stage_number,x){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.map_QMARK_(x);
if(and__5000__auto__){
var G__76975 = new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(x);
var fexpr__76974 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),null], null), null);
return (fexpr__76974.cljs$core$IFn$_invoke$arity$1 ? fexpr__76974.cljs$core$IFn$_invoke$arity$1(G__76975) : fexpr__76974.call(null,G__76975));
} else {
return and__5000__auto__;
}
})())){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(stage_number),"__visible-columns-no-opts"].join('')),query,(function (_){
return (metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,null) : metabase.lib.metadata.calculation.visible_columns.call(null,query,stage_number,x,null));
}));
} else {
return (metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,null) : metabase.lib.metadata.calculation.visible_columns.call(null,query,stage_number,x,null));
}
});
var metabase$lib$metadata$calculation$visible_columns__4 = (function (query,stage_number,x,options){
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.default_visible_columns_options(query),options], 0));
return metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,options__$1);
});
metabase$lib$metadata$calculation$visible_columns = function(query,stage_number,x,options){
switch(arguments.length){
case 1:
return metabase$lib$metadata$calculation$visible_columns__1.call(this,query);
case 2:
return metabase$lib$metadata$calculation$visible_columns__2.call(this,query,stage_number);
case 3:
return metabase$lib$metadata$calculation$visible_columns__3.call(this,query,stage_number,x);
case 4:
return metabase$lib$metadata$calculation$visible_columns__4.call(this,query,stage_number,x,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$metadata$calculation$visible_columns.cljs$core$IFn$_invoke$arity$1 = metabase$lib$metadata$calculation$visible_columns__1;
metabase$lib$metadata$calculation$visible_columns.cljs$core$IFn$_invoke$arity$2 = metabase$lib$metadata$calculation$visible_columns__2;
metabase$lib$metadata$calculation$visible_columns.cljs$core$IFn$_invoke$arity$3 = metabase$lib$metadata$calculation$visible_columns__3;
metabase$lib$metadata$calculation$visible_columns.cljs$core$IFn$_invoke$arity$4 = metabase$lib$metadata$calculation$visible_columns__4;
return metabase$lib$metadata$calculation$visible_columns;
})()
;
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Returns a list of primary keys for the source table of this query.
 */
metabase.lib.metadata.calculation.primary_keys = (function metabase$lib$metadata$calculation$primary_keys(query){
var temp__5802__auto__ = metabase.lib.util.source_table_id(query);
if(cljs.core.truth_(temp__5802__auto__)){
var table_id = temp__5802__auto__;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.primary_key_QMARK_,metabase.lib.metadata.fields(query,table_id));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * Columns that are implicitly joinable from some other columns in `column-metadatas`. To be joinable, the column has to
 *   have (1) appropriate FK metadata, i.e. have an `:fk-target-field-id` pointing to another Field, and (2) have a numeric
 *   `:id`, i.e. be a real database column that can be used in a JOIN condition. (I think we only include this information
 *   for Databases that support FKs and joins, so I don't think we need to do an additional DB feature check here.)
 * 
 *   Does not include columns from any Tables that are already explicitly joined.
 * 
 *   Does not include columns that would be implicitly joinable via multiple hops.
 */
metabase.lib.metadata.calculation.implicitly_joinable_columns = (function metabase$lib$metadata$calculation$implicitly_joinable_columns(query,stage_number,column_metadatas,unique_name_fn){
var existing_table_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"table-id","table-id",-766649466)),column_metadatas);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__76977){
var map__76978 = p__76977;
var map__76978__$1 = cljs.core.__destructure_map(map__76978);
var source = map__76978__$1;
var source_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76978__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fk_target_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76978__$1,new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.metadata.field(query,fk_target_field_id),new cljs.core.Keyword("metabase.lib.metadata.calculation","source-field-id","metabase.lib.metadata.calculation/source-field-id",352667413),source_field_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("metabase.lib.metadata.calculation","source-join-alias","metabase.lib.metadata.calculation/source-join-alias",-1432523829),new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023).cljs$core$IFn$_invoke$arity$1(source)], 0));
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__76976_SHARP_){
return cljs.core.contains_QMARK_(existing_table_ids,new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(p1__76976_SHARP_));
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__76979){
var map__76980 = p__76979;
var map__76980__$1 = cljs.core.__destructure_map(map__76980);
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76980__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
var source_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76980__$1,new cljs.core.Keyword("metabase.lib.metadata.calculation","source-field-id","metabase.lib.metadata.calculation/source-field-id",352667413));
var source_join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76980__$1,new cljs.core.Keyword("metabase.lib.metadata.calculation","source-join-alias","metabase.lib.metadata.calculation/source-join-alias",-1432523829));
var table_metadata = metabase.lib.metadata.table(query,table_id);
var options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870),unique_name_fn,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null);
var iter__5480__auto__ = (function metabase$lib$metadata$calculation$implicitly_joinable_columns_$_iter__76981(s__76982){
return (new cljs.core.LazySeq(null,(function (){
var s__76982__$1 = s__76982;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76982__$1);
if(temp__5804__auto__){
var s__76982__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76982__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76982__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76984 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76983 = (0);
while(true){
if((i__76983 < size__5479__auto__)){
var field = cljs.core._nth(c__5478__auto__,i__76983);
var field__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(field,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),source_field_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fk-join-alias","fk-join-alias",997510084),source_join_alias,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","implicitly-joinable","source/implicitly-joinable",-729101197),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field)], 0));
cljs.core.chunk_append(b__76984,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(field__$1,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__76985 = metabase.lib.join.util.desired_alias(query,field__$1);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__76985) : unique_name_fn.call(null,G__76985));
})()));

var G__76993 = (i__76983 + (1));
i__76983 = G__76993;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76984),metabase$lib$metadata$calculation$implicitly_joinable_columns_$_iter__76981(cljs.core.chunk_rest(s__76982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76984),null);
}
} else {
var field = cljs.core.first(s__76982__$2);
var field__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(field,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),source_field_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fk-join-alias","fk-join-alias",997510084),source_join_alias,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","implicitly-joinable","source/implicitly-joinable",-729101197),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field)], 0));
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(field__$1,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__76986 = metabase.lib.join.util.desired_alias(query,field__$1);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__76986) : unique_name_fn.call(null,G__76986));
})()),metabase$lib$metadata$calculation$implicitly_joinable_columns_$_iter__76981(cljs.core.rest(s__76982__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IFn$_invoke$arity$4(query,stage_number,table_metadata,options));
}))], 0)),column_metadatas);
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int]
 *   Return: ColumnsWithUniqueAliases
 *        
 * 
 *   Given a query and stage, returns the columns which would be selected by default.
 * 
 *   This is exactly [[lib.metadata.calculation/returned-columns]] filtered by the `:lib/source`.
 *   (Fields from explicit joins are listed on the join itself and should not be listed in `:fields`.)
 * 
 *   If there is already a `:fields` list on that stage, it is ignored for this calculation.
 */
metabase.lib.metadata.calculation.default_columns_for_stage = (function metabase$lib$metadata$calculation$default_columns_for_stage(query,stage_number){
var no_fields = metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230)], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("source","joins","source/joins",1225821486),null,new cljs.core.Keyword("source","implicitly-joinable","source/implicitly-joinable",-729101197),null], null), null),new cljs.core.Keyword("lib","source","lib/source",-434086550))),metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(no_fields,stage_number,metabase.lib.util.query_stage(no_fields,stage_number)));
});
Object.defineProperty(module.exports, "display_name", { enumerable: true, get: function() { return metabase.lib.metadata.calculation.display_name; } });
//# sourceMappingURL=metabase.lib.metadata.calculation.js.map
