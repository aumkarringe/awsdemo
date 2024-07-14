var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./malli.core.js");
require("./malli.error.js");
require("./medley.core.js");
require("./metabase.lib.common.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.aggregation.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.util.js");
require("./metabase.lib.util.match.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.types.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.expression.js");

goog.provide('metabase.lib.expression');
/**
 * Inputs: [metadata :- :metabase.lib.schema.metadata/column]
 *   Return: :mbql.clause/expression
 *        
 * 
 *   Given `:metadata/column` column metadata for an expression, construct an `:expression` reference.
 */
metabase.lib.expression.column_metadata__GT_expression_ref = (function metabase$lib$expression$column_metadata__GT_expression_ref(metadata){
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(metadata)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),options,cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590),new cljs.core.Keyword(null,"name","name",1843675177))(metadata)], null);
});
/**
 * Inputs: ([query expression-name]
 *         [query :- :metabase.lib.schema/query stage-number :- :int expression-name :- :metabase.lib.schema.common/non-blank-string])
 *   Return: :metabase.lib.schema.expression/expression
 *        
 * 
 *   Find the expression with `expression-name` in a given stage of a `query`, or throw an Exception if it doesn't
 *   exist.
 */
metabase.lib.expression.resolve_expression = (function() {
var metabase$lib$expression$resolve_expression = null;
var metabase$lib$expression$resolve_expression__2 = (function (query,expression_name){
return (metabase.lib.expression.resolve_expression.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.expression.resolve_expression.cljs$core$IFn$_invoke$arity$3(query,(-1),expression_name) : metabase.lib.expression.resolve_expression.call(null,query,(-1),expression_name));
});
var metabase$lib$expression$resolve_expression__3 = (function (query,stage_number,expression_name){
var stage = metabase.lib.util.query_stage(query,stage_number);
var or__5002__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([expression_name]),metabase.lib.util.expression_name),new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(stage));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No expression named {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expression_name], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"expression-name","expression-name",-1798450709),expression_name,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null));
}
});
metabase$lib$expression$resolve_expression = function(query,stage_number,expression_name){
switch(arguments.length){
case 2:
return metabase$lib$expression$resolve_expression__2.call(this,query,stage_number);
case 3:
return metabase$lib$expression$resolve_expression__3.call(this,query,stage_number,expression_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$expression$resolve_expression.cljs$core$IFn$_invoke$arity$2 = metabase$lib$expression$resolve_expression__2;
metabase$lib$expression$resolve_expression.cljs$core$IFn$_invoke$arity$3 = metabase$lib$expression$resolve_expression__3;
return metabase$lib$expression$resolve_expression;
})()
;
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (query,stage_number,p__77095){
var vec__77099 = p__77095;
var _expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77099,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77099,(1),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77099,(2),null);
var _expression_ref = vec__77099;
var expression = metabase.lib.expression.resolve_expression.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression_name);
return metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression);
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (query,stage_number,p__77103){
var vec__77107 = p__77103;
var _expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77107,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77107,(1),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77107,(2),null);
var expression_ref_clause = vec__77107;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"name","name",1843675177),expression_name,new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590),expression_name,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression_ref_clause),new cljs.core.Keyword(null,"base-type","base-type",1167971299),metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression_ref_clause),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","expressions","source/expressions",-458367840)], null);
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","integer","dispatch-type/integer",1558418815),(function (_query,_stage_number,n,_style){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","number","dispatch-type/number",-594990247),(function (_query,_stage_number,n,_style){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(n);
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","string","dispatch-type/string",171698561),(function (_query,_stage_number,s,_style){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","boolean","dispatch-type/boolean",179271749),(function (_query,_stage_number,s,_style){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (_query,_stage_number,p__77112,_style){
var vec__77115 = p__77112;
var _expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77115,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77115,(1),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77115,(2),null);
return expression_name;
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (_query,_stage_number,p__77122){
var vec__77125 = p__77122;
var _expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77125,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77125,(1),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77125,(2),null);
return expression_name;
}));
/**
 * Whether the display name we are generated is recursively nested inside another display name. For infix math operators
 *   we'll wrap the results in parentheses to make the display name more obvious.
 */
metabase.lib.expression._STAR_nested_STAR_ = false;
metabase.lib.expression.wrap_str_in_parens_if_nested = (function metabase$lib$expression$wrap_str_in_parens_if_nested(s){
if(cljs.core.truth_(metabase.lib.expression._STAR_nested_STAR_)){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),")"].join('');
} else {
return s;
}
});
/**
 * Generate a infix-style display name for an arithmetic expression like `:+`, e.g. `x + y`.
 */
metabase.lib.expression.infix_display_name = (function metabase$lib$expression$infix_display_name(query,stage_number,operator,args){
return metabase.lib.expression.wrap_str_in_parens_if_nested((function (){var _STAR_nested_STAR__orig_val__77129 = metabase.lib.expression._STAR_nested_STAR_;
var _STAR_nested_STAR__temp_val__77130 = true;
(metabase.lib.expression._STAR_nested_STAR_ = _STAR_nested_STAR__temp_val__77130);

try{return clojure.string.join.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.name(operator)," "].join(''),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(metabase.lib.metadata.calculation.display_name,query,stage_number),args));
}finally {(metabase.lib.expression._STAR_nested_STAR_ = _STAR_nested_STAR__orig_val__77129);
}})());
});
metabase.lib.expression.infix_operator_display_name = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"+","+",1913524883),"+",new cljs.core.Keyword(null,"-","-",-2112348439),"-",new cljs.core.Keyword(null,"*","*",-1294732318),"\u00D7",new cljs.core.Keyword(null,"/","/",1282502798),"\u00F7"], null);
var seq__77132_77468 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"/","/",1282502798),new cljs.core.Keyword(null,"*","*",-1294732318)], null));
var chunk__77133_77469 = null;
var count__77134_77470 = (0);
var i__77135_77471 = (0);
while(true){
if((i__77135_77471 < count__77134_77470)){
var tag_77472 = chunk__77133_77469.cljs$core$IIndexed$_nth$arity$2(null,i__77135_77471);
metabase.lib.hierarchy.derive(tag_77472,new cljs.core.Keyword("metabase.lib.expression","infix-operator","metabase.lib.expression/infix-operator",246733613));


var G__77473 = seq__77132_77468;
var G__77474 = chunk__77133_77469;
var G__77475 = count__77134_77470;
var G__77476 = (i__77135_77471 + (1));
seq__77132_77468 = G__77473;
chunk__77133_77469 = G__77474;
count__77134_77470 = G__77475;
i__77135_77471 = G__77476;
continue;
} else {
var temp__5804__auto___77477 = cljs.core.seq(seq__77132_77468);
if(temp__5804__auto___77477){
var seq__77132_77478__$1 = temp__5804__auto___77477;
if(cljs.core.chunked_seq_QMARK_(seq__77132_77478__$1)){
var c__5525__auto___77479 = cljs.core.chunk_first(seq__77132_77478__$1);
var G__77480 = cljs.core.chunk_rest(seq__77132_77478__$1);
var G__77481 = c__5525__auto___77479;
var G__77482 = cljs.core.count(c__5525__auto___77479);
var G__77483 = (0);
seq__77132_77468 = G__77480;
chunk__77133_77469 = G__77481;
count__77134_77470 = G__77482;
i__77135_77471 = G__77483;
continue;
} else {
var tag_77484 = cljs.core.first(seq__77132_77478__$1);
metabase.lib.hierarchy.derive(tag_77484,new cljs.core.Keyword("metabase.lib.expression","infix-operator","metabase.lib.expression/infix-operator",246733613));


var G__77485 = cljs.core.next(seq__77132_77478__$1);
var G__77486 = null;
var G__77487 = (0);
var G__77488 = (0);
seq__77132_77468 = G__77485;
chunk__77133_77469 = G__77486;
count__77134_77470 = G__77487;
i__77135_77471 = G__77488;
continue;
}
} else {
}
}
break;
}
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.expression","infix-operator","metabase.lib.expression/infix-operator",246733613),(function (query,stage_number,p__77138,_style){
var vec__77139 = p__77138;
var seq__77140 = cljs.core.seq(vec__77139);
var first__77141 = cljs.core.first(seq__77140);
var seq__77140__$1 = cljs.core.next(seq__77140);
var tag = first__77141;
var first__77141__$1 = cljs.core.first(seq__77140__$1);
var seq__77140__$2 = cljs.core.next(seq__77140__$1);
var _opts = first__77141__$1;
var args = seq__77140__$2;
return metabase.lib.expression.infix_display_name(query,stage_number,cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.lib.expression.infix_operator_display_name,tag),args);
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.expression","infix-operator","metabase.lib.expression/infix-operator",246733613),(function (_query,_stage_number,_expr){
return "expression";
}));
metabase.lib.metadata.calculation.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib.type-of","type-is-type-of-arithmetic-args","lib.type-of/type-is-type-of-arithmetic-args",-626871615),(function (query,stage_number,p__77142){
var vec__77143 = p__77142;
var seq__77144 = cljs.core.seq(vec__77143);
var first__77145 = cljs.core.first(seq__77144);
var seq__77144__$1 = cljs.core.next(seq__77144);
var _tag = first__77145;
var first__77145__$1 = cljs.core.first(seq__77144__$1);
var seq__77144__$2 = cljs.core.next(seq__77144__$1);
var _opts = first__77145__$1;
var args = seq__77144__$2;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(metabase.types.most_specific_common_ancestor,(function (){var iter__5480__auto__ = (function metabase$lib$expression$iter__77148(s__77149){
return (new cljs.core.LazySeq(null,(function (){
var s__77149__$1 = s__77149;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__77149__$1);
if(temp__5804__auto__){
var s__77149__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77149__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__77149__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__77151 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__77150 = (0);
while(true){
if((i__77150 < size__5479__auto__)){
var arg = cljs.core._nth(c__5478__auto__,i__77150);
cljs.core.chunk_append(b__77151,metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,arg));

var G__77508 = (i__77150 + (1));
i__77150 = G__77508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77151),metabase$lib$expression$iter__77148(cljs.core.chunk_rest(s__77149__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77151),null);
}
} else {
var arg = cljs.core.first(s__77149__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,arg),metabase$lib$expression$iter__77148(cljs.core.rest(s__77149__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(args);
})());
}));
metabase.lib.expression.interval_unit_str = (function metabase$lib$expression$interval_unit_str(amount,unit){
return clojure.string.lower_case(metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$2(amount,unit));
});
/**
 * Inputs: [amount :- :int unit :- :metabase.lib.schema.temporal-bucketing/unit.date-time.interval]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   e.g. something like "- 2 days"
 */
metabase.lib.expression.interval_display_name = (function metabase$lib$expression$interval_display_name(amount,unit){
var unit_str = metabase.lib.expression.interval_unit_str(amount,unit);
return metabase.lib.expression.wrap_str_in_parens_if_nested((((amount > (0)))?(metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3("+ %d %s",amount,unit_str) : metabase.lib.util.format.call(null,"+ %d %s",amount,unit_str)):(function (){var G__77152 = "- %d %s";
var G__77153 = cljs.core.abs(amount);
var G__77154 = unit_str;
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3(G__77152,G__77153,G__77154) : metabase.lib.util.format.call(null,G__77152,G__77153,G__77154));
})()));
});
/**
 * Inputs: [amount :- :int unit :- :metabase.lib.schema.temporal-bucketing/unit.date-time.interval]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   e.g. something like `minus_2_days`
 */
metabase.lib.expression.interval_column_name = (function metabase$lib$expression$interval_column_name(amount,unit){
var unit_str = metabase.lib.expression.interval_unit_str(amount,unit);
if((amount > (0))){
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3("plus_%s_%s",amount,unit_str) : metabase.lib.util.format.call(null,"plus_%s_%s",amount,unit_str));
} else {
var G__77155 = "minus_%d_%s";
var G__77156 = cljs.core.abs(amount);
var G__77157 = unit_str;
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3(G__77155,G__77156,G__77157) : metabase.lib.util.format.call(null,G__77155,G__77156,G__77157));
}
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),(function (query,stage_number,p__77158,style){
var vec__77159 = p__77158;
var _datetime_add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77159,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77159,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77159,(2),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77159,(3),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77159,(4),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.expression.interval_display_name(amount,unit))].join('');
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),(function (query,stage_number,p__77162){
var vec__77163 = p__77162;
var _datetime_add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77163,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77163,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77163,(2),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77163,(3),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77163,(4),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,x)),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.expression.interval_column_name(amount,unit))].join('');
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"coalesce","coalesce",654622029),(function (query,stage_number,p__77169,style){
var vec__77170 = p__77169;
var _coalesce = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77170,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77170,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77170,(2),null);
var _null_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77170,(3),null);
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,expr,style);
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"coalesce","coalesce",654622029),(function (query,stage_number,p__77173){
var vec__77174 = p__77173;
var _coalesce = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77174,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77174,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77174,(2),null);
var _null_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77174,(3),null);
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,expr);
}));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.expression","add-expression-options","metabase.lib.expression/add-expression-options",1779319907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-to-fields?","add-to-fields?",-265538527),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null));
metabase.lib.expression.add_expression_to_stage = (function metabase$lib$expression$add_expression_to_stage(stage,expression,p__77178){
var map__77179 = p__77178;
var map__77179__$1 = cljs.core.__destructure_map(map__77179);
var _options = map__77179__$1;
var add_to_fields_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77179__$1,new cljs.core.Keyword(null,"add-to-fields?","add-to-fields?",-265538527),true);
var G__77180 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(stage,new cljs.core.Keyword(null,"expressions","expressions",255689909),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),expression);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(stage));
if(and__5000__auto__){
return add_to_fields_QMARK_;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__77180,new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.conj,metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),cljs.core.PersistentArrayMap.EMPTY,metabase.lib.util.expression_name(expression)], null)));
} else {
return G__77180;
}
});
/**
 * Inputs: ([query expression-name expressionable]
 *         [query stage-number expression-name expressionable]
 *         [query :- :metabase.lib.schema/query stage-number :- [:maybe :int] expression-name :- :metabase.lib.schema.common/non-blank-string expressionable options :- [:maybe :metabase.lib.expression/add-expression-options]])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Adds an expression to query.
 * 
 *   Options:
 * 
 *   * `:add-to-fields?` (default: `true`) -- whether to add an `:expression` ref to `:fields` if one is present in the
 *  query.
 */
metabase.lib.expression.expression = (function() {
var metabase$lib$expression$expression = null;
var metabase$lib$expression$expression__3 = (function (query,expression_name,expressionable){
return (metabase.lib.expression.expression.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.expression.expression.cljs$core$IFn$_invoke$arity$4(query,(-1),expression_name,expressionable) : metabase.lib.expression.expression.call(null,query,(-1),expression_name,expressionable));
});
var metabase$lib$expression$expression__4 = (function (query,stage_number,expression_name,expressionable){
return (metabase.lib.expression.expression.cljs$core$IFn$_invoke$arity$5 ? metabase.lib.expression.expression.cljs$core$IFn$_invoke$arity$5(query,stage_number,expression_name,expressionable,null) : metabase.lib.expression.expression.call(null,query,stage_number,expression_name,expressionable,null));
});
var metabase$lib$expression$expression__5 = (function (query,stage_number,expression_name,expressionable,options){
var stage_number__$1 = (function (){var or__5002__auto__ = stage_number;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (-1);
}
})();
var expressionable__$1 = metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(expressionable);
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number__$1,metabase.lib.expression.add_expression_to_stage,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.util.top_level_expression_clause(expressionable__$1,expression_name),options], 0));
});
metabase$lib$expression$expression = function(query,stage_number,expression_name,expressionable,options){
switch(arguments.length){
case 3:
return metabase$lib$expression$expression__3.call(this,query,stage_number,expression_name);
case 4:
return metabase$lib$expression$expression__4.call(this,query,stage_number,expression_name,expressionable);
case 5:
return metabase$lib$expression$expression__5.call(this,query,stage_number,expression_name,expressionable,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$expression$expression.cljs$core$IFn$_invoke$arity$3 = metabase$lib$expression$expression__3;
metabase$lib$expression$expression.cljs$core$IFn$_invoke$arity$4 = metabase$lib$expression$expression__4;
metabase$lib$expression$expression.cljs$core$IFn$_invoke$arity$5 = metabase$lib$expression$expression__5;
return metabase$lib$expression$expression;
})()
;
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/+
 *        
 * 
 *   Create a standalone clause of type `+`.
 * @param {...*} var_args
 */
metabase.lib.expression._PLUS_ = (function() { 
var metabase$lib$expression$_PLUS___delegate = function (x,y,more){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"+","+",1913524883),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
};
var metabase$lib$expression$_PLUS_ = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__77569__i = 0, G__77569__a = new Array(arguments.length -  2);
while (G__77569__i < G__77569__a.length) {G__77569__a[G__77569__i] = arguments[G__77569__i + 2]; ++G__77569__i;}
  more = new cljs.core.IndexedSeq(G__77569__a,0,null);
} 
return metabase$lib$expression$_PLUS___delegate.call(this,x,y,more);};
metabase$lib$expression$_PLUS_.cljs$lang$maxFixedArity = 2;
metabase$lib$expression$_PLUS_.cljs$lang$applyTo = (function (arglist__77570){
var x = cljs.core.first(arglist__77570);
arglist__77570 = cljs.core.next(arglist__77570);
var y = cljs.core.first(arglist__77570);
var more = cljs.core.rest(arglist__77570);
return metabase$lib$expression$_PLUS___delegate(x,y,more);
});
metabase$lib$expression$_PLUS_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$expression$_PLUS___delegate;
return metabase$lib$expression$_PLUS_;
})()
;
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/-
 *        
 * 
 *   Create a standalone clause of type `-`.
 * @param {...*} var_args
 */
metabase.lib.expression._ = (function() { 
var metabase$lib$expression$___delegate = function (x,y,more){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"-","-",-2112348439),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
};
var metabase$lib$expression$_ = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__77571__i = 0, G__77571__a = new Array(arguments.length -  2);
while (G__77571__i < G__77571__a.length) {G__77571__a[G__77571__i] = arguments[G__77571__i + 2]; ++G__77571__i;}
  more = new cljs.core.IndexedSeq(G__77571__a,0,null);
} 
return metabase$lib$expression$___delegate.call(this,x,y,more);};
metabase$lib$expression$_.cljs$lang$maxFixedArity = 2;
metabase$lib$expression$_.cljs$lang$applyTo = (function (arglist__77572){
var x = cljs.core.first(arglist__77572);
arglist__77572 = cljs.core.next(arglist__77572);
var y = cljs.core.first(arglist__77572);
var more = cljs.core.rest(arglist__77572);
return metabase$lib$expression$___delegate(x,y,more);
});
metabase$lib$expression$_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$expression$___delegate;
return metabase$lib$expression$_;
})()
;
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/*
 *        
 * 
 *   Create a standalone clause of type `*`.
 * @param {...*} var_args
 */
metabase.lib.expression._STAR_ = (function() { 
var metabase$lib$expression$_STAR___delegate = function (x,y,more){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
};
var metabase$lib$expression$_STAR_ = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__77573__i = 0, G__77573__a = new Array(arguments.length -  2);
while (G__77573__i < G__77573__a.length) {G__77573__a[G__77573__i] = arguments[G__77573__i + 2]; ++G__77573__i;}
  more = new cljs.core.IndexedSeq(G__77573__a,0,null);
} 
return metabase$lib$expression$_STAR___delegate.call(this,x,y,more);};
metabase$lib$expression$_STAR_.cljs$lang$maxFixedArity = 2;
metabase$lib$expression$_STAR_.cljs$lang$applyTo = (function (arglist__77574){
var x = cljs.core.first(arglist__77574);
arglist__77574 = cljs.core.next(arglist__77574);
var y = cljs.core.first(arglist__77574);
var more = cljs.core.rest(arglist__77574);
return metabase$lib$expression$_STAR___delegate(x,y,more);
});
metabase$lib$expression$_STAR_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$expression$_STAR___delegate;
return metabase$lib$expression$_STAR_;
})()
;
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause//
 *        
 * 
 *   Create a standalone clause of type `/`.
 * @param {...*} var_args
 */
metabase.lib.expression._SLASH_ = (function() { 
var metabase$lib$expression$_SLASH___delegate = function (x,y,more){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"/","/",1282502798),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
};
var metabase$lib$expression$_SLASH_ = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__77576__i = 0, G__77576__a = new Array(arguments.length -  2);
while (G__77576__i < G__77576__a.length) {G__77576__a[G__77576__i] = arguments[G__77576__i + 2]; ++G__77576__i;}
  more = new cljs.core.IndexedSeq(G__77576__a,0,null);
} 
return metabase$lib$expression$_SLASH___delegate.call(this,x,y,more);};
metabase$lib$expression$_SLASH_.cljs$lang$maxFixedArity = 2;
metabase$lib$expression$_SLASH_.cljs$lang$applyTo = (function (arglist__77577){
var x = cljs.core.first(arglist__77577);
arglist__77577 = cljs.core.next(arglist__77577);
var y = cljs.core.first(arglist__77577);
var more = cljs.core.rest(arglist__77577);
return metabase$lib$expression$_SLASH___delegate(x,y,more);
});
metabase$lib$expression$_SLASH_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$expression$_SLASH___delegate;
return metabase$lib$expression$_SLASH_;
})()
;
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/case
 *        
 * 
 *   Create a standalone clause of type `case`.
 * @param {...*} var_args
 */
metabase.lib.expression.case$ = (function() { 
var metabase$lib$expression$case__delegate = function (x,y,more){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"case","case",1143702196),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
};
var metabase$lib$expression$case = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__77578__i = 0, G__77578__a = new Array(arguments.length -  2);
while (G__77578__i < G__77578__a.length) {G__77578__a[G__77578__i] = arguments[G__77578__i + 2]; ++G__77578__i;}
  more = new cljs.core.IndexedSeq(G__77578__a,0,null);
} 
return metabase$lib$expression$case__delegate.call(this,x,y,more);};
metabase$lib$expression$case.cljs$lang$maxFixedArity = 2;
metabase$lib$expression$case.cljs$lang$applyTo = (function (arglist__77579){
var x = cljs.core.first(arglist__77579);
arglist__77579 = cljs.core.next(arglist__77579);
var y = cljs.core.first(arglist__77579);
var more = cljs.core.rest(arglist__77579);
return metabase$lib$expression$case__delegate(x,y,more);
});
metabase$lib$expression$case.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$expression$case__delegate;
return metabase$lib$expression$case;
})()
;
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/coalesce
 *        
 * 
 *   Create a standalone clause of type `coalesce`.
 * @param {...*} var_args
 */
metabase.lib.expression.coalesce = (function() { 
var metabase$lib$expression$coalesce__delegate = function (x,y,more){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"coalesce","coalesce",654622029),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
};
var metabase$lib$expression$coalesce = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__77583__i = 0, G__77583__a = new Array(arguments.length -  2);
while (G__77583__i < G__77583__a.length) {G__77583__a[G__77583__i] = arguments[G__77583__i + 2]; ++G__77583__i;}
  more = new cljs.core.IndexedSeq(G__77583__a,0,null);
} 
return metabase$lib$expression$coalesce__delegate.call(this,x,y,more);};
metabase$lib$expression$coalesce.cljs$lang$maxFixedArity = 2;
metabase$lib$expression$coalesce.cljs$lang$applyTo = (function (arglist__77585){
var x = cljs.core.first(arglist__77585);
arglist__77585 = cljs.core.next(arglist__77585);
var y = cljs.core.first(arglist__77585);
var more = cljs.core.rest(arglist__77585);
return metabase$lib$expression$coalesce__delegate(x,y,more);
});
metabase$lib$expression$coalesce.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$expression$coalesce__delegate;
return metabase$lib$expression$coalesce;
})()
;
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/abs
 *        
 * 
 *   Create a standalone clause of type `abs`.
 */
metabase.lib.expression.abs = (function metabase$lib$expression$abs(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/log
 *        
 * 
 *   Create a standalone clause of type `log`.
 */
metabase.lib.expression.log = (function metabase$lib$expression$log(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/exp
 *        
 * 
 *   Create a standalone clause of type `exp`.
 */
metabase.lib.expression.exp = (function metabase$lib$expression$exp(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/sqrt
 *        
 * 
 *   Create a standalone clause of type `sqrt`.
 */
metabase.lib.expression.sqrt = (function metabase$lib$expression$sqrt(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/ceil
 *        
 * 
 *   Create a standalone clause of type `ceil`.
 */
metabase.lib.expression.ceil = (function metabase$lib$expression$ceil(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/floor
 *        
 * 
 *   Create a standalone clause of type `floor`.
 */
metabase.lib.expression.floor = (function metabase$lib$expression$floor(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/round
 *        
 * 
 *   Create a standalone clause of type `round`.
 */
metabase.lib.expression.round = (function metabase$lib$expression$round(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"round","round",2009433328),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([n expo])
 *   Return: :mbql.clause/power
 *        
 * 
 *   Create a standalone clause of type `power`.
 */
metabase.lib.expression.power = (function metabase$lib$expression$power(n,expo){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,expo], null));
});
/**
 * Inputs: ([n unit])
 *   Return: :mbql.clause/interval
 *        
 * 
 *   Create a standalone clause of type `interval`.
 */
metabase.lib.expression.interval = (function metabase$lib$expression$interval(n,unit){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"interval","interval",1708495417),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,unit], null));
});
/**
 * Inputs: ([t unit])
 *   Return: :mbql.clause/relative-datetime
 *        
 * 
 *   Create a standalone clause of type `relative-datetime`.
 */
metabase.lib.expression.relative_datetime = (function metabase$lib$expression$relative_datetime(t,unit){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,unit], null));
});
/**
 * Inputs: ([t unit])
 *   Return: :mbql.clause/time
 *        
 * 
 *   Create a standalone clause of type `time`.
 */
metabase.lib.expression.time = (function metabase$lib$expression$time(t,unit){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,unit], null));
});
/**
 * Inputs: ([t unit])
 *   Return: :mbql.clause/absolute-datetime
 *        
 * 
 *   Create a standalone clause of type `absolute-datetime`.
 */
metabase.lib.expression.absolute_datetime = (function metabase$lib$expression$absolute_datetime(t,unit){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"absolute-datetime","absolute-datetime",-560340465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,unit], null));
});
/**
 * Inputs: ([])
 *   Return: :mbql.clause/now
 *        
 * 
 *   Create a standalone clause of type `now`.
 */
metabase.lib.expression.now = (function metabase$lib$expression$now(){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"now","now",-1650525531),cljs.core.PersistentVector.EMPTY);
});
/**
 * Inputs: ([t source dest])
 *   Return: :mbql.clause/convert-timezone
 *        
 * 
 *   Create a standalone clause of type `convert-timezone`.
 */
metabase.lib.expression.convert_timezone = (function metabase$lib$expression$convert_timezone(t,source,dest){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"convert-timezone","convert-timezone",-124803001),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,source,dest], null));
});
/**
 * Inputs: ([t mode])
 *   Return: :mbql.clause/get-week
 *        
 * 
 *   Create a standalone clause of type `get-week`.
 */
metabase.lib.expression.get_week = (function metabase$lib$expression$get_week(t,mode){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-week","get-week",-888059349),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,mode], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-year
 *        
 * 
 *   Create a standalone clause of type `get-year`.
 */
metabase.lib.expression.get_year = (function metabase$lib$expression$get_year(t){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-year","get-year",-936011274),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-month
 *        
 * 
 *   Create a standalone clause of type `get-month`.
 */
metabase.lib.expression.get_month = (function metabase$lib$expression$get_month(t){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-month","get-month",-369374731),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-day
 *        
 * 
 *   Create a standalone clause of type `get-day`.
 */
metabase.lib.expression.get_day = (function metabase$lib$expression$get_day(t){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-day","get-day",127568857),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-hour
 *        
 * 
 *   Create a standalone clause of type `get-hour`.
 */
metabase.lib.expression.get_hour = (function metabase$lib$expression$get_hour(t){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-hour","get-hour",622714059),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-minute
 *        
 * 
 *   Create a standalone clause of type `get-minute`.
 */
metabase.lib.expression.get_minute = (function metabase$lib$expression$get_minute(t){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-minute","get-minute",1468086343),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-second
 *        
 * 
 *   Create a standalone clause of type `get-second`.
 */
metabase.lib.expression.get_second = (function metabase$lib$expression$get_second(t){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-second","get-second",-2065946318),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-quarter
 *        
 * 
 *   Create a standalone clause of type `get-quarter`.
 */
metabase.lib.expression.get_quarter = (function metabase$lib$expression$get_quarter(t){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-quarter","get-quarter",1327778593),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t])
 *   Return: :mbql.clause/get-day-of-week
 *        
 * 
 *   Create a standalone clause of type `get-day-of-week`.
 */
metabase.lib.expression.get_day_of_week = (function metabase$lib$expression$get_day_of_week(t){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"get-day-of-week","get-day-of-week",2010140752),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null));
});
/**
 * Inputs: ([t i unit])
 *   Return: :mbql.clause/datetime-add
 *        
 * 
 *   Create a standalone clause of type `datetime-add`.
 */
metabase.lib.expression.datetime_add = (function metabase$lib$expression$datetime_add(t,i,unit){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,i,unit], null));
});
/**
 * Inputs: ([t i unit])
 *   Return: :mbql.clause/datetime-subtract
 *        
 * 
 *   Create a standalone clause of type `datetime-subtract`.
 */
metabase.lib.expression.datetime_subtract = (function metabase$lib$expression$datetime_subtract(t,i,unit){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"datetime-subtract","datetime-subtract",275307697),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,i,unit], null));
});
/**
 * Inputs: ([s1 s2 & more])
 *   Return: :mbql.clause/concat
 *        
 * 
 *   Create a standalone clause of type `concat`.
 * @param {...*} var_args
 */
metabase.lib.expression.concat = (function() { 
var metabase$lib$expression$concat__delegate = function (s1,s2,more){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"concat","concat",-2108183992),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(s1,s2,more));
};
var metabase$lib$expression$concat = function (s1,s2,var_args){
var more = null;
if (arguments.length > 2) {
var G__77588__i = 0, G__77588__a = new Array(arguments.length -  2);
while (G__77588__i < G__77588__a.length) {G__77588__a[G__77588__i] = arguments[G__77588__i + 2]; ++G__77588__i;}
  more = new cljs.core.IndexedSeq(G__77588__a,0,null);
} 
return metabase$lib$expression$concat__delegate.call(this,s1,s2,more);};
metabase$lib$expression$concat.cljs$lang$maxFixedArity = 2;
metabase$lib$expression$concat.cljs$lang$applyTo = (function (arglist__77589){
var s1 = cljs.core.first(arglist__77589);
arglist__77589 = cljs.core.next(arglist__77589);
var s2 = cljs.core.first(arglist__77589);
var more = cljs.core.rest(arglist__77589);
return metabase$lib$expression$concat__delegate(s1,s2,more);
});
metabase$lib$expression$concat.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$expression$concat__delegate;
return metabase$lib$expression$concat;
})()
;
/**
 * Inputs: ([s start end])
 *   Return: :mbql.clause/substring
 *        
 * 
 *   Create a standalone clause of type `substring`.
 */
metabase.lib.expression.substring = (function metabase$lib$expression$substring(s,start,end){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"substring","substring",1140866276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,start,end], null));
});
/**
 * Inputs: ([s search replacement])
 *   Return: :mbql.clause/replace
 *        
 * 
 *   Create a standalone clause of type `replace`.
 */
metabase.lib.expression.replace = (function metabase$lib$expression$replace(s,search,replacement){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,search,replacement], null));
});
/**
 * Inputs: ([s regex])
 *   Return: :mbql.clause/regexextract
 *        
 * 
 *   Create a standalone clause of type `regexextract`.
 */
metabase.lib.expression.regexextract = (function metabase$lib$expression$regexextract(s,regex){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"regexextract","regexextract",689742894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,regex], null));
});
/**
 * Inputs: ([s regex])
 *   Return: :mbql.clause/regex-match-first
 *        
 * 
 *   Create a standalone clause of type `regex-match-first`.
 */
metabase.lib.expression.regex_match_first = (function metabase$lib$expression$regex_match_first(s,regex){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"regex-match-first","regex-match-first",-657299718),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,regex], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/length
 *        
 * 
 *   Create a standalone clause of type `length`.
 */
metabase.lib.expression.length = (function metabase$lib$expression$length(s){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/trim
 *        
 * 
 *   Create a standalone clause of type `trim`.
 */
metabase.lib.expression.trim = (function metabase$lib$expression$trim(s){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"trim","trim",774319767),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/ltrim
 *        
 * 
 *   Create a standalone clause of type `ltrim`.
 */
metabase.lib.expression.ltrim = (function metabase$lib$expression$ltrim(s){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"ltrim","ltrim",1654269283),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/rtrim
 *        
 * 
 *   Create a standalone clause of type `rtrim`.
 */
metabase.lib.expression.rtrim = (function metabase$lib$expression$rtrim(s){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"rtrim","rtrim",-661336449),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/upper
 *        
 * 
 *   Create a standalone clause of type `upper`.
 */
metabase.lib.expression.upper = (function metabase$lib$expression$upper(s){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"upper","upper",246243906),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/lower
 *        
 * 
 *   Create a standalone clause of type `lower`.
 */
metabase.lib.expression.lower = (function metabase$lib$expression$lower(s){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"lower","lower",1120320821),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/host
 *        
 * 
 *   Create a standalone clause of type `host`.
 */
metabase.lib.expression.host = (function metabase$lib$expression$host(s){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/domain
 *        
 * 
 *   Create a standalone clause of type `domain`.
 */
metabase.lib.expression.domain = (function metabase$lib$expression$domain(s){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([s])
 *   Return: :mbql.clause/subdomain
 *        
 * 
 *   Create a standalone clause of type `subdomain`.
 */
metabase.lib.expression.subdomain = (function metabase$lib$expression$subdomain(s){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"subdomain","subdomain",-524487312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null));
});
/**
 * Inputs: ([n])
 *   Return: :mbql.clause/month-name
 *        
 * 
 *   Create a standalone clause of type `month-name`.
 */
metabase.lib.expression.month_name = (function metabase$lib$expression$month_name(n){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"month-name","month-name",-605509534),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
/**
 * Inputs: ([n])
 *   Return: :mbql.clause/quarter-name
 *        
 * 
 *   Create a standalone clause of type `quarter-name`.
 */
metabase.lib.expression.quarter_name = (function metabase$lib$expression$quarter_name(n){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"quarter-name","quarter-name",2130472226),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
/**
 * Inputs: ([n])
 *   Return: :mbql.clause/day-name
 *        
 * 
 *   Create a standalone clause of type `day-name`.
 */
metabase.lib.expression.day_name = (function metabase$lib$expression$day_name(n){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"day-name","day-name",1806125744),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
/**
 * Inputs: ([x n])
 *   Return: :mbql.clause/offset
 *        
 * 
 *   Create a standalone clause of type `offset`.
 */
metabase.lib.expression.offset = (function metabase$lib$expression$offset(x,n){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,n], null));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int expression-definition :- :metabase.lib.schema.expression/expression]
 *   Return: :metabase.lib.schema.metadata/column
 */
metabase.lib.expression.expression_metadata = (function metabase$lib$expression$expression_metadata(query,stage_number,expression_definition){
var expression_name = metabase.lib.util.expression_name(expression_definition);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression_definition),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","expressions","source/expressions",-458367840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),expression_name,new cljs.core.Keyword(null,"display-name","display-name",694513143),expression_name], 0));
});
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential :metabase.lib.schema.metadata/column]]
 *        
 * 
 *   Get metadata about the expressions in a given stage of a `query`.
 */
metabase.lib.expression.expressions_metadata = (function() {
var metabase$lib$expression$expressions_metadata = null;
var metabase$lib$expression$expressions_metadata__1 = (function (query){
return (metabase.lib.expression.expressions_metadata.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.expression.expressions_metadata.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.expression.expressions_metadata.call(null,query,(-1)));
});
var metabase$lib$expression$expressions_metadata__2 = (function (query,stage_number){
var G__77264 = cljs.core.not_empty(new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if((G__77264 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(metabase.lib.expression.expression_metadata,query,stage_number),G__77264);
}
});
metabase$lib$expression$expressions_metadata = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$expression$expressions_metadata__1.call(this,query);
case 2:
return metabase$lib$expression$expressions_metadata__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$expression$expressions_metadata.cljs$core$IFn$_invoke$arity$1 = metabase$lib$expression$expressions_metadata__1;
metabase$lib$expression$expressions_metadata.cljs$core$IFn$_invoke$arity$2 = metabase$lib$expression$expressions_metadata__2;
return metabase$lib$expression$expressions_metadata;
})()
;
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe :metabase.lib.schema.expression/expressions]
 *        
 * 
 *   Get the expressions map from a given stage of a `query`.
 */
metabase.lib.expression.expressions = (function() {
var metabase$lib$expression$expressions = null;
var metabase$lib$expression$expressions__1 = (function (query){
return (metabase.lib.expression.expressions.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.expression.expressions.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.expression.expressions.call(null,query,(-1)));
});
var metabase$lib$expression$expressions__2 = (function (query,stage_number){
return cljs.core.not_empty(new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
});
metabase$lib$expression$expressions = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$expression$expressions__1.call(this,query);
case 2:
return metabase$lib$expression$expressions__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$expression$expressions.cljs$core$IFn$_invoke$arity$1 = metabase$lib$expression$expressions__1;
metabase$lib$expression$expressions.cljs$core$IFn$_invoke$arity$2 = metabase$lib$expression$expressions__2;
return metabase$lib$expression$expressions;
})()
;
metabase.lib.ref.ref_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (expression_clause){
return expression_clause;
}));
/**
 * Inputs: ([query :- :metabase.lib.schema/query expression-position :- [:maybe :metabase.lib.schema.common/int-greater-than-or-equal-to-zero]]
 *         [query :- :metabase.lib.schema/query stage-number :- :int expression-position :- [:maybe :metabase.lib.schema.common/int-greater-than-or-equal-to-zero]])
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Get column metadata for all the columns that can be used expressions in
 *   the stage number `stage-number` of the query `query` and in expression index `expression-position`
 *   If `stage-number` is omitted, the last stage is used.
 *   Pass nil to `expression-position` for new expressions.
 *   The rules for determining which columns can be broken out by are as follows:
 * 
 *   1. custom `:expressions` in this stage of the query, that come before the `expression-position`
 * 
 *   2. Fields 'exported' by the previous stage of the query, if there is one;
 *   otherwise Fields from the current `:source-table`
 * 
 *   3. Fields exported by explicit joins
 * 
 *   4. Fields in Tables that are implicitly joinable.
 */
metabase.lib.expression.expressionable_columns = (function() {
var metabase$lib$expression$expressionable_columns = null;
var metabase$lib$expression$expressionable_columns__2 = (function (query,expression_position){
return (metabase.lib.expression.expressionable_columns.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.expression.expressionable_columns.cljs$core$IFn$_invoke$arity$3(query,(-1),expression_position) : metabase.lib.expression.expressionable_columns.call(null,query,(-1),expression_position));
});
var metabase$lib$expression$expressionable_columns__3 = (function (query,stage_number,expression_position){
var indexed_expressions = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,expr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.util.expression_name(expr),idx], null);
}),metabase.lib.expression.expressions.cljs$core$IFn$_invoke$arity$2(query,stage_number)));
var unavailable_expressions = (function (column){
return ((cljs.core.not(expression_position)) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","expressions","source/expressions",-458367840))) || ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(indexed_expressions,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column)) < expression_position)))));
});
var stage = metabase.lib.util.query_stage(query,stage_number);
var columns = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
return cljs.core.not_empty(cljs.core.filterv(unavailable_expressions,columns));
});
metabase$lib$expression$expressionable_columns = function(query,stage_number,expression_position){
switch(arguments.length){
case 2:
return metabase$lib$expression$expressionable_columns__2.call(this,query,stage_number);
case 3:
return metabase$lib$expression$expressionable_columns__3.call(this,query,stage_number,expression_position);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$expression$expressionable_columns.cljs$core$IFn$_invoke$arity$2 = metabase$lib$expression$expressionable_columns__2;
metabase$lib$expression$expressionable_columns.cljs$core$IFn$_invoke$arity$3 = metabase$lib$expression$expressionable_columns__3;
return metabase$lib$expression$expressionable_columns;
})()
;
/**
 * Inputs: ([query expression-name]
 *         [query :- :metabase.lib.schema/query stage-number :- :int expression-name :- :metabase.lib.schema.common/non-blank-string])
 *   Return: :mbql.clause/expression
 *        
 * 
 *   Find the expression with `expression-name` using [[resolve-expression]], then create a ref for it. Intended for use
 *   when creating queries using threading macros e.g.
 * 
 *  (-> (lib/query ...)
 *      (lib/expression "My Expression" ...)
 *      (as-> <> (lib/aggregate <> (lib/avg (lib/expression-ref <> "My Expression")))))
 */
metabase.lib.expression.expression_ref = (function() {
var metabase$lib$expression$expression_ref = null;
var metabase$lib$expression$expression_ref__2 = (function (query,expression_name){
return (metabase.lib.expression.expression_ref.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.expression.expression_ref.cljs$core$IFn$_invoke$arity$3(query,(-1),expression_name) : metabase.lib.expression.expression_ref.call(null,query,(-1),expression_name));
});
var metabase$lib$expression$expression_ref__3 = (function (query,stage_number,expression_name){
return metabase.lib.ref.ref(metabase.lib.expression.expression_metadata(query,stage_number,metabase.lib.expression.resolve_expression.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression_name)));
});
metabase$lib$expression$expression_ref = function(query,stage_number,expression_name){
switch(arguments.length){
case 2:
return metabase$lib$expression$expression_ref__2.call(this,query,stage_number);
case 3:
return metabase$lib$expression$expression_ref__3.call(this,query,stage_number,expression_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$expression$expression_ref.cljs$core$IFn$_invoke$arity$2 = metabase$lib$expression$expression_ref__2;
metabase$lib$expression$expression_ref.cljs$core$IFn$_invoke$arity$3 = metabase$lib$expression$expression_ref__3;
return metabase$lib$expression$expression_ref;
})()
;
metabase.lib.expression.expression_validator = malli.core.validator.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704));
/**
 * Returns true if `expression-clause` is indeed an expression clause, false otherwise.
 */
metabase.lib.expression.expression_clause_QMARK_ = (function metabase$lib$expression$expression_clause_QMARK_(expression_clause){
return (metabase.lib.expression.expression_validator.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.expression.expression_validator.cljs$core$IFn$_invoke$arity$1(expression_clause) : metabase.lib.expression.expression_validator.call(null,expression_clause));
});
/**
 * Inputs: [an-expression-clause :- :metabase.lib.schema.expression/expression new-name :- :string]
 *   Return: :metabase.lib.schema.expression/expression
 *        
 * 
 *   Return a new expression clause like `an-expression-clause` but with name `new-name`.
 *   For expressions from the :expressions clause of a pMBQL query this sets the :lib/expression-name option,
 *   for other expressions (for example named aggregation expressions) the :display-name option is set.
 * 
 *   Note that always setting :lib/expression-name would lead to confusion, because that option is used
 *   to decide what kind of reference is to be created. For example, expression are referenced by name,
 *   aggregations are referenced by position.
 */
metabase.lib.expression.with_expression_name = (function metabase$lib$expression$with_expression_name(an_expression_clause,new_name){
return metabase.lib.options.update_options(((metabase.lib.util.clause_QMARK_(an_expression_clause))?an_expression_clause:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),metabase.lib.schema.expression.type_of(an_expression_clause)], null),an_expression_clause], null)),(function (opts){
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
if(cljs.core.truth_(new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177)], 0)),new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590),new_name);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts__$1,new cljs.core.Keyword(null,"name","name",1843675177),new_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display-name","display-name",694513143),new_name], 0));
}
}));
});
metabase.lib.expression.expression_explainer = metabase.util.malli.registry.explainer(new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704));
metabase.lib.expression.aggregation_validator = metabase.util.malli.registry.validator(new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregation","metabase.lib.schema.aggregation/aggregation",-736862750));
metabase.lib.expression.aggregation_explainer = metabase.util.malli.registry.explainer(new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregation","metabase.lib.schema.aggregation/aggregation",-736862750));
metabase.lib.expression.filter_validator = metabase.util.malli.registry.validator(new cljs.core.Keyword("metabase.lib.schema","filterable","metabase.lib.schema/filterable",-1640076631));
metabase.lib.expression.filter_explainer = metabase.util.malli.registry.explainer(new cljs.core.Keyword("metabase.lib.schema","filterable","metabase.lib.schema/filterable",-1640076631));
metabase.lib.expression.expression__GT_name = (function metabase$lib$expression$expression__GT_name(expr){
return new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(expr));
});
metabase.lib.expression.referred_expressions = (function metabase$lib$expression$referred_expressions(expr){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__77282_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__77282_SHARP_,(2));
})),cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$expression$referred_expressions_$_match_77287(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__77290 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__77290)) && ((cljs.core.count(_AMPERSAND_match_left__77290) === (1))))){
try{var _AMPERSAND_match_left__77290_0__77292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__77290,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__77290_0__77292,new cljs.core.Keyword(null,"expression","expression",202311876))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77300){if((e77300 instanceof Error)){
var e__46214__auto__ = e77300;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77300;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77298){if((e77298 instanceof Error)){
var e__46214__auto__ = e77298;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77298;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77297){if((e77297 instanceof Error)){
var e__46214__auto__ = e77297;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$expression$referred_expressions_$_match_77287,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e77297;

}
}})(cljs.core.PersistentVector.EMPTY,expr))));
});
metabase.lib.expression.cyclic_definition = (function metabase$lib$expression$cyclic_definition(var_args){
var G__77308 = arguments.length;
switch (G__77308) {
case 1:
return metabase.lib.expression.cyclic_definition.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.expression.cyclic_definition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.expression.cyclic_definition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.expression.cyclic_definition.cljs$core$IFn$_invoke$arity$1 = (function (node__GT_children){
return cljs.core.some((function (p1__77305_SHARP_){
return metabase.lib.expression.cyclic_definition.cljs$core$IFn$_invoke$arity$2(node__GT_children,p1__77305_SHARP_);
}),cljs.core.keys(node__GT_children));
}));

(metabase.lib.expression.cyclic_definition.cljs$core$IFn$_invoke$arity$2 = (function (node__GT_children,start){
return metabase.lib.expression.cyclic_definition.cljs$core$IFn$_invoke$arity$3(node__GT_children,start,cljs.core.PersistentVector.EMPTY);
}));

(metabase.lib.expression.cyclic_definition.cljs$core$IFn$_invoke$arity$3 = (function (node__GT_children,node,path){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),path))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node);
} else {
return cljs.core.some((function (p1__77306_SHARP_){
return metabase.lib.expression.cyclic_definition.cljs$core$IFn$_invoke$arity$3(node__GT_children,p1__77306_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node));
}),(node__GT_children.cljs$core$IFn$_invoke$arity$1 ? node__GT_children.cljs$core$IFn$_invoke$arity$1(node) : node__GT_children.call(null,node)));
}
}));

(metabase.lib.expression.cyclic_definition.cljs$lang$maxFixedArity = 3);

/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int expression-mode :- [:enum :expression :aggregation :filter] expr :- :any expression-position :- [:maybe :int]]
 *   Return: [:maybe [:map [:message :string]]]
 *        
 * 
 *   Checks `expr` for type errors and, if `expression-mode` is :expression and
 *   `expression-position` is provided, for cyclic references with other expressions.
 * 
 *   - `expr` is a pMBQL expression usually created from a legacy MBQL expression created
 *   using the custom column editor in the FE. It is expected to have been normalized and
 *   converted using [[metabase.lib.convert/->pMBQL]].
 *   - `expression-mode` specifies what type of thing `expr` is: an :expression (custom column),
 *   an :aggregation expression, or a :filter condition.
 *   - `expression-position` is only defined when editing an existing custom column, and in that case
 *   it is the index of that expression in (expressions query stage-number).
 * 
 *   The function returns nil, if the expression is valid, otherwise it returns a map with
 *   an i18n message describing the problem under the key :message.
 */
metabase.lib.expression.diagnose_expression = (function metabase$lib$expression$diagnose_expression(query,stage_number,expression_mode,expr,expression_position){
var vec__77317 = (function (){var G__77320 = expression_mode;
var G__77320__$1 = (((G__77320 instanceof cljs.core.Keyword))?G__77320.fqn:null);
switch (G__77320__$1) {
case "expression":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.expression.expression_validator,metabase.lib.expression.expression_explainer], null);

break;
case "aggregation":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.expression.aggregation_validator,metabase.lib.expression.aggregation_explainer], null);

break;
case "filter":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.expression.filter_validator,metabase.lib.expression.filter_explainer], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77320__$1)].join('')));

}
})();
var validator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77317,(0),null);
var explainer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77317,(1),null);
var or__5002__auto__ = (cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(expr) : validator.call(null,expr)))?null:(function (){var error = (explainer.cljs$core$IFn$_invoke$arity$1 ? explainer.cljs$core$IFn$_invoke$arity$1(expr) : explainer.call(null,expr));
var humanized = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",malli.error.humanize.cljs$core$IFn$_invoke$arity$1(error));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Type error: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([humanized], 0))], null);
})());
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var temp__5804__auto__ = (function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expression_mode,new cljs.core.Keyword(null,"expression","expression",202311876));
if(and__5000__auto__){
var and__5000__auto____$1 = expression_position;
if(cljs.core.truth_(and__5000__auto____$1)){
var exprs = metabase.lib.expression.expressions.cljs$core$IFn$_invoke$arity$2(query,stage_number);
var edited_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(exprs,expression_position);
var edited_name = metabase.lib.expression.expression__GT_name(edited_expr);
var deps = cljs.core.update_vals(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(medley.core.index_by(metabase.lib.expression.expression__GT_name,exprs),edited_name,expr),metabase.lib.expression.referred_expressions);
return metabase.lib.expression.cyclic_definition.cljs$core$IFn$_invoke$arity$1(deps);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var path = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Cycle detected: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(" \u2192 ",path)], 0)),new cljs.core.Keyword(null,"friendly","friendly",281770577),true], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = (cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expression_mode,new cljs.core.Keyword(null,"expression","expression",202311876));
if(and__5000__auto__){
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$expression$diagnose_expression_$_match_77326(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__77329 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__77329)) && ((cljs.core.count(_AMPERSAND_match_left__77329) === (1))))){
try{var _AMPERSAND_match_left__77329_0__77331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__77329,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__77329_0__77331,new cljs.core.Keyword(null,"offset","offset",296498311))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77338){if((e77338 instanceof Error)){
var e__46214__auto__ = e77338;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77338;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77333){if((e77333 instanceof Error)){
var e__46214__auto__ = e77333;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77333;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77332){if((e77332 instanceof Error)){
var e__46214__auto__ = e77332;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$expression$diagnose_expression_$_match_77326,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e77332;

}
}})(cljs.core.PersistentVector.EMPTY,expr))));
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),metabase.shared.util.i18n.js_i18n("OFFSET is not supported in custom expressions"),new cljs.core.Keyword(null,"friendly","friendly",281770577),true], null):null);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = (cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expression_mode,new cljs.core.Keyword(null,"expression","expression",202311876));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$expression$diagnose_expression_$_match_77339(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__77342 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__77342)) && ((cljs.core.count(_AMPERSAND_match_left__77342) === (1))))){
try{var _AMPERSAND_match_left__77342_0__77344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__77342,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__77342_0__77344,new cljs.core.Keyword(null,"offset","offset",296498311))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77348){if((e77348 instanceof Error)){
var e__46214__auto__ = e77348;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77348;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77347){if((e77347 instanceof Error)){
var e__46214__auto__ = e77347;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77347;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77345){if((e77345 instanceof Error)){
var e__46214__auto__ = e77345;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$expression$diagnose_expression_$_match_77339,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e77345;

}
}})(cljs.core.PersistentVector.EMPTY,expr))));
if(cljs.core.truth_(and__5000__auto____$1)){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),metabase.shared.util.i18n.js_i18n("OFFSET in a custom expression requires a sort order"),new cljs.core.Keyword(null,"friendly","friendly",281770577),true], null):null);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expression_mode,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(and__5000__auto__){
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$expression$diagnose_expression_$_match_77360(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__77364 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__77364)) && ((cljs.core.count(_AMPERSAND_match_left__77364) === (1))))){
try{var _AMPERSAND_match_left__77364_0__77366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__77364,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__77364_0__77366,new cljs.core.Keyword(null,"offset","offset",296498311))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77374){if((e77374 instanceof Error)){
var e__46214__auto__ = e77374;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77374;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77372){if((e77372 instanceof Error)){
var e__46214__auto__ = e77372;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77372;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77367){if((e77367 instanceof Error)){
var e__46214__auto__ = e77367;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$expression$diagnose_expression_$_match_77360,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e77367;

}
}})(cljs.core.PersistentVector.EMPTY,expr))));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),metabase.shared.util.i18n.js_i18n("OFFSET is not supported in custom filters"),new cljs.core.Keyword(null,"friendly","friendly",281770577),true], null);
} else {
return null;
}
}
}
}
}
});

//# sourceMappingURL=metabase.lib.expression.js.map
