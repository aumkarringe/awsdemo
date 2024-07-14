var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$crc_32.js");
require("./clojure.set.js");
require("./clojure.string.js");
require("./medley.core.js");
require("./metabase.legacy_mbql.util.js");
require("./metabase.lib.common.js");
require("./metabase.lib.database.methods.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.protocols.js");
require("./metabase.lib.options.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.ref.js");
require("./metabase.lib.util.match.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.util.js");

goog.provide('metabase.lib.util');
/**
 * Exactly like [[clojure.core/format]] but ClojureScript-friendly.
 */
metabase.lib.util.format = goog.string.format;
/**
 * Returns true if this is a clause.
 */
metabase.lib.util.clause_QMARK_ = (function metabase$lib$util$clause_QMARK_(clause){
var and__5000__auto__ = cljs.core.vector_QMARK_(clause);
if(and__5000__auto__){
var and__5000__auto____$1 = (cljs.core.first(clause) instanceof cljs.core.Keyword);
if(and__5000__auto____$1){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clause,(1));
return ((cljs.core.map_QMARK_(opts)) && (cljs.core.contains_QMARK_(opts,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
/**
 * Returns true if this is a clause.
 */
metabase.lib.util.clause_of_type_QMARK_ = (function metabase$lib$util$clause_of_type_QMARK_(clause,clause_type){
return ((metabase.lib.util.clause_QMARK_(clause)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clause),clause_type)));
});
/**
 * Returns true if this is a field clause.
 */
metabase.lib.util.field_clause_QMARK_ = (function metabase$lib$util$field_clause_QMARK_(clause){
return metabase.lib.util.clause_of_type_QMARK_(clause,new cljs.core.Keyword(null,"field","field",-1302436500));
});
/**
 * Returns true if this is any sort of reference clause
 */
metabase.lib.util.ref_clause_QMARK_ = (function metabase$lib$util$ref_clause_QMARK_(clause){
return ((metabase.lib.util.clause_QMARK_(clause)) && (metabase.lib.hierarchy.isa_QMARK_(cljs.core.first(clause),new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498))));
});
/**
 * Returns whether the type of `expression` isa? `typ`.
 * If the expression has an original-effective-type due to bucketing, check that.
 */
metabase.lib.util.original_isa_QMARK_ = (function metabase$lib$util$original_isa_QMARK_(expression,typ){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = (function (){var and__5000__auto__ = metabase.lib.util.clause_QMARK_(expression);
if(and__5000__auto__){
return new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372).cljs$core$IFn$_invoke$arity$1(cljs.core.second(expression));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.schema.expression.type_of(expression);
}
})(),typ);
});
/**
 * Returns the :lib/expression-name of `clause`. Returns nil if `clause` is not a clause.
 */
metabase.lib.util.expression_name = (function metabase$lib$util$expression_name(clause){
if(metabase.lib.util.clause_QMARK_(clause)){
return new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(clause));
} else {
return null;
}
});
/**
 * Top level expressions must be clauses with :lib/expression-name, so if we get a literal, wrap it in :value.
 */
metabase.lib.util.top_level_expression_clause = (function metabase$lib$util$top_level_expression_clause(clause,a_name){
return metabase.lib.options.update_options(((metabase.lib.util.clause_QMARK_(clause))?clause:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),metabase.lib.schema.expression.type_of(clause)], null),clause], null)),(function (opts){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590),a_name),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display-name","display-name",694513143)], 0));
}));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.util !== 'undefined') && (typeof metabase.lib.util.custom_name_method !== 'undefined')){
} else {
/**
 * Implementation for [[custom-name]].
 */
metabase.lib.util.custom_name_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76456 = cljs.core.get_global_hierarchy;
return (fexpr__76456.cljs$core$IFn$_invoke$arity$0 ? fexpr__76456.cljs$core$IFn$_invoke$arity$0() : fexpr__76456.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.util","custom-name-method"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
/**
 * Return the user supplied name of `x`, if any.
 */
metabase.lib.util.custom_name = (function metabase$lib$util$custom_name(x){
return metabase.lib.util.custom_name_method.cljs$core$IFn$_invoke$arity$1(x);
});
metabase.lib.util.custom_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if(metabase.lib.util.clause_QMARK_(x)){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590))(metabase.lib.options.options(x));
} else {
return null;
}
}));
/**
 * Replace the `target-clause` in `stage` `location` with `new-clause`.
 * If a clause has :lib/uuid equal to the `target-clause` it is swapped with `new-clause`.
 * If `location` contains no clause with `target-clause` no replacement happens.
 */
metabase.lib.util.replace_clause = (function metabase$lib$util$replace_clause(stage,location,target_clause,new_clause){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.clause_QMARK_,(function (p1__76463_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(p1__76463_SHARP_),new cljs.core.Keyword("mbql","join","mbql/join",-709512370));
}))(target_clause))){
} else {
throw (new Error("Assert failed: ((some-fn clause? (fn* [p1__76463#] (= (:lib/type p1__76463#) :mbql/join))) target-clause)"));
}

var new_clause__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expressions","expressions",255689909),cljs.core.first(location)))?metabase.lib.util.top_level_expression_clause(new_clause,(function (){var or__5002__auto__ = metabase.lib.util.custom_name(new_clause);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.util.expression_name(target_clause);
}
})()):new_clause);
return medley.core.update_existing_in(stage,location,(function (clause_or_clauses){
return cljs.core.vec((function (){var iter__5480__auto__ = (function metabase$lib$util$replace_clause_$_iter__76467(s__76468){
return (new cljs.core.LazySeq(null,(function (){
var s__76468__$1 = s__76468;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76468__$1);
if(temp__5804__auto__){
var s__76468__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76468__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76468__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76470 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76469 = (0);
while(true){
if((i__76469 < size__5479__auto__)){
var clause = cljs.core._nth(c__5478__auto__,i__76469);
cljs.core.chunk_append(b__76470,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.options.uuid(clause),metabase.lib.options.uuid(target_clause)))?new_clause__$1:clause));

var G__76657 = (i__76469 + (1));
i__76469 = G__76657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76470),metabase$lib$util$replace_clause_$_iter__76467(cljs.core.chunk_rest(s__76468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76470),null);
}
} else {
var clause = cljs.core.first(s__76468__$2);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.options.uuid(clause),metabase.lib.options.uuid(target_clause)))?new_clause__$1:clause),metabase$lib$util$replace_clause_$_iter__76467(cljs.core.rest(s__76468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(clause_or_clauses);
})());
}));
});
/**
 * Remove the `target-clause` in `stage` `location`.
 * If a clause has :lib/uuid equal to the `target-clause` it is removed.
 * If `location` contains no clause with `target-clause` no removal happens.
 * If the the location is empty, dissoc it from stage.
 * For the [:fields] location if only expressions remain, dissoc from stage.
 */
metabase.lib.util.remove_clause = (function metabase$lib$util$remove_clause(stage,location,target_clause,stage_number){
if(metabase.lib.util.clause_QMARK_(target_clause)){
} else {
throw (new Error("Assert failed: (clause? target-clause)"));
}

var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,location);
if(cljs.core.truth_(temp__5802__auto__)){
var target = temp__5802__auto__;
var target_uuid = metabase.lib.options.uuid(target_clause);
var vec__76484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(location),cljs.core.last(location)], null);
var first_loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76484,(0),null);
var last_loc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76484,(1),null);
var result = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([target_uuid]),metabase.lib.options.uuid)),target);
var result__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null))) && (cljs.core.every_QMARK_((function (p1__76481_SHARP_){
return metabase.lib.util.clause_of_type_QMARK_(p1__76481_SHARP_,new cljs.core.Keyword(null,"expression","expression",202311876));
}),result))))?null:result);
if(cljs.core.seq(result__$1)){
return cljs.core.assoc_in(stage,location,result__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_loc,last_loc], null))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n("Cannot remove the final join condition"),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("metabase.lib.util","cannot-remove-final-join-condition","metabase.lib.util/cannot-remove-final-join-condition",-470911224),new cljs.core.Keyword(null,"conditions","conditions",-1647236270),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,location),new cljs.core.Keyword(null,"join","join",-758861890),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,cljs.core.pop(location)),new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number,new cljs.core.Keyword(null,"stage","stage",1843544772),stage], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_loc,last_loc], null))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(stage,cljs.core.pop(location),cljs.core.dissoc,last_loc);
} else {
return medley.core.dissoc_in.cljs$core$IFn$_invoke$arity$2(stage,location);

}
}
}
} else {
return stage;
}
});
/**
 * Convert a `:type` `:native` QP MBQL query to a pMBQL query. See docstring for [[mbql-query->pipeline]] for an
 *   explanation of what this means.
 */
metabase.lib.util.native_query__GT_pipeline = (function metabase$lib$util$native_query__GT_pipeline(query){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194)], null),clojure.set.rename_keys(new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(query),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"native","native",-613060878)], null))], 0))], null)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(query,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"native","native",-613060878)], 0))], 0));
});
/**
 * Updates m with a legacy boolean expression at `legacy-key` into a list with an implied and for pMBQL at `pMBQL-key`
 */
metabase.lib.util.update_legacy_boolean_expression__GT_list = (function metabase$lib$util$update_legacy_boolean_expression__GT_list(m,legacy_key,pMBQL_key){
var G__76495 = m;
var G__76495__$1 = ((cljs.core.contains_QMARK_(m,legacy_key))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76495,legacy_key,(function (p1__76493_SHARP_){
if(((cljs.core.vector_QMARK_(p1__76493_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__76493_SHARP_),new cljs.core.Keyword(null,"and","and",-971899817))))){
return cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),p1__76493_SHARP_));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__76493_SHARP_], null);
}
})):G__76495);
if(cljs.core.contains_QMARK_(m,legacy_key)){
return clojure.set.rename_keys(G__76495__$1,cljs.core.PersistentArrayMap.createAsIfByAssoc([legacy_key,pMBQL_key]));
} else {
return G__76495__$1;
}
});
metabase.lib.util.join__GT_pipeline = (function metabase$lib$util$join__GT_pipeline(join){
var source = cljs.core.select_keys(join,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"source-query","source-query",198004422)], null));
var stages = (metabase.lib.util.inner_query__GT_stages.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.util.inner_query__GT_stages.cljs$core$IFn$_invoke$arity$1(source) : metabase.lib.util.inner_query__GT_stages.call(null,source));
return metabase.lib.options.ensure_uuid(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.util.update_legacy_boolean_expression__GT_list(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(join,new cljs.core.Keyword(null,"source-table","source-table",-225307692),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"source-query","source-query",198004422)], 0)),new cljs.core.Keyword(null,"condition","condition",1668437652),new cljs.core.Keyword(null,"conditions","conditions",-1647236270)),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","join","mbql/join",-709512370),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stages","stages",-442109532),stages], 0)));
});
metabase.lib.util.joins__GT_pipeline = (function metabase$lib$util$joins__GT_pipeline(joins){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.join__GT_pipeline,joins);
});
/**
 * Convert legacy `:source-metadata` to [[metabase.lib.metadata/StageMetadata]].
 */
metabase.lib.util.__GT_stage_metadata = (function metabase$lib$util$__GT_stage_metadata(source_metadata){
if(cljs.core.truth_(source_metadata)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(((cljs.core.seqable_QMARK_(source_metadata))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"columns","columns",1998437288),source_metadata], null):source_metadata),new cljs.core.Keyword(null,"columns","columns",1998437288),(function (columns){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (column){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_keys(column,metabase.util.__GT_kebab_case_en),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054));
}),columns);
})),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","results","metadata/results",330329298));
} else {
return null;
}
});
metabase.lib.util.inner_query__GT_stages = (function metabase$lib$util$inner_query__GT_stages(p__76496){
var map__76497 = p__76496;
var map__76497__$1 = cljs.core.__destructure_map(map__76497);
var inner_query = map__76497__$1;
var source_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76497__$1,new cljs.core.Keyword(null,"source-query","source-query",198004422));
var source_metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76497__$1,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085));
var previous_stages = (cljs.core.truth_(source_query)?(metabase.lib.util.inner_query__GT_stages.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.util.inner_query__GT_stages.cljs$core$IFn$_invoke$arity$1(source_query) : metabase.lib.util.inner_query__GT_stages.call(null,source_query)):cljs.core.PersistentVector.EMPTY);
var source_metadata__$1 = metabase.lib.util.__GT_stage_metadata(source_metadata);
var previous_stage = (cljs.core.count(previous_stages) - (1));
var previous_stages__$1 = (function (){var G__76498 = previous_stages;
if(cljs.core.truth_((function (){var and__5000__auto__ = source_metadata__$1;
if(cljs.core.truth_(and__5000__auto__)){
return (!((previous_stage < (0))));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.assoc_in(G__76498,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [previous_stage,new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610)], null),source_metadata__$1);
} else {
return G__76498;
}
})();
var stage_type = (cljs.core.truth_(new cljs.core.Keyword(null,"native","native",-613060878).cljs$core$IFn$_invoke$arity$1(inner_query))?new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194):new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798));
var this_stage = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","type","lib/type",1175424801),stage_type], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(inner_query,new cljs.core.Keyword(null,"source-query","source-query",198004422),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085)], 0))], 0));
var this_stage__$1 = (function (){var G__76499 = this_stage;
var G__76499__$1 = ((cljs.core.seq(new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(this_stage)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76499,new cljs.core.Keyword(null,"joins","joins",1033962699),metabase.lib.util.joins__GT_pipeline):G__76499);
return metabase.lib.util.update_legacy_boolean_expression__GT_list(G__76499__$1,new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"filters","filters",974726919));

})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(previous_stages__$1,this_stage__$1);
});
/**
 * Convert a `:type` `:query` QP MBQL (i.e., MBQL as currently understood by the Query Processor, or the JS MLv1) to a
 *   pMBQL query. The key difference is that instead of having a `:query` with a `:source-query` with a `:source-query`
 *   and so forth, you have a vector of `:stages` where each stage serves as the source query for the next stage.
 *   Initially this was an implementation detail of a few functions, but it's easier to visualize and manipulate, so now
 *   all of MLv2 deals with pMBQL. See this Slack thread
 *   https://metaboat.slack.com/archives/C04DN5VRQM6/p1677118410961169?thread_ts=1677112778.742589&cid=C04DN5VRQM6 for
 *   more information.
 */
metabase.lib.util.mbql_query__GT_pipeline = (function metabase$lib$util$mbql_query__GT_pipeline(query){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),new cljs.core.Keyword(null,"stages","stages",-442109532),metabase.lib.util.inner_query__GT_stages(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(query))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(query,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"query","query",-1288509510)], 0))], 0));
});
/**
 * Schema for a map that is either a legacy query OR a pMBQL query.
 */
metabase.lib.util.LegacyOrPMBQLQuery = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"legacy query"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"pMBQL query"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662)], null)], null)], null)], null);
/**
 * Inputs: [query :- LegacyOrPMBQLQuery]
 *   Return: :any
 *        
 * 
 *   Ensure that a `query` is in the general shape of a pMBQL query. This doesn't walk the query and fix everything! The
 *   goal here is just to make sure we have `:stages` in the correct place and the like. See [[metabase.lib.convert]] for
 *   functions that actually ensure all parts of the query match the pMBQL schema (they use this function as part of that
 *   process.)
 */
metabase.lib.util.pipeline = (function metabase$lib$util$pipeline(query){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(query),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662))){
return query;
} else {
var G__76500 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(query);
var G__76500__$1 = (((G__76500 instanceof cljs.core.Keyword))?G__76500.fqn:null);
switch (G__76500__$1) {
case "native":
return metabase.lib.util.native_query__GT_pipeline(query);

break;
case "query":
return metabase.lib.util.mbql_query__GT_pipeline(query);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76500__$1)].join('')));

}
}
});
/**
 * Inputs: [{:keys [stages], :as _query} :- :map stage-number :- :int]
 *   Return: [:int {:min 0}]
 *        
 * 
 *   If `stage-number` index is a negative number e.g. `-1` convert it to a positive index so we can use `nth` on
 *   `stages`. `-1` = the last stage, `-2` = the penultimate stage, etc.
 */
metabase.lib.util.canonical_stage_index = (function metabase$lib$util$canonical_stage_index(p__76501,stage_number){
var map__76502 = p__76501;
var map__76502__$1 = cljs.core.__destructure_map(map__76502);
var _query = map__76502__$1;
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76502__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
var stage_number_SINGLEQUOTE_ = (((stage_number < (0)))?(cljs.core.count(stages) + stage_number):stage_number);
if((((stage_number_SINGLEQUOTE_ >= cljs.core.count(stages))) || ((stage_number_SINGLEQUOTE_ < (0))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Stage {0} does not exist",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stage_number], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-stages","num-stages",1426797535),cljs.core.count(stages)], null));
} else {
}

return stage_number_SINGLEQUOTE_;
});
/**
 * Inputs: [query :- :map stage-number :- :int]
 *   Return: [:maybe [:int {:min 0}]]
 *        
 * 
 *   The index of the previous stage, if there is one. `nil` if there is no previous stage.
 */
metabase.lib.util.previous_stage_number = (function metabase$lib$util$previous_stage_number(query,stage_number){
var stage_number__$1 = metabase.lib.util.canonical_stage_index(query,stage_number);
if((stage_number__$1 > (0))){
return (stage_number__$1 - (1));
} else {
return null;
}
});
/**
 * Whether a `stage-number` is referring to the first stage of a query or not.
 */
metabase.lib.util.first_stage_QMARK_ = (function metabase$lib$util$first_stage_QMARK_(query,stage_number){
return cljs.core.not(metabase.lib.util.previous_stage_number(query,stage_number));
});
/**
 * Inputs: [{:keys [stages], :as _query} :- :map stage-number :- :int]
 *   Return: [:maybe :int]
 *        
 * 
 *   The index of the next stage, if there is one. `nil` if there is no next stage.
 */
metabase.lib.util.next_stage_number = (function metabase$lib$util$next_stage_number(p__76503,stage_number){
var map__76504 = p__76503;
var map__76504__$1 = cljs.core.__destructure_map(map__76504);
var _query = map__76504__$1;
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76504__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
var stage_number__$1 = (((stage_number < (0)))?(cljs.core.count(stages) + stage_number):stage_number);
if(((stage_number__$1 + (1)) < cljs.core.count(stages))){
return (stage_number__$1 + (1));
} else {
return null;
}
});
/**
 * Inputs: [query :- LegacyOrPMBQLQuery stage-number :- :int]
 *   Return: [:maybe :metabase.lib.schema/stage]
 *        
 * 
 *   Fetch a specific `stage` of a query. This handles negative indices as well, e.g. `-1` will return the last stage of
 *   the query.
 */
metabase.lib.util.query_stage = (function metabase$lib$util$query_stage(query,stage_number){
var map__76505 = metabase.lib.util.pipeline(query);
var map__76505__$1 = cljs.core.__destructure_map(map__76505);
var query__$1 = map__76505__$1;
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76505__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(stages),metabase.lib.util.canonical_stage_index(query__$1,stage_number));
});
/**
 * Inputs: [query stage-number :- :int]
 *   Return: [:maybe :metabase.lib.schema/stage]
 *        
 * 
 *   Return the previous stage of the query, if there is one; otherwise return `nil`.
 */
metabase.lib.util.previous_stage = (function metabase$lib$util$previous_stage(query,stage_number){
var temp__5804__auto__ = metabase.lib.util.previous_stage_number(query,stage_number);
if(cljs.core.truth_(temp__5804__auto__)){
var stage_num = temp__5804__auto__;
return metabase.lib.util.query_stage(query,stage_num);
} else {
return null;
}
});
/**
 * Inputs: [query :- LegacyOrPMBQLQuery stage-number :- :int f & args]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Update a specific `stage-number` of a `query` by doing
 * 
 *  (apply f stage args)
 * 
 *   `stage-number` can be a negative index, e.g. `-1` will update the last stage of the query.
 * @param {...*} var_args
 */
metabase.lib.util.update_query_stage = (function() { 
var metabase$lib$util$update_query_stage__delegate = function (query,stage_number,f,args){
var map__76506 = metabase.lib.util.pipeline(query);
var map__76506__$1 = cljs.core.__destructure_map(map__76506);
var query__$1 = map__76506__$1;
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76506__$1,new cljs.core.Keyword(null,"stages","stages",-442109532));
var stage_number_SINGLEQUOTE_ = metabase.lib.util.canonical_stage_index(query__$1,stage_number);
var stages_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,cljs.core.vec(stages),stage_number_SINGLEQUOTE_,f,args);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(query__$1,new cljs.core.Keyword(null,"stages","stages",-442109532),stages_SINGLEQUOTE_);
};
var metabase$lib$util$update_query_stage = function (query,stage_number,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__76680__i = 0, G__76680__a = new Array(arguments.length -  3);
while (G__76680__i < G__76680__a.length) {G__76680__a[G__76680__i] = arguments[G__76680__i + 3]; ++G__76680__i;}
  args = new cljs.core.IndexedSeq(G__76680__a,0,null);
} 
return metabase$lib$util$update_query_stage__delegate.call(this,query,stage_number,f,args);};
metabase$lib$util$update_query_stage.cljs$lang$maxFixedArity = 3;
metabase$lib$util$update_query_stage.cljs$lang$applyTo = (function (arglist__76681){
var query = cljs.core.first(arglist__76681);
arglist__76681 = cljs.core.next(arglist__76681);
var stage_number = cljs.core.first(arglist__76681);
arglist__76681 = cljs.core.next(arglist__76681);
var f = cljs.core.first(arglist__76681);
var args = cljs.core.rest(arglist__76681);
return metabase$lib$util$update_query_stage__delegate(query,stage_number,f,args);
});
metabase$lib$util$update_query_stage.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$util$update_query_stage__delegate;
return metabase$lib$util$update_query_stage;
})()
;
/**
 * Inputs: [query]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Convert query to a pMBQL (pipeline) query, and make sure the final stage is an `:mbql` one.
 */
metabase.lib.util.ensure_mbql_final_stage = (function metabase$lib$util$ensure_mbql_final_stage(query){
var query__$1 = metabase.lib.util.pipeline(query);
var G__76507 = query__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query__$1,(-1))),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__76507,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798)], null));
} else {
return G__76507;
}
});
/**
 * This is basically [[clojure.string/join]] but uses commas to join everything but the last two args, which are joined
 *   by a string `conjunction`. Uses Oxford commas for > 2 args.
 * 
 *   (join-strings-with-conjunction "and" ["X" "Y" "Z"])
 *   ;; => "X, Y, and Z"
 */
metabase.lib.util.join_strings_with_conjunction = (function metabase$lib$util$join_strings_with_conjunction(conjunction,coll){
if(cljs.core.seq(coll)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1))){
return cljs.core.first(coll);
} else {
var conjunction__$1 = [" ",clojure.string.trim(conjunction)," "].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(2))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(coll)),conjunction__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(coll))].join('');
} else {
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.butlast(coll)),",",conjunction__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(coll))].join('');
}
}
} else {
return null;
}
});
/**
 * Length to truncate column and table identifiers to. See [[metabase.driver.impl/default-alias-max-length-bytes]] for
 *   reasoning.
 */
metabase.lib.util.truncate_alias_max_length_bytes = (60);
/**
 * Length of the hash suffixed to truncated strings by [[truncate-alias]].
 */
metabase.lib.util.truncated_alias_hash_suffix_length = (9);
/**
 * Inputs: [s :- :string]
 *   Return: [:string {:min 8, :max 8}]
 *        
 * 
 *   Return a 4-byte CRC-32 checksum of string `s`, encoded as an 8-character hex string.
 */
metabase.lib.util.crc32_checksum = (function metabase$lib$util$crc32_checksum(s){
var s__$1 = (shadow.js.shim.module$crc_32.str(s,(0)) >>> (0)).toString((16));
var s__$2 = s__$1;
while(true){
if((cljs.core.count(s__$2) < (8))){
var G__76689 = ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$2)].join('');
s__$2 = G__76689;
continue;
} else {
return s__$2;
}
break;
}
});
/**
 * Inputs: ([s]
 *         [s :- :metabase.lib.schema.common/non-blank-string max-bytes :- [:int {:min 0}]])
 *   Return: [:string {:min 1, :max 60}]
 *        
 * 
 *   Truncate string `s` if it is longer than [[truncate-alias-max-length-bytes]] and append a hex-encoded CRC-32
 *   checksum of the original string. Truncated string is truncated to [[truncate-alias-max-length-bytes]]
 *   minus [[truncated-alias-hash-suffix-length]] characters so the resulting string is
 *   exactly [[truncate-alias-max-length-bytes]]. The goal here is that two really long strings that only differ at the
 *   end will still have different resulting values.
 * 
 *  (truncate-alias "some_really_long_string" 15) ;   -> "some_r_8e0f9bc2"
 *  (truncate-alias "some_really_long_string_2" 15) ; -> "some_r_2a3c73eb"
 */
metabase.lib.util.truncate_alias = (function() {
var metabase$lib$util$truncate_alias = null;
var metabase$lib$util$truncate_alias__1 = (function (s){
return (metabase.lib.util.truncate_alias.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.util.truncate_alias.cljs$core$IFn$_invoke$arity$2(s,metabase.lib.util.truncate_alias_max_length_bytes) : metabase.lib.util.truncate_alias.call(null,s,metabase.lib.util.truncate_alias_max_length_bytes));
});
var metabase$lib$util$truncate_alias__2 = (function (s,max_bytes){
if((metabase.util.string_byte_count(s) <= max_bytes)){
return s;
} else {
var checksum = metabase.lib.util.crc32_checksum(s);
var truncated = metabase.util.truncate_string_to_byte_count(s,(max_bytes - metabase.lib.util.truncated_alias_hash_suffix_length));
return [truncated,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(checksum)].join('');
}
});
metabase$lib$util$truncate_alias = function(s,max_bytes){
switch(arguments.length){
case 1:
return metabase$lib$util$truncate_alias__1.call(this,s);
case 2:
return metabase$lib$util$truncate_alias__2.call(this,s,max_bytes);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$util$truncate_alias.cljs$core$IFn$_invoke$arity$1 = metabase$lib$util$truncate_alias__1;
metabase$lib$util$truncate_alias.cljs$core$IFn$_invoke$arity$2 = metabase$lib$util$truncate_alias__2;
return metabase$lib$util$truncate_alias;
})()
;
/**
 * Inputs: [table-id]
 *   Return: [:maybe :metabase.lib.schema.id/card]
 *        
 * 
 *   If `table-id` is a legacy `card__<id>`-style string, parse the `<id>` part to an integer Card ID. Only for legacy
 *   queries! You don't need to use this in pMBQL since this is converted automatically by [[metabase.lib.convert]] to
 *   `:source-card`.
 */
metabase.lib.util.legacy_string_table_id__GT_card_id = (function metabase$lib$util$legacy_string_table_id__GT_card_id(table_id){
if(typeof table_id === 'string'){
var temp__5804__auto__ = cljs.core.re_find(/^card__(\d+)$/,table_id);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__76515 = temp__5804__auto__;
var _match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76515,(0),null);
var card_id_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76515,(1),null);
return cljs.core.parse_long(card_id_str);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [query]
 *   Return: [:maybe :metabase.lib.schema.id/table]
 *        
 * 
 *   If this query has a `:source-table` ID, return it.
 */
metabase.lib.util.source_table_id = (function metabase$lib$util$source_table_id(query){
return new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query)));
});
/**
 * Inputs: [query]
 *   Return: [:maybe :metabase.lib.schema.id/card]
 *        
 * 
 *   If this query has a `:source-card` ID, return it.
 */
metabase.lib.util.source_card_id = (function metabase$lib$util$source_card_id(query){
return new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query)));
});
/**
 * Inputs: [query :- :map]
 *   Return: [:maybe [:enum :mbql.stage/mbql :mbql.stage/native]]
 *        
 * 
 *   Type of the first query stage.
 */
metabase.lib.util.first_stage_type = (function metabase$lib$util$first_stage_type(query){
return new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,(0)));
});
/**
 * Inputs: [query :- :map]
 *   Return: :boolean
 *        
 * 
 *   Whether the first stage of the query is a native query stage.
 */
metabase.lib.util.first_stage_is_native_QMARK_ = (function metabase$lib$util$first_stage_is_native_QMARK_(query){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.first_stage_type(query),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194));
});
/**
 * Inputs: [database :- [:maybe :metabase.lib.schema.metadata/database] s :- :string]
 *   Return: :string
 */
metabase.lib.util.escape_and_truncate = (function metabase$lib$util$escape_and_truncate(database,s){
return metabase.lib.util.truncate_alias.cljs$core$IFn$_invoke$arity$1(metabase.lib.database.methods$.escape_alias(database,s));
});
/**
 * Inputs: [database :- [:maybe :metabase.lib.schema.metadata/database] original :- :string suffix :- :string]
 *   Return: :string
 */
metabase.lib.util.unique_alias = (function metabase$lib$util$unique_alias(database,original,suffix){
return metabase.lib.util.escape_and_truncate(database,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(original),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join(''));
});
/**
 * Inputs: ([metadata-provider :- [:maybe :metabase.lib.schema.metadata/metadata-provider]]
 *         [metadata-provider :- [:maybe :metabase.lib.schema.metadata/metadata-provider] existing-names :- [:sequential :string]])
 *   Return: [:function
 *         [:=> [:cat :string] :metabase.lib.schema.common/non-blank-string]
 *         [:=> [:cat :any :string] :metabase.lib.schema.common/non-blank-string]]
 *        
 * 
 *   Create a new function with the signature
 * 
 *  (f str) => str
 * 
 *   or
 * 
 * (f id str) => str
 * 
 *   That takes any sort of string identifier (e.g. a column alias or table/join alias) and returns a guaranteed-unique
 *   name truncated to 60 characters (actually 51 characters plus a hash).
 * 
 *   Optionally takes a list of names which are already defined, "priming" the generator with eg. all the column names
 *   that currently exist on a stage of the query.
 * 
 *   The two-arity version of the returned function can be used for idempotence. See docstring
 *   for [[metabase.legacy-mbql.util/unique-name-generator]] for more information.
 */
metabase.lib.util.unique_name_generator = (function() {
var metabase$lib$util$unique_name_generator = null;
var metabase$lib$util$unique_name_generator__1 = (function (metadata_provider){
var database = (function (){var G__76537 = metadata_provider;
if((G__76537 == null)){
return null;
} else {
return metabase.lib.metadata.protocols.database(G__76537);
}
})();
var uniqify = metabase.legacy_mbql.util.unique_name_generator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name-key-fn","name-key-fn",-1634839199),metabase.util.lower_case_en,new cljs.core.Keyword(null,"unique-alias-fn","unique-alias-fn",32555420),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.unique_alias,database)], 0));
return (function() {
var metabase$lib$util$unique_name_generator_$_unique_name_generator_fn = null;
var metabase$lib$util$unique_name_generator_$_unique_name_generator_fn__1 = (function (s){
return metabase.lib.util.truncate_alias.cljs$core$IFn$_invoke$arity$1(uniqify(metabase.lib.util.escape_and_truncate(database,s)));
});
var metabase$lib$util$unique_name_generator_$_unique_name_generator_fn__2 = (function (id,s){
return metabase.lib.util.truncate_alias.cljs$core$IFn$_invoke$arity$1(uniqify(id,metabase.lib.util.escape_and_truncate(database,s)));
});
metabase$lib$util$unique_name_generator_$_unique_name_generator_fn = function(id,s){
switch(arguments.length){
case 1:
return metabase$lib$util$unique_name_generator_$_unique_name_generator_fn__1.call(this,id);
case 2:
return metabase$lib$util$unique_name_generator_$_unique_name_generator_fn__2.call(this,id,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$util$unique_name_generator_$_unique_name_generator_fn.cljs$core$IFn$_invoke$arity$1 = metabase$lib$util$unique_name_generator_$_unique_name_generator_fn__1;
metabase$lib$util$unique_name_generator_$_unique_name_generator_fn.cljs$core$IFn$_invoke$arity$2 = metabase$lib$util$unique_name_generator_$_unique_name_generator_fn__2;
return metabase$lib$util$unique_name_generator_$_unique_name_generator_fn;
})()
});
var metabase$lib$util$unique_name_generator__2 = (function (metadata_provider,existing_names){
var f = (metabase.lib.util.unique_name_generator.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.util.unique_name_generator.cljs$core$IFn$_invoke$arity$1(metadata_provider) : metabase.lib.util.unique_name_generator.call(null,metadata_provider));
var seq__76542_76700 = cljs.core.seq(existing_names);
var chunk__76543_76701 = null;
var count__76544_76702 = (0);
var i__76545_76703 = (0);
while(true){
if((i__76545_76703 < count__76544_76702)){
var existing_76704 = chunk__76543_76701.cljs$core$IIndexed$_nth$arity$2(null,i__76545_76703);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(existing_76704) : f.call(null,existing_76704));


var G__76706 = seq__76542_76700;
var G__76707 = chunk__76543_76701;
var G__76708 = count__76544_76702;
var G__76709 = (i__76545_76703 + (1));
seq__76542_76700 = G__76706;
chunk__76543_76701 = G__76707;
count__76544_76702 = G__76708;
i__76545_76703 = G__76709;
continue;
} else {
var temp__5804__auto___76710 = cljs.core.seq(seq__76542_76700);
if(temp__5804__auto___76710){
var seq__76542_76711__$1 = temp__5804__auto___76710;
if(cljs.core.chunked_seq_QMARK_(seq__76542_76711__$1)){
var c__5525__auto___76712 = cljs.core.chunk_first(seq__76542_76711__$1);
var G__76713 = cljs.core.chunk_rest(seq__76542_76711__$1);
var G__76714 = c__5525__auto___76712;
var G__76715 = cljs.core.count(c__5525__auto___76712);
var G__76716 = (0);
seq__76542_76700 = G__76713;
chunk__76543_76701 = G__76714;
count__76544_76702 = G__76715;
i__76545_76703 = G__76716;
continue;
} else {
var existing_76717 = cljs.core.first(seq__76542_76711__$1);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(existing_76717) : f.call(null,existing_76717));


var G__76718 = cljs.core.next(seq__76542_76711__$1);
var G__76719 = null;
var G__76720 = (0);
var G__76721 = (0);
seq__76542_76700 = G__76718;
chunk__76543_76701 = G__76719;
count__76544_76702 = G__76720;
i__76545_76703 = G__76721;
continue;
}
} else {
}
}
break;
}

return f;
});
metabase$lib$util$unique_name_generator = function(metadata_provider,existing_names){
switch(arguments.length){
case 1:
return metabase$lib$util$unique_name_generator__1.call(this,metadata_provider);
case 2:
return metabase$lib$util$unique_name_generator__2.call(this,metadata_provider,existing_names);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$util$unique_name_generator.cljs$core$IFn$_invoke$arity$1 = metabase$lib$util$unique_name_generator__1;
metabase$lib$util$unique_name_generator.cljs$core$IFn$_invoke$arity$2 = metabase$lib$util$unique_name_generator__2;
return metabase$lib$util$unique_name_generator;
})()
;
metabase.lib.util.strip_id_regex = (new RegExp(" id$","i"));
/**
 * Inputs: [display-name :- :string]
 *   Return: :string
 *        
 * 
 *   Given a display name string like "Product ID", this will drop the trailing "ID" and trim whitespace.
 *   Used to turn a FK field's name into a pseudo table name when implicitly joining.
 */
metabase.lib.util.strip_id = (function metabase$lib$util$strip_id(display_name){
return clojure.string.trim(clojure.string.replace(display_name,metabase.lib.util.strip_id_regex,""));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int location :- [:enum :breakout :aggregation] a-summary-clause]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   If the given stage has no summary, it will drop :fields, :order-by, and :join :fields from it,
 * as well as any subsequent stages.
 */
metabase.lib.util.add_summary_clause = (function metabase$lib$util$add_summary_clause(query,stage_number,location,a_summary_clause){
var query__$1 = metabase.lib.util.pipeline(query);
var stage_number__$1 = (function (){var or__5002__auto__ = stage_number;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (-1);
}
})();
var stage = metabase.lib.util.query_stage(query__$1,stage_number__$1);
var new_summary_QMARK_ = (!(((cljs.core.seq(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(stage))) || (cljs.core.seq(new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(stage))))));
var new_query = metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query__$1,stage_number__$1,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([location,(function (summary_clauses){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(summary_clauses),metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(a_summary_clause));
})], 0));
if(new_summary_QMARK_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(metabase.lib.util.update_query_stage(new_query,stage_number__$1,(function (stage__$1){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(stage__$1,new cljs.core.Keyword(null,"order-by","order-by",1527318070),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230)], 0)),new cljs.core.Keyword(null,"joins","joins",1033962699),(function (joins){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__76562_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__76562_SHARP_,new cljs.core.Keyword(null,"fields","fields",-1932066230));
}),joins);
}));
})),new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__76563_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,p1__76563_SHARP_);
}),cljs.core.subvec),(0),(metabase.lib.util.canonical_stage_index(query__$1,stage_number__$1) + (1)));
} else {
return new_query;
}
});
/**
 * Recursively replace all the :lib/uuids in `x` with fresh ones. Useful if you need to attach something to a query more
 *   than once.
 */
metabase.lib.util.fresh_uuids = (function metabase$lib$util$fresh_uuids(var_args){
var G__76582 = arguments.length;
switch (G__76582) {
case 1:
return metabase.lib.util.fresh_uuids.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.util.fresh_uuids.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.util.fresh_uuids.cljs$core$IFn$_invoke$arity$1 = (function (x){
return metabase.lib.util.fresh_uuids.cljs$core$IFn$_invoke$arity$2(x,cljs.core.constantly(null));
}));

(metabase.lib.util.fresh_uuids.cljs$core$IFn$_invoke$arity$2 = (function (x,register_fn){
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(x),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__76576_SHARP_){
return metabase.lib.util.fresh_uuids.cljs$core$IFn$_invoke$arity$2(p1__76576_SHARP_,register_fn);
})),x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(x),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__76591){
var vec__76592 = p__76591;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76592,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76592,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720)))?(function (){var new_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
(register_fn.cljs$core$IFn$_invoke$arity$2 ? register_fn.cljs$core$IFn$_invoke$arity$2(v,new_id) : register_fn.call(null,v,new_id));

return new_id;
})():metabase.lib.util.fresh_uuids.cljs$core$IFn$_invoke$arity$2(v,register_fn))], null);
})),x);
} else {
return x;

}
}
}));

(metabase.lib.util.fresh_uuids.cljs$lang$maxFixedArity = 2);

metabase.lib.util.replace_uuid_references = (function metabase$lib$util$replace_uuid_references(x,replacement_map){
var replacement = cljs.core.find(replacement_map,x);
if(cljs.core.truth_(replacement)){
return cljs.core.val(replacement);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(x),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__76596_SHARP_){
return (metabase.lib.util.replace_uuid_references.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.util.replace_uuid_references.cljs$core$IFn$_invoke$arity$2(p1__76596_SHARP_,replacement_map) : metabase.lib.util.replace_uuid_references.call(null,p1__76596_SHARP_,replacement_map));
})),x);
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(x),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__76601){
var vec__76604 = p__76601;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76604,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76604,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__76607 = v;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720))){
return (metabase.lib.util.replace_uuid_references.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.util.replace_uuid_references.cljs$core$IFn$_invoke$arity$2(G__76607,replacement_map) : metabase.lib.util.replace_uuid_references.call(null,G__76607,replacement_map));
} else {
return G__76607;
}
})()], null);
})),x);
} else {
return x;

}
}
}
});
/**
 * Create an copy of `query` with fresh :lib/uuid values making sure that internal
 *   uuid references are kept.
 */
metabase.lib.util.fresh_query_instance = (function metabase$lib$util$fresh_query_instance(query){
var v_replacement = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
var almost_query = metabase.lib.util.fresh_uuids.cljs$core$IFn$_invoke$arity$2(query,(function (p1__76609_SHARP_,p2__76610_SHARP_){
return v_replacement.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v_replacement.cljs$core$IDeref$_deref$arity$1(null),p1__76609_SHARP_,p2__76610_SHARP_));
}));
var replacement = cljs.core.persistent_BANG_(cljs.core.deref(v_replacement));
return metabase.lib.util.replace_uuid_references(almost_query,replacement);
});
/**
 * Inputs: [query :- [:maybe :map]]
 *   Return: [:maybe [:enum :mbql/query :query :native :internal]]
 *        
 * 
 *   Get the `:lib/type` or `:type` from `query`, even if it is not-yet normalized.
 */
metabase.lib.util.normalized_query_type = (function metabase$lib$util$normalized_query_type(query){
if(cljs.core.map_QMARK_(query)){
var temp__5804__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__76614_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,p1__76614_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword(null,"type","type",1174270348),"lib/type","type"], null)));
if(cljs.core.truth_(temp__5804__auto__)){
var query_type = temp__5804__auto__;
if(cljs.core.truth_((function (){var fexpr__76619 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),null,new cljs.core.Keyword(null,"internal","internal",-854870097),null,new cljs.core.Keyword(null,"native","native",-613060878),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null);
return (fexpr__76619.cljs$core$IFn$_invoke$arity$1 ? fexpr__76619.cljs$core$IFn$_invoke$arity$1(query_type) : fexpr__76619.call(null,query_type));
})())){
return query_type;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [coll]
 *   Return: [:maybe [:set :metabase.lib.schema.id/field]]
 *        
 * 
 *   Find all the integer field IDs in `coll`, Which can arbitrarily be anything that is part of MLv2 query schema.
 */
metabase.lib.util.referenced_field_ids = (function metabase$lib$util$referenced_field_ids(coll){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cat,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_)),cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$util$referenced_field_ids_$_match_76623(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__76628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76628,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_2__76630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.int_QMARK_(_AMPERSAND_match_2__76630)){
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"source-field","source-field",933829534).cljs$core$IFn$_invoke$arity$1(opts)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76637){if((e76637 instanceof Error)){
var e__46214__auto__ = e76637;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76637;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76636){if((e76636 instanceof Error)){
var e__46214__auto__ = e76636;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76636;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76631){if((e76631 instanceof Error)){
var e__46214__auto__ = e76631;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$util$referenced_field_ids_$_match_76623,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e76631;

}
}})(cljs.core.PersistentVector.EMPTY,coll)))));
});
/**
 * Return sequence of source tables from `query`.
 */
metabase.lib.util.collect_source_tables = (function metabase$lib$util$collect_source_tables(query){
var from_joins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.util.collect_source_tables,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(query)], 0));
var temp__5802__auto__ = new cljs.core.Keyword(null,"source-query","source-query",198004422).cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5802__auto__)){
var source_query = temp__5802__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((metabase.lib.util.collect_source_tables.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.util.collect_source_tables.cljs$core$IFn$_invoke$arity$1(source_query) : metabase.lib.util.collect_source_tables.call(null,source_query)),from_joins);
} else {
var G__76638 = from_joins;
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(query))){
return cljs.core.cons(new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(query),G__76638);
} else {
return G__76638;
}
}
});

//# sourceMappingURL=metabase.lib.util.js.map
