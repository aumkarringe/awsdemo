var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.legacy_mbql.schema.helpers.js");

goog.provide('metabase.legacy_mbql.schema.helpers');
metabase.legacy_mbql.schema.helpers.wrap_clause_arg_schema = (function metabase$legacy_mbql$schema$helpers$wrap_clause_arg_schema(arg_schema){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),((cljs.core.qualified_keyword_QMARK_(arg_schema))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),arg_schema], null):arg_schema)], null);
});
metabase.legacy_mbql.schema.helpers.clause_arg_schema = (function metabase$legacy_mbql$schema$helpers$clause_arg_schema(arg_schema){
if((!(cljs.core.vector_QMARK_(arg_schema)))){
return metabase.legacy_mbql.schema.helpers.wrap_clause_arg_schema(arg_schema);
} else {
var vec__75000 = arg_schema;
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75000,(0),null);
var arg_schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75000,(1),null);
var vector_arg_schema = vec__75000;
var G__75003 = option;
var G__75003__$1 = (((G__75003 instanceof cljs.core.Keyword))?G__75003.fqn:null);
switch (G__75003__$1) {
case "optional":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),metabase.legacy_mbql.schema.helpers.wrap_clause_arg_schema(arg_schema__$1)], null)], null);

break;
case "rest":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),metabase.legacy_mbql.schema.helpers.wrap_clause_arg_schema(arg_schema__$1)], null);

break;
default:
return metabase.legacy_mbql.schema.helpers.wrap_clause_arg_schema(vector_arg_schema);

}
}
});
/**
 * If `x` an MBQL clause, and an instance of clauses defined by keyword(s) `k-or-ks`?
 * 
 *  (is-clause? :count [:count 10])        ; -> true
 *  (is-clause? #{:+ :- :* :/} [:+ 10 20]) ; -> true
 */
metabase.legacy_mbql.schema.helpers.is_clause_QMARK_ = (function metabase$legacy_mbql$schema$helpers$is_clause_QMARK_(k_or_ks,x){
var and__5000__auto__ = cljs.core.vector_QMARK_(x);
if(and__5000__auto__){
var and__5000__auto____$1 = (cljs.core.first(x) instanceof cljs.core.Keyword);
if(and__5000__auto____$1){
if(cljs.core.coll_QMARK_(k_or_ks)){
var G__75010 = cljs.core.first(x);
var fexpr__75009 = cljs.core.set(k_or_ks);
return (fexpr__75009.cljs$core$IFn$_invoke$arity$1 ? fexpr__75009.cljs$core$IFn$_invoke$arity$1(G__75010) : fexpr__75009.call(null,G__75010));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_or_ks,cljs.core.first(x));
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
/**
 * Impl of [[metabase.legacy-mbql.schema.macros/defclause]] macro. Creates a Malli schema.
 */
metabase.legacy_mbql.schema.helpers.clause = (function metabase$legacy_mbql$schema$helpers$clause(var_args){
var args__5732__auto__ = [];
var len__5726__auto___75079 = arguments.length;
var i__5727__auto___75080 = (0);
while(true){
if((i__5727__auto___75080 < len__5726__auto___75079)){
args__5732__auto__.push((arguments[i__5727__auto___75080]));

var G__75081 = (i__5727__auto___75080 + (1));
i__5727__auto___75080 = G__75081;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.legacy_mbql.schema.helpers.clause.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.legacy_mbql.schema.helpers.clause.cljs$core$IFn$_invoke$arity$variadic = (function (tag,arg_schemas){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag], 0))], null)," clause"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),["must be a `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"` clause"].join('')], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.schema.helpers.is_clause_QMARK_,tag)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tag",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),tag], null)], null)], null),(function (){var iter__5480__auto__ = (function metabase$legacy_mbql$schema$helpers$iter__75025(s__75026){
return (new cljs.core.LazySeq(null,(function (){
var s__75026__$1 = s__75026;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__75026__$1);
if(temp__5804__auto__){
var s__75026__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75026__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__75026__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__75028 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__75027 = (0);
while(true){
if((i__75027 < size__5479__auto__)){
var vec__75033 = cljs.core._nth(c__5478__auto__,i__75027);
var arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75033,(0),null);
var arg_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75033,(1),null);
cljs.core.chunk_append(b__75028,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_name,metabase.legacy_mbql.schema.helpers.clause_arg_schema(arg_schema)], null));

var G__75084 = (i__75027 + (1));
i__75027 = G__75084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75028),metabase$legacy_mbql$schema$helpers$iter__75025(cljs.core.chunk_rest(s__75026__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75028),null);
}
} else {
var vec__75037 = cljs.core.first(s__75026__$2);
var arg_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75037,(0),null);
var arg_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75037,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg_name,metabase.legacy_mbql.schema.helpers.clause_arg_schema(arg_schema)], null),metabase$legacy_mbql$schema$helpers$iter__75025(cljs.core.rest(s__75026__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),arg_schemas));
})())], null);
}));

(metabase.legacy_mbql.schema.helpers.clause.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.legacy_mbql.schema.helpers.clause.cljs$lang$applyTo = (function (seq75015){
var G__75016 = cljs.core.first(seq75015);
var seq75015__$1 = cljs.core.next(seq75015);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75016,seq75015__$1);
}));

metabase.legacy_mbql.schema.helpers.clause_tag = (function metabase$legacy_mbql$schema$helpers$clause_tag(a_clause){
if(((cljs.core.vector_QMARK_(a_clause)) && ((cljs.core.first(a_clause) instanceof cljs.core.Keyword)))){
return cljs.core.first(a_clause);
} else {
return null;
}
});
/**
 * Interal impl of `one-of` macro.
 */
metabase.legacy_mbql.schema.helpers.one_of_STAR_ = (function metabase$legacy_mbql$schema$helpers$one_of_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___75086 = arguments.length;
var i__5727__auto___75087 = (0);
while(true){
if((i__5727__auto___75087 < len__5726__auto___75086)){
args__5732__auto__.push((arguments[i__5727__auto___75087]));

var G__75088 = (i__5727__auto___75087 + (1));
i__5727__auto___75087 = G__75088;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return metabase.legacy_mbql.schema.helpers.one_of_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(metabase.legacy_mbql.schema.helpers.one_of_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (tags_PLUS_schemas){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),metabase.legacy_mbql.schema.helpers.clause_tag,new cljs.core.Keyword("error","message","error/message",-502809098),["valid instance of one of these MBQL clauses: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tags_PLUS_schemas))].join(''),new cljs.core.Keyword("doc","schema","doc/schema",-1582036423),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","message","doc/message",-406025466),"valid instance of one of these MBQL clauses:"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),tags_PLUS_schemas)], null)], null),(function (){var iter__5480__auto__ = (function metabase$legacy_mbql$schema$helpers$iter__75044(s__75045){
return (new cljs.core.LazySeq(null,(function (){
var s__75045__$1 = s__75045;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__75045__$1);
if(temp__5804__auto__){
var s__75045__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75045__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__75045__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__75047 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__75046 = (0);
while(true){
if((i__75046 < size__5479__auto__)){
var vec__75051 = cljs.core._nth(c__5478__auto__,i__75046);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75051,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75051,(1),null);
cljs.core.chunk_append(b__75047,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,((cljs.core.qualified_keyword_QMARK_(schema))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),schema], null):schema)], null));

var G__75099 = (i__75046 + (1));
i__75046 = G__75099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75047),metabase$legacy_mbql$schema$helpers$iter__75044(cljs.core.chunk_rest(s__75045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75047),null);
}
} else {
var vec__75056 = cljs.core.first(s__75045__$2);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75056,(0),null);
var schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75056,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,((cljs.core.qualified_keyword_QMARK_(schema))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),schema], null):schema)], null),metabase$legacy_mbql$schema$helpers$iter__75044(cljs.core.rest(s__75045__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tags_PLUS_schemas);
})());
}));

(metabase.legacy_mbql.schema.helpers.one_of_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metabase.legacy_mbql.schema.helpers.one_of_STAR_.cljs$lang$applyTo = (function (seq75043){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75043));
}));

/**
 * Schema for any keyword or string.
 */
metabase.legacy_mbql.schema.helpers.KeywordOrString = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null);
/**
 * Add an addditonal constraint to `schema` (presumably an array) that requires it to be non-empty
 * (i.e., it must satisfy `seq`).
 */
metabase.legacy_mbql.schema.helpers.non_empty = (function metabase$legacy_mbql$schema$helpers$non_empty(schema){
if(((cljs.core.sequential_QMARK_(schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(schema),new cljs.core.Keyword(null,"sequential","sequential",-1082983960))))){
var vec__75060 = schema;
var seq__75061 = cljs.core.seq(vec__75060);
var first__75062 = cljs.core.first(seq__75061);
var seq__75061__$1 = cljs.core.next(seq__75061);
var _sequential = first__75062;
var args = seq__75061__$1;
var vec__75063 = ((cljs.core.map_QMARK_(cljs.core.first(args)))?args:cljs.core.cons(null,args));
var seq__75064 = cljs.core.seq(vec__75063);
var first__75065 = cljs.core.first(seq__75064);
var seq__75064__$1 = cljs.core.next(seq__75064);
var options = first__75065;
var args__$1 = seq__75064__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"min","min",444991522),(1))], null),args__$1);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),schema,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"non-empty"], null),cljs.core.seq], null)], null);
}
});
/**
 * True if `coll` is either empty or distinct.
 */
metabase.legacy_mbql.schema.helpers.empty_or_distinct_QMARK_ = (function metabase$legacy_mbql$schema$helpers$empty_or_distinct_QMARK_(coll){
if(cljs.core.seq(coll)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
} else {
return true;
}
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.legacy-mbql.schema.helpers","distinct","metabase.legacy-mbql.schema.helpers/distinct",1993698289),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("doc","message","doc/message",-406025466),"values must be distinct",new cljs.core.Keyword("error","message","error/message",-502809098),"distinct"], null),metabase.legacy_mbql.schema.helpers.empty_or_distinct_QMARK_], null));
/**
 * Add an additional constraint to `schema` (presumably an array) that requires all elements to be distinct.
 */
metabase.legacy_mbql.schema.helpers.distinct = (function metabase$legacy_mbql$schema$helpers$distinct(schema){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),schema,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.legacy-mbql.schema.helpers","distinct","metabase.legacy-mbql.schema.helpers/distinct",1993698289)], null)], null);
});

//# sourceMappingURL=metabase.legacy_mbql.schema.helpers.js.map
