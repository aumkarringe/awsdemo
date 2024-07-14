var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.binning.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.card.js");
require("./metabase.lib.column_group.js");
require("./metabase.lib.common.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.database.js");
require("./metabase.lib.drill_thru.js");
require("./metabase.lib.drill_thru.column_extract.js");
require("./metabase.lib.drill_thru.pivot.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.expression.js");
require("./metabase.lib.extraction.js");
require("./metabase.lib.fe_util.js");
require("./metabase.lib.field.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.filter.update.js");
require("./metabase.lib.join.js");
require("./metabase.lib.limit.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.metadata.composed_provider.js");
require("./metabase.lib.metric.js");
require("./metabase.lib.native.js");
require("./metabase.lib.normalize.js");
require("./metabase.lib.order_by.js");
require("./metabase.lib.query.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.remove_replace.js");
require("./metabase.lib.segment.js");
require("./metabase.lib.stage.js");
require("./metabase.lib.swap.js");
require("./metabase.lib.table.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.namespaces.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.core.js");

goog.provide('metabase.lib.core');
/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregate = (function() { 
var metabase$lib$core$aggregate__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregate,args__70829__auto__);
};
var metabase$lib$core$aggregate = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79946__i = 0, G__79946__a = new Array(arguments.length -  0);
while (G__79946__i < G__79946__a.length) {G__79946__a[G__79946__i] = arguments[G__79946__i + 0]; ++G__79946__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79946__a,0,null);
} 
return metabase$lib$core$aggregate__delegate.call(this,args__70829__auto__);};
metabase$lib$core$aggregate.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregate.cljs$lang$applyTo = (function (arglist__79947){
var args__70829__auto__ = cljs.core.seq(arglist__79947);
return metabase$lib$core$aggregate__delegate(args__70829__auto__);
});
metabase$lib$core$aggregate.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregate__delegate;
return metabase$lib$core$aggregate;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregation_clause = (function() { 
var metabase$lib$core$aggregation_clause__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregation_clause,args__70829__auto__);
};
var metabase$lib$core$aggregation_clause = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79948__i = 0, G__79948__a = new Array(arguments.length -  0);
while (G__79948__i < G__79948__a.length) {G__79948__a[G__79948__i] = arguments[G__79948__i + 0]; ++G__79948__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79948__a,0,null);
} 
return metabase$lib$core$aggregation_clause__delegate.call(this,args__70829__auto__);};
metabase$lib$core$aggregation_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregation_clause.cljs$lang$applyTo = (function (arglist__79949){
var args__70829__auto__ = cljs.core.seq(arglist__79949);
return metabase$lib$core$aggregation_clause__delegate(args__70829__auto__);
});
metabase$lib$core$aggregation_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregation_clause__delegate;
return metabase$lib$core$aggregation_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregation_column = (function() { 
var metabase$lib$core$aggregation_column__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregation_column,args__70829__auto__);
};
var metabase$lib$core$aggregation_column = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79950__i = 0, G__79950__a = new Array(arguments.length -  0);
while (G__79950__i < G__79950__a.length) {G__79950__a[G__79950__i] = arguments[G__79950__i + 0]; ++G__79950__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79950__a,0,null);
} 
return metabase$lib$core$aggregation_column__delegate.call(this,args__70829__auto__);};
metabase$lib$core$aggregation_column.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregation_column.cljs$lang$applyTo = (function (arglist__79952){
var args__70829__auto__ = cljs.core.seq(arglist__79952);
return metabase$lib$core$aggregation_column__delegate(args__70829__auto__);
});
metabase$lib$core$aggregation_column.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregation_column__delegate;
return metabase$lib$core$aggregation_column;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregation_ref = (function() { 
var metabase$lib$core$aggregation_ref__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregation_ref,args__70829__auto__);
};
var metabase$lib$core$aggregation_ref = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79953__i = 0, G__79953__a = new Array(arguments.length -  0);
while (G__79953__i < G__79953__a.length) {G__79953__a[G__79953__i] = arguments[G__79953__i + 0]; ++G__79953__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79953__a,0,null);
} 
return metabase$lib$core$aggregation_ref__delegate.call(this,args__70829__auto__);};
metabase$lib$core$aggregation_ref.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregation_ref.cljs$lang$applyTo = (function (arglist__79954){
var args__70829__auto__ = cljs.core.seq(arglist__79954);
return metabase$lib$core$aggregation_ref__delegate(args__70829__auto__);
});
metabase$lib$core$aggregation_ref.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregation_ref__delegate;
return metabase$lib$core$aggregation_ref;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregation_operator_columns = (function() { 
var metabase$lib$core$aggregation_operator_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregation_operator_columns,args__70829__auto__);
};
var metabase$lib$core$aggregation_operator_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79955__i = 0, G__79955__a = new Array(arguments.length -  0);
while (G__79955__i < G__79955__a.length) {G__79955__a[G__79955__i] = arguments[G__79955__i + 0]; ++G__79955__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79955__a,0,null);
} 
return metabase$lib$core$aggregation_operator_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$aggregation_operator_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregation_operator_columns.cljs$lang$applyTo = (function (arglist__79956){
var args__70829__auto__ = cljs.core.seq(arglist__79956);
return metabase$lib$core$aggregation_operator_columns__delegate(args__70829__auto__);
});
metabase$lib$core$aggregation_operator_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregation_operator_columns__delegate;
return metabase$lib$core$aggregation_operator_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregations = (function() { 
var metabase$lib$core$aggregations__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregations,args__70829__auto__);
};
var metabase$lib$core$aggregations = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79957__i = 0, G__79957__a = new Array(arguments.length -  0);
while (G__79957__i < G__79957__a.length) {G__79957__a[G__79957__i] = arguments[G__79957__i + 0]; ++G__79957__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79957__a,0,null);
} 
return metabase$lib$core$aggregations__delegate.call(this,args__70829__auto__);};
metabase$lib$core$aggregations.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregations.cljs$lang$applyTo = (function (arglist__79958){
var args__70829__auto__ = cljs.core.seq(arglist__79958);
return metabase$lib$core$aggregations__delegate(args__70829__auto__);
});
metabase$lib$core$aggregations.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregations__delegate;
return metabase$lib$core$aggregations;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.aggregations_metadata = (function() { 
var metabase$lib$core$aggregations_metadata__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.aggregations_metadata,args__70829__auto__);
};
var metabase$lib$core$aggregations_metadata = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79959__i = 0, G__79959__a = new Array(arguments.length -  0);
while (G__79959__i < G__79959__a.length) {G__79959__a[G__79959__i] = arguments[G__79959__i + 0]; ++G__79959__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79959__a,0,null);
} 
return metabase$lib$core$aggregations_metadata__delegate.call(this,args__70829__auto__);};
metabase$lib$core$aggregations_metadata.cljs$lang$maxFixedArity = 0;
metabase$lib$core$aggregations_metadata.cljs$lang$applyTo = (function (arglist__79960){
var args__70829__auto__ = cljs.core.seq(arglist__79960);
return metabase$lib$core$aggregations_metadata__delegate(args__70829__auto__);
});
metabase$lib$core$aggregations_metadata.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$aggregations_metadata__delegate;
return metabase$lib$core$aggregations_metadata;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_aggregation_operators = (function() { 
var metabase$lib$core$available_aggregation_operators__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.available_aggregation_operators,args__70829__auto__);
};
var metabase$lib$core$available_aggregation_operators = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79961__i = 0, G__79961__a = new Array(arguments.length -  0);
while (G__79961__i < G__79961__a.length) {G__79961__a[G__79961__i] = arguments[G__79961__i + 0]; ++G__79961__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79961__a,0,null);
} 
return metabase$lib$core$available_aggregation_operators__delegate.call(this,args__70829__auto__);};
metabase$lib$core$available_aggregation_operators.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_aggregation_operators.cljs$lang$applyTo = (function (arglist__79962){
var args__70829__auto__ = cljs.core.seq(arglist__79962);
return metabase$lib$core$available_aggregation_operators__delegate(args__70829__auto__);
});
metabase$lib$core$available_aggregation_operators.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_aggregation_operators__delegate;
return metabase$lib$core$available_aggregation_operators;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.selected_aggregation_operators = (function() { 
var metabase$lib$core$selected_aggregation_operators__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.selected_aggregation_operators,args__70829__auto__);
};
var metabase$lib$core$selected_aggregation_operators = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79963__i = 0, G__79963__a = new Array(arguments.length -  0);
while (G__79963__i < G__79963__a.length) {G__79963__a[G__79963__i] = arguments[G__79963__i + 0]; ++G__79963__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79963__a,0,null);
} 
return metabase$lib$core$selected_aggregation_operators__delegate.call(this,args__70829__auto__);};
metabase$lib$core$selected_aggregation_operators.cljs$lang$maxFixedArity = 0;
metabase$lib$core$selected_aggregation_operators.cljs$lang$applyTo = (function (arglist__79964){
var args__70829__auto__ = cljs.core.seq(arglist__79964);
return metabase$lib$core$selected_aggregation_operators__delegate(args__70829__auto__);
});
metabase$lib$core$selected_aggregation_operators.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$selected_aggregation_operators__delegate;
return metabase$lib$core$selected_aggregation_operators;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.count = (function() { 
var metabase$lib$core$count__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.count,args__70829__auto__);
};
var metabase$lib$core$count = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79965__i = 0, G__79965__a = new Array(arguments.length -  0);
while (G__79965__i < G__79965__a.length) {G__79965__a[G__79965__i] = arguments[G__79965__i + 0]; ++G__79965__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79965__a,0,null);
} 
return metabase$lib$core$count__delegate.call(this,args__70829__auto__);};
metabase$lib$core$count.cljs$lang$maxFixedArity = 0;
metabase$lib$core$count.cljs$lang$applyTo = (function (arglist__79966){
var args__70829__auto__ = cljs.core.seq(arglist__79966);
return metabase$lib$core$count__delegate(args__70829__auto__);
});
metabase$lib$core$count.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$count__delegate;
return metabase$lib$core$count;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.avg = (function() { 
var metabase$lib$core$avg__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.avg,args__70829__auto__);
};
var metabase$lib$core$avg = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79967__i = 0, G__79967__a = new Array(arguments.length -  0);
while (G__79967__i < G__79967__a.length) {G__79967__a[G__79967__i] = arguments[G__79967__i + 0]; ++G__79967__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79967__a,0,null);
} 
return metabase$lib$core$avg__delegate.call(this,args__70829__auto__);};
metabase$lib$core$avg.cljs$lang$maxFixedArity = 0;
metabase$lib$core$avg.cljs$lang$applyTo = (function (arglist__79968){
var args__70829__auto__ = cljs.core.seq(arglist__79968);
return metabase$lib$core$avg__delegate(args__70829__auto__);
});
metabase$lib$core$avg.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$avg__delegate;
return metabase$lib$core$avg;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.count_where = (function() { 
var metabase$lib$core$count_where__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.count_where,args__70829__auto__);
};
var metabase$lib$core$count_where = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79969__i = 0, G__79969__a = new Array(arguments.length -  0);
while (G__79969__i < G__79969__a.length) {G__79969__a[G__79969__i] = arguments[G__79969__i + 0]; ++G__79969__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79969__a,0,null);
} 
return metabase$lib$core$count_where__delegate.call(this,args__70829__auto__);};
metabase$lib$core$count_where.cljs$lang$maxFixedArity = 0;
metabase$lib$core$count_where.cljs$lang$applyTo = (function (arglist__79970){
var args__70829__auto__ = cljs.core.seq(arglist__79970);
return metabase$lib$core$count_where__delegate(args__70829__auto__);
});
metabase$lib$core$count_where.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$count_where__delegate;
return metabase$lib$core$count_where;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.distinct = (function() { 
var metabase$lib$core$distinct__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.distinct,args__70829__auto__);
};
var metabase$lib$core$distinct = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79971__i = 0, G__79971__a = new Array(arguments.length -  0);
while (G__79971__i < G__79971__a.length) {G__79971__a[G__79971__i] = arguments[G__79971__i + 0]; ++G__79971__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79971__a,0,null);
} 
return metabase$lib$core$distinct__delegate.call(this,args__70829__auto__);};
metabase$lib$core$distinct.cljs$lang$maxFixedArity = 0;
metabase$lib$core$distinct.cljs$lang$applyTo = (function (arglist__79972){
var args__70829__auto__ = cljs.core.seq(arglist__79972);
return metabase$lib$core$distinct__delegate(args__70829__auto__);
});
metabase$lib$core$distinct.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$distinct__delegate;
return metabase$lib$core$distinct;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.max = (function() { 
var metabase$lib$core$max__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.max,args__70829__auto__);
};
var metabase$lib$core$max = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79973__i = 0, G__79973__a = new Array(arguments.length -  0);
while (G__79973__i < G__79973__a.length) {G__79973__a[G__79973__i] = arguments[G__79973__i + 0]; ++G__79973__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79973__a,0,null);
} 
return metabase$lib$core$max__delegate.call(this,args__70829__auto__);};
metabase$lib$core$max.cljs$lang$maxFixedArity = 0;
metabase$lib$core$max.cljs$lang$applyTo = (function (arglist__79974){
var args__70829__auto__ = cljs.core.seq(arglist__79974);
return metabase$lib$core$max__delegate(args__70829__auto__);
});
metabase$lib$core$max.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$max__delegate;
return metabase$lib$core$max;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.median = (function() { 
var metabase$lib$core$median__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.median,args__70829__auto__);
};
var metabase$lib$core$median = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79975__i = 0, G__79975__a = new Array(arguments.length -  0);
while (G__79975__i < G__79975__a.length) {G__79975__a[G__79975__i] = arguments[G__79975__i + 0]; ++G__79975__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79975__a,0,null);
} 
return metabase$lib$core$median__delegate.call(this,args__70829__auto__);};
metabase$lib$core$median.cljs$lang$maxFixedArity = 0;
metabase$lib$core$median.cljs$lang$applyTo = (function (arglist__79976){
var args__70829__auto__ = cljs.core.seq(arglist__79976);
return metabase$lib$core$median__delegate(args__70829__auto__);
});
metabase$lib$core$median.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$median__delegate;
return metabase$lib$core$median;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.min = (function() { 
var metabase$lib$core$min__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.min,args__70829__auto__);
};
var metabase$lib$core$min = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79977__i = 0, G__79977__a = new Array(arguments.length -  0);
while (G__79977__i < G__79977__a.length) {G__79977__a[G__79977__i] = arguments[G__79977__i + 0]; ++G__79977__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79977__a,0,null);
} 
return metabase$lib$core$min__delegate.call(this,args__70829__auto__);};
metabase$lib$core$min.cljs$lang$maxFixedArity = 0;
metabase$lib$core$min.cljs$lang$applyTo = (function (arglist__79978){
var args__70829__auto__ = cljs.core.seq(arglist__79978);
return metabase$lib$core$min__delegate(args__70829__auto__);
});
metabase$lib$core$min.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$min__delegate;
return metabase$lib$core$min;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.percentile = (function() { 
var metabase$lib$core$percentile__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.percentile,args__70829__auto__);
};
var metabase$lib$core$percentile = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79979__i = 0, G__79979__a = new Array(arguments.length -  0);
while (G__79979__i < G__79979__a.length) {G__79979__a[G__79979__i] = arguments[G__79979__i + 0]; ++G__79979__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79979__a,0,null);
} 
return metabase$lib$core$percentile__delegate.call(this,args__70829__auto__);};
metabase$lib$core$percentile.cljs$lang$maxFixedArity = 0;
metabase$lib$core$percentile.cljs$lang$applyTo = (function (arglist__79980){
var args__70829__auto__ = cljs.core.seq(arglist__79980);
return metabase$lib$core$percentile__delegate(args__70829__auto__);
});
metabase$lib$core$percentile.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$percentile__delegate;
return metabase$lib$core$percentile;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.share = (function() { 
var metabase$lib$core$share__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.share,args__70829__auto__);
};
var metabase$lib$core$share = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79981__i = 0, G__79981__a = new Array(arguments.length -  0);
while (G__79981__i < G__79981__a.length) {G__79981__a[G__79981__i] = arguments[G__79981__i + 0]; ++G__79981__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79981__a,0,null);
} 
return metabase$lib$core$share__delegate.call(this,args__70829__auto__);};
metabase$lib$core$share.cljs$lang$maxFixedArity = 0;
metabase$lib$core$share.cljs$lang$applyTo = (function (arglist__79982){
var args__70829__auto__ = cljs.core.seq(arglist__79982);
return metabase$lib$core$share__delegate(args__70829__auto__);
});
metabase$lib$core$share.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$share__delegate;
return metabase$lib$core$share;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.stddev = (function() { 
var metabase$lib$core$stddev__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.stddev,args__70829__auto__);
};
var metabase$lib$core$stddev = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79983__i = 0, G__79983__a = new Array(arguments.length -  0);
while (G__79983__i < G__79983__a.length) {G__79983__a[G__79983__i] = arguments[G__79983__i + 0]; ++G__79983__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79983__a,0,null);
} 
return metabase$lib$core$stddev__delegate.call(this,args__70829__auto__);};
metabase$lib$core$stddev.cljs$lang$maxFixedArity = 0;
metabase$lib$core$stddev.cljs$lang$applyTo = (function (arglist__79984){
var args__70829__auto__ = cljs.core.seq(arglist__79984);
return metabase$lib$core$stddev__delegate(args__70829__auto__);
});
metabase$lib$core$stddev.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$stddev__delegate;
return metabase$lib$core$stddev;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.sum = (function() { 
var metabase$lib$core$sum__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.sum,args__70829__auto__);
};
var metabase$lib$core$sum = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79985__i = 0, G__79985__a = new Array(arguments.length -  0);
while (G__79985__i < G__79985__a.length) {G__79985__a[G__79985__i] = arguments[G__79985__i + 0]; ++G__79985__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79985__a,0,null);
} 
return metabase$lib$core$sum__delegate.call(this,args__70829__auto__);};
metabase$lib$core$sum.cljs$lang$maxFixedArity = 0;
metabase$lib$core$sum.cljs$lang$applyTo = (function (arglist__79986){
var args__70829__auto__ = cljs.core.seq(arglist__79986);
return metabase$lib$core$sum__delegate(args__70829__auto__);
});
metabase$lib$core$sum.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$sum__delegate;
return metabase$lib$core$sum;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.sum_where = (function() { 
var metabase$lib$core$sum_where__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.sum_where,args__70829__auto__);
};
var metabase$lib$core$sum_where = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79987__i = 0, G__79987__a = new Array(arguments.length -  0);
while (G__79987__i < G__79987__a.length) {G__79987__a[G__79987__i] = arguments[G__79987__i + 0]; ++G__79987__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79987__a,0,null);
} 
return metabase$lib$core$sum_where__delegate.call(this,args__70829__auto__);};
metabase$lib$core$sum_where.cljs$lang$maxFixedArity = 0;
metabase$lib$core$sum_where.cljs$lang$applyTo = (function (arglist__79988){
var args__70829__auto__ = cljs.core.seq(arglist__79988);
return metabase$lib$core$sum_where__delegate(args__70829__auto__);
});
metabase$lib$core$sum_where.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$sum_where__delegate;
return metabase$lib$core$sum_where;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.var$ = (function() { 
var metabase$lib$core$var__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.var$,args__70829__auto__);
};
var metabase$lib$core$var = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79989__i = 0, G__79989__a = new Array(arguments.length -  0);
while (G__79989__i < G__79989__a.length) {G__79989__a[G__79989__i] = arguments[G__79989__i + 0]; ++G__79989__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79989__a,0,null);
} 
return metabase$lib$core$var__delegate.call(this,args__70829__auto__);};
metabase$lib$core$var.cljs$lang$maxFixedArity = 0;
metabase$lib$core$var.cljs$lang$applyTo = (function (arglist__79990){
var args__70829__auto__ = cljs.core.seq(arglist__79990);
return metabase$lib$core$var__delegate(args__70829__auto__);
});
metabase$lib$core$var.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$var__delegate;
return metabase$lib$core$var;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.cum_count = (function() { 
var metabase$lib$core$cum_count__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.cum_count,args__70829__auto__);
};
var metabase$lib$core$cum_count = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79991__i = 0, G__79991__a = new Array(arguments.length -  0);
while (G__79991__i < G__79991__a.length) {G__79991__a[G__79991__i] = arguments[G__79991__i + 0]; ++G__79991__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79991__a,0,null);
} 
return metabase$lib$core$cum_count__delegate.call(this,args__70829__auto__);};
metabase$lib$core$cum_count.cljs$lang$maxFixedArity = 0;
metabase$lib$core$cum_count.cljs$lang$applyTo = (function (arglist__79992){
var args__70829__auto__ = cljs.core.seq(arglist__79992);
return metabase$lib$core$cum_count__delegate(args__70829__auto__);
});
metabase$lib$core$cum_count.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$cum_count__delegate;
return metabase$lib$core$cum_count;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.cum_sum = (function() { 
var metabase$lib$core$cum_sum__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.aggregation.cum_sum,args__70829__auto__);
};
var metabase$lib$core$cum_sum = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79993__i = 0, G__79993__a = new Array(arguments.length -  0);
while (G__79993__i < G__79993__a.length) {G__79993__a[G__79993__i] = arguments[G__79993__i + 0]; ++G__79993__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79993__a,0,null);
} 
return metabase$lib$core$cum_sum__delegate.call(this,args__70829__auto__);};
metabase$lib$core$cum_sum.cljs$lang$maxFixedArity = 0;
metabase$lib$core$cum_sum.cljs$lang$applyTo = (function (arglist__79994){
var args__70829__auto__ = cljs.core.seq(arglist__79994);
return metabase$lib$core$cum_sum__delegate(args__70829__auto__);
});
metabase$lib$core$cum_sum.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$cum_sum__delegate;
return metabase$lib$core$cum_sum;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_binning_strategies = (function() { 
var metabase$lib$core$available_binning_strategies__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.binning.available_binning_strategies,args__70829__auto__);
};
var metabase$lib$core$available_binning_strategies = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79995__i = 0, G__79995__a = new Array(arguments.length -  0);
while (G__79995__i < G__79995__a.length) {G__79995__a[G__79995__i] = arguments[G__79995__i + 0]; ++G__79995__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79995__a,0,null);
} 
return metabase$lib$core$available_binning_strategies__delegate.call(this,args__70829__auto__);};
metabase$lib$core$available_binning_strategies.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_binning_strategies.cljs$lang$applyTo = (function (arglist__79996){
var args__70829__auto__ = cljs.core.seq(arglist__79996);
return metabase$lib$core$available_binning_strategies__delegate(args__70829__auto__);
});
metabase$lib$core$available_binning_strategies.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_binning_strategies__delegate;
return metabase$lib$core$available_binning_strategies;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.binning = (function() { 
var metabase$lib$core$binning__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.binning.binning,args__70829__auto__);
};
var metabase$lib$core$binning = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79997__i = 0, G__79997__a = new Array(arguments.length -  0);
while (G__79997__i < G__79997__a.length) {G__79997__a[G__79997__i] = arguments[G__79997__i + 0]; ++G__79997__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79997__a,0,null);
} 
return metabase$lib$core$binning__delegate.call(this,args__70829__auto__);};
metabase$lib$core$binning.cljs$lang$maxFixedArity = 0;
metabase$lib$core$binning.cljs$lang$applyTo = (function (arglist__79998){
var args__70829__auto__ = cljs.core.seq(arglist__79998);
return metabase$lib$core$binning__delegate(args__70829__auto__);
});
metabase$lib$core$binning.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$binning__delegate;
return metabase$lib$core$binning;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_binning = (function() { 
var metabase$lib$core$with_binning__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.binning.with_binning,args__70829__auto__);
};
var metabase$lib$core$with_binning = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__79999__i = 0, G__79999__a = new Array(arguments.length -  0);
while (G__79999__i < G__79999__a.length) {G__79999__a[G__79999__i] = arguments[G__79999__i + 0]; ++G__79999__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__79999__a,0,null);
} 
return metabase$lib$core$with_binning__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_binning.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_binning.cljs$lang$applyTo = (function (arglist__80000){
var args__70829__auto__ = cljs.core.seq(arglist__80000);
return metabase$lib$core$with_binning__delegate(args__70829__auto__);
});
metabase$lib$core$with_binning.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_binning__delegate;
return metabase$lib$core$with_binning;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.breakout = (function() { 
var metabase$lib$core$breakout__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.breakout.breakout,args__70829__auto__);
};
var metabase$lib$core$breakout = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80001__i = 0, G__80001__a = new Array(arguments.length -  0);
while (G__80001__i < G__80001__a.length) {G__80001__a[G__80001__i] = arguments[G__80001__i + 0]; ++G__80001__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80001__a,0,null);
} 
return metabase$lib$core$breakout__delegate.call(this,args__70829__auto__);};
metabase$lib$core$breakout.cljs$lang$maxFixedArity = 0;
metabase$lib$core$breakout.cljs$lang$applyTo = (function (arglist__80002){
var args__70829__auto__ = cljs.core.seq(arglist__80002);
return metabase$lib$core$breakout__delegate(args__70829__auto__);
});
metabase$lib$core$breakout.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$breakout__delegate;
return metabase$lib$core$breakout;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.breakout_column = (function() { 
var metabase$lib$core$breakout_column__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.breakout.breakout_column,args__70829__auto__);
};
var metabase$lib$core$breakout_column = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80003__i = 0, G__80003__a = new Array(arguments.length -  0);
while (G__80003__i < G__80003__a.length) {G__80003__a[G__80003__i] = arguments[G__80003__i + 0]; ++G__80003__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80003__a,0,null);
} 
return metabase$lib$core$breakout_column__delegate.call(this,args__70829__auto__);};
metabase$lib$core$breakout_column.cljs$lang$maxFixedArity = 0;
metabase$lib$core$breakout_column.cljs$lang$applyTo = (function (arglist__80004){
var args__70829__auto__ = cljs.core.seq(arglist__80004);
return metabase$lib$core$breakout_column__delegate(args__70829__auto__);
});
metabase$lib$core$breakout_column.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$breakout_column__delegate;
return metabase$lib$core$breakout_column;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.breakoutable_columns = (function() { 
var metabase$lib$core$breakoutable_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.breakout.breakoutable_columns,args__70829__auto__);
};
var metabase$lib$core$breakoutable_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80006__i = 0, G__80006__a = new Array(arguments.length -  0);
while (G__80006__i < G__80006__a.length) {G__80006__a[G__80006__i] = arguments[G__80006__i + 0]; ++G__80006__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80006__a,0,null);
} 
return metabase$lib$core$breakoutable_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$breakoutable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$breakoutable_columns.cljs$lang$applyTo = (function (arglist__80007){
var args__70829__auto__ = cljs.core.seq(arglist__80007);
return metabase$lib$core$breakoutable_columns__delegate(args__70829__auto__);
});
metabase$lib$core$breakoutable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$breakoutable_columns__delegate;
return metabase$lib$core$breakoutable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.breakouts = (function() { 
var metabase$lib$core$breakouts__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.breakout.breakouts,args__70829__auto__);
};
var metabase$lib$core$breakouts = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80008__i = 0, G__80008__a = new Array(arguments.length -  0);
while (G__80008__i < G__80008__a.length) {G__80008__a[G__80008__i] = arguments[G__80008__i + 0]; ++G__80008__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80008__a,0,null);
} 
return metabase$lib$core$breakouts__delegate.call(this,args__70829__auto__);};
metabase$lib$core$breakouts.cljs$lang$maxFixedArity = 0;
metabase$lib$core$breakouts.cljs$lang$applyTo = (function (arglist__80009){
var args__70829__auto__ = cljs.core.seq(arglist__80009);
return metabase$lib$core$breakouts__delegate(args__70829__auto__);
});
metabase$lib$core$breakouts.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$breakouts__delegate;
return metabase$lib$core$breakouts;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.breakouts_metadata = (function() { 
var metabase$lib$core$breakouts_metadata__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.breakout.breakouts_metadata,args__70829__auto__);
};
var metabase$lib$core$breakouts_metadata = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80010__i = 0, G__80010__a = new Array(arguments.length -  0);
while (G__80010__i < G__80010__a.length) {G__80010__a[G__80010__i] = arguments[G__80010__i + 0]; ++G__80010__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80010__a,0,null);
} 
return metabase$lib$core$breakouts_metadata__delegate.call(this,args__70829__auto__);};
metabase$lib$core$breakouts_metadata.cljs$lang$maxFixedArity = 0;
metabase$lib$core$breakouts_metadata.cljs$lang$applyTo = (function (arglist__80011){
var args__70829__auto__ = cljs.core.seq(arglist__80011);
return metabase$lib$core$breakouts_metadata__delegate(args__70829__auto__);
});
metabase$lib$core$breakouts_metadata.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$breakouts_metadata__delegate;
return metabase$lib$core$breakouts_metadata;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.remove_all_breakouts = (function() { 
var metabase$lib$core$remove_all_breakouts__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.breakout.remove_all_breakouts,args__70829__auto__);
};
var metabase$lib$core$remove_all_breakouts = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80012__i = 0, G__80012__a = new Array(arguments.length -  0);
while (G__80012__i < G__80012__a.length) {G__80012__a[G__80012__i] = arguments[G__80012__i + 0]; ++G__80012__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80012__a,0,null);
} 
return metabase$lib$core$remove_all_breakouts__delegate.call(this,args__70829__auto__);};
metabase$lib$core$remove_all_breakouts.cljs$lang$maxFixedArity = 0;
metabase$lib$core$remove_all_breakouts.cljs$lang$applyTo = (function (arglist__80013){
var args__70829__auto__ = cljs.core.seq(arglist__80013);
return metabase$lib$core$remove_all_breakouts__delegate(args__70829__auto__);
});
metabase$lib$core$remove_all_breakouts.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$remove_all_breakouts__delegate;
return metabase$lib$core$remove_all_breakouts;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.columns_group_columns = (function() { 
var metabase$lib$core$columns_group_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.column_group.columns_group_columns,args__70829__auto__);
};
var metabase$lib$core$columns_group_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80016__i = 0, G__80016__a = new Array(arguments.length -  0);
while (G__80016__i < G__80016__a.length) {G__80016__a[G__80016__i] = arguments[G__80016__i + 0]; ++G__80016__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80016__a,0,null);
} 
return metabase$lib$core$columns_group_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$columns_group_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$columns_group_columns.cljs$lang$applyTo = (function (arglist__80017){
var args__70829__auto__ = cljs.core.seq(arglist__80017);
return metabase$lib$core$columns_group_columns__delegate(args__70829__auto__);
});
metabase$lib$core$columns_group_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$columns_group_columns__delegate;
return metabase$lib$core$columns_group_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.group_columns = (function() { 
var metabase$lib$core$group_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.column_group.group_columns,args__70829__auto__);
};
var metabase$lib$core$group_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80019__i = 0, G__80019__a = new Array(arguments.length -  0);
while (G__80019__i < G__80019__a.length) {G__80019__a[G__80019__i] = arguments[G__80019__i + 0]; ++G__80019__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80019__a,0,null);
} 
return metabase$lib$core$group_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$group_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$group_columns.cljs$lang$applyTo = (function (arglist__80020){
var args__70829__auto__ = cljs.core.seq(arglist__80020);
return metabase$lib$core$group_columns__delegate(args__70829__auto__);
});
metabase$lib$core$group_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$group_columns__delegate;
return metabase$lib$core$group_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.external_op = (function() { 
var metabase$lib$core$external_op__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.common.external_op,args__70829__auto__);
};
var metabase$lib$core$external_op = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80021__i = 0, G__80021__a = new Array(arguments.length -  0);
while (G__80021__i < G__80021__a.length) {G__80021__a[G__80021__i] = arguments[G__80021__i + 0]; ++G__80021__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80021__a,0,null);
} 
return metabase$lib$core$external_op__delegate.call(this,args__70829__auto__);};
metabase$lib$core$external_op.cljs$lang$maxFixedArity = 0;
metabase$lib$core$external_op.cljs$lang$applyTo = (function (arglist__80022){
var args__70829__auto__ = cljs.core.seq(arglist__80022);
return metabase$lib$core$external_op__delegate(args__70829__auto__);
});
metabase$lib$core$external_op.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$external_op__delegate;
return metabase$lib$core$external_op;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.__GT_pMBQL = (function() { 
var metabase$lib$core$__GT_pMBQL__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.convert.__GT_pMBQL,args__70829__auto__);
};
var metabase$lib$core$__GT_pMBQL = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80026__i = 0, G__80026__a = new Array(arguments.length -  0);
while (G__80026__i < G__80026__a.length) {G__80026__a[G__80026__i] = arguments[G__80026__i + 0]; ++G__80026__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80026__a,0,null);
} 
return metabase$lib$core$__GT_pMBQL__delegate.call(this,args__70829__auto__);};
metabase$lib$core$__GT_pMBQL.cljs$lang$maxFixedArity = 0;
metabase$lib$core$__GT_pMBQL.cljs$lang$applyTo = (function (arglist__80027){
var args__70829__auto__ = cljs.core.seq(arglist__80027);
return metabase$lib$core$__GT_pMBQL__delegate(args__70829__auto__);
});
metabase$lib$core$__GT_pMBQL.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$__GT_pMBQL__delegate;
return metabase$lib$core$__GT_pMBQL;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.database_id = (function() { 
var metabase$lib$core$database_id__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.database.database_id,args__70829__auto__);
};
var metabase$lib$core$database_id = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80028__i = 0, G__80028__a = new Array(arguments.length -  0);
while (G__80028__i < G__80028__a.length) {G__80028__a[G__80028__i] = arguments[G__80028__i + 0]; ++G__80028__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80028__a,0,null);
} 
return metabase$lib$core$database_id__delegate.call(this,args__70829__auto__);};
metabase$lib$core$database_id.cljs$lang$maxFixedArity = 0;
metabase$lib$core$database_id.cljs$lang$applyTo = (function (arglist__80029){
var args__70829__auto__ = cljs.core.seq(arglist__80029);
return metabase$lib$core$database_id__delegate(args__70829__auto__);
});
metabase$lib$core$database_id.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$database_id__delegate;
return metabase$lib$core$database_id;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_drill_thrus = (function() { 
var metabase$lib$core$available_drill_thrus__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.drill_thru.available_drill_thrus,args__70829__auto__);
};
var metabase$lib$core$available_drill_thrus = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80030__i = 0, G__80030__a = new Array(arguments.length -  0);
while (G__80030__i < G__80030__a.length) {G__80030__a[G__80030__i] = arguments[G__80030__i + 0]; ++G__80030__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80030__a,0,null);
} 
return metabase$lib$core$available_drill_thrus__delegate.call(this,args__70829__auto__);};
metabase$lib$core$available_drill_thrus.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_drill_thrus.cljs$lang$applyTo = (function (arglist__80031){
var args__70829__auto__ = cljs.core.seq(arglist__80031);
return metabase$lib$core$available_drill_thrus__delegate(args__70829__auto__);
});
metabase$lib$core$available_drill_thrus.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_drill_thrus__delegate;
return metabase$lib$core$available_drill_thrus;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.drill_thru = (function() { 
var metabase$lib$core$drill_thru__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.drill_thru.drill_thru,args__70829__auto__);
};
var metabase$lib$core$drill_thru = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80032__i = 0, G__80032__a = new Array(arguments.length -  0);
while (G__80032__i < G__80032__a.length) {G__80032__a[G__80032__i] = arguments[G__80032__i + 0]; ++G__80032__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80032__a,0,null);
} 
return metabase$lib$core$drill_thru__delegate.call(this,args__70829__auto__);};
metabase$lib$core$drill_thru.cljs$lang$maxFixedArity = 0;
metabase$lib$core$drill_thru.cljs$lang$applyTo = (function (arglist__80033){
var args__70829__auto__ = cljs.core.seq(arglist__80033);
return metabase$lib$core$drill_thru__delegate(args__70829__auto__);
});
metabase$lib$core$drill_thru.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$drill_thru__delegate;
return metabase$lib$core$drill_thru;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.extractions_for_drill = (function() { 
var metabase$lib$core$extractions_for_drill__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.drill_thru.column_extract.extractions_for_drill,args__70829__auto__);
};
var metabase$lib$core$extractions_for_drill = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80034__i = 0, G__80034__a = new Array(arguments.length -  0);
while (G__80034__i < G__80034__a.length) {G__80034__a[G__80034__i] = arguments[G__80034__i + 0]; ++G__80034__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80034__a,0,null);
} 
return metabase$lib$core$extractions_for_drill__delegate.call(this,args__70829__auto__);};
metabase$lib$core$extractions_for_drill.cljs$lang$maxFixedArity = 0;
metabase$lib$core$extractions_for_drill.cljs$lang$applyTo = (function (arglist__80035){
var args__70829__auto__ = cljs.core.seq(arglist__80035);
return metabase$lib$core$extractions_for_drill__delegate(args__70829__auto__);
});
metabase$lib$core$extractions_for_drill.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$extractions_for_drill__delegate;
return metabase$lib$core$extractions_for_drill;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.pivot_columns_for_type = (function() { 
var metabase$lib$core$pivot_columns_for_type__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.drill_thru.pivot.pivot_columns_for_type,args__70829__auto__);
};
var metabase$lib$core$pivot_columns_for_type = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80036__i = 0, G__80036__a = new Array(arguments.length -  0);
while (G__80036__i < G__80036__a.length) {G__80036__a[G__80036__i] = arguments[G__80036__i + 0]; ++G__80036__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80036__a,0,null);
} 
return metabase$lib$core$pivot_columns_for_type__delegate.call(this,args__70829__auto__);};
metabase$lib$core$pivot_columns_for_type.cljs$lang$maxFixedArity = 0;
metabase$lib$core$pivot_columns_for_type.cljs$lang$applyTo = (function (arglist__80037){
var args__70829__auto__ = cljs.core.seq(arglist__80037);
return metabase$lib$core$pivot_columns_for_type__delegate(args__70829__auto__);
});
metabase$lib$core$pivot_columns_for_type.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$pivot_columns_for_type__delegate;
return metabase$lib$core$pivot_columns_for_type;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.pivot_types = (function() { 
var metabase$lib$core$pivot_types__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.drill_thru.pivot.pivot_types,args__70829__auto__);
};
var metabase$lib$core$pivot_types = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80038__i = 0, G__80038__a = new Array(arguments.length -  0);
while (G__80038__i < G__80038__a.length) {G__80038__a[G__80038__i] = arguments[G__80038__i + 0]; ++G__80038__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80038__a,0,null);
} 
return metabase$lib$core$pivot_types__delegate.call(this,args__70829__auto__);};
metabase$lib$core$pivot_types.cljs$lang$maxFixedArity = 0;
metabase$lib$core$pivot_types.cljs$lang$applyTo = (function (arglist__80039){
var args__70829__auto__ = cljs.core.seq(arglist__80039);
return metabase$lib$core$pivot_types__delegate(args__70829__auto__);
});
metabase$lib$core$pivot_types.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$pivot_types__delegate;
return metabase$lib$core$pivot_types;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.find_column_for_legacy_ref = (function() { 
var metabase$lib$core$find_column_for_legacy_ref__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.equality.find_column_for_legacy_ref,args__70829__auto__);
};
var metabase$lib$core$find_column_for_legacy_ref = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80040__i = 0, G__80040__a = new Array(arguments.length -  0);
while (G__80040__i < G__80040__a.length) {G__80040__a[G__80040__i] = arguments[G__80040__i + 0]; ++G__80040__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80040__a,0,null);
} 
return metabase$lib$core$find_column_for_legacy_ref__delegate.call(this,args__70829__auto__);};
metabase$lib$core$find_column_for_legacy_ref.cljs$lang$maxFixedArity = 0;
metabase$lib$core$find_column_for_legacy_ref.cljs$lang$applyTo = (function (arglist__80041){
var args__70829__auto__ = cljs.core.seq(arglist__80041);
return metabase$lib$core$find_column_for_legacy_ref__delegate(args__70829__auto__);
});
metabase$lib$core$find_column_for_legacy_ref.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$find_column_for_legacy_ref__delegate;
return metabase$lib$core$find_column_for_legacy_ref;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.find_matching_column = (function() { 
var metabase$lib$core$find_matching_column__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.equality.find_matching_column,args__70829__auto__);
};
var metabase$lib$core$find_matching_column = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80042__i = 0, G__80042__a = new Array(arguments.length -  0);
while (G__80042__i < G__80042__a.length) {G__80042__a[G__80042__i] = arguments[G__80042__i + 0]; ++G__80042__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80042__a,0,null);
} 
return metabase$lib$core$find_matching_column__delegate.call(this,args__70829__auto__);};
metabase$lib$core$find_matching_column.cljs$lang$maxFixedArity = 0;
metabase$lib$core$find_matching_column.cljs$lang$applyTo = (function (arglist__80043){
var args__70829__auto__ = cljs.core.seq(arglist__80043);
return metabase$lib$core$find_matching_column__delegate(args__70829__auto__);
});
metabase$lib$core$find_matching_column.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$find_matching_column__delegate;
return metabase$lib$core$find_matching_column;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expression = (function() { 
var metabase$lib$core$expression__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.expression,args__70829__auto__);
};
var metabase$lib$core$expression = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80044__i = 0, G__80044__a = new Array(arguments.length -  0);
while (G__80044__i < G__80044__a.length) {G__80044__a[G__80044__i] = arguments[G__80044__i + 0]; ++G__80044__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80044__a,0,null);
} 
return metabase$lib$core$expression__delegate.call(this,args__70829__auto__);};
metabase$lib$core$expression.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expression.cljs$lang$applyTo = (function (arglist__80045){
var args__70829__auto__ = cljs.core.seq(arglist__80045);
return metabase$lib$core$expression__delegate(args__70829__auto__);
});
metabase$lib$core$expression.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expression__delegate;
return metabase$lib$core$expression;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expressions = (function() { 
var metabase$lib$core$expressions__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.expressions,args__70829__auto__);
};
var metabase$lib$core$expressions = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80046__i = 0, G__80046__a = new Array(arguments.length -  0);
while (G__80046__i < G__80046__a.length) {G__80046__a[G__80046__i] = arguments[G__80046__i + 0]; ++G__80046__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80046__a,0,null);
} 
return metabase$lib$core$expressions__delegate.call(this,args__70829__auto__);};
metabase$lib$core$expressions.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expressions.cljs$lang$applyTo = (function (arglist__80047){
var args__70829__auto__ = cljs.core.seq(arglist__80047);
return metabase$lib$core$expressions__delegate(args__70829__auto__);
});
metabase$lib$core$expressions.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expressions__delegate;
return metabase$lib$core$expressions;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expressions_metadata = (function() { 
var metabase$lib$core$expressions_metadata__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.expressions_metadata,args__70829__auto__);
};
var metabase$lib$core$expressions_metadata = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80052__i = 0, G__80052__a = new Array(arguments.length -  0);
while (G__80052__i < G__80052__a.length) {G__80052__a[G__80052__i] = arguments[G__80052__i + 0]; ++G__80052__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80052__a,0,null);
} 
return metabase$lib$core$expressions_metadata__delegate.call(this,args__70829__auto__);};
metabase$lib$core$expressions_metadata.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expressions_metadata.cljs$lang$applyTo = (function (arglist__80053){
var args__70829__auto__ = cljs.core.seq(arglist__80053);
return metabase$lib$core$expressions_metadata__delegate(args__70829__auto__);
});
metabase$lib$core$expressions_metadata.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expressions_metadata__delegate;
return metabase$lib$core$expressions_metadata;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expressionable_columns = (function() { 
var metabase$lib$core$expressionable_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.expressionable_columns,args__70829__auto__);
};
var metabase$lib$core$expressionable_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80054__i = 0, G__80054__a = new Array(arguments.length -  0);
while (G__80054__i < G__80054__a.length) {G__80054__a[G__80054__i] = arguments[G__80054__i + 0]; ++G__80054__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80054__a,0,null);
} 
return metabase$lib$core$expressionable_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$expressionable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expressionable_columns.cljs$lang$applyTo = (function (arglist__80055){
var args__70829__auto__ = cljs.core.seq(arglist__80055);
return metabase$lib$core$expressionable_columns__delegate(args__70829__auto__);
});
metabase$lib$core$expressionable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expressionable_columns__delegate;
return metabase$lib$core$expressionable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expression_ref = (function() { 
var metabase$lib$core$expression_ref__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.expression_ref,args__70829__auto__);
};
var metabase$lib$core$expression_ref = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80056__i = 0, G__80056__a = new Array(arguments.length -  0);
while (G__80056__i < G__80056__a.length) {G__80056__a[G__80056__i] = arguments[G__80056__i + 0]; ++G__80056__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80056__a,0,null);
} 
return metabase$lib$core$expression_ref__delegate.call(this,args__70829__auto__);};
metabase$lib$core$expression_ref.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expression_ref.cljs$lang$applyTo = (function (arglist__80057){
var args__70829__auto__ = cljs.core.seq(arglist__80057);
return metabase$lib$core$expression_ref__delegate(args__70829__auto__);
});
metabase$lib$core$expression_ref.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expression_ref__delegate;
return metabase$lib$core$expression_ref;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_expression_name = (function() { 
var metabase$lib$core$with_expression_name__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.with_expression_name,args__70829__auto__);
};
var metabase$lib$core$with_expression_name = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80058__i = 0, G__80058__a = new Array(arguments.length -  0);
while (G__80058__i < G__80058__a.length) {G__80058__a[G__80058__i] = arguments[G__80058__i + 0]; ++G__80058__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80058__a,0,null);
} 
return metabase$lib$core$with_expression_name__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_expression_name.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_expression_name.cljs$lang$applyTo = (function (arglist__80059){
var args__70829__auto__ = cljs.core.seq(arglist__80059);
return metabase$lib$core$with_expression_name__delegate(args__70829__auto__);
});
metabase$lib$core$with_expression_name.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_expression_name__delegate;
return metabase$lib$core$with_expression_name;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._PLUS_ = (function() { 
var metabase$lib$core$_PLUS___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression._PLUS_,args__70829__auto__);
};
var metabase$lib$core$_PLUS_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80060__i = 0, G__80060__a = new Array(arguments.length -  0);
while (G__80060__i < G__80060__a.length) {G__80060__a[G__80060__i] = arguments[G__80060__i + 0]; ++G__80060__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80060__a,0,null);
} 
return metabase$lib$core$_PLUS___delegate.call(this,args__70829__auto__);};
metabase$lib$core$_PLUS_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_PLUS_.cljs$lang$applyTo = (function (arglist__80062){
var args__70829__auto__ = cljs.core.seq(arglist__80062);
return metabase$lib$core$_PLUS___delegate(args__70829__auto__);
});
metabase$lib$core$_PLUS_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_PLUS___delegate;
return metabase$lib$core$_PLUS_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._ = (function() { 
var metabase$lib$core$___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression._,args__70829__auto__);
};
var metabase$lib$core$_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80063__i = 0, G__80063__a = new Array(arguments.length -  0);
while (G__80063__i < G__80063__a.length) {G__80063__a[G__80063__i] = arguments[G__80063__i + 0]; ++G__80063__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80063__a,0,null);
} 
return metabase$lib$core$___delegate.call(this,args__70829__auto__);};
metabase$lib$core$_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_.cljs$lang$applyTo = (function (arglist__80064){
var args__70829__auto__ = cljs.core.seq(arglist__80064);
return metabase$lib$core$___delegate(args__70829__auto__);
});
metabase$lib$core$_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$___delegate;
return metabase$lib$core$_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._STAR_ = (function() { 
var metabase$lib$core$_STAR___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression._STAR_,args__70829__auto__);
};
var metabase$lib$core$_STAR_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80066__i = 0, G__80066__a = new Array(arguments.length -  0);
while (G__80066__i < G__80066__a.length) {G__80066__a[G__80066__i] = arguments[G__80066__i + 0]; ++G__80066__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80066__a,0,null);
} 
return metabase$lib$core$_STAR___delegate.call(this,args__70829__auto__);};
metabase$lib$core$_STAR_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_STAR_.cljs$lang$applyTo = (function (arglist__80067){
var args__70829__auto__ = cljs.core.seq(arglist__80067);
return metabase$lib$core$_STAR___delegate(args__70829__auto__);
});
metabase$lib$core$_STAR_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_STAR___delegate;
return metabase$lib$core$_STAR_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._SLASH_ = (function() { 
var metabase$lib$core$_SLASH___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression._SLASH_,args__70829__auto__);
};
var metabase$lib$core$_SLASH_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80068__i = 0, G__80068__a = new Array(arguments.length -  0);
while (G__80068__i < G__80068__a.length) {G__80068__a[G__80068__i] = arguments[G__80068__i + 0]; ++G__80068__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80068__a,0,null);
} 
return metabase$lib$core$_SLASH___delegate.call(this,args__70829__auto__);};
metabase$lib$core$_SLASH_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_SLASH_.cljs$lang$applyTo = (function (arglist__80069){
var args__70829__auto__ = cljs.core.seq(arglist__80069);
return metabase$lib$core$_SLASH___delegate(args__70829__auto__);
});
metabase$lib$core$_SLASH_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_SLASH___delegate;
return metabase$lib$core$_SLASH_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.case$ = (function() { 
var metabase$lib$core$case__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.case$,args__70829__auto__);
};
var metabase$lib$core$case = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80071__i = 0, G__80071__a = new Array(arguments.length -  0);
while (G__80071__i < G__80071__a.length) {G__80071__a[G__80071__i] = arguments[G__80071__i + 0]; ++G__80071__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80071__a,0,null);
} 
return metabase$lib$core$case__delegate.call(this,args__70829__auto__);};
metabase$lib$core$case.cljs$lang$maxFixedArity = 0;
metabase$lib$core$case.cljs$lang$applyTo = (function (arglist__80072){
var args__70829__auto__ = cljs.core.seq(arglist__80072);
return metabase$lib$core$case__delegate(args__70829__auto__);
});
metabase$lib$core$case.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$case__delegate;
return metabase$lib$core$case;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.coalesce = (function() { 
var metabase$lib$core$coalesce__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.coalesce,args__70829__auto__);
};
var metabase$lib$core$coalesce = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80073__i = 0, G__80073__a = new Array(arguments.length -  0);
while (G__80073__i < G__80073__a.length) {G__80073__a[G__80073__i] = arguments[G__80073__i + 0]; ++G__80073__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80073__a,0,null);
} 
return metabase$lib$core$coalesce__delegate.call(this,args__70829__auto__);};
metabase$lib$core$coalesce.cljs$lang$maxFixedArity = 0;
metabase$lib$core$coalesce.cljs$lang$applyTo = (function (arglist__80074){
var args__70829__auto__ = cljs.core.seq(arglist__80074);
return metabase$lib$core$coalesce__delegate(args__70829__auto__);
});
metabase$lib$core$coalesce.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$coalesce__delegate;
return metabase$lib$core$coalesce;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.abs = (function() { 
var metabase$lib$core$abs__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.abs,args__70829__auto__);
};
var metabase$lib$core$abs = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80075__i = 0, G__80075__a = new Array(arguments.length -  0);
while (G__80075__i < G__80075__a.length) {G__80075__a[G__80075__i] = arguments[G__80075__i + 0]; ++G__80075__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80075__a,0,null);
} 
return metabase$lib$core$abs__delegate.call(this,args__70829__auto__);};
metabase$lib$core$abs.cljs$lang$maxFixedArity = 0;
metabase$lib$core$abs.cljs$lang$applyTo = (function (arglist__80078){
var args__70829__auto__ = cljs.core.seq(arglist__80078);
return metabase$lib$core$abs__delegate(args__70829__auto__);
});
metabase$lib$core$abs.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$abs__delegate;
return metabase$lib$core$abs;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.log = (function() { 
var metabase$lib$core$log__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.log,args__70829__auto__);
};
var metabase$lib$core$log = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80079__i = 0, G__80079__a = new Array(arguments.length -  0);
while (G__80079__i < G__80079__a.length) {G__80079__a[G__80079__i] = arguments[G__80079__i + 0]; ++G__80079__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80079__a,0,null);
} 
return metabase$lib$core$log__delegate.call(this,args__70829__auto__);};
metabase$lib$core$log.cljs$lang$maxFixedArity = 0;
metabase$lib$core$log.cljs$lang$applyTo = (function (arglist__80080){
var args__70829__auto__ = cljs.core.seq(arglist__80080);
return metabase$lib$core$log__delegate(args__70829__auto__);
});
metabase$lib$core$log.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$log__delegate;
return metabase$lib$core$log;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.exp = (function() { 
var metabase$lib$core$exp__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.exp,args__70829__auto__);
};
var metabase$lib$core$exp = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80081__i = 0, G__80081__a = new Array(arguments.length -  0);
while (G__80081__i < G__80081__a.length) {G__80081__a[G__80081__i] = arguments[G__80081__i + 0]; ++G__80081__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80081__a,0,null);
} 
return metabase$lib$core$exp__delegate.call(this,args__70829__auto__);};
metabase$lib$core$exp.cljs$lang$maxFixedArity = 0;
metabase$lib$core$exp.cljs$lang$applyTo = (function (arglist__80082){
var args__70829__auto__ = cljs.core.seq(arglist__80082);
return metabase$lib$core$exp__delegate(args__70829__auto__);
});
metabase$lib$core$exp.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$exp__delegate;
return metabase$lib$core$exp;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.sqrt = (function() { 
var metabase$lib$core$sqrt__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.sqrt,args__70829__auto__);
};
var metabase$lib$core$sqrt = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80084__i = 0, G__80084__a = new Array(arguments.length -  0);
while (G__80084__i < G__80084__a.length) {G__80084__a[G__80084__i] = arguments[G__80084__i + 0]; ++G__80084__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80084__a,0,null);
} 
return metabase$lib$core$sqrt__delegate.call(this,args__70829__auto__);};
metabase$lib$core$sqrt.cljs$lang$maxFixedArity = 0;
metabase$lib$core$sqrt.cljs$lang$applyTo = (function (arglist__80085){
var args__70829__auto__ = cljs.core.seq(arglist__80085);
return metabase$lib$core$sqrt__delegate(args__70829__auto__);
});
metabase$lib$core$sqrt.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$sqrt__delegate;
return metabase$lib$core$sqrt;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.ceil = (function() { 
var metabase$lib$core$ceil__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.ceil,args__70829__auto__);
};
var metabase$lib$core$ceil = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80086__i = 0, G__80086__a = new Array(arguments.length -  0);
while (G__80086__i < G__80086__a.length) {G__80086__a[G__80086__i] = arguments[G__80086__i + 0]; ++G__80086__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80086__a,0,null);
} 
return metabase$lib$core$ceil__delegate.call(this,args__70829__auto__);};
metabase$lib$core$ceil.cljs$lang$maxFixedArity = 0;
metabase$lib$core$ceil.cljs$lang$applyTo = (function (arglist__80087){
var args__70829__auto__ = cljs.core.seq(arglist__80087);
return metabase$lib$core$ceil__delegate(args__70829__auto__);
});
metabase$lib$core$ceil.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$ceil__delegate;
return metabase$lib$core$ceil;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.floor = (function() { 
var metabase$lib$core$floor__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.floor,args__70829__auto__);
};
var metabase$lib$core$floor = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80088__i = 0, G__80088__a = new Array(arguments.length -  0);
while (G__80088__i < G__80088__a.length) {G__80088__a[G__80088__i] = arguments[G__80088__i + 0]; ++G__80088__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80088__a,0,null);
} 
return metabase$lib$core$floor__delegate.call(this,args__70829__auto__);};
metabase$lib$core$floor.cljs$lang$maxFixedArity = 0;
metabase$lib$core$floor.cljs$lang$applyTo = (function (arglist__80089){
var args__70829__auto__ = cljs.core.seq(arglist__80089);
return metabase$lib$core$floor__delegate(args__70829__auto__);
});
metabase$lib$core$floor.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$floor__delegate;
return metabase$lib$core$floor;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.round = (function() { 
var metabase$lib$core$round__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.round,args__70829__auto__);
};
var metabase$lib$core$round = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80090__i = 0, G__80090__a = new Array(arguments.length -  0);
while (G__80090__i < G__80090__a.length) {G__80090__a[G__80090__i] = arguments[G__80090__i + 0]; ++G__80090__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80090__a,0,null);
} 
return metabase$lib$core$round__delegate.call(this,args__70829__auto__);};
metabase$lib$core$round.cljs$lang$maxFixedArity = 0;
metabase$lib$core$round.cljs$lang$applyTo = (function (arglist__80091){
var args__70829__auto__ = cljs.core.seq(arglist__80091);
return metabase$lib$core$round__delegate(args__70829__auto__);
});
metabase$lib$core$round.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$round__delegate;
return metabase$lib$core$round;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.power = (function() { 
var metabase$lib$core$power__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.power,args__70829__auto__);
};
var metabase$lib$core$power = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80092__i = 0, G__80092__a = new Array(arguments.length -  0);
while (G__80092__i < G__80092__a.length) {G__80092__a[G__80092__i] = arguments[G__80092__i + 0]; ++G__80092__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80092__a,0,null);
} 
return metabase$lib$core$power__delegate.call(this,args__70829__auto__);};
metabase$lib$core$power.cljs$lang$maxFixedArity = 0;
metabase$lib$core$power.cljs$lang$applyTo = (function (arglist__80093){
var args__70829__auto__ = cljs.core.seq(arglist__80093);
return metabase$lib$core$power__delegate(args__70829__auto__);
});
metabase$lib$core$power.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$power__delegate;
return metabase$lib$core$power;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.interval = (function() { 
var metabase$lib$core$interval__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.interval,args__70829__auto__);
};
var metabase$lib$core$interval = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80095__i = 0, G__80095__a = new Array(arguments.length -  0);
while (G__80095__i < G__80095__a.length) {G__80095__a[G__80095__i] = arguments[G__80095__i + 0]; ++G__80095__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80095__a,0,null);
} 
return metabase$lib$core$interval__delegate.call(this,args__70829__auto__);};
metabase$lib$core$interval.cljs$lang$maxFixedArity = 0;
metabase$lib$core$interval.cljs$lang$applyTo = (function (arglist__80096){
var args__70829__auto__ = cljs.core.seq(arglist__80096);
return metabase$lib$core$interval__delegate(args__70829__auto__);
});
metabase$lib$core$interval.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$interval__delegate;
return metabase$lib$core$interval;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.relative_datetime = (function() { 
var metabase$lib$core$relative_datetime__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.relative_datetime,args__70829__auto__);
};
var metabase$lib$core$relative_datetime = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80097__i = 0, G__80097__a = new Array(arguments.length -  0);
while (G__80097__i < G__80097__a.length) {G__80097__a[G__80097__i] = arguments[G__80097__i + 0]; ++G__80097__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80097__a,0,null);
} 
return metabase$lib$core$relative_datetime__delegate.call(this,args__70829__auto__);};
metabase$lib$core$relative_datetime.cljs$lang$maxFixedArity = 0;
metabase$lib$core$relative_datetime.cljs$lang$applyTo = (function (arglist__80098){
var args__70829__auto__ = cljs.core.seq(arglist__80098);
return metabase$lib$core$relative_datetime__delegate(args__70829__auto__);
});
metabase$lib$core$relative_datetime.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$relative_datetime__delegate;
return metabase$lib$core$relative_datetime;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.time = (function() { 
var metabase$lib$core$time__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.time,args__70829__auto__);
};
var metabase$lib$core$time = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80100__i = 0, G__80100__a = new Array(arguments.length -  0);
while (G__80100__i < G__80100__a.length) {G__80100__a[G__80100__i] = arguments[G__80100__i + 0]; ++G__80100__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80100__a,0,null);
} 
return metabase$lib$core$time__delegate.call(this,args__70829__auto__);};
metabase$lib$core$time.cljs$lang$maxFixedArity = 0;
metabase$lib$core$time.cljs$lang$applyTo = (function (arglist__80101){
var args__70829__auto__ = cljs.core.seq(arglist__80101);
return metabase$lib$core$time__delegate(args__70829__auto__);
});
metabase$lib$core$time.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$time__delegate;
return metabase$lib$core$time;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.absolute_datetime = (function() { 
var metabase$lib$core$absolute_datetime__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.absolute_datetime,args__70829__auto__);
};
var metabase$lib$core$absolute_datetime = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80102__i = 0, G__80102__a = new Array(arguments.length -  0);
while (G__80102__i < G__80102__a.length) {G__80102__a[G__80102__i] = arguments[G__80102__i + 0]; ++G__80102__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80102__a,0,null);
} 
return metabase$lib$core$absolute_datetime__delegate.call(this,args__70829__auto__);};
metabase$lib$core$absolute_datetime.cljs$lang$maxFixedArity = 0;
metabase$lib$core$absolute_datetime.cljs$lang$applyTo = (function (arglist__80103){
var args__70829__auto__ = cljs.core.seq(arglist__80103);
return metabase$lib$core$absolute_datetime__delegate(args__70829__auto__);
});
metabase$lib$core$absolute_datetime.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$absolute_datetime__delegate;
return metabase$lib$core$absolute_datetime;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.now = (function() { 
var metabase$lib$core$now__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.now,args__70829__auto__);
};
var metabase$lib$core$now = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80105__i = 0, G__80105__a = new Array(arguments.length -  0);
while (G__80105__i < G__80105__a.length) {G__80105__a[G__80105__i] = arguments[G__80105__i + 0]; ++G__80105__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80105__a,0,null);
} 
return metabase$lib$core$now__delegate.call(this,args__70829__auto__);};
metabase$lib$core$now.cljs$lang$maxFixedArity = 0;
metabase$lib$core$now.cljs$lang$applyTo = (function (arglist__80106){
var args__70829__auto__ = cljs.core.seq(arglist__80106);
return metabase$lib$core$now__delegate(args__70829__auto__);
});
metabase$lib$core$now.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$now__delegate;
return metabase$lib$core$now;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.convert_timezone = (function() { 
var metabase$lib$core$convert_timezone__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.convert_timezone,args__70829__auto__);
};
var metabase$lib$core$convert_timezone = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80107__i = 0, G__80107__a = new Array(arguments.length -  0);
while (G__80107__i < G__80107__a.length) {G__80107__a[G__80107__i] = arguments[G__80107__i + 0]; ++G__80107__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80107__a,0,null);
} 
return metabase$lib$core$convert_timezone__delegate.call(this,args__70829__auto__);};
metabase$lib$core$convert_timezone.cljs$lang$maxFixedArity = 0;
metabase$lib$core$convert_timezone.cljs$lang$applyTo = (function (arglist__80109){
var args__70829__auto__ = cljs.core.seq(arglist__80109);
return metabase$lib$core$convert_timezone__delegate(args__70829__auto__);
});
metabase$lib$core$convert_timezone.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$convert_timezone__delegate;
return metabase$lib$core$convert_timezone;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_week = (function() { 
var metabase$lib$core$get_week__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_week,args__70829__auto__);
};
var metabase$lib$core$get_week = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80110__i = 0, G__80110__a = new Array(arguments.length -  0);
while (G__80110__i < G__80110__a.length) {G__80110__a[G__80110__i] = arguments[G__80110__i + 0]; ++G__80110__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80110__a,0,null);
} 
return metabase$lib$core$get_week__delegate.call(this,args__70829__auto__);};
metabase$lib$core$get_week.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_week.cljs$lang$applyTo = (function (arglist__80111){
var args__70829__auto__ = cljs.core.seq(arglist__80111);
return metabase$lib$core$get_week__delegate(args__70829__auto__);
});
metabase$lib$core$get_week.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_week__delegate;
return metabase$lib$core$get_week;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_year = (function() { 
var metabase$lib$core$get_year__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_year,args__70829__auto__);
};
var metabase$lib$core$get_year = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80112__i = 0, G__80112__a = new Array(arguments.length -  0);
while (G__80112__i < G__80112__a.length) {G__80112__a[G__80112__i] = arguments[G__80112__i + 0]; ++G__80112__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80112__a,0,null);
} 
return metabase$lib$core$get_year__delegate.call(this,args__70829__auto__);};
metabase$lib$core$get_year.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_year.cljs$lang$applyTo = (function (arglist__80113){
var args__70829__auto__ = cljs.core.seq(arglist__80113);
return metabase$lib$core$get_year__delegate(args__70829__auto__);
});
metabase$lib$core$get_year.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_year__delegate;
return metabase$lib$core$get_year;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_month = (function() { 
var metabase$lib$core$get_month__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_month,args__70829__auto__);
};
var metabase$lib$core$get_month = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80114__i = 0, G__80114__a = new Array(arguments.length -  0);
while (G__80114__i < G__80114__a.length) {G__80114__a[G__80114__i] = arguments[G__80114__i + 0]; ++G__80114__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80114__a,0,null);
} 
return metabase$lib$core$get_month__delegate.call(this,args__70829__auto__);};
metabase$lib$core$get_month.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_month.cljs$lang$applyTo = (function (arglist__80115){
var args__70829__auto__ = cljs.core.seq(arglist__80115);
return metabase$lib$core$get_month__delegate(args__70829__auto__);
});
metabase$lib$core$get_month.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_month__delegate;
return metabase$lib$core$get_month;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_day = (function() { 
var metabase$lib$core$get_day__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_day,args__70829__auto__);
};
var metabase$lib$core$get_day = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80116__i = 0, G__80116__a = new Array(arguments.length -  0);
while (G__80116__i < G__80116__a.length) {G__80116__a[G__80116__i] = arguments[G__80116__i + 0]; ++G__80116__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80116__a,0,null);
} 
return metabase$lib$core$get_day__delegate.call(this,args__70829__auto__);};
metabase$lib$core$get_day.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_day.cljs$lang$applyTo = (function (arglist__80117){
var args__70829__auto__ = cljs.core.seq(arglist__80117);
return metabase$lib$core$get_day__delegate(args__70829__auto__);
});
metabase$lib$core$get_day.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_day__delegate;
return metabase$lib$core$get_day;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_hour = (function() { 
var metabase$lib$core$get_hour__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_hour,args__70829__auto__);
};
var metabase$lib$core$get_hour = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80118__i = 0, G__80118__a = new Array(arguments.length -  0);
while (G__80118__i < G__80118__a.length) {G__80118__a[G__80118__i] = arguments[G__80118__i + 0]; ++G__80118__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80118__a,0,null);
} 
return metabase$lib$core$get_hour__delegate.call(this,args__70829__auto__);};
metabase$lib$core$get_hour.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_hour.cljs$lang$applyTo = (function (arglist__80119){
var args__70829__auto__ = cljs.core.seq(arglist__80119);
return metabase$lib$core$get_hour__delegate(args__70829__auto__);
});
metabase$lib$core$get_hour.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_hour__delegate;
return metabase$lib$core$get_hour;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_minute = (function() { 
var metabase$lib$core$get_minute__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_minute,args__70829__auto__);
};
var metabase$lib$core$get_minute = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80120__i = 0, G__80120__a = new Array(arguments.length -  0);
while (G__80120__i < G__80120__a.length) {G__80120__a[G__80120__i] = arguments[G__80120__i + 0]; ++G__80120__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80120__a,0,null);
} 
return metabase$lib$core$get_minute__delegate.call(this,args__70829__auto__);};
metabase$lib$core$get_minute.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_minute.cljs$lang$applyTo = (function (arglist__80121){
var args__70829__auto__ = cljs.core.seq(arglist__80121);
return metabase$lib$core$get_minute__delegate(args__70829__auto__);
});
metabase$lib$core$get_minute.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_minute__delegate;
return metabase$lib$core$get_minute;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_second = (function() { 
var metabase$lib$core$get_second__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_second,args__70829__auto__);
};
var metabase$lib$core$get_second = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80122__i = 0, G__80122__a = new Array(arguments.length -  0);
while (G__80122__i < G__80122__a.length) {G__80122__a[G__80122__i] = arguments[G__80122__i + 0]; ++G__80122__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80122__a,0,null);
} 
return metabase$lib$core$get_second__delegate.call(this,args__70829__auto__);};
metabase$lib$core$get_second.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_second.cljs$lang$applyTo = (function (arglist__80123){
var args__70829__auto__ = cljs.core.seq(arglist__80123);
return metabase$lib$core$get_second__delegate(args__70829__auto__);
});
metabase$lib$core$get_second.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_second__delegate;
return metabase$lib$core$get_second;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.get_quarter = (function() { 
var metabase$lib$core$get_quarter__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.get_quarter,args__70829__auto__);
};
var metabase$lib$core$get_quarter = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80124__i = 0, G__80124__a = new Array(arguments.length -  0);
while (G__80124__i < G__80124__a.length) {G__80124__a[G__80124__i] = arguments[G__80124__i + 0]; ++G__80124__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80124__a,0,null);
} 
return metabase$lib$core$get_quarter__delegate.call(this,args__70829__auto__);};
metabase$lib$core$get_quarter.cljs$lang$maxFixedArity = 0;
metabase$lib$core$get_quarter.cljs$lang$applyTo = (function (arglist__80125){
var args__70829__auto__ = cljs.core.seq(arglist__80125);
return metabase$lib$core$get_quarter__delegate(args__70829__auto__);
});
metabase$lib$core$get_quarter.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$get_quarter__delegate;
return metabase$lib$core$get_quarter;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.datetime_add = (function() { 
var metabase$lib$core$datetime_add__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.datetime_add,args__70829__auto__);
};
var metabase$lib$core$datetime_add = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80126__i = 0, G__80126__a = new Array(arguments.length -  0);
while (G__80126__i < G__80126__a.length) {G__80126__a[G__80126__i] = arguments[G__80126__i + 0]; ++G__80126__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80126__a,0,null);
} 
return metabase$lib$core$datetime_add__delegate.call(this,args__70829__auto__);};
metabase$lib$core$datetime_add.cljs$lang$maxFixedArity = 0;
metabase$lib$core$datetime_add.cljs$lang$applyTo = (function (arglist__80127){
var args__70829__auto__ = cljs.core.seq(arglist__80127);
return metabase$lib$core$datetime_add__delegate(args__70829__auto__);
});
metabase$lib$core$datetime_add.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$datetime_add__delegate;
return metabase$lib$core$datetime_add;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.datetime_subtract = (function() { 
var metabase$lib$core$datetime_subtract__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.datetime_subtract,args__70829__auto__);
};
var metabase$lib$core$datetime_subtract = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80128__i = 0, G__80128__a = new Array(arguments.length -  0);
while (G__80128__i < G__80128__a.length) {G__80128__a[G__80128__i] = arguments[G__80128__i + 0]; ++G__80128__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80128__a,0,null);
} 
return metabase$lib$core$datetime_subtract__delegate.call(this,args__70829__auto__);};
metabase$lib$core$datetime_subtract.cljs$lang$maxFixedArity = 0;
metabase$lib$core$datetime_subtract.cljs$lang$applyTo = (function (arglist__80129){
var args__70829__auto__ = cljs.core.seq(arglist__80129);
return metabase$lib$core$datetime_subtract__delegate(args__70829__auto__);
});
metabase$lib$core$datetime_subtract.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$datetime_subtract__delegate;
return metabase$lib$core$datetime_subtract;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.concat = (function() { 
var metabase$lib$core$concat__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.concat,args__70829__auto__);
};
var metabase$lib$core$concat = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80130__i = 0, G__80130__a = new Array(arguments.length -  0);
while (G__80130__i < G__80130__a.length) {G__80130__a[G__80130__i] = arguments[G__80130__i + 0]; ++G__80130__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80130__a,0,null);
} 
return metabase$lib$core$concat__delegate.call(this,args__70829__auto__);};
metabase$lib$core$concat.cljs$lang$maxFixedArity = 0;
metabase$lib$core$concat.cljs$lang$applyTo = (function (arglist__80131){
var args__70829__auto__ = cljs.core.seq(arglist__80131);
return metabase$lib$core$concat__delegate(args__70829__auto__);
});
metabase$lib$core$concat.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$concat__delegate;
return metabase$lib$core$concat;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.substring = (function() { 
var metabase$lib$core$substring__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.substring,args__70829__auto__);
};
var metabase$lib$core$substring = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80132__i = 0, G__80132__a = new Array(arguments.length -  0);
while (G__80132__i < G__80132__a.length) {G__80132__a[G__80132__i] = arguments[G__80132__i + 0]; ++G__80132__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80132__a,0,null);
} 
return metabase$lib$core$substring__delegate.call(this,args__70829__auto__);};
metabase$lib$core$substring.cljs$lang$maxFixedArity = 0;
metabase$lib$core$substring.cljs$lang$applyTo = (function (arglist__80133){
var args__70829__auto__ = cljs.core.seq(arglist__80133);
return metabase$lib$core$substring__delegate(args__70829__auto__);
});
metabase$lib$core$substring.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$substring__delegate;
return metabase$lib$core$substring;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.replace = (function() { 
var metabase$lib$core$replace__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.replace,args__70829__auto__);
};
var metabase$lib$core$replace = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80134__i = 0, G__80134__a = new Array(arguments.length -  0);
while (G__80134__i < G__80134__a.length) {G__80134__a[G__80134__i] = arguments[G__80134__i + 0]; ++G__80134__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80134__a,0,null);
} 
return metabase$lib$core$replace__delegate.call(this,args__70829__auto__);};
metabase$lib$core$replace.cljs$lang$maxFixedArity = 0;
metabase$lib$core$replace.cljs$lang$applyTo = (function (arglist__80135){
var args__70829__auto__ = cljs.core.seq(arglist__80135);
return metabase$lib$core$replace__delegate(args__70829__auto__);
});
metabase$lib$core$replace.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$replace__delegate;
return metabase$lib$core$replace;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.regexextract = (function() { 
var metabase$lib$core$regexextract__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.regexextract,args__70829__auto__);
};
var metabase$lib$core$regexextract = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80138__i = 0, G__80138__a = new Array(arguments.length -  0);
while (G__80138__i < G__80138__a.length) {G__80138__a[G__80138__i] = arguments[G__80138__i + 0]; ++G__80138__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80138__a,0,null);
} 
return metabase$lib$core$regexextract__delegate.call(this,args__70829__auto__);};
metabase$lib$core$regexextract.cljs$lang$maxFixedArity = 0;
metabase$lib$core$regexextract.cljs$lang$applyTo = (function (arglist__80139){
var args__70829__auto__ = cljs.core.seq(arglist__80139);
return metabase$lib$core$regexextract__delegate(args__70829__auto__);
});
metabase$lib$core$regexextract.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$regexextract__delegate;
return metabase$lib$core$regexextract;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.length = (function() { 
var metabase$lib$core$length__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.length,args__70829__auto__);
};
var metabase$lib$core$length = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80141__i = 0, G__80141__a = new Array(arguments.length -  0);
while (G__80141__i < G__80141__a.length) {G__80141__a[G__80141__i] = arguments[G__80141__i + 0]; ++G__80141__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80141__a,0,null);
} 
return metabase$lib$core$length__delegate.call(this,args__70829__auto__);};
metabase$lib$core$length.cljs$lang$maxFixedArity = 0;
metabase$lib$core$length.cljs$lang$applyTo = (function (arglist__80142){
var args__70829__auto__ = cljs.core.seq(arglist__80142);
return metabase$lib$core$length__delegate(args__70829__auto__);
});
metabase$lib$core$length.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$length__delegate;
return metabase$lib$core$length;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.trim = (function() { 
var metabase$lib$core$trim__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.trim,args__70829__auto__);
};
var metabase$lib$core$trim = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80143__i = 0, G__80143__a = new Array(arguments.length -  0);
while (G__80143__i < G__80143__a.length) {G__80143__a[G__80143__i] = arguments[G__80143__i + 0]; ++G__80143__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80143__a,0,null);
} 
return metabase$lib$core$trim__delegate.call(this,args__70829__auto__);};
metabase$lib$core$trim.cljs$lang$maxFixedArity = 0;
metabase$lib$core$trim.cljs$lang$applyTo = (function (arglist__80144){
var args__70829__auto__ = cljs.core.seq(arglist__80144);
return metabase$lib$core$trim__delegate(args__70829__auto__);
});
metabase$lib$core$trim.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$trim__delegate;
return metabase$lib$core$trim;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.ltrim = (function() { 
var metabase$lib$core$ltrim__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.ltrim,args__70829__auto__);
};
var metabase$lib$core$ltrim = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80145__i = 0, G__80145__a = new Array(arguments.length -  0);
while (G__80145__i < G__80145__a.length) {G__80145__a[G__80145__i] = arguments[G__80145__i + 0]; ++G__80145__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80145__a,0,null);
} 
return metabase$lib$core$ltrim__delegate.call(this,args__70829__auto__);};
metabase$lib$core$ltrim.cljs$lang$maxFixedArity = 0;
metabase$lib$core$ltrim.cljs$lang$applyTo = (function (arglist__80146){
var args__70829__auto__ = cljs.core.seq(arglist__80146);
return metabase$lib$core$ltrim__delegate(args__70829__auto__);
});
metabase$lib$core$ltrim.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$ltrim__delegate;
return metabase$lib$core$ltrim;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.rtrim = (function() { 
var metabase$lib$core$rtrim__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.rtrim,args__70829__auto__);
};
var metabase$lib$core$rtrim = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80147__i = 0, G__80147__a = new Array(arguments.length -  0);
while (G__80147__i < G__80147__a.length) {G__80147__a[G__80147__i] = arguments[G__80147__i + 0]; ++G__80147__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80147__a,0,null);
} 
return metabase$lib$core$rtrim__delegate.call(this,args__70829__auto__);};
metabase$lib$core$rtrim.cljs$lang$maxFixedArity = 0;
metabase$lib$core$rtrim.cljs$lang$applyTo = (function (arglist__80148){
var args__70829__auto__ = cljs.core.seq(arglist__80148);
return metabase$lib$core$rtrim__delegate(args__70829__auto__);
});
metabase$lib$core$rtrim.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$rtrim__delegate;
return metabase$lib$core$rtrim;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.upper = (function() { 
var metabase$lib$core$upper__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.upper,args__70829__auto__);
};
var metabase$lib$core$upper = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80149__i = 0, G__80149__a = new Array(arguments.length -  0);
while (G__80149__i < G__80149__a.length) {G__80149__a[G__80149__i] = arguments[G__80149__i + 0]; ++G__80149__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80149__a,0,null);
} 
return metabase$lib$core$upper__delegate.call(this,args__70829__auto__);};
metabase$lib$core$upper.cljs$lang$maxFixedArity = 0;
metabase$lib$core$upper.cljs$lang$applyTo = (function (arglist__80150){
var args__70829__auto__ = cljs.core.seq(arglist__80150);
return metabase$lib$core$upper__delegate(args__70829__auto__);
});
metabase$lib$core$upper.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$upper__delegate;
return metabase$lib$core$upper;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.lower = (function() { 
var metabase$lib$core$lower__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.lower,args__70829__auto__);
};
var metabase$lib$core$lower = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80151__i = 0, G__80151__a = new Array(arguments.length -  0);
while (G__80151__i < G__80151__a.length) {G__80151__a[G__80151__i] = arguments[G__80151__i + 0]; ++G__80151__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80151__a,0,null);
} 
return metabase$lib$core$lower__delegate.call(this,args__70829__auto__);};
metabase$lib$core$lower.cljs$lang$maxFixedArity = 0;
metabase$lib$core$lower.cljs$lang$applyTo = (function (arglist__80152){
var args__70829__auto__ = cljs.core.seq(arglist__80152);
return metabase$lib$core$lower__delegate(args__70829__auto__);
});
metabase$lib$core$lower.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$lower__delegate;
return metabase$lib$core$lower;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.offset = (function() { 
var metabase$lib$core$offset__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.offset,args__70829__auto__);
};
var metabase$lib$core$offset = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80153__i = 0, G__80153__a = new Array(arguments.length -  0);
while (G__80153__i < G__80153__a.length) {G__80153__a[G__80153__i] = arguments[G__80153__i + 0]; ++G__80153__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80153__a,0,null);
} 
return metabase$lib$core$offset__delegate.call(this,args__70829__auto__);};
metabase$lib$core$offset.cljs$lang$maxFixedArity = 0;
metabase$lib$core$offset.cljs$lang$applyTo = (function (arglist__80154){
var args__70829__auto__ = cljs.core.seq(arglist__80154);
return metabase$lib$core$offset__delegate(args__70829__auto__);
});
metabase$lib$core$offset.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$offset__delegate;
return metabase$lib$core$offset;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.column_extractions = (function() { 
var metabase$lib$core$column_extractions__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.extraction.column_extractions,args__70829__auto__);
};
var metabase$lib$core$column_extractions = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80155__i = 0, G__80155__a = new Array(arguments.length -  0);
while (G__80155__i < G__80155__a.length) {G__80155__a[G__80155__i] = arguments[G__80155__i + 0]; ++G__80155__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80155__a,0,null);
} 
return metabase$lib$core$column_extractions__delegate.call(this,args__70829__auto__);};
metabase$lib$core$column_extractions.cljs$lang$maxFixedArity = 0;
metabase$lib$core$column_extractions.cljs$lang$applyTo = (function (arglist__80156){
var args__70829__auto__ = cljs.core.seq(arglist__80156);
return metabase$lib$core$column_extractions__delegate(args__70829__auto__);
});
metabase$lib$core$column_extractions.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$column_extractions__delegate;
return metabase$lib$core$column_extractions;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.extract = (function() { 
var metabase$lib$core$extract__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.extraction.extract,args__70829__auto__);
};
var metabase$lib$core$extract = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80157__i = 0, G__80157__a = new Array(arguments.length -  0);
while (G__80157__i < G__80157__a.length) {G__80157__a[G__80157__i] = arguments[G__80157__i + 0]; ++G__80157__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80157__a,0,null);
} 
return metabase$lib$core$extract__delegate.call(this,args__70829__auto__);};
metabase$lib$core$extract.cljs$lang$maxFixedArity = 0;
metabase$lib$core$extract.cljs$lang$applyTo = (function (arglist__80158){
var args__70829__auto__ = cljs.core.seq(arglist__80158);
return metabase$lib$core$extract__delegate(args__70829__auto__);
});
metabase$lib$core$extract.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$extract__delegate;
return metabase$lib$core$extract;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.extraction_expression = (function() { 
var metabase$lib$core$extraction_expression__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.extraction.extraction_expression,args__70829__auto__);
};
var metabase$lib$core$extraction_expression = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80159__i = 0, G__80159__a = new Array(arguments.length -  0);
while (G__80159__i < G__80159__a.length) {G__80159__a[G__80159__i] = arguments[G__80159__i + 0]; ++G__80159__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80159__a,0,null);
} 
return metabase$lib$core$extraction_expression__delegate.call(this,args__70829__auto__);};
metabase$lib$core$extraction_expression.cljs$lang$maxFixedArity = 0;
metabase$lib$core$extraction_expression.cljs$lang$applyTo = (function (arglist__80160){
var args__70829__auto__ = cljs.core.seq(arglist__80160);
return metabase$lib$core$extraction_expression__delegate(args__70829__auto__);
});
metabase$lib$core$extraction_expression.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$extraction_expression__delegate;
return metabase$lib$core$extraction_expression;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.dependent_metadata = (function() { 
var metabase$lib$core$dependent_metadata__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.fe_util.dependent_metadata,args__70829__auto__);
};
var metabase$lib$core$dependent_metadata = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80161__i = 0, G__80161__a = new Array(arguments.length -  0);
while (G__80161__i < G__80161__a.length) {G__80161__a[G__80161__i] = arguments[G__80161__i + 0]; ++G__80161__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80161__a,0,null);
} 
return metabase$lib$core$dependent_metadata__delegate.call(this,args__70829__auto__);};
metabase$lib$core$dependent_metadata.cljs$lang$maxFixedArity = 0;
metabase$lib$core$dependent_metadata.cljs$lang$applyTo = (function (arglist__80162){
var args__70829__auto__ = cljs.core.seq(arglist__80162);
return metabase$lib$core$dependent_metadata__delegate(args__70829__auto__);
});
metabase$lib$core$dependent_metadata.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$dependent_metadata__delegate;
return metabase$lib$core$dependent_metadata;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.table_or_card_dependent_metadata = (function() { 
var metabase$lib$core$table_or_card_dependent_metadata__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.fe_util.table_or_card_dependent_metadata,args__70829__auto__);
};
var metabase$lib$core$table_or_card_dependent_metadata = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80163__i = 0, G__80163__a = new Array(arguments.length -  0);
while (G__80163__i < G__80163__a.length) {G__80163__a[G__80163__i] = arguments[G__80163__i + 0]; ++G__80163__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80163__a,0,null);
} 
return metabase$lib$core$table_or_card_dependent_metadata__delegate.call(this,args__70829__auto__);};
metabase$lib$core$table_or_card_dependent_metadata.cljs$lang$maxFixedArity = 0;
metabase$lib$core$table_or_card_dependent_metadata.cljs$lang$applyTo = (function (arglist__80164){
var args__70829__auto__ = cljs.core.seq(arglist__80164);
return metabase$lib$core$table_or_card_dependent_metadata__delegate(args__70829__auto__);
});
metabase$lib$core$table_or_card_dependent_metadata.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$table_or_card_dependent_metadata__delegate;
return metabase$lib$core$table_or_card_dependent_metadata;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expression_clause = (function() { 
var metabase$lib$core$expression_clause__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.fe_util.expression_clause,args__70829__auto__);
};
var metabase$lib$core$expression_clause = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80166__i = 0, G__80166__a = new Array(arguments.length -  0);
while (G__80166__i < G__80166__a.length) {G__80166__a[G__80166__i] = arguments[G__80166__i + 0]; ++G__80166__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80166__a,0,null);
} 
return metabase$lib$core$expression_clause__delegate.call(this,args__70829__auto__);};
metabase$lib$core$expression_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expression_clause.cljs$lang$applyTo = (function (arglist__80167){
var args__70829__auto__ = cljs.core.seq(arglist__80167);
return metabase$lib$core$expression_clause__delegate(args__70829__auto__);
});
metabase$lib$core$expression_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expression_clause__delegate;
return metabase$lib$core$expression_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.expression_parts = (function() { 
var metabase$lib$core$expression_parts__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.fe_util.expression_parts,args__70829__auto__);
};
var metabase$lib$core$expression_parts = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80168__i = 0, G__80168__a = new Array(arguments.length -  0);
while (G__80168__i < G__80168__a.length) {G__80168__a[G__80168__i] = arguments[G__80168__i + 0]; ++G__80168__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80168__a,0,null);
} 
return metabase$lib$core$expression_parts__delegate.call(this,args__70829__auto__);};
metabase$lib$core$expression_parts.cljs$lang$maxFixedArity = 0;
metabase$lib$core$expression_parts.cljs$lang$applyTo = (function (arglist__80169){
var args__70829__auto__ = cljs.core.seq(arglist__80169);
return metabase$lib$core$expression_parts__delegate(args__70829__auto__);
});
metabase$lib$core$expression_parts.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$expression_parts__delegate;
return metabase$lib$core$expression_parts;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filter_args_display_name = (function() { 
var metabase$lib$core$filter_args_display_name__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.fe_util.filter_args_display_name,args__70829__auto__);
};
var metabase$lib$core$filter_args_display_name = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80170__i = 0, G__80170__a = new Array(arguments.length -  0);
while (G__80170__i < G__80170__a.length) {G__80170__a[G__80170__i] = arguments[G__80170__i + 0]; ++G__80170__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80170__a,0,null);
} 
return metabase$lib$core$filter_args_display_name__delegate.call(this,args__70829__auto__);};
metabase$lib$core$filter_args_display_name.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filter_args_display_name.cljs$lang$applyTo = (function (arglist__80171){
var args__70829__auto__ = cljs.core.seq(arglist__80171);
return metabase$lib$core$filter_args_display_name__delegate(args__70829__auto__);
});
metabase$lib$core$filter_args_display_name.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filter_args_display_name__delegate;
return metabase$lib$core$filter_args_display_name;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.add_field = (function() { 
var metabase$lib$core$add_field__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.add_field,args__70829__auto__);
};
var metabase$lib$core$add_field = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80172__i = 0, G__80172__a = new Array(arguments.length -  0);
while (G__80172__i < G__80172__a.length) {G__80172__a[G__80172__i] = arguments[G__80172__i + 0]; ++G__80172__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80172__a,0,null);
} 
return metabase$lib$core$add_field__delegate.call(this,args__70829__auto__);};
metabase$lib$core$add_field.cljs$lang$maxFixedArity = 0;
metabase$lib$core$add_field.cljs$lang$applyTo = (function (arglist__80173){
var args__70829__auto__ = cljs.core.seq(arglist__80173);
return metabase$lib$core$add_field__delegate(args__70829__auto__);
});
metabase$lib$core$add_field.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$add_field__delegate;
return metabase$lib$core$add_field;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.fieldable_columns = (function() { 
var metabase$lib$core$fieldable_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.fieldable_columns,args__70829__auto__);
};
var metabase$lib$core$fieldable_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80174__i = 0, G__80174__a = new Array(arguments.length -  0);
while (G__80174__i < G__80174__a.length) {G__80174__a[G__80174__i] = arguments[G__80174__i + 0]; ++G__80174__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80174__a,0,null);
} 
return metabase$lib$core$fieldable_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$fieldable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$fieldable_columns.cljs$lang$applyTo = (function (arglist__80175){
var args__70829__auto__ = cljs.core.seq(arglist__80175);
return metabase$lib$core$fieldable_columns__delegate(args__70829__auto__);
});
metabase$lib$core$fieldable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$fieldable_columns__delegate;
return metabase$lib$core$fieldable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.fields = (function() { 
var metabase$lib$core$fields__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.fields,args__70829__auto__);
};
var metabase$lib$core$fields = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80176__i = 0, G__80176__a = new Array(arguments.length -  0);
while (G__80176__i < G__80176__a.length) {G__80176__a[G__80176__i] = arguments[G__80176__i + 0]; ++G__80176__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80176__a,0,null);
} 
return metabase$lib$core$fields__delegate.call(this,args__70829__auto__);};
metabase$lib$core$fields.cljs$lang$maxFixedArity = 0;
metabase$lib$core$fields.cljs$lang$applyTo = (function (arglist__80177){
var args__70829__auto__ = cljs.core.seq(arglist__80177);
return metabase$lib$core$fields__delegate(args__70829__auto__);
});
metabase$lib$core$fields.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$fields__delegate;
return metabase$lib$core$fields;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.find_visible_column_for_ref = (function() { 
var metabase$lib$core$find_visible_column_for_ref__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.find_visible_column_for_ref,args__70829__auto__);
};
var metabase$lib$core$find_visible_column_for_ref = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80178__i = 0, G__80178__a = new Array(arguments.length -  0);
while (G__80178__i < G__80178__a.length) {G__80178__a[G__80178__i] = arguments[G__80178__i + 0]; ++G__80178__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80178__a,0,null);
} 
return metabase$lib$core$find_visible_column_for_ref__delegate.call(this,args__70829__auto__);};
metabase$lib$core$find_visible_column_for_ref.cljs$lang$maxFixedArity = 0;
metabase$lib$core$find_visible_column_for_ref.cljs$lang$applyTo = (function (arglist__80179){
var args__70829__auto__ = cljs.core.seq(arglist__80179);
return metabase$lib$core$find_visible_column_for_ref__delegate(args__70829__auto__);
});
metabase$lib$core$find_visible_column_for_ref.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$find_visible_column_for_ref__delegate;
return metabase$lib$core$find_visible_column_for_ref;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.remove_field = (function() { 
var metabase$lib$core$remove_field__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.remove_field,args__70829__auto__);
};
var metabase$lib$core$remove_field = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80180__i = 0, G__80180__a = new Array(arguments.length -  0);
while (G__80180__i < G__80180__a.length) {G__80180__a[G__80180__i] = arguments[G__80180__i + 0]; ++G__80180__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80180__a,0,null);
} 
return metabase$lib$core$remove_field__delegate.call(this,args__70829__auto__);};
metabase$lib$core$remove_field.cljs$lang$maxFixedArity = 0;
metabase$lib$core$remove_field.cljs$lang$applyTo = (function (arglist__80182){
var args__70829__auto__ = cljs.core.seq(arglist__80182);
return metabase$lib$core$remove_field__delegate(args__70829__auto__);
});
metabase$lib$core$remove_field.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$remove_field__delegate;
return metabase$lib$core$remove_field;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_fields = (function() { 
var metabase$lib$core$with_fields__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.field.with_fields,args__70829__auto__);
};
var metabase$lib$core$with_fields = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80183__i = 0, G__80183__a = new Array(arguments.length -  0);
while (G__80183__i < G__80183__a.length) {G__80183__a[G__80183__i] = arguments[G__80183__i + 0]; ++G__80183__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80183__a,0,null);
} 
return metabase$lib$core$with_fields__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_fields.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_fields.cljs$lang$applyTo = (function (arglist__80184){
var args__70829__auto__ = cljs.core.seq(arglist__80184);
return metabase$lib$core$with_fields__delegate(args__70829__auto__);
});
metabase$lib$core$with_fields.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_fields__delegate;
return metabase$lib$core$with_fields;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filter = (function() { 
var metabase$lib$core$filter__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filter,args__70829__auto__);
};
var metabase$lib$core$filter = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80185__i = 0, G__80185__a = new Array(arguments.length -  0);
while (G__80185__i < G__80185__a.length) {G__80185__a[G__80185__i] = arguments[G__80185__i + 0]; ++G__80185__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80185__a,0,null);
} 
return metabase$lib$core$filter__delegate.call(this,args__70829__auto__);};
metabase$lib$core$filter.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filter.cljs$lang$applyTo = (function (arglist__80186){
var args__70829__auto__ = cljs.core.seq(arglist__80186);
return metabase$lib$core$filter__delegate(args__70829__auto__);
});
metabase$lib$core$filter.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filter__delegate;
return metabase$lib$core$filter;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filters = (function() { 
var metabase$lib$core$filters__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filters,args__70829__auto__);
};
var metabase$lib$core$filters = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80187__i = 0, G__80187__a = new Array(arguments.length -  0);
while (G__80187__i < G__80187__a.length) {G__80187__a[G__80187__i] = arguments[G__80187__i + 0]; ++G__80187__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80187__a,0,null);
} 
return metabase$lib$core$filters__delegate.call(this,args__70829__auto__);};
metabase$lib$core$filters.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filters.cljs$lang$applyTo = (function (arglist__80188){
var args__70829__auto__ = cljs.core.seq(arglist__80188);
return metabase$lib$core$filters__delegate(args__70829__auto__);
});
metabase$lib$core$filters.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filters__delegate;
return metabase$lib$core$filters;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filterable_columns = (function() { 
var metabase$lib$core$filterable_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filterable_columns,args__70829__auto__);
};
var metabase$lib$core$filterable_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80189__i = 0, G__80189__a = new Array(arguments.length -  0);
while (G__80189__i < G__80189__a.length) {G__80189__a[G__80189__i] = arguments[G__80189__i + 0]; ++G__80189__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80189__a,0,null);
} 
return metabase$lib$core$filterable_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$filterable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filterable_columns.cljs$lang$applyTo = (function (arglist__80190){
var args__70829__auto__ = cljs.core.seq(arglist__80190);
return metabase$lib$core$filterable_columns__delegate(args__70829__auto__);
});
metabase$lib$core$filterable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filterable_columns__delegate;
return metabase$lib$core$filterable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filterable_column_operators = (function() { 
var metabase$lib$core$filterable_column_operators__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filterable_column_operators,args__70829__auto__);
};
var metabase$lib$core$filterable_column_operators = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80191__i = 0, G__80191__a = new Array(arguments.length -  0);
while (G__80191__i < G__80191__a.length) {G__80191__a[G__80191__i] = arguments[G__80191__i + 0]; ++G__80191__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80191__a,0,null);
} 
return metabase$lib$core$filterable_column_operators__delegate.call(this,args__70829__auto__);};
metabase$lib$core$filterable_column_operators.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filterable_column_operators.cljs$lang$applyTo = (function (arglist__80192){
var args__70829__auto__ = cljs.core.seq(arglist__80192);
return metabase$lib$core$filterable_column_operators__delegate(args__70829__auto__);
});
metabase$lib$core$filterable_column_operators.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filterable_column_operators__delegate;
return metabase$lib$core$filterable_column_operators;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filter_clause = (function() { 
var metabase$lib$core$filter_clause__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filter_clause,args__70829__auto__);
};
var metabase$lib$core$filter_clause = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80193__i = 0, G__80193__a = new Array(arguments.length -  0);
while (G__80193__i < G__80193__a.length) {G__80193__a[G__80193__i] = arguments[G__80193__i + 0]; ++G__80193__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80193__a,0,null);
} 
return metabase$lib$core$filter_clause__delegate.call(this,args__70829__auto__);};
metabase$lib$core$filter_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filter_clause.cljs$lang$applyTo = (function (arglist__80194){
var args__70829__auto__ = cljs.core.seq(arglist__80194);
return metabase$lib$core$filter_clause__delegate(args__70829__auto__);
});
metabase$lib$core$filter_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filter_clause__delegate;
return metabase$lib$core$filter_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filter_operator = (function() { 
var metabase$lib$core$filter_operator__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filter_operator,args__70829__auto__);
};
var metabase$lib$core$filter_operator = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80195__i = 0, G__80195__a = new Array(arguments.length -  0);
while (G__80195__i < G__80195__a.length) {G__80195__a[G__80195__i] = arguments[G__80195__i + 0]; ++G__80195__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80195__a,0,null);
} 
return metabase$lib$core$filter_operator__delegate.call(this,args__70829__auto__);};
metabase$lib$core$filter_operator.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filter_operator.cljs$lang$applyTo = (function (arglist__80196){
var args__70829__auto__ = cljs.core.seq(arglist__80196);
return metabase$lib$core$filter_operator__delegate(args__70829__auto__);
});
metabase$lib$core$filter_operator.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filter_operator__delegate;
return metabase$lib$core$filter_operator;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.filter_parts = (function() { 
var metabase$lib$core$filter_parts__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.filter_parts,args__70829__auto__);
};
var metabase$lib$core$filter_parts = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80197__i = 0, G__80197__a = new Array(arguments.length -  0);
while (G__80197__i < G__80197__a.length) {G__80197__a[G__80197__i] = arguments[G__80197__i + 0]; ++G__80197__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80197__a,0,null);
} 
return metabase$lib$core$filter_parts__delegate.call(this,args__70829__auto__);};
metabase$lib$core$filter_parts.cljs$lang$maxFixedArity = 0;
metabase$lib$core$filter_parts.cljs$lang$applyTo = (function (arglist__80198){
var args__70829__auto__ = cljs.core.seq(arglist__80198);
return metabase$lib$core$filter_parts__delegate(args__70829__auto__);
});
metabase$lib$core$filter_parts.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$filter_parts__delegate;
return metabase$lib$core$filter_parts;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.find_filter_for_legacy_filter = (function() { 
var metabase$lib$core$find_filter_for_legacy_filter__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.find_filter_for_legacy_filter,args__70829__auto__);
};
var metabase$lib$core$find_filter_for_legacy_filter = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80199__i = 0, G__80199__a = new Array(arguments.length -  0);
while (G__80199__i < G__80199__a.length) {G__80199__a[G__80199__i] = arguments[G__80199__i + 0]; ++G__80199__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80199__a,0,null);
} 
return metabase$lib$core$find_filter_for_legacy_filter__delegate.call(this,args__70829__auto__);};
metabase$lib$core$find_filter_for_legacy_filter.cljs$lang$maxFixedArity = 0;
metabase$lib$core$find_filter_for_legacy_filter.cljs$lang$applyTo = (function (arglist__80200){
var args__70829__auto__ = cljs.core.seq(arglist__80200);
return metabase$lib$core$find_filter_for_legacy_filter__delegate(args__70829__auto__);
});
metabase$lib$core$find_filter_for_legacy_filter.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$find_filter_for_legacy_filter__delegate;
return metabase$lib$core$find_filter_for_legacy_filter;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.find_filterable_column_for_legacy_ref = (function() { 
var metabase$lib$core$find_filterable_column_for_legacy_ref__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.find_filterable_column_for_legacy_ref,args__70829__auto__);
};
var metabase$lib$core$find_filterable_column_for_legacy_ref = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80201__i = 0, G__80201__a = new Array(arguments.length -  0);
while (G__80201__i < G__80201__a.length) {G__80201__a[G__80201__i] = arguments[G__80201__i + 0]; ++G__80201__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80201__a,0,null);
} 
return metabase$lib$core$find_filterable_column_for_legacy_ref__delegate.call(this,args__70829__auto__);};
metabase$lib$core$find_filterable_column_for_legacy_ref.cljs$lang$maxFixedArity = 0;
metabase$lib$core$find_filterable_column_for_legacy_ref.cljs$lang$applyTo = (function (arglist__80202){
var args__70829__auto__ = cljs.core.seq(arglist__80202);
return metabase$lib$core$find_filterable_column_for_legacy_ref__delegate(args__70829__auto__);
});
metabase$lib$core$find_filterable_column_for_legacy_ref.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$find_filterable_column_for_legacy_ref__delegate;
return metabase$lib$core$find_filterable_column_for_legacy_ref;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.and = (function() { 
var metabase$lib$core$and__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.and,args__70829__auto__);
};
var metabase$lib$core$and = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80203__i = 0, G__80203__a = new Array(arguments.length -  0);
while (G__80203__i < G__80203__a.length) {G__80203__a[G__80203__i] = arguments[G__80203__i + 0]; ++G__80203__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80203__a,0,null);
} 
return metabase$lib$core$and__delegate.call(this,args__70829__auto__);};
metabase$lib$core$and.cljs$lang$maxFixedArity = 0;
metabase$lib$core$and.cljs$lang$applyTo = (function (arglist__80204){
var args__70829__auto__ = cljs.core.seq(arglist__80204);
return metabase$lib$core$and__delegate(args__70829__auto__);
});
metabase$lib$core$and.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$and__delegate;
return metabase$lib$core$and;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.or = (function() { 
var metabase$lib$core$or__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.or,args__70829__auto__);
};
var metabase$lib$core$or = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80205__i = 0, G__80205__a = new Array(arguments.length -  0);
while (G__80205__i < G__80205__a.length) {G__80205__a[G__80205__i] = arguments[G__80205__i + 0]; ++G__80205__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80205__a,0,null);
} 
return metabase$lib$core$or__delegate.call(this,args__70829__auto__);};
metabase$lib$core$or.cljs$lang$maxFixedArity = 0;
metabase$lib$core$or.cljs$lang$applyTo = (function (arglist__80206){
var args__70829__auto__ = cljs.core.seq(arglist__80206);
return metabase$lib$core$or__delegate(args__70829__auto__);
});
metabase$lib$core$or.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$or__delegate;
return metabase$lib$core$or;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.not = (function() { 
var metabase$lib$core$not__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.not,args__70829__auto__);
};
var metabase$lib$core$not = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80207__i = 0, G__80207__a = new Array(arguments.length -  0);
while (G__80207__i < G__80207__a.length) {G__80207__a[G__80207__i] = arguments[G__80207__i + 0]; ++G__80207__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80207__a,0,null);
} 
return metabase$lib$core$not__delegate.call(this,args__70829__auto__);};
metabase$lib$core$not.cljs$lang$maxFixedArity = 0;
metabase$lib$core$not.cljs$lang$applyTo = (function (arglist__80208){
var args__70829__auto__ = cljs.core.seq(arglist__80208);
return metabase$lib$core$not__delegate(args__70829__auto__);
});
metabase$lib$core$not.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$not__delegate;
return metabase$lib$core$not;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._EQ_ = (function() { 
var metabase$lib$core$_EQ___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._EQ_,args__70829__auto__);
};
var metabase$lib$core$_EQ_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80209__i = 0, G__80209__a = new Array(arguments.length -  0);
while (G__80209__i < G__80209__a.length) {G__80209__a[G__80209__i] = arguments[G__80209__i + 0]; ++G__80209__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80209__a,0,null);
} 
return metabase$lib$core$_EQ___delegate.call(this,args__70829__auto__);};
metabase$lib$core$_EQ_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_EQ_.cljs$lang$applyTo = (function (arglist__80210){
var args__70829__auto__ = cljs.core.seq(arglist__80210);
return metabase$lib$core$_EQ___delegate(args__70829__auto__);
});
metabase$lib$core$_EQ_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_EQ___delegate;
return metabase$lib$core$_EQ_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._BANG__EQ_ = (function() { 
var metabase$lib$core$_BANG__EQ___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._BANG__EQ_,args__70829__auto__);
};
var metabase$lib$core$_BANG__EQ_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80211__i = 0, G__80211__a = new Array(arguments.length -  0);
while (G__80211__i < G__80211__a.length) {G__80211__a[G__80211__i] = arguments[G__80211__i + 0]; ++G__80211__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80211__a,0,null);
} 
return metabase$lib$core$_BANG__EQ___delegate.call(this,args__70829__auto__);};
metabase$lib$core$_BANG__EQ_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_BANG__EQ_.cljs$lang$applyTo = (function (arglist__80212){
var args__70829__auto__ = cljs.core.seq(arglist__80212);
return metabase$lib$core$_BANG__EQ___delegate(args__70829__auto__);
});
metabase$lib$core$_BANG__EQ_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_BANG__EQ___delegate;
return metabase$lib$core$_BANG__EQ_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._LT_ = (function() { 
var metabase$lib$core$_LT___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._LT_,args__70829__auto__);
};
var metabase$lib$core$_LT_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80213__i = 0, G__80213__a = new Array(arguments.length -  0);
while (G__80213__i < G__80213__a.length) {G__80213__a[G__80213__i] = arguments[G__80213__i + 0]; ++G__80213__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80213__a,0,null);
} 
return metabase$lib$core$_LT___delegate.call(this,args__70829__auto__);};
metabase$lib$core$_LT_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_LT_.cljs$lang$applyTo = (function (arglist__80216){
var args__70829__auto__ = cljs.core.seq(arglist__80216);
return metabase$lib$core$_LT___delegate(args__70829__auto__);
});
metabase$lib$core$_LT_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_LT___delegate;
return metabase$lib$core$_LT_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._LT__EQ_ = (function() { 
var metabase$lib$core$_LT__EQ___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._LT__EQ_,args__70829__auto__);
};
var metabase$lib$core$_LT__EQ_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80218__i = 0, G__80218__a = new Array(arguments.length -  0);
while (G__80218__i < G__80218__a.length) {G__80218__a[G__80218__i] = arguments[G__80218__i + 0]; ++G__80218__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80218__a,0,null);
} 
return metabase$lib$core$_LT__EQ___delegate.call(this,args__70829__auto__);};
metabase$lib$core$_LT__EQ_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_LT__EQ_.cljs$lang$applyTo = (function (arglist__80219){
var args__70829__auto__ = cljs.core.seq(arglist__80219);
return metabase$lib$core$_LT__EQ___delegate(args__70829__auto__);
});
metabase$lib$core$_LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_LT__EQ___delegate;
return metabase$lib$core$_LT__EQ_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._GT_ = (function() { 
var metabase$lib$core$_GT___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._GT_,args__70829__auto__);
};
var metabase$lib$core$_GT_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80220__i = 0, G__80220__a = new Array(arguments.length -  0);
while (G__80220__i < G__80220__a.length) {G__80220__a[G__80220__i] = arguments[G__80220__i + 0]; ++G__80220__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80220__a,0,null);
} 
return metabase$lib$core$_GT___delegate.call(this,args__70829__auto__);};
metabase$lib$core$_GT_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_GT_.cljs$lang$applyTo = (function (arglist__80221){
var args__70829__auto__ = cljs.core.seq(arglist__80221);
return metabase$lib$core$_GT___delegate(args__70829__auto__);
});
metabase$lib$core$_GT_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_GT___delegate;
return metabase$lib$core$_GT_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core._GT__EQ_ = (function() { 
var metabase$lib$core$_GT__EQ___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter._GT__EQ_,args__70829__auto__);
};
var metabase$lib$core$_GT__EQ_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80222__i = 0, G__80222__a = new Array(arguments.length -  0);
while (G__80222__i < G__80222__a.length) {G__80222__a[G__80222__i] = arguments[G__80222__i + 0]; ++G__80222__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80222__a,0,null);
} 
return metabase$lib$core$_GT__EQ___delegate.call(this,args__70829__auto__);};
metabase$lib$core$_GT__EQ_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$_GT__EQ_.cljs$lang$applyTo = (function (arglist__80223){
var args__70829__auto__ = cljs.core.seq(arglist__80223);
return metabase$lib$core$_GT__EQ___delegate(args__70829__auto__);
});
metabase$lib$core$_GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$_GT__EQ___delegate;
return metabase$lib$core$_GT__EQ_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.between = (function() { 
var metabase$lib$core$between__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.between,args__70829__auto__);
};
var metabase$lib$core$between = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80224__i = 0, G__80224__a = new Array(arguments.length -  0);
while (G__80224__i < G__80224__a.length) {G__80224__a[G__80224__i] = arguments[G__80224__i + 0]; ++G__80224__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80224__a,0,null);
} 
return metabase$lib$core$between__delegate.call(this,args__70829__auto__);};
metabase$lib$core$between.cljs$lang$maxFixedArity = 0;
metabase$lib$core$between.cljs$lang$applyTo = (function (arglist__80225){
var args__70829__auto__ = cljs.core.seq(arglist__80225);
return metabase$lib$core$between__delegate(args__70829__auto__);
});
metabase$lib$core$between.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$between__delegate;
return metabase$lib$core$between;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.inside = (function() { 
var metabase$lib$core$inside__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.inside,args__70829__auto__);
};
var metabase$lib$core$inside = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80226__i = 0, G__80226__a = new Array(arguments.length -  0);
while (G__80226__i < G__80226__a.length) {G__80226__a[G__80226__i] = arguments[G__80226__i + 0]; ++G__80226__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80226__a,0,null);
} 
return metabase$lib$core$inside__delegate.call(this,args__70829__auto__);};
metabase$lib$core$inside.cljs$lang$maxFixedArity = 0;
metabase$lib$core$inside.cljs$lang$applyTo = (function (arglist__80227){
var args__70829__auto__ = cljs.core.seq(arglist__80227);
return metabase$lib$core$inside__delegate(args__70829__auto__);
});
metabase$lib$core$inside.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$inside__delegate;
return metabase$lib$core$inside;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.is_null = (function() { 
var metabase$lib$core$is_null__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.is_null,args__70829__auto__);
};
var metabase$lib$core$is_null = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80228__i = 0, G__80228__a = new Array(arguments.length -  0);
while (G__80228__i < G__80228__a.length) {G__80228__a[G__80228__i] = arguments[G__80228__i + 0]; ++G__80228__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80228__a,0,null);
} 
return metabase$lib$core$is_null__delegate.call(this,args__70829__auto__);};
metabase$lib$core$is_null.cljs$lang$maxFixedArity = 0;
metabase$lib$core$is_null.cljs$lang$applyTo = (function (arglist__80229){
var args__70829__auto__ = cljs.core.seq(arglist__80229);
return metabase$lib$core$is_null__delegate(args__70829__auto__);
});
metabase$lib$core$is_null.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$is_null__delegate;
return metabase$lib$core$is_null;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.not_null = (function() { 
var metabase$lib$core$not_null__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.not_null,args__70829__auto__);
};
var metabase$lib$core$not_null = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80230__i = 0, G__80230__a = new Array(arguments.length -  0);
while (G__80230__i < G__80230__a.length) {G__80230__a[G__80230__i] = arguments[G__80230__i + 0]; ++G__80230__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80230__a,0,null);
} 
return metabase$lib$core$not_null__delegate.call(this,args__70829__auto__);};
metabase$lib$core$not_null.cljs$lang$maxFixedArity = 0;
metabase$lib$core$not_null.cljs$lang$applyTo = (function (arglist__80231){
var args__70829__auto__ = cljs.core.seq(arglist__80231);
return metabase$lib$core$not_null__delegate(args__70829__auto__);
});
metabase$lib$core$not_null.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$not_null__delegate;
return metabase$lib$core$not_null;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.is_empty = (function() { 
var metabase$lib$core$is_empty__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.is_empty,args__70829__auto__);
};
var metabase$lib$core$is_empty = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80232__i = 0, G__80232__a = new Array(arguments.length -  0);
while (G__80232__i < G__80232__a.length) {G__80232__a[G__80232__i] = arguments[G__80232__i + 0]; ++G__80232__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80232__a,0,null);
} 
return metabase$lib$core$is_empty__delegate.call(this,args__70829__auto__);};
metabase$lib$core$is_empty.cljs$lang$maxFixedArity = 0;
metabase$lib$core$is_empty.cljs$lang$applyTo = (function (arglist__80233){
var args__70829__auto__ = cljs.core.seq(arglist__80233);
return metabase$lib$core$is_empty__delegate(args__70829__auto__);
});
metabase$lib$core$is_empty.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$is_empty__delegate;
return metabase$lib$core$is_empty;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.not_empty = (function() { 
var metabase$lib$core$not_empty__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.not_empty,args__70829__auto__);
};
var metabase$lib$core$not_empty = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80234__i = 0, G__80234__a = new Array(arguments.length -  0);
while (G__80234__i < G__80234__a.length) {G__80234__a[G__80234__i] = arguments[G__80234__i + 0]; ++G__80234__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80234__a,0,null);
} 
return metabase$lib$core$not_empty__delegate.call(this,args__70829__auto__);};
metabase$lib$core$not_empty.cljs$lang$maxFixedArity = 0;
metabase$lib$core$not_empty.cljs$lang$applyTo = (function (arglist__80235){
var args__70829__auto__ = cljs.core.seq(arglist__80235);
return metabase$lib$core$not_empty__delegate(args__70829__auto__);
});
metabase$lib$core$not_empty.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$not_empty__delegate;
return metabase$lib$core$not_empty;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.starts_with = (function() { 
var metabase$lib$core$starts_with__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.starts_with,args__70829__auto__);
};
var metabase$lib$core$starts_with = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80236__i = 0, G__80236__a = new Array(arguments.length -  0);
while (G__80236__i < G__80236__a.length) {G__80236__a[G__80236__i] = arguments[G__80236__i + 0]; ++G__80236__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80236__a,0,null);
} 
return metabase$lib$core$starts_with__delegate.call(this,args__70829__auto__);};
metabase$lib$core$starts_with.cljs$lang$maxFixedArity = 0;
metabase$lib$core$starts_with.cljs$lang$applyTo = (function (arglist__80237){
var args__70829__auto__ = cljs.core.seq(arglist__80237);
return metabase$lib$core$starts_with__delegate(args__70829__auto__);
});
metabase$lib$core$starts_with.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$starts_with__delegate;
return metabase$lib$core$starts_with;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.ends_with = (function() { 
var metabase$lib$core$ends_with__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.ends_with,args__70829__auto__);
};
var metabase$lib$core$ends_with = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80238__i = 0, G__80238__a = new Array(arguments.length -  0);
while (G__80238__i < G__80238__a.length) {G__80238__a[G__80238__i] = arguments[G__80238__i + 0]; ++G__80238__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80238__a,0,null);
} 
return metabase$lib$core$ends_with__delegate.call(this,args__70829__auto__);};
metabase$lib$core$ends_with.cljs$lang$maxFixedArity = 0;
metabase$lib$core$ends_with.cljs$lang$applyTo = (function (arglist__80239){
var args__70829__auto__ = cljs.core.seq(arglist__80239);
return metabase$lib$core$ends_with__delegate(args__70829__auto__);
});
metabase$lib$core$ends_with.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$ends_with__delegate;
return metabase$lib$core$ends_with;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.contains = (function() { 
var metabase$lib$core$contains__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.contains,args__70829__auto__);
};
var metabase$lib$core$contains = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80240__i = 0, G__80240__a = new Array(arguments.length -  0);
while (G__80240__i < G__80240__a.length) {G__80240__a[G__80240__i] = arguments[G__80240__i + 0]; ++G__80240__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80240__a,0,null);
} 
return metabase$lib$core$contains__delegate.call(this,args__70829__auto__);};
metabase$lib$core$contains.cljs$lang$maxFixedArity = 0;
metabase$lib$core$contains.cljs$lang$applyTo = (function (arglist__80241){
var args__70829__auto__ = cljs.core.seq(arglist__80241);
return metabase$lib$core$contains__delegate(args__70829__auto__);
});
metabase$lib$core$contains.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$contains__delegate;
return metabase$lib$core$contains;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.does_not_contain = (function() { 
var metabase$lib$core$does_not_contain__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.does_not_contain,args__70829__auto__);
};
var metabase$lib$core$does_not_contain = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80242__i = 0, G__80242__a = new Array(arguments.length -  0);
while (G__80242__i < G__80242__a.length) {G__80242__a[G__80242__i] = arguments[G__80242__i + 0]; ++G__80242__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80242__a,0,null);
} 
return metabase$lib$core$does_not_contain__delegate.call(this,args__70829__auto__);};
metabase$lib$core$does_not_contain.cljs$lang$maxFixedArity = 0;
metabase$lib$core$does_not_contain.cljs$lang$applyTo = (function (arglist__80243){
var args__70829__auto__ = cljs.core.seq(arglist__80243);
return metabase$lib$core$does_not_contain__delegate(args__70829__auto__);
});
metabase$lib$core$does_not_contain.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$does_not_contain__delegate;
return metabase$lib$core$does_not_contain;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.time_interval = (function() { 
var metabase$lib$core$time_interval__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.time_interval,args__70829__auto__);
};
var metabase$lib$core$time_interval = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80244__i = 0, G__80244__a = new Array(arguments.length -  0);
while (G__80244__i < G__80244__a.length) {G__80244__a[G__80244__i] = arguments[G__80244__i + 0]; ++G__80244__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80244__a,0,null);
} 
return metabase$lib$core$time_interval__delegate.call(this,args__70829__auto__);};
metabase$lib$core$time_interval.cljs$lang$maxFixedArity = 0;
metabase$lib$core$time_interval.cljs$lang$applyTo = (function (arglist__80245){
var args__70829__auto__ = cljs.core.seq(arglist__80245);
return metabase$lib$core$time_interval__delegate(args__70829__auto__);
});
metabase$lib$core$time_interval.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$time_interval__delegate;
return metabase$lib$core$time_interval;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.segment = (function() { 
var metabase$lib$core$segment__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.segment,args__70829__auto__);
};
var metabase$lib$core$segment = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80246__i = 0, G__80246__a = new Array(arguments.length -  0);
while (G__80246__i < G__80246__a.length) {G__80246__a[G__80246__i] = arguments[G__80246__i + 0]; ++G__80246__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80246__a,0,null);
} 
return metabase$lib$core$segment__delegate.call(this,args__70829__auto__);};
metabase$lib$core$segment.cljs$lang$maxFixedArity = 0;
metabase$lib$core$segment.cljs$lang$applyTo = (function (arglist__80247){
var args__70829__auto__ = cljs.core.seq(arglist__80247);
return metabase$lib$core$segment__delegate(args__70829__auto__);
});
metabase$lib$core$segment.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$segment__delegate;
return metabase$lib$core$segment;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.update_lat_lon_filter = (function() { 
var metabase$lib$core$update_lat_lon_filter__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.update.update_lat_lon_filter,args__70829__auto__);
};
var metabase$lib$core$update_lat_lon_filter = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80248__i = 0, G__80248__a = new Array(arguments.length -  0);
while (G__80248__i < G__80248__a.length) {G__80248__a[G__80248__i] = arguments[G__80248__i + 0]; ++G__80248__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80248__a,0,null);
} 
return metabase$lib$core$update_lat_lon_filter__delegate.call(this,args__70829__auto__);};
metabase$lib$core$update_lat_lon_filter.cljs$lang$maxFixedArity = 0;
metabase$lib$core$update_lat_lon_filter.cljs$lang$applyTo = (function (arglist__80249){
var args__70829__auto__ = cljs.core.seq(arglist__80249);
return metabase$lib$core$update_lat_lon_filter__delegate(args__70829__auto__);
});
metabase$lib$core$update_lat_lon_filter.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$update_lat_lon_filter__delegate;
return metabase$lib$core$update_lat_lon_filter;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.update_numeric_filter = (function() { 
var metabase$lib$core$update_numeric_filter__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.update.update_numeric_filter,args__70829__auto__);
};
var metabase$lib$core$update_numeric_filter = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80250__i = 0, G__80250__a = new Array(arguments.length -  0);
while (G__80250__i < G__80250__a.length) {G__80250__a[G__80250__i] = arguments[G__80250__i + 0]; ++G__80250__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80250__a,0,null);
} 
return metabase$lib$core$update_numeric_filter__delegate.call(this,args__70829__auto__);};
metabase$lib$core$update_numeric_filter.cljs$lang$maxFixedArity = 0;
metabase$lib$core$update_numeric_filter.cljs$lang$applyTo = (function (arglist__80251){
var args__70829__auto__ = cljs.core.seq(arglist__80251);
return metabase$lib$core$update_numeric_filter__delegate(args__70829__auto__);
});
metabase$lib$core$update_numeric_filter.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$update_numeric_filter__delegate;
return metabase$lib$core$update_numeric_filter;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.update_temporal_filter = (function() { 
var metabase$lib$core$update_temporal_filter__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.filter.update.update_temporal_filter,args__70829__auto__);
};
var metabase$lib$core$update_temporal_filter = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80252__i = 0, G__80252__a = new Array(arguments.length -  0);
while (G__80252__i < G__80252__a.length) {G__80252__a[G__80252__i] = arguments[G__80252__i + 0]; ++G__80252__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80252__a,0,null);
} 
return metabase$lib$core$update_temporal_filter__delegate.call(this,args__70829__auto__);};
metabase$lib$core$update_temporal_filter.cljs$lang$maxFixedArity = 0;
metabase$lib$core$update_temporal_filter.cljs$lang$applyTo = (function (arglist__80253){
var args__70829__auto__ = cljs.core.seq(arglist__80253);
return metabase$lib$core$update_temporal_filter__delegate(args__70829__auto__);
});
metabase$lib$core$update_temporal_filter.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$update_temporal_filter__delegate;
return metabase$lib$core$update_temporal_filter;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_join_strategies = (function() { 
var metabase$lib$core$available_join_strategies__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.available_join_strategies,args__70829__auto__);
};
var metabase$lib$core$available_join_strategies = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80254__i = 0, G__80254__a = new Array(arguments.length -  0);
while (G__80254__i < G__80254__a.length) {G__80254__a[G__80254__i] = arguments[G__80254__i + 0]; ++G__80254__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80254__a,0,null);
} 
return metabase$lib$core$available_join_strategies__delegate.call(this,args__70829__auto__);};
metabase$lib$core$available_join_strategies.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_join_strategies.cljs$lang$applyTo = (function (arglist__80255){
var args__70829__auto__ = cljs.core.seq(arglist__80255);
return metabase$lib$core$available_join_strategies__delegate(args__70829__auto__);
});
metabase$lib$core$available_join_strategies.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_join_strategies__delegate;
return metabase$lib$core$available_join_strategies;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join = (function() { 
var metabase$lib$core$join__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join,args__70829__auto__);
};
var metabase$lib$core$join = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80256__i = 0, G__80256__a = new Array(arguments.length -  0);
while (G__80256__i < G__80256__a.length) {G__80256__a[G__80256__i] = arguments[G__80256__i + 0]; ++G__80256__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80256__a,0,null);
} 
return metabase$lib$core$join__delegate.call(this,args__70829__auto__);};
metabase$lib$core$join.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join.cljs$lang$applyTo = (function (arglist__80257){
var args__70829__auto__ = cljs.core.seq(arglist__80257);
return metabase$lib$core$join__delegate(args__70829__auto__);
});
metabase$lib$core$join.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join__delegate;
return metabase$lib$core$join;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_clause = (function() { 
var metabase$lib$core$join_clause__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_clause,args__70829__auto__);
};
var metabase$lib$core$join_clause = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80258__i = 0, G__80258__a = new Array(arguments.length -  0);
while (G__80258__i < G__80258__a.length) {G__80258__a[G__80258__i] = arguments[G__80258__i + 0]; ++G__80258__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80258__a,0,null);
} 
return metabase$lib$core$join_clause__delegate.call(this,args__70829__auto__);};
metabase$lib$core$join_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_clause.cljs$lang$applyTo = (function (arglist__80259){
var args__70829__auto__ = cljs.core.seq(arglist__80259);
return metabase$lib$core$join_clause__delegate(args__70829__auto__);
});
metabase$lib$core$join_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_clause__delegate;
return metabase$lib$core$join_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_condition_lhs_columns = (function() { 
var metabase$lib$core$join_condition_lhs_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_condition_lhs_columns,args__70829__auto__);
};
var metabase$lib$core$join_condition_lhs_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80260__i = 0, G__80260__a = new Array(arguments.length -  0);
while (G__80260__i < G__80260__a.length) {G__80260__a[G__80260__i] = arguments[G__80260__i + 0]; ++G__80260__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80260__a,0,null);
} 
return metabase$lib$core$join_condition_lhs_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$join_condition_lhs_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_condition_lhs_columns.cljs$lang$applyTo = (function (arglist__80261){
var args__70829__auto__ = cljs.core.seq(arglist__80261);
return metabase$lib$core$join_condition_lhs_columns__delegate(args__70829__auto__);
});
metabase$lib$core$join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_condition_lhs_columns__delegate;
return metabase$lib$core$join_condition_lhs_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_condition_operators = (function() { 
var metabase$lib$core$join_condition_operators__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_condition_operators,args__70829__auto__);
};
var metabase$lib$core$join_condition_operators = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80262__i = 0, G__80262__a = new Array(arguments.length -  0);
while (G__80262__i < G__80262__a.length) {G__80262__a[G__80262__i] = arguments[G__80262__i + 0]; ++G__80262__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80262__a,0,null);
} 
return metabase$lib$core$join_condition_operators__delegate.call(this,args__70829__auto__);};
metabase$lib$core$join_condition_operators.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_condition_operators.cljs$lang$applyTo = (function (arglist__80263){
var args__70829__auto__ = cljs.core.seq(arglist__80263);
return metabase$lib$core$join_condition_operators__delegate(args__70829__auto__);
});
metabase$lib$core$join_condition_operators.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_condition_operators__delegate;
return metabase$lib$core$join_condition_operators;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_condition_rhs_columns = (function() { 
var metabase$lib$core$join_condition_rhs_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_condition_rhs_columns,args__70829__auto__);
};
var metabase$lib$core$join_condition_rhs_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80264__i = 0, G__80264__a = new Array(arguments.length -  0);
while (G__80264__i < G__80264__a.length) {G__80264__a[G__80264__i] = arguments[G__80264__i + 0]; ++G__80264__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80264__a,0,null);
} 
return metabase$lib$core$join_condition_rhs_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$join_condition_rhs_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_condition_rhs_columns.cljs$lang$applyTo = (function (arglist__80265){
var args__70829__auto__ = cljs.core.seq(arglist__80265);
return metabase$lib$core$join_condition_rhs_columns__delegate(args__70829__auto__);
});
metabase$lib$core$join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_condition_rhs_columns__delegate;
return metabase$lib$core$join_condition_rhs_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_condition_update_temporal_bucketing = (function() { 
var metabase$lib$core$join_condition_update_temporal_bucketing__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_condition_update_temporal_bucketing,args__70829__auto__);
};
var metabase$lib$core$join_condition_update_temporal_bucketing = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80266__i = 0, G__80266__a = new Array(arguments.length -  0);
while (G__80266__i < G__80266__a.length) {G__80266__a[G__80266__i] = arguments[G__80266__i + 0]; ++G__80266__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80266__a,0,null);
} 
return metabase$lib$core$join_condition_update_temporal_bucketing__delegate.call(this,args__70829__auto__);};
metabase$lib$core$join_condition_update_temporal_bucketing.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_condition_update_temporal_bucketing.cljs$lang$applyTo = (function (arglist__80267){
var args__70829__auto__ = cljs.core.seq(arglist__80267);
return metabase$lib$core$join_condition_update_temporal_bucketing__delegate(args__70829__auto__);
});
metabase$lib$core$join_condition_update_temporal_bucketing.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_condition_update_temporal_bucketing__delegate;
return metabase$lib$core$join_condition_update_temporal_bucketing;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_conditions = (function() { 
var metabase$lib$core$join_conditions__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_conditions,args__70829__auto__);
};
var metabase$lib$core$join_conditions = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80268__i = 0, G__80268__a = new Array(arguments.length -  0);
while (G__80268__i < G__80268__a.length) {G__80268__a[G__80268__i] = arguments[G__80268__i + 0]; ++G__80268__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80268__a,0,null);
} 
return metabase$lib$core$join_conditions__delegate.call(this,args__70829__auto__);};
metabase$lib$core$join_conditions.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_conditions.cljs$lang$applyTo = (function (arglist__80269){
var args__70829__auto__ = cljs.core.seq(arglist__80269);
return metabase$lib$core$join_conditions__delegate(args__70829__auto__);
});
metabase$lib$core$join_conditions.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_conditions__delegate;
return metabase$lib$core$join_conditions;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_fields = (function() { 
var metabase$lib$core$join_fields__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_fields,args__70829__auto__);
};
var metabase$lib$core$join_fields = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80270__i = 0, G__80270__a = new Array(arguments.length -  0);
while (G__80270__i < G__80270__a.length) {G__80270__a[G__80270__i] = arguments[G__80270__i + 0]; ++G__80270__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80270__a,0,null);
} 
return metabase$lib$core$join_fields__delegate.call(this,args__70829__auto__);};
metabase$lib$core$join_fields.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_fields.cljs$lang$applyTo = (function (arglist__80271){
var args__70829__auto__ = cljs.core.seq(arglist__80271);
return metabase$lib$core$join_fields__delegate(args__70829__auto__);
});
metabase$lib$core$join_fields.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_fields__delegate;
return metabase$lib$core$join_fields;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_lhs_display_name = (function() { 
var metabase$lib$core$join_lhs_display_name__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_lhs_display_name,args__70829__auto__);
};
var metabase$lib$core$join_lhs_display_name = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80272__i = 0, G__80272__a = new Array(arguments.length -  0);
while (G__80272__i < G__80272__a.length) {G__80272__a[G__80272__i] = arguments[G__80272__i + 0]; ++G__80272__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80272__a,0,null);
} 
return metabase$lib$core$join_lhs_display_name__delegate.call(this,args__70829__auto__);};
metabase$lib$core$join_lhs_display_name.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_lhs_display_name.cljs$lang$applyTo = (function (arglist__80273){
var args__70829__auto__ = cljs.core.seq(arglist__80273);
return metabase$lib$core$join_lhs_display_name__delegate(args__70829__auto__);
});
metabase$lib$core$join_lhs_display_name.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_lhs_display_name__delegate;
return metabase$lib$core$join_lhs_display_name;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.join_strategy = (function() { 
var metabase$lib$core$join_strategy__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.join_strategy,args__70829__auto__);
};
var metabase$lib$core$join_strategy = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80274__i = 0, G__80274__a = new Array(arguments.length -  0);
while (G__80274__i < G__80274__a.length) {G__80274__a[G__80274__i] = arguments[G__80274__i + 0]; ++G__80274__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80274__a,0,null);
} 
return metabase$lib$core$join_strategy__delegate.call(this,args__70829__auto__);};
metabase$lib$core$join_strategy.cljs$lang$maxFixedArity = 0;
metabase$lib$core$join_strategy.cljs$lang$applyTo = (function (arglist__80275){
var args__70829__auto__ = cljs.core.seq(arglist__80275);
return metabase$lib$core$join_strategy__delegate(args__70829__auto__);
});
metabase$lib$core$join_strategy.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$join_strategy__delegate;
return metabase$lib$core$join_strategy;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.joinable_columns = (function() { 
var metabase$lib$core$joinable_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.joinable_columns,args__70829__auto__);
};
var metabase$lib$core$joinable_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80276__i = 0, G__80276__a = new Array(arguments.length -  0);
while (G__80276__i < G__80276__a.length) {G__80276__a[G__80276__i] = arguments[G__80276__i + 0]; ++G__80276__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80276__a,0,null);
} 
return metabase$lib$core$joinable_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$joinable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$joinable_columns.cljs$lang$applyTo = (function (arglist__80277){
var args__70829__auto__ = cljs.core.seq(arglist__80277);
return metabase$lib$core$joinable_columns__delegate(args__70829__auto__);
});
metabase$lib$core$joinable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$joinable_columns__delegate;
return metabase$lib$core$joinable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.joins = (function() { 
var metabase$lib$core$joins__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.joins,args__70829__auto__);
};
var metabase$lib$core$joins = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80278__i = 0, G__80278__a = new Array(arguments.length -  0);
while (G__80278__i < G__80278__a.length) {G__80278__a[G__80278__i] = arguments[G__80278__i + 0]; ++G__80278__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80278__a,0,null);
} 
return metabase$lib$core$joins__delegate.call(this,args__70829__auto__);};
metabase$lib$core$joins.cljs$lang$maxFixedArity = 0;
metabase$lib$core$joins.cljs$lang$applyTo = (function (arglist__80279){
var args__70829__auto__ = cljs.core.seq(arglist__80279);
return metabase$lib$core$joins__delegate(args__70829__auto__);
});
metabase$lib$core$joins.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$joins__delegate;
return metabase$lib$core$joins;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.raw_join_strategy = (function() { 
var metabase$lib$core$raw_join_strategy__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.raw_join_strategy,args__70829__auto__);
};
var metabase$lib$core$raw_join_strategy = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80280__i = 0, G__80280__a = new Array(arguments.length -  0);
while (G__80280__i < G__80280__a.length) {G__80280__a[G__80280__i] = arguments[G__80280__i + 0]; ++G__80280__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80280__a,0,null);
} 
return metabase$lib$core$raw_join_strategy__delegate.call(this,args__70829__auto__);};
metabase$lib$core$raw_join_strategy.cljs$lang$maxFixedArity = 0;
metabase$lib$core$raw_join_strategy.cljs$lang$applyTo = (function (arglist__80281){
var args__70829__auto__ = cljs.core.seq(arglist__80281);
return metabase$lib$core$raw_join_strategy__delegate(args__70829__auto__);
});
metabase$lib$core$raw_join_strategy.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$raw_join_strategy__delegate;
return metabase$lib$core$raw_join_strategy;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.suggested_join_conditions = (function() { 
var metabase$lib$core$suggested_join_conditions__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.suggested_join_conditions,args__70829__auto__);
};
var metabase$lib$core$suggested_join_conditions = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80282__i = 0, G__80282__a = new Array(arguments.length -  0);
while (G__80282__i < G__80282__a.length) {G__80282__a[G__80282__i] = arguments[G__80282__i + 0]; ++G__80282__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80282__a,0,null);
} 
return metabase$lib$core$suggested_join_conditions__delegate.call(this,args__70829__auto__);};
metabase$lib$core$suggested_join_conditions.cljs$lang$maxFixedArity = 0;
metabase$lib$core$suggested_join_conditions.cljs$lang$applyTo = (function (arglist__80283){
var args__70829__auto__ = cljs.core.seq(arglist__80283);
return metabase$lib$core$suggested_join_conditions__delegate(args__70829__auto__);
});
metabase$lib$core$suggested_join_conditions.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$suggested_join_conditions__delegate;
return metabase$lib$core$suggested_join_conditions;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_join_alias = (function() { 
var metabase$lib$core$with_join_alias__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.with_join_alias,args__70829__auto__);
};
var metabase$lib$core$with_join_alias = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80284__i = 0, G__80284__a = new Array(arguments.length -  0);
while (G__80284__i < G__80284__a.length) {G__80284__a[G__80284__i] = arguments[G__80284__i + 0]; ++G__80284__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80284__a,0,null);
} 
return metabase$lib$core$with_join_alias__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_join_alias.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_join_alias.cljs$lang$applyTo = (function (arglist__80285){
var args__70829__auto__ = cljs.core.seq(arglist__80285);
return metabase$lib$core$with_join_alias__delegate(args__70829__auto__);
});
metabase$lib$core$with_join_alias.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_join_alias__delegate;
return metabase$lib$core$with_join_alias;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_join_fields = (function() { 
var metabase$lib$core$with_join_fields__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.with_join_fields,args__70829__auto__);
};
var metabase$lib$core$with_join_fields = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80286__i = 0, G__80286__a = new Array(arguments.length -  0);
while (G__80286__i < G__80286__a.length) {G__80286__a[G__80286__i] = arguments[G__80286__i + 0]; ++G__80286__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80286__a,0,null);
} 
return metabase$lib$core$with_join_fields__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_join_fields.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_join_fields.cljs$lang$applyTo = (function (arglist__80287){
var args__70829__auto__ = cljs.core.seq(arglist__80287);
return metabase$lib$core$with_join_fields__delegate(args__70829__auto__);
});
metabase$lib$core$with_join_fields.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_join_fields__delegate;
return metabase$lib$core$with_join_fields;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_join_strategy = (function() { 
var metabase$lib$core$with_join_strategy__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.with_join_strategy,args__70829__auto__);
};
var metabase$lib$core$with_join_strategy = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80288__i = 0, G__80288__a = new Array(arguments.length -  0);
while (G__80288__i < G__80288__a.length) {G__80288__a[G__80288__i] = arguments[G__80288__i + 0]; ++G__80288__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80288__a,0,null);
} 
return metabase$lib$core$with_join_strategy__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_join_strategy.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_join_strategy.cljs$lang$applyTo = (function (arglist__80289){
var args__70829__auto__ = cljs.core.seq(arglist__80289);
return metabase$lib$core$with_join_strategy__delegate(args__70829__auto__);
});
metabase$lib$core$with_join_strategy.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_join_strategy__delegate;
return metabase$lib$core$with_join_strategy;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_join_conditions = (function() { 
var metabase$lib$core$with_join_conditions__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.with_join_conditions,args__70829__auto__);
};
var metabase$lib$core$with_join_conditions = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80290__i = 0, G__80290__a = new Array(arguments.length -  0);
while (G__80290__i < G__80290__a.length) {G__80290__a[G__80290__i] = arguments[G__80290__i + 0]; ++G__80290__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80290__a,0,null);
} 
return metabase$lib$core$with_join_conditions__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_join_conditions.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_join_conditions.cljs$lang$applyTo = (function (arglist__80291){
var args__70829__auto__ = cljs.core.seq(arglist__80291);
return metabase$lib$core$with_join_conditions__delegate(args__70829__auto__);
});
metabase$lib$core$with_join_conditions.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_join_conditions__delegate;
return metabase$lib$core$with_join_conditions;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_metrics = (function() { 
var metabase$lib$core$available_metrics__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metric.available_metrics,args__70829__auto__);
};
var metabase$lib$core$available_metrics = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80292__i = 0, G__80292__a = new Array(arguments.length -  0);
while (G__80292__i < G__80292__a.length) {G__80292__a[G__80292__i] = arguments[G__80292__i + 0]; ++G__80292__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80292__a,0,null);
} 
return metabase$lib$core$available_metrics__delegate.call(this,args__70829__auto__);};
metabase$lib$core$available_metrics.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_metrics.cljs$lang$applyTo = (function (arglist__80293){
var args__70829__auto__ = cljs.core.seq(arglist__80293);
return metabase$lib$core$available_metrics__delegate(args__70829__auto__);
});
metabase$lib$core$available_metrics.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_metrics__delegate;
return metabase$lib$core$available_metrics;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.metric_based_QMARK_ = (function() { 
var metabase$lib$core$metric_based_QMARK___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metric.metric_based_QMARK_,args__70829__auto__);
};
var metabase$lib$core$metric_based_QMARK_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80298__i = 0, G__80298__a = new Array(arguments.length -  0);
while (G__80298__i < G__80298__a.length) {G__80298__a[G__80298__i] = arguments[G__80298__i + 0]; ++G__80298__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80298__a,0,null);
} 
return metabase$lib$core$metric_based_QMARK___delegate.call(this,args__70829__auto__);};
metabase$lib$core$metric_based_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$metric_based_QMARK_.cljs$lang$applyTo = (function (arglist__80299){
var args__70829__auto__ = cljs.core.seq(arglist__80299);
return metabase$lib$core$metric_based_QMARK___delegate(args__70829__auto__);
});
metabase$lib$core$metric_based_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$metric_based_QMARK___delegate;
return metabase$lib$core$metric_based_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.current_limit = (function() { 
var metabase$lib$core$current_limit__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.limit.current_limit,args__70829__auto__);
};
var metabase$lib$core$current_limit = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80300__i = 0, G__80300__a = new Array(arguments.length -  0);
while (G__80300__i < G__80300__a.length) {G__80300__a[G__80300__i] = arguments[G__80300__i + 0]; ++G__80300__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80300__a,0,null);
} 
return metabase$lib$core$current_limit__delegate.call(this,args__70829__auto__);};
metabase$lib$core$current_limit.cljs$lang$maxFixedArity = 0;
metabase$lib$core$current_limit.cljs$lang$applyTo = (function (arglist__80301){
var args__70829__auto__ = cljs.core.seq(arglist__80301);
return metabase$lib$core$current_limit__delegate(args__70829__auto__);
});
metabase$lib$core$current_limit.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$current_limit__delegate;
return metabase$lib$core$current_limit;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.limit = (function() { 
var metabase$lib$core$limit__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.limit.limit,args__70829__auto__);
};
var metabase$lib$core$limit = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80302__i = 0, G__80302__a = new Array(arguments.length -  0);
while (G__80302__i < G__80302__a.length) {G__80302__a[G__80302__i] = arguments[G__80302__i + 0]; ++G__80302__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80302__a,0,null);
} 
return metabase$lib$core$limit__delegate.call(this,args__70829__auto__);};
metabase$lib$core$limit.cljs$lang$maxFixedArity = 0;
metabase$lib$core$limit.cljs$lang$applyTo = (function (arglist__80303){
var args__70829__auto__ = cljs.core.seq(arglist__80303);
return metabase$lib$core$limit__delegate(args__70829__auto__);
});
metabase$lib$core$limit.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$limit__delegate;
return metabase$lib$core$limit;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.column_name = (function() { 
var metabase$lib$core$column_name__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.column_name,args__70829__auto__);
};
var metabase$lib$core$column_name = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80304__i = 0, G__80304__a = new Array(arguments.length -  0);
while (G__80304__i < G__80304__a.length) {G__80304__a[G__80304__i] = arguments[G__80304__i + 0]; ++G__80304__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80304__a,0,null);
} 
return metabase$lib$core$column_name__delegate.call(this,args__70829__auto__);};
metabase$lib$core$column_name.cljs$lang$maxFixedArity = 0;
metabase$lib$core$column_name.cljs$lang$applyTo = (function (arglist__80305){
var args__70829__auto__ = cljs.core.seq(arglist__80305);
return metabase$lib$core$column_name__delegate(args__70829__auto__);
});
metabase$lib$core$column_name.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$column_name__delegate;
return metabase$lib$core$column_name;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.describe_query = (function() { 
var metabase$lib$core$describe_query__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.describe_query,args__70829__auto__);
};
var metabase$lib$core$describe_query = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80306__i = 0, G__80306__a = new Array(arguments.length -  0);
while (G__80306__i < G__80306__a.length) {G__80306__a[G__80306__i] = arguments[G__80306__i + 0]; ++G__80306__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80306__a,0,null);
} 
return metabase$lib$core$describe_query__delegate.call(this,args__70829__auto__);};
metabase$lib$core$describe_query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$describe_query.cljs$lang$applyTo = (function (arglist__80307){
var args__70829__auto__ = cljs.core.seq(arglist__80307);
return metabase$lib$core$describe_query__delegate(args__70829__auto__);
});
metabase$lib$core$describe_query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$describe_query__delegate;
return metabase$lib$core$describe_query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.describe_top_level_key = (function() { 
var metabase$lib$core$describe_top_level_key__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.describe_top_level_key,args__70829__auto__);
};
var metabase$lib$core$describe_top_level_key = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80308__i = 0, G__80308__a = new Array(arguments.length -  0);
while (G__80308__i < G__80308__a.length) {G__80308__a[G__80308__i] = arguments[G__80308__i + 0]; ++G__80308__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80308__a,0,null);
} 
return metabase$lib$core$describe_top_level_key__delegate.call(this,args__70829__auto__);};
metabase$lib$core$describe_top_level_key.cljs$lang$maxFixedArity = 0;
metabase$lib$core$describe_top_level_key.cljs$lang$applyTo = (function (arglist__80309){
var args__70829__auto__ = cljs.core.seq(arglist__80309);
return metabase$lib$core$describe_top_level_key__delegate(args__70829__auto__);
});
metabase$lib$core$describe_top_level_key.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$describe_top_level_key__delegate;
return metabase$lib$core$describe_top_level_key;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.display_name = (function() { 
var metabase$lib$core$display_name__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.display_name,args__70829__auto__);
};
var metabase$lib$core$display_name = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80310__i = 0, G__80310__a = new Array(arguments.length -  0);
while (G__80310__i < G__80310__a.length) {G__80310__a[G__80310__i] = arguments[G__80310__i + 0]; ++G__80310__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80310__a,0,null);
} 
return metabase$lib$core$display_name__delegate.call(this,args__70829__auto__);};
metabase$lib$core$display_name.cljs$lang$maxFixedArity = 0;
metabase$lib$core$display_name.cljs$lang$applyTo = (function (arglist__80311){
var args__70829__auto__ = cljs.core.seq(arglist__80311);
return metabase$lib$core$display_name__delegate(args__70829__auto__);
});
metabase$lib$core$display_name.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$display_name__delegate;
return metabase$lib$core$display_name;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.display_info = (function() { 
var metabase$lib$core$display_info__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.display_info,args__70829__auto__);
};
var metabase$lib$core$display_info = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80312__i = 0, G__80312__a = new Array(arguments.length -  0);
while (G__80312__i < G__80312__a.length) {G__80312__a[G__80312__i] = arguments[G__80312__i + 0]; ++G__80312__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80312__a,0,null);
} 
return metabase$lib$core$display_info__delegate.call(this,args__70829__auto__);};
metabase$lib$core$display_info.cljs$lang$maxFixedArity = 0;
metabase$lib$core$display_info.cljs$lang$applyTo = (function (arglist__80313){
var args__70829__auto__ = cljs.core.seq(arglist__80313);
return metabase$lib$core$display_info__delegate(args__70829__auto__);
});
metabase$lib$core$display_info.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$display_info__delegate;
return metabase$lib$core$display_info;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.metadata = (function() { 
var metabase$lib$core$metadata__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.metadata,args__70829__auto__);
};
var metabase$lib$core$metadata = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80314__i = 0, G__80314__a = new Array(arguments.length -  0);
while (G__80314__i < G__80314__a.length) {G__80314__a[G__80314__i] = arguments[G__80314__i + 0]; ++G__80314__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80314__a,0,null);
} 
return metabase$lib$core$metadata__delegate.call(this,args__70829__auto__);};
metabase$lib$core$metadata.cljs$lang$maxFixedArity = 0;
metabase$lib$core$metadata.cljs$lang$applyTo = (function (arglist__80315){
var args__70829__auto__ = cljs.core.seq(arglist__80315);
return metabase$lib$core$metadata__delegate(args__70829__auto__);
});
metabase$lib$core$metadata.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$metadata__delegate;
return metabase$lib$core$metadata;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.returned_columns = (function() { 
var metabase$lib$core$returned_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.returned_columns,args__70829__auto__);
};
var metabase$lib$core$returned_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80316__i = 0, G__80316__a = new Array(arguments.length -  0);
while (G__80316__i < G__80316__a.length) {G__80316__a[G__80316__i] = arguments[G__80316__i + 0]; ++G__80316__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80316__a,0,null);
} 
return metabase$lib$core$returned_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$returned_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$returned_columns.cljs$lang$applyTo = (function (arglist__80317){
var args__70829__auto__ = cljs.core.seq(arglist__80317);
return metabase$lib$core$returned_columns__delegate(args__70829__auto__);
});
metabase$lib$core$returned_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$returned_columns__delegate;
return metabase$lib$core$returned_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.suggested_name = (function() { 
var metabase$lib$core$suggested_name__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.suggested_name,args__70829__auto__);
};
var metabase$lib$core$suggested_name = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80318__i = 0, G__80318__a = new Array(arguments.length -  0);
while (G__80318__i < G__80318__a.length) {G__80318__a[G__80318__i] = arguments[G__80318__i + 0]; ++G__80318__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80318__a,0,null);
} 
return metabase$lib$core$suggested_name__delegate.call(this,args__70829__auto__);};
metabase$lib$core$suggested_name.cljs$lang$maxFixedArity = 0;
metabase$lib$core$suggested_name.cljs$lang$applyTo = (function (arglist__80319){
var args__70829__auto__ = cljs.core.seq(arglist__80319);
return metabase$lib$core$suggested_name__delegate(args__70829__auto__);
});
metabase$lib$core$suggested_name.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$suggested_name__delegate;
return metabase$lib$core$suggested_name;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.type_of = (function() { 
var metabase$lib$core$type_of__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.type_of,args__70829__auto__);
};
var metabase$lib$core$type_of = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80320__i = 0, G__80320__a = new Array(arguments.length -  0);
while (G__80320__i < G__80320__a.length) {G__80320__a[G__80320__i] = arguments[G__80320__i + 0]; ++G__80320__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80320__a,0,null);
} 
return metabase$lib$core$type_of__delegate.call(this,args__70829__auto__);};
metabase$lib$core$type_of.cljs$lang$maxFixedArity = 0;
metabase$lib$core$type_of.cljs$lang$applyTo = (function (arglist__80321){
var args__70829__auto__ = cljs.core.seq(arglist__80321);
return metabase$lib$core$type_of__delegate(args__70829__auto__);
});
metabase$lib$core$type_of.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$type_of__delegate;
return metabase$lib$core$type_of;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.visible_columns = (function() { 
var metabase$lib$core$visible_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.calculation.visible_columns,args__70829__auto__);
};
var metabase$lib$core$visible_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80322__i = 0, G__80322__a = new Array(arguments.length -  0);
while (G__80322__i < G__80322__a.length) {G__80322__a[G__80322__i] = arguments[G__80322__i + 0]; ++G__80322__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80322__a,0,null);
} 
return metabase$lib$core$visible_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$visible_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$visible_columns.cljs$lang$applyTo = (function (arglist__80323){
var args__70829__auto__ = cljs.core.seq(arglist__80323);
return metabase$lib$core$visible_columns__delegate(args__70829__auto__);
});
metabase$lib$core$visible_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$visible_columns__delegate;
return metabase$lib$core$visible_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.composed_metadata_provider = (function() { 
var metabase$lib$core$composed_metadata_provider__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.composed_provider.composed_metadata_provider,args__70829__auto__);
};
var metabase$lib$core$composed_metadata_provider = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80324__i = 0, G__80324__a = new Array(arguments.length -  0);
while (G__80324__i < G__80324__a.length) {G__80324__a[G__80324__i] = arguments[G__80324__i + 0]; ++G__80324__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80324__a,0,null);
} 
return metabase$lib$core$composed_metadata_provider__delegate.call(this,args__70829__auto__);};
metabase$lib$core$composed_metadata_provider.cljs$lang$maxFixedArity = 0;
metabase$lib$core$composed_metadata_provider.cljs$lang$applyTo = (function (arglist__80325){
var args__70829__auto__ = cljs.core.seq(arglist__80325);
return metabase$lib$core$composed_metadata_provider__delegate(args__70829__auto__);
});
metabase$lib$core$composed_metadata_provider.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$composed_metadata_provider__delegate;
return metabase$lib$core$composed_metadata_provider;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.engine = (function() { 
var metabase$lib$core$engine__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.engine,args__70829__auto__);
};
var metabase$lib$core$engine = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80327__i = 0, G__80327__a = new Array(arguments.length -  0);
while (G__80327__i < G__80327__a.length) {G__80327__a[G__80327__i] = arguments[G__80327__i + 0]; ++G__80327__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80327__a,0,null);
} 
return metabase$lib$core$engine__delegate.call(this,args__70829__auto__);};
metabase$lib$core$engine.cljs$lang$maxFixedArity = 0;
metabase$lib$core$engine.cljs$lang$applyTo = (function (arglist__80328){
var args__70829__auto__ = cljs.core.seq(arglist__80328);
return metabase$lib$core$engine__delegate(args__70829__auto__);
});
metabase$lib$core$engine.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$engine__delegate;
return metabase$lib$core$engine;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.extract_template_tags = (function() { 
var metabase$lib$core$extract_template_tags__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.extract_template_tags,args__70829__auto__);
};
var metabase$lib$core$extract_template_tags = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80329__i = 0, G__80329__a = new Array(arguments.length -  0);
while (G__80329__i < G__80329__a.length) {G__80329__a[G__80329__i] = arguments[G__80329__i + 0]; ++G__80329__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80329__a,0,null);
} 
return metabase$lib$core$extract_template_tags__delegate.call(this,args__70829__auto__);};
metabase$lib$core$extract_template_tags.cljs$lang$maxFixedArity = 0;
metabase$lib$core$extract_template_tags.cljs$lang$applyTo = (function (arglist__80330){
var args__70829__auto__ = cljs.core.seq(arglist__80330);
return metabase$lib$core$extract_template_tags__delegate(args__70829__auto__);
});
metabase$lib$core$extract_template_tags.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$extract_template_tags__delegate;
return metabase$lib$core$extract_template_tags;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.has_write_permission = (function() { 
var metabase$lib$core$has_write_permission__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.has_write_permission,args__70829__auto__);
};
var metabase$lib$core$has_write_permission = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80331__i = 0, G__80331__a = new Array(arguments.length -  0);
while (G__80331__i < G__80331__a.length) {G__80331__a[G__80331__i] = arguments[G__80331__i + 0]; ++G__80331__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80331__a,0,null);
} 
return metabase$lib$core$has_write_permission__delegate.call(this,args__70829__auto__);};
metabase$lib$core$has_write_permission.cljs$lang$maxFixedArity = 0;
metabase$lib$core$has_write_permission.cljs$lang$applyTo = (function (arglist__80332){
var args__70829__auto__ = cljs.core.seq(arglist__80332);
return metabase$lib$core$has_write_permission__delegate(args__70829__auto__);
});
metabase$lib$core$has_write_permission.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$has_write_permission__delegate;
return metabase$lib$core$has_write_permission;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.native_extras = (function() { 
var metabase$lib$core$native_extras__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.native_extras,args__70829__auto__);
};
var metabase$lib$core$native_extras = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80333__i = 0, G__80333__a = new Array(arguments.length -  0);
while (G__80333__i < G__80333__a.length) {G__80333__a[G__80333__i] = arguments[G__80333__i + 0]; ++G__80333__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80333__a,0,null);
} 
return metabase$lib$core$native_extras__delegate.call(this,args__70829__auto__);};
metabase$lib$core$native_extras.cljs$lang$maxFixedArity = 0;
metabase$lib$core$native_extras.cljs$lang$applyTo = (function (arglist__80334){
var args__70829__auto__ = cljs.core.seq(arglist__80334);
return metabase$lib$core$native_extras__delegate(args__70829__auto__);
});
metabase$lib$core$native_extras.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$native_extras__delegate;
return metabase$lib$core$native_extras;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.native_query = (function() { 
var metabase$lib$core$native_query__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.native_query,args__70829__auto__);
};
var metabase$lib$core$native_query = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80335__i = 0, G__80335__a = new Array(arguments.length -  0);
while (G__80335__i < G__80335__a.length) {G__80335__a[G__80335__i] = arguments[G__80335__i + 0]; ++G__80335__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80335__a,0,null);
} 
return metabase$lib$core$native_query__delegate.call(this,args__70829__auto__);};
metabase$lib$core$native_query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$native_query.cljs$lang$applyTo = (function (arglist__80336){
var args__70829__auto__ = cljs.core.seq(arglist__80336);
return metabase$lib$core$native_query__delegate(args__70829__auto__);
});
metabase$lib$core$native_query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$native_query__delegate;
return metabase$lib$core$native_query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.raw_native_query = (function() { 
var metabase$lib$core$raw_native_query__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.raw_native_query,args__70829__auto__);
};
var metabase$lib$core$raw_native_query = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80337__i = 0, G__80337__a = new Array(arguments.length -  0);
while (G__80337__i < G__80337__a.length) {G__80337__a[G__80337__i] = arguments[G__80337__i + 0]; ++G__80337__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80337__a,0,null);
} 
return metabase$lib$core$raw_native_query__delegate.call(this,args__70829__auto__);};
metabase$lib$core$raw_native_query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$raw_native_query.cljs$lang$applyTo = (function (arglist__80338){
var args__70829__auto__ = cljs.core.seq(arglist__80338);
return metabase$lib$core$raw_native_query__delegate(args__70829__auto__);
});
metabase$lib$core$raw_native_query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$raw_native_query__delegate;
return metabase$lib$core$raw_native_query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.required_native_extras = (function() { 
var metabase$lib$core$required_native_extras__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.required_native_extras,args__70829__auto__);
};
var metabase$lib$core$required_native_extras = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80339__i = 0, G__80339__a = new Array(arguments.length -  0);
while (G__80339__i < G__80339__a.length) {G__80339__a[G__80339__i] = arguments[G__80339__i + 0]; ++G__80339__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80339__a,0,null);
} 
return metabase$lib$core$required_native_extras__delegate.call(this,args__70829__auto__);};
metabase$lib$core$required_native_extras.cljs$lang$maxFixedArity = 0;
metabase$lib$core$required_native_extras.cljs$lang$applyTo = (function (arglist__80340){
var args__70829__auto__ = cljs.core.seq(arglist__80340);
return metabase$lib$core$required_native_extras__delegate(args__70829__auto__);
});
metabase$lib$core$required_native_extras.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$required_native_extras__delegate;
return metabase$lib$core$required_native_extras;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.template_tag_card_ids = (function() { 
var metabase$lib$core$template_tag_card_ids__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.template_tag_card_ids,args__70829__auto__);
};
var metabase$lib$core$template_tag_card_ids = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80341__i = 0, G__80341__a = new Array(arguments.length -  0);
while (G__80341__i < G__80341__a.length) {G__80341__a[G__80341__i] = arguments[G__80341__i + 0]; ++G__80341__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80341__a,0,null);
} 
return metabase$lib$core$template_tag_card_ids__delegate.call(this,args__70829__auto__);};
metabase$lib$core$template_tag_card_ids.cljs$lang$maxFixedArity = 0;
metabase$lib$core$template_tag_card_ids.cljs$lang$applyTo = (function (arglist__80342){
var args__70829__auto__ = cljs.core.seq(arglist__80342);
return metabase$lib$core$template_tag_card_ids__delegate(args__70829__auto__);
});
metabase$lib$core$template_tag_card_ids.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$template_tag_card_ids__delegate;
return metabase$lib$core$template_tag_card_ids;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.template_tags_referenced_cards = (function() { 
var metabase$lib$core$template_tags_referenced_cards__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.template_tags_referenced_cards,args__70829__auto__);
};
var metabase$lib$core$template_tags_referenced_cards = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80343__i = 0, G__80343__a = new Array(arguments.length -  0);
while (G__80343__i < G__80343__a.length) {G__80343__a[G__80343__i] = arguments[G__80343__i + 0]; ++G__80343__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80343__a,0,null);
} 
return metabase$lib$core$template_tags_referenced_cards__delegate.call(this,args__70829__auto__);};
metabase$lib$core$template_tags_referenced_cards.cljs$lang$maxFixedArity = 0;
metabase$lib$core$template_tags_referenced_cards.cljs$lang$applyTo = (function (arglist__80344){
var args__70829__auto__ = cljs.core.seq(arglist__80344);
return metabase$lib$core$template_tags_referenced_cards__delegate(args__70829__auto__);
});
metabase$lib$core$template_tags_referenced_cards.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$template_tags_referenced_cards__delegate;
return metabase$lib$core$template_tags_referenced_cards;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.template_tags = (function() { 
var metabase$lib$core$template_tags__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.template_tags,args__70829__auto__);
};
var metabase$lib$core$template_tags = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80345__i = 0, G__80345__a = new Array(arguments.length -  0);
while (G__80345__i < G__80345__a.length) {G__80345__a[G__80345__i] = arguments[G__80345__i + 0]; ++G__80345__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80345__a,0,null);
} 
return metabase$lib$core$template_tags__delegate.call(this,args__70829__auto__);};
metabase$lib$core$template_tags.cljs$lang$maxFixedArity = 0;
metabase$lib$core$template_tags.cljs$lang$applyTo = (function (arglist__80346){
var args__70829__auto__ = cljs.core.seq(arglist__80346);
return metabase$lib$core$template_tags__delegate(args__70829__auto__);
});
metabase$lib$core$template_tags.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$template_tags__delegate;
return metabase$lib$core$template_tags;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_different_database = (function() { 
var metabase$lib$core$with_different_database__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.with_different_database,args__70829__auto__);
};
var metabase$lib$core$with_different_database = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80347__i = 0, G__80347__a = new Array(arguments.length -  0);
while (G__80347__i < G__80347__a.length) {G__80347__a[G__80347__i] = arguments[G__80347__i + 0]; ++G__80347__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80347__a,0,null);
} 
return metabase$lib$core$with_different_database__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_different_database.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_different_database.cljs$lang$applyTo = (function (arglist__80348){
var args__70829__auto__ = cljs.core.seq(arglist__80348);
return metabase$lib$core$with_different_database__delegate(args__70829__auto__);
});
metabase$lib$core$with_different_database.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_different_database__delegate;
return metabase$lib$core$with_different_database;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_native_extras = (function() { 
var metabase$lib$core$with_native_extras__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.with_native_extras,args__70829__auto__);
};
var metabase$lib$core$with_native_extras = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80349__i = 0, G__80349__a = new Array(arguments.length -  0);
while (G__80349__i < G__80349__a.length) {G__80349__a[G__80349__i] = arguments[G__80349__i + 0]; ++G__80349__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80349__a,0,null);
} 
return metabase$lib$core$with_native_extras__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_native_extras.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_native_extras.cljs$lang$applyTo = (function (arglist__80350){
var args__70829__auto__ = cljs.core.seq(arglist__80350);
return metabase$lib$core$with_native_extras__delegate(args__70829__auto__);
});
metabase$lib$core$with_native_extras.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_native_extras__delegate;
return metabase$lib$core$with_native_extras;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_native_query = (function() { 
var metabase$lib$core$with_native_query__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.with_native_query,args__70829__auto__);
};
var metabase$lib$core$with_native_query = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80351__i = 0, G__80351__a = new Array(arguments.length -  0);
while (G__80351__i < G__80351__a.length) {G__80351__a[G__80351__i] = arguments[G__80351__i + 0]; ++G__80351__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80351__a,0,null);
} 
return metabase$lib$core$with_native_query__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_native_query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_native_query.cljs$lang$applyTo = (function (arglist__80352){
var args__70829__auto__ = cljs.core.seq(arglist__80352);
return metabase$lib$core$with_native_query__delegate(args__70829__auto__);
});
metabase$lib$core$with_native_query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_native_query__delegate;
return metabase$lib$core$with_native_query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_template_tags = (function() { 
var metabase$lib$core$with_template_tags__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.native$.with_template_tags,args__70829__auto__);
};
var metabase$lib$core$with_template_tags = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80353__i = 0, G__80353__a = new Array(arguments.length -  0);
while (G__80353__i < G__80353__a.length) {G__80353__a[G__80353__i] = arguments[G__80353__i + 0]; ++G__80353__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80353__a,0,null);
} 
return metabase$lib$core$with_template_tags__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_template_tags.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_template_tags.cljs$lang$applyTo = (function (arglist__80354){
var args__70829__auto__ = cljs.core.seq(arglist__80354);
return metabase$lib$core$with_template_tags__delegate(args__70829__auto__);
});
metabase$lib$core$with_template_tags.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_template_tags__delegate;
return metabase$lib$core$with_template_tags;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.change_direction = (function() { 
var metabase$lib$core$change_direction__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.order_by.change_direction,args__70829__auto__);
};
var metabase$lib$core$change_direction = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80355__i = 0, G__80355__a = new Array(arguments.length -  0);
while (G__80355__i < G__80355__a.length) {G__80355__a[G__80355__i] = arguments[G__80355__i + 0]; ++G__80355__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80355__a,0,null);
} 
return metabase$lib$core$change_direction__delegate.call(this,args__70829__auto__);};
metabase$lib$core$change_direction.cljs$lang$maxFixedArity = 0;
metabase$lib$core$change_direction.cljs$lang$applyTo = (function (arglist__80356){
var args__70829__auto__ = cljs.core.seq(arglist__80356);
return metabase$lib$core$change_direction__delegate(args__70829__auto__);
});
metabase$lib$core$change_direction.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$change_direction__delegate;
return metabase$lib$core$change_direction;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.order_by = (function() { 
var metabase$lib$core$order_by__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.order_by.order_by,args__70829__auto__);
};
var metabase$lib$core$order_by = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80357__i = 0, G__80357__a = new Array(arguments.length -  0);
while (G__80357__i < G__80357__a.length) {G__80357__a[G__80357__i] = arguments[G__80357__i + 0]; ++G__80357__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80357__a,0,null);
} 
return metabase$lib$core$order_by__delegate.call(this,args__70829__auto__);};
metabase$lib$core$order_by.cljs$lang$maxFixedArity = 0;
metabase$lib$core$order_by.cljs$lang$applyTo = (function (arglist__80358){
var args__70829__auto__ = cljs.core.seq(arglist__80358);
return metabase$lib$core$order_by__delegate(args__70829__auto__);
});
metabase$lib$core$order_by.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$order_by__delegate;
return metabase$lib$core$order_by;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.order_by_clause = (function() { 
var metabase$lib$core$order_by_clause__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.order_by.order_by_clause,args__70829__auto__);
};
var metabase$lib$core$order_by_clause = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80359__i = 0, G__80359__a = new Array(arguments.length -  0);
while (G__80359__i < G__80359__a.length) {G__80359__a[G__80359__i] = arguments[G__80359__i + 0]; ++G__80359__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80359__a,0,null);
} 
return metabase$lib$core$order_by_clause__delegate.call(this,args__70829__auto__);};
metabase$lib$core$order_by_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$order_by_clause.cljs$lang$applyTo = (function (arglist__80360){
var args__70829__auto__ = cljs.core.seq(arglist__80360);
return metabase$lib$core$order_by_clause__delegate(args__70829__auto__);
});
metabase$lib$core$order_by_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$order_by_clause__delegate;
return metabase$lib$core$order_by_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.order_bys = (function() { 
var metabase$lib$core$order_bys__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.order_by.order_bys,args__70829__auto__);
};
var metabase$lib$core$order_bys = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80361__i = 0, G__80361__a = new Array(arguments.length -  0);
while (G__80361__i < G__80361__a.length) {G__80361__a[G__80361__i] = arguments[G__80361__i + 0]; ++G__80361__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80361__a,0,null);
} 
return metabase$lib$core$order_bys__delegate.call(this,args__70829__auto__);};
metabase$lib$core$order_bys.cljs$lang$maxFixedArity = 0;
metabase$lib$core$order_bys.cljs$lang$applyTo = (function (arglist__80362){
var args__70829__auto__ = cljs.core.seq(arglist__80362);
return metabase$lib$core$order_bys__delegate(args__70829__auto__);
});
metabase$lib$core$order_bys.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$order_bys__delegate;
return metabase$lib$core$order_bys;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.orderable_columns = (function() { 
var metabase$lib$core$orderable_columns__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.order_by.orderable_columns,args__70829__auto__);
};
var metabase$lib$core$orderable_columns = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80363__i = 0, G__80363__a = new Array(arguments.length -  0);
while (G__80363__i < G__80363__a.length) {G__80363__a[G__80363__i] = arguments[G__80363__i + 0]; ++G__80363__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80363__a,0,null);
} 
return metabase$lib$core$orderable_columns__delegate.call(this,args__70829__auto__);};
metabase$lib$core$orderable_columns.cljs$lang$maxFixedArity = 0;
metabase$lib$core$orderable_columns.cljs$lang$applyTo = (function (arglist__80364){
var args__70829__auto__ = cljs.core.seq(arglist__80364);
return metabase$lib$core$orderable_columns__delegate(args__70829__auto__);
});
metabase$lib$core$orderable_columns.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$orderable_columns__delegate;
return metabase$lib$core$orderable_columns;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.normalize = (function() { 
var metabase$lib$core$normalize__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.normalize.normalize,args__70829__auto__);
};
var metabase$lib$core$normalize = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80365__i = 0, G__80365__a = new Array(arguments.length -  0);
while (G__80365__i < G__80365__a.length) {G__80365__a[G__80365__i] = arguments[G__80365__i + 0]; ++G__80365__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80365__a,0,null);
} 
return metabase$lib$core$normalize__delegate.call(this,args__70829__auto__);};
metabase$lib$core$normalize.cljs$lang$maxFixedArity = 0;
metabase$lib$core$normalize.cljs$lang$applyTo = (function (arglist__80366){
var args__70829__auto__ = cljs.core.seq(arglist__80366);
return metabase$lib$core$normalize__delegate(args__70829__auto__);
});
metabase$lib$core$normalize.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$normalize__delegate;
return metabase$lib$core$normalize;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.can_preview = (function() { 
var metabase$lib$core$can_preview__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.query.can_preview,args__70829__auto__);
};
var metabase$lib$core$can_preview = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80367__i = 0, G__80367__a = new Array(arguments.length -  0);
while (G__80367__i < G__80367__a.length) {G__80367__a[G__80367__i] = arguments[G__80367__i + 0]; ++G__80367__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80367__a,0,null);
} 
return metabase$lib$core$can_preview__delegate.call(this,args__70829__auto__);};
metabase$lib$core$can_preview.cljs$lang$maxFixedArity = 0;
metabase$lib$core$can_preview.cljs$lang$applyTo = (function (arglist__80368){
var args__70829__auto__ = cljs.core.seq(arglist__80368);
return metabase$lib$core$can_preview__delegate(args__70829__auto__);
});
metabase$lib$core$can_preview.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$can_preview__delegate;
return metabase$lib$core$can_preview;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.can_run = (function() { 
var metabase$lib$core$can_run__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.query.can_run,args__70829__auto__);
};
var metabase$lib$core$can_run = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80369__i = 0, G__80369__a = new Array(arguments.length -  0);
while (G__80369__i < G__80369__a.length) {G__80369__a[G__80369__i] = arguments[G__80369__i + 0]; ++G__80369__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80369__a,0,null);
} 
return metabase$lib$core$can_run__delegate.call(this,args__70829__auto__);};
metabase$lib$core$can_run.cljs$lang$maxFixedArity = 0;
metabase$lib$core$can_run.cljs$lang$applyTo = (function (arglist__80370){
var args__70829__auto__ = cljs.core.seq(arglist__80370);
return metabase$lib$core$can_run__delegate(args__70829__auto__);
});
metabase$lib$core$can_run.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$can_run__delegate;
return metabase$lib$core$can_run;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.can_save = (function() { 
var metabase$lib$core$can_save__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.query.can_save,args__70829__auto__);
};
var metabase$lib$core$can_save = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80371__i = 0, G__80371__a = new Array(arguments.length -  0);
while (G__80371__i < G__80371__a.length) {G__80371__a[G__80371__i] = arguments[G__80371__i + 0]; ++G__80371__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80371__a,0,null);
} 
return metabase$lib$core$can_save__delegate.call(this,args__70829__auto__);};
metabase$lib$core$can_save.cljs$lang$maxFixedArity = 0;
metabase$lib$core$can_save.cljs$lang$applyTo = (function (arglist__80372){
var args__70829__auto__ = cljs.core.seq(arglist__80372);
return metabase$lib$core$can_save__delegate(args__70829__auto__);
});
metabase$lib$core$can_save.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$can_save__delegate;
return metabase$lib$core$can_save;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.preview_query = (function() { 
var metabase$lib$core$preview_query__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.query.preview_query,args__70829__auto__);
};
var metabase$lib$core$preview_query = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80373__i = 0, G__80373__a = new Array(arguments.length -  0);
while (G__80373__i < G__80373__a.length) {G__80373__a[G__80373__i] = arguments[G__80373__i + 0]; ++G__80373__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80373__a,0,null);
} 
return metabase$lib$core$preview_query__delegate.call(this,args__70829__auto__);};
metabase$lib$core$preview_query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$preview_query.cljs$lang$applyTo = (function (arglist__80374){
var args__70829__auto__ = cljs.core.seq(arglist__80374);
return metabase$lib$core$preview_query__delegate(args__70829__auto__);
});
metabase$lib$core$preview_query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$preview_query__delegate;
return metabase$lib$core$preview_query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.query = (function() { 
var metabase$lib$core$query__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.query.query,args__70829__auto__);
};
var metabase$lib$core$query = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80375__i = 0, G__80375__a = new Array(arguments.length -  0);
while (G__80375__i < G__80375__a.length) {G__80375__a[G__80375__i] = arguments[G__80375__i + 0]; ++G__80375__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80375__a,0,null);
} 
return metabase$lib$core$query__delegate.call(this,args__70829__auto__);};
metabase$lib$core$query.cljs$lang$maxFixedArity = 0;
metabase$lib$core$query.cljs$lang$applyTo = (function (arglist__80376){
var args__70829__auto__ = cljs.core.seq(arglist__80376);
return metabase$lib$core$query__delegate(args__70829__auto__);
});
metabase$lib$core$query.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$query__delegate;
return metabase$lib$core$query;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.stage_count = (function() { 
var metabase$lib$core$stage_count__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.query.stage_count,args__70829__auto__);
};
var metabase$lib$core$stage_count = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80377__i = 0, G__80377__a = new Array(arguments.length -  0);
while (G__80377__i < G__80377__a.length) {G__80377__a[G__80377__i] = arguments[G__80377__i + 0]; ++G__80377__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80377__a,0,null);
} 
return metabase$lib$core$stage_count__delegate.call(this,args__70829__auto__);};
metabase$lib$core$stage_count.cljs$lang$maxFixedArity = 0;
metabase$lib$core$stage_count.cljs$lang$applyTo = (function (arglist__80378){
var args__70829__auto__ = cljs.core.seq(arglist__80378);
return metabase$lib$core$stage_count__delegate(args__70829__auto__);
});
metabase$lib$core$stage_count.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$stage_count__delegate;
return metabase$lib$core$stage_count;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.uses_metric_QMARK_ = (function() { 
var metabase$lib$core$uses_metric_QMARK___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.query.uses_metric_QMARK_,args__70829__auto__);
};
var metabase$lib$core$uses_metric_QMARK_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80379__i = 0, G__80379__a = new Array(arguments.length -  0);
while (G__80379__i < G__80379__a.length) {G__80379__a[G__80379__i] = arguments[G__80379__i + 0]; ++G__80379__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80379__a,0,null);
} 
return metabase$lib$core$uses_metric_QMARK___delegate.call(this,args__70829__auto__);};
metabase$lib$core$uses_metric_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$uses_metric_QMARK_.cljs$lang$applyTo = (function (arglist__80380){
var args__70829__auto__ = cljs.core.seq(arglist__80380);
return metabase$lib$core$uses_metric_QMARK___delegate(args__70829__auto__);
});
metabase$lib$core$uses_metric_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$uses_metric_QMARK___delegate;
return metabase$lib$core$uses_metric_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.uses_segment_QMARK_ = (function() { 
var metabase$lib$core$uses_segment_QMARK___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.query.uses_segment_QMARK_,args__70829__auto__);
};
var metabase$lib$core$uses_segment_QMARK_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80381__i = 0, G__80381__a = new Array(arguments.length -  0);
while (G__80381__i < G__80381__a.length) {G__80381__a[G__80381__i] = arguments[G__80381__i + 0]; ++G__80381__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80381__a,0,null);
} 
return metabase$lib$core$uses_segment_QMARK___delegate.call(this,args__70829__auto__);};
metabase$lib$core$uses_segment_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$uses_segment_QMARK_.cljs$lang$applyTo = (function (arglist__80382){
var args__70829__auto__ = cljs.core.seq(arglist__80382);
return metabase$lib$core$uses_segment_QMARK___delegate(args__70829__auto__);
});
metabase$lib$core$uses_segment_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$uses_segment_QMARK___delegate;
return metabase$lib$core$uses_segment_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_different_table = (function() { 
var metabase$lib$core$with_different_table__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.query.with_different_table,args__70829__auto__);
};
var metabase$lib$core$with_different_table = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80383__i = 0, G__80383__a = new Array(arguments.length -  0);
while (G__80383__i < G__80383__a.length) {G__80383__a[G__80383__i] = arguments[G__80383__i + 0]; ++G__80383__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80383__a,0,null);
} 
return metabase$lib$core$with_different_table__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_different_table.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_different_table.cljs$lang$applyTo = (function (arglist__80384){
var args__70829__auto__ = cljs.core.seq(arglist__80384);
return metabase$lib$core$with_different_table__delegate(args__70829__auto__);
});
metabase$lib$core$with_different_table.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_different_table__delegate;
return metabase$lib$core$with_different_table;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.ref = (function() { 
var metabase$lib$core$ref__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,args__70829__auto__);
};
var metabase$lib$core$ref = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80388__i = 0, G__80388__a = new Array(arguments.length -  0);
while (G__80388__i < G__80388__a.length) {G__80388__a[G__80388__i] = arguments[G__80388__i + 0]; ++G__80388__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80388__a,0,null);
} 
return metabase$lib$core$ref__delegate.call(this,args__70829__auto__);};
metabase$lib$core$ref.cljs$lang$maxFixedArity = 0;
metabase$lib$core$ref.cljs$lang$applyTo = (function (arglist__80389){
var args__70829__auto__ = cljs.core.seq(arglist__80389);
return metabase$lib$core$ref__delegate(args__70829__auto__);
});
metabase$lib$core$ref.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$ref__delegate;
return metabase$lib$core$ref;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.remove_clause = (function() { 
var metabase$lib$core$remove_clause__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.remove_replace.remove_clause,args__70829__auto__);
};
var metabase$lib$core$remove_clause = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80390__i = 0, G__80390__a = new Array(arguments.length -  0);
while (G__80390__i < G__80390__a.length) {G__80390__a[G__80390__i] = arguments[G__80390__i + 0]; ++G__80390__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80390__a,0,null);
} 
return metabase$lib$core$remove_clause__delegate.call(this,args__70829__auto__);};
metabase$lib$core$remove_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$remove_clause.cljs$lang$applyTo = (function (arglist__80391){
var args__70829__auto__ = cljs.core.seq(arglist__80391);
return metabase$lib$core$remove_clause__delegate(args__70829__auto__);
});
metabase$lib$core$remove_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$remove_clause__delegate;
return metabase$lib$core$remove_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.remove_join = (function() { 
var metabase$lib$core$remove_join__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.remove_replace.remove_join,args__70829__auto__);
};
var metabase$lib$core$remove_join = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80392__i = 0, G__80392__a = new Array(arguments.length -  0);
while (G__80392__i < G__80392__a.length) {G__80392__a[G__80392__i] = arguments[G__80392__i + 0]; ++G__80392__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80392__a,0,null);
} 
return metabase$lib$core$remove_join__delegate.call(this,args__70829__auto__);};
metabase$lib$core$remove_join.cljs$lang$maxFixedArity = 0;
metabase$lib$core$remove_join.cljs$lang$applyTo = (function (arglist__80393){
var args__70829__auto__ = cljs.core.seq(arglist__80393);
return metabase$lib$core$remove_join__delegate(args__70829__auto__);
});
metabase$lib$core$remove_join.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$remove_join__delegate;
return metabase$lib$core$remove_join;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.rename_join = (function() { 
var metabase$lib$core$rename_join__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.remove_replace.rename_join,args__70829__auto__);
};
var metabase$lib$core$rename_join = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80394__i = 0, G__80394__a = new Array(arguments.length -  0);
while (G__80394__i < G__80394__a.length) {G__80394__a[G__80394__i] = arguments[G__80394__i + 0]; ++G__80394__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80394__a,0,null);
} 
return metabase$lib$core$rename_join__delegate.call(this,args__70829__auto__);};
metabase$lib$core$rename_join.cljs$lang$maxFixedArity = 0;
metabase$lib$core$rename_join.cljs$lang$applyTo = (function (arglist__80395){
var args__70829__auto__ = cljs.core.seq(arglist__80395);
return metabase$lib$core$rename_join__delegate(args__70829__auto__);
});
metabase$lib$core$rename_join.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$rename_join__delegate;
return metabase$lib$core$rename_join;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.replace_clause = (function() { 
var metabase$lib$core$replace_clause__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.remove_replace.replace_clause,args__70829__auto__);
};
var metabase$lib$core$replace_clause = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80396__i = 0, G__80396__a = new Array(arguments.length -  0);
while (G__80396__i < G__80396__a.length) {G__80396__a[G__80396__i] = arguments[G__80396__i + 0]; ++G__80396__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80396__a,0,null);
} 
return metabase$lib$core$replace_clause__delegate.call(this,args__70829__auto__);};
metabase$lib$core$replace_clause.cljs$lang$maxFixedArity = 0;
metabase$lib$core$replace_clause.cljs$lang$applyTo = (function (arglist__80397){
var args__70829__auto__ = cljs.core.seq(arglist__80397);
return metabase$lib$core$replace_clause__delegate(args__70829__auto__);
});
metabase$lib$core$replace_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$replace_clause__delegate;
return metabase$lib$core$replace_clause;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.replace_join = (function() { 
var metabase$lib$core$replace_join__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.remove_replace.replace_join,args__70829__auto__);
};
var metabase$lib$core$replace_join = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80398__i = 0, G__80398__a = new Array(arguments.length -  0);
while (G__80398__i < G__80398__a.length) {G__80398__a[G__80398__i] = arguments[G__80398__i + 0]; ++G__80398__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80398__a,0,null);
} 
return metabase$lib$core$replace_join__delegate.call(this,args__70829__auto__);};
metabase$lib$core$replace_join.cljs$lang$maxFixedArity = 0;
metabase$lib$core$replace_join.cljs$lang$applyTo = (function (arglist__80399){
var args__70829__auto__ = cljs.core.seq(arglist__80399);
return metabase$lib$core$replace_join__delegate(args__70829__auto__);
});
metabase$lib$core$replace_join.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$replace_join__delegate;
return metabase$lib$core$replace_join;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_segments = (function() { 
var metabase$lib$core$available_segments__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.segment.available_segments,args__70829__auto__);
};
var metabase$lib$core$available_segments = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80400__i = 0, G__80400__a = new Array(arguments.length -  0);
while (G__80400__i < G__80400__a.length) {G__80400__a[G__80400__i] = arguments[G__80400__i + 0]; ++G__80400__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80400__a,0,null);
} 
return metabase$lib$core$available_segments__delegate.call(this,args__70829__auto__);};
metabase$lib$core$available_segments.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_segments.cljs$lang$applyTo = (function (arglist__80401){
var args__70829__auto__ = cljs.core.seq(arglist__80401);
return metabase$lib$core$available_segments__delegate(args__70829__auto__);
});
metabase$lib$core$available_segments.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_segments__delegate;
return metabase$lib$core$available_segments;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.append_stage = (function() { 
var metabase$lib$core$append_stage__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.stage.append_stage,args__70829__auto__);
};
var metabase$lib$core$append_stage = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80402__i = 0, G__80402__a = new Array(arguments.length -  0);
while (G__80402__i < G__80402__a.length) {G__80402__a[G__80402__i] = arguments[G__80402__i + 0]; ++G__80402__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80402__a,0,null);
} 
return metabase$lib$core$append_stage__delegate.call(this,args__70829__auto__);};
metabase$lib$core$append_stage.cljs$lang$maxFixedArity = 0;
metabase$lib$core$append_stage.cljs$lang$applyTo = (function (arglist__80403){
var args__70829__auto__ = cljs.core.seq(arglist__80403);
return metabase$lib$core$append_stage__delegate(args__70829__auto__);
});
metabase$lib$core$append_stage.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$append_stage__delegate;
return metabase$lib$core$append_stage;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.drop_stage = (function() { 
var metabase$lib$core$drop_stage__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.stage.drop_stage,args__70829__auto__);
};
var metabase$lib$core$drop_stage = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80404__i = 0, G__80404__a = new Array(arguments.length -  0);
while (G__80404__i < G__80404__a.length) {G__80404__a[G__80404__i] = arguments[G__80404__i + 0]; ++G__80404__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80404__a,0,null);
} 
return metabase$lib$core$drop_stage__delegate.call(this,args__70829__auto__);};
metabase$lib$core$drop_stage.cljs$lang$maxFixedArity = 0;
metabase$lib$core$drop_stage.cljs$lang$applyTo = (function (arglist__80405){
var args__70829__auto__ = cljs.core.seq(arglist__80405);
return metabase$lib$core$drop_stage__delegate(args__70829__auto__);
});
metabase$lib$core$drop_stage.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$drop_stage__delegate;
return metabase$lib$core$drop_stage;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.drop_empty_stages = (function() { 
var metabase$lib$core$drop_empty_stages__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.stage.drop_empty_stages,args__70829__auto__);
};
var metabase$lib$core$drop_empty_stages = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80406__i = 0, G__80406__a = new Array(arguments.length -  0);
while (G__80406__i < G__80406__a.length) {G__80406__a[G__80406__i] = arguments[G__80406__i + 0]; ++G__80406__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80406__a,0,null);
} 
return metabase$lib$core$drop_empty_stages__delegate.call(this,args__70829__auto__);};
metabase$lib$core$drop_empty_stages.cljs$lang$maxFixedArity = 0;
metabase$lib$core$drop_empty_stages.cljs$lang$applyTo = (function (arglist__80407){
var args__70829__auto__ = cljs.core.seq(arglist__80407);
return metabase$lib$core$drop_empty_stages__delegate(args__70829__auto__);
});
metabase$lib$core$drop_empty_stages.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$drop_empty_stages__delegate;
return metabase$lib$core$drop_empty_stages;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.has_clauses_QMARK_ = (function() { 
var metabase$lib$core$has_clauses_QMARK___delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.stage.has_clauses_QMARK_,args__70829__auto__);
};
var metabase$lib$core$has_clauses_QMARK_ = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80408__i = 0, G__80408__a = new Array(arguments.length -  0);
while (G__80408__i < G__80408__a.length) {G__80408__a[G__80408__i] = arguments[G__80408__i + 0]; ++G__80408__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80408__a,0,null);
} 
return metabase$lib$core$has_clauses_QMARK___delegate.call(this,args__70829__auto__);};
metabase$lib$core$has_clauses_QMARK_.cljs$lang$maxFixedArity = 0;
metabase$lib$core$has_clauses_QMARK_.cljs$lang$applyTo = (function (arglist__80409){
var args__70829__auto__ = cljs.core.seq(arglist__80409);
return metabase$lib$core$has_clauses_QMARK___delegate(args__70829__auto__);
});
metabase$lib$core$has_clauses_QMARK_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$has_clauses_QMARK___delegate;
return metabase$lib$core$has_clauses_QMARK_;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.swap_clauses = (function() { 
var metabase$lib$core$swap_clauses__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.swap.swap_clauses,args__70829__auto__);
};
var metabase$lib$core$swap_clauses = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80410__i = 0, G__80410__a = new Array(arguments.length -  0);
while (G__80410__i < G__80410__a.length) {G__80410__a[G__80410__i] = arguments[G__80410__i + 0]; ++G__80410__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80410__a,0,null);
} 
return metabase$lib$core$swap_clauses__delegate.call(this,args__70829__auto__);};
metabase$lib$core$swap_clauses.cljs$lang$maxFixedArity = 0;
metabase$lib$core$swap_clauses.cljs$lang$applyTo = (function (arglist__80411){
var args__70829__auto__ = cljs.core.seq(arglist__80411);
return metabase$lib$core$swap_clauses__delegate(args__70829__auto__);
});
metabase$lib$core$swap_clauses.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$swap_clauses__delegate;
return metabase$lib$core$swap_clauses;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.describe_temporal_unit = (function() { 
var metabase$lib$core$describe_temporal_unit__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.describe_temporal_unit,args__70829__auto__);
};
var metabase$lib$core$describe_temporal_unit = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80412__i = 0, G__80412__a = new Array(arguments.length -  0);
while (G__80412__i < G__80412__a.length) {G__80412__a[G__80412__i] = arguments[G__80412__i + 0]; ++G__80412__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80412__a,0,null);
} 
return metabase$lib$core$describe_temporal_unit__delegate.call(this,args__70829__auto__);};
metabase$lib$core$describe_temporal_unit.cljs$lang$maxFixedArity = 0;
metabase$lib$core$describe_temporal_unit.cljs$lang$applyTo = (function (arglist__80413){
var args__70829__auto__ = cljs.core.seq(arglist__80413);
return metabase$lib$core$describe_temporal_unit__delegate(args__70829__auto__);
});
metabase$lib$core$describe_temporal_unit.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$describe_temporal_unit__delegate;
return metabase$lib$core$describe_temporal_unit;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.describe_temporal_interval = (function() { 
var metabase$lib$core$describe_temporal_interval__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.describe_temporal_interval,args__70829__auto__);
};
var metabase$lib$core$describe_temporal_interval = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80414__i = 0, G__80414__a = new Array(arguments.length -  0);
while (G__80414__i < G__80414__a.length) {G__80414__a[G__80414__i] = arguments[G__80414__i + 0]; ++G__80414__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80414__a,0,null);
} 
return metabase$lib$core$describe_temporal_interval__delegate.call(this,args__70829__auto__);};
metabase$lib$core$describe_temporal_interval.cljs$lang$maxFixedArity = 0;
metabase$lib$core$describe_temporal_interval.cljs$lang$applyTo = (function (arglist__80415){
var args__70829__auto__ = cljs.core.seq(arglist__80415);
return metabase$lib$core$describe_temporal_interval__delegate(args__70829__auto__);
});
metabase$lib$core$describe_temporal_interval.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$describe_temporal_interval__delegate;
return metabase$lib$core$describe_temporal_interval;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.describe_relative_datetime = (function() { 
var metabase$lib$core$describe_relative_datetime__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.describe_relative_datetime,args__70829__auto__);
};
var metabase$lib$core$describe_relative_datetime = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80416__i = 0, G__80416__a = new Array(arguments.length -  0);
while (G__80416__i < G__80416__a.length) {G__80416__a[G__80416__i] = arguments[G__80416__i + 0]; ++G__80416__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80416__a,0,null);
} 
return metabase$lib$core$describe_relative_datetime__delegate.call(this,args__70829__auto__);};
metabase$lib$core$describe_relative_datetime.cljs$lang$maxFixedArity = 0;
metabase$lib$core$describe_relative_datetime.cljs$lang$applyTo = (function (arglist__80417){
var args__70829__auto__ = cljs.core.seq(arglist__80417);
return metabase$lib$core$describe_relative_datetime__delegate(args__70829__auto__);
});
metabase$lib$core$describe_relative_datetime.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$describe_relative_datetime__delegate;
return metabase$lib$core$describe_relative_datetime;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_temporal_buckets = (function() { 
var metabase$lib$core$available_temporal_buckets__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.available_temporal_buckets,args__70829__auto__);
};
var metabase$lib$core$available_temporal_buckets = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80418__i = 0, G__80418__a = new Array(arguments.length -  0);
while (G__80418__i < G__80418__a.length) {G__80418__a[G__80418__i] = arguments[G__80418__i + 0]; ++G__80418__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80418__a,0,null);
} 
return metabase$lib$core$available_temporal_buckets__delegate.call(this,args__70829__auto__);};
metabase$lib$core$available_temporal_buckets.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_temporal_buckets.cljs$lang$applyTo = (function (arglist__80419){
var args__70829__auto__ = cljs.core.seq(arglist__80419);
return metabase$lib$core$available_temporal_buckets__delegate(args__70829__auto__);
});
metabase$lib$core$available_temporal_buckets.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_temporal_buckets__delegate;
return metabase$lib$core$available_temporal_buckets;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.available_temporal_units = (function() { 
var metabase$lib$core$available_temporal_units__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.available_temporal_units,args__70829__auto__);
};
var metabase$lib$core$available_temporal_units = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80420__i = 0, G__80420__a = new Array(arguments.length -  0);
while (G__80420__i < G__80420__a.length) {G__80420__a[G__80420__i] = arguments[G__80420__i + 0]; ++G__80420__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80420__a,0,null);
} 
return metabase$lib$core$available_temporal_units__delegate.call(this,args__70829__auto__);};
metabase$lib$core$available_temporal_units.cljs$lang$maxFixedArity = 0;
metabase$lib$core$available_temporal_units.cljs$lang$applyTo = (function (arglist__80421){
var args__70829__auto__ = cljs.core.seq(arglist__80421);
return metabase$lib$core$available_temporal_units__delegate(args__70829__auto__);
});
metabase$lib$core$available_temporal_units.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$available_temporal_units__delegate;
return metabase$lib$core$available_temporal_units;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.raw_temporal_bucket = (function() { 
var metabase$lib$core$raw_temporal_bucket__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.raw_temporal_bucket,args__70829__auto__);
};
var metabase$lib$core$raw_temporal_bucket = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80422__i = 0, G__80422__a = new Array(arguments.length -  0);
while (G__80422__i < G__80422__a.length) {G__80422__a[G__80422__i] = arguments[G__80422__i + 0]; ++G__80422__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80422__a,0,null);
} 
return metabase$lib$core$raw_temporal_bucket__delegate.call(this,args__70829__auto__);};
metabase$lib$core$raw_temporal_bucket.cljs$lang$maxFixedArity = 0;
metabase$lib$core$raw_temporal_bucket.cljs$lang$applyTo = (function (arglist__80423){
var args__70829__auto__ = cljs.core.seq(arglist__80423);
return metabase$lib$core$raw_temporal_bucket__delegate(args__70829__auto__);
});
metabase$lib$core$raw_temporal_bucket.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$raw_temporal_bucket__delegate;
return metabase$lib$core$raw_temporal_bucket;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.temporal_bucket = (function() { 
var metabase$lib$core$temporal_bucket__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.temporal_bucket,args__70829__auto__);
};
var metabase$lib$core$temporal_bucket = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80424__i = 0, G__80424__a = new Array(arguments.length -  0);
while (G__80424__i < G__80424__a.length) {G__80424__a[G__80424__i] = arguments[G__80424__i + 0]; ++G__80424__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80424__a,0,null);
} 
return metabase$lib$core$temporal_bucket__delegate.call(this,args__70829__auto__);};
metabase$lib$core$temporal_bucket.cljs$lang$maxFixedArity = 0;
metabase$lib$core$temporal_bucket.cljs$lang$applyTo = (function (arglist__80425){
var args__70829__auto__ = cljs.core.seq(arglist__80425);
return metabase$lib$core$temporal_bucket__delegate(args__70829__auto__);
});
metabase$lib$core$temporal_bucket.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$temporal_bucket__delegate;
return metabase$lib$core$temporal_bucket;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.with_temporal_bucket = (function() { 
var metabase$lib$core$with_temporal_bucket__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.with_temporal_bucket,args__70829__auto__);
};
var metabase$lib$core$with_temporal_bucket = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80426__i = 0, G__80426__a = new Array(arguments.length -  0);
while (G__80426__i < G__80426__a.length) {G__80426__a[G__80426__i] = arguments[G__80426__i + 0]; ++G__80426__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80426__a,0,null);
} 
return metabase$lib$core$with_temporal_bucket__delegate.call(this,args__70829__auto__);};
metabase$lib$core$with_temporal_bucket.cljs$lang$maxFixedArity = 0;
metabase$lib$core$with_temporal_bucket.cljs$lang$applyTo = (function (arglist__80427){
var args__70829__auto__ = cljs.core.seq(arglist__80427);
return metabase$lib$core$with_temporal_bucket__delegate(args__70829__auto__);
});
metabase$lib$core$with_temporal_bucket.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$with_temporal_bucket__delegate;
return metabase$lib$core$with_temporal_bucket;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.normalized_query_type = (function() { 
var metabase$lib$core$normalized_query_type__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.normalized_query_type,args__70829__auto__);
};
var metabase$lib$core$normalized_query_type = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80428__i = 0, G__80428__a = new Array(arguments.length -  0);
while (G__80428__i < G__80428__a.length) {G__80428__a[G__80428__i] = arguments[G__80428__i + 0]; ++G__80428__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80428__a,0,null);
} 
return metabase$lib$core$normalized_query_type__delegate.call(this,args__70829__auto__);};
metabase$lib$core$normalized_query_type.cljs$lang$maxFixedArity = 0;
metabase$lib$core$normalized_query_type.cljs$lang$applyTo = (function (arglist__80429){
var args__70829__auto__ = cljs.core.seq(arglist__80429);
return metabase$lib$core$normalized_query_type__delegate(args__70829__auto__);
});
metabase$lib$core$normalized_query_type.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$normalized_query_type__delegate;
return metabase$lib$core$normalized_query_type;
})()
;

/**
 * docstring
 * @param {...*} var_args
 */
metabase.lib.core.source_table_id = (function() { 
var metabase$lib$core$source_table_id__delegate = function (args__70829__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.source_table_id,args__70829__auto__);
};
var metabase$lib$core$source_table_id = function (var_args){
var args__70829__auto__ = null;
if (arguments.length > 0) {
var G__80430__i = 0, G__80430__a = new Array(arguments.length -  0);
while (G__80430__i < G__80430__a.length) {G__80430__a[G__80430__i] = arguments[G__80430__i + 0]; ++G__80430__i;}
  args__70829__auto__ = new cljs.core.IndexedSeq(G__80430__a,0,null);
} 
return metabase$lib$core$source_table_id__delegate.call(this,args__70829__auto__);};
metabase$lib$core$source_table_id.cljs$lang$maxFixedArity = 0;
metabase$lib$core$source_table_id.cljs$lang$applyTo = (function (arglist__80431){
var args__70829__auto__ = cljs.core.seq(arglist__80431);
return metabase$lib$core$source_table_id__delegate(args__70829__auto__);
});
metabase$lib$core$source_table_id.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$core$source_table_id__delegate;
return metabase$lib$core$source_table_id;
})()
;

//# sourceMappingURL=metabase.lib.core.js.map
