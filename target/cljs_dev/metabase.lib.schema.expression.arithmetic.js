var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.mbql_clause.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.types.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.expression.arithmetic.js");

goog.provide('metabase.lib.schema.expression.arithmetic');
metabase.lib.schema.expression.arithmetic.valid_interval_for_type_QMARK_ = (function metabase$lib$schema$expression$arithmetic$valid_interval_for_type_QMARK_(p__75318,expr_type){
var vec__75319 = p__75318;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75319,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75319,(1),null);
var _n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75319,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75319,(3),null);
var _interval = vec__75319;
var unit_schema = ((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(expr_type,new cljs.core.Keyword("type","Date","type/Date",-690428629)))?new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date.interval","metabase.lib.schema.temporal-bucketing/unit.date.interval",-1463811525):((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(expr_type,new cljs.core.Keyword("type","Time","type/Time",-814852413)))?new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.time.interval","metabase.lib.schema.temporal-bucketing/unit.time.interval",-718964325):((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(expr_type,new cljs.core.Keyword("type","DateTime","type/DateTime",352113310)))?new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit.date-time.interval","metabase.lib.schema.temporal-bucketing/unit.date-time.interval",659301368):null)));
if(cljs.core.truth_(unit_schema)){
return metabase.util.malli.registry.validate(unit_schema,unit);
} else {
return true;
}
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","args.numbers","metabase.lib.schema.expression.arithmetic/args.numbers",-179216621),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], null));
/**
 * Validate a `:+` or `:-` expression with temporal args. Return a string describing any errors found, or `nil` if it
 *   looks ok.
 */
metabase.lib.schema.expression.arithmetic.validate_plus_minus_temporal_arithmetic_expression = (function metabase$lib$schema$expression$arithmetic$validate_plus_minus_temporal_arithmetic_expression(p__75326){
var vec__75327 = p__75326;
var seq__75328 = cljs.core.seq(vec__75327);
var first__75329 = cljs.core.first(seq__75328);
var seq__75328__$1 = cljs.core.next(seq__75328);
var _tag = first__75329;
var first__75329__$1 = cljs.core.first(seq__75328__$1);
var seq__75328__$2 = cljs.core.next(seq__75328__$1);
var _opts = first__75329__$1;
var exprs = seq__75328__$2;
var map__75331 = cljs.core.group_by((function (p1__75325_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of(p1__75325_SHARP_),new cljs.core.Keyword("type","Interval","type/Interval",-365323617));
}),exprs);
var map__75331__$1 = cljs.core.__destructure_map(map__75331);
var non_intervals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75331__$1,false);
var intervals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75331__$1,true);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(non_intervals),(1))){
return "Temporal arithmetic expression must contain exactly one non-interval value";
} else {
if((cljs.core.count(intervals) < (1))){
return "Temporal arithmetic expression must contain at least one :interval";
} else {
var expr_type = metabase.lib.schema.expression.type_of(cljs.core.first(non_intervals));
return cljs.core.some((function (p__75333){
var vec__75334 = p__75333;
var _tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75334,(0),null);
var _opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75334,(1),null);
var _n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75334,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75334,(3),null);
var interval = vec__75334;
if(cljs.core.truth_(metabase.lib.schema.expression.arithmetic.valid_interval_for_type_QMARK_(interval,expr_type))){
return null;
} else {
return ["Cannot add a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)," interval to a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr_type)," expression"].join('');
}
}),intervals);

}
}
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","plus-minus-temporal-interval-schema","metabase.lib.schema.expression.arithmetic/plus-minus-temporal-interval-schema",-1610354586),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":+ or :- clause with a temporal expression and one or more :interval clauses"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"-","-",-2112348439)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("mbql.clause","interval","mbql.clause/interval",-990446354)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("mbql.clause","interval","mbql.clause/interval",-990446354)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__75342,_){
var map__75343 = p__75342;
var map__75343__$1 = cljs.core.__destructure_map(map__75343);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75343__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["Invalid :+ or :- clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.schema.expression.arithmetic.validate_plus_minus_temporal_arithmetic_expression(value))].join('');
})], null),cljs.core.complement(metabase.lib.schema.expression.arithmetic.validate_plus_minus_temporal_arithmetic_expression)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","plus-minus-numeric-schema","metabase.lib.schema.expression.arithmetic/plus-minus-numeric-schema",-1366650723),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":+ or :- clause with numeric args"], null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repeat","repeat",832692087),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], null)], null));
metabase.lib.schema.expression.arithmetic.type_of_numeric_arithmetic_arg = (function metabase$lib$schema$expression$arithmetic$type_of_numeric_arithmetic_arg(expr){
var expr_type = metabase.lib.schema.expression.type_of(expr);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(expr_type,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107));
if(and__5000__auto__){
return metabase.util.malli.registry.validate(new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498),expr);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.Keyword("type","Number","type/Number",-2071693690);
} else {
return expr_type;
}
});
/**
 * Given a sequence of args to a numeric arithmetic expression like `:+`, determine the type returned by the expression
 *   by calculating the most-specific common ancestor type of all the args. E.g. `[:+ ... 2.0 2.0]` has two `:type/Float`
 *   args, and thus the most-specific common ancestor type is `:type/Float`. `[:+ ... 2.0 2]` has a `:type/Float` and a
 *   `:type/Integer` arg; the most-specific common ancestor type is `:type/Number`. For refs without type
 *   information (e.g. `:field` clauses), assume `:type/Number`.
 */
metabase.lib.schema.expression.arithmetic.type_of_numeric_arithmetic_args = (function metabase$lib$schema$expression$arithmetic$type_of_numeric_arithmetic_args(args){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.schema.expression.arithmetic.type_of_numeric_arithmetic_arg),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (x,y){
if((x == null)){
return y;
} else {
return metabase.types.most_specific_common_ancestor(x,y);
}
})),null,args);
});
/**
 * Given a temporal value plus one or more intervals `args` passed to an arithmetic expression like `:+`, determine the
 *   overall type returned by the expression. This is the type of the temporal value (the arg that is not an interval),
 *   or assume `:type/Temporal` if it is a ref without type information.
 */
metabase.lib.schema.expression.arithmetic.type_of_temporal_arithmetic_args = (function metabase$lib$schema$expression$arithmetic$type_of_temporal_arithmetic_args(args){
var first_non_interval_arg_type = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__75348_SHARP_){
return (!(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__75348_SHARP_,new cljs.core.Keyword("type","Interval","type/Interval",-365323617))));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of,args));
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(first_non_interval_arg_type,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107))){
return new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010);
} else {
return first_non_interval_arg_type;
}
});
/**
 * Given a sequence of `args` to an arithmetic expression like `:+`, determine the overall type that the expression
 *   returns. There are three types of arithmetic expressions:
 * 
 *   * Ones consisting of numbers. See [[type-of-numeric-arithmetic-args]].
 * 
 *   * Ones consisting of a temporal value like a Date plus one or more `:interval` clauses, in any order. See
 *  [[type-of-temporal-arithmetic-args]].
 * 
 *   * Ones consisting of exactly two temporal values being subtracted to produce an `:interval`. See
 *  [[type-of-temporal-arithmetic-args]].
 */
metabase.lib.schema.expression.arithmetic.type_of_arithmetic_args = (function metabase$lib$schema$expression$arithmetic$type_of_arithmetic_args(tag,args){
if(cljs.core.truth_(cljs.core.some((function (p1__75353_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of(p1__75353_SHARP_),new cljs.core.Keyword("type","Interval","type/Interval",-365323617));
}),args))){
return metabase.lib.schema.expression.arithmetic.type_of_temporal_arithmetic_args(args);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"-","-",-2112348439))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(2))) && (((cljs.core.every_QMARK_((function (p1__75355_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of(p1__75355_SHARP_),new cljs.core.Keyword("type","Date","type/Date",-690428629));
}),args)) || (cljs.core.every_QMARK_((function (p1__75359_SHARP_){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of(p1__75359_SHARP_),new cljs.core.Keyword("type","DateTime","type/DateTime",352113310));
}),args)))))))){
return new cljs.core.Keyword("type","Interval","type/Interval",-365323617);
} else {
return metabase.lib.schema.expression.arithmetic.type_of_numeric_arithmetic_args(args);

}
}
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","temporal-difference-schema","metabase.lib.schema.expression.arithmetic/temporal-difference-schema",666126531),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":- clause taking the difference of two temporal expressions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),new cljs.core.Keyword(null,"-","-",-2112348439)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754)], null)], null)], null));
metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"valid :+ clause"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),new cljs.core.Keyword(null,"+","+",1913524883)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(2)], null),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (p__75530){
var vec__75531 = p__75530;
var seq__75532 = cljs.core.seq(vec__75531);
var first__75533 = cljs.core.first(seq__75532);
var seq__75532__$1 = cljs.core.next(seq__75532);
var _tag = first__75533;
var first__75533__$1 = cljs.core.first(seq__75532__$1);
var seq__75532__$2 = cljs.core.next(seq__75532__$1);
var _opts = first__75533__$1;
var args = seq__75532__$2;
if(cljs.core.truth_(cljs.core.some((function (p1__75529_SHARP_){
return metabase.lib.schema.common.is_clause_QMARK_(new cljs.core.Keyword(null,"interval","interval",1708495417),p1__75529_SHARP_);
}),args))){
return new cljs.core.Keyword(null,"temporal","temporal",675125662);
} else {
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temporal","temporal",675125662),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","plus-minus-temporal-interval-schema","metabase.lib.schema.expression.arithmetic/plus-minus-temporal-interval-schema",-1610354586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","plus-minus-numeric-schema","metabase.lib.schema.expression.arithmetic/plus-minus-numeric-schema",-1366650723)], null)], null)], null)], null));
metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),new cljs.core.Keyword(null,"-","-",-2112348439)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(2)], null),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (p__75535){
var vec__75536 = p__75535;
var seq__75537 = cljs.core.seq(vec__75536);
var first__75538 = cljs.core.first(seq__75537);
var seq__75537__$1 = cljs.core.next(seq__75537);
var _tag = first__75538;
var first__75538__$1 = cljs.core.first(seq__75537__$1);
var seq__75537__$2 = cljs.core.next(seq__75537__$1);
var _opts = first__75538__$1;
var args = seq__75537__$2;
if(cljs.core.truth_(cljs.core.some((function (p1__75534_SHARP_){
return metabase.lib.schema.common.is_clause_QMARK_(new cljs.core.Keyword(null,"interval","interval",1708495417),p1__75534_SHARP_);
}),args))){
return new cljs.core.Keyword(null,"temporal","temporal",675125662);
} else {
if((cljs.core.count(args) > (2))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return new cljs.core.Keyword(null,"numeric-or-temporal-difference","numeric-or-temporal-difference",1318803621);

}
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temporal","temporal",675125662),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","plus-minus-temporal-interval-schema","metabase.lib.schema.expression.arithmetic/plus-minus-temporal-interval-schema",-1610354586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","plus-minus-numeric-schema","metabase.lib.schema.expression.arithmetic/plus-minus-numeric-schema",-1366650723)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"numeric-or-temporal-difference","numeric-or-temporal-difference",1318803621),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","plus-minus-numeric-schema","metabase.lib.schema.expression.arithmetic/plus-minus-numeric-schema",-1366650723)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","temporal-difference-schema","metabase.lib.schema.expression.arithmetic/temporal-difference-schema",666126531)], null)], null)], null)], null)], null));
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","args.numbers","metabase.lib.schema.expression.arithmetic/args.numbers",-179216621)], null)], 0));
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"/","/",1282502798),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("metabase.lib.schema.expression.arithmetic","args.numbers","metabase.lib.schema.expression.arithmetic/args.numbers",-179216621)], null)], 0));
var seq__75539_75692 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883),new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"*","*",-1294732318)], null));
var chunk__75540_75693 = null;
var count__75541_75694 = (0);
var i__75542_75695 = (0);
while(true){
if((i__75542_75695 < count__75541_75694)){
var tag_75696 = chunk__75540_75693.cljs$core$IIndexed$_nth$arity$2(null,i__75542_75695);
metabase.lib.hierarchy.derive(tag_75696,new cljs.core.Keyword("lib.type-of","type-is-type-of-arithmetic-args","lib.type-of/type-is-type-of-arithmetic-args",-626871615));


var G__75697 = seq__75539_75692;
var G__75698 = chunk__75540_75693;
var G__75699 = count__75541_75694;
var G__75700 = (i__75542_75695 + (1));
seq__75539_75692 = G__75697;
chunk__75540_75693 = G__75698;
count__75541_75694 = G__75699;
i__75542_75695 = G__75700;
continue;
} else {
var temp__5804__auto___75701 = cljs.core.seq(seq__75539_75692);
if(temp__5804__auto___75701){
var seq__75539_75702__$1 = temp__5804__auto___75701;
if(cljs.core.chunked_seq_QMARK_(seq__75539_75702__$1)){
var c__5525__auto___75703 = cljs.core.chunk_first(seq__75539_75702__$1);
var G__75704 = cljs.core.chunk_rest(seq__75539_75702__$1);
var G__75705 = c__5525__auto___75703;
var G__75706 = cljs.core.count(c__5525__auto___75703);
var G__75707 = (0);
seq__75539_75692 = G__75704;
chunk__75540_75693 = G__75705;
count__75541_75694 = G__75706;
i__75542_75695 = G__75707;
continue;
} else {
var tag_75708 = cljs.core.first(seq__75539_75702__$1);
metabase.lib.hierarchy.derive(tag_75708,new cljs.core.Keyword("lib.type-of","type-is-type-of-arithmetic-args","lib.type-of/type-is-type-of-arithmetic-args",-626871615));


var G__75709 = cljs.core.next(seq__75539_75702__$1);
var G__75710 = null;
var G__75711 = (0);
var G__75712 = (0);
seq__75539_75692 = G__75709;
chunk__75540_75693 = G__75710;
count__75541_75694 = G__75711;
i__75542_75695 = G__75712;
continue;
}
} else {
}
}
break;
}
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib.type-of","type-is-type-of-arithmetic-args","lib.type-of/type-is-type-of-arithmetic-args",-626871615),(function (p__75543){
var vec__75544 = p__75543;
var seq__75545 = cljs.core.seq(vec__75544);
var first__75546 = cljs.core.first(seq__75545);
var seq__75545__$1 = cljs.core.next(seq__75545);
var tag = first__75546;
var first__75546__$1 = cljs.core.first(seq__75545__$1);
var seq__75545__$2 = cljs.core.next(seq__75545__$1);
var _opts = first__75546__$1;
var args = seq__75545__$2;
return metabase.lib.schema.expression.arithmetic.type_of_arithmetic_args(tag,args);
}));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"abs","abs",-246026477),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword("lib.type-of","type-is-type-of-first-arg","lib.type-of/type-is-type-of-first-arg",-317600808));
var seq__75547_75713 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"exp","exp",-261706262),new cljs.core.Keyword(null,"sqrt","sqrt",-1270051929)], null));
var chunk__75548_75714 = null;
var count__75549_75715 = (0);
var i__75550_75716 = (0);
while(true){
if((i__75550_75716 < count__75549_75715)){
var op_75717 = chunk__75548_75714.cljs$core$IIndexed$_nth$arity$2(null,i__75550_75716);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_75717,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));


var G__75718 = seq__75547_75713;
var G__75719 = chunk__75548_75714;
var G__75720 = count__75549_75715;
var G__75721 = (i__75550_75716 + (1));
seq__75547_75713 = G__75718;
chunk__75548_75714 = G__75719;
count__75549_75715 = G__75720;
i__75550_75716 = G__75721;
continue;
} else {
var temp__5804__auto___75722 = cljs.core.seq(seq__75547_75713);
if(temp__5804__auto___75722){
var seq__75547_75723__$1 = temp__5804__auto___75722;
if(cljs.core.chunked_seq_QMARK_(seq__75547_75723__$1)){
var c__5525__auto___75724 = cljs.core.chunk_first(seq__75547_75723__$1);
var G__75725 = cljs.core.chunk_rest(seq__75547_75723__$1);
var G__75726 = c__5525__auto___75724;
var G__75727 = cljs.core.count(c__5525__auto___75724);
var G__75728 = (0);
seq__75547_75713 = G__75725;
chunk__75548_75714 = G__75726;
count__75549_75715 = G__75727;
i__75550_75716 = G__75728;
continue;
} else {
var op_75729 = cljs.core.first(seq__75547_75723__$1);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_75729,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));


var G__75730 = cljs.core.next(seq__75547_75723__$1);
var G__75731 = null;
var G__75732 = (0);
var G__75733 = (0);
seq__75547_75713 = G__75730;
chunk__75548_75714 = G__75731;
count__75549_75715 = G__75732;
i__75550_75716 = G__75733;
continue;
}
} else {
}
}
break;
}
var seq__75551_75734 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ceil","ceil",-1824929952),new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"round","round",2009433328)], null));
var chunk__75552_75735 = null;
var count__75553_75736 = (0);
var i__75554_75737 = (0);
while(true){
if((i__75554_75737 < count__75553_75736)){
var op_75738 = chunk__75552_75735.cljs$core$IIndexed$_nth$arity$2(null,i__75554_75737);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_75738,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));


var G__75739 = seq__75551_75734;
var G__75740 = chunk__75552_75735;
var G__75741 = count__75553_75736;
var G__75742 = (i__75554_75737 + (1));
seq__75551_75734 = G__75739;
chunk__75552_75735 = G__75740;
count__75553_75736 = G__75741;
i__75554_75737 = G__75742;
continue;
} else {
var temp__5804__auto___75743 = cljs.core.seq(seq__75551_75734);
if(temp__5804__auto___75743){
var seq__75551_75744__$1 = temp__5804__auto___75743;
if(cljs.core.chunked_seq_QMARK_(seq__75551_75744__$1)){
var c__5525__auto___75745 = cljs.core.chunk_first(seq__75551_75744__$1);
var G__75746 = cljs.core.chunk_rest(seq__75551_75744__$1);
var G__75747 = c__5525__auto___75745;
var G__75748 = cljs.core.count(c__5525__auto___75745);
var G__75749 = (0);
seq__75551_75734 = G__75746;
chunk__75552_75735 = G__75747;
count__75553_75736 = G__75748;
i__75554_75737 = G__75749;
continue;
} else {
var op_75750 = cljs.core.first(seq__75551_75744__$1);
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(op_75750,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));


var G__75751 = cljs.core.next(seq__75551_75744__$1);
var G__75752 = null;
var G__75753 = (0);
var G__75754 = (0);
seq__75551_75734 = G__75751;
chunk__75552_75735 = G__75752;
count__75553_75736 = G__75753;
i__75554_75737 = G__75754;
continue;
}
} else {
}
}
break;
}
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"power","power",-937852079),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"power","power",-937852079),(function (p__75555){
var vec__75556 = p__75555;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75556,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75556,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75556,(2),null);
var exponent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75556,(3),null);
if(((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of(expr),new cljs.core.Keyword("type","Integer","type/Integer",-638928316))) && (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression.type_of(exponent),new cljs.core.Keyword("type","Integer","type/Integer",-638928316))))){
return new cljs.core.Keyword("type","Integer","type/Integer",-638928316);
} else {
return new cljs.core.Keyword("type","Float","type/Float",1261800143);
}
}));

//# sourceMappingURL=metabase.lib.schema.expression.arithmetic.js.map
