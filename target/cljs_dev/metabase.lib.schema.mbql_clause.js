var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.mbql_clause.js");

goog.provide('metabase.lib.schema.mbql_clause');
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.schema !== 'undefined') && (typeof metabase.lib.schema.mbql_clause !== 'undefined') && (typeof metabase.lib.schema.mbql_clause.tag_registry !== 'undefined')){
} else {
/**
 * Set of all registered MBQL clause tags e.g. #{:starts-with}
 */
metabase.lib.schema.mbql_clause.tag_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
/**
 * Given an MBQL clause tag like `:starts-with`, return the name of the schema we'll register for it, e.g.
 *   `:mbql.clause/starts-with`.
 */
metabase.lib.schema.mbql_clause.tag__GT_registered_schema_name = (function metabase$lib$schema$mbql_clause$tag__GT_registered_schema_name(tag){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("mbql.clause",cljs.core.name(tag));
});
metabase.lib.schema.mbql_clause.invalid_clause_schema = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"not a known MBQL clause"], null),cljs.core.constantly(false)], null);
/**
 * Build the schema for `::clause`, a `:multi` schema that maps MBQL clause tag -> the schema
 *   in [[clause-schema-registry]].
 */
metabase.lib.schema.mbql_clause.clause_schema = (function metabase$lib$schema$mbql_clause$clause_schema(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),metabase.lib.schema.common.mbql_clause_tag,new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__75100,_){
var map__75101 = p__75100;
var map__75101__$1 = cljs.core.__destructure_map(map__75101);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75101__$1,new cljs.core.Keyword(null,"value","value",305978217));
var temp__5802__auto__ = metabase.lib.schema.common.mbql_clause_tag(value);
if(cljs.core.truth_(temp__5802__auto__)){
var tag = temp__5802__auto__;
return ["Invalid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," clause: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
} else {
return "not an MBQL clause";
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.core","default","malli.core/default",-1706204176),metabase.lib.schema.mbql_clause.invalid_clause_schema], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (tag){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),metabase.lib.schema.mbql_clause.tag__GT_registered_schema_name(tag)], null)], null);
})),cljs.core.deref(metabase.lib.schema.mbql_clause.tag_registry));
});
metabase.lib.schema.mbql_clause.update_clause_schema_BANG_ = (function metabase$lib$schema$mbql_clause$update_clause_schema_BANG_(){
return metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.mbql-clause","clause","metabase.lib.schema.mbql-clause/clause",955279388),metabase.lib.schema.mbql_clause.clause_schema());
});
metabase.lib.schema.mbql_clause.update_clause_schema_BANG_();
cljs.core.add_watch(metabase.lib.schema.mbql_clause.tag_registry,new cljs.core.Keyword("metabase.lib.schema.mbql-clause","update-schemas","metabase.lib.schema.mbql-clause/update-schemas",-447263953),(function (_key,_ref,_old_state,_new_state){
return metabase.lib.schema.mbql_clause.update_clause_schema_BANG_();
}));
/**
 * Inputs: ([tag :- simple-keyword? schema]
 *         [tag :- simple-keyword? _arrow :- [:= :-] return-type :- :metabase.lib.schema.expression/base-type schema])
 *   Return: :any
 *        
 * 
 *   Register the `schema` for an MBQL clause with `tag` keyword, and update the `:metabase.lib.schema.mbql-clause/clause`
 *   so it knows about this clause. Optionally specify the [[expression/type-of]] that this clause returns, inline, if
 *   the clause always returns a certain type; otherwise you can implement [[expression/type-of]] separately.
 * 
 *   (define-mbql-clause :is-null :- :type/Boolean
 *  [:tuple
 *   [:= :is-null]
 *   ::common/options
 *   [:ref :metabase.lib.schema.expression/expression]])
 */
metabase.lib.schema.mbql_clause.define_mbql_clause = (function() {
var metabase$lib$schema$mbql_clause$define_mbql_clause = null;
var metabase$lib$schema$mbql_clause$define_mbql_clause__2 = (function (tag,schema){
var schema_name_75119 = metabase.lib.schema.mbql_clause.tag__GT_registered_schema_name(tag);
metabase.util.malli.registry.register_BANG_(schema_name_75119,schema);

if(cljs.core.contains_QMARK_(cljs.core.deref(metabase.lib.schema.mbql_clause.tag_registry),tag)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(metabase.lib.schema.mbql_clause.tag_registry,cljs.core.conj,tag);
}

return null;
});
var metabase$lib$schema$mbql_clause$define_mbql_clause__4 = (function (tag,_arrow,return_type,schema){
(metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(tag,schema) : metabase.lib.schema.mbql_clause.define_mbql_clause.call(null,tag,schema));

metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,tag,(function (_clause){
return return_type;
}));

return null;
});
metabase$lib$schema$mbql_clause$define_mbql_clause = function(tag,_arrow,return_type,schema){
switch(arguments.length){
case 2:
return metabase$lib$schema$mbql_clause$define_mbql_clause__2.call(this,tag,_arrow);
case 4:
return metabase$lib$schema$mbql_clause$define_mbql_clause__4.call(this,tag,_arrow,return_type,schema);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$schema$mbql_clause$define_mbql_clause.cljs$core$IFn$_invoke$arity$2 = metabase$lib$schema$mbql_clause$define_mbql_clause__2;
metabase$lib$schema$mbql_clause$define_mbql_clause.cljs$core$IFn$_invoke$arity$4 = metabase$lib$schema$mbql_clause$define_mbql_clause__4;
return metabase$lib$schema$mbql_clause$define_mbql_clause;
})()
;
/**
 * Helper intended for use with [[define-mbql-clause]]. Create an MBQL clause schema with `:catn`. Use this for clauses
 *   with variable length. For clauses with fixed argument length, use [[tuple-clause-schema]] instead, since that gives
 *   slight better error messages and doesn't love to complain about 'potentially recursive seqexes' when you forget to
 *   wrap args in `:schema`.
 */
metabase.lib.schema.mbql_clause.catn_clause_schema = (function metabase$lib$schema$mbql_clause$catn_clause_schema(var_args){
var args__5732__auto__ = [];
var len__5726__auto___75120 = arguments.length;
var i__5727__auto___75121 = (0);
while(true){
if((i__5727__auto___75121 < len__5726__auto___75120)){
args__5732__auto__.push((arguments[i__5727__auto___75121]));

var G__75122 = (i__5727__auto___75121 + (1));
i__5727__auto___75121 = G__75122;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.lib.schema.mbql_clause.catn_clause_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.lib.schema.mbql_clause.catn_clause_schema.cljs$core$IFn$_invoke$arity$variadic = (function (tag,args){
if(cljs.core.simple_keyword_QMARK_(tag)){
} else {
throw (new Error("Assert failed: (simple-keyword? tag)"));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,args)){
} else {
throw (new Error("Assert failed: (every? vector? args)"));
}

if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,args))){
} else {
throw (new Error("Assert failed: (every? keyword? (map first args))"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),["Valid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," clause"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),tag], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null)], null)], null),args)], null);
}));

(metabase.lib.schema.mbql_clause.catn_clause_schema.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.lib.schema.mbql_clause.catn_clause_schema.cljs$lang$applyTo = (function (seq75102){
var G__75103 = cljs.core.first(seq75102);
var seq75102__$1 = cljs.core.next(seq75102);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75103,seq75102__$1);
}));

/**
 * Helper intended for use with [[define-mbql-clause]]. Create a clause schema with `:tuple`. Use this for fixed-length
 *   MBQL clause schemas. Use [[catn-clause-schema]] for variable-length schemas.
 */
metabase.lib.schema.mbql_clause.tuple_clause_schema = (function metabase$lib$schema$mbql_clause$tuple_clause_schema(var_args){
var args__5732__auto__ = [];
var len__5726__auto___75123 = arguments.length;
var i__5727__auto___75124 = (0);
while(true){
if((i__5727__auto___75124 < len__5726__auto___75123)){
args__5732__auto__.push((arguments[i__5727__auto___75124]));

var G__75125 = (i__5727__auto___75124 + (1));
i__5727__auto___75124 = G__75125;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.lib.schema.mbql_clause.tuple_clause_schema.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.lib.schema.mbql_clause.tuple_clause_schema.cljs$core$IFn$_invoke$arity$variadic = (function (tag,args){
if(cljs.core.simple_keyword_QMARK_(tag)){
} else {
throw (new Error("Assert failed: (simple-keyword? tag)"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),["Valid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," clause"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null),args);
}));

(metabase.lib.schema.mbql_clause.tuple_clause_schema.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.lib.schema.mbql_clause.tuple_clause_schema.cljs$lang$applyTo = (function (seq75106){
var G__75107 = cljs.core.first(seq75106);
var seq75106__$1 = cljs.core.next(seq75106);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75107,seq75106__$1);
}));

/**
 * Helper. Combines [[define-mbql-clause]] and the result of applying `schema-fn` to `tag` and `args`.
 */
metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn = (function metabase$lib$schema$mbql_clause$define_mbql_clause_with_schema_fn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___75126 = arguments.length;
var i__5727__auto___75127 = (0);
while(true){
if((i__5727__auto___75127 < len__5726__auto___75126)){
args__5732__auto__.push((arguments[i__5727__auto___75127]));

var G__75128 = (i__5727__auto___75127 + (1));
i__5727__auto___75127 = G__75128;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn.cljs$core$IFn$_invoke$arity$variadic = (function (schema_fn,tag,args){
var vec__75112 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(args),new cljs.core.Keyword(null,"-","-",-2112348439)))?cljs.core.cons(cljs.core.second(args),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),args)):cljs.core.cons(null,args));
var seq__75113 = cljs.core.seq(vec__75112);
var first__75114 = cljs.core.first(seq__75113);
var seq__75113__$1 = cljs.core.next(seq__75113);
var return_type = first__75114;
var args__$1 = seq__75113__$1;
var schema = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(schema_fn,tag,args__$1);
if(cljs.core.truth_(return_type)){
return metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$4(tag,new cljs.core.Keyword(null,"-","-",-2112348439),return_type,schema);
} else {
return metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(tag,schema);
}
}));

(metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn.cljs$lang$applyTo = (function (seq75109){
var G__75110 = cljs.core.first(seq75109);
var seq75109__$1 = cljs.core.next(seq75109);
var G__75111 = cljs.core.first(seq75109__$1);
var seq75109__$2 = cljs.core.next(seq75109__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75110,G__75111,seq75109__$2);
}));

/**
 * Helper. Combines [[define-mbql-clause]] and [[tuple-clause-schema]].
 */
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause = (function metabase$lib$schema$mbql_clause$define_tuple_mbql_clause(var_args){
var args__5732__auto__ = [];
var len__5726__auto___75129 = arguments.length;
var i__5727__auto___75130 = (0);
while(true){
if((i__5727__auto___75130 < len__5726__auto___75129)){
args__5732__auto__.push((arguments[i__5727__auto___75130]));

var G__75131 = (i__5727__auto___75130 + (1));
i__5727__auto___75130 = G__75131;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic = (function (tag,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn,metabase.lib.schema.mbql_clause.tuple_clause_schema,tag,args);
}));

(metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$lang$applyTo = (function (seq75115){
var G__75116 = cljs.core.first(seq75115);
var seq75115__$1 = cljs.core.next(seq75115);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75116,seq75115__$1);
}));

/**
 * Helper. Combines [[define-mbql-clause]] and [[catn-clause-schema]].
 */
metabase.lib.schema.mbql_clause.define_catn_mbql_clause = (function metabase$lib$schema$mbql_clause$define_catn_mbql_clause(var_args){
var args__5732__auto__ = [];
var len__5726__auto___75132 = arguments.length;
var i__5727__auto___75133 = (0);
while(true){
if((i__5727__auto___75133 < len__5726__auto___75132)){
args__5732__auto__.push((arguments[i__5727__auto___75133]));

var G__75134 = (i__5727__auto___75133 + (1));
i__5727__auto___75133 = G__75134;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic = (function (tag,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(metabase.lib.schema.mbql_clause.define_mbql_clause_with_schema_fn,metabase.lib.schema.mbql_clause.catn_clause_schema,tag,args);
}));

(metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$lang$applyTo = (function (seq75117){
var G__75118 = cljs.core.first(seq75117);
var seq75117__$1 = cljs.core.next(seq75117);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75118,seq75117__$1);
}));

/**
 * For REPL/test usage: get the definition of the schema associated with an MBQL clause tag.
 */
metabase.lib.schema.mbql_clause.resolve_schema = (function metabase$lib$schema$mbql_clause$resolve_schema(tag){
return metabase.util.malli.registry.resolve_schema(metabase.lib.schema.mbql_clause.tag__GT_registered_schema_name(tag));
});

//# sourceMappingURL=metabase.lib.schema.mbql_clause.js.map
