var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./inflections.core.js");
require("./medley.core.js");
require("./metabase.lib.card.js");
require("./metabase.lib.common.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.filter.operator.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.join.util.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.query.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.filter.js");
require("./metabase.lib.schema.join.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.util.js");
require("./metabase.lib.util.match.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.join.js");

goog.provide('metabase.lib.join');
metabase.lib.join.join_QMARK_ = (function metabase$lib$join$join_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.dispatch.dispatch_value(x),new cljs.core.Keyword("mbql","join","mbql/join",-709512370));
});
metabase.lib.join.Joinable = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword("metabase.lib.schema.metadata","table","metabase.lib.schema.metadata/table",-2128230385),new cljs.core.Keyword("metabase.lib.schema.metadata","card","metabase.lib.schema.metadata/card",147726027)], null);
metabase.lib.join.JoinOrJoinable = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.join","join","metabase.lib.schema.join/join",1110197236)], null),metabase.lib.join.Joinable], null);
/**
 * Impl for [[with-join-alias]] for a join: recursively update the `:join-alias` for the `:field` refs inside `:fields`
 *   as needed.
 */
metabase.lib.join.with_join_alias_update_join_fields = (function metabase$lib$join$with_join_alias_update_join_fields(join,new_alias){
var G__78485 = join;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(join))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__78485,new cljs.core.Keyword(null,"fields","fields",-1932066230),(function (fields){
if((!(cljs.core.sequential_QMARK_(fields)))){
return fields;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (field_ref){
return (metabase.lib.join.with_join_alias.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.join.with_join_alias.cljs$core$IFn$_invoke$arity$2(field_ref,new_alias) : metabase.lib.join.with_join_alias.call(null,field_ref,new_alias));
}),fields);
}
}));
} else {
return G__78485;
}
});
/**
 * Inputs: [condition :- [:maybe :metabase.lib.schema.expression/boolean]]
 *   Return: :boolean
 *        
 * 
 *   Whether this join condition is a binary condition with two `:field` references (a LHS and a RHS), as you'd produce
 *   in the frontend using functions like [[join-condition-operators]], [[join-condition-lhs-columns]],
 *   and [[join-condition-rhs-columns]].
 */
metabase.lib.join.standard_join_condition_QMARK_ = (function metabase$lib$join$standard_join_condition_QMARK_(condition){
if(cljs.core.truth_(condition)){
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$join$standard_join_condition_QMARK__$_match_78487(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__78501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if((_AMPERSAND_match_0__78501 instanceof cljs.core.Keyword)){
try{var _AMPERSAND_match_2__78503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_2__78503)) && ((cljs.core.count(_AMPERSAND_match_2__78503) === 3)))){
try{var _AMPERSAND_match_2__78503_0__78506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78503,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__78503_0__78506,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_3__78504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_3__78504)) && ((cljs.core.count(_AMPERSAND_match_3__78504) === 3)))){
try{var _AMPERSAND_match_3__78504_0__78513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_3__78504,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_3__78504_0__78513,new cljs.core.Keyword(null,"field","field",-1302436500))){
var _rhs_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_3__78504,(1));
var _rhs_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_3__78504,(2));
var _lhs_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78503,(1));
var _lhs_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78503,(2));
var _operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78531){if((e78531 instanceof Error)){
var e__46214__auto__ = e78531;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78531;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78524){if((e78524 instanceof Error)){
var e__46214__auto__ = e78524;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78524;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78521){if((e78521 instanceof Error)){
var e__46214__auto__ = e78521;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78521;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78520){if((e78520 instanceof Error)){
var e__46214__auto__ = e78520;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78520;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78519){if((e78519 instanceof Error)){
var e__46214__auto__ = e78519;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78519;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78516){if((e78516 instanceof Error)){
var e__46214__auto__ = e78516;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null);
} else {
throw e__46214__auto__;
}
} else {
throw e78516;

}
}})(cljs.core.PersistentVector.EMPTY,condition))));
} else {
return null;
}
});
/**
 * If `condition` is a [[standard-join-condition?]], return the LHS.
 */
metabase.lib.join.standard_join_condition_lhs = (function metabase$lib$join$standard_join_condition_lhs(condition){
if(cljs.core.truth_(metabase.lib.join.standard_join_condition_QMARK_(condition))){
var vec__78539 = condition;
var _operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78539,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78539,(1),null);
var lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78539,(2),null);
var _rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78539,(3),null);
return lhs;
} else {
return null;
}
});
/**
 * If `condition` is a [[standard-join-condition?]], return the RHS.
 */
metabase.lib.join.standard_join_condition_rhs = (function metabase$lib$join$standard_join_condition_rhs(condition){
if(cljs.core.truth_(metabase.lib.join.standard_join_condition_QMARK_(condition))){
var vec__78543 = condition;
var _operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78543,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78543,(1),null);
var _lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78543,(2),null);
var rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78543,(3),null);
return rhs;
} else {
return null;
}
});
/**
 * If `condition` is a [[standard-join-condition?]], update the RHS with `f` like
 * 
 *  (apply f rhs args)
 */
metabase.lib.join.standard_join_condition_update_rhs = (function metabase$lib$join$standard_join_condition_update_rhs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___78714 = arguments.length;
var i__5727__auto___78715 = (0);
while(true){
if((i__5727__auto___78715 < len__5726__auto___78714)){
args__5732__auto__.push((arguments[i__5727__auto___78715]));

var G__78716 = (i__5727__auto___78715 + (1));
i__5727__auto___78715 = G__78716;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return metabase.lib.join.standard_join_condition_update_rhs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(metabase.lib.join.standard_join_condition_update_rhs.cljs$core$IFn$_invoke$arity$variadic = (function (condition,f,args){
if(cljs.core.not(metabase.lib.join.standard_join_condition_QMARK_(condition))){
return condition;
} else {
var vec__78549 = condition;
var operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78549,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78549,(1),null);
var lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78549,(2),null);
var rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78549,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [operator,opts,lhs,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,rhs,args)], null);
}
}));

(metabase.lib.join.standard_join_condition_update_rhs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(metabase.lib.join.standard_join_condition_update_rhs.cljs$lang$applyTo = (function (seq78546){
var G__78547 = cljs.core.first(seq78546);
var seq78546__$1 = cljs.core.next(seq78546);
var G__78548 = cljs.core.first(seq78546__$1);
var seq78546__$2 = cljs.core.next(seq78546__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78547,G__78548,seq78546__$2);
}));

/**
 * Inputs: [join :- lib.join.util/PartialJoin old-alias :- [:maybe :metabase.lib.schema.common/non-blank-string] new-alias :- [:maybe :metabase.lib.schema.common/non-blank-string]]
 *   Return: lib.join.util/PartialJoin
 *        
 * 
 *   Impl for [[with-join-alias]] for a join: recursively update the `:join-alias` for inside the `:conditions` of the
 *   join.
 * 
 *   If `old-alias` is specified, uses [[metabase.legacy-mbql.util.match]] to update all the `:field` references using the old
 *   alias.
 * 
 *   If `old-alias` is `nil`, updates the RHS of all 'standard' conditions (binary filter clauses with two `:field` refs as
 *   args, e.g. the kind you'd get if you were using [[join-condition-operators]] and the like to create them). This
 *   currently doesn't handle more complex filter clauses that were created without the 'normal' MLv2 functions used by
 *   the frontend; we can add this in the future if we need it.
 */
metabase.lib.join.with_join_alias_update_join_conditions = (function metabase$lib$join$with_join_alias_update_join_conditions(join,old_alias,new_alias){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"conditions","conditions",-1647236270).cljs$core$IFn$_invoke$arity$1(join))){
return join;
} else {
if(cljs.core.truth_(old_alias)){
return metabase.lib.util.match.impl.update_in_unless_empty(join,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null),(function (x__72089__auto__){
return (function metabase$lib$join$with_join_alias_update_join_conditions_$_replace_78556(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__78563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78563,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_1__78564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if((((!((_AMPERSAND_match_1__78564 == null))))?(((((_AMPERSAND_match_1__78564.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === _AMPERSAND_match_1__78564.cljs$core$ILookup$))))?true:(((!_AMPERSAND_match_1__78564.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_1__78564):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_1__78564))){
try{var _AMPERSAND_match_1__78564_join_alias__78570 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match_1__78564,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__78564_join_alias__78570,old_alias)){
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return (metabase.lib.join.with_join_alias.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.join.with_join_alias.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,new_alias) : metabase.lib.join.with_join_alias.call(null,_AMPERSAND_match,new_alias));
} else {
throw cljs.core.match.backtrack;

}
}catch (e78578){if((e78578 instanceof Error)){
var e__46214__auto__ = e78578;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78578;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78576){if((e78576 instanceof Error)){
var e__46214__auto__ = e78576;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78576;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78575){if((e78575 instanceof Error)){
var e__46214__auto__ = e78575;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78575;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78574){if((e78574 instanceof Error)){
var e__46214__auto__ = e78574;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$lib$join$with_join_alias_update_join_conditions_$_replace_78556,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e78574;

}
}})(cljs.core.PersistentVector.EMPTY,x__72089__auto__);
}));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"conditions","conditions",-1647236270),(function (conditions){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (condition){
return metabase.lib.join.standard_join_condition_update_rhs.cljs$core$IFn$_invoke$arity$variadic(condition,metabase.lib.join.with_join_alias,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_alias], 0));
}),conditions);
}));

}
}
});
/**
 * Impl for [[with-join-alias]] for a join.
 */
metabase.lib.join.with_join_alias_update_join = (function metabase$lib$join$with_join_alias_update_join(join,new_alias){
var old_alias = metabase.lib.join.util.current_join_alias(join);
return metabase.lib.join.with_join_alias_update_join_conditions(metabase.lib.join.with_join_alias_update_join_fields(metabase.util.assoc_dissoc(join,new cljs.core.Keyword(null,"alias","alias",-2039751630),new_alias),new_alias),old_alias,new_alias);
});
/**
 * Inputs: [field-or-join :- lib.join.util/FieldOrPartialJoin join-alias :- [:maybe :metabase.lib.schema.common/non-blank-string]]
 *   Return: lib.join.util/FieldOrPartialJoin
 *        
 * 
 *   Add OR REMOVE a specific `join-alias` to `field-or-join`, which is either a `:field`/Field metadata, or a join map.
 *   Does not recursively update other references (yet; we can add this in the future).
 */
metabase.lib.join.with_join_alias = (function metabase$lib$join$with_join_alias(field_or_join,join_alias){
var G__78584 = metabase.lib.dispatch.dispatch_value(field_or_join);
var G__78584__$1 = (((G__78584 instanceof cljs.core.Keyword))?G__78584.fqn:null);
switch (G__78584__$1) {
case "field":
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(field_or_join,metabase.util.assoc_dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),join_alias], 0));

break;
case "metadata/column":
return metabase.util.assoc_dissoc(field_or_join,new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023),join_alias);

break;
case "mbql/join":
return metabase.lib.join.with_join_alias_update_join(field_or_join,join_alias);

break;
default:
var level__73195__auto___78718 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"error","error",-978969032));
var logger__73196__auto___78719 = "metabase.lib.join";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73196__auto___78719,level__73195__auto___78718))){
var x__73197__auto___78720 = "with-join-value should not be called with";
if((x__73197__auto___78720 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___78719,level__73195__auto___78718,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_or_join], 0))], 0)),x__73197__auto___78720);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___78719,level__73195__auto___78718,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__73197__auto___78720,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_or_join], 0))], 0)),null);
}
} else {
}

return field_or_join;

}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int join-alias :- :metabase.lib.schema.common/non-blank-string]
 *   Return: :metabase.lib.schema.join/join
 *        
 * 
 *   Resolve a join with a specific `join-alias`.
 */
metabase.lib.join.resolve_join = (function metabase$lib$join$resolve_join(query,stage_number,join_alias){
var map__78588 = metabase.lib.util.query_stage(query,stage_number);
var map__78588__$1 = cljs.core.__destructure_map(map__78588);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78588__$1,new cljs.core.Keyword(null,"joins","joins",1033962699));
var or__5002__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__78587_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(p1__78587_SHARP_),join_alias);
}),joins);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No join named {0}, found: {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([join_alias], 0)),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630),joins)], 0))], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),join_alias,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null));
}
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (query,_stage_number,p__78589,_style){
var map__78590 = p__78589;
var map__78590__$1 = cljs.core.__destructure_map(map__78590);
var _join = map__78590__$1;
var vec__78591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78590__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
var map__78594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78591,(0),null);
var map__78594__$1 = cljs.core.__destructure_map(map__78594);
var _first_stage = map__78594__$1;
var source_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78594__$1,new cljs.core.Keyword(null,"source-table","source-table",-225307692));
var source_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78594__$1,new cljs.core.Keyword(null,"source-card","source-card",-1580820390));
var or__5002__auto__ = (cljs.core.truth_(source_table)?new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.table(query,source_table)):null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (cljs.core.truth_(source_card)?(function (){var temp__5802__auto__ = metabase.lib.metadata.card(query,source_card);
if(cljs.core.truth_(temp__5802__auto__)){
var card_metadata = temp__5802__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,(0),card_metadata);
} else {
return metabase.lib.card.fallback_display_name(source_card);
}
})():null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return metabase.shared.util.i18n.js_i18n("Native Query");
}
}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (query,stage_number,join){
var display_name = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,join);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return display_name;
}
})(),new cljs.core.Keyword(null,"display-name","display-name",694513143),display_name], null);
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (_query,_stage_number,_join_query){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You can't calculate a metadata map for a join! Use lib.metadata.calculation/returned-columns-method instead.",cljs.core.PersistentArrayMap.EMPTY);
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int column-metadata :- :metabase.lib.schema.metadata/column join-alias :- :metabase.lib.schema.common/non-blank-string]
 *   Return: lib.metadata.calculation/ColumnMetadataWithSource
 *        
 * 
 *   For a column that comes from a join `:fields` list, add or update metadata as needed, e.g. include join name in the
 *   display name.
 */
metabase.lib.join.column_from_join_fields = (function metabase$lib$join$column_from_join_fields(query,stage_number,column_metadata,join_alias){
var column_metadata__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(column_metadata,new cljs.core.Keyword(null,"source-alias","source-alias",1652088724),join_alias);
var col = metabase.lib.join.with_join_alias(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(column_metadata__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,column_metadata__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","joins","source/joins",1225821486)], 0)),join_alias);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.util.current_join_alias(col),join_alias)){
} else {
throw (new Error("Assert failed: (= (lib.join.util/current-join-alias col) join-alias)"));
}

return col;
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("option","join.strategy","option/join.strategy",1337097154),(function (_query,_stage_number,p__78596,_style){
var map__78597 = p__78596;
var map__78597__$1 = cljs.core.__destructure_map(map__78597);
var strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78597__$1,new cljs.core.Keyword(null,"strategy","strategy",-1471631918));
var G__78598 = strategy;
var G__78598__$1 = (((G__78598 instanceof cljs.core.Keyword))?G__78598.fqn:null);
switch (G__78598__$1) {
case "left-join":
return metabase.shared.util.i18n.js_i18n("Left outer join");

break;
case "right-join":
return metabase.shared.util.i18n.js_i18n("Right outer join");

break;
case "inner-join":
return metabase.shared.util.i18n.js_i18n("Inner join");

break;
case "full-join":
return metabase.shared.util.i18n.js_i18n("Full outer join");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78598__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("option","join.strategy","option/join.strategy",1337097154),(function (query,stage_number,p__78599){
var map__78600 = p__78599;
var map__78600__$1 = cljs.core.__destructure_map(map__78600);
var option = map__78600__$1;
var strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78600__$1,new cljs.core.Keyword(null,"strategy","strategy",-1471631918));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78600__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var G__78601 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"short-name","short-name",-1767085022),metabase.util.qualified_name(strategy),new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,option)], null);
if(cljs.core.truth_(default$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78601,new cljs.core.Keyword(null,"default","default",-1987822328),true);
} else {
return G__78601;
}
}));
/**
 * Inputs: [join :- [:map [:alias {:error/message "Join must have an alias to determine column aliases!"} :metabase.lib.schema.common/non-blank-string]] unique-name-fn :- :metabase.lib.metadata.calculation/unique-name-fn col :- :map]
 *   Return: :map
 */
metabase.lib.join.add_source_and_desired_aliases = (function metabase$lib$join$add_source_and_desired_aliases(join,unique_name_fn,col){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(col,new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177))(col),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__78602 = metabase.lib.join.util.joined_field_desired_alias(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177))(col));
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__78602) : unique_name_fn.call(null,G__78602));
})()], 0));
});
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (query,stage_number,p__78604,p__78605){
var map__78606 = p__78604;
var map__78606__$1 = cljs.core.__destructure_map(map__78606);
var join = map__78606__$1;
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78606__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78606__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"none","none",1333468478));
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78606__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
var map__78607 = p__78605;
var map__78607__$1 = cljs.core.__destructure_map(map__78607);
var options = map__78607__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78607__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fields,new cljs.core.Keyword(null,"none","none",1333468478))){
return null;
} else {
var ensure_previous_stages_have_metadata = (((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.stage !== 'undefined') && (typeof metabase.lib.stage.ensure_previous_stages_have_metadata !== 'undefined'))?(new cljs.core.Var((function (){
return metabase.lib.stage.ensure_previous_stages_have_metadata;
}),cljs.core.with_meta(new cljs.core.Symbol("metabase.lib.stage","ensure-previous-stages-have-metadata","metabase.lib.stage/ensure-previous-stages-have-metadata",2048342183,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),null)):null);
var join_query = (function (){var G__78622 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword(null,"stages","stages",-442109532),stages);
if(cljs.core.truth_(ensure_previous_stages_have_metadata)){
return (ensure_previous_stages_have_metadata.cljs$core$IFn$_invoke$arity$2 ? ensure_previous_stages_have_metadata.cljs$core$IFn$_invoke$arity$2(G__78622,(-1)) : ensure_previous_stages_have_metadata.call(null,G__78622,(-1)));
} else {
return G__78622;
}
})();
var field_metadatas = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fields,new cljs.core.Keyword(null,"all","all",892129742)))?metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(join_query,(-1),cljs.core.peek(stages),options):(function (){var iter__5480__auto__ = (function metabase$lib$join$iter__78625(s__78626){
return (new cljs.core.LazySeq(null,(function (){
var s__78626__$1 = s__78626;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__78626__$1);
if(temp__5804__auto__){
var s__78626__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78626__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__78626__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__78628 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__78627 = (0);
while(true){
if((i__78627 < size__5479__auto__)){
var field_ref = cljs.core._nth(c__5478__auto__,i__78627);
var join_field = metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(field_ref,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794)], 0));
cljs.core.chunk_append(b__78628,metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(join_query,(-1),join_field));

var G__78722 = (i__78627 + (1));
i__78627 = G__78722;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78628),metabase$lib$join$iter__78625(cljs.core.chunk_rest(s__78626__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78628),null);
}
} else {
var field_ref = cljs.core.first(s__78626__$2);
var join_field = metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(field_ref,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794)], 0));
return cljs.core.cons(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(join_query,(-1),join_field),metabase$lib$join$iter__78625(cljs.core.rest(s__78626__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(fields);
})());
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (field_metadata){
return metabase.lib.join.add_source_and_desired_aliases(join,unique_name_fn,metabase.lib.join.column_from_join_fields(query,stage_number,field_metadata,join_alias));
}),field_metadatas);
}
}));
metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (query,stage_number,join,options){
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"all","all",892129742)),options);
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- :metabase.lib.metadata.calculation/unique-name-fn]
 *   Return: lib.metadata.calculation/ColumnsWithUniqueAliases
 *        
 * 
 *   Convenience for calling [[lib.metadata.calculation/visible-columns]] on all of the joins in a query stage.
 */
metabase.lib.join.all_joins_visible_columns = (function metabase$lib$join$all_joins_visible_columns(query,stage_number,unique_name_fn){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (join){
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,join,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870),unique_name_fn,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null));
})),new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int options :- lib.metadata.calculation/ReturnedColumnsOptions]
 *   Return: lib.metadata.calculation/ColumnsWithUniqueAliases
 *        
 * 
 *   Convenience for calling [[lib.metadata.calculation/returned-columns-method]] on all the joins in a query stage.
 */
metabase.lib.join.all_joins_expected_columns = (function metabase$lib$join$all_joins_expected_columns(query,stage_number,options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (join){
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,join,options);
})),new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.join !== 'undefined') && (typeof metabase.lib.join.join_clause_method !== 'undefined')){
} else {
/**
 * Convert something to a join clause.
 */
metabase.lib.join.join_clause_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__78629 = cljs.core.get_global_hierarchy;
return (fexpr__78629.cljs$core$IFn$_invoke$arity$0 ? fexpr__78629.cljs$core$IFn$_invoke$arity$0() : fexpr__78629.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.join","join-clause-method"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.join.join_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","join","mbql/join",-709512370),(function (a_join_clause){
return a_join_clause;
}));
metabase.lib.join.join_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),(function (another_query){
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","join","mbql/join",-709512370),new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.pipeline(another_query))], null));
}));
metabase.lib.join.join_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (mbql_stage){
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","join","mbql/join",-709512370),new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mbql_stage], null)], null));
}));
metabase.lib.join.join_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),(function (card){
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","join","mbql/join",-709512370),new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-card","source-card",-1580820390),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798)], null)], null)], null));
}));
metabase.lib.join.join_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","table","metadata/table",-882499405),(function (p__78630){
var map__78631 = p__78630;
var map__78631__$1 = cljs.core.__destructure_map(map__78631);
var table_metadata = map__78631__$1;
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78631__$1,new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023));
var join_fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78631__$1,new cljs.core.Keyword("metabase.lib.join","join-fields","metabase.lib.join/join-fields",-2085751377));
var G__78632 = metabase.lib.join.join_clause_method.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.Keyword("lib","options","lib/options",99794548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null),new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(table_metadata)], null));
var G__78632__$1 = (cljs.core.truth_(join_alias)?metabase.lib.join.with_join_alias(G__78632,join_alias):G__78632);
if(cljs.core.truth_(join_fields)){
return (metabase.lib.join.with_join_fields.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.join.with_join_fields.cljs$core$IFn$_invoke$arity$2(G__78632__$1,join_fields) : metabase.lib.join.with_join_fields.call(null,G__78632__$1,join_fields));
} else {
return G__78632__$1;
}
}));
/**
 * Add `join-alias` to the RHS of all [[standard-join-condition?]] `conditions` that don't already have a `:join-alias`.
 *   If an RHS already has a `:join-alias`, don't second guess what was already explicitly specified.
 */
metabase.lib.join.with_join_conditions_add_alias_to_rhses = (function metabase$lib$join$with_join_conditions_add_alias_to_rhses(conditions,join_alias){
if(cljs.core.not(join_alias)){
return conditions;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (condition){
var or__5002__auto__ = (function (){var temp__5804__auto__ = metabase.lib.join.standard_join_condition_rhs(condition);
if(cljs.core.truth_(temp__5804__auto__)){
var rhs = temp__5804__auto__;
if(cljs.core.truth_(metabase.lib.join.util.current_join_alias(rhs))){
return null;
} else {
return metabase.lib.join.standard_join_condition_update_rhs.cljs$core$IFn$_invoke$arity$variadic(condition,metabase.lib.join.with_join_alias,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([join_alias], 0));
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return condition;
}
}),conditions);
}
});
/**
 * Inputs: [a-join :- lib.join.util/PartialJoin conditions :- [:maybe [:sequential [:or :metabase.lib.schema.expression/boolean :metabase.lib.schema.common/external-op]]]]
 *   Return: lib.join.util/PartialJoin
 *        
 * 
 *   Update the `:conditions` (filters) for a Join clause.
 */
metabase.lib.join.with_join_conditions = (function metabase$lib$join$with_join_conditions(a_join,conditions){
var conditions__$1 = metabase.lib.join.with_join_conditions_add_alias_to_rhses(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.common.__GT_op_arg,conditions),metabase.lib.join.util.current_join_alias(a_join));
return metabase.util.assoc_dissoc(a_join,new cljs.core.Keyword(null,"conditions","conditions",-1647236270),cljs.core.not_empty(conditions__$1));
});
/**
 * Inputs: [joinable :- lib.join.util/PartialJoin fields :- [:maybe [:or [:enum :all :none] [:sequential some?]]]]
 *   Return: lib.join.util/PartialJoin
 *        
 * 
 *   Update a join (or a function that will return a join) to include `:fields`, either `:all`, `:none`, or a sequence of
 *   references.
 */
metabase.lib.join.with_join_fields = (function metabase$lib$join$with_join_fields(joinable,fields){
var fields__$1 = (((fields instanceof cljs.core.Keyword))?fields:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fields,cljs.core.PersistentVector.EMPTY))?new cljs.core.Keyword(null,"none","none",1333468478):cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.ref.ref),(function (){var temp__5802__auto__ = metabase.lib.join.util.current_join_alias(joinable);
if(cljs.core.truth_(temp__5802__auto__)){
var current_alias = temp__5802__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__78636_SHARP_){
return metabase.lib.join.with_join_alias(p1__78636_SHARP_,current_alias);
}));
} else {
return cljs.core.identity;
}
})()),fields))
));
return metabase.util.assoc_dissoc(joinable,new cljs.core.Keyword(null,"fields","fields",-1932066230),fields__$1);
});
metabase.lib.join.select_home_column = (function metabase$lib$join$select_home_column(home_cols,cond_fields){
var cond_home_cols = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__78638_SHARP_){
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$2(p1__78638_SHARP_,home_cols);
}),cond_fields);
var or__5002__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.foreign_key_QMARK_,metabase.lib.types.isa.primary_key_QMARK_),cond_home_cols);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.first(cond_home_cols);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.foreign_key_QMARK_,home_cols);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.primary_key_QMARK_,home_cols);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
return cljs.core.first(home_cols);
}
}
}
}
});
metabase.lib.join.strip_id = (function metabase$lib$join$strip_id(s){
if(typeof s === 'string'){
return clojure.string.trim(clojure.string.replace(s,/ id$/i,""));
} else {
return null;
}
});
/**
 * Checks if `name0` and `name1` are similar.
 *   Two names are considered similar if they are the same, one is the plural of the other,
 *   or their plurals are equal.
 *   This is used to avoid repeating ourselves in situations like when we have a table called
 *   PRODUCTS and a field (presumably referring to that table) called PRODUCT.
 */
metabase.lib.join.similar_names_QMARK_ = (function metabase$lib$join$similar_names_QMARK_(name0,name1){
var and__5000__auto__ = typeof name0 === 'string';
if(and__5000__auto__){
var and__5000__auto____$1 = typeof name1 === 'string';
if(and__5000__auto____$1){
var plural1 = (new cljs.core.Delay((function (){
return inflections.core.plural(name1);
}),null));
var plural0 = (new cljs.core.Delay((function (){
return inflections.core.plural(name0);
}),null));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name0,name1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name0,cljs.core.deref(plural1))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(plural0),name1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(plural0),cljs.core.deref(plural1))))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
metabase.lib.join.calculate_join_alias = (function metabase$lib$join$calculate_join_alias(query,joined,home_col){
var joined_name = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(joined),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662)))?joined:query),joined);
var home_name = (cljs.core.truth_(home_col)?metabase.lib.join.strip_id(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$2(query,home_col)):null);
var similar = metabase.lib.join.similar_names_QMARK_(joined_name,home_name);
var join_alias = (function (){var or__5002__auto__ = (function (){var and__5000__auto__ = joined_name;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = home_name;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = cljs.core.not(cljs.core.re_matches(/id/i,home_name));
if(and__5000__auto____$2){
var and__5000__auto____$3 = (!(similar));
if(and__5000__auto____$3){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(joined_name)," - ",home_name].join('');
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
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = joined_name;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = home_name;
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return "source";
}
}
}
})();
return join_alias;
});
metabase.lib.join.add_alias_to_join_refs = (function metabase$lib$join$add_alias_to_join_refs(query,stage_number,form,join_alias,join_cols){
return (function metabase$lib$join$add_alias_to_join_refs_$_replace_78652(_AMPERSAND_parents,_AMPERSAND_match){
try{if((function (field_clause){
return ((metabase.lib.util.field_clause_QMARK_(field_clause)) && (cljs.core.boolean$(metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,field_clause,join_cols))));
})(_AMPERSAND_match)){
var field = _AMPERSAND_match;
return metabase.lib.join.with_join_alias(field,join_alias);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78655){if((e78655 instanceof Error)){
var e__46214__auto__ = e78655;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$lib$join$add_alias_to_join_refs_$_replace_78652,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e78655;

}
}})(cljs.core.PersistentVector.EMPTY,form);
});
metabase.lib.join.add_alias_to_condition = (function metabase$lib$join$add_alias_to_condition(query,stage_number,condition,join_alias,home_cols,join_cols){
var condition__$1 = metabase.lib.join.add_alias_to_join_refs(query,stage_number,condition,join_alias,join_cols);
return (function metabase$lib$join$add_alias_to_condition_$_replace_78657(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_2__78661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(metabase.lib.util.field_clause_QMARK_(_AMPERSAND_match_2__78661)){
try{var _AMPERSAND_match_3__78662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(metabase.lib.util.field_clause_QMARK_(_AMPERSAND_match_3__78662)){
var rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
var op_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var lhs_alias = metabase.lib.join.util.current_join_alias(lhs);
var rhs_alias = metabase.lib.join.util.current_join_alias(rhs);
if(cljs.core.not((function (){var or__5002__auto__ = lhs_alias;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return rhs_alias;
}
})())){
if(cljs.core.truth_(metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,rhs,home_cols))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,op_opts,metabase.lib.join.with_join_alias(lhs,join_alias),rhs], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,op_opts,lhs,metabase.lib.join.with_join_alias(rhs,join_alias)], null);
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lhs_alias,join_alias)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rhs_alias,join_alias)))){
var bare_lhs = metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(lhs,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794)], 0));
var bare_rhs = metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(rhs,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794)], 0));
if(cljs.core.truth_((function (){var and__5000__auto__ = (metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,bare_lhs,home_cols) == null);
if(and__5000__auto__){
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,bare_rhs,home_cols);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,op_opts,lhs,bare_rhs], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,op_opts,bare_lhs,rhs], null);
}
} else {
return _AMPERSAND_match;

}
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e78665){if((e78665 instanceof Error)){
var e__46214__auto__ = e78665;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78665;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78664){if((e78664 instanceof Error)){
var e__46214__auto__ = e78664;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78664;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78663){if((e78663 instanceof Error)){
var e__46214__auto__ = e78663;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$lib$join$add_alias_to_condition_$_replace_78657,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e78663;

}
}})(cljs.core.PersistentVector.EMPTY,condition__$1);
});
metabase.lib.join.generate_unique_name = (function metabase$lib$join$generate_unique_name(metadata_providerable,base_name,taken_names){
var generator = metabase.lib.util.unique_name_generator.cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable));
cljs.core.run_BANG_(generator,taken_names);

return (generator.cljs$core$IFn$_invoke$arity$1 ? generator.cljs$core$IFn$_invoke$arity$1(base_name) : generator.call(null,base_name));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int a-join :- lib.join.util/JoinWithOptionalAlias]
 *   Return: :metabase.lib.schema.join/join
 *        
 * 
 *   Add a default generated `:alias` to a join clause that does not already have one.
 */
metabase.lib.join.add_default_alias = (function metabase$lib$join$add_default_alias(query,stage_number,a_join){
if(cljs.core.contains_QMARK_(a_join,new cljs.core.Keyword(null,"alias","alias",-2039751630))){
return a_join;
} else {
var stage = metabase.lib.util.query_stage(query,stage_number);
var home_cols = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
var cond_fields = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$join$add_default_alias_$_match_78669(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__78672 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__78672)) && ((cljs.core.count(_AMPERSAND_match_left__78672) === (1))))){
try{var _AMPERSAND_match_left__78672_0__78674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78672,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__78672_0__78674,new cljs.core.Keyword(null,"field","field",-1302436500))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78680){if((e78680 instanceof Error)){
var e__46214__auto__ = e78680;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78680;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78676){if((e78676 instanceof Error)){
var e__46214__auto__ = e78676;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78676;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78675){if((e78675 instanceof Error)){
var e__46214__auto__ = e78675;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$join$add_default_alias_$_match_78669,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e78675;

}
}})(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"conditions","conditions",-1647236270).cljs$core$IFn$_invoke$arity$1(a_join))));
var home_col = metabase.lib.join.select_home_column(home_cols,cond_fields);
var join_alias = (function (){var s = metabase.lib.join.calculate_join_alias(query,a_join,home_col);
return metabase.lib.join.generate_unique_name(query,s,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage)));
})();
var join_cols = metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$1(metabase.lib.query.query_with_stages.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(a_join)));
return metabase.lib.join.with_join_alias(cljs.core.update.cljs$core$IFn$_invoke$arity$3(a_join,new cljs.core.Keyword(null,"conditions","conditions",-1647236270),(function (conditions){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78667_SHARP_){
return metabase.lib.join.add_alias_to_condition(query,stage_number,p1__78667_SHARP_,join_alias,home_cols,join_cols);
}),conditions);
})),join_alias);
}
});


/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe :metabase.lib.schema.join/joins]
 *        
 * 
 *   Get all joins in a specific `stage` of a `query`. If `stage` is unspecified, returns joins in the final stage of the
 *   query.
 */
metabase.lib.join.joins = (function() {
var metabase$lib$join$joins = null;
var metabase$lib$join$joins__1 = (function (query){
return (metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.join.joins.call(null,query,(-1)));
});
var metabase$lib$join$joins__2 = (function (query,stage_number){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.query_stage(query,stage_number),new cljs.core.Keyword(null,"joins","joins",1033962699)));
});
metabase$lib$join$joins = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$join$joins__1.call(this,query);
case 2:
return metabase$lib$join$joins__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$join$joins.cljs$core$IFn$_invoke$arity$1 = metabase$lib$join$joins__1;
metabase$lib$join$joins.cljs$core$IFn$_invoke$arity$2 = metabase$lib$join$joins__2;
return metabase$lib$join$joins;
})()
;
/**
 * Inputs: [a-join :- lib.join.util/PartialJoin]
 *   Return: [:maybe :metabase.lib.schema.join/conditions]
 *        
 * 
 *   Get all join conditions for the given join
 */
metabase.lib.join.join_conditions = (function metabase$lib$join$join_conditions(a_join){
return new cljs.core.Keyword(null,"conditions","conditions",-1647236270).cljs$core$IFn$_invoke$arity$1(a_join);
});
/**
 * Inputs: [a-join :- lib.join.util/PartialJoin]
 *   Return: [:maybe :metabase.lib.schema.join/fields]
 *        
 * 
 *   Get all join conditions for the given join
 */
metabase.lib.join.join_fields = (function metabase$lib$join$join_fields(a_join){
return new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(a_join);
});
metabase.lib.join.raw_join_strategy__GT_strategy_option = (function metabase$lib$join$raw_join_strategy__GT_strategy_option(raw_strategy){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("option","join.strategy","option/join.strategy",1337097154),new cljs.core.Keyword(null,"strategy","strategy",-1471631918),raw_strategy], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_strategy,new cljs.core.Keyword(null,"left-join","left-join",-672831855)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),true], null):null)], 0));
});
/**
 * Inputs: [a-join :- lib.join.util/PartialJoin]
 *   Return: :metabase.lib.schema.join/strategy
 *        
 * 
 *   Get the raw keyword strategy (type) of a given join, e.g. `:left-join` or `:right-join`. This is either the value
 *   of the optional `:strategy` key or the default, `:left-join`, if `:strategy` is not specified.
 */
metabase.lib.join.raw_join_strategy = (function metabase$lib$join$raw_join_strategy(a_join){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(a_join,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"left-join","left-join",-672831855));
});
/**
 * Inputs: [a-join :- lib.join.util/PartialJoin]
 *   Return: :metabase.lib.schema.join/strategy.option
 *        
 * 
 *   Get the strategy (type) of a given join, as a `:option/join.strategy` map. If `:stategy` is unspecified, returns
 *   the default, left join.
 */
metabase.lib.join.join_strategy = (function metabase$lib$join$join_strategy(a_join){
return metabase.lib.join.raw_join_strategy__GT_strategy_option(metabase.lib.join.raw_join_strategy(a_join));
});
/**
 * Inputs: [a-join :- lib.join.util/PartialJoin strategy :- [:or :metabase.lib.schema.join/strategy :metabase.lib.schema.join/strategy.option]]
 *   Return: lib.join.util/PartialJoin
 *        
 * 
 *   Return a copy of `a-join` with its `:strategy` set to `strategy`.
 */
metabase.lib.join.with_join_strategy = (function metabase$lib$join$with_join_strategy(a_join,strategy){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a_join,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),(function (){var G__78681 = strategy;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.dispatch.dispatch_value(strategy),new cljs.core.Keyword("option","join.strategy","option/join.strategy",1337097154))){
return new cljs.core.Keyword(null,"strategy","strategy",-1471631918).cljs$core$IFn$_invoke$arity$1(G__78681);
} else {
return G__78681;
}
})());
});
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query _stage-number :- :int])
 *   Return: [:sequential :metabase.lib.schema.join/strategy.option]
 *        
 * 
 *   Get available join strategies for the current Database (based on the Database's
 *   supported [[metabase.driver/features]]) as raw keywords like `:left-join`.
 */
metabase.lib.join.available_join_strategies = (function() {
var metabase$lib$join$available_join_strategies = null;
var metabase$lib$join$available_join_strategies__1 = (function (query){
return (metabase.lib.join.available_join_strategies.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.join.available_join_strategies.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.join.available_join_strategies.call(null,query,(-1)));
});
var metabase$lib$join$available_join_strategies__2 = (function (query,_stage_number){
var database = metabase.lib.metadata.database(query);
var features = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(database);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,features)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.join.raw_join_strategy__GT_strategy_option)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-join","left-join",-672831855),new cljs.core.Keyword(null,"right-join","right-join",-56349359),new cljs.core.Keyword(null,"inner-join","inner-join",659431740),new cljs.core.Keyword(null,"full-join","full-join",1305476385)], null));
});
metabase$lib$join$available_join_strategies = function(query,_stage_number){
switch(arguments.length){
case 1:
return metabase$lib$join$available_join_strategies__1.call(this,query);
case 2:
return metabase$lib$join$available_join_strategies__2.call(this,query,_stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$join$available_join_strategies.cljs$core$IFn$_invoke$arity$1 = metabase$lib$join$available_join_strategies__1;
metabase$lib$join$available_join_strategies.cljs$core$IFn$_invoke$arity$2 = metabase$lib$join$available_join_strategies__2;
return metabase$lib$join$available_join_strategies;
})()
;
/**
 * Inputs: ([joinable]
 *         [joinable conditions]
 *         [joinable conditions strategy])
 *   Return: lib.join.util/PartialJoin
 *        
 * 
 *   Create an MBQL join map from something that can conceptually be joined against. A `Table`? An MBQL or native query? A
 *   Saved Question? You should be able to join anything, and this should return a sensible MBQL join map. Uses a left join
 *   by default.
 */
metabase.lib.join.join_clause = (function() {
var metabase$lib$join$join_clause = null;
var metabase$lib$join$join_clause__1 = (function (joinable){
return metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3(metabase.lib.join.join_clause_method.cljs$core$IFn$_invoke$arity$1(joinable),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"all","all",892129742));
});
var metabase$lib$join$join_clause__2 = (function (joinable,conditions){
return (metabase.lib.join.join_clause.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.join.join_clause.cljs$core$IFn$_invoke$arity$3(joinable,conditions,new cljs.core.Keyword(null,"left-join","left-join",-672831855)) : metabase.lib.join.join_clause.call(null,joinable,conditions,new cljs.core.Keyword(null,"left-join","left-join",-672831855)));
});
var metabase$lib$join$join_clause__3 = (function (joinable,conditions,strategy){
return metabase.lib.join.with_join_strategy(metabase.lib.join.with_join_conditions((metabase.lib.join.join_clause.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.join.join_clause.cljs$core$IFn$_invoke$arity$1(joinable) : metabase.lib.join.join_clause.call(null,joinable)),conditions),strategy);
});
metabase$lib$join$join_clause = function(joinable,conditions,strategy){
switch(arguments.length){
case 1:
return metabase$lib$join$join_clause__1.call(this,joinable);
case 2:
return metabase$lib$join$join_clause__2.call(this,joinable,conditions);
case 3:
return metabase$lib$join$join_clause__3.call(this,joinable,conditions,strategy);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$join$join_clause.cljs$core$IFn$_invoke$arity$1 = metabase$lib$join$join_clause__1;
metabase$lib$join$join_clause.cljs$core$IFn$_invoke$arity$2 = metabase$lib$join$join_clause__2;
metabase$lib$join$join_clause.cljs$core$IFn$_invoke$arity$3 = metabase$lib$join$join_clause__3;
return metabase$lib$join$join_clause;
})()
;
/**
 * Inputs: ([query a-join]
 *         [query :- :metabase.lib.schema/query stage-number :- :int a-join :- [:or lib.join.util/PartialJoin Joinable]])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Add a join clause to a `query`.
 */
metabase.lib.join.join = (function() {
var metabase$lib$join$join = null;
var metabase$lib$join$join__2 = (function (query,a_join){
return (metabase.lib.join.join.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.join.join.cljs$core$IFn$_invoke$arity$3(query,(-1),a_join) : metabase.lib.join.join.call(null,query,(-1),a_join));
});
var metabase$lib$join$join__3 = (function (query,stage_number,a_join){
var a_join__$1 = metabase.lib.join.join_clause.cljs$core$IFn$_invoke$arity$1(a_join);
var suggested_conditions = ((cljs.core.empty_QMARK_(metabase.lib.join.join_conditions(a_join__$1)))?(function (){var G__78682 = query;
var G__78683 = stage_number;
var G__78684 = (metabase.lib.join.joined_thing.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.join.joined_thing.cljs$core$IFn$_invoke$arity$2(query,a_join__$1) : metabase.lib.join.joined_thing.call(null,query,a_join__$1));
return (metabase.lib.join.suggested_join_conditions.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.join.suggested_join_conditions.cljs$core$IFn$_invoke$arity$3(G__78682,G__78683,G__78684) : metabase.lib.join.suggested_join_conditions.call(null,G__78682,G__78683,G__78684));
})():null);
var a_join__$2 = (function (){var G__78685 = a_join__$1;
if(cljs.core.seq(suggested_conditions)){
return metabase.lib.join.with_join_conditions(G__78685,suggested_conditions);
} else {
return G__78685;
}
})();
var a_join__$3 = metabase.lib.join.add_default_alias(query,stage_number,a_join__$2);
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"joins","joins",1033962699),(function (existing_joins){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(existing_joins),a_join__$3);
})], 0));
});
metabase$lib$join$join = function(query,stage_number,a_join){
switch(arguments.length){
case 2:
return metabase$lib$join$join__2.call(this,query,stage_number);
case 3:
return metabase$lib$join$join__3.call(this,query,stage_number,a_join);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$join$join.cljs$core$IFn$_invoke$arity$2 = metabase$lib$join$join__2;
metabase$lib$join$join.cljs$core$IFn$_invoke$arity$3 = metabase$lib$join$join__3;
return metabase$lib$join$join;
})()
;
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable a-join :- lib.join.util/PartialJoin]
 *   Return: [:maybe Joinable]
 *        
 * 
 *   Return metadata about the origin of `a-join` using `metadata-providerable` as the source of information.
 */
metabase.lib.join.joined_thing = (function metabase$lib$join$joined_thing(metadata_providerable,a_join){
var origin = cljs.core.first(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(a_join));
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(origin))){
return metabase.lib.metadata.card(metadata_providerable,new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(origin));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(origin))){
return metabase.lib.metadata.table(metadata_providerable,new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(origin));
} else {
return null;
}
}
});
/**
 * Inputs: [columns :- [:sequential :metabase.lib.schema.metadata/column]]
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Sort potential join condition columns as returned by [[join-condition-lhs-columns]]
 *   or [[join-condition-rhs-columns]]. PK columns are returned first, followed by FK columns, followed by other columns.
 *   Otherwise original order is maintained.
 */
metabase.lib.join.sort_join_condition_columns = (function metabase$lib$join$sort_join_condition_columns(columns){
var map__78686 = cljs.core.group_by((function (column){
if(metabase.lib.types.isa.primary_key_QMARK_(column)){
return new cljs.core.Keyword(null,"pk","pk",-771936732);
} else {
if(metabase.lib.types.isa.foreign_key_QMARK_(column)){
return new cljs.core.Keyword(null,"fk","fk",398442651);
} else {
return new cljs.core.Keyword(null,"other","other",995793544);

}
}
}),columns);
var map__78686__$1 = cljs.core.__destructure_map(map__78686);
var pk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78686__$1,new cljs.core.Keyword(null,"pk","pk",-771936732));
var fk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78686__$1,new cljs.core.Keyword(null,"fk","fk",398442651));
var other = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78686__$1,new cljs.core.Keyword(null,"other","other",995793544));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(pk,fk,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([other], 0));
});
metabase.lib.join.mark_selected_column = (function metabase$lib$join$mark_selected_column(query,stage_number,existing_column_or_nil,columns){
if(cljs.core.not(existing_column_or_nil)){
return columns;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (column){
if(cljs.core.truth_(new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(column))){
return metabase.lib.temporal_bucket.with_temporal_bucket(column,metabase.lib.temporal_bucket.temporal_bucket(existing_column_or_nil));
} else {
return column;
}
}),metabase.lib.equality.mark_selected_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,columns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_column_or_nil], null)));
}
});
/**
 * Inputs: ([query joinable lhs-column-or-nil rhs-column-or-nil]
 *         [query :- :metabase.lib.schema/query stage-number :- :int join-or-joinable :- [:maybe JoinOrJoinable] lhs-column-or-nil :- [:maybe lib.join.util/Field] _rhs-column-or-nil :- [:maybe lib.join.util/Field]])
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Get a sequence of columns that can be used as the left-hand-side (source column) in a join condition. This column
 *   is the one that comes from the source Table/Card/previous stage of the query or a previous join.
 * 
 *   If you are changing the LHS of a condition for an existing join, pass in that existing join as `join-or-joinable` so
 *   we can filter out the columns added by it (it doesn't make sense to present the columns added by a join as options
 *   for its own LHS) or added by later joins (joins can only depend on things from previous joins). Otherwise you can
 *   either pass in `nil` or the [[Joinable]] (Table or Card metadata) we're joining against when building a new
 *   join. (Things other than joins are ignored, but this argument is flexible for consistency with the signature
 *   of [[join-condition-rhs-columns]].) See #32005 for more info.
 * 
 *   If the left-hand-side column has already been chosen and we're UPDATING it, pass in `lhs-column-or-nil` so we can
 *   mark the current column as `:selected` in the metadata/display info.
 * 
 *   If the right-hand-side column has already been chosen (they can be chosen in any order in the Query Builder UI),
 *   pass in the chosen RHS column. In the future, this may be used to restrict results to compatible columns. (See #31174)
 * 
 *   Results will be returned in a 'somewhat smart' order with PKs and FKs returned before other columns.
 * 
 *   Unlike most other things that return columns, implicitly-joinable columns ARE NOT returned here.
 */
metabase.lib.join.join_condition_lhs_columns = (function() {
var metabase$lib$join$join_condition_lhs_columns = null;
var metabase$lib$join$join_condition_lhs_columns__4 = (function (query,joinable,lhs_column_or_nil,rhs_column_or_nil){
return (metabase.lib.join.join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$5 ? metabase.lib.join.join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$5(query,(-1),joinable,lhs_column_or_nil,rhs_column_or_nil) : metabase.lib.join.join_condition_lhs_columns.call(null,query,(-1),joinable,lhs_column_or_nil,rhs_column_or_nil));
});
var metabase$lib$join$join_condition_lhs_columns__5 = (function (query,stage_number,join_or_joinable,lhs_column_or_nil,_rhs_column_or_nil){
var existing_join_alias = ((metabase.lib.join.join_QMARK_(join_or_joinable))?metabase.lib.join.util.current_join_alias(join_or_joinable):null);
var join_aliases_to_ignore = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.join.util.current_join_alias),cljs.core.drop_while.cljs$core$IFn$_invoke$arity$1((function (p1__78687_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__78687_SHARP_,existing_join_alias);
}))),metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2(query,stage_number));
var lhs_column_or_nil__$1 = (function (){var or__5002__auto__ = lhs_column_or_nil;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(metabase.lib.join.join_QMARK_(join_or_joinable)){
return metabase.lib.join.standard_join_condition_lhs(cljs.core.first(metabase.lib.join.join_conditions(join_or_joinable)));
} else {
return null;
}
}
})();
return metabase.lib.join.sort_join_condition_columns(metabase.lib.join.mark_selected_column(query,stage_number,lhs_column_or_nil__$1,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (col){
var temp__5804__auto__ = metabase.lib.join.util.current_join_alias(col);
if(cljs.core.truth_(temp__5804__auto__)){
var col_join_alias = temp__5804__auto__;
return cljs.core.contains_QMARK_(join_aliases_to_ignore,col_join_alias);
} else {
return null;
}
}),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.util.query_stage(query,stage_number),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null)))));
});
metabase$lib$join$join_condition_lhs_columns = function(query,stage_number,join_or_joinable,lhs_column_or_nil,_rhs_column_or_nil){
switch(arguments.length){
case 4:
return metabase$lib$join$join_condition_lhs_columns__4.call(this,query,stage_number,join_or_joinable,lhs_column_or_nil);
case 5:
return metabase$lib$join$join_condition_lhs_columns__5.call(this,query,stage_number,join_or_joinable,lhs_column_or_nil,_rhs_column_or_nil);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$join$join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$4 = metabase$lib$join$join_condition_lhs_columns__4;
metabase$lib$join$join_condition_lhs_columns.cljs$core$IFn$_invoke$arity$5 = metabase$lib$join$join_condition_lhs_columns__5;
return metabase$lib$join$join_condition_lhs_columns;
})()
;
/**
 * Inputs: ([query joinable lhs-column-or-nil rhs-column-or-nil]
 *         [query :- :metabase.lib.schema/query stage-number :- :int join-or-joinable :- JoinOrJoinable _lhs-column-or-nil :- [:maybe lib.join.util/Field] rhs-column-or-nil :- [:maybe lib.join.util/Field]])
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Get a sequence of columns that can be used as the right-hand-side (target column) in a join condition. This column
 *   is the one that belongs to the thing being joined, `join-or-joinable`, which can be something like a
 *   Table ([[metabase.lib.metadata/TableMetadata]]), Saved Question/Model ([[metabase.lib.metadata/CardMetadata]]),
 *   another query, etc. -- anything you can pass to [[join-clause]]. You can also pass in an existing join.
 * 
 *   If the left-hand-side column has already been chosen (they can be chosen in any order in the Query Builder UI),
 *   pass in the chosen LHS column. In the future, this may be used to restrict results to compatible columns. (See #31174)
 * 
 *   If the right-hand-side column has already been chosen and we're UPDATING it, pass in `rhs-column-or-nil` so we can
 *   mark the current column as `:selected` in the metadata/display info.
 * 
 *   Results will be returned in a 'somewhat smart' order with PKs and FKs returned before other columns.
 */
metabase.lib.join.join_condition_rhs_columns = (function() {
var metabase$lib$join$join_condition_rhs_columns = null;
var metabase$lib$join$join_condition_rhs_columns__4 = (function (query,joinable,lhs_column_or_nil,rhs_column_or_nil){
return (metabase.lib.join.join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$5 ? metabase.lib.join.join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$5(query,(-1),joinable,lhs_column_or_nil,rhs_column_or_nil) : metabase.lib.join.join_condition_rhs_columns.call(null,query,(-1),joinable,lhs_column_or_nil,rhs_column_or_nil));
});
var metabase$lib$join$join_condition_rhs_columns__5 = (function (query,stage_number,join_or_joinable,_lhs_column_or_nil,rhs_column_or_nil){
var joinable = ((metabase.lib.join.join_QMARK_(join_or_joinable))?metabase.lib.join.joined_thing(query,join_or_joinable):join_or_joinable);
var join_alias = ((metabase.lib.join.join_QMARK_(join_or_joinable))?metabase.lib.join.util.current_join_alias(join_or_joinable):null);
var rhs_column_or_nil__$1 = (function (){var or__5002__auto__ = rhs_column_or_nil;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(metabase.lib.join.join_QMARK_(join_or_joinable)){
return metabase.lib.join.standard_join_condition_rhs(cljs.core.first(metabase.lib.join.join_conditions(join_or_joinable)));
} else {
return null;
}
}
})();
var rhs_column_or_nil__$2 = (cljs.core.truth_(rhs_column_or_nil__$1)?(function (){var G__78688 = rhs_column_or_nil__$1;
if(cljs.core.not(join_alias)){
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(G__78688,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794)], 0));
} else {
return G__78688;
}
})():null);
return metabase.lib.join.sort_join_condition_columns(metabase.lib.join.mark_selected_column(query,stage_number,rhs_column_or_nil__$2,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (col){
var G__78689 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","joins","source/joins",1225821486));
if(cljs.core.truth_(join_alias)){
return metabase.lib.join.with_join_alias(G__78689,join_alias);
} else {
return G__78689;
}
}),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,joinable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false], null)))));
});
metabase$lib$join$join_condition_rhs_columns = function(query,stage_number,join_or_joinable,_lhs_column_or_nil,rhs_column_or_nil){
switch(arguments.length){
case 4:
return metabase$lib$join$join_condition_rhs_columns__4.call(this,query,stage_number,join_or_joinable,_lhs_column_or_nil);
case 5:
return metabase$lib$join$join_condition_rhs_columns__5.call(this,query,stage_number,join_or_joinable,_lhs_column_or_nil,rhs_column_or_nil);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$join$join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$4 = metabase$lib$join$join_condition_rhs_columns__4;
metabase$lib$join$join_condition_rhs_columns.cljs$core$IFn$_invoke$arity$5 = metabase$lib$join$join_condition_rhs_columns__5;
return metabase$lib$join$join_condition_rhs_columns;
})()
;
/**
 * Inputs: ([query lhs-column-or-nil rhs-column-or-nil]
 *         [_query :- :metabase.lib.schema/query _stage-number :- :int _lhs-column-or-nil :- [:maybe :metabase.lib.schema.metadata/column] _rhs-column-or-nil :- [:maybe :metabase.lib.schema.metadata/column]])
 *   Return: [:sequential :metabase.lib.schema.filter/operator]
 *        
 * 
 *   Return a sequence of valid filter clause operators that can be used to build a join condition. In the Query Builder
 *   UI, this can be chosen at any point before or after choosing the LHS and RHS. Invalid options are not currently
 *   filtered out based on values of the LHS or RHS, but in the future we can add this -- see #31174.
 */
metabase.lib.join.join_condition_operators = (function() {
var metabase$lib$join$join_condition_operators = null;
var metabase$lib$join$join_condition_operators__3 = (function (query,lhs_column_or_nil,rhs_column_or_nil){
return (metabase.lib.join.join_condition_operators.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.join.join_condition_operators.cljs$core$IFn$_invoke$arity$4(query,(-1),lhs_column_or_nil,rhs_column_or_nil) : metabase.lib.join.join_condition_operators.call(null,query,(-1),lhs_column_or_nil,rhs_column_or_nil));
});
var metabase$lib$join$join_condition_operators__4 = (function (_query,_stage_number,_lhs_column_or_nil,_rhs_column_or_nil){
return metabase.lib.filter.operator.join_operators;
});
metabase$lib$join$join_condition_operators = function(_query,_stage_number,_lhs_column_or_nil,_rhs_column_or_nil){
switch(arguments.length){
case 3:
return metabase$lib$join$join_condition_operators__3.call(this,_query,_stage_number,_lhs_column_or_nil);
case 4:
return metabase$lib$join$join_condition_operators__4.call(this,_query,_stage_number,_lhs_column_or_nil,_rhs_column_or_nil);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$join$join_condition_operators.cljs$core$IFn$_invoke$arity$3 = metabase$lib$join$join_condition_operators__3;
metabase$lib$join$join_condition_operators.cljs$core$IFn$_invoke$arity$4 = metabase$lib$join$join_condition_operators__4;
return metabase$lib$join$join_condition_operators;
})()
;
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int source target]
 *   Return: [:maybe
 *         [:sequential
 *          {:min 1}
 *          [:and :metabase.lib.schema.metadata/column [:map [:metabase.lib.join/target :metabase.lib.schema.metadata/column]]]]]
 *        
 * 
 *   Find FK columns in `source` pointing at a column in `target`. Includes the target column under the `::target` key.
 */
metabase.lib.join.fk_columns_to = (function metabase$lib$join$fk_columns_to(query,stage_number,source,target){
var target_columns = (new cljs.core.Delay((function (){
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false,new cljs.core.Keyword(null,"include-implicitly-joinable-for-source-card?","include-implicitly-joinable-for-source-card?",1240062794),false], null));
}),null));
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__78690){
var map__78691 = p__78690;
var map__78691__$1 = cljs.core.__destructure_map(map__78691);
var col = map__78691__$1;
var fk_target_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78691__$1,new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.types.isa.foreign_key_QMARK_(col);
if(and__5000__auto__){
return fk_target_field_id;
} else {
return and__5000__auto__;
}
})())){
var temp__5804__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (target_column){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fk_target_field_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_column));
}),cljs.core.deref(target_columns));
if(cljs.core.truth_(temp__5804__auto__)){
var target_column = temp__5804__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col,new cljs.core.Keyword("metabase.lib.join","target","metabase.lib.join/target",203858838),target_column);
} else {
return null;
}
} else {
return null;
}
})),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,source,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false,new cljs.core.Keyword(null,"include-implicitly-joinable-for-source-card?","include-implicitly-joinable-for-source-card?",1240062794),false], null))));
});
/**
 * Inputs: ([query joinable]
 *         [query stage-number joinable]
 *         [query :- :metabase.lib.schema/query stage-number :- :int joinable position :- [:maybe :int]])
 *   Return: [:maybe [:sequential {:min 1} :metabase.lib.schema.expression/boolean]]
 *        
 * 
 *   Return suggested default join conditions when constructing a join against `joinable`, e.g. a Table, Saved
 *   Question, or another query. Suggested conditions will be returned if the source Table has a foreign key to the
 *   primary key of the thing we're joining (see #31175 for more info); otherwise this will return `nil` if no default
 *   conditions are suggested.
 */
metabase.lib.join.suggested_join_conditions = (function() {
var metabase$lib$join$suggested_join_conditions = null;
var metabase$lib$join$suggested_join_conditions__2 = (function (query,joinable){
return (metabase.lib.join.suggested_join_conditions.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.join.suggested_join_conditions.cljs$core$IFn$_invoke$arity$4(query,(-1),joinable,null) : metabase.lib.join.suggested_join_conditions.call(null,query,(-1),joinable,null));
});
var metabase$lib$join$suggested_join_conditions__3 = (function (query,stage_number,joinable){
return (metabase.lib.join.suggested_join_conditions.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.join.suggested_join_conditions.cljs$core$IFn$_invoke$arity$4(query,stage_number,joinable,null) : metabase.lib.join.suggested_join_conditions.call(null,query,stage_number,joinable,null));
});
var metabase$lib$join$suggested_join_conditions__4 = (function (query,stage_number,joinable,position){
var unjoined = (cljs.core.truth_(position)?(function (){var new_joins = cljs.core.not_empty(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)),(0),position));
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,metabase.util.assoc_dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"joins","joins",1033962699),new_joins], 0));
})():query);
var stage = metabase.lib.util.query_stage(unjoined,stage_number);
var fks = (function metabase$lib$join$suggested_join_conditions_$_fks(source,target){
return cljs.core.not_empty(medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((function (p1__78696_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("metabase.lib.join","target","metabase.lib.join/target",203858838).cljs$core$IFn$_invoke$arity$1(p1__78696_SHARP_));
}),metabase.lib.join.fk_columns_to(unjoined,stage_number,source,target)));
});
var filter_clause = (function metabase$lib$join$suggested_join_conditions_$_filter_clause(x,y){
var x__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("metabase.lib.card","force-broken-id-refs","metabase.lib.card/force-broken-id-refs",-868945458));
var y__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(y,new cljs.core.Keyword("metabase.lib.card","force-broken-id-refs","metabase.lib.card/force-broken-id-refs",-868945458));
return metabase.lib.filter.filter_clause.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),x__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y__$1], 0));
});
var or__5002__auto__ = (function (){var temp__5804__auto__ = fks(stage,joinable);
if(cljs.core.truth_(temp__5804__auto__)){
var fks__$1 = temp__5804__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (fk){
return filter_clause(fk,new cljs.core.Keyword("metabase.lib.join","target","metabase.lib.join/target",203858838).cljs$core$IFn$_invoke$arity$1(fk));
}),fks__$1);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = fks(joinable,stage);
if(cljs.core.truth_(temp__5804__auto__)){
var fks__$1 = temp__5804__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (fk){
return filter_clause(new cljs.core.Keyword("metabase.lib.join","target","metabase.lib.join/target",203858838).cljs$core$IFn$_invoke$arity$1(fk),fk);
}),fks__$1);
} else {
return null;
}
}
});
metabase$lib$join$suggested_join_conditions = function(query,stage_number,joinable,position){
switch(arguments.length){
case 2:
return metabase$lib$join$suggested_join_conditions__2.call(this,query,stage_number);
case 3:
return metabase$lib$join$suggested_join_conditions__3.call(this,query,stage_number,joinable);
case 4:
return metabase$lib$join$suggested_join_conditions__4.call(this,query,stage_number,joinable,position);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$join$suggested_join_conditions.cljs$core$IFn$_invoke$arity$2 = metabase$lib$join$suggested_join_conditions__2;
metabase$lib$join$suggested_join_conditions.cljs$core$IFn$_invoke$arity$3 = metabase$lib$join$suggested_join_conditions__3;
metabase$lib$join$suggested_join_conditions.cljs$core$IFn$_invoke$arity$4 = metabase$lib$join$suggested_join_conditions__4;
return metabase$lib$join$suggested_join_conditions;
})()
;
metabase.lib.join.xform_add_join_alias = (function metabase$lib$join$xform_add_join_alias(metadata_providerable,a_join){
var join_alias = metabase.lib.join.util.current_join_alias(a_join);
return (function (xf){
var unique_name_fn = metabase.lib.util.unique_name_generator.cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable));
return (function() {
var G__78803 = null;
var G__78803__0 = (function (){
return (xf.cljs$core$IFn$_invoke$arity$0 ? xf.cljs$core$IFn$_invoke$arity$0() : xf.call(null));
});
var G__78803__1 = (function (result){
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(result) : xf.call(null,result));
});
var G__78803__2 = (function (result,input){
var col = input;
var col__$1 = metabase.lib.join.with_join_alias(col,join_alias);
var col__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(col__$1,new cljs.core.Keyword(null,"source-alias","source-alias",1652088724),join_alias);
var col__$3 = metabase.lib.join.add_source_and_desired_aliases(a_join,unique_name_fn,col__$2);
return (xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(result,col__$3) : xf.call(null,result,col__$3));
});
G__78803 = function(result,input){
switch(arguments.length){
case 0:
return G__78803__0.call(this);
case 1:
return G__78803__1.call(this,result);
case 2:
return G__78803__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__78803.cljs$core$IFn$_invoke$arity$0 = G__78803__0;
G__78803.cljs$core$IFn$_invoke$arity$1 = G__78803__1;
G__78803.cljs$core$IFn$_invoke$arity$2 = G__78803__2;
return G__78803;
})()
});
});
/**
 * Mark the column metadatas in `cols` as `:selected` if they appear in `a-join`'s `:fields`.
 */
metabase.lib.join.xform_mark_selected_joinable_columns = (function metabase$lib$join$xform_mark_selected_joinable_columns(a_join){
var j_fields = metabase.lib.join.join_fields(a_join);
var G__78705 = j_fields;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),G__78705)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__78702_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__78702_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true);
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"none","none",1333468478),G__78705)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__78703_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__78703_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__78705)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__78703_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__78703_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),false);
}));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__78704_SHARP_){
return metabase.lib.equality.mark_selected_columns.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__78704_SHARP_], null),j_fields);
}));

}
}
}
});
metabase.lib.join.xform_fix_source_for_joinable_columns = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__78706_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__78706_SHARP_,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","joins","source/joins",1225821486));
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int join-or-joinable :- JoinOrJoinable]
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Return information about the fields that you can pass to [[with-join-fields]] when constructing a join against
 *   something [[Joinable]] (i.e., a Table or Card) or manipulating an existing join. When passing in a join, currently
 *   selected columns (those in the join's `:fields`) will include `:selected true` information.
 */
metabase.lib.join.joinable_columns = (function metabase$lib$join$joinable_columns(query,stage_number,join_or_joinable){
var a_join = ((metabase.lib.join.join_QMARK_(join_or_joinable))?join_or_joinable:null);
var source = (cljs.core.truth_(a_join)?metabase.lib.join.joined_thing(query,join_or_joinable):join_or_joinable);
var cols = metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,source);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(a_join)?cljs.core.comp.cljs$core$IFn$_invoke$arity$3(metabase.lib.join.xform_fix_source_for_joinable_columns,metabase.lib.join.xform_add_join_alias(query,a_join),metabase.lib.join.xform_mark_selected_joinable_columns(a_join)):cljs.core.identity),cols);
});
metabase.lib.join.join_lhs_display_name_from_condition_lhs = (function metabase$lib$join$join_lhs_display_name_from_condition_lhs(query,stage_number,join_or_joinable,condition_lhs_column_or_nil){
var temp__5804__auto__ = (function (){var or__5002__auto__ = condition_lhs_column_or_nil;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(metabase.lib.join.join_QMARK_(join_or_joinable)){
return metabase.lib.join.standard_join_condition_lhs(cljs.core.first(metabase.lib.join.join_conditions(join_or_joinable)));
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var condition_lhs_column = temp__5804__auto__;
var display_info = metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,condition_lhs_column);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(display_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"display-name","display-name",694513143)], null));
} else {
return null;
}
});
/**
 * Whether a `join-or-joinable` is (or will be) the first join in a stage of a query.
 * 
 *   If a join is passed, we need to check whether it's the first join in the first stage of a source-table query or
 *   not.
 * 
 *   New joins get appended after any existing ones, so it would be safe to assume that if there are any other joins in
 *   the current stage, this **will not** be the first join in the stage.
 */
metabase.lib.join.first_join_QMARK_ = (function metabase$lib$join$first_join_QMARK_(query,stage_number,join_or_joinable){
var existing_joins = metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2(query,stage_number);
var or__5002__auto__ = cljs.core.empty_QMARK_(existing_joins);
if(or__5002__auto__){
return or__5002__auto__;
} else {
if(metabase.lib.join.join_QMARK_(join_or_joinable)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join_or_joinable),new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(cljs.core.first(existing_joins)));
} else {
return null;
}
}
});
metabase.lib.join.join_lhs_display_name_for_first_join_in_first_stage = (function metabase$lib$join$join_lhs_display_name_for_first_join_in_first_stage(query,stage_number,join_or_joinable){
if(cljs.core.truth_((function (){var and__5000__auto__ = (metabase.lib.util.canonical_stage_index(query,stage_number) === (0));
if(and__5000__auto__){
var and__5000__auto____$1 = metabase.lib.join.first_join_QMARK_(query,stage_number,join_or_joinable);
if(cljs.core.truth_(and__5000__auto____$1)){
return metabase.lib.util.source_table_id(query);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var table_id = metabase.lib.util.source_table_id(query);
var table = metabase.lib.metadata.table(query,table_id);
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,table);
} else {
return null;
}
});
/**
 * Inputs: ([query join-or-joinable]
 *         [query join-or-joinable condition-lhs-column-or-nil]
 *         [query :- :metabase.lib.schema/query stage-number :- :int join-or-joinable :- [:maybe JoinOrJoinable] condition-lhs-column-or-nil :- [:maybe [:or :metabase.lib.schema.metadata/column :mbql.clause/field]]])
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Get the display name for whatever we are joining. See #32015 and #32764 for screenshot examples.
 * 
 *   The rules, copied from MLv1, are as follows:
 * 
 *   1. If we have the LHS column for the first join condition, we should use display name for wherever it comes from. E.g.
 *   if the join is
 * 
 *   ```
 *   JOIN whatever ON orders.whatever_id = whatever.id
 *   ```
 * 
 *   then we should display the join like this:
 * 
 *  ```
 *  +--------+   +----------+    +-------------+    +----------+
 *  | Orders | + | Whatever | on | Orders      | =  | Whatever |
 *  |        |   |          |    | Whatever ID |    | ID       |
 *  +--------+   +----------+    +-------------+    +----------+
 *  ```
 * 
 *  1a. If `join-or-joinable` is a join, we can take the condition LHS column from the join itself, since a join will
 *      always have a condition. This should only apply to [[standard-join-condition?]] conditions.
 * 
 *  1b. When building a join, you can optionally pass in `condition-lhs-column-or-nil` yourself.
 * 
 *   2. If the condition LHS column is unknown, and this is the first join in the first stage of a query, and the query
 *   uses a `:source-table`, then use the display name for the source Table.
 * 
 *   3. Otherwise use `Previous results`.
 * 
 *   This function needs to be usable while we are in the process of constructing a join in the context of a given stage,
 *   but also needs to work for rendering existing joins. Pass a join in for existing joins, or something [[Joinable]]
 *   for ones we are currently building.
 */
metabase.lib.join.join_lhs_display_name = (function() {
var metabase$lib$join$join_lhs_display_name = null;
var metabase$lib$join$join_lhs_display_name__2 = (function (query,join_or_joinable){
return (metabase.lib.join.join_lhs_display_name.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.join.join_lhs_display_name.cljs$core$IFn$_invoke$arity$3(query,join_or_joinable,null) : metabase.lib.join.join_lhs_display_name.call(null,query,join_or_joinable,null));
});
var metabase$lib$join$join_lhs_display_name__3 = (function (query,join_or_joinable,condition_lhs_column_or_nil){
return (metabase.lib.join.join_lhs_display_name.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.join.join_lhs_display_name.cljs$core$IFn$_invoke$arity$4(query,(-1),join_or_joinable,condition_lhs_column_or_nil) : metabase.lib.join.join_lhs_display_name.call(null,query,(-1),join_or_joinable,condition_lhs_column_or_nil));
});
var metabase$lib$join$join_lhs_display_name__4 = (function (query,stage_number,join_or_joinable,condition_lhs_column_or_nil){
var or__5002__auto__ = metabase.lib.join.join_lhs_display_name_from_condition_lhs(query,stage_number,join_or_joinable,condition_lhs_column_or_nil);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = metabase.lib.join.join_lhs_display_name_for_first_join_in_first_stage(query,stage_number,join_or_joinable);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return metabase.shared.util.i18n.js_i18n("Previous results");
}
}
});
metabase$lib$join$join_lhs_display_name = function(query,stage_number,join_or_joinable,condition_lhs_column_or_nil){
switch(arguments.length){
case 2:
return metabase$lib$join$join_lhs_display_name__2.call(this,query,stage_number);
case 3:
return metabase$lib$join$join_lhs_display_name__3.call(this,query,stage_number,join_or_joinable);
case 4:
return metabase$lib$join$join_lhs_display_name__4.call(this,query,stage_number,join_or_joinable,condition_lhs_column_or_nil);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$join$join_lhs_display_name.cljs$core$IFn$_invoke$arity$2 = metabase$lib$join$join_lhs_display_name__2;
metabase$lib$join$join_lhs_display_name.cljs$core$IFn$_invoke$arity$3 = metabase$lib$join$join_lhs_display_name__3;
metabase$lib$join$join_lhs_display_name.cljs$core$IFn$_invoke$arity$4 = metabase$lib$join$join_lhs_display_name__4;
return metabase$lib$join$join_lhs_display_name;
})()
;
/**
 * Inputs: ([query :- :metabase.lib.schema/query join-condition :- [:or :metabase.lib.schema.expression/boolean :metabase.lib.schema.common/external-op] option-or-unit :- [:maybe [:or :metabase.lib.schema.temporal-bucketing/option :metabase.lib.schema.temporal-bucketing/unit]]]
 *         [query :- :metabase.lib.schema/query stage-number :- :int join-condition :- [:or :metabase.lib.schema.expression/boolean :metabase.lib.schema.common/external-op] option-or-unit :- [:maybe [:or :metabase.lib.schema.temporal-bucketing/option :metabase.lib.schema.temporal-bucketing/unit]]])
 *   Return: :metabase.lib.schema.expression/boolean
 *        
 * 
 *   Updates the provided join-condition's fields' temporal-bucketing option, returns the updated join-condition.
 * Must be called on a standard join condition as per [[standard-join-condition?]].
 * This will sync both the lhs and rhs fields, and the fields that support the provided option will be updated.
 * Fields that do not support the provided option will be ignored.
 */
metabase.lib.join.join_condition_update_temporal_bucketing = (function() {
var metabase$lib$join$join_condition_update_temporal_bucketing = null;
var metabase$lib$join$join_condition_update_temporal_bucketing__3 = (function (query,join_condition,option_or_unit){
return (metabase.lib.join.join_condition_update_temporal_bucketing.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.join.join_condition_update_temporal_bucketing.cljs$core$IFn$_invoke$arity$4(query,(-1),join_condition,option_or_unit) : metabase.lib.join.join_condition_update_temporal_bucketing.call(null,query,(-1),join_condition,option_or_unit));
});
var metabase$lib$join$join_condition_update_temporal_bucketing__4 = (function (query,stage_number,join_condition,option_or_unit){
var vec__78707 = metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(join_condition);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78707,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78707,(1),null);
var lhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78707,(2),null);
var rhs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78707,(3),null);
var join_condition__$1 = vec__78707;
if(cljs.core.truth_(metabase.lib.join.standard_join_condition_QMARK_(join_condition__$1))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Non-standard join condition. {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([join_condition__$1], 0))], 0))),"\n","(standard-join-condition? join-condition)"].join('')));
}

var unit = (function (){var G__78710 = option_or_unit;
if((!((option_or_unit instanceof cljs.core.Keyword)))){
return new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__78710);
} else {
return G__78710;
}
})();
var stage_number__$1 = metabase.lib.util.canonical_stage_index(query,stage_number);
var available_lhs = metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3(query,stage_number__$1,lhs);
var available_rhs = metabase.lib.temporal_bucket.available_temporal_buckets.cljs$core$IFn$_invoke$arity$3(query,stage_number__$1,rhs);
var sync_lhs_QMARK_ = (((unit == null)) || (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175),available_lhs)),unit)));
var sync_rhs_QMARK_ = (((unit == null)) || (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175),available_rhs)),unit)));
var G__78711 = join_condition__$1;
var G__78711__$1 = ((sync_lhs_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__78711,(2),metabase.lib.temporal_bucket.with_temporal_bucket,unit):G__78711);
if(sync_rhs_QMARK_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__78711__$1,(3),metabase.lib.temporal_bucket.with_temporal_bucket,unit);
} else {
return G__78711__$1;
}
});
metabase$lib$join$join_condition_update_temporal_bucketing = function(query,stage_number,join_condition,option_or_unit){
switch(arguments.length){
case 3:
return metabase$lib$join$join_condition_update_temporal_bucketing__3.call(this,query,stage_number,join_condition);
case 4:
return metabase$lib$join$join_condition_update_temporal_bucketing__4.call(this,query,stage_number,join_condition,option_or_unit);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$join$join_condition_update_temporal_bucketing.cljs$core$IFn$_invoke$arity$3 = metabase$lib$join$join_condition_update_temporal_bucketing__3;
metabase$lib$join$join_condition_update_temporal_bucketing.cljs$core$IFn$_invoke$arity$4 = metabase$lib$join$join_condition_update_temporal_bucketing__4;
return metabase$lib$join$join_condition_update_temporal_bucketing;
})()
;
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"joins","joins",1033962699),(function (query,stage_number,_key){
var G__78713 = cljs.core.not_empty(metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2(query,stage_number));
var G__78713__$1 = (((G__78713 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__78712_SHARP_){
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,p1__78712_SHARP_);
}),G__78713));
if((G__78713__$1 == null)){
return null;
} else {
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" + ",G__78713__$1);
}
}));

//# sourceMappingURL=metabase.lib.join.js.map
