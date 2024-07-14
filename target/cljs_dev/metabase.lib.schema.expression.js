var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.schema.common.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.types.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.expression.js");

goog.provide('metabase.lib.schema.expression');
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.schema !== 'undefined') && (typeof metabase.lib.schema.expression !== 'undefined') && (typeof metabase.lib.schema.expression.type_of_method !== 'undefined')){
} else {
/**
 * Impl for [[type-of]]. Use [[type-of]], but implement [[type-of-method]].
 * 
 *   For MBQL clauses, try really hard not return an ambiguous set of possible types! Calculate things and determine what
 *   the result type will be!
 * 
 *   If we don't have enough information to determine the type (e.g. a `:field` clause that needs a metadata provider to
 *   determine the type), return `::expression/type.unknown`. This is a temporary workaround until we figure out how to
 *   always have type info!
 */
metabase.lib.schema.expression.type_of_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__75059 = cljs.core.get_global_hierarchy;
return (fexpr__75059.cljs$core$IFn$_invoke$arity$0 ? fexpr__75059.cljs$core$IFn$_invoke$arity$0() : fexpr__75059.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.schema.expression","type-of-method"),(function (x){
var dispatch_value = metabase.lib.dispatch.dispatch_value(x);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dispatch_value,new cljs.core.Keyword("dispatch-type","*","dispatch-type/*",848952403))){
return cljs.core.type(x);
} else {
return dispatch_value;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","base-type","metabase.lib.schema.expression/base-type",578343967),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","base-type","metabase.lib.schema.common/base-type",999524206)], null)], null)], null));
/**
 * Inputs: [expr]
 *   Return: [:multi
 *         {:dispatch set?}
 *         [true [:set {:min 2} [:ref :metabase.lib.schema.expression/base-type]]]
 *         [false [:ref :metabase.lib.schema.expression/base-type]]]
 *        
 * 
 *   Determine the type of an MBQL expression. Returns either a type keyword, or if the type is ambiguous, a set of
 *   possible types.
 */
metabase.lib.schema.expression.type_of = (function metabase$lib$schema$expression$type_of(expr){
var or__5002__auto__ = (function (){var and__5000__auto__ = metabase.lib.schema.common.mbql_clause_tag(expr);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.map_QMARK_(cljs.core.second(expr));
if(and__5000__auto____$1){
var or__5002__auto__ = new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(cljs.core.second(expr));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(cljs.core.second(expr));
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.schema.expression.type_of_method.cljs$core$IFn$_invoke$arity$1(expr);
}
});
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (expr){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0}: Don''t know how to determine the type of {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("metabase.lib.schema.expression","type-of","metabase.lib.schema.expression/type-of",-1625245814,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expr","expr",745722291),expr], null));
}));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("lib.type-of","type-is-type-of-first-arg","lib.type-of/type-is-type-of-first-arg",-317600808),(function (p__75073){
var vec__75074 = p__75073;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75074,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75074,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75074,(2),null);
return metabase.lib.schema.expression.type_of(expr);
}));
metabase.lib.schema.expression.is_type_QMARK_ = (function metabase$lib$schema$expression$is_type_QMARK_(x,y){
if(cljs.core.set_QMARK_(x)){
return cljs.core.some((function (p1__75077_SHARP_){
return (metabase.lib.schema.expression.is_type_QMARK_.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.schema.expression.is_type_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__75077_SHARP_,y) : metabase.lib.schema.expression.is_type_QMARK_.call(null,p1__75077_SHARP_,y));
}),x);
} else {
if(cljs.core.set_QMARK_(y)){
return cljs.core.some((function (p1__75078_SHARP_){
return (metabase.lib.schema.expression.is_type_QMARK_.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.schema.expression.is_type_QMARK_.cljs$core$IFn$_invoke$arity$2(x,p1__75078_SHARP_) : metabase.lib.schema.expression.is_type_QMARK_.call(null,x,p1__75078_SHARP_));
}),y);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107))){
return true;
} else {
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}
});
/**
 * Whether the [[type-of]] `expr` isa? [[metabase.types]] `base-type`.
 */
metabase.lib.schema.expression.type_of_QMARK_ = (function metabase$lib$schema$expression$type_of_QMARK_(expr,base_type){
var expr_type = metabase.lib.schema.expression.type_of(expr);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.set_QMARK_)(expr_type))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("type-of {0} returned an invalid type {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr_type], 0))], 0))),"\n","((some-fn keyword? set?) expr-type)"].join('')));
}

return metabase.lib.schema.expression.is_type_QMARK_(expr_type,base_type);
});
/**
 * Set this `true` to skip any type checks for expressions. This is useful while constructing expressions in MLv2 with
 *   full metadata, but it breaks during legacy conversion in some cases.
 * 
 *   In particular, if you override the metadata for a column to eg. treat a `:type/Integer` columns as a `:type/Instant`
 *   with `:Coercion/UNIXSeconds->DateTime`, it will have `:base-type :type/Integer` and `:effective-type :type/Instant`.
 *   But when converting from legacy, the `:field` refs in eg. a filter will only have `:base-type :type/Integer`, and then
 *   the filter fails Malli validation. See #41122.
 */
metabase.lib.schema.expression._STAR_suppress_expression_type_check_QMARK__STAR_ = false;
/**
 * Schema that matches the following rules:
 * 
 *   1a. expression is *not* an MBQL clause, OR
 * 
 *   1b. expression is an registered MBQL clause and matches the schema registered
 *    with [[metabase.lib.schema.mbql-clause]], AND
 * 
 *   2. expression's [[type-of]] isa? `base-type`
 */
metabase.lib.schema.expression.expression_schema = (function metabase$lib$schema$expression$expression_schema(base_type,description){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.mbql-clause","clause","metabase.lib.schema.mbql-clause/clause",955279388)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.literal","literal","metabase.lib.schema.literal/literal",1150545690)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),description], null),(function (p1__75083_SHARP_){
var or__5002__auto__ = metabase.lib.schema.expression._STAR_suppress_expression_type_check_QMARK__STAR_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.schema.expression.type_of_QMARK_(p1__75083_SHARP_,base_type);
}
})], null)], null);
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","boolean","metabase.lib.schema.expression/boolean",-1396506592),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Boolean","type/Boolean",26348630),"expression returning a boolean"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","string","metabase.lib.schema.expression/string",1750008170),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Text","type/Text",603746827),"expression returning a string"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","integer","metabase.lib.schema.expression/integer",2060430870),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Integer","type/Integer",-638928316),"expression returning an integer"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","non-integer-real","metabase.lib.schema.expression/non-integer-real",-1855491016),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Float","type/Float",1261800143),"expression returning a non-integer real number"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Number","type/Number",-2071693690),"expression returning a number"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","date","metabase.lib.schema.expression/date",1943847782),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Date","type/Date",-690428629),"expression returning a date"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","time","metabase.lib.schema.expression/time",865466446),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Time","type/Time",-814852413),"expression returning a time"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","datetime","metabase.lib.schema.expression/datetime",-51960022),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","DateTime","type/DateTime",352113310),"expression returning a date time"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","temporal","metabase.lib.schema.expression/temporal",320116754),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010),"expression returning a date, time, or date time"));
/**
 * Set of base types that are orderable.
 */
metabase.lib.schema.expression.orderable_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("type","Number","type/Number",-2071693690),null,new cljs.core.Keyword("type","Text","type/Text",603746827),null,new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010),null,new cljs.core.Keyword("type","Boolean","type/Boolean",26348630),null], null), null);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","orderable","metabase.lib.schema.expression/orderable",-1555566130),metabase.lib.schema.expression.expression_schema(metabase.lib.schema.expression.orderable_types,"an expression that can be compared with :> or :<"));
/**
 * Returns whether expressions `x` and `y` can be compared.
 * 
 *   Expressions are comparable if their types are comparable.
 *   Two types t1 and t2 are comparable if either one is ::type.unknown, or
 *   there is an orderable type t such that both `t1` and `t2` are assignable to t.
 */
metabase.lib.schema.expression.comparable_expressions_QMARK_ = (function metabase$lib$schema$expression$comparable_expressions_QMARK_(x,y){
return cljs.core.some(cljs.core.boolean$,(function (){var iter__5480__auto__ = (function metabase$lib$schema$expression$comparable_expressions_QMARK__$_iter__75091(s__75092){
return (new cljs.core.LazySeq(null,(function (){
var s__75092__$1 = s__75092;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__75092__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var t1 = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__75092__$1,t1,xs__6360__auto__,temp__5804__auto__){
return (function metabase$lib$schema$expression$comparable_expressions_QMARK__$_iter__75091_$_iter__75093(s__75094){
return (new cljs.core.LazySeq(null,((function (s__75092__$1,t1,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__75094__$1 = s__75094;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__75094__$1);
if(temp__5804__auto____$1){
var xs__6360__auto____$1 = temp__5804__auto____$1;
var t2 = cljs.core.first(xs__6360__auto____$1);
var iterys__5476__auto__ = ((function (s__75094__$1,s__75092__$1,t2,xs__6360__auto____$1,temp__5804__auto____$1,t1,xs__6360__auto__,temp__5804__auto__){
return (function metabase$lib$schema$expression$comparable_expressions_QMARK__$_iter__75091_$_iter__75093_$_iter__75095(s__75096){
return (new cljs.core.LazySeq(null,((function (s__75094__$1,s__75092__$1,t2,xs__6360__auto____$1,temp__5804__auto____$1,t1,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__75096__$1 = s__75096;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__75096__$1);
if(temp__5804__auto____$2){
var s__75096__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__75096__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__75096__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__75098 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__75097 = (0);
while(true){
if((i__75097 < size__5479__auto__)){
var t = cljs.core._nth(c__5478__auto__,i__75097);
cljs.core.chunk_append(b__75098,(function (){var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t2,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107));
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
var and__5000__auto__ = metabase.types.assignable_QMARK_(t1,t);
if(cljs.core.truth_(and__5000__auto__)){
return metabase.types.assignable_QMARK_(t2,t);
} else {
return and__5000__auto__;
}
}
}
})());

var G__75104 = (i__75097 + (1));
i__75097 = G__75104;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75098),metabase$lib$schema$expression$comparable_expressions_QMARK__$_iter__75091_$_iter__75093_$_iter__75095(cljs.core.chunk_rest(s__75096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75098),null);
}
} else {
var t = cljs.core.first(s__75096__$2);
return cljs.core.cons((function (){var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t1,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t2,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107));
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
var and__5000__auto__ = metabase.types.assignable_QMARK_(t1,t);
if(cljs.core.truth_(and__5000__auto__)){
return metabase.types.assignable_QMARK_(t2,t);
} else {
return and__5000__auto__;
}
}
}
})(),metabase$lib$schema$expression$comparable_expressions_QMARK__$_iter__75091_$_iter__75093_$_iter__75095(cljs.core.rest(s__75096__$2)));
}
} else {
return null;
}
break;
}
});})(s__75094__$1,s__75092__$1,t2,xs__6360__auto____$1,temp__5804__auto____$1,t1,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__75094__$1,s__75092__$1,t2,xs__6360__auto____$1,temp__5804__auto____$1,t1,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(metabase.lib.schema.expression.orderable_types));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,metabase$lib$schema$expression$comparable_expressions_QMARK__$_iter__75091_$_iter__75093(cljs.core.rest(s__75094__$1)));
} else {
var G__75105 = cljs.core.rest(s__75094__$1);
s__75094__$1 = G__75105;
continue;
}
} else {
return null;
}
break;
}
});})(s__75092__$1,t1,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__75092__$1,t1,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(metabase.util.one_or_many(metabase.lib.schema.expression.type_of(y))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,metabase$lib$schema$expression$comparable_expressions_QMARK__$_iter__75091(cljs.core.rest(s__75092__$1)));
} else {
var G__75108 = cljs.core.rest(s__75092__$1);
s__75092__$1 = G__75108;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(metabase.util.one_or_many(metabase.lib.schema.expression.type_of(x)));
})());
});
/**
 * Set of base types that can be compared with equality.
 */
metabase.lib.schema.expression.equality_comparable_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword("type","IPAddress","type/IPAddress",-808425343),null,new cljs.core.Keyword("type","Number","type/Number",-2071693690),null,new cljs.core.Keyword("type","Text","type/Text",603746827),null,new cljs.core.Keyword("type","MongoBSONID","type/MongoBSONID",663302764),null,new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010),null,new cljs.core.Keyword("type","*","type/*",-1283496752),null,new cljs.core.Keyword("type","Boolean","type/Boolean",26348630),null,new cljs.core.Keyword("type","MySQLEnum","type/MySQLEnum",-223370730),null,new cljs.core.Keyword("type","Array","type/Array",-2060534244),null], null), null);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","Text","type/Text",603746827),new cljs.core.Keyword("metabase.lib.schema.expression","emptyable","metabase.lib.schema.expression/emptyable",941775581));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","MongoBSONID","type/MongoBSONID",663302764),new cljs.core.Keyword("metabase.lib.schema.expression","emptyable","metabase.lib.schema.expression/emptyable",941775581));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("type","MySQLEnum","type/MySQLEnum",-223370730),new cljs.core.Keyword("metabase.lib.schema.expression","emptyable","metabase.lib.schema.expression/emptyable",941775581));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","emptyable","metabase.lib.schema.expression/emptyable",941775581),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("metabase.lib.schema.expression","emptyable","metabase.lib.schema.expression/emptyable",941775581),"expression returning something emptyable (e.g. a string or BSON ID)"));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","equality-comparable","metabase.lib.schema.expression/equality-comparable",-658449046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),metabase.lib.schema.expression.expression_schema(metabase.lib.schema.expression.equality_comparable_types,"an expression that can appear in := or :!=")], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),metabase.lib.schema.expression.expression_schema(new cljs.core.Keyword("type","*","type/*",-1283496752),"any type of expression")], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","expression.definition","metabase.lib.schema.expression/expression.definition",1033160537),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_string_key], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.expression","expressions","metabase.lib.schema.expression/expressions",790922225),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","expression.definition","metabase.lib.schema.expression/expression.definition",1033160537)], null)], null));

//# sourceMappingURL=metabase.lib.schema.expression.js.map
