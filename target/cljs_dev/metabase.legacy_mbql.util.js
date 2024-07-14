var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.legacy_mbql.predicates.js");
require("./metabase.legacy_mbql.schema.js");
require("./metabase.legacy_mbql.schema.helpers.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.util.match.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.shared.util.time.js");
require("./metabase.util.js");
require("./metabase.util.log.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.legacy_mbql.util.js");

goog.provide('metabase.legacy_mbql.util');
/**
 * Inputs: [token :- schema.helpers/KeywordOrString]
 *   Return: :keyword
 *        
 * 
 *   Convert a string or keyword in various cases (`lisp-case`, `snake_case`, or `SCREAMING_SNAKE_CASE`) to a lisp-cased
 *   keyword.
 */
metabase.legacy_mbql.util.normalize_token = (function metabase$legacy_mbql$util$normalize_token(token){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(clojure.string.lower_case(metabase.util.qualified_name(token)),/_/,"-"));
});
/**
 * True if `x` is an MBQL clause (a sequence with a keyword as its first arg). (Since this is used by the code in
 *   `normalize` this handles pre-normalized clauses as well.)
 */
metabase.legacy_mbql.util.mbql_clause_QMARK_ = (function metabase$legacy_mbql$util$mbql_clause_QMARK_(x){
return ((cljs.core.sequential_QMARK_(x)) && ((((!(cljs.core.map_entry_QMARK_(x)))) && ((cljs.core.first(x) instanceof cljs.core.Keyword)))));
});
/**
 * If `x` is an MBQL clause, and an instance of clauses defined by keyword(s) `k-or-ks`?
 * 
 *  (is-clause? :count [:count 10])        ; -> true
 *  (is-clause? #{:+ :- :* :/} [:+ 10 20]) ; -> true
 */
metabase.legacy_mbql.util.is_clause_QMARK_ = (function metabase$legacy_mbql$util$is_clause_QMARK_(k_or_ks,x){
var and__5000__auto__ = metabase.legacy_mbql.util.mbql_clause_QMARK_(x);
if(and__5000__auto__){
if(cljs.core.coll_QMARK_(k_or_ks)){
var G__75896 = cljs.core.first(x);
var fexpr__75895 = cljs.core.set(k_or_ks);
return (fexpr__75895.cljs$core$IFn$_invoke$arity$1 ? fexpr__75895.cljs$core$IFn$_invoke$arity$1(G__75896) : fexpr__75895.call(null,G__75896));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_or_ks,cljs.core.first(x));
}
} else {
return and__5000__auto__;
}
});
/**
 * Returns `x` if it's an instance of a clause defined by keyword(s) `k-or-ks`
 * 
 *  (check-clause :count [:count 10]) ; => [:count 10]
 *  (check-clause? #{:+ :- :* :/} [:+ 10 20]) ; -> [:+ 10 20]
 *  (check-clause :sum [:count 10]) ; => nil
 */
metabase.legacy_mbql.util.check_clause = (function metabase$legacy_mbql$util$check_clause(k_or_ks,x){
if(cljs.core.truth_(metabase.legacy_mbql.util.is_clause_QMARK_(k_or_ks,x))){
return x;
} else {
return null;
}
});
metabase.legacy_mbql.util.combine_compound_filters_of_type = (function metabase$legacy_mbql$util$combine_compound_filters_of_type(compound_type,subclauses){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__75897_SHARP_){
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$legacy_mbql$util$combine_compound_filters_of_type_$_match_75898(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__75903 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__75903)) && ((cljs.core.count(_AMPERSAND_match_left__75903) === (1))))){
try{var _AMPERSAND_match_left__75903_0__75905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__75903,(0));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,compound_type)(_AMPERSAND_match_left__75903_0__75905))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75908){if((e75908 instanceof Error)){
var e__46214__auto__ = e75908;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e75908;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75907){if((e75907 instanceof Error)){
var e__46214__auto__ = e75907;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e75907;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75906){if((e75906 instanceof Error)){
var e__46214__auto__ = e75906;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null)], null);
} else {
throw e__46214__auto__;
}
} else {
throw e75906;

}
}})(cljs.core.PersistentVector.EMPTY,p1__75897_SHARP_))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subclauses], 0));
});
metabase.legacy_mbql.util.simplify_and_or_filter = (function metabase$legacy_mbql$util$simplify_and_or_filter(op,args){
while(true){
var args__$1 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,args));
var G__75909 = cljs.core.count(args__$1);
switch (G__75909) {
case (0):
return null;

break;
case (1):
var G__75910 = cljs.core.first(args__$1);
return (metabase.legacy_mbql.util.simplify_compound_filter.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.util.simplify_compound_filter.cljs$core$IFn$_invoke$arity$1(G__75910) : metabase.legacy_mbql.util.simplify_compound_filter.call(null,G__75910));

break;
default:
if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.util.is_clause_QMARK_,op),args__$1))){
var G__76363 = op;
var G__76364 = metabase.legacy_mbql.util.combine_compound_filters_of_type(op,args__$1);
op = G__76363;
args = G__76364;
continue;
} else {
var simplified = cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.util.simplify_compound_filter,args__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(simplified,args__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [op], null),args__$1);
} else {
var G__76365 = op;
var G__76366 = simplified;
op = G__76365;
args = G__76366;
continue;
}
}

}
break;
}
});
/**
 * Simplify compound `:and`, `:or`, and `:not` compound filters, combining or eliminating them where possible. This
 *   also fixes theoretically disallowed compound filters like `:and` with only a single subclause, and eliminates `nils`
 *   and duplicate subclauses from the clauses.
 */
metabase.legacy_mbql.util.simplify_compound_filter = (function metabase$legacy_mbql$util$simplify_compound_filter(x){
while(true){
if(cljs.core.map_QMARK_(x)){
return cljs.core.update_vals(x,metabase.legacy_mbql.util.simplify_compound_filter);
} else {
if(cljs.core.seq_QMARK_(x)){
var G__76367 = cljs.core.vec(x);
x = G__76367;
continue;
} else {
if((!(cljs.core.vector_QMARK_(x)))){
return x;
} else {
if(cljs.core.not(cljs.core.some(cljs.core.some_QMARK_,x))){
return null;
} else {
var vec__75913 = x;
var seq__75914 = cljs.core.seq(vec__75913);
var first__75915 = cljs.core.first(seq__75914);
var seq__75914__$1 = cljs.core.next(seq__75914);
var op = first__75915;
var vec__75916 = seq__75914__$1;
var farg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75916,(0),null);
var args = vec__75916;
var G__75919 = op;
var G__75919__$1 = (((G__75919 instanceof cljs.core.Keyword))?G__75919.fqn:null);
switch (G__75919__$1) {
case "not":
if((!(cljs.core.seqable_QMARK_(farg)))){
return x;
} else {
var G__75920 = cljs.core.first(farg);
var G__75920__$1 = (((G__75920 instanceof cljs.core.Keyword))?G__75920.fqn:null);
switch (G__75920__$1) {
case "not":
var G__76370 = cljs.core.second(farg);
x = G__76370;
continue;

break;
case "and":
return metabase.legacy_mbql.util.simplify_and_or_filter(new cljs.core.Keyword(null,"or","or",235744169),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x,G__75920,G__75920__$1,G__75919,G__75919__$1,vec__75913,seq__75914,first__75915,seq__75914__$1,op,vec__75916,farg,args){
return (function (p1__75911_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"not","not",-595976884),p1__75911_SHARP_],null));
});})(x,G__75920,G__75920__$1,G__75919,G__75919__$1,vec__75913,seq__75914,first__75915,seq__75914__$1,op,vec__75916,farg,args))
,cljs.core.rest(farg)));

break;
case "or":
return metabase.legacy_mbql.util.simplify_and_or_filter(new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x,G__75920,G__75920__$1,G__75919,G__75919__$1,vec__75913,seq__75914,first__75915,seq__75914__$1,op,vec__75916,farg,args){
return (function (p1__75912_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"not","not",-595976884),p1__75912_SHARP_],null));
});})(x,G__75920,G__75920__$1,G__75919,G__75919__$1,vec__75913,seq__75914,first__75915,seq__75914__$1,op,vec__75916,farg,args))
,cljs.core.rest(farg)));

break;
default:
return x;

}
}

break;
case "and":
return metabase.legacy_mbql.util.simplify_and_or_filter(new cljs.core.Keyword(null,"and","and",-971899817),args);

break;
case "or":
return metabase.legacy_mbql.util.simplify_and_or_filter(new cljs.core.Keyword(null,"or","or",235744169),args);

break;
default:
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.util.simplify_compound_filter,x);

}

}
}
}
}
break;
}
});
/**
 * Inputs: [filter-clause & more-filter-clauses]
 *   Return: mbql.s/Filter
 *        
 * 
 *   Combine two filter clauses into a single clause in a way that minimizes slapping a bunch of `:and`s together if
 *   possible.
 * @param {...*} var_args
 */
metabase.legacy_mbql.util.combine_filter_clauses = (function() { 
var metabase$legacy_mbql$util$combine_filter_clauses__delegate = function (filter_clause,more_filter_clauses){
return metabase.legacy_mbql.util.simplify_compound_filter(cljs.core.cons(new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.cons(filter_clause,more_filter_clauses)));
};
var metabase$legacy_mbql$util$combine_filter_clauses = function (filter_clause,var_args){
var more_filter_clauses = null;
if (arguments.length > 1) {
var G__76371__i = 0, G__76371__a = new Array(arguments.length -  1);
while (G__76371__i < G__76371__a.length) {G__76371__a[G__76371__i] = arguments[G__76371__i + 1]; ++G__76371__i;}
  more_filter_clauses = new cljs.core.IndexedSeq(G__76371__a,0,null);
} 
return metabase$legacy_mbql$util$combine_filter_clauses__delegate.call(this,filter_clause,more_filter_clauses);};
metabase$legacy_mbql$util$combine_filter_clauses.cljs$lang$maxFixedArity = 1;
metabase$legacy_mbql$util$combine_filter_clauses.cljs$lang$applyTo = (function (arglist__76372){
var filter_clause = cljs.core.first(arglist__76372);
var more_filter_clauses = cljs.core.rest(arglist__76372);
return metabase$legacy_mbql$util$combine_filter_clauses__delegate(filter_clause,more_filter_clauses);
});
metabase$legacy_mbql$util$combine_filter_clauses.cljs$core$IFn$_invoke$arity$variadic = metabase$legacy_mbql$util$combine_filter_clauses__delegate;
return metabase$legacy_mbql$util$combine_filter_clauses;
})()
;
/**
 * Inputs: [inner-query :- mbql.s/MBQLQuery new-clause :- [:maybe mbql.s/Filter]]
 *   Return: mbql.s/MBQLQuery
 *        
 * 
 *   Add a additional filter clause to an *inner* MBQL query, merging with the existing filter clause with `:and` if
 *   needed.
 */
metabase.legacy_mbql.util.add_filter_clause_to_inner_query = (function metabase$legacy_mbql$util$add_filter_clause_to_inner_query(inner_query,new_clause){
if(cljs.core.not(new_clause)){
return inner_query;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(inner_query,new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.legacy_mbql.util.combine_filter_clauses,new_clause);
}
});
/**
 * Inputs: [outer-query :- mbql.s/Query new-clause :- [:maybe mbql.s/Filter]]
 *   Return: mbql.s/Query
 *        
 * 
 *   Add an additional filter clause to an `outer-query`. If `new-clause` is `nil` this is a no-op.
 */
metabase.legacy_mbql.util.add_filter_clause = (function metabase$legacy_mbql$util$add_filter_clause(outer_query,new_clause){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(outer_query,new cljs.core.Keyword(null,"query","query",-1288509510),metabase.legacy_mbql.util.add_filter_clause_to_inner_query,new_clause);
});
/**
 * Rewrite `:inside` filter clauses as a pair of `:between` clauses.
 */
metabase.legacy_mbql.util.desugar_inside = (function metabase$legacy_mbql$util$desugar_inside(m){
return (function metabase$legacy_mbql$util$desugar_inside_$_replace_75921(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 7)))){
try{var _AMPERSAND_match_0__75923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__75923,new cljs.core.Keyword(null,"inside","inside",1972503011))){
var lat_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var lon_field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var lat_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var lon_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
var lat_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(5));
var lon_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(6));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),lat_field,lat_min,lat_max], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),lon_field,lon_min,lon_max], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75931){if((e75931 instanceof Error)){
var e__46214__auto__ = e75931;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e75931;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75930){if((e75930 instanceof Error)){
var e__46214__auto__ = e75930;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_inside_$_replace_75921,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e75930;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:is-null` and `:not-null` filter clauses as simpler `:=` and `:!=`, respectively.
 */
metabase.legacy_mbql.util.desugar_is_null_and_not_null = (function metabase$legacy_mbql$util$desugar_is_null_and_not_null(m){
return (function metabase$legacy_mbql$util$desugar_is_null_and_not_null_$_replace_75932(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__75934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__75934,new cljs.core.Keyword(null,"is-null","is-null",-1997050930))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,null], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75937){if((e75937 instanceof Error)){
var e__46214__auto__ = e75937;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__75934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__75934,new cljs.core.Keyword(null,"not-null","not-null",-1326718535))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,null], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75938){if((e75938 instanceof Error)){
var e__46214__auto____$1 = e75938;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e75938;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e75937;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75936){if((e75936 instanceof Error)){
var e__46214__auto__ = e75936;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_is_null_and_not_null_$_replace_75932,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e75936;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:is-empty` and `:not-empty` filter clauses as simpler `:=` and `:!=`, respectively.
 * 
 * If `:not-empty` is called on `:metabase.lib.schema.expression/emptyable` type, expand check for empty string. For
 * non-`emptyable` types act as `:is-null`. If field has nil base type it is considered not emptyable expansion wise.
 */
metabase.legacy_mbql.util.desugar_is_empty_and_not_empty = (function metabase$legacy_mbql$util$desugar_is_empty_and_not_empty(m){
return (function metabase$legacy_mbql$util$desugar_is_empty_and_not_empty_$_replace_75939(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__75941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__75941,new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.Keyword(null,"base-type","base-type",1167971299)], null)),new cljs.core.Keyword("metabase.lib.schema.expression","emptyable","metabase.lib.schema.expression/emptyable",941775581))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,""], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,null], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e75944){if((e75944 instanceof Error)){
var e__46214__auto__ = e75944;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__75941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__75941,new cljs.core.Keyword(null,"not-empty","not-empty",388922063))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),new cljs.core.Keyword(null,"base-type","base-type",1167971299)], null)),new cljs.core.Keyword("metabase.lib.schema.expression","emptyable","metabase.lib.schema.expression/emptyable",941775581))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,""], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,null], null);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e75945){if((e75945 instanceof Error)){
var e__46214__auto____$1 = e75945;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e75945;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e75944;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75943){if((e75943 instanceof Error)){
var e__46214__auto__ = e75943;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_is_empty_and_not_empty_$_replace_75939,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e75943;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Replace a field or expression inside :time-interval
 */
metabase.legacy_mbql.util.replace_field_or_expression = (function metabase$legacy_mbql$util$replace_field_or_expression(m,unit){
return (function metabase$legacy_mbql$util$replace_field_or_expression_$_replace_75946(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__75949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__75949,new cljs.core.Keyword(null,"field","field",-1302436500))){
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75962){if((e75962 instanceof Error)){
var e__46214__auto__ = e75962;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e75962;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75955){if((e75955 instanceof Error)){
var e__46214__auto__ = e75955;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__75952 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__75952)) && ((cljs.core.count(_AMPERSAND_match_left__75952) === (1))))){
try{var _AMPERSAND_match_left__75952_0__75954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__75952,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__75952_0__75954,new cljs.core.Keyword(null,"expression","expression",202311876))){
var vec__75959 = _AMPERSAND_match;
var _expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75959,(0),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75959,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75959,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),expression_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75958){if((e75958 instanceof Error)){
var e__46214__auto____$1 = e75958;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e75958;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75957){if((e75957 instanceof Error)){
var e__46214__auto____$1 = e75957;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e75957;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75956){if((e75956 instanceof Error)){
var e__46214__auto____$1 = e75956;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$replace_field_or_expression_$_replace_75946,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto____$1;
}
} else {
throw e75956;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e75955;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:time-interval` filter clauses as simpler ones like `:=` or `:between`.
 */
metabase.legacy_mbql.util.desugar_time_interval = (function metabase$legacy_mbql$util$desugar_time_interval(m){
return (function metabase$legacy_mbql$util$desugar_time_interval_$_replace_75963(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__75972 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__75972,new cljs.core.Keyword(null,"time-interval","time-interval",704622015))){
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return metabase$legacy_mbql$util$desugar_time_interval_$_replace_75963(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field_or_expression,n,unit,null], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e76021){if((e76021 instanceof Error)){
var e__46214__auto__ = e76021;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76021;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75982){if((e75982 instanceof Error)){
var e__46214__auto__ = e75982;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 5)))){
try{var _AMPERSAND_match_0__75976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__75976,new cljs.core.Keyword(null,"time-interval","time-interval",704622015))){
try{var _AMPERSAND_match_2__75978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__75978,new cljs.core.Keyword(null,"current","current",-1088038603))){
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return metabase$legacy_mbql$util$desugar_time_interval_$_replace_75963(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field_or_expression,(0),unit,options], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e75986){if((e75986 instanceof Error)){
var e__46214__auto____$1 = e75986;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__75978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__75978,new cljs.core.Keyword(null,"last","last",1105735132))){
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return metabase$legacy_mbql$util$desugar_time_interval_$_replace_75963(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field_or_expression,(-1),unit,options], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e75987){if((e75987 instanceof Error)){
var e__46214__auto____$2 = e75987;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__75978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__75978,new cljs.core.Keyword(null,"next","next",-117701485))){
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return metabase$legacy_mbql$util$desugar_time_interval_$_replace_75963(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field_or_expression,(1),unit,options], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e75988){if((e75988 instanceof Error)){
var e__46214__auto____$3 = e75988;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__75978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_((function (){var fexpr__76019 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(-1),null], null), null);
return (fexpr__76019.cljs$core$IFn$_invoke$arity$1 ? fexpr__76019.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__75978) : fexpr__76019.call(null,_AMPERSAND_match_2__75978));
})())){
try{var _AMPERSAND_match_4__75980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__75980))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.legacy_mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76020){if((e76020 instanceof Error)){
var e__46214__auto____$4 = e76020;
if((e__46214__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$4;
}
} else {
throw e76020;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75989){if((e75989 instanceof Error)){
var e__46214__auto____$4 = e75989;
if((e__46214__auto____$4 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__75978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_((function (){var fexpr__76012 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null);
return (fexpr__76012.cljs$core$IFn$_invoke$arity$1 ? fexpr__76012.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__75978) : fexpr__76012.call(null,_AMPERSAND_match_2__75978));
})())){
try{var _AMPERSAND_match_4__75980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__75980))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.legacy_mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76014){if((e76014 instanceof Error)){
var e__46214__auto____$5 = e76014;
if((e__46214__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$5;
}
} else {
throw e76014;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75990){if((e75990 instanceof Error)){
var e__46214__auto____$5 = e75990;
if((e__46214__auto____$5 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__75978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_((function (){var fexpr__76000 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [(0),null,(1),null,(-1),null], null), null);
return (fexpr__76000.cljs$core$IFn$_invoke$arity$1 ? fexpr__76000.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__75978) : fexpr__76000.call(null,_AMPERSAND_match_2__75978));
})())){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),metabase.legacy_mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75991){if((e75991 instanceof Error)){
var e__46214__auto____$6 = e75991;
if((e__46214__auto____$6 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__75978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if((_AMPERSAND_match_2__75978 < (0))){
try{var _AMPERSAND_match_4__75980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__75980))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.legacy_mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75994){if((e75994 instanceof Error)){
var e__46214__auto____$7 = e75994;
if((e__46214__auto____$7 === cljs.core.match.backtrack)){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.legacy_mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(-1),unit], null)], null);
} else {
throw e__46214__auto____$7;
}
} else {
throw e75994;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75992){if((e75992 instanceof Error)){
var e__46214__auto____$7 = e75992;
if((e__46214__auto____$7 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_4__75980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(cljs.core.truth_(new cljs.core.Keyword(null,"include-current","include-current",-1602371981).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_4__75980))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.legacy_mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e75993){if((e75993 instanceof Error)){
var e__46214__auto____$8 = e75993;
if((e__46214__auto____$8 === cljs.core.match.backtrack)){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var field_or_expression = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),metabase.legacy_mbql.util.replace_field_or_expression(field_or_expression,unit),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(1),unit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),n,unit], null)], null);
} else {
throw e__46214__auto____$8;
}
} else {
throw e75993;

}
}} else {
throw e__46214__auto____$7;
}
} else {
throw e75992;

}
}} else {
throw e__46214__auto____$6;
}
} else {
throw e75991;

}
}} else {
throw e__46214__auto____$5;
}
} else {
throw e75990;

}
}} else {
throw e__46214__auto____$4;
}
} else {
throw e75989;

}
}} else {
throw e__46214__auto____$3;
}
} else {
throw e75988;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e75987;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e75986;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75984){if((e75984 instanceof Error)){
var e__46214__auto____$1 = e75984;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e75984;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e75983){if((e75983 instanceof Error)){
var e__46214__auto____$1 = e75983;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_time_interval_$_replace_75963,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto____$1;
}
} else {
throw e75983;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e75982;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Rewrite `:does-not-contain` filter clauses as simpler `[:not [:contains ...]]` clauses.
 * 
 *   Note that [[desugar-multi-argument-comparisons]] will have already desugared any 3+ argument `:does-not-contain` to
 *   several `[:and [:does-not-contain ...] [:does-not-contain ...] ...]` clauses, which then get rewritten here into
 *   `[:and [:not [:contains ...]] [:not [:contains ...]]]`.
 */
metabase.legacy_mbql.util.desugar_does_not_contain = (function metabase$legacy_mbql$util$desugar_does_not_contain(m){
return (function metabase$legacy_mbql$util$desugar_does_not_contain_$_replace_76022(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__76024 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__76024)) && ((cljs.core.count(_AMPERSAND_match_left__76024) === (1))))){
try{var _AMPERSAND_match_left__76024_0__76026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76024,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__76024_0__76026,new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contains","contains",676899812)], null),args)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76029){if((e76029 instanceof Error)){
var e__46214__auto__ = e76029;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76029;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76028){if((e76028 instanceof Error)){
var e__46214__auto__ = e76028;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76028;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76027){if((e76027 instanceof Error)){
var e__46214__auto__ = e76027;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_does_not_contain_$_replace_76022,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e76027;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * `:=`, `!=`, `:contains`, `:does-not-contain`, `:starts-with` and `:ends-with` clauses with more than 2 args
 *   automatically get rewritten as compound filters.
 * 
 *   [:= field x y]                -> [:or  [:=  field x] [:=  field y]]
 *   [:!= field x y]               -> [:and [:!= field x] [:!= field y]]
 *   [:does-not-contain field x y] -> [:and [:does-not-contain field x] [:does-not-contain field y]]
 * 
 *   Note that the optional options map is in different positions for `:contains`, `:does-not-contain`, `:starts-with` and
 *   `:ends-with` depending on the number of arguments. 2-argument forms use the legacy style `[:contains field x opts]`.
 *   Multi-argument forms use pMBQL style with the options at index 1, **even if there are no options**:
 *   `[:contains {} field x y z]`.
 */
metabase.legacy_mbql.util.desugar_multi_argument_comparisons = (function metabase$legacy_mbql$util$desugar_multi_argument_comparisons(m){
return (function metabase$legacy_mbql$util$desugar_multi_argument_comparisons_$_replace_76030(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (4))))){
try{var _AMPERSAND_match_left__76032 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(4));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__76032)) && ((cljs.core.count(_AMPERSAND_match_left__76032) === (4))))){
try{var _AMPERSAND_match_left__76032_0__76035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76032,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__76032_0__76035,new cljs.core.Keyword(null,"=","=",1152933628))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76032,(1));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76032,(2));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76032,(3));
var more = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"or","or",235744169),(function (){var iter__5480__auto__ = (function metabase$legacy_mbql$util$desugar_multi_argument_comparisons_$_replace_76030_$_iter__76067(s__76068){
return (new cljs.core.LazySeq(null,(function (){
var s__76068__$1 = s__76068;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76068__$1);
if(temp__5804__auto__){
var s__76068__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76068__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76068__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76070 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76069 = (0);
while(true){
if((i__76069 < size__5479__auto__)){
var x__$1 = cljs.core._nth(c__5478__auto__,i__76069);
cljs.core.chunk_append(b__76070,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,x__$1], null));

var G__76383 = (i__76069 + (1));
i__76069 = G__76383;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76070),metabase$legacy_mbql$util$desugar_multi_argument_comparisons_$_replace_76030_$_iter__76067(cljs.core.chunk_rest(s__76068__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76070),null);
}
} else {
var x__$1 = cljs.core.first(s__76068__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,x__$1], null),metabase$legacy_mbql$util$desugar_multi_argument_comparisons_$_replace_76030_$_iter__76067(cljs.core.rest(s__76068__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),more));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e76061){if((e76061 instanceof Error)){
var e__46214__auto__ = e76061;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__76032_0__76035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76032,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__76032_0__76035,new cljs.core.Keyword(null,"!=","!=",-1841737356))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76032,(1));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76032,(2));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76032,(3));
var more = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"and","and",-971899817),(function (){var iter__5480__auto__ = (function metabase$legacy_mbql$util$desugar_multi_argument_comparisons_$_replace_76030_$_iter__76063(s__76064){
return (new cljs.core.LazySeq(null,(function (){
var s__76064__$1 = s__76064;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76064__$1);
if(temp__5804__auto__){
var s__76064__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76064__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76064__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76066 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76065 = (0);
while(true){
if((i__76065 < size__5479__auto__)){
var x__$1 = cljs.core._nth(c__5478__auto__,i__76065);
cljs.core.chunk_append(b__76066,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,x__$1], null));

var G__76384 = (i__76065 + (1));
i__76065 = G__76384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76066),metabase$legacy_mbql$util$desugar_multi_argument_comparisons_$_replace_76030_$_iter__76063(cljs.core.chunk_rest(s__76064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76066),null);
}
} else {
var x__$1 = cljs.core.first(s__76064__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,x__$1], null),metabase$legacy_mbql$util$desugar_multi_argument_comparisons_$_replace_76030_$_iter__76063(cljs.core.rest(s__76064__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),more));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e76062){if((e76062 instanceof Error)){
var e__46214__auto____$1 = e76062;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e76062;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e76061;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76060){if((e76060 instanceof Error)){
var e__46214__auto__ = e76060;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76060;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76046){if((e76046 instanceof Error)){
var e__46214__auto__ = e76046;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (5))))){
try{var _AMPERSAND_match_left__76039 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(5));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__76039)) && ((cljs.core.count(_AMPERSAND_match_left__76039) === (5))))){
try{var _AMPERSAND_match_left__76039_0__76041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76039,(0));
if(cljs.core.truth_((function (){var fexpr__76054 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"starts-with","starts-with",366503009),null,new cljs.core.Keyword(null,"contains","contains",676899812),null,new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853),null,new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),null], null), null);
return (fexpr__76054.cljs$core$IFn$_invoke$arity$1 ? fexpr__76054.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_left__76039_0__76041) : fexpr__76054.call(null,_AMPERSAND_match_left__76039_0__76041));
})())){
try{var _AMPERSAND_match_left__76039_1__76042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76039,(1));
if(cljs.core.map_QMARK_(_AMPERSAND_match_left__76039_1__76042)){
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76039,(1));
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76039,(0));
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76039,(2));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76039,(3));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76039,(4));
var more = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(5));
var tail = ((cljs.core.seq(opts))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts], null):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853)))?new cljs.core.Keyword(null,"and","and",-971899817):new cljs.core.Keyword(null,"or","or",235744169)),(function (){var iter__5480__auto__ = (function metabase$legacy_mbql$util$desugar_multi_argument_comparisons_$_replace_76030_$_iter__76056(s__76057){
return (new cljs.core.LazySeq(null,(function (){
var s__76057__$1 = s__76057;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76057__$1);
if(temp__5804__auto__){
var s__76057__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76057__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76057__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76059 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76058 = (0);
while(true){
if((i__76058 < size__5479__auto__)){
var x__$1 = cljs.core._nth(c__5478__auto__,i__76058);
cljs.core.chunk_append(b__76059,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,field,x__$1], null),tail));

var G__76386 = (i__76058 + (1));
i__76058 = G__76386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76059),metabase$legacy_mbql$util$desugar_multi_argument_comparisons_$_replace_76030_$_iter__76056(cljs.core.chunk_rest(s__76057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76059),null);
}
} else {
var x__$1 = cljs.core.first(s__76057__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,field,x__$1], null),tail),metabase$legacy_mbql$util$desugar_multi_argument_comparisons_$_replace_76030_$_iter__76056(cljs.core.rest(s__76057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),more));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e76055){if((e76055 instanceof Error)){
var e__46214__auto____$1 = e76055;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e76055;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76053){if((e76053 instanceof Error)){
var e__46214__auto____$1 = e76053;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e76053;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76048){if((e76048 instanceof Error)){
var e__46214__auto____$1 = e76048;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e76048;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76047){if((e76047 instanceof Error)){
var e__46214__auto____$1 = e76047;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_multi_argument_comparisons_$_replace_76030,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto____$1;
}
} else {
throw e76047;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e76046;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Replace `relative-datetime` clauses like `[:relative-datetime :current]` with `[:relative-datetime 0 <unit>]`.
 *   `<unit>` is inferred from the `:field` the clause is being compared to (if any), otherwise falls back to `default.`
 */
metabase.legacy_mbql.util.desugar_current_relative_datetime = (function metabase$legacy_mbql$util$desugar_current_relative_datetime(m){
return (function metabase$legacy_mbql$util$desugar_current_relative_datetime_$_replace_76076(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (2))))){
try{var _AMPERSAND_match_left__76079 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__76079)) && ((cljs.core.count(_AMPERSAND_match_left__76079) === (2))))){
try{var _AMPERSAND_match_right__76080 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.some,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),new cljs.core.Keyword(null,"current","current",-1088038603)], null)))(_AMPERSAND_match_right__76080))){
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76079,(0));
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76079,(1));
var temporal_unit = (function (){var or__5002__auto__ = cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$legacy_mbql$util$desugar_current_relative_datetime_$_replace_76076_$_match_76086(_AMPERSAND_parents__$1,_AMPERSAND_match__$1){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match__$1)) && ((cljs.core.count(_AMPERSAND_match__$1) === 3)))){
try{var _AMPERSAND_match_0__76089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match__$1,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76089,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_2__76091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match__$1,(2));
if((((!((_AMPERSAND_match_2__76091 == null))))?(((((_AMPERSAND_match_2__76091.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === _AMPERSAND_match_2__76091.cljs$core$ILookup$))))?true:(((!_AMPERSAND_match_2__76091.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_2__76091):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_2__76091))){
try{var _AMPERSAND_match_2__76091_temporal_unit__76094 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match_2__76091,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__76091_temporal_unit__76094,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__76091,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [temporal_unit], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76099){if((e76099 instanceof Error)){
var e__46214__auto__ = e76099;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76099;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76097){if((e76097 instanceof Error)){
var e__46214__auto__ = e76097;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76097;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76096){if((e76096 instanceof Error)){
var e__46214__auto__ = e76096;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76096;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76095){if((e76095 instanceof Error)){
var e__46214__auto__ = e76095;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$legacy_mbql$util$desugar_current_relative_datetime_$_replace_76076_$_match_76086,_AMPERSAND_parents__$1,_AMPERSAND_match__$1);
} else {
throw e__46214__auto__;
}
} else {
throw e76095;

}
}})(cljs.core.PersistentVector.EMPTY,field))));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause,field], null),(function metabase$legacy_mbql$util$desugar_current_relative_datetime_$_replace_76076_$_replace_76100(_AMPERSAND_parents__$1,_AMPERSAND_match__$1){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match__$1)) && ((cljs.core.count(_AMPERSAND_match__$1) === 2)))){
try{var _AMPERSAND_match_0__76102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match__$1,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76102,new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278))){
try{var _AMPERSAND_match_1__76103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match__$1,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__76103,new cljs.core.Keyword(null,"current","current",-1088038603))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(0),temporal_unit], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76106){if((e76106 instanceof Error)){
var e__46214__auto__ = e76106;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76106;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76105){if((e76105 instanceof Error)){
var e__46214__auto__ = e76105;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76105;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76104){if((e76104 instanceof Error)){
var e__46214__auto__ = e76104;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_current_relative_datetime_$_replace_76076_$_replace_76100,_AMPERSAND_parents__$1,_AMPERSAND_match__$1);
} else {
throw e__46214__auto__;
}
} else {
throw e76104;

}
}})(cljs.core.PersistentVector.EMPTY,args));
} else {
throw cljs.core.match.backtrack;

}
}catch (e76085){if((e76085 instanceof Error)){
var e__46214__auto__ = e76085;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76085;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76084){if((e76084 instanceof Error)){
var e__46214__auto__ = e76084;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76084;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76083){if((e76083 instanceof Error)){
var e__46214__auto__ = e76083;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_current_relative_datetime_$_replace_76076,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e76083;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
/**
 * Mapping from the sugar syntax to extract datetime to the unit.
 */
metabase.legacy_mbql.util.temporal_extract_ops__GT_unit = cljs.core.PersistentHashMap.fromArrays([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-quarter","get-quarter",1327778593),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-year","get-year",-936011274),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),new cljs.core.Keyword(null,"us","us",746429226)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-hour","get-hour",622714059),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-day","get-day",127568857),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-minute","get-minute",1468086343),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-month","get-month",-369374731),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-day-of-week","get-day-of-week",2010140752),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),new cljs.core.Keyword(null,"iso","iso",-1366207543)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-second","get-second",-2065946318),null], null)],[new cljs.core.Keyword(null,"quarter-of-year","quarter-of-year",-472803491),new cljs.core.Keyword(null,"year-of-era","year-of-era",682445876),new cljs.core.Keyword(null,"week-of-year-us","week-of-year-us",849423511),new cljs.core.Keyword(null,"week-of-year-iso","week-of-year-iso",-1827744293),new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099),new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),new cljs.core.Keyword(null,"minute-of-hour","minute-of-hour",1903220478),new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),new cljs.core.Keyword(null,"week-of-year-iso","week-of-year-iso",-1827744293),new cljs.core.Keyword(null,"week-of-year-instance","week-of-year-instance",2047974624),new cljs.core.Keyword(null,"second-of-minute","second-of-minute",222734326)]);
metabase.legacy_mbql.util.temporal_extract_ops = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.keys(metabase.legacy_mbql.util.temporal_extract_ops__GT_unit)));
/**
 * Replace datetime extractions clauses like `[:get-year field]` with `[:temporal-extract field :year]`.
 */
metabase.legacy_mbql.util.desugar_temporal_extract = (function metabase$legacy_mbql$util$desugar_temporal_extract(m){
return (function metabase$legacy_mbql$util$desugar_temporal_extract_$_replace_76107(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (2))))){
try{var _AMPERSAND_match_left__76109 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__76109)) && ((cljs.core.count(_AMPERSAND_match_left__76109) === (2))))){
try{var _AMPERSAND_match_left__76109_0__76111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76109,(0));
if(cljs.core.truth_((metabase.legacy_mbql.util.temporal_extract_ops.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.util.temporal_extract_ops.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_left__76109_0__76111) : metabase.legacy_mbql.util.temporal_extract_ops.call(null,_AMPERSAND_match_left__76109_0__76111)))){
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76109,(0));
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76109,(1));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temporal-extract","temporal-extract",1781686405),field,(function (){var G__76116 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,cljs.core.first(args)], null);
return (metabase.legacy_mbql.util.temporal_extract_ops__GT_unit.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.util.temporal_extract_ops__GT_unit.cljs$core$IFn$_invoke$arity$1(G__76116) : metabase.legacy_mbql.util.temporal_extract_ops__GT_unit.call(null,G__76116));
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76115){if((e76115 instanceof Error)){
var e__46214__auto__ = e76115;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76115;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76114){if((e76114 instanceof Error)){
var e__46214__auto__ = e76114;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76114;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76113){if((e76113 instanceof Error)){
var e__46214__auto__ = e76113;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_temporal_extract_$_replace_76107,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e76113;

}
}})(cljs.core.PersistentVector.EMPTY,m);
});
metabase.legacy_mbql.util.desugar_divide_with_extra_args = (function metabase$legacy_mbql$util$desugar_divide_with_extra_args(expression){
return (function metabase$legacy_mbql$util$desugar_divide_with_extra_args_$_replace_76117(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (4))))){
try{var _AMPERSAND_match_left__76119 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(4));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__76119)) && ((cljs.core.count(_AMPERSAND_match_left__76119) === (4))))){
try{var _AMPERSAND_match_left__76119_0__76121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76119,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__76119_0__76121,new cljs.core.Keyword(null,"/","/",1282502798))){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76119,(1));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76119,(2));
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76119,(3));
var more = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return metabase$legacy_mbql$util$desugar_divide_with_extra_args_$_replace_76117(_AMPERSAND_parents,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"/","/",1282502798),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"/","/",1282502798),x,y], null)], null),cljs.core.cons(z,more)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e76127){if((e76127 instanceof Error)){
var e__46214__auto__ = e76127;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76127;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76126){if((e76126 instanceof Error)){
var e__46214__auto__ = e76126;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76126;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76125){if((e76125 instanceof Error)){
var e__46214__auto__ = e76125;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_divide_with_extra_args_$_replace_76117,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e76125;

}
}})(cljs.core.PersistentVector.EMPTY,expression);
});
metabase.legacy_mbql.util.host_regex = /(?<=@|\/\/|\.|^)(?!www\.)[^@\.:\/?#]+\.(?:[^@\.:\/?#]{1,3}\.)?[^@\.:\/?#]+(?=[:\/?#].*$|$)/;
metabase.legacy_mbql.util.domain_regex = /(?<=@|\/\/|\.|^)(?!www\.)[^@\.:\/?#]+(?=\.[^@\.:\/?#]{1,3}\.[^@\.:\/?#]+(?:[:\/?#].*)?$|\.[^@\.:\/?#]+(?:[:\/?#].*)?$)/;
metabase.legacy_mbql.util.subdomain_regex = /(?<=@|\/\/|\.|^)(?!www\.)(?![^\.:\/?#]+\.(?:[^\.:\/?#]{1,3}\.)?[^\.:\/?#]+(?:[:\/?#].*)?$)[^\.:\/?#]+(?=\.)/;
metabase.legacy_mbql.util.desugar_host_and_domain = (function metabase$legacy_mbql$util$desugar_host_and_domain(expression){
return (function metabase$legacy_mbql$util$desugar_host_and_domain_$_replace_76128(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__76131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76131,new cljs.core.Keyword(null,"host","host",-1558485167))){
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$legacy_mbql$util$desugar_host_and_domain_$_replace_76128(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regex-match-first","regex-match-first",-657299718),column,cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.util.host_regex)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e76135){if((e76135 instanceof Error)){
var e__46214__auto__ = e76135;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__76131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76131,new cljs.core.Keyword(null,"domain","domain",1847214937))){
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$legacy_mbql$util$desugar_host_and_domain_$_replace_76128(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regex-match-first","regex-match-first",-657299718),column,cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.util.domain_regex)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e76136){if((e76136 instanceof Error)){
var e__46214__auto____$1 = e76136;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__76131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76131,new cljs.core.Keyword(null,"subdomain","subdomain",-524487312))){
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$legacy_mbql$util$desugar_host_and_domain_$_replace_76128(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"regex-match-first","regex-match-first",-657299718),column,cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.util.subdomain_regex)], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e76137){if((e76137 instanceof Error)){
var e__46214__auto____$2 = e76137;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e76137;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e76136;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e76135;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76133){if((e76133 instanceof Error)){
var e__46214__auto__ = e76133;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_host_and_domain_$_replace_76128,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e76133;

}
}})(cljs.core.PersistentVector.EMPTY,expression);
});
/**
 * Creates a `:case` expression with a condition for each value of the given unit.
 */
metabase.legacy_mbql.util.temporal_case_expression = (function metabase$legacy_mbql$util$temporal_case_expression(column,unit,n){
var user_locale = null;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"case","case",1143702196),cljs.core.vec((function (){var iter__5480__auto__ = (function metabase$legacy_mbql$util$temporal_case_expression_$_iter__76151(s__76152){
return (new cljs.core.LazySeq(null,(function (){
var s__76152__$1 = s__76152;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76152__$1);
if(temp__5804__auto__){
var s__76152__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76152__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76152__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76154 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76153 = (0);
while(true){
if((i__76153 < size__5479__auto__)){
var raw_value = cljs.core._nth(c__5478__auto__,i__76153);
cljs.core.chunk_append(b__76154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),column,raw_value], null),metabase.shared.util.time.format_unit.cljs$core$IFn$_invoke$arity$3(raw_value,unit,user_locale)], null));

var G__76411 = (i__76153 + (1));
i__76153 = G__76411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76154),metabase$legacy_mbql$util$temporal_case_expression_$_iter__76151(cljs.core.chunk_rest(s__76152__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76154),null);
}
} else {
var raw_value = cljs.core.first(s__76152__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),column,raw_value], null),metabase.shared.util.time.format_unit.cljs$core$IFn$_invoke$arity$3(raw_value,unit,user_locale)], null),metabase$legacy_mbql$util$temporal_case_expression_$_iter__76151(cljs.core.rest(s__76152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),""], null)], null);
});
/**
 * Given an expression like `[:month-name column]`, transforms this into a `:case` expression, which matches the input
 *   numbers and transforms them into names.
 * 
 *   Uses the user's locale rather than the site locale, so the results will depend on the runner of the query, not just
 *   the query itself. Filtering should be done based on the number, rather than the name.
 */
metabase.legacy_mbql.util.desugar_temporal_names = (function metabase$legacy_mbql$util$desugar_temporal_names(expression){
return (function metabase$legacy_mbql$util$desugar_temporal_names_$_replace_76155(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_0__76157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76157,new cljs.core.Keyword(null,"month-name","month-name",-605509534))){
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$legacy_mbql$util$desugar_temporal_names_$_replace_76155(_AMPERSAND_parents,metabase.legacy_mbql.util.temporal_case_expression(column,new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),(12)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e76160){if((e76160 instanceof Error)){
var e__46214__auto__ = e76160;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__76157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76157,new cljs.core.Keyword(null,"quarter-name","quarter-name",2130472226))){
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$legacy_mbql$util$desugar_temporal_names_$_replace_76155(_AMPERSAND_parents,metabase.legacy_mbql.util.temporal_case_expression(column,new cljs.core.Keyword(null,"quarter-of-year","quarter-of-year",-472803491),(4)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e76161){if((e76161 instanceof Error)){
var e__46214__auto____$1 = e76161;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__76157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76157,new cljs.core.Keyword(null,"day-name","day-name",1806125744))){
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$legacy_mbql$util$desugar_temporal_names_$_replace_76155(_AMPERSAND_parents,metabase.legacy_mbql.util.temporal_case_expression(column,new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),(7)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e76162){if((e76162 instanceof Error)){
var e__46214__auto____$2 = e76162;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e76162;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e76161;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e76160;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76159){if((e76159 instanceof Error)){
var e__46214__auto__ = e76159;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$desugar_temporal_names_$_replace_76155,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e76159;

}
}})(cljs.core.PersistentVector.EMPTY,expression);
});
/**
 * Inputs: [expression :- :metabase.legacy-mbql.schema/FieldOrExpressionDef]
 *   Return: :metabase.legacy-mbql.schema/FieldOrExpressionDef
 *        
 * 
 *   Rewrite various 'syntactic sugar' expressions like `:/` with more than two args into something simpler for drivers
 *   to compile.
 */
metabase.legacy_mbql.util.desugar_expression = (function metabase$legacy_mbql$util$desugar_expression(expression){
return metabase.legacy_mbql.util.desugar_temporal_names(metabase.legacy_mbql.util.desugar_host_and_domain(metabase.legacy_mbql.util.desugar_divide_with_extra_args(expression)));
});
metabase.legacy_mbql.util.maybe_desugar_expression = (function metabase$legacy_mbql$util$maybe_desugar_expression(clause){
var G__76163 = clause;
if(cljs.core.truth_((metabase.legacy_mbql.predicates.FieldOrExpressionDef_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.predicates.FieldOrExpressionDef_QMARK_.cljs$core$IFn$_invoke$arity$1(clause) : metabase.legacy_mbql.predicates.FieldOrExpressionDef_QMARK_.call(null,clause)))){
return metabase.legacy_mbql.util.desugar_expression(G__76163);
} else {
return G__76163;
}
});
/**
 * Inputs: [filter-clause :- mbql.s/Filter]
 *   Return: mbql.s/Filter
 *        
 * 
 *   Rewrite various 'syntatic sugar' filter clauses like `:time-interval` and `:inside` as simpler, logically
 *   equivalent clauses. This can be used to simplify the number of filter clauses that need to be supported by anything
 *   that needs to enumerate all the possible filter types (such as driver query processor implementations, or the
 *   implementation [[negate-filter-clause]] below.)
 */
metabase.legacy_mbql.util.desugar_filter_clause = (function metabase$legacy_mbql$util$desugar_filter_clause(filter_clause){
return metabase.legacy_mbql.util.maybe_desugar_expression(metabase.legacy_mbql.util.desugar_temporal_extract(metabase.legacy_mbql.util.simplify_compound_filter(metabase.legacy_mbql.util.desugar_inside(metabase.legacy_mbql.util.desugar_is_empty_and_not_empty(metabase.legacy_mbql.util.desugar_is_null_and_not_null(metabase.legacy_mbql.util.desugar_time_interval(metabase.legacy_mbql.util.desugar_does_not_contain(metabase.legacy_mbql.util.desugar_multi_argument_comparisons(metabase.legacy_mbql.util.desugar_current_relative_datetime(filter_clause))))))))));
});
if((typeof metabase !== 'undefined') && (typeof metabase.legacy_mbql !== 'undefined') && (typeof metabase.legacy_mbql.util !== 'undefined') && (typeof metabase.legacy_mbql.util.negate_STAR_ !== 'undefined')){
} else {
metabase.legacy_mbql.util.negate_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76166 = cljs.core.get_global_hierarchy;
return (fexpr__76166.cljs$core$IFn$_invoke$arity$0 ? fexpr__76166.cljs$core$IFn$_invoke$arity$0() : fexpr__76166.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.legacy-mbql.util","negate*"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not","not",-595976884),(function (p__76167){
var vec__76168 = p__76167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76168,(0),null);
var subclause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76168,(1),null);
return subclause;
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (p__76171){
var vec__76172 = p__76171;
var seq__76173 = cljs.core.seq(vec__76172);
var first__76174 = cljs.core.first(seq__76173);
var seq__76173__$1 = cljs.core.next(seq__76173);
var _ = first__76174;
var subclauses = seq__76173__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.util.negate_STAR_,subclauses));
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (p__76175){
var vec__76176 = p__76175;
var seq__76177 = cljs.core.seq(vec__76176);
var first__76178 = cljs.core.first(seq__76177);
var seq__76177__$1 = cljs.core.next(seq__76177);
var _ = first__76178;
var subclauses = seq__76177__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.util.negate_STAR_,subclauses));
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=","=",1152933628),(function (p__76181){
var vec__76182 = p__76181;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76182,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76182,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76182,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),field,value], null);
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"!=","!=",-1841737356),(function (p__76185){
var vec__76186 = p__76185;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76186,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76186,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76186,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),field,value], null);
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">",">",-555517146),(function (p__76189){
var vec__76190 = p__76189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76190,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76190,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76190,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<=","<=",-395636158),field,value], null);
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<","<",-646864291),(function (p__76193){
var vec__76194 = p__76193;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76194,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76194,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76194,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">=",">=",-623615505),field,value], null);
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">=",">=",-623615505),(function (p__76197){
var vec__76198 = p__76197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76198,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76198,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76198,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<","<",-646864291),field,value], null);
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<=","<=",-395636158),(function (p__76201){
var vec__76202 = p__76201;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76202,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76202,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76202,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),field,value], null);
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"between","between",1131099276),(function (p__76205){
var vec__76206 = p__76205;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76206,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76206,(1),null);
var min_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76206,(2),null);
var max_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76206,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<","<",-646864291),field,min_value], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),field,max_value], null)], null);
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"contains","contains",676899812),(function (clause){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),clause], null);
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"starts-with","starts-with",366503009),(function (clause){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),clause], null);
}));
metabase.legacy_mbql.util.negate_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),(function (clause){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),clause], null);
}));
/**
 * Inputs: [filter-clause :- mbql.s/Filter]
 *   Return: mbql.s/Filter
 *        
 * 
 *   Return the logical compliment of an MBQL filter clause, generally without using `:not` (except for the string
 *   filter clause types). Useful for generating highly optimized filter clauses and for drivers that do not support
 *   top-level `:not` filter clauses.
 */
metabase.legacy_mbql.util.negate_filter_clause = (function metabase$legacy_mbql$util$negate_filter_clause(filter_clause){
return metabase.legacy_mbql.util.simplify_compound_filter(metabase.legacy_mbql.util.negate_STAR_.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.util.desugar_filter_clause(filter_clause)));
});
/**
 * Inputs: [{{source-table-id :source-table, source-query :source-query} :query, query-type :type, :as query} :- [:maybe :map]]
 *   Return: [:maybe pos-int?]
 *        
 * 
 *   Return the source Table ID associated with `query`, if applicable; handles nested queries as well. If `query` is
 *   `nil`, returns `nil`.
 * 
 *   Throws an Exception when it encounters a unresolved source query (i.e., the `:source-table "card__id"`
 *   form), because it cannot return an accurate result for a query that has not yet been preprocessed.
 */
metabase.legacy_mbql.util.query__GT_source_table_id = (function metabase$legacy_mbql$util$query__GT_source_table_id(p__76209){
while(true){
var map__76210 = p__76209;
var map__76210__$1 = cljs.core.__destructure_map(map__76210);
var query = map__76210__$1;
var map__76211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76210__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__76211__$1 = cljs.core.__destructure_map(map__76211);
var source_table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76211__$1,new cljs.core.Keyword(null,"source-table","source-table",-225307692));
var source_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76211__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var query_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76210__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query_type,new cljs.core.Keyword(null,"query","query",-1288509510))){
return null;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = (source_table_id == null);
if(and__5000__auto__){
var and__5000__auto____$1 = source_query;
if(cljs.core.truth_(and__5000__auto____$1)){
return new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(source_query);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = (source_table_id == null);
if(and__5000__auto__){
return source_query;
} else {
return and__5000__auto__;
}
})())){
var G__76429 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword(null,"query","query",-1288509510),source_query);
p__76209 = G__76429;
continue;
} else {
if(cljs.core.truth_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,metabase.legacy_mbql.schema.source_table_card_id_regex))(source_table_id))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n("Error: query''s source query has not been resolved. You probably need to `preprocess` the query first."),cljs.core.PersistentArrayMap.EMPTY);
} else {
return source_table_id;

}
}
}
}
break;
}
});
/**
 * Inputs: [join]
 *   Return: [:maybe pos-int?]
 *        
 * 
 *   Like `query->source-table-id`, but for a join.
 */
metabase.legacy_mbql.util.join__GT_source_table_id = (function metabase$legacy_mbql$util$join__GT_source_table_id(join){
return metabase.legacy_mbql.util.query__GT_source_table_id(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"query","query",-1288509510),join], null));
});
/**
 * Inputs: [inner-query :- mbql.s/MBQLQuery [_dir orderable :as order-by-clause] :- :metabase.legacy-mbql.schema/OrderBy]
 *   Return: mbql.s/MBQLQuery
 *        
 * 
 *   Add a new `:order-by` clause to an MBQL `inner-query`. If the new order-by clause references a Field that is
 *   already being used in another order-by clause, this function does nothing.
 */
metabase.legacy_mbql.util.add_order_by_clause = (function metabase$legacy_mbql$util$add_order_by_clause(inner_query,p__76212){
var vec__76213 = p__76212;
var _dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76213,(0),null);
var orderable = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76213,(1),null);
var order_by_clause = vec__76213;
var existing_orderables = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__76216){
var vec__76217 = p__76216;
var _dir__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76217,(0),null);
var orderable__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76217,(1),null);
return orderable__$1;
})),new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(inner_query));
if(cljs.core.truth_((existing_orderables.cljs$core$IFn$_invoke$arity$1 ? existing_orderables.cljs$core$IFn$_invoke$arity$1(orderable) : existing_orderables.call(null,orderable)))){
return inner_query;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(inner_query,new cljs.core.Keyword(null,"order-by","order-by",1527318070),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.vec,cljs.core.distinct,cljs.core.conj),order_by_clause);
}
});
/**
 * Dispatch function perfect for use with multimethods that dispatch off elements of an MBQL query. If `x` is an MBQL
 *   clause, dispatches off the clause name; otherwise dispatches off `x`'s class.
 */
metabase.legacy_mbql.util.dispatch_by_clause_name_or_class = (function metabase$legacy_mbql$util$dispatch_by_clause_name_or_class(var_args){
var G__76223 = arguments.length;
switch (G__76223) {
case 1:
return metabase.legacy_mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.legacy_mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.legacy_mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$1 = (function (x){
var clause_type = (function metabase$legacy_mbql$util$clause_type(x__$1){
if(metabase.legacy_mbql.util.mbql_clause_QMARK_(x__$1)){
return cljs.core.first(x__$1);
} else {
return null;
}
});
var mlv2_lib_type = (function metabase$legacy_mbql$util$mlv2_lib_type(x__$1){
if(cljs.core.map_QMARK_(x__$1)){
return new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(x__$1);
} else {
return null;
}
});
var model_type = (function metabase$legacy_mbql$util$model_type(_x){
return null;
});
var or__5002__auto__ = clause_type(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = mlv2_lib_type(x);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = model_type(x);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return cljs.core.type(x);
}
}
}
}));

(metabase.legacy_mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$2 = (function (x,_){
return metabase.legacy_mbql.util.dispatch_by_clause_name_or_class.cljs$core$IFn$_invoke$arity$1(x);
}));

(metabase.legacy_mbql.util.dispatch_by_clause_name_or_class.cljs$lang$maxFixedArity = 2);

/**
 * Inputs: [inner-query expression-name :- [:or :keyword :metabase.lib.schema.common/non-blank-string]]
 *   Return: :metabase.legacy-mbql.schema/FieldOrExpressionDef
 *        
 * 
 *   Return the expression referenced by a given `expression-name`.
 */
metabase.legacy_mbql.util.expression_with_name = (function metabase$legacy_mbql$util$expression_with_name(inner_query,expression_name){
var allowed_names = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.util.qualified_name(expression_name),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(expression_name)], null);
var G__76227 = inner_query;
var map__76228 = G__76227;
var map__76228__$1 = cljs.core.__destructure_map(map__76228);
var expressions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76228__$1,new cljs.core.Keyword(null,"expressions","expressions",255689909));
var source_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76228__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var found = cljs.core.PersistentHashSet.EMPTY;
var G__76227__$1 = G__76227;
var found__$1 = found;
while(true){
var map__76232 = G__76227__$1;
var map__76232__$1 = cljs.core.__destructure_map(map__76232);
var expressions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76232__$1,new cljs.core.Keyword(null,"expressions","expressions",255689909));
var source_query__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76232__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var found__$2 = found__$1;
var or__5002__auto__ = cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,expressions__$1),allowed_names);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var found__$3 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(found__$2,cljs.core.keys(expressions__$1));
if(cljs.core.truth_(source_query__$1)){
var G__76433 = source_query__$1;
var G__76434 = found__$3;
G__76227__$1 = G__76433;
found__$1 = G__76434;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No expression named ''{0}''",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.util.qualified_name(expression_name)], 0)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid-query","invalid-query",-1009703371),new cljs.core.Keyword(null,"expression-name","expression-name",-1798450709),expression_name,new cljs.core.Keyword(null,"tried","tried",-1728444308),allowed_names,new cljs.core.Keyword(null,"found","found",-584700170),found__$3], null));
}
}
break;
}
});
/**
 * Inputs: ([query index]
 *         [query :- mbql.s/Query index :- :metabase.lib.schema.common/int-greater-than-or-equal-to-zero nesting-level :- :metabase.lib.schema.common/int-greater-than-or-equal-to-zero])
 *   Return: :metabase.legacy-mbql.schema/Aggregation
 *        
 * 
 *   Fetch the aggregation at index. This is intended to power aggregate field references (e.g. [:aggregation 0]).
 * This also handles nested queries, which could be potentially ambiguous if multiple levels had aggregations. To
 * support nested queries, you'll need to keep tract of how many `:source-query`s deep you've traveled; pass in this
 * number to as optional arg `nesting-level` to make sure you reference aggregations at the right level of nesting.
 */
metabase.legacy_mbql.util.aggregation_at_index = (function() {
var metabase$legacy_mbql$util$aggregation_at_index = null;
var metabase$legacy_mbql$util$aggregation_at_index__2 = (function (query,index){
return (metabase.legacy_mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$3 ? metabase.legacy_mbql.util.aggregation_at_index.cljs$core$IFn$_invoke$arity$3(query,index,(0)) : metabase.legacy_mbql.util.aggregation_at_index.call(null,query,index,(0)));
});
var metabase$legacy_mbql$util$aggregation_at_index__3 = (function (query,index,nesting_level){
while(true){
if((nesting_level === (0))){
var or__5002__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696)], null)),index);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No aggregation at index: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null));
}
} else {
var G__76436 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"source-query","source-query",198004422)], null))], null);
var G__76437 = index;
var G__76438 = (nesting_level - (1));
query = G__76436;
index = G__76437;
nesting_level = G__76438;
continue;
}
break;
}
});
metabase$legacy_mbql$util$aggregation_at_index = function(query,index,nesting_level){
switch(arguments.length){
case 2:
return metabase$legacy_mbql$util$aggregation_at_index__2.call(this,query,index);
case 3:
return metabase$legacy_mbql$util$aggregation_at_index__3.call(this,query,index,nesting_level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$legacy_mbql$util$aggregation_at_index.cljs$core$IFn$_invoke$arity$2 = metabase$legacy_mbql$util$aggregation_at_index__2;
metabase$legacy_mbql$util$aggregation_at_index.cljs$core$IFn$_invoke$arity$3 = metabase$legacy_mbql$util$aggregation_at_index__3;
return metabase$legacy_mbql$util$aggregation_at_index;
})()
;
/**
 * Return a function that can be used to uniquify string names. Function maintains an internal counter that will suffix
 *   any names passed to it as needed so all results will be unique.
 * 
 *  (let [unique-name (unique-name-generator)]
 *    [(unique-name "A")
 *     (unique-name "B")
 *     (unique-name "A")])
 *  ;; -> ["A" "B" "A_2"]
 * 
 *   By default, unique aliases are generated for each unique `[id original-name]` key pair. By default, a unique `id` is
 *   generated for every call, meaning repeated calls to [[unique-name-generator]] with the same `original-name` will
 *   return different unique aliases. If idempotence is desired, the function returned by the generator also has a 2
 *   airity version with the signature
 * 
 *  (unique-name-fn id original-name)
 * 
 *   for example:
 * 
 *  (let [unique-name (unique-name-generator)]
 *    [(unique-name :x "A")
 *     (unique-name :x "B")
 *     (unique-name :x "A")
 *     (unique-name :y "A")])
 *  ;; -> ["A" "B" "A" "A_2"]
 * 
 *   Finally, [[unique-name-generator]] accepts the following options to further customize behavior:
 * 
 *   ### `:name-key-fn`
 * 
 *   Generated aliases are unique by the value of `[id (name-key-fn original-name)]`; the default is `identity`, so by
 *   default aliases are unique by `[id name-key-fn]`. Specify something custom here if you want to make the unique
 *   aliases unique by some other value, for example to make them unique without regards to case:
 * 
 *  (let [f (unique-name-generator :name-key-fn str/lower-case)]
 *    [(f "x")
 *     (f "X")
 *     (f "X")])
 *  ;; -> ["x" "X_2" "X_3"]
 * 
 *   This is useful for databases that treat column aliases as case-insensitive (see #19618 for some examples of this).
 * 
 *   ### `:unique-alias-fn`
 * 
 *   The function used to generate a potentially-unique alias given an original alias and unique suffix with the signature
 * 
 *  (unique-alias-fn original suffix)
 * 
 *   By default, combines them like `original_suffix`, but you can supply a custom function if you need to change this
 *   behavior:
 * 
 *  (let [f (unique-name-generator :unique-alias-fn (fn [x y] (format "%s~~%s" y x)))]
 *    [(f "x")
 *     (f "x")])
 *   ;; -> ["x" "2~~x"]
 * 
 *   This is useful if you need to constrain the generated suffix in some way, for example by limiting its length or
 *   escaping characters disallowed in a column alias.
 * 
 *   Values generated by this function are recursively checked for uniqueness, and will keep trying values a unique value
 *   is generated; for this reason the function *must* return a unique value for every unique input. Use caution when
 *   limiting the length of the identifier generated (consider appending a hash in cases like these).
 */
metabase.legacy_mbql.util.unique_name_generator = (function metabase$legacy_mbql$util$unique_name_generator(var_args){
var args__5732__auto__ = [];
var len__5726__auto___76439 = arguments.length;
var i__5727__auto___76440 = (0);
while(true){
if((i__5727__auto___76440 < len__5726__auto___76439)){
args__5732__auto__.push((arguments[i__5727__auto___76440]));

var G__76441 = (i__5727__auto___76440 + (1));
i__5727__auto___76440 = G__76441;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return metabase.legacy_mbql.util.unique_name_generator.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(metabase.legacy_mbql.util.unique_name_generator.cljs$core$IFn$_invoke$arity$variadic = (function (p__76235){
var map__76236 = p__76235;
var map__76236__$1 = cljs.core.__destructure_map(map__76236);
var name_key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76236__$1,new cljs.core.Keyword(null,"name-key-fn","name-key-fn",-1634839199),cljs.core.identity);
var unique_alias_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76236__$1,new cljs.core.Keyword(null,"unique-alias-fn","unique-alias-fn",32555420),(function (original,suffix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(original),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
}));
var id_PLUS_original__GT_unique = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var original__GT_count = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function() {
var metabase$legacy_mbql$util$generate_name = null;
var metabase$legacy_mbql$util$generate_name__1 = (function (an_alias){
return metabase$legacy_mbql$util$generate_name.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),an_alias);
});
var metabase$legacy_mbql$util$generate_name__2 = (function (id,original){
while(true){
var name_key = (name_key_fn.cljs$core$IFn$_invoke$arity$1 ? name_key_fn.cljs$core$IFn$_invoke$arity$1(original) : name_key_fn.call(null,original));
var or__5002__auto__ = (function (){var G__76238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,name_key], null);
var fexpr__76237 = cljs.core.deref(id_PLUS_original__GT_unique);
return (fexpr__76237.cljs$core$IFn$_invoke$arity$1 ? fexpr__76237.cljs$core$IFn$_invoke$arity$1(G__76238) : fexpr__76237.call(null,G__76238));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var total_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(original__GT_count,cljs.core.update,name_key,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0))),name_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_count,(1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(id_PLUS_original__GT_unique,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,name_key], null),original);

return original;
} else {
var candidate = (function (){var G__76239 = original;
var G__76240 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_count);
return (unique_alias_fn.cljs$core$IFn$_invoke$arity$2 ? unique_alias_fn.cljs$core$IFn$_invoke$arity$2(G__76239,G__76240) : unique_alias_fn.call(null,G__76239,G__76240));
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(candidate,original)){
} else {
throw (new Error(["Assert failed: ",["unique-alias-fn must return a different string than its input. Input: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([candidate], 0))].join(''),"\n","(not= candidate original)"].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(id_PLUS_original__GT_unique,cljs.core.assoc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,name_key], null),candidate);

var G__76442 = id;
var G__76443 = candidate;
id = G__76442;
original = G__76443;
continue;
}
}
break;
}
});
metabase$legacy_mbql$util$generate_name = function(id,original){
switch(arguments.length){
case 1:
return metabase$legacy_mbql$util$generate_name__1.call(this,id);
case 2:
return metabase$legacy_mbql$util$generate_name__2.call(this,id,original);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$legacy_mbql$util$generate_name.cljs$core$IFn$_invoke$arity$1 = metabase$legacy_mbql$util$generate_name__1;
metabase$legacy_mbql$util$generate_name.cljs$core$IFn$_invoke$arity$2 = metabase$legacy_mbql$util$generate_name__2;
return metabase$legacy_mbql$util$generate_name;
})()
}));

(metabase.legacy_mbql.util.unique_name_generator.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metabase.legacy_mbql.util.unique_name_generator.cljs$lang$applyTo = (function (seq76234){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76234));
}));

/**
 * Inputs: [names :- [:sequential :string]]
 *   Return: [:and [:sequential :string] [:fn {:error/message "sequence of unique strings"} distinct?]]
 *        
 * 
 *   Make the names in a sequence of string names unique by adding suffixes such as `_2`.
 * 
 *   (uniquify-names ["count" "sum" "count" "count_2"])
 *   ;; -> ["count" "sum" "count_2" "count_2_2"]
 */
metabase.legacy_mbql.util.uniquify_names = (function metabase$legacy_mbql$util$uniquify_names(names){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.util.unique_name_generator(),names);
});
metabase.legacy_mbql.util.NamedAggregation = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),metabase.legacy_mbql.schema.aggregation_options,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"`:aggregation-options` with a `:name`"], null),(function (p1__76241_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__76241_SHARP_,(2)));
})], null)], null);
metabase.legacy_mbql.util.UniquelyNamedAggregations = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),metabase.legacy_mbql.util.NamedAggregation], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"sequence of named aggregations with unique names"], null),(function (clauses){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,(function (){var iter__5480__auto__ = (function metabase$legacy_mbql$util$iter__76242(s__76243){
return (new cljs.core.LazySeq(null,(function (){
var s__76243__$1 = s__76243;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76243__$1);
if(temp__5804__auto__){
var s__76243__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76243__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76243__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76245 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76244 = (0);
while(true){
if((i__76244 < size__5479__auto__)){
var vec__76246 = cljs.core._nth(c__5478__auto__,i__76244);
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76246,(0),null);
var _wrapped = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76246,(1),null);
var map__76249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76246,(2),null);
var map__76249__$1 = cljs.core.__destructure_map(map__76249);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76249__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__76245,ag_name);

var G__76444 = (i__76244 + (1));
i__76244 = G__76444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76245),metabase$legacy_mbql$util$iter__76242(cljs.core.chunk_rest(s__76243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76245),null);
}
} else {
var vec__76250 = cljs.core.first(s__76243__$2);
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76250,(0),null);
var _wrapped = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76250,(1),null);
var map__76253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76250,(2),null);
var map__76253__$1 = cljs.core.__destructure_map(map__76253);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76253__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(ag_name,metabase$legacy_mbql$util$iter__76242(cljs.core.rest(s__76243__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(clauses);
})());
})], null)], null);
/**
 * Inputs: [named-aggregations :- [:sequential NamedAggregation]]
 *   Return: UniquelyNamedAggregations
 *        
 * 
 *   Make the names of a sequence of named aggregations unique by adding suffixes such as `_2`.
 */
metabase.legacy_mbql.util.uniquify_named_aggregations = (function metabase$legacy_mbql$util$uniquify_named_aggregations(named_aggregations){
var unique_names = metabase.legacy_mbql.util.uniquify_names((function (){var iter__5480__auto__ = (function metabase$legacy_mbql$util$uniquify_named_aggregations_$_iter__76254(s__76255){
return (new cljs.core.LazySeq(null,(function (){
var s__76255__$1 = s__76255;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76255__$1);
if(temp__5804__auto__){
var s__76255__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76255__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76255__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76257 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76256 = (0);
while(true){
if((i__76256 < size__5479__auto__)){
var vec__76258 = cljs.core._nth(c__5478__auto__,i__76256);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76258,(0),null);
var _wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76258,(1),null);
var map__76261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76258,(2),null);
var map__76261__$1 = cljs.core.__destructure_map(map__76261);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76261__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append(b__76257,ag_name);

var G__76446 = (i__76256 + (1));
i__76256 = G__76446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76257),metabase$legacy_mbql$util$uniquify_named_aggregations_$_iter__76254(cljs.core.chunk_rest(s__76255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76257),null);
}
} else {
var vec__76262 = cljs.core.first(s__76255__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76262,(0),null);
var _wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76262,(1),null);
var map__76265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76262,(2),null);
var map__76265__$1 = cljs.core.__destructure_map(map__76265);
var ag_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76265__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons(ag_name,metabase$legacy_mbql$util$uniquify_named_aggregations_$_iter__76254(cljs.core.rest(s__76255__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(named_aggregations);
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__76266,unique_name){
var vec__76267 = p__76266;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76267,(0),null);
var wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76267,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76267,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),wrapped_ag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"name","name",1843675177),unique_name)], null);
}),named_aggregations,unique_names);
});
/**
 * Inputs: [aggregation->name-fn :- fn? aggregations :- [:sequential :metabase.legacy-mbql.schema/Aggregation]]
 *   Return: [:sequential NamedAggregation]
 *        
 * 
 *   Wrap every aggregation clause in an `:aggregation-options` clause, using the name returned
 *   by `(aggregation->name-fn ag-clause)` as names for any clauses that do not already have a `:name` in
 *   `:aggregation-options`.
 * 
 *  (pre-alias-aggregations annotate/aggregation-name
 *   [[:count] [:count] [:aggregation-options [:sum [:field 1 nil] {:name "Sum-41"}]])
 *  ;; -> [[:aggregation-options [:count] {:name "count"}]
 *         [:aggregation-options [:count] {:name "count"}]
 *         [:aggregation-options [:sum [:field 1 nil]] {:name "Sum-41"}]]
 * 
 *   Most often, `aggregation->name-fn` will be something like `annotate/aggregation-name`, but for purposes of keeping
 *   the `metabase.legacy-mbql` module seperate from the `metabase.query-processor` code we'll let you pass that in yourself.
 */
metabase.legacy_mbql.util.pre_alias_aggregations = (function metabase$legacy_mbql$util$pre_alias_aggregations(aggregation__GT_name_fn,aggregations){
return (function metabase$legacy_mbql$util$pre_alias_aggregations_$_replace_76270(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__76276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76276,new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550))){
try{var _AMPERSAND_match_2__76278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_2__76278))){
return _AMPERSAND_match;
} else {
throw cljs.core.match.backtrack;

}
}catch (e76287){if((e76287 instanceof Error)){
var e__46214__auto__ = e76287;
if((e__46214__auto__ === cljs.core.match.backtrack)){
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var wrapped_ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),wrapped_ag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"name","name",1843675177),(aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1 ? aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1(wrapped_ag) : aggregation__GT_name_fn.call(null,wrapped_ag)))], null);
} else {
throw e__46214__auto__;
}
} else {
throw e76287;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76286){if((e76286 instanceof Error)){
var e__46214__auto__ = e76286;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76286;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76282){if((e76282 instanceof Error)){
var e__46214__auto__ = e76282;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__76279 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__76279)) && ((cljs.core.count(_AMPERSAND_match_left__76279) === (1))))){
try{var _AMPERSAND_match_left__76279_0__76281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76279,(0));
if((_AMPERSAND_match_left__76279_0__76281 instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),_AMPERSAND_match,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1 ? aggregation__GT_name_fn.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : aggregation__GT_name_fn.call(null,_AMPERSAND_match))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76285){if((e76285 instanceof Error)){
var e__46214__auto____$1 = e76285;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e76285;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76284){if((e76284 instanceof Error)){
var e__46214__auto____$1 = e76284;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e76284;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76283){if((e76283 instanceof Error)){
var e__46214__auto____$1 = e76283;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$util$pre_alias_aggregations_$_replace_76270,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto____$1;
}
} else {
throw e76283;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e76282;

}
}})(cljs.core.PersistentVector.EMPTY,aggregations);
});
/**
 * Inputs: [aggregation->name-fn :- fn? aggregations :- [:sequential :metabase.legacy-mbql.schema/Aggregation]]
 *   Return: UniquelyNamedAggregations
 *        
 * 
 *   Wrap every aggregation clause in a `:named` clause with a unique name. Combines `pre-alias-aggregations` with
 *   `uniquify-named-aggregations`.
 */
metabase.legacy_mbql.util.pre_alias_and_uniquify_aggregations = (function metabase$legacy_mbql$util$pre_alias_and_uniquify_aggregations(aggregation__GT_name_fn,aggregations){
return metabase.legacy_mbql.util.uniquify_named_aggregations(metabase.legacy_mbql.util.pre_alias_aggregations(aggregation__GT_name_fn,aggregations));
});
metabase.legacy_mbql.util.safe_min = (function metabase$legacy_mbql$util$safe_min(var_args){
var args__5732__auto__ = [];
var len__5726__auto___76448 = arguments.length;
var i__5727__auto___76449 = (0);
while(true){
if((i__5727__auto___76449 < len__5726__auto___76448)){
args__5732__auto__.push((arguments[i__5727__auto___76449]));

var G__76450 = (i__5727__auto___76449 + (1));
i__5727__auto___76449 = G__76450;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return metabase.legacy_mbql.util.safe_min.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(metabase.legacy_mbql.util.safe_min.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,n){
if(cljs.core.truth_(acc)){
var x__5090__auto__ = acc;
var y__5091__auto__ = n;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
} else {
return n;
}
})),null,args);
}));

(metabase.legacy_mbql.util.safe_min.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metabase.legacy_mbql.util.safe_min.cljs$lang$applyTo = (function (seq76288){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq76288));
}));

/**
 * Calculate the absolute maximum number of results that should be returned by this query (MBQL or native), useful for
 *   doing the equivalent of
 * 
 *  java.sql.Statement statement = ...;
 *  statement.setMaxRows(<max-rows-limit>).
 * 
 *   to ensure the DB cursor or equivalent doesn't fetch more rows than will be consumed.
 * 
 *   This is calculated as follows:
 * 
 *   *  If query is `MBQL` and has a `:limit` or `:page` clause, returns appropriate number
 *   *  If query has `:constraints` with `:max-results-bare-rows` or `:max-results`, returns the appropriate number
 *   *  `:max-results-bare-rows` is returned if set and Query does not have any aggregations
 *   *  `:max-results` is returned otherwise
 *   *  If none of the above are set, returns `nil`. In this case, you should use something like the Metabase QP's
 *   `max-rows-limit`
 */
metabase.legacy_mbql.util.query__GT_max_rows_limit = (function metabase$legacy_mbql$util$query__GT_max_rows_limit(p__76289){
var map__76290 = p__76289;
var map__76290__$1 = cljs.core.__destructure_map(map__76290);
var map__76291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76290__$1,new cljs.core.Keyword(null,"constraints","constraints",422775616));
var map__76291__$1 = cljs.core.__destructure_map(map__76291);
var max_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76291__$1,new cljs.core.Keyword(null,"max-results","max-results",-32858165));
var max_results_bare_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76291__$1,new cljs.core.Keyword(null,"max-results-bare-rows","max-results-bare-rows",2096475889));
var map__76292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76290__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__76292__$1 = cljs.core.__destructure_map(map__76292);
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76292__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var aggregations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76292__$1,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696));
var map__76293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76292__$1,new cljs.core.Keyword(null,"page","page",849072397));
var map__76293__$1 = cljs.core.__destructure_map(map__76293);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76293__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var query_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76290__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var mbql_limit = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query_type,new cljs.core.Keyword(null,"query","query",-1288509510)))?metabase.legacy_mbql.util.safe_min.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([items,limit], 0)):null);
var constraints_limit = (function (){var or__5002__auto__ = (cljs.core.truth_(aggregations)?null:max_results_bare_rows);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return max_results;
}
})();
return metabase.legacy_mbql.util.safe_min.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mbql_limit,constraints_limit], 0));
});
metabase.legacy_mbql.util.remove_empty = (function metabase$legacy_mbql$util$remove_empty(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$legacy_mbql$util$remove_empty_$_iter__76295(s__76296){
return (new cljs.core.LazySeq(null,(function (){
var s__76296__$1 = s__76296;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76296__$1);
if(temp__5804__auto__){
var s__76296__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76296__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76296__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76298 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76297 = (0);
while(true){
if((i__76297 < size__5479__auto__)){
var vec__76299 = cljs.core._nth(c__5478__auto__,i__76297);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76299,(1),null);
var v__$1 = (metabase.legacy_mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1(v) : metabase.legacy_mbql.util.remove_empty.call(null,v));
if((!((v__$1 == null)))){
cljs.core.chunk_append(b__76298,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null));

var G__76454 = (i__76297 + (1));
i__76297 = G__76454;
continue;
} else {
var G__76455 = (i__76297 + (1));
i__76297 = G__76455;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76298),metabase$legacy_mbql$util$remove_empty_$_iter__76295(cljs.core.chunk_rest(s__76296__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76298),null);
}
} else {
var vec__76302 = cljs.core.first(s__76296__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76302,(1),null);
var v__$1 = (metabase.legacy_mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.util.remove_empty.cljs$core$IFn$_invoke$arity$1(v) : metabase.legacy_mbql.util.remove_empty.call(null,v));
if((!((v__$1 == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null),metabase$legacy_mbql$util$remove_empty_$_iter__76295(cljs.core.rest(s__76296__$2)));
} else {
var G__76457 = cljs.core.rest(s__76296__$2);
s__76296__$1 = G__76457;
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
return iter__5480__auto__(x);
})()));
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.util.remove_empty,x))));
} else {
return x;

}
}
});
/**
 * Inputs: [[clause-type id-or-name opts] :- mbql.s/Reference f & args]
 *   Return: mbql.s/Reference
 *        
 * 
 *   Like [[clojure.core/update]], but for the options in a `:field`, `:expression`, or `:aggregation` clause.
 * @param {...*} var_args
 */
metabase.legacy_mbql.util.update_field_options = (function() { 
var metabase$legacy_mbql$util$update_field_options__delegate = function (p__76306,f,args){
var vec__76307 = p__76306;
var clause_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76307,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76307,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76307,(2),null);
var opts__$1 = cljs.core.not_empty(metabase.legacy_mbql.util.remove_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,opts,args)));
if(cljs.core.truth_(opts__$1)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_type,id_or_name,opts__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clause_type,new cljs.core.Keyword(null,"field","field",-1302436500))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_type,id_or_name,null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_type,id_or_name], null);

}
}
};
var metabase$legacy_mbql$util$update_field_options = function (p__76306,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__76458__i = 0, G__76458__a = new Array(arguments.length -  2);
while (G__76458__i < G__76458__a.length) {G__76458__a[G__76458__i] = arguments[G__76458__i + 2]; ++G__76458__i;}
  args = new cljs.core.IndexedSeq(G__76458__a,0,null);
} 
return metabase$legacy_mbql$util$update_field_options__delegate.call(this,p__76306,f,args);};
metabase$legacy_mbql$util$update_field_options.cljs$lang$maxFixedArity = 2;
metabase$legacy_mbql$util$update_field_options.cljs$lang$applyTo = (function (arglist__76459){
var p__76306 = cljs.core.first(arglist__76459);
arglist__76459 = cljs.core.next(arglist__76459);
var f = cljs.core.first(arglist__76459);
var args = cljs.core.rest(arglist__76459);
return metabase$legacy_mbql$util$update_field_options__delegate(p__76306,f,args);
});
metabase$legacy_mbql$util$update_field_options.cljs$core$IFn$_invoke$arity$variadic = metabase$legacy_mbql$util$update_field_options__delegate;
return metabase$legacy_mbql$util$update_field_options;
})()
;
/**
 * Like [[clojure.core/assoc]], but for the options in a `:field`, `:expression`, or `:aggregation` clause.
 */
metabase.legacy_mbql.util.assoc_field_options = (function metabase$legacy_mbql$util$assoc_field_options(var_args){
var args__5732__auto__ = [];
var len__5726__auto___76460 = arguments.length;
var i__5727__auto___76461 = (0);
while(true){
if((i__5727__auto___76461 < len__5726__auto___76460)){
args__5732__auto__.push((arguments[i__5727__auto___76461]));

var G__76462 = (i__5727__auto___76461 + (1));
i__5727__auto___76461 = G__76462;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.legacy_mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.legacy_mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic = (function (clause,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(metabase.legacy_mbql.util.update_field_options,clause,cljs.core.assoc,kvs);
}));

(metabase.legacy_mbql.util.assoc_field_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.legacy_mbql.util.assoc_field_options.cljs$lang$applyTo = (function (seq76310){
var G__76311 = cljs.core.first(seq76310);
var seq76310__$1 = cljs.core.next(seq76310);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76311,seq76310__$1);
}));

/**
 * Set the `:temporal-unit` of a `:field` clause to `unit`.
 */
metabase.legacy_mbql.util.with_temporal_unit = (function metabase$legacy_mbql$util$with_temporal_unit(p__76312,unit){
var vec__76313 = p__76312;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76313,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76313,(1),null);
var map__76316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76313,(2),null);
var map__76316__$1 = cljs.core.__destructure_map(map__76316);
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76316__$1,new cljs.core.Keyword(null,"base-type","base-type",1167971299));
var clause = vec__76313;
if(cljs.core.truth_(metabase.legacy_mbql.util.is_clause_QMARK_(new cljs.core.Keyword(null,"field","field",-1302436500),clause))){
} else {
throw (new Error("Assert failed: (is-clause? :field clause)"));
}

if(((cljs.core.not(base_type)) || (metabase.legacy_mbql.schema.valid_temporal_unit_for_base_type_QMARK_.cljs$core$IFn$_invoke$arity$2(base_type,unit)))){
return metabase.legacy_mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic(clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),unit], 0));
} else {
var level__73199__auto___76464 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73200__auto___76465 = "metabase.legacy-mbql.util";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73200__auto___76465,level__73199__auto___76464))){
var x__73201__auto___76466 = "%s is not a valid temporal unit for %s; not adding to clause %s";
if((x__73201__auto___76466 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___76465,level__73199__auto___76464,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(unit,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_type,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))], 0)),x__73201__auto___76466);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___76465,level__73199__auto___76464,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__73201__auto___76466,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([unit,base_type,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0))], 0)),null);
}
} else {
}

return clause;
}
});
/**
 * Update a `:field`, `:expression` reference, or `:aggregation` reference clause by removing all namespaced keys in the
 *   options map. This is mainly for clause equality comparison purposes -- in current usage namespaced keys are used by
 *   individual pieces of middleware or driver implementations for tracking little bits of information that should not be
 *   considered relevant when comparing clauses for equality.
 */
metabase.legacy_mbql.util.remove_namespaced_options = (function metabase$legacy_mbql$util$remove_namespaced_options(field_or_ref){
return metabase.legacy_mbql.util.update_field_options(field_or_ref,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__76317){
var vec__76318 = p__76317;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76318,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76318,(1),null);
return cljs.core.qualified_keyword_QMARK_(k);
}))));
});
/**
 * Find all the `:field` references with integer IDs in `coll`, which can be a full MBQL query, a snippet of MBQL, or a
 *   sequence of those things; return a set of Field IDs. Includes Fields referenced indirectly via `:source-field`.
 *   Returns `nil` if no IDs are found.
 */
metabase.legacy_mbql.util.referenced_field_ids = (function metabase$legacy_mbql$util$referenced_field_ids(coll){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cat,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)),cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$legacy_mbql$util$referenced_field_ids_$_match_76321(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__76323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76323,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_1__76324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.integer_QMARK_(_AMPERSAND_match_1__76324)){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"source-field","source-field",933829534).cljs$core$IFn$_invoke$arity$1(opts)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76328){if((e76328 instanceof Error)){
var e__46214__auto__ = e76328;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76328;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76327){if((e76327 instanceof Error)){
var e__46214__auto__ = e76327;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76327;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76326){if((e76326 instanceof Error)){
var e__46214__auto__ = e76326;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$legacy_mbql$util$referenced_field_ids_$_match_76321,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e76326;

}
}})(cljs.core.PersistentVector.EMPTY,coll)))));
});
/**
 * Find the forms matching pred, returns a list of tuples of location (as used in get-in) and the match.
 */
metabase.legacy_mbql.util.matching_locations = (function metabase$legacy_mbql$util$matching_locations(form,pred){
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,form], null)], null);
var matches = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5802__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__76337 = temp__5802__auto__;
var loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76337,(0),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76337,(1),null);
var top = vec__76337;
var stack__$1 = cljs.core.pop(stack);
var onto_stack = ((function (stack,matches,stack__$1,vec__76337,loc,form__$1,top,temp__5802__auto__){
return (function (p1__76329_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(stack__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (stack,matches,stack__$1,vec__76337,loc,form__$1,top,temp__5802__auto__){
return (function (p__76340){
var vec__76341 = p__76340;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76341,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76341,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loc,k),v], null);
});})(stack,matches,stack__$1,vec__76337,loc,form__$1,top,temp__5802__auto__))
),p1__76329_SHARP_);
});})(stack,matches,stack__$1,vec__76337,loc,form__$1,top,temp__5802__auto__))
;
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(form__$1) : pred.call(null,form__$1)))){
var G__76473 = stack__$1;
var G__76474 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matches,top);
stack = G__76473;
matches = G__76474;
continue;
} else {
if(cljs.core.map_QMARK_(form__$1)){
var G__76475 = onto_stack(form__$1);
var G__76476 = matches;
stack = G__76475;
matches = G__76476;
continue;
} else {
if(cljs.core.sequential_QMARK_(form__$1)){
var G__76477 = onto_stack(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,form__$1));
var G__76478 = matches;
stack = G__76477;
matches = G__76478;
continue;
} else {
var G__76479 = stack__$1;
var G__76480 = matches;
stack = G__76479;
matches = G__76480;
continue;

}
}
}
} else {
return matches;
}
break;
}
});
/**
 * Wrap a raw Field ID in a `:field` clause if needed.
 */
metabase.legacy_mbql.util.wrap_field_id_if_needed = (function metabase$legacy_mbql$util$wrap_field_id_if_needed(field_id_or_form){
if(metabase.legacy_mbql.util.mbql_clause_QMARK_(field_id_or_form)){
return field_id_or_form;
} else {
if(cljs.core.integer_QMARK_(field_id_or_form)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),field_id_or_form,null], null);
} else {
return field_id_or_form;

}
}
});
/**
 * Inputs: [field-form]
 *   Return: [:maybe mbql.s/field]
 *        
 * 
 *   Unwrap something that contains a `:field` clause, such as a template tag.
 *   Also handles unwrapped integers for legacy compatibility.
 * 
 *  (unwrap-field-clause [:field 100 nil]) ; -> [:field 100 nil]
 */
metabase.legacy_mbql.util.unwrap_field_clause = (function metabase$legacy_mbql$util$unwrap_field_clause(field_form){
if(cljs.core.integer_QMARK_(field_form)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),field_form,null], null);
} else {
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$legacy_mbql$util$unwrap_field_clause_$_match_76344(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__76347 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__76347)) && ((cljs.core.count(_AMPERSAND_match_left__76347) === (1))))){
try{var _AMPERSAND_match_left__76347_0__76349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76347,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__76347_0__76349,new cljs.core.Keyword(null,"field","field",-1302436500))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76352){if((e76352 instanceof Error)){
var e__46214__auto__ = e76352;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76352;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76351){if((e76351 instanceof Error)){
var e__46214__auto__ = e76351;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76351;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76350){if((e76350 instanceof Error)){
var e__46214__auto__ = e76350;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$legacy_mbql$util$unwrap_field_clause_$_match_76344,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e76350;

}
}})(cljs.core.PersistentVector.EMPTY,field_form))));
}
});
/**
 * Inputs: [field-or-ref-form]
 *   Return: mbql.s/Field
 *        
 * 
 *   Unwrap a `:field` clause or expression clause, such as a template tag. Also handles unwrapped integers for
 *   legacy compatibility.
 */
metabase.legacy_mbql.util.unwrap_field_or_expression_clause = (function metabase$legacy_mbql$util$unwrap_field_or_expression_clause(field_or_ref_form){
var or__5002__auto__ = metabase.legacy_mbql.util.unwrap_field_clause(field_or_ref_form);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$legacy_mbql$util$unwrap_field_or_expression_clause_$_match_76353(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__76356 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__76356)) && ((cljs.core.count(_AMPERSAND_match_left__76356) === (1))))){
try{var _AMPERSAND_match_left__76356_0__76358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76356,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__76356_0__76358,new cljs.core.Keyword(null,"expression","expression",202311876))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76361){if((e76361 instanceof Error)){
var e__46214__auto__ = e76361;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76361;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76360){if((e76360 instanceof Error)){
var e__46214__auto__ = e76360;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76360;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76359){if((e76359 instanceof Error)){
var e__46214__auto__ = e76359;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$legacy_mbql$util$unwrap_field_or_expression_clause_$_match_76353,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e76359;

}
}})(cljs.core.PersistentVector.EMPTY,field_or_ref_form))));
}
});

//# sourceMappingURL=metabase.legacy_mbql.util.js.map
