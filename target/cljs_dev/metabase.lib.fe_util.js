var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.legacy_mbql.normalize.js");
require("./metabase.lib.card.js");
require("./metabase.lib.common.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.field.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.query.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.util.js");
require("./metabase.lib.util.match.js");
require("./metabase.shared.formatting.date.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.shared.util.time.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.fe_util.js");

goog.provide('metabase.lib.fe_util');
metabase.lib.fe_util.ExpressionParts = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("mbql","expression-parts","mbql/expression-parts",-1116248354)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null);
metabase.lib.fe_util.expandable_time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hour","hour",-555989214),null], null), null);
metabase.lib.fe_util.expandable_date_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"quarter","quarter",-508147616),null,new cljs.core.Keyword(null,"week","week",-1326473278),null,new cljs.core.Keyword(null,"month","month",-1960248533),null,new cljs.core.Keyword(null,"year","year",335913393),null], null), null);
metabase.lib.fe_util.expandable_temporal_units = cljs.core.into.cljs$core$IFn$_invoke$arity$2(metabase.lib.fe_util.expandable_time_units,metabase.lib.fe_util.expandable_date_units);
metabase.lib.fe_util.expandable_temporal_expression_QMARK_ = (function metabase$lib$fe_util$expandable_temporal_expression_QMARK_(p__79610){
var vec__79611 = p__79610;
var seq__79612 = cljs.core.seq(vec__79611);
var first__79613 = cljs.core.first(seq__79612);
var seq__79612__$1 = cljs.core.next(seq__79612);
var operator = first__79613;
var first__79613__$1 = cljs.core.first(seq__79612__$1);
var seq__79612__$2 = cljs.core.next(seq__79612__$1);
var _options = first__79613__$1;
var vec__79614 = seq__79612__$2;
var maybe_clause_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79614,(0),null);
var other_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79614,(1),null);
var args = vec__79614;
return cljs.core.boolean$((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"=","=",1152933628),operator);
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(args));
if(and__5000__auto____$1){
var and__5000__auto____$2 = metabase.lib.util.clause_QMARK_(maybe_clause_arg);
if(and__5000__auto____$2){
var and__5000__auto____$3 = cljs.core.contains_QMARK_(metabase.lib.fe_util.expandable_temporal_units,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(maybe_clause_arg)));
if(and__5000__auto____$3){
return metabase.shared.util.time.timestamp_coercible_QMARK_(other_arg);
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})());
});
/**
 * Modify expression in a way, that its resulting [[expression-parts]] are digestable by filter picker.
 * 
 * Current filter picker implementation is unable to handle expression parts of expressions of a form
 * `[:= {...} [:field {:temporal-unit :week} 11] "2024-05-12"]` -- expresions that check for equality of a column
 * with `:temporal-unit` set to value other than `:day` or `:minute` to some date time value.
 * 
 * To mitigate that expressions are converted to `:between` form which is handled correctly by filter picker. For more
 * info on the issue see the comment [https://github.com/metabase/metabase/issues/12496#issuecomment-1629317661].
 * This functionality is backend approach to "smaller solution".
 */
metabase.lib.fe_util.expand_temporal_expression = (function metabase$lib$fe_util$expand_temporal_expression(p__79617){
var vec__79618 = p__79617;
var _operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79618,(0),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79618,(1),null);
var column_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79618,(2),null);
var dt_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79618,(3),null);
var _expression_clause = vec__79618;
var temporal_unit = new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(column_arg));
var interval = metabase.shared.util.time.to_range.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.shared.util.time.coerce_to_timestamp.cljs$core$IFn$_invoke$arity$1(dt_arg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),temporal_unit,new cljs.core.Keyword(null,"n","n",562130025),(1)], null)], 0));
var formatter = ((cljs.core.contains_QMARK_(metabase.lib.fe_util.expandable_time_units,temporal_unit))?metabase.shared.formatting.date.datetime__GT_iso_string:metabase.shared.formatting.date.date__GT_iso_string);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),options,column_arg], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(formatter),interval);
});
metabase.lib.fe_util.maybe_expand_temporal_expression = (function metabase$lib$fe_util$maybe_expand_temporal_expression(expression_clause){
if(metabase.lib.fe_util.expandable_temporal_expression_QMARK_(expression_clause)){
return metabase.lib.fe_util.expand_temporal_expression(expression_clause);
} else {
return expression_clause;
}
});
/**
 * Inputs: ([query expression-clause]
 *         [query :- :metabase.lib.schema/query stage-number :- :int expression-clause :- :metabase.lib.schema.expression/expression])
 *   Return: ExpressionParts
 *        
 * 
 *   Return the parts of the filter clause `expression-clause` in query `query` at stage `stage-number`.
 */
metabase.lib.fe_util.expression_parts = (function() {
var metabase$lib$fe_util$expression_parts = null;
var metabase$lib$fe_util$expression_parts__2 = (function (query,expression_clause){
return (metabase.lib.fe_util.expression_parts.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.fe_util.expression_parts.cljs$core$IFn$_invoke$arity$3(query,(-1),expression_clause) : metabase.lib.fe_util.expression_parts.call(null,query,(-1),expression_clause));
});
var metabase$lib$fe_util$expression_parts__3 = (function (query,stage_number,expression_clause){
var vec__79622 = metabase.lib.fe_util.maybe_expand_temporal_expression(expression_clause);
var seq__79623 = cljs.core.seq(vec__79622);
var first__79624 = cljs.core.first(seq__79623);
var seq__79623__$1 = cljs.core.next(seq__79623);
var op = first__79624;
var first__79624__$1 = cljs.core.first(seq__79623__$1);
var seq__79623__$2 = cljs.core.next(seq__79623__$1);
var options = first__79624__$1;
var args = seq__79623__$2;
var __GT_maybe_col = (function (p1__79621_SHARP_){
if(metabase.lib.util.ref_clause_QMARK_(p1__79621_SHARP_)){
return metabase.lib.filter.add_column_operators(metabase.lib.field.extend_column_metadata_from_ref(query,stage_number,metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,p1__79621_SHARP_),p1__79621_SHARP_));
} else {
return null;
}
});
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","expression-parts","mbql/expression-parts",-1116248354),new cljs.core.Keyword(null,"operator","operator",-1860875338),op,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (arg){
if(metabase.lib.util.clause_QMARK_(arg)){
var temp__5802__auto__ = __GT_maybe_col(arg);
if(cljs.core.truth_(temp__5802__auto__)){
var col = temp__5802__auto__;
return col;
} else {
return (metabase.lib.fe_util.expression_parts.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.fe_util.expression_parts.cljs$core$IFn$_invoke$arity$3(query,stage_number,arg) : metabase.lib.fe_util.expression_parts.call(null,query,stage_number,arg));
}
} else {
return arg;
}
}),args)], null);
});
metabase$lib$fe_util$expression_parts = function(query,stage_number,expression_clause){
switch(arguments.length){
case 2:
return metabase$lib$fe_util$expression_parts__2.call(this,query,stage_number);
case 3:
return metabase$lib$fe_util$expression_parts__3.call(this,query,stage_number,expression_clause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$fe_util$expression_parts.cljs$core$IFn$_invoke$arity$2 = metabase$lib$fe_util$expression_parts__2;
metabase$lib$fe_util$expression_parts.cljs$core$IFn$_invoke$arity$3 = metabase$lib$fe_util$expression_parts__3;
return metabase$lib$fe_util$expression_parts;
})()
;
metabase.lib.common.__GT_op_arg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","expression-parts","mbql/expression-parts",-1116248354),(function (p__79625){
var map__79626 = p__79625;
var map__79626__$1 = cljs.core.__destructure_map(map__79626);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79626__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79626__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79626__$1,new cljs.core.Keyword(null,"args","args",1315556576));
return metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(metabase.lib.options.ensure_uuid(cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(operator),options], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.common.__GT_op_arg),args)));
}));
/**
 * Inputs: [operator :- :keyword args :- [:sequential :any] options :- [:maybe :map]]
 *   Return: :metabase.lib.schema.expression/expression
 *        
 * 
 *   Returns a standalone clause for an `operator`, `options`, and arguments.
 */
metabase.lib.fe_util.expression_clause = (function metabase$lib$fe_util$expression_clause(operator,args,options){
return metabase.lib.options.ensure_uuid(cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [operator,options], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.common.__GT_op_arg),args));
});
/**
 * Inputs: [query stage-number filter-clause]
 *   Return: :string
 *        
 * 
 *   Provides a reasonable display name for the `filter-clause` excluding the column-name.
 * Can be expanded as needed but only currently defined for a narrow set of date filters.
 * 
 * Falls back to the full filter display-name
 */
metabase.lib.fe_util.filter_args_display_name = (function metabase$lib$fe_util$filter_args_display_name(query,stage_number,filter_clause){
var __GT_temporal_name = (function (p1__79627_SHARP_){
return metabase.shared.util.time.format_unit.cljs$core$IFn$_invoke$arity$2(p1__79627_SHARP_,null);
});
var temporal_QMARK_ = (function (p1__79628_SHARP_){
return metabase.lib.util.original_isa_QMARK_(p1__79628_SHARP_,new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
});
var unit_is = (function (unit_or_units){
var units = cljs.core.set(metabase.util.one_or_many(unit_or_units));
return (function (maybe_clause){
return ((temporal_QMARK_(maybe_clause)) && (((metabase.lib.util.clause_QMARK_(maybe_clause)) && (cljs.core.contains_QMARK_(units,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(cljs.core.second(maybe_clause)))))));
});
});
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$fe_util$filter_args_display_name_$_match_79629(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__79641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__79641,new cljs.core.Keyword(null,"=","=",1152933628))){
try{var _AMPERSAND_match_2__79643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(unit_is(metabase.lib.schema.temporal_bucketing.datetime_truncation_units)(_AMPERSAND_match_2__79643))){
try{var _AMPERSAND_match_3__79644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__79644 === 'string'){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$6(y,(0),new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(cljs.core.second(x)),null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-current","include-current",-1602371981),true], null))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79684){if((e79684 instanceof Error)){
var e__46214__auto__ = e79684;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e79684;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79681){if((e79681 instanceof Error)){
var e__46214__auto__ = e79681;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__79643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(temporal_QMARK_(_AMPERSAND_match_2__79643)){
try{var _AMPERSAND_match_3__79644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.string_QMARK_)(_AMPERSAND_match_3__79644))){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.temporal_bucket.describe_temporal_pair(x,y)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79683){if((e79683 instanceof Error)){
var e__46214__auto____$1 = e79683;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e79683;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79682){if((e79682 instanceof Error)){
var e__46214__auto____$1 = e79682;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e79682;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e79681;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79671){if((e79671 instanceof Error)){
var e__46214__auto__ = e79671;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__79641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__79641,new cljs.core.Keyword(null,"!=","!=",-1841737356))){
try{var _AMPERSAND_match_2__79643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(temporal_QMARK_(_AMPERSAND_match_2__79643)){
try{var _AMPERSAND_match_3__79644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.string_QMARK_)(_AMPERSAND_match_3__79644))){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Excludes {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.temporal_bucket.describe_temporal_pair(x,y)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79680){if((e79680 instanceof Error)){
var e__46214__auto____$1 = e79680;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e79680;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79679){if((e79679 instanceof Error)){
var e__46214__auto____$1 = e79679;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e79679;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79672){if((e79672 instanceof Error)){
var e__46214__auto____$1 = e79672;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__79641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__79641,new cljs.core.Keyword(null,"<","<",-646864291))){
try{var _AMPERSAND_match_2__79643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(temporal_QMARK_(_AMPERSAND_match_2__79643)){
try{var _AMPERSAND_match_3__79644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__79644 === 'string'){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Before {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_temporal_name(y)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79678){if((e79678 instanceof Error)){
var e__46214__auto____$2 = e79678;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e79678;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79677){if((e79677 instanceof Error)){
var e__46214__auto____$2 = e79677;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e79677;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79673){if((e79673 instanceof Error)){
var e__46214__auto____$2 = e79673;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__79641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__79641,new cljs.core.Keyword(null,">",">",-555517146))){
try{var _AMPERSAND_match_2__79643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(temporal_QMARK_(_AMPERSAND_match_2__79643)){
try{var _AMPERSAND_match_3__79644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__79644 === 'string'){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("After {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_temporal_name(y)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79676){if((e79676 instanceof Error)){
var e__46214__auto____$3 = e79676;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e79676;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79675){if((e79675 instanceof Error)){
var e__46214__auto____$3 = e79675;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e79675;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79674){if((e79674 instanceof Error)){
var e__46214__auto____$3 = e79674;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e79674;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e79673;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e79672;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e79671;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79658){if((e79658 instanceof Error)){
var e__46214__auto__ = e79658;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 5)))){
try{var _AMPERSAND_match_0__79645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__79645,new cljs.core.Keyword(null,"between","between",1131099276))){
try{var _AMPERSAND_match_2__79647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(temporal_QMARK_(_AMPERSAND_match_2__79647)){
try{var _AMPERSAND_match_3__79648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__79648 === 'string'){
try{var _AMPERSAND_match_4__79649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(typeof _AMPERSAND_match_4__79649 === 'string'){
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.time.format_diff(y,z)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79670){if((e79670 instanceof Error)){
var e__46214__auto____$1 = e79670;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e79670;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79669){if((e79669 instanceof Error)){
var e__46214__auto____$1 = e79669;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e79669;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79668){if((e79668 instanceof Error)){
var e__46214__auto____$1 = e79668;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e79668;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79667){if((e79667 instanceof Error)){
var e__46214__auto____$1 = e79667;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e79667;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79659){if((e79659 instanceof Error)){
var e__46214__auto____$1 = e79659;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__79650 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__79650)) && ((cljs.core.count(_AMPERSAND_match_left__79650) === (1))))){
try{var _AMPERSAND_match_left__79650_0__79652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__79650,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__79650_0__79652,new cljs.core.Keyword(null,"is-null","is-null",-1997050930))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n("Is Empty")], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79665){if((e79665 instanceof Error)){
var e__46214__auto____$2 = e79665;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__79650_0__79652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__79650,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__79650_0__79652,new cljs.core.Keyword(null,"not-null","not-null",-1326718535))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n("Is Not Empty")], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79666){if((e79666 instanceof Error)){
var e__46214__auto____$3 = e79666;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e79666;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e79665;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79664){if((e79664 instanceof Error)){
var e__46214__auto____$2 = e79664;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e79664;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79660){if((e79660 instanceof Error)){
var e__46214__auto____$2 = e79660;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 5)))){
try{var _AMPERSAND_match_0__79653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__79653,new cljs.core.Keyword(null,"time-interval","time-interval",704622015))){
try{var _AMPERSAND_match_2__79655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(temporal_QMARK_(_AMPERSAND_match_2__79655)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.temporal_bucket.describe_temporal_interval(n,unit)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79663){if((e79663 instanceof Error)){
var e__46214__auto____$3 = e79663;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e79663;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79662){if((e79662 instanceof Error)){
var e__46214__auto____$3 = e79662;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e79662;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79661){if((e79661 instanceof Error)){
var e__46214__auto____$3 = e79661;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,filter_clause)], null);
} else {
throw e__46214__auto____$3;
}
} else {
throw e79661;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e79660;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e79659;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e79658;

}
}})(cljs.core.PersistentVector.EMPTY,filter_clause))));
});
metabase.lib.fe_util.query_dependents_foreign_keys = (function metabase$lib$fe_util$query_dependents_foreign_keys(metadata_providerable,columns){
var iter__5480__auto__ = (function metabase$lib$fe_util$query_dependents_foreign_keys_$_iter__79685(s__79686){
return (new cljs.core.LazySeq(null,(function (){
var s__79686__$1 = s__79686;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79686__$1);
if(temp__5804__auto__){
var s__79686__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79686__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79686__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79688 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79687 = (0);
while(true){
if((i__79687 < size__5479__auto__)){
var column = cljs.core._nth(c__5478__auto__,i__79687);
var fk_target_field_id = new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_((function (){var and__5000__auto__ = fk_target_field_id;
if(cljs.core.truth_(and__5000__auto__)){
return metabase.lib.types.isa.foreign_key_QMARK_(column);
} else {
return and__5000__auto__;
}
})())){
cljs.core.chunk_append(b__79688,(function (){var temp__5802__auto__ = metabase.lib.metadata.field(metadata_providerable,fk_target_field_id);
if(cljs.core.truth_(temp__5802__auto__)){
var fk_target_field = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(fk_target_field)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"id","id",-1388402092),fk_target_field_id], null);
}
})());

var G__79735 = (i__79687 + (1));
i__79687 = G__79735;
continue;
} else {
var G__79736 = (i__79687 + (1));
i__79687 = G__79736;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79688),metabase$lib$fe_util$query_dependents_foreign_keys_$_iter__79685(cljs.core.chunk_rest(s__79686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79688),null);
}
} else {
var column = cljs.core.first(s__79686__$2);
var fk_target_field_id = new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_((function (){var and__5000__auto__ = fk_target_field_id;
if(cljs.core.truth_(and__5000__auto__)){
return metabase.lib.types.isa.foreign_key_QMARK_(column);
} else {
return and__5000__auto__;
}
})())){
return cljs.core.cons((function (){var temp__5802__auto__ = metabase.lib.metadata.field(metadata_providerable,fk_target_field_id);
if(cljs.core.truth_(temp__5802__auto__)){
var fk_target_field = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(fk_target_field)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"id","id",-1388402092),fk_target_field_id], null);
}
})(),metabase$lib$fe_util$query_dependents_foreign_keys_$_iter__79685(cljs.core.rest(s__79686__$2)));
} else {
var G__79737 = cljs.core.rest(s__79686__$2);
s__79686__$1 = G__79737;
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
return iter__5480__auto__(columns);
});
metabase.lib.fe_util.query_dependents = (function metabase$lib$fe_util$query_dependents(metadata_providerable,query_or_join){
var base_stage = cljs.core.first(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query_or_join));
var database_id = new cljs.core.Keyword(null,"database","database",1849087575).cljs$core$IFn$_invoke$arity$2(query_or_join,(-1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((((database_id > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.Keyword(null,"id","id",-1388402092),database_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"id","id",-1388402092),database_id], null)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(base_stage),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194)))?(function (){var iter__5480__auto__ = (function metabase$lib$fe_util$query_dependents_$_iter__79689(s__79690){
return (new cljs.core.LazySeq(null,(function (){
var s__79690__$1 = s__79690;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79690__$1);
if(temp__5804__auto__){
var s__79690__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79690__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79690__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79692 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79691 = (0);
while(true){
if((i__79691 < size__5479__auto__)){
var map__79693 = cljs.core._nth(c__5478__auto__,i__79691);
var map__79693__$1 = cljs.core.__destructure_map(map__79693);
var tag_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79693__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var vec__79694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79693__$1,new cljs.core.Keyword(null,"dimension","dimension",543254198));
var dim_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79694,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79694,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79694,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_type,new cljs.core.Keyword(null,"dimension","dimension",543254198))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dim_tag,new cljs.core.Keyword(null,"field","field",-1302436500))) && (cljs.core.integer_QMARK_(id)))))){
cljs.core.chunk_append(b__79692,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

var G__79738 = (i__79691 + (1));
i__79691 = G__79738;
continue;
} else {
var G__79739 = (i__79691 + (1));
i__79691 = G__79739;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79692),metabase$lib$fe_util$query_dependents_$_iter__79689(cljs.core.chunk_rest(s__79690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79692),null);
}
} else {
var map__79697 = cljs.core.first(s__79690__$2);
var map__79697__$1 = cljs.core.__destructure_map(map__79697);
var tag_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79697__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var vec__79698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79697__$1,new cljs.core.Keyword(null,"dimension","dimension",543254198));
var dim_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79698,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79698,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79698,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_type,new cljs.core.Keyword(null,"dimension","dimension",543254198))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dim_tag,new cljs.core.Keyword(null,"field","field",-1302436500))) && (cljs.core.integer_QMARK_(id)))))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"id","id",-1388402092),id], null),metabase$lib$fe_util$query_dependents_$_iter__79689(cljs.core.rest(s__79690__$2)));
} else {
var G__79740 = cljs.core.rest(s__79690__$2);
s__79690__$1 = G__79740;
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
return iter__5480__auto__(cljs.core.vals(new cljs.core.Keyword(null,"template-tags","template-tags",1853115685).cljs$core$IFn$_invoke$arity$1(base_stage)));
})():null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(base_stage);
if(cljs.core.truth_(temp__5804__auto__)){
var card_id = temp__5804__auto__;
var card = metabase.lib.metadata.card(metadata_providerable,card_id);
var definition = new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"id","id",-1388402092),["card__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_id)].join('')], null)], null),(function (){var temp__5804__auto____$1 = metabase.lib.card.saved_question_metadata(metadata_providerable,card_id);
if(cljs.core.truth_(temp__5804__auto____$1)){
var card_columns = temp__5804__auto____$1;
return metabase.lib.fe_util.query_dependents_foreign_keys(metadata_providerable,card_columns);
} else {
return null;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword(null,"metric","metric",408798077));
if(and__5000__auto__){
return definition;
} else {
return and__5000__auto__;
}
})())?(function (){var G__79701 = metadata_providerable;
var G__79702 = metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.normalize.normalize(definition));
return (metabase.lib.fe_util.query_dependents.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.fe_util.query_dependents.cljs$core$IFn$_invoke$arity$2(G__79701,G__79702) : metabase.lib.fe_util.query_dependents.call(null,G__79701,G__79702));
})():null)], 0));
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(base_stage);
if(cljs.core.truth_(temp__5804__auto__)){
var table_id = temp__5804__auto__;
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"id","id",-1388402092),table_id], null),metabase.lib.fe_util.query_dependents_foreign_keys(metadata_providerable,metabase.lib.metadata.fields(metadata_providerable,table_id)));
} else {
return null;
}
})(),(function (){var iter__5480__auto__ = (function metabase$lib$fe_util$query_dependents_$_iter__79703(s__79704){
return (new cljs.core.LazySeq(null,(function (){
var s__79704__$1 = s__79704;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79704__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var stage = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__79704__$1,stage,xs__6360__auto__,temp__5804__auto__,base_stage,database_id){
return (function metabase$lib$fe_util$query_dependents_$_iter__79703_$_iter__79705(s__79706){
return (new cljs.core.LazySeq(null,((function (s__79704__$1,stage,xs__6360__auto__,temp__5804__auto__,base_stage,database_id){
return (function (){
var s__79706__$1 = s__79706;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__79706__$1);
if(temp__5804__auto____$1){
var xs__6360__auto____$1 = temp__5804__auto____$1;
var join = cljs.core.first(xs__6360__auto____$1);
var iterys__5476__auto__ = ((function (s__79706__$1,s__79704__$1,join,xs__6360__auto____$1,temp__5804__auto____$1,stage,xs__6360__auto__,temp__5804__auto__,base_stage,database_id){
return (function metabase$lib$fe_util$query_dependents_$_iter__79703_$_iter__79705_$_iter__79707(s__79708){
return (new cljs.core.LazySeq(null,((function (s__79706__$1,s__79704__$1,join,xs__6360__auto____$1,temp__5804__auto____$1,stage,xs__6360__auto__,temp__5804__auto__,base_stage,database_id){
return (function (){
var s__79708__$1 = s__79708;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__79708__$1);
if(temp__5804__auto____$2){
var s__79708__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__79708__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79708__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79710 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79709 = (0);
while(true){
if((i__79709 < size__5479__auto__)){
var dependent = cljs.core._nth(c__5478__auto__,i__79709);
cljs.core.chunk_append(b__79710,dependent);

var G__79741 = (i__79709 + (1));
i__79709 = G__79741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79710),metabase$lib$fe_util$query_dependents_$_iter__79703_$_iter__79705_$_iter__79707(cljs.core.chunk_rest(s__79708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79710),null);
}
} else {
var dependent = cljs.core.first(s__79708__$2);
return cljs.core.cons(dependent,metabase$lib$fe_util$query_dependents_$_iter__79703_$_iter__79705_$_iter__79707(cljs.core.rest(s__79708__$2)));
}
} else {
return null;
}
break;
}
});})(s__79706__$1,s__79704__$1,join,xs__6360__auto____$1,temp__5804__auto____$1,stage,xs__6360__auto__,temp__5804__auto__,base_stage,database_id))
,null,null));
});})(s__79706__$1,s__79704__$1,join,xs__6360__auto____$1,temp__5804__auto____$1,stage,xs__6360__auto__,temp__5804__auto__,base_stage,database_id))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__((metabase.lib.fe_util.query_dependents.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.fe_util.query_dependents.cljs$core$IFn$_invoke$arity$2(metadata_providerable,join) : metabase.lib.fe_util.query_dependents.call(null,metadata_providerable,join))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,metabase$lib$fe_util$query_dependents_$_iter__79703_$_iter__79705(cljs.core.rest(s__79706__$1)));
} else {
var G__79742 = cljs.core.rest(s__79706__$1);
s__79706__$1 = G__79742;
continue;
}
} else {
return null;
}
break;
}
});})(s__79704__$1,stage,xs__6360__auto__,temp__5804__auto__,base_stage,database_id))
,null,null));
});})(s__79704__$1,stage,xs__6360__auto__,temp__5804__auto__,base_stage,database_id))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,metabase$lib$fe_util$query_dependents_$_iter__79703(cljs.core.rest(s__79704__$1)));
} else {
var G__79743 = cljs.core.rest(s__79704__$1);
s__79704__$1 = G__79743;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query_or_join));
})()], 0));
});
metabase.lib.fe_util.DependentItem = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"field","field",-1302436500)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("metabase.lib.schema.id","database","metabase.lib.schema.id/database",2063511424)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("metabase.lib.schema.id","database","metabase.lib.schema.id/database",2063511424)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword("metabase.lib.schema.id","table","metabase.lib.schema.id/table",-583250693),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("metabase.lib.schema.id","field","metabase.lib.schema.id/field",-985236431)], null)], null)], null)], null)], null);
/**
 * Inputs: [query :- :metabase.lib.schema/query card-id :- [:maybe :metabase.lib.schema.id/card] card-type :- :metabase.lib.schema.metadata/card.type]
 *   Return: [:sequential DependentItem]
 *        
 * 
 *   Return the IDs and types of entities the metadata about is required
 *   for the FE to function properly.  `card-id` is provided
 *   when editing the card with that ID and in this case `a-query` is its
 *   definition (i.e., the dataset-query). `card-type` specifies the type
 *   of the card being created or edited.
 */
metabase.lib.fe_util.dependent_metadata = (function metabase$lib$fe_util$dependent_metadata(query,card_id,card_type){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(metabase.lib.fe_util.query_dependents(query,query),(cljs.core.truth_((function (){var and__5000__auto__ = (!((card_id == null)));
if(and__5000__auto__){
var fexpr__79711 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metric","metric",408798077),null,new cljs.core.Keyword(null,"model","model",331153215),null], null), null);
return (fexpr__79711.cljs$core$IFn$_invoke$arity$1 ? fexpr__79711.cljs$core$IFn$_invoke$arity$1(card_type) : fexpr__79711.call(null,card_type));
} else {
return and__5000__auto__;
}
})())?cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"id","id",-1388402092),["card__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(card_id)].join('')], null),(function (){var temp__5804__auto__ = metabase.lib.metadata.card(query,card_id);
if(cljs.core.truth_(temp__5804__auto__)){
var card = temp__5804__auto__;
return metabase.lib.fe_util.query_dependents(query,metabase.lib.query.query(query,card));
} else {
return null;
}
})()):null)));
});
/**
 * Inputs: [_metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable table-id :- [:or :metabase.lib.schema.id/table :string]]
 *   Return: [:sequential DependentItem]
 *        
 * 
 *   Return the IDs and types of entities which are needed upfront to create a new query based on a table/card.
 */
metabase.lib.fe_util.table_or_card_dependent_metadata = (function metabase$lib$fe_util$table_or_card_dependent_metadata(_metadata_providerable,table_id){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"id","id",-1388402092),table_id], null)], null);
});

//# sourceMappingURL=metabase.lib.fe_util.js.map
